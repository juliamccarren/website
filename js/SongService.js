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
        const url = `${R2_DOMAIN}${songId}.mp3`;
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(url);

        // Nur laden, wenn noch nicht vorhanden
        if (!cachedResponse) {
            try {
                await forceCacheSong(url);
                return true;
            } catch (e) {
                console.error(`Sync failed for ${songId}`, e);
                return false;
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