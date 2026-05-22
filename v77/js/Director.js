/**
 * NeuralDirector: Die Logik-Zentrale der Applikation.
 * Steuert den Programmablauf und die Navigation basierend auf der aktiven Collection.
 */
class NeuralDirector {
    constructor() {
        this.activeCollection = null; // Referenz auf die aktuelle SongCollection (Source of Truth)
        this.currentIndex = -1;
        this.isIntroPhase = false;    // Tracker: Befinden wir uns gerade im Moderations-Vorspann?
        
        // Konfiguration für Radio-Extras
        this.serviceChance = 0.15;    // 15% Wahrscheinlichkeit für Wetter/Witz zwischen Songs
    }

    /**
     * Aktiviert eine neue Collection (Archive, Podcast oder Feature).
     * @param {Object} collection - Die Instanz der SongCollection
     * @param {number} startIndex - Der Index, an dem die Wiedergabe starten soll
     */
    setActiveCollection(collection, startIndex) {
        this.activeCollection = collection;
        // Wir setzen den Index auf einen davor, da getNextSnippet() ihn erhöht
        this.currentIndex = startIndex;
        this.isIntroPhase = false;
        console.log(`SYSTEM: Director switched to collection: ${collection.container.id}`);
    }

    /**
     * Prüft, ob nach dem aktuellen Snippet noch etwas folgen kann (Autoplay/Repeat).
     */
    hasNext() {
        if (!this.activeCollection) return false;
        
        const config = this.activeCollection.config;

        // 1. Wenn wir gerade im Intro sind, gibt es IMMER ein "Next" (nämlich den Song selbst)
        if (this.isIntroPhase) return true;

        // 2. Wenn Repeat aktiv ist, gibt es immer eine Fortsetzung
        if (config.repeat) return true;
        
        // 3. Wenn Autoplay AKTIV ist, darf er zum nächsten Song springen
        if (config.autoplay) {
            // Im Radio-Modus (Autoplay) laufen wir theoretisch endlos durch die Liste
            return true; 
        }
        
        // 4. Wenn Autoplay DEAKTIVIERT ist:
        // Hier geben wir false zurück, damit handleTrackEnded() im Player stoppt.
        // Die manuelle Navigation (Next-Button) nutzt diese Methode nicht, 
        // sondern ruft direkt director.next() auf.
        return false;
    }

    /**
     * Prüft, ob eine Rückwärts-Navigation möglich ist.
     */
    hasPrevious() {
        if (!this.activeCollection) return false;
        
        const config = this.activeCollection.config;
        // Im Radio- oder Repeat-Modus kann man immer zurückspringen
        if (config.autoplay || config.repeat) return true;
        
        // Normaler Modus: Nur wenn wir nicht beim ersten Song sind
        return this.currentIndex > 0;
    }

    async getCurrentSnippet() {
        // if (!this.hasNext()) return null;

        const config = this.activeCollection.config;
        const songs = this.activeCollection.songs;

        // Aktuelle Moderation-Logik:
        let needsUIUpdate = false;
        let update_index = false;

        if (config.moderation) { // Moderation aktiviert, dann muss Intro kommen
            this.isIntroPhase = true;
            update_index = false;
            needsUIUpdate = true;
        } 
        else { // Moderation deaktiviert, direkt zum Song
            this.isIntroPhase = false;
            update_index = false;
            needsUIUpdate = true;            
        }
        
        const song = songs[this.currentIndex];

        if (!song) return null;

        // 1. MODERATIONS-PHASE (Intro)
        if (this.isIntroPhase) {
            return {
                audioUrl: `${R2_DOMAIN}intro/${song.id}_intro.mp3`,
                updateUI: true,
                uiData: song
            };
        }

        // 2. SONG-PHASE (Haupt-Audio)
        // Wenn wir hier landen, beenden wir entweder das Intro oder spielen den Song direkt
        // const needsUIUpdate = this.isIntroPhase;

        return {
            audioUrl: `${R2_DOMAIN}${song.id}.mp3`,
            updateUI: needsUIUpdate,
            uiData: needsUIUpdate ? song : null
        };
    }

