// --- GLOBAL INSTANCES ---
// Deklariere sie nur, aber weise sie noch nicht zu!
let songService;
let archiveCollection;
let featureCollection;
let player;
let drumPicker;
let diaryService;
let cacheName = 'julia-music-v1'; // Einheitlicher Cache-Name für die gesamte App

// Global scroll state for modal management
let scrollPosition = 0;

// --- SHARED UI FUNCTIONS ---
// These bridge the gap between HTML onclick attributes and the class instances

/**
 * Global bridge for the "Reshuffle" button
 */
async function loadAndDisplayArchiveSongs() {
    const limit = drumPicker.value; // Get value directly from class
    const randomSongs = await songService.getRandom(limit);
    archiveCollection.update(randomSongs);
}

/**
 * Lädt den spezifischen Feature-Song und synchronisiert ihn mit dem Cache.
 */
async function loadAndDisplayFeatureSongs() {
    try {
        // Wir holen uns die Daten für den Haupt-Song (z.B. Peaks of Gold)
        const featureData = await songService.getById('peaks_of_gold');
        
        if (featureData && featureData.length > 0) {
            // Die update-Methode triggert automatisch preCacheSongs
            featureCollection.update(featureData);
            console.log("SYSTEM: Feature Song synchronized.");
        }
    } catch (e) {
        console.error("SYSTEM: Feature Sync failed", e);
    }
}

/**
 * Global bridge for the +/- buttons in the UI.
 * Connects the HTML onclick to the PickerDrum class instance.
 */
async function changeLimit(delta) {
    // We need the total song count from the service for the boundary check
    const allSongs = await songService.getAll();
    
    // Call the change method on our global drumPicker instance
    drumPicker.change(delta, allSongs.length);
}

/**
 * Aktualisiert alle Cache-Indikatoren für einen bestimmten Song auf der gesamten Seite.
 */
async function updateGlobalCacheStatus(songId) {
    const url = `${R2_DOMAIN}${songId}.mp3`;
    const cache = await caches.open(cacheName);
    const response = await cache.match(url);
    
    // Findet alle Punkte, egal in welcher Liste sie liegen
    const indicators = document.querySelectorAll(`[id$="-${songId}"]`);
    
    indicators.forEach(indicator => {
        if (response) {
            indicator.classList.remove('cache-offline', 'cache-syncing');
            indicator.classList.add('cache-online');
        } else {
            indicator.classList.remove('cache-online');
            indicator.classList.add('cache-offline');
        }
    });
}

/**
 * Global bridge for the "Fill Cache" button
 */
async function fillCache() {
    const allVisibleSongs = [
        ...featureCollection.songs,
        ...archiveCollection.songs
    ];

    if (allVisibleSongs.length === 0) return;

    // Dubletten filtern (ID-basiert)
    const uniqueSongs = Array.from(new Set(allVisibleSongs.map(s => s.id)))
        .map(id => allVisibleSongs.find(s => s.id === id));

    for (let i = 0; i < uniqueSongs.length; i++) {
        const song = uniqueSongs[i];
        
        // 1. Technischer Check/Download via Service
        await songService.cacheSong(song.id);
        
        // 2. Globaler UI-Update (erwischt Feature UND Archiv)
        await updateGlobalCacheStatus(song.id);
    }
}

/**
 * Global bridge for the "Purge Cache" button
 */
function purgeCache() {
    const modal = document.getElementById('purge-modal');
    modal.classList.remove('hidden');
    
    // Event-Listener für den Confirm-Button einmalig binden
    const confirmBtn = document.getElementById('confirm-purge-btn');
    confirmBtn.onclick = async () => {
        await executePurge();
        closePurgeModal();
    };
}

/**
 * Schließt das Modal.
 */
function closePurgeModal() {
    document.getElementById('purge-modal').classList.add('hidden');
}

/**
 * Führt den eigentlichen Löschvorgang aus.
 */
async function executePurge() {
    const success = await songService.purgeCache();
    if (success) {
        // UI Refresh
        await loadAndDisplayFeatureSongs();
        await loadAndDisplayArchiveSongs();
        
        // Optional: Kleines haptisches Feedback für Mobile
        if (window.navigator.vibrate) window.navigator.vibrate(50);
    }
}

/**
 * Global bridge for the Modal close button
 */
function closeDiaryModal() { diaryService.close(); }

/**
 * Global bridge for the Modal close button
 */
function closeSongModal() {
    const modal = document.getElementById('song-modal');
    
    // Stop playback
    player.pause(); 
    player.audio.currentTime = 0;

    // Restore background scrolling
    document.documentElement.style.scrollBehavior = 'auto';    
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.scrollTo(0, scrollPosition);
    modal.classList.add('hidden');
    
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = null;
    }
}

/**
 * Populates and shows the Modal UI (called by NeuralPlayer)
 */
