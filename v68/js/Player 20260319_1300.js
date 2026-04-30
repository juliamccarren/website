/**
 * NeuralPlayer handles the entire audio lifecycle, 
 * including playback control, playlist management, 
 * MediaSession API, and UI synchronization.
 */
class NeuralPlayer {
    constructor() {
        // Core Audio Engine
        this.audio = new Audio();
        
        // State Management
        this.isPlaying = false;
        this.isAutoplay = true;
        this.isRepeating = false;
        this.isLoading = false; // NEU: Verhindert UI-Fehler während des Ladens
        this.isIntroActive = false; // NEU: Unterdrückt UI-Updates während Intros
        this.isModerationActive = false;
        this.currentPlaylist = [];
        this.currentIndex = -1;

        // UI Elements
        this.playBtn = document.getElementById('play-btn');
        this.seekSlider = document.getElementById('seek-slider');
        this.currentTimeEl = document.getElementById('current-time');
        this.durationEl = document.getElementById('duration');
        this.playerStatus = document.getElementById('player-status');
        this.playerPane = document.getElementById('player-pane');
        
        // Icons
        this.playIcon = `<i data-lucide="play" size="24" class="fill-current ml-1"></i>`;
        this.pauseIcon = `<i data-lucide="pause" size="24" class="fill-current"></i>`;

        this.initEventListeners();
    }

    /**
     * Set up internal audio and UI event listeners
     */
    initEventListeners() {
        // Audio Logic Events
        this.audio.addEventListener('timeupdate', () => this.handleTimeUpdate());
        this.audio.addEventListener('loadedmetadata', () => this.handleMetadataLoaded());
        this.audio.addEventListener('ended', () => this.handleTrackEnded());
        this.audio.addEventListener('error', (e) => this.handleError(e));

        // Interaction Events
        if (this.playBtn) {
            this.playBtn.addEventListener('click', () => this.toggle());
        }

        if (this.seekSlider) {
            this.seekSlider.addEventListener('input', () => this.onSeekInput());
            this.seekSlider.addEventListener('change', () => this.onSeekChange());
        }
    }

    /**
     * Loads a new playlist and starts a specific track
     * @param {Array} songs - Array of song objects
     * @param {number} index - Index to start from
     */
    async loadTrack(songs, index) {
        // 1. Initialer Reset
        this.stopAll(); 
        this.isLoading = true; // Wieder scharf schalten für diesen neuen Task
        
        this.currentPlaylist = songs;
        this.currentIndex = index;
        const song = this.currentPlaylist[index];
        if (!song) return;

        // 2. Session Vorbereiten (Artwork & Modal)
        this.prepareSession(song);

        // 3. Intro Phase
        if (this.isModerationActive) {
            await this.playIntro(song);
        }

        // --- SICHERHEITS-CHECK ---
        // Falls stopAll() während des Intros gerufen wurde (Modal geschlossen)
        if (!this.isLoading) return;

        // 4. Hauptsong Phase
        try {
            await this.playMainSong(song);
        } catch (err) {
            // Nur Fehler loggen, wenn nicht absichtlich abgebrochen
            if (this.isLoading) this.handleError(err);
        }
    }

