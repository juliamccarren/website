import os
import json
import shutil
import uuid
import glob

# --- KONFIGURATION ---
VERSION = "53" 
TARGET_DIR = f"v{VERSION}"
BASE_DIR = "." 

DIRECTORIES_TO_SCAN = [
    "js",
    "images",
    "artwork"
]

# Root-Dateien (landen im vXX Ordner für Versionierung)
EXTRA_FILES = [
    "index.html",
    "impressum.html",
    "legal_notice.html",
    "datenschutz.html",
    "privacy_policy.html",
    "manifest.json",
]

# Der spezielle Entry-Point (Switch), der im Root bleiben muss
ROOT_FILES = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js"
]

# Pfade, die in den Versionsordner kopiert werden
NESTED_FILES = [
    "745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "745596f4-2947-4d89-955f-f4148e07d22a/index.html"
]

OUTPUT_SW = "sw.js"
CACHE_NAME = f"julia-site-v{VERSION}"

def prepare_target_directory():
    """Löscht das Zielverzeichnis und alte Versions-Flags für einen sauberen Build."""
    if os.path.exists(TARGET_DIR):
        print(f"CLEANUP: {TARGET_DIR} wird gelöscht...")
        shutil.rmtree(TARGET_DIR)
    
    os.makedirs(TARGET_DIR)
    
    # Alte vXX.txt Flag-Dateien im Root löschen
    for old_flag in glob.glob("v*.txt"):
        os.remove(old_flag)
        print(f"CLEANUP: Alte Flag-Datei {old_flag} entfernt.")

def create_version_files():
    """Erstellt VersionCore.js lokal im js-Ordner."""
    build_info = {
        "number": VERSION,
        "hash": uuid.uuid4().hex[:6].upper()
    }
    
    js_content = f"""
class VersionCore {{
    static info = {json.dumps(build_info)};
    static get display() {{
        return `CORE_V${{this.info.number}} [${{this.info.hash}}]`;
    }}
}}
"""
    js_path = os.path.join(BASE_DIR, "js/VersionCore.js")
    os.makedirs(os.path.dirname(js_path), exist_ok=True)
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    # Flag-Datei im Root erstellen
    flag_file = f"v{VERSION}.txt"
    with open(flag_file, "w", encoding="utf-8") as f:
        f.write(f"Build: {build_info['hash']} - {VERSION}")
    
    print(f"SYSTEM: VersionCore.js und {flag_file} vorbereitet.")

def scan_assets():
    """Scannt Verzeichnisse für den SW-Cache."""
    local_assets = set(EXTRA_FILES + NESTED_FILES)
    for directory in DIRECTORIES_TO_SCAN:
        full_path = os.path.join(BASE_DIR, directory)
        if os.path.exists(full_path):
            for root, _, files in os.walk(full_path):
                for file in files:
                    if not file.startswith('.'):
                        rel_dir = os.path.relpath(root, BASE_DIR)
                        clean_path = os.path.join(rel_dir, file).replace("\\", "/")
                        if clean_path.startswith("./"):
                            clean_path = clean_path[2:]
                        local_assets.add(clean_path)
    return sorted(list(local_assets))

def deploy_assets(asset_list):
    """Kopiert Assets in vXX/ und gibt Pfade für SW zurück."""
    sw_assets = []
    
    # 1. Den Entry-Point (Switch) ohne vXX-Präfix zum SW hinzufügen
    for asset in ROOT_FILES:
        if os.path.exists(asset):
            sw_assets.append(asset)
    
    # 2. Alle anderen Assets in den Versionsordner schieben
    for asset in asset_list:
        source = os.path.join(BASE_DIR, asset)
        destination = os.path.join(TARGET_DIR, asset)
        
        os.makedirs(os.path.dirname(destination), exist_ok=True)
        
        if os.path.exists(source):
            shutil.copy2(source, destination)
            sw_assets.append(f"{TARGET_DIR}/{asset}")
        else:
            print(f"WARNUNG: {source} fehlt.")
            
    return sw_assets

def generate_service_worker(sw_assets):
    """Generiert die sw.js im Root."""
    formatted_assets = json.dumps(sw_assets, indent=4)
    
    sw_content = f"""const STATIC_CACHE = '{CACHE_NAME}';
const ASSETS = {formatted_assets};

self.addEventListener('install', event => {{
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {{
            console.log('SYSTEM: Syncing Build v{VERSION}...');
            return cache.addAll(ASSETS);
        }})
    );
}});

self.addEventListener('activate', event => {{
    event.waitUntil(
        caches.keys().then(keys => {{
            return Promise.all(
                keys.filter(key => key !== STATIC_CACHE && key.startsWith('julia-site-v'))
                    .map(key => caches.delete(key))
            );
        }})
    );
}});

self.addEventListener('fetch', event => {{
    if (event.request.url.includes('music.juliamccarren.com')) return;
    event.respondWith(
        caches.match(event.request).then(response => {{
            return response || fetch(event.request);
        }})
    );
}});

self.addEventListener('message', (event) => {{
    if (event.data === 'SKIP_WAITING') {{
        self.skipWaiting();
    }}
}});
"""
    with open(OUTPUT_SW, "w", encoding="utf-8") as f:
        f.write(sw_content)
    print(f"SUCCESS: {OUTPUT_SW} aktualisiert.")

if __name__ == "__main__":
    print(f"--- START BUILD v{VERSION} ---")
    prepare_target_directory()
    create_version_files()
    
    assets_to_deploy = scan_assets()
    sw_final_paths = deploy_assets(assets_to_deploy)
    
    generate_service_worker(sw_final_paths)
    print(f"--- BUILD COMPLETED: v{VERSION} bereit ---")