/**
 * Populates and shows the Modal UI (called by NeuralPlayer)
 * Now includes dynamic artwork loading from the /artwork/ folder.
 */
function showSongModal(song, initialOpen = false) {
    const modal = document.getElementById('song-modal');
    const scrollContainer = modal.querySelector('.overflow-y-auto');

    if (initialOpen) {    
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    }

    modal.classList.remove('hidden');

    // Basic Info
    document.getElementById('modal-title').textContent = song.title;
    document.getElementById('modal-background').textContent = song.background;
    document.getElementById('modal-lyrics').textContent = song.lyrics;
    
    // --- ARTWORK LOGIC START ---
    // Select the title element to insert the image after it
    const titleEl = document.getElementById('modal-title');
    
    // Remove any existing artwork from previous modal opens
    const existingArt = document.getElementById('modal-artwork');
    if (existingArt) existingArt.remove();

    // Create the new image element
    const artImg = document.createElement('img');
    artImg.id = 'modal-artwork';
    artImg.src = `../artwork/${song.id}.webp`; // e.g., ../artwork/brooklyn.webp
    artImg.alt = `${song.title} Artwork`;
    artImg.className = 'w-full h-auto rounded-2xl mb-8 border border-white/10 shadow-2xl animate-in fade-in duration-700';
    artImg.style.contentVisibility = 'visible'; // Force loading even if initially off-screen
    
    // If the image fails to load (file not found), remove it to stay "as today"
    artImg.onerror = function() {
        this.remove();
    };

    // Insert directly under the title
    titleEl.insertAdjacentElement('afterend', artImg);
    // --- ARTWORK LOGIC END ---

    const tagsCont = document.getElementById('modal-tags');
    tagsCont.innerHTML = '';
    song.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-500 text-[9px] font-black uppercase tracking-widest';
        span.textContent = tag;
        tagsCont.appendChild(span);
    });

    if (window.lucide) lucide.createIcons();
    
    if (scrollContainer) {
        setTimeout(() => { 
            scrollContainer.scrollTo({ top: 0, behavior: 'instant' }); 
        }, 10); 
    }
}

// --- PLAYER UI BRIDGES ---
// These connect your existing HTML onclick handlers to the Player class
function playPreviousSong() { player.previous(); }
function playNextSong() { player.next(); }
function skipToStart() { player.audio.currentTime = 0; }
function skipToEnd() { if(player.audio.duration) player.audio.currentTime = player.audio.duration - 0.5; }

function handleRepeatToggle() {
    player.isRepeating = !player.isRepeating;
    player.syncUI();
}

function handleAutoplayToggle() {
    player.isAutoplay = !player.isAutoplay;
    player.syncUI();
}

// Global helper for Caching (used by SongCollection and NeuralPlayer)
async function forceCacheSong(url) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(url);
    if (cachedResponse) return; 

    try {
        const response = await fetch(`${url}?cb=${Date.now()}`, { mode: 'cors', cache: 'reload' });
        if (response.ok) await cache.put(url, response);
    } catch (err) {
        console.error("Neural Sync Error:", err);
    }
}

async function getCachedAudioUrl(url) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(url);
    if (cachedResponse) {
        const blob = await cachedResponse.blob();
        return URL.createObjectURL(blob);
    }
    return null;
}

/**
 * Aktualisiert das visuelle Feedback für den Online/Offline Status
 */
function updateOnlineStatus() {
    const menuItem = document.getElementById('status-menu-item');
    if (!menuItem) return;

    if (navigator.onLine) {
        // ONLINE: Fuchsia
        menuItem.textContent = 'Online';
        menuItem.classList.remove('text-neutral-500');
        menuItem.classList.add('text-fuchsia-500');
    } else {
        // OFFLINE: Grau
        menuItem.textContent = 'Offline';
        menuItem.classList.remove('text-fuchsia-500');
        menuItem.classList.add('text-neutral-500');
    }
}

// Update your initialization
window.addEventListener('DOMContentLoaded', async () => {
    // ERST HIER, wenn alle Skripte geladen sind, erstellen wir die Objekte
    songService = new SongService();
    archiveCollection = new SongCollection('song-grid');
    featureCollection = new SongCollection('feature-song-grid');
    player = new NeuralPlayer();
    drumPicker = new PickerDrum('picker-drum', 'archive-count-input');
    diaryService = new DiaryService('diary-grid', 'diary-modal');

    // --- NETWORK LOGIC ---
    // Auf Änderungen während der Laufzeit reagieren
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Einmaliger Check beim Start
    updateOnlineStatus();

    // 1. MOBILE VIEWPORT HEIGHT FIX
    // Prevents the address bar from cutting off the player on mobile browsers
    const shadowHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    window.addEventListener('resize', shadowHeight);
    shadowHeight();

    // 2. SYSTEM INITIALIZATION
    try {
            const allSongs = await songService.getAll();
            drumPicker.init(allSongs.length, 6);

            // Sauberer Aufruf der modularen Funktionen
            await loadAndDisplayFeatureSongs(); 
            await loadAndDisplayArchiveSongs(); 

            diaryService.refresh();

            // INITIALER STATUS CHECK HIER EINFÜGEN
            updateOnlineStatus();
        } catch (e) { 
            console.error("Neural System Initialization Failed:", e); 
        }

    // 3. GLOBAL KEYBOARD CONTROLS (Optional but recommended for window mode)
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const songModal = document.getElementById('song-modal');
            const diaryModal = document.getElementById('diary-modal');
            if (!songModal.classList.contains('hidden')) closeSongModal();
            if (!diaryModal.classList.contains('hidden')) closeDiaryModal();
        }
    });
});