    /**
     * Kern-Methode: Liefert das nächste "Arbeitspaket" (Snippet) für den Player. Hier wird das Programm dynamisch zusammengestellt.
     */
    async getNextSnippet() {
        // if (!this.hasNext()) return null;

        const config = this.activeCollection.config;
        const songs = this.activeCollection.songs;

        // Aktuelle Moderation-Logik:
        let needsUIUpdate = false;
        let update_index = false;

        if (config.moderation && !this.isIntroPhase) { // Moderation aktiviert und wir liefern gerade den Song -> jetzt kommt das Intro
            this.isIntroPhase = true;
            update_index = true;
            needsUIUpdate = true;
        } else if (config.moderation && this.isIntroPhase) { // Moderation aktiviert und wir liefern gerade das Intro -> jetzt kommt der Song
            this.isIntroPhase = false;
            update_index = false;
            needsUIUpdate = false;
        } else if (!config.moderation) { // Moderation deaktiviert
            this.isIntroPhase = false;
            update_index = true;
            needsUIUpdate = true;
        }

        if (config.repeat) {
            // Im Repeat-Modus bleibt der Index immer gleich, da wir den gleichen Song immer wieder spielen
            update_index = false;
            needsUIUpdate = false;
        }

        // Wir bereiten den Index für den NÄCHSTEN Aufruf vor, 
        // ABER NUR wenn wir nicht im Repeat-Modus sind.
        if (update_index) {
            this.currentIndex++;
            if (this.currentIndex >= songs.length) {
                this.currentIndex = 0; // Loop zurück zum Start
            }
        }

        const song = songs[this.currentIndex];

        if (!song) return null;

        // 1. MODERATIONS-PHASE (Intro)
        if (this.isIntroPhase) {
            return {
                audioUrl: `${R2_DOMAIN}intro/${song.id}_intro.mp3`,
                updateUI: needsUIUpdate,
                uiData: needsUIUpdate ? song : null
            };
        }

        // 2. SONG-PHASE (Haupt-Audio)
        // Wenn wir hier landen, beenden wir entweder das Intro oder spielen den Song direkt
        // const needsUIUpdate = this.isIntroPhase;

        return {
            audioUrl: `${R2_DOMAIN}${song.id}.mp3`,
            updateUI: needsUIUpdate,
            uiData: needsUIUpdate ? song : null
        };
    }

    async getPreviousSnippet() {
        // if (!this.hasPrevious()) return null;

        const config = this.activeCollection.config;
        const songs = this.activeCollection.songs;

        // Aktuelle Moderation-Logik:
        let needsUIUpdate = false;
        let update_index = false;

        if (config.moderation && !this.isIntroPhase) { // Moderation aktiviert und wir liefern gerade den Song -> jetzt kommt das Intro
            this.isIntroPhase = true;
            update_index = false;
            needsUIUpdate = false;
        } else if (config.moderation && this.isIntroPhase) { // Moderation aktiviert und wir liefern gerade das Intro -> jetzt kommt der Song
            this.isIntroPhase = false;
            update_index = true;
            needsUIUpdate = true;
        } else if (!config.moderation) { // Moderation deaktiviert
            this.isIntroPhase = false;
            update_index = true;
            needsUIUpdate = true;
        }

        if (config.repeat) {
            // Im Repeat-Modus bleibt der Index immer gleich, da wir den gleichen Song immer wieder spielen
            update_index = false;
            needsUIUpdate = false;
        }

        // Wir bereiten den Index für den NÄCHSTEN Aufruf vor, 
        // ABER NUR wenn wir nicht im Repeat-Modus sind.
        if (update_index) {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = songs.length - 1; // Sprung zum Ende der Liste
            }
        }

        const song = songs[this.currentIndex];

        if (!song) return null;

        // 1. MODERATIONS-PHASE (Intro)
        if (this.isIntroPhase) {
            return {
                audioUrl: `${R2_DOMAIN}intro/${song.id}_intro.mp3`,
                updateUI: needsUIUpdate,
                uiData: needsUIUpdate ? song : null
            };
        }

