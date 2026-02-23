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
        this.preCacheSongs();
        this.render();
    }

    /**
     * Übernimmt das Pre-Caching für Offline-Resilienz
     */
    preCacheSongs() {
        if (typeof forceCacheSong !== 'function') return;
        // Sicherstellen, dass wir immer ein Array haben
        const songsToCache = Array.isArray(this.songs) ? this.songs : [this.songs];
        
        songsToCache.forEach(song => {
            if (song && song.id) {
                const url = `${R2_DOMAIN}${song.id}.mp3`;
                forceCacheSong(url).catch(err => 
                    console.warn(`Sync failed: ${song.title}`, err)
                );
            }
        });
    }

    /**
     * Erzeugt das HTML-Grid
     */
    render() {
        if (!this.container) return;

        // Kurzer Fade-out Effekt für geschmeidige Übergänge
        this.container.classList.add('opacity-0');
        
        setTimeout(() => {
            this.container.innerHTML = '';
            this.container.classList.remove('opacity-0');

            this.songs.forEach((song, index) => {
                const card = document.createElement('div');
                card.className = 'group bg-neutral-900/30 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900/60 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4';
                card.style.animationDelay = `${index * 50}ms`;
                
                card.innerHTML = `
                    <h3 class="text-2xl font-black uppercase tracking-tight mb-3 text-white/90 group-hover:text-fuchsia-500 transition-colors">${song.title}</h3>
                    <p class="text-neutral-500 text-sm mb-8 line-clamp-2">${song.background}</p>
                    <button class="playback-trigger text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-fuchsia-500 hover:text-white transition-colors">
                        Neural Playback <i data-lucide="play-circle" size="14"></i>
                    </button>
                `;

                // Event-Handling für den Play-Button
                card.querySelector('.playback-trigger').onclick = () => this.playSong(index);

                this.container.appendChild(card);
            });

            if (window.lucide) lucide.createIcons();
        }, 150);
    }

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