    /**
     * Starts playback and updates visual states
     */
    play() {
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayStateUI(true);
        }).catch(err => console.error("Playback failed:", err));
    }

    /**
     * Pauses playback and resets visual states
     */
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayStateUI(false);
    }

    toggle() {
        if (this.audio.paused) this.play();
        else this.pause();
    }

    next() {
        // Verhindert, dass während eines laufenden Ladevorgangs/Intros geskippt wird
        if (this.isLoading) return;
        
        let index = this.currentIndex + 1;
        if (index >= this.currentPlaylist.length) index = 0;
        this.loadTrack(this.currentPlaylist, index);
    }

    previous() {
        // Verhindert, dass während eines laufenden Ladevorgangs/Intros geskippt wird
        if (this.isLoading) return;

        if (this.currentPlaylist.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + this.currentPlaylist.length) % this.currentPlaylist.length;
        this.loadTrack(this.currentPlaylist, this.currentIndex);
    }

    /**
     * Logic for when a track reaches its end
     */
    handleTrackEnded() {
        console.log("SYSTEM: Track ended. Checking playback rules...");

        if (this.isRepeating) {
            // REPEAT hat Vorrang: Song von vorne starten
            this.audio.currentTime = 0;
            this.play();
            console.log("SYSTEM: Repeating current track.");
        } else if (this.isAutoplay) {
            // AUTOPLAY: Nächsten Song aus der Liste laden
            console.log("SYSTEM: Autoplay active. Shifting to next track.");
            this.next();
        } else {
            // Keines von beiden: Stop
            this.pause();
            console.log("SYSTEM: Playback stopped.");
        }
    }

    /**
    * Updates toggle UI states for Repeat and Autoplay buttons
    */
    syncUI() {
        const repeatBtn = document.getElementById('repeat-btn');
        const moderationBtn = document.getElementById('moderation-btn');
        const autoplayBtn = document.getElementById('autoplay-toggle');

        if (repeatBtn) {
            repeatBtn.classList.toggle('text-fuchsia-500', this.isRepeating);
            repeatBtn.classList.toggle('text-neutral-500', !this.isRepeating);
        }

        if (moderationBtn) {
            moderationBtn.classList.toggle('text-fuchsia-500', this.isModerationActive);
            moderationBtn.classList.toggle('text-neutral-500', !this.isModerationActive);
        }        

        if (autoplayBtn) {
            autoplayBtn.classList.toggle('text-blue-400', this.isAutoplay);
            autoplayBtn.classList.toggle('text-neutral-500', !this.isAutoplay);
        }
    }    

    /**
     * Updates the seek slider and timestamps during playback
     */
    handleTimeUpdate() {
        if (this.audio.duration) {
            const progress = (this.audio.currentTime / this.audio.duration) * 100;
            if (this.seekSlider) {
                this.seekSlider.value = progress;
                // Update CSS variable for the custom track gradient
                this.seekSlider.style.setProperty('--progress', `${progress}%`);
            }
            if (this.currentTimeEl) {
                this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
            }

            // Update position in mediaplayer
            this.updatePlaybackPosition();
        }
    }

    handleMetadataLoaded() {
        if (this.durationEl) {
            this.durationEl.textContent = this.formatTime(this.audio.duration);
        }

        this.updatePlaybackPosition();
    }

    /**
     * Updates the OS-level player (Lock screen / Media controls)
     * Optimized for absolute URL resolution to support Automotive Displays.
     */
    async updateMediaSession(song) {
        if ('mediaSession' in navigator) {
            this.updatePlaybackPosition();

            // Erzeuge absolute URLs, da Auto-Systeme relative Pfade oft nicht auflösen können
            const specificArtworkUrl = new URL(`../artwork/${song.id}.webp`, window.location.href).href;
            const fallbackUrl = new URL('../images/Hero_square.webp', window.location.href).href;
            
            let finalArtworkUrl = fallbackUrl;

            try {
                // Prüfen, ob das spezifische Bild existiert
                const response = await fetch(specificArtworkUrl, { method: 'HEAD' });
                if (response.ok) {
                    finalArtworkUrl = specificArtworkUrl;
                }
            } catch (e) {
                console.warn("Artwork für MediaSession nicht gefunden, nutze Fallback:", e);
            }

            // Metadaten an das Betriebssystem/Auto übergeben
            navigator.mediaSession.metadata = new MediaMetadata({
                title: song.title,
                artist: 'Julia McCarren',
                album: 'Neural Fusion Sound',
                artwork: [
                    { 
                        src: finalArtworkUrl, 
                        sizes: '512x512', 
                        type: 'image/webp' 
                    }
                ]
            });

            // Handler für die Steuerung (Hardware-Tasten / Auto-Display)
            navigator.mediaSession.setActionHandler('play', () => this.play());
            navigator.mediaSession.setActionHandler('pause', () => this.pause());
            navigator.mediaSession.setActionHandler('previoustrack', () => this.previous());
            navigator.mediaSession.setActionHandler('nexttrack', () => this.next());
            
            // Seek-Support für Fortschrittsbalken im Auto
            navigator.mediaSession.setActionHandler('seekto', (details) => {
                if (details.seekTime) {
                    this.audio.currentTime = details.seekTime;
                    this.updatePlaybackPosition();
                }
            });
            
            console.log(`SYSTEM: MediaSession updated for ${song.title} (Art: ${finalArtworkUrl})`);
        }
    }

     /**
     * Updates the position in the mediaplayer
     */   
    updatePlaybackPosition() {
        if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
            if (this.audio.duration && !isNaN(this.audio.duration)) {
                try {
                    navigator.mediaSession.setPositionState({
                        duration: Math.floor(this.audio.duration),
                        playbackRate: this.audio.playbackRate,
                        position: Math.floor(this.audio.currentTime)
                    });
                } catch (e) {
                    // Falls die duration noch nicht final berechnet wurde
                    console.warn("MediaSession Position Error:", e);
                }
            }
        }
    }

    /**
     * UI Feedback for Start/Stop
     * @param {boolean} active 
     */
    updatePlayStateUI(active) {
        if (this.playBtn) {
            this.playBtn.innerHTML = active ? this.pauseIcon : this.playIcon;
            if (window.lucide) lucide.createIcons();
        }

        if (this.playerStatus) {
            this.playerStatus.textContent = active ? "Neural Fusion Active" : "Neural Link Established";
            this.playerStatus.className = active 
                ? "text-[9px] uppercase tracking-[0.3em] animate-pulse text-pink-400" 
                : "text-[9px] uppercase tracking-[0.3em] text-neutral-600";
        }

        // Apply visual pulse to the container
        const glowContainer = document.querySelector('.player-glow');
        if (active) {
            glowContainer?.classList.add('player-active-pulse');
            this.playerPane?.classList.add('player-active-pulse');
        } else {
            glowContainer?.classList.remove('player-active-pulse');
            this.playerPane?.classList.remove('player-active-pulse');
        }
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    handleError(e) {
        // Wenn wir gerade absichtlich laden/skippen, ignorieren wir den Abort-Fehler
        if (this.isLoading) return;

        console.error("Neural Stream Error:", e);
        if (this.playerStatus) {
            this.playerStatus.textContent = "Neural Link Severed";
            this.playerStatus.classList.add('text-red-500');
        }
    }

    onSeekInput() {
        if (this.durationEl) {
            const time = (this.seekSlider.value / 100) * this.audio.duration;
            this.currentTimeEl.textContent = this.formatTime(time);
            this.seekSlider.style.setProperty('--progress', `${progress}%`);
        }
    }

    onSeekChange() {
        this.audio.currentTime = (this.seekSlider.value / 100) * this.audio.duration;
    }

    /**
     * Triggers a download of the currently loaded track
     */
    async downloadCurrentTrack() {
        const song = this.currentPlaylist[this.currentIndex];
        if (!song) return;

        const streamUrl = `${R2_DOMAIN}${song.id}.mp3`;
        
        try {
            const originalStatus = this.playerStatus.textContent;
            this.playerStatus.textContent = "EXTRACTING FROM CACHE...";

            // 1. Suche im Service Worker Cache
            const cache = await caches.open('julia-music-v1'); // Der Name aus Main.js
            const cachedResponse = await cache.match(streamUrl);

            let blob;
            if (cachedResponse) {
                // Datei ist bereits offline verfügbar!
                blob = await cachedResponse.blob();
                console.log("SYSTEM: Download serving from Cache.");
            } else {
                // Datei ist nicht im Cache, versuche normalen Download (online)
                this.playerStatus.textContent = "SYNCING FROM NEURAL CLOUD...";
                const response = await fetch(streamUrl);
                if (!response.ok) throw new Error("Download failed");
                blob = await response.blob();
            }

            // 2. Browser-Download auslösen
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `${song.title}.mp3`;
            
            document.body.appendChild(a);
            a.click();
            
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            this.playerStatus.textContent = originalStatus;
        } catch (err) {
            console.error("Neural Download Error:", err);
            this.playerStatus.textContent = "LINK SEVERED (OFFLINE)";
            this.playerStatus.classList.add('text-red-500');
        }
    }

    /**
     * Nutzt ein Scoring-System, um unter Windows sicher eine junge 
     * Frauenstimme zu wählen und männliche "Natural"-Stimmen zu blockieren.
     */
    playIntroSynthesis(song) {
        return new Promise((resolve) => {
            if (!('speechSynthesis' in window)) return resolve();

            window.speechSynthesis.cancel();

            this.resetUIForSynthesis();
            
            const introductoryText = `${song.title}. ${song.background}`;
            const utterance = new SpeechSynthesisUtterance(introductoryText);
            
            // Frische Liste der Systemstimmen abrufen
            const voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
            
            let bestVoice = null;
            let highestScore = -10000;

            voices.forEach(v => {
                const name = v.name.toLowerCase();
                let score = 0;
                
                // --- WEIBLICHE PRIORISIERUNG ---
                if (name.includes('zira')) score += 2000;      // Windows Standard-Frau
                if (name.includes('samantha')) score += 2000;  // Apple Standard-Frau
                if (name.includes('aria')) score += 1500;      // MS Natural-Frau
                if (name.includes('jenny')) score += 1500;     // MS Natural-Frau
                if (name.includes('female')) score += 1000;
                if (name.includes('google us english')) score += 800;
                
                // --- MÄNNLICHE SPERR-LISTE (HARD BLOCK) ---
                // Wir ziehen massiv Punkte ab für alles, was männlich klingt
                const maleNames = ['william', 'david', 'mark', 'george', 'guy', 'stefan', 'ryan', 'male', 'liam'];
                if (maleNames.some(m => name.includes(m))) {
                    score -= 10000;
                }

                if (score > highestScore) {
                    highestScore = score;
                    bestVoice = v;
                }
            });

            if (bestVoice && highestScore > -5000) {
                utterance.voice = bestVoice;
                console.log(`SYSTEM: Neural Voice synchronized: ${bestVoice.name}`);
            }

            utterance.lang = 'en-US';
            utterance.pitch = 1.3; // Höherer Pitch für einen definitiv feminineren Klang
            utterance.rate = 0.9; 

            utterance.onend = () => setTimeout(resolve, 800);
            utterance.onerror = () => resolve();

            window.speechSynthesis.speak(utterance);
        });
    }

    resetUIForSynthesis() {
        if (this.seekSlider) {
            this.seekSlider.value = 0;
            this.seekSlider.style.setProperty('--progress', `0%`);
        }
        if (this.currentTimeEl) this.currentTimeEl.textContent = "0:00";
        if (this.durationEl) this.durationEl.textContent = "---";
        
        // MediaSession auf "Playing" setzen, damit das Artwork im Lockscreen bleibt
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'playing';
        }
    }  
    
    /**
     * Bereitet die MediaSession und das Modal vor.
     */
    prepareSession(song) {
        this.updateMediaSession(song);
        if (typeof showSongModal === 'function') {
            showSongModal(song, true);
        }
    }

    /**
     * Startet die Intro-Phase (MP3 oder Sprach-Synthese).
     */
    async playIntro(song) {
        this.playerStatus.textContent = "SYNCHRONIZING NEURAL CONTEXT...";
        
        // Sicherstellen, dass R2_DOMAIN existiert (Global aus index.html)
        const baseUrl = typeof R2_DOMAIN !== 'undefined' ? R2_DOMAIN : '';
        const introUrl = `${baseUrl}intro/${song.id}_intro.mp3`;

        try {
            let introBlobUrl = null;
            if (typeof getCachedAudioUrl === 'function') {
                introBlobUrl = await getCachedAudioUrl(introUrl);
            }

            // Falls nicht im Cache, prüfen wir die Verfügbarkeit via HEAD Request
            const introExists = introBlobUrl || (await fetch(introUrl, { method: 'HEAD', mode: 'cors' })).ok;

            if (introExists) {
                this.audio.crossOrigin = 'anonymous';
                this.audio.src = introBlobUrl || introUrl;
                
                // Warten auf Metadaten des Intros, um MediaSession/Slider zu füllen
                await new Promise((resolve) => {
                    this.audio.once = () => {
                        this.audio.removeEventListener('loadedmetadata', this.audio.once);
                        // MediaSession mit Intro-Dauer aktualisieren
                        if ('mediaSession' in navigator) {
                            navigator.mediaSession.playbackState = 'playing';
                        }
                        resolve();
                    };
                    this.audio.addEventListener('loadedmetadata', this.audio.once);
                    this.audio.load();
                });

                await this.audio.play();
                
                // Versprechen löst auf, wenn MP3-Intro endet
                await new Promise(resolve => {
                    const onEnded = () => {
                        this.audio.removeEventListener('ended', onEnded);
                        resolve();
                    };
                    this.audio.addEventListener('ended', onEnded);
                });
            } else {
                await this.playIntroSynthesis(song);
            }
        } catch (e) {
            console.warn("Intro MP3 not reachable, falling back to synthesis", e);
            await this.playIntroSynthesis(song);
        }
    }

    /**
     * Lädt und startet den eigentlichen Hauptsong.
     */
    async playMainSong(song) {
        if (this.playerStatus) this.playerStatus.textContent = "ESTABLISHING MAIN LINK...";
        
        const baseUrl = typeof R2_DOMAIN !== 'undefined' ? R2_DOMAIN : '';
        const streamUrl = `${baseUrl}${song.id}.mp3`;
        
        const songBlobUrl = typeof getCachedAudioUrl === 'function' ? await getCachedAudioUrl(streamUrl) : null;
        
        this.audio.crossOrigin = 'anonymous';
        this.audio.src = songBlobUrl || streamUrl;
        
        // WICHTIG: Erneutes Laden erzwingen, um Metadaten des Hauptsongs zu triggern
        this.audio.load(); 

        await this.audio.play();
        this.isPlaying = true;
        this.isLoading = false;
        this.updatePlayStateUI(true);
    }

    /**
     * Zentraler Kill-Switch für alle laufenden Prozesse.
     */
    stopAll() {
        this.isLoading = false; // Wichtigster Check für die await-Kette
        this.audio.pause();
        this.audio.src = "";
        
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        
        this.updatePlayStateUI(false);
        if (this.playerStatus) {
            this.playerStatus.textContent = "NEURAL LINK DISCONNECTED";
        }
    }    
}    