        // 2. SONG-PHASE (Haupt-Audio)
        // Wenn wir hier landen, beenden wir entweder das Intro oder spielen den Song direkt
        // const needsUIUpdate = this.isIntroPhase;

        return {
            audioUrl: `${R2_DOMAIN}${song.id}.mp3`,
            updateUI: needsUIUpdate,
            uiData: needsUIUpdate ? song : null
        };
    }

    /**
     * Kern-Methode: Liefert das vorherige "Arbeitspaket" (Snippet) für den Player. Hier wird das Programm dynamisch zusammengestellt.
     */
    async getPreviousSnippetOld() {
        if (!this.hasPrevious()) return null;

        const config = this.activeCollection.config;
        const songs = this.activeCollection.songs;
        const song = songs[this.currentIndex];

        if (!song) return null;

        // 1. MODERATIONS-PHASE (Intro)
        if (config.moderation && !this.isIntroPhase) {
            this.isIntroPhase = true;
            return {
                audioUrl: `${R2_DOMAIN}intro/${song.id}_intro.mp3`,
                updateUI: true,
                uiData: song
            };
        }

        // 2. SONG-PHASE (Haupt-Audio)
        // Wenn wir hier landen, beenden wir entweder das Intro oder spielen den Song direkt
        const needsUIUpdate = !this.isIntroPhase;
        this.isIntroPhase = false;

        // Wir bereiten den Index für den NÄCHSTEN Aufruf vor, 
        // ABER NUR wenn wir nicht im Repeat-Modus sind.
        if (!config.repeat) {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = songs.length - 1; // Sprung zum Ende der Liste
            }
        }

        return {
            audioUrl: `${R2_DOMAIN}${song.id}.mp3`,
            updateUI: needsUIUpdate,
            uiData: needsUIUpdate ? song : null
        };
    }    

    /**
     * Navigation: Springt manuell zum nächsten Titel (bricht Intros ab).
     */
    next() {
        if (!this.activeCollection || this.activeCollection.songs.length === 0) return null;

        const config = this.activeCollection.config;
        const len = this.activeCollection.songs.length;
        this.isIntroPhase = false; // Manueller Skip bricht Moderation ab

        // Index nur erhöhen, wenn kein Repeat aktiv ist
        if (!config.repeat) {
            this.currentIndex++;
            if (this.currentIndex >= len) {
                this.currentIndex = 0;
            }
        }   

        return this.getSpecificSongSnippet(this.currentIndex);
    }

    /**
     * Navigation: Springt manuell zum vorherigen Titel.
     */
    previous() {
        if (!this.activeCollection || this.activeCollection.songs.length === 0) return null;

        const config = this.activeCollection.config;
        this.isIntroPhase = false;

        // Index verringern, außer im Repeat-Modus
        if (!config.repeat) {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.activeCollection.songs.length - 1;
            }
        }

        return this.getSpecificSongSnippet(this.currentIndex);
    }

    /**
     * Hilfsmethode für manuelle Sprünge (liefert immer den Hauptsong).
     */
    getSpecificSongSnippet(index) {
        const song = this.activeCollection.songs[index];
        return {
            audioUrl: `${R2_DOMAIN}${song.id}.mp3`,
            updateUI: true,
            uiData: song
        };
    }

    /**
     * Erzeugt ein zufälliges Service-Snippet (Wetter oder Witz).
     */
    generateServiceSnippet() {
        const type = Math.random() > 0.5 ? 'weather' : 'joke';
        return {
            audioUrl: `${R2_DOMAIN}services/${type}.mp3`,
            updateUI: true,
            uiData: {
                title: type === 'weather' ? "Neural Weather" : "Neural Joke",
                background: "Updating environmental neural states...",
                artwork: `../images/service_${type}.webp`,
                lyrics: "System transmission. No linguistic data available.",
                tags: ["SYSTEM", "LIVE"]
            }
        };
    }
}