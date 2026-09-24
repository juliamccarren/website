// --- SONG COLLECTION CLASS ---
class SongCollection {

    /**
     * @param {string} containerId - ID des HTML-Grids
     * @param {Object} config - Individuelle Regeln für diese Liste
     */
    constructor(containerId, config = {}) {
        this.container = document.getElementById(containerId);
        this.songs = [];
        
        // NEU: State Flags für den Director
        this.config = {
            autoplay: config.autoplay ?? true,
            moderation: config.moderation ?? false,
            repeat: config.repeat ?? false,
            allowServices: config.allowServices ?? false
        };
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

    render() {
        if (!this.container) return;
        
        // Sanfter Übergang: Container kurz ausblenden
        this.container.classList.add('opacity-0');
        
        setTimeout(() => {
            this.container.innerHTML = '';
            this.container.classList.remove('opacity-0');

            this.songs.forEach((song, index) => {
                const card = document.createElement('div');
                // Die Karte selbst bleibt transparent, damit der Glow austreten kann
                card.className = 'group relative bg-transparent p-8 rounded-3xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4';
                card.style.animationDelay = `${index * 50}ms`;
                
                const statusId = `cache-status-${this.container.id}-${song.id}`;
                const artworkUrl = `../artwork/${song.id}.webp`;

                card.innerHTML = `
                    <div id="${statusId}" class="cache-status-edge cache-offline-edge" style="z-index: 1;"></div>

                    <div class="absolute inset-0 z-[2] overflow-hidden rounded-3xl border border-white/5 bg-neutral-900 group-hover:bg-neutral-900/80 transition-colors duration-500">
                        <div class="absolute inset-0 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 bg-cover bg-center" 
                            style="background-image: url('${artworkUrl}');">
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    </div>

                    <div class="relative z-[3]">
                        <h3 class="text-2xl font-black uppercase tracking-tight mb-3 text-white group-hover:text-fuchsia-500 transition-colors">
                            ${song.title}
                        </h3>
                        <p class="text-neutral-300 text-sm mb-8 line-clamp-2 font-medium">
                            ${song.background}
                        </p>
                        <button class="playback-trigger text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-fuchsia-500 hover:text-white transition-colors">
                            Neural Playback <i data-lucide="play-circle" size="14"></i>
                        </button>
                    </div>
                `;

                // Artwork-Validierung: Falls die Datei fehlt, wird der Hintergrund geleert
                const bgImage = card.querySelector('.bg-cover');
                const imgTester = new Image();
                imgTester.src = artworkUrl;
                imgTester.onerror = () => { if(bgImage) bgImage.style.backgroundImage = 'none'; };

                // Klick-Event für den Player
                card.querySelector('.playback-trigger').onclick = () => this.playSong(index);

                // Karte dem DOM hinzufügen
                this.container.appendChild(card);

                // Initialen Cache-Status prüfen und die richtige Glow-Farbe setzen
                this.updateCacheUIStatus(song.id, statusId);
            });  

            // Lucide Icons für die neuen Elemente initialisieren
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
    
    if (indicator) {
        if (response) {
            // Song ist im Cache -> GRÜN
            indicator.classList.remove('cache-offline-edge');
            indicator.classList.add('cache-online-edge');
        } else {
            // Song ist NICHT im Cache -> ROT (Standard-Backlight)
            indicator.classList.add('cache-offline-edge');
            indicator.classList.remove('cache-online-edge');
        }
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
     * Übergibt die Kontrolle an den Director statt direkt an den Player
     * @param {number} index - Der Index des angeklickten Songs
     */
    playSong(index) {
        // Scrollposition speichern (für deine Modal-Logik)
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (!this.songs[index]) {
            console.error("SYSTEM: Song at index " + index + " is undefined!");
            return;
        }
        console.log("SYSTEM: Playing song:", this.songs[index].id);        
        
        // WICHTIGSTE ÄNDERUNG: 
        // Wir melden uns beim Director als "aktive Liste" an.
        // Der Director übernimmt ab hier die Steuerung (Intros, Player-Start etc.)
        if (typeof director !== 'undefined') {
            director.setActiveCollection(this, index);

            // 2. WICHTIG: Die UI des Players sofort auf die Config dieser Collection syncen
            if (typeof player !== 'undefined') {
                player.syncUI();
            }            
            
            // Der Player wird nun über den Director gestartet
            player.playCurrent(); 
        } else {
            console.error("Director not initialized. Check your Main.js.");
        }
    }      
}    