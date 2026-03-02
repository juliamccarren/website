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
        this.isAutoplay = false;
        this.isRepeating = false;
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
        this.currentPlaylist = songs;
        this.currentIndex = index;
        const song = this.currentPlaylist[this.currentIndex];

        if (!song) return;

        // Update Global UI (Modals etc.)
        if (typeof showSongModal === 'function') {
            showSongModal(song, false); // false = already open or handled via player
        }

        const streamUrl = `${R2_DOMAIN}${song.id}.mp3`;
        
        // Check for local Neural Cache (Offline Resilience)
        if (typeof getCachedAudioUrl === 'function') {
            const localBlobUrl = await getCachedAudioUrl(streamUrl);
            this.audio.src = localBlobUrl || streamUrl;
        } else {
            this.audio.src = streamUrl;
        }

        this.updateMediaSession(song);
        this.play();
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
        if (this.currentPlaylist.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.currentPlaylist.length;
        this.loadTrack(this.currentPlaylist, this.currentIndex);
    }

    previous() {
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
        const autoplayBtn = document.getElementById('autoplay-toggle');

        if (repeatBtn) {
            repeatBtn.classList.toggle('text-fuchsia-500', this.isRepeating);
            repeatBtn.classList.toggle('text-neutral-500', !this.isRepeating);
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
    }

    /**
     * Updates the OS-level player (Lock screen / Media controls)
     */
    updateMediaSession(song) {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: song.title,
                artist: 'Julia McCarren',
                album: 'Neural Fusion Sound',
                artwork: [
                    { src: '../images/Hero_square.webp', sizes: '512x512', type: 'image/webp' }
                ]
            });

            navigator.mediaSession.setActionHandler('play', () => this.play());
            navigator.mediaSession.setActionHandler('pause', () => this.pause());
            navigator.mediaSession.setActionHandler('previoustrack', () => this.previous());
            navigator.mediaSession.setActionHandler('nexttrack', () => this.next());
        }
    }

     /**
     * Updates the position in the mediaplayer
     */   
    updatePlaybackPosition() {
        if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
            if (this.audio.duration && !isNaN(this.audio.duration)) {
                navigator.mediaSession.setPositionState({
                    duration: this.audio.duration,
                    playbackRate: this.audio.playbackRate,
                    position: this.audio.currentTime
                });
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
}   