// function formatTimestamp(ts) {
//     if(!ts || ts.length < 13) return ts;
//     const y = ts.substring(0,4);
//     const m = ts.substring(4,6);
//     const d = ts.substring(6,8);
//     const h = ts.substring(9,11);
//     const min = ts.substring(11,13);
//     return `${d}.${m}.${y} // ${h}:${min}`;
// }

// --- UI UTILS ---
const navbar = document.getElementById('navbar');
const navTitle = document.getElementById('nav-title');
const heroContent = document.getElementById('hero-content');
const heroImage = document.getElementById('hero-image');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const triggerPoint = 450;
    const badge = document.getElementById('neural-status-badge'); // Neu hinzugefügt

    if (scrollY < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollY * -0.55}px)`;
        heroImage.style.transform = `scale(${1 + (scrollY * 0.00015)})`;
    }

    if (scrollY > triggerPoint) {
        navbar.classList.add('glass-nav', 'py-4'); 
        navbar.classList.remove('py-10');
        navTitle.classList.add('nav-visible'); 
        navTitle.classList.remove('nav-hidden');
        
        // Badge sichtbar machen
        if (badge) {
            badge.classList.add('nav-visible');
            badge.classList.remove('nav-hidden');
        }
    } else {
        navbar.classList.remove('glass-nav', 'py-4'); 
        navbar.classList.add('py-10');
        navTitle.classList.remove('nav-visible'); 
        navTitle.classList.add('nav-hidden');

        // Badge verstecken
        if (badge) {
            badge.classList.remove('nav-visible');
            badge.classList.add('nav-hidden');
        }
    }
});

const menuToggle = document.getElementById('menu-toggle'), menuClose = document.getElementById('menu-close'), mobileMenu = document.getElementById('mobile-menu');
menuToggle.onclick = () => { mobileMenu.classList.remove('hidden'); mobileMenu.classList.add('flex'); document.body.style.overflow = 'hidden'; };
const closeMenu = () => { mobileMenu.classList.add('hidden'); mobileMenu.classList.remove('flex'); document.body.style.overflow = 'auto'; };
menuClose.onclick = closeMenu;
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

function injectSEOData(songs) {
    if (document.getElementById('json-ld-seo')) return;
    const schema = {
        "@context": "https://schema.org",
        "@type": "MusicPlaylist",
        "name": "Julia McCarren Neural Fusion Archive",
        "creator": {
            "@type": "Person",
            "name": "Julia McCarren",
            "jobTitle": "Solution Architect & Digital Artist",
            "sameAs": [
                "https://www.youtube.com/@JuliaMcCarren",
                "https://open.spotify.com/artist/1iEWsTM4vgUGVXOlky4Ujk"
            ]
        },
        "track": songs.map(s => ({
            "@type": "MusicRecording",
            "name": s.title,
            "url": "https://juliamccarren.com/"
        }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

// --- SERVICE WORKER REGISTRATION ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Optimiere diesen Teil in deiner Main.js:
        navigator.serviceWorker.register('../sw.js').then(reg => {
            // FALL A: Ein Update wurde bereits im Hintergrund geladen und wartet
            if (reg.waiting) {
                showUpdateBanner(reg);
            }

            // FALL B: Ein Update wird gerade erst gefunden
            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        showUpdateBanner(reg);
                    }
                });
            });
        });
    });
}

function showUpdateBanner(registration) {
    if (document.getElementById('update-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'update-banner';
    banner.innerHTML = `
        <span>Update verfügbar</span>
        <i data-lucide="refresh-cw" style="width:14px; height:14px;"></i>
    `;
    document.body.appendChild(banner);
    if (window.lucide) lucide.createIcons();

    banner.onclick = () => {
        // Sende Befehl an den wartenden Service Worker
        if (registration.waiting) {
            registration.waiting.postMessage('SKIP_WAITING');
        }
    };
}

// Sobald der neue SW die Kontrolle übernimmt -> Refresh
let refreshing = false;
navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
        window.location.reload();
        refreshing = true;
    }
});