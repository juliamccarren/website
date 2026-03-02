const STATIC_CACHE = 'julia-site-v28';
const ASSETS = [
    "v28/745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v28/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v28/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v28/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v28/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v28/artwork/autumns_whisper.webp",
    "v28/artwork/bite_of_the_night.webp",
    "v28/artwork/brooklyn.webp",
    "v28/artwork/fog_of_fear.webp",
    "v28/artwork/forever.webp",
    "v28/artwork/friday_night.webp",
    "v28/artwork/frozen_heart.webp",
    "v28/artwork/god_save_the_king.webp",
    "v28/artwork/good_enough.webp",
    "v28/artwork/haunted_haven.webp",
    "v28/artwork/heart_of_fire_and_ice.webp",
    "v28/artwork/howling_wolves.webp",
    "v28/artwork/i_love_school.webp",
    "v28/artwork/just_wants_to_be_loved.webp",
    "v28/artwork/last_exit.webp",
    "v28/artwork/my_foundation.webp",
    "v28/artwork/password_expired.webp",
    "v28/artwork/peaks_of_gold.webp",
    "v28/artwork/radio_trash.webp",
    "v28/artwork/sanctified_sinner.webp",
    "v28/artwork/sanctuary_riot.webp",
    "v28/artwork/schools_out.webp",
    "v28/artwork/skeleton_dance.webp",
    "v28/artwork/spooky.webp",
    "v28/artwork/summers_farewell.webp",
    "v28/artwork/the_steel_winged_swan.webp",
    "v28/artwork/toccata.webp",
    "v28/artwork/trick_or_treat.webp",
    "v28/artwork/upon_a_winding_trail.webp",
    "v28/artwork/whiteout.webp",
    "v28/artwork/winterstorm.webp",
    "v28/datenschutz.html",
    "v28/images/Guitar-in-Dolomites.webp",
    "v28/images/Hero.webp",
    "v28/images/Hero_square.webp",
    "v28/images/Julia-skiing-Dolomites.webp",
    "v28/images/Stage_1.webp",
    "v28/images/Stage_2.webp",
    "v28/images/Stage_3.webp",
    "v28/images/Stage_4.webp",
    "v28/images/Stage_5.webp",
    "v28/images/Stage_6.webp",
    "v28/images/Stage_7.webp",
    "v28/images/Stage_8.webp",
    "v28/images/icons/app_icon_192.png",
    "v28/images/icons/app_icon_512.png",
    "v28/images/original/Guitar-in-Dolomites.png",
    "v28/images/original/Hero.jpg",
    "v28/images/original/Hero_square.jpg",
    "v28/images/original/Julia-skiing-Dolomites.png",
    "v28/images/original/Stage_1.png",
    "v28/images/original/Stage_2.png",
    "v28/images/original/Stage_3.png",
    "v28/images/original/Stage_4.png",
    "v28/images/original/Stage_5.png",
    "v28/images/original/Stage_6.png",
    "v28/images/original/Stage_7.png",
    "v28/images/original/Stage_8.png",
    "v28/impressum.html",
    "v28/index.html",
    "v28/js/DiaryService.js",
    "v28/js/Main.js",
    "v28/js/PickerDrum.js",
    "v28/js/Player.js",
    "v28/js/SongCollection.js",
    "v28/js/SongService.js",
    "v28/js/VersionCore.js",
    "v28/js/lucide.js",
    "v28/js/tailwindcss.js",
    "v28/legal_notice.html",
    "v28/manifest.json",
    "v28/privacy_policy.html"
];

// Service Worker im Root steuert alle Unterverzeichnisse
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Neural App Shell v28 syncing into isolation...');
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== STATIC_CACHE && key.startsWith('julia-site-v'))
                    .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', event => {
    if (event.request.url.includes('music.juliamccarren.com')) return;
    event.respondWith(
        caches.match(event.request).then(response => {
            // Offline-First Strategie
            return response || fetch(event.request);
        })
    );
});
