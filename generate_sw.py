import os
import json

# --- KONFIGURATION ---

# Version
VERSION = "v8"  # Erhöhe diese Version bei jeder Änderung, damit der Service Worker aktualisiert wird

# Pfade relativ zum Skript-Standort
BASE_DIR = "." 
# Ordner, deren gesamter Inhalt gecacht werden soll
DIRECTORIES_TO_SCAN = [
    "js",
    "images",
    "artwork"
]
# Einzelne Dateien (z.B. die App-Shell)
EXTRA_FILES = [
    "index.html",
    "745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html"
]
OUTPUT_FILE = "sw.js"
CACHE_NAME = f"julia-site-{VERSION}" # Präfix für die Filter-Logik beachten

def generate_service_worker():
    assets = set(EXTRA_FILES)

    # Scanne Verzeichnisse
    for directory in DIRECTORIES_TO_SCAN:
        full_path = os.path.join(BASE_DIR, directory)
        if os.path.exists(full_path):
            for root, _, files in os.walk(full_path):
                for file in files:
                    # Ignoriere versteckte Dateien (wie .DS_Store)
                    if not file.startswith('.'):
                        # Erstelle relativen Pfad für den Browser
                        rel_dir = os.path.relpath(root, BASE_DIR)
                        clean_path = os.path.join(rel_dir, file).replace("\\", "/")
                        # Entferne führende "./" falls vorhanden
                        if clean_path.startswith("./"):
                            clean_path = clean_path[2:]
                        assets.add(clean_path)

    # Sortiere Assets für die Lesbarkeit
    asset_list = sorted(list(assets))
    
    # Formatiere die Liste für JS (untereinander schreiben)
    formatted_assets = json.dumps(asset_list, indent=4)
    
    # Baue den Inhalt der sw.js
    sw_content = f"""const STATIC_CACHE = '{CACHE_NAME}';

// Synchronisierte Neural App Shell Assets
const ASSETS = {formatted_assets};

// Installation: Assets in den Cache laden
self.addEventListener('install', event => {{
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {{
            console.log('SYSTEM: Neural App Shell synchronizing...');
            return cache.addAll(ASSETS);
        }})
    );
}});

// Aktivierung: Alte Caches aufräumen
self.addEventListener('activate', event => {{
    event.waitUntil(
        caches.keys().then(keys => {{
            return Promise.all(
                keys.filter(key => key !== STATIC_CACHE && key.startsWith('julia-site-'))
                    .map(key => caches.delete(key))
            );
        }})
    );
}});

// Nachrichten-Listener: Sofort aktivieren bei Update
self.addEventListener('message', (event) => {{
    if (event.data === 'SKIP_WAITING') {{
        self.skipWaiting();
    }}
}});

// Fetch-Interception: Cache-First Strategie
self.addEventListener('fetch', event => {{
    // Musik-Streaming (R2) ignorieren (wird durch SongService/Main.js geregelt)
    if (event.request.url.includes('music.juliamccarren.com')) return;

    event.respondWith(
        caches.match(event.request).then(response => {{
            return response || fetch(event.request);
        }})
    );
}});
"""

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(sw_content)
    
    print(f"SUCCESS: {OUTPUT_FILE} mit {len(asset_list)} Assets generiert (formatiert).")

if __name__ == "__main__":
    generate_service_worker()