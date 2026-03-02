// --- SONG COLLECTION CLASS ---
class SongCollection {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.songs = [];
    }

    /**
     * Setzt die Songs der Kollektion und rendert sie.
     * @param {Array} songArray - Die bereits gefilterten/sortierten Song-Objekte
     */
    update(songArray) {
        this.songs = songArray;
        // this.preCacheSongs(); Separate method
        this.render();
    }

    /**
     * Übernimmt das Pre-Caching für Offline-Resilienz
     */
    // async preCacheSongs() {
    //     if (typeof forceCacheSong !== 'function') return;
                
    //     const songsToCache = Array.isArray(this.songs) ? this.songs : [this.songs];
    //     const indicator = document.getElementById('neural-stream-indicator');
        
    //     // if (indicator) {
    //     //     // Reset auf 0 und Sichtbarkeit erzwingen
    //     //     indicator.style.transition = 'none'; // Animation kurz aus für harten Reset
    //     //     indicator.style.width = '0%';
    //     //     indicator.classList.add('stream-active');
            
    //     //     // Kleiner Trick: Ein Frame warten, damit der Browser den Reset merkt
    //     //     requestAnimationFrame(() => {
    //     //         indicator.style.transition = 'opacity 0.4s ease, width 0.3s ease-out';
    //     //     });
    //     // }

    //     let completed = 0;
    //     for (const song of songsToCache) {
    //         if (song && song.id) {
    //             const url = `${R2_DOMAIN}${song.id}.mp3`;
    //             try {
    //                 await forceCacheSong(url);
    //                 this.updateCacheUIStatus(song.id, `cache-status-${song.id}`);
                    
    //                 // Fortschritt berechnen
    //                 completed++;
    //                 if (indicator) {
    //                     const progress = (completed / songsToCache.length) * 100;
    //                     indicator.style.width = `${progress}%`;
    //                 }
    //             } catch (err) {
    //                 console.warn(`Sync failed: ${song.title}`, err);
    //             }
    //         }
    //     }

    //     // Balken nach kurzem Delay ausfaden
    //     // setTimeout(() => {
    //     //     if (indicator) {
    //     //         indicator.classList.remove('stream-active');
    //     //         setTimeout(() => { indicator.style.width = '0%'; }, 800);
    //     //     }
    //     // }, 1000);
    // }

    /**
     * Erzeugt das HTML-Grid
     */
    render() {
        if (!this.container) return;

        this.container.classList.add('opacity-0');
        
        setTimeout(() => {
            this.container.innerHTML = '';
            this.container.classList.remove('opacity-0');

            this.songs.forEach((song, index) => {
                const card = document.createElement('div');
                // WICHTIG: relative hinzufügen, damit der Punkt oben rechts positioniert werden kann
                card.className = 'group relative bg-neutral-900/30 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900/60 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4';
                card.style.animationDelay = `${index * 50}ms`;
                
                // Wir hängen die Container-ID an, um Eindeutigkeit zu garantieren
                const statusId = `cache-status-${this.container.id}-${song.id}`;
                
                card.innerHTML = `
                    <div id="${statusId}" class="cache-status cache-offline"></div>
                    <h3 class="text-2xl font-black uppercase tracking-tight mb-3 text-white/90 group-hover:text-fuchsia-500 transition-colors">${song.title}</h3>
                    <p class="text-neutral-500 text-sm mb-8 line-clamp-2">${song.background}</p>
                    <button class="playback-trigger text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-fuchsia-500 hover:text-white transition-colors">
                        Neural Playback <i data-lucide="play-circle" size="14"></i>
                    </button>
                `;

                card.querySelector('.playback-trigger').onclick = () => this.playSong(index);
                this.container.appendChild(card);

                // Status prüfen
                this.updateCacheUIStatus(song.id, statusId);
            });

            if (window.lucide) lucide.createIcons();
        }, 150);
    }

    /**
     * Prüft den Cache-Status für ein spezifisches Element
     */
    async updateCacheUIStatus(songId, statusId) {
        const url = `${R2_DOMAIN}${songId}.mp3`;
        const cache = await caches.open(cacheName);
        const response = await cache.match(url);
        const indicator = document.getElementById(statusId);
        
        if (indicator && response) {
            indicator.classList.remove('cache-offline');
            indicator.classList.add('cache-online');
        }
    }    

    // // Neue Hilfsmethode zur Prüfung des Cache-Status
    // async updateCacheUIStatus(songId) {
    //     const url = `${R2_DOMAIN}${songId}.mp3`;
    //     const cache = await caches.open(cacheName);
    //     const response = await cache.match(url);
        
    //     // Wir suchen alle Status-Punkte auf der gesamten Seite, die zu dieser Song-ID gehören
    //     // Wir nutzen dafür ein Query-Selektor-Pattern
    //     const indicators = document.querySelectorAll(`[id$="-${songId}"]`);
        
    //     indicators.forEach(indicator => {
    //         if (response) {
    //             indicator.classList.remove('cache-offline', 'cache-syncing');
    //             indicator.classList.add('cache-online');
    //             indicator.title = "Neural Sync: Active";
    //         } else {
    //             // Wenn wir wissen, dass gerade ein Reshuffle/Sync läuft, 
    //             // könnten wir hier cache-syncing lassen, sonst rot.
    //             if (!indicator.classList.contains('cache-syncing')) {
    //                 indicator.classList.add('cache-offline');
    //             }
    //         }
    //     });
    // }

    /**
     * Passes the playlist and index to the global player instance
     * @param {number} index - The index of the clicked song
     */
    playSong(index) {
        // We save the current scroll position to restore it when the modal closes
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Use the global player instance to load and play
        player.loadTrack(this.songs, index);
    }         
}    