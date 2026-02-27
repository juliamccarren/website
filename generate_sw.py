import os
import json
import shutil
import uuid

# --- KONFIGURATION ---

VERSION = "27" 
TARGET_DIR = f"v{VERSION}"
BASE_DIR = "." 

DIRECTORIES_TO_SCAN = [
    "js",
    "images",
    "artwork"
]

# Diese Dateien liegen im Root und werden IN den Versionsordner kopiert
EXTRA_FILES = [
    "index.html",
    "impressum.html",
    "legal_notice.html",
    "datenschutz.html",
    "privacy_policy.html",
    "manifest.json",
]

# Pfade, die bereits eine Unterstruktur haben (werden entsprechend übernommen)
NESTED_FILES = [
    "745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "745596f4-2947-4d89-955f-f4148e07d22a/index.html"
]

OUTPUT_SW = "sw.js"
CACHE_NAME = f"julia-site-v{VERSION}"

def prepare_target_directory():
    """Löscht das Zielverzeichnis, falls vorhanden, und erstellt es neu für einen sauberen Build."""
    if os.path.exists(TARGET_DIR):
        print(f"CLEANUP: Zielverzeichnis {TARGET_DIR} wird für einen konsistenten Build gelöscht...")
        # Wir nutzen onerror, um sicherzustellen, dass auch schreibgeschützte Dateien entfernt werden
        shutil.rmtree(TARGET_DIR)
    
    os.makedirs(TARGET_DIR)
    print(f"SYSTEM: Verzeichnis {TARGET_DIR} frisch bereitgestellt.")

def scan_assets():
    """Scannt alle Verzeichnisse und gibt eine Liste der lokalen Pfade zurück."""
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

def deploy_and_prefix_assets(asset_list):
    """Kopiert Dateien in den vXX Ordner und gibt die Pfade für den SW zurück (mit Präfix)."""
    sw_assets = []
    
    for asset in asset_list:
        source = os.path.join(BASE_DIR, asset)
        destination = os.path.join(TARGET_DIR, asset)
        
        # Zielverzeichnis erstellen falls es Unterordner gibt
        os.makedirs(os.path.dirname(destination), exist_ok=True)
        
        if os.path.exists(source):
            shutil.copy2(source, destination)
            # Für den Service Worker muss der Pfad mit dem vXX/ Präfix starten
            sw_assets.append(f"{TARGET_DIR}/{asset}")
        else:
            print(f"FEHLER: Datei nicht gefunden: {source}")
            
    return sw_assets

def generate_service_worker(sw_assets):
    """Erstellt die sw.js im Root, die auf die Dateien im Unterordner zeigt."""
    formatted_assets = json.dumps(sw_assets, indent=4)
    
    sw_content = f"""const STATIC_CACHE = '{CACHE_NAME}';
const ASSETS = {formatted_assets};

// Service Worker im Root steuert alle Unterverzeichnisse
self.addEventListener('install', event => {{
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {{
            console.log('SYSTEM: Neural App Shell v{VERSION} syncing into isolation...');
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

self.addEventListener('message', (event) => {{
    if (event.data === 'SKIP_WAITING') {{
        self.skipWaiting();
    }}
}});

self.addEventListener('fetch', event => {{
    if (event.request.url.includes('music.juliamccarren.com')) return;
    event.respondWith(
        caches.match(event.request).then(response => {{
            // Offline-First Strategie
            return response || fetch(event.request);
        }})
    );
}});
"""
    with open(OUTPUT_SW, "w", encoding="utf-8") as f:
        f.write(sw_content)
    print(f"SUCCESS: {OUTPUT_SW} im Root erstellt.")

def create_version_files():
    """Erstellt VersionCore.js und die Flag-Datei vXX.txt."""
    build_info = {
        "number": VERSION,
        "hash": uuid.uuid4().hex[:6].upper()
    }
    
    # 1. VersionCore.js für die App-Logik (wird in den vXX Ordner kopiert)
    js_content = f"""
class VersionCore {{
    static info = {json.dumps(build_info)};
    static get display() {{
        return `CORE_V${{this.info.number}} [${{this.info.hash}}]`;
    }}
}}
"""
    # Zuerst lokal erstellen
    js_path = os.path.join(BASE_DIR, "js/VersionCore.js")
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    
    # Dann in den Zielordner kopieren (da scan_assets evtl. schon durch ist)
    target_js_path = os.path.join(TARGET_DIR, "js/VersionCore.js")
    os.makedirs(os.path.dirname(target_js_path), exist_ok=True)
    shutil.copy2(js_path, target_js_path)

    # 2. Flag-Datei vXX.txt für den versionswitch im Root
    flag_file = f"v{VERSION}.txt"
    with open(flag_file, "w", encoding="utf-8") as f:
        f.write(f"Build: {build_info['hash']} - {VERSION}")
    
    print(f"SYSTEM: Flag-Datei {flag_file} und VersionCore.js erstellt.")

if __name__ == "__main__":
    print(f"--- START BUILD v{VERSION} ---")
    
    # 1. Verzeichnis vorbereiten (Löschen falls vorhanden)
    prepare_target_directory()
    
    # 2. Assets identifizieren
    local_assets = scan_assets()
    
    # 3. Assets kopieren und Pfade für SW präfixen (v26/...)
    sw_assets = deploy_and_prefix_assets(local_assets)
    
    # 4. SW und Versionierung finalisieren
    generate_service_worker(sw_assets)
    create_version_files()
    
    print(f"--- BUILD COMPLETED: v{VERSION} ist isoliert bereit ---")