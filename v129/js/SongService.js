/// --- SONG SERVICE CLASS ---
class SongService {
    constructor(url = 'songs.json') {
        this.url = url;
        this.cache = null;
    }

    /**
     * Caches a single song by its ID, if not already cached
     */
    async cacheSong(songId) {
        const cache = await caches.open(cacheName);
        const baseUrl = typeof R2_DOMAIN !== 'undefined' ? R2_DOMAIN : '';
        
        // Pfade definieren
        const urlMain = `${baseUrl}${songId}.mp3`;
        const urlIntro = `${baseUrl}intro/${songId}_intro.mp3`;

        // 1. Hauptsong cachen
        const cachedMain = await cache.match(urlMain);
        if (!cachedMain) {
            try {
                await forceCacheSong(urlMain);
                console.log(`Sync: Main Song ${songId}`);
            } catch (e) {
                console.error(`Sync failed for main ${songId}`, e);
            }
        }

        // 2. Intro cachen (WICHTIG: Kein vorzeitiges Return!)
        const cachedIntro = await cache.match(urlIntro);
        if (!cachedIntro) {
            try {
                // Wir prüfen kurz per HEAD, ob ein Intro existiert, bevor wir forceCacheSong rufen
                const check = await fetch(urlIntro, { method: 'HEAD' });
                if (check.ok) {
                    await forceCacheSong(urlIntro);
                    console.log(`Sync: Intro for ${songId}`);
                }
            } catch (e) {
                // Intro optional: Wenn keins da ist, ist das kein harter Fehler
                console.log(`No intro file found for ${songId}, skipping intro cache.`);
            }
        }
        
        return true;
    }
    
    /**
     * Purges the cache
     */
    async purgeCache() {
        try {
            const deleted = await caches.delete(cacheName);
            this.cache = null;

            if (deleted) {
                // Den Balken kurz als "Reset" aufblitzen lassen
                const indicator = document.getElementById('neural-stream-indicator');
                if (indicator) {
                    indicator.style.width = '100%';
                    indicator.classList.add('stream-active');
                    setTimeout(() => {
                        indicator.classList.remove('stream-active');
                        setTimeout(() => { indicator.style.width = '0%'; }, 400);
                    }, 300);
                }
                return true;
            }
        } catch (error) {
            console.error("Purge Error:", error);
        }
        return false;
    }  

    /**
     * Lädt alle Songs und speichert sie im internen Cache
     */
    async getAll() {
        if (this.cache) return this.cache;
        
        try {
            const response = await fetch(this.url);
            if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
            this.cache = await response.json();
            
            // SEO Daten einmalig injizieren, falls vorhanden
            if (typeof injectSEOData === 'function') injectSEOData(this.cache);
            
            return this.cache;
        } catch (error) {
            console.error('SongService Error:', error);
            return [];
        }
    }

    /**
     * Gibt eine zufällige Auswahl an Songs zurück
     */
    async getRandom(limit) {
        const songs = await this.getAll();
        return [...songs]
            .sort(() => 0.5 - Math.random())
            .slice(0, limit);
    }

    /**
     * Sucht einen spezifischen Song anhand der ID
     */
    async getById(id) {
        const songs = await this.getAll();
        return songs.filter(s => s.id === id);
    }
}   