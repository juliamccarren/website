import os
import json
from datetime import datetime
import uuid

# --- KONFIGURATION ---

# Eine einzige, fortlaufende Nummer für Cache und Anzeige
VERSION = "14" 

# Pfade relativ zum Skript-Standort
BASE_DIR = "." 
DIRECTORIES_TO_SCAN = [
    "js",
    "images",
    "artwork"
]
EXTRA_FILES = [
    "index.html",
    "impressum.html",
    "legal_notice.html",
    "datenschutz.html",
    "privacy_policy.html",
    "manifest.json",
    "version.json", # Wird mitgeneriert
    "745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html"
]

OUTPUT_SW = "sw.js"
OUTPUT_VERSION = "version.json"
CACHE_NAME = f"julia-site-v{VERSION}"

def generate_assets():
    # 1. version.json erstellen
    build_data = {
        "version": VERSION,
        "hash": uuid.uuid4().hex[:6].upper(), # Kurzer technischer Fingerabdruck
    }
    
    with open(OUTPUT_VERSION, "w", encoding="utf-8") as f:
        json.dump(build_data, f, indent=4)
    print(f"CORE: {OUTPUT_VERSION} (v{VERSION}) generiert.")

    # 2. Asset-Liste für Service Worker scannen
    assets = set(EXTRA_FILES)
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
                        assets.add(clean_path)
    return sorted(list(assets))

def generate_service_worker(asset_list):
    formatted_assets = json.dumps(asset_list, indent=4)
    
    sw_content = f"""const STATIC_CACHE = '{CACHE_NAME}';
const ASSETS = {formatted_assets};

self.addEventListener('install', event => {{
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {{
            console.log('SYSTEM: Neural App Shell v{VERSION} syncing...');
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
            return response || fetch(event.request);
        }})
    );
}});
"""
    with open(OUTPUT_SW, "w", encoding="utf-8") as f:
        f.write(sw_content)
    print(f"SUCCESS: {OUTPUT_SW} (Cache: {CACHE_NAME}) mit {len(asset_list)} Assets erstellt.")

if __name__ == "__main__":
    assets = generate_assets()
    generate_service_worker(assets)