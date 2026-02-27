const STATIC_CACHE = 'julia-site-v27';
const ASSETS = [
    "v27/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v27/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v27/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v27/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v27/artwork/autumns_whisper.webp",
    "v27/artwork/bite_of_the_night.webp",
    "v27/artwork/brooklyn.webp",
    "v27/artwork/fog_of_fear.webp",
    "v27/artwork/forever.webp",
    "v27/artwork/friday_night.webp",
    "v27/artwork/frozen_heart.webp",
    "v27/artwork/god_save_the_king.webp",
    "v27/artwork/good_enough.webp",
    "v27/artwork/haunted_haven.webp",
    "v27/artwork/heart_of_fire_and_ice.webp",
    "v27/artwork/howling_wolves.webp",
    "v27/artwork/i_love_school.webp",
    "v27/artwork/just_wants_to_be_loved.webp",
    "v27/artwork/last_exit.webp",
    "v27/artwork/my_foundation.webp",
    "v27/artwork/password_expired.webp",
    "v27/artwork/peaks_of_gold.webp",
    "v27/artwork/radio_trash.webp",
    "v27/artwork/sanctified_sinner.webp",
    "v27/artwork/sanctuary_riot.webp",
    "v27/artwork/schools_out.webp",
    "v27/artwork/skeleton_dance.webp",
    "v27/artwork/spooky.webp",
    "v27/artwork/summers_farewell.webp",
    "v27/artwork/the_steel_winged_swan.webp",
    "v27/artwork/toccata.webp",
    "v27/artwork/trick_or_treat.webp",
    "v27/artwork/upon_a_winding_trail.webp",
    "v27/artwork/whiteout.webp",
    "v27/artwork/winterstorm.webp",
    "v27/datenschutz.html",
    "v27/images/Guitar-in-Dolomites.webp",
    "v27/images/Hero.webp",
    "v27/images/Hero_square.webp",
    "v27/images/Julia-skiing-Dolomites.webp",
    "v27/images/Stage_1.webp",
    "v27/images/Stage_2.webp",
    "v27/images/Stage_3.webp",
    "v27/images/Stage_4.webp",
    "v27/images/Stage_5.webp",
    "v27/images/Stage_6.webp",
    "v27/images/Stage_7.webp",
    "v27/images/Stage_8.webp",
    "v27/images/icons/app_icon_192.png",
    "v27/images/icons/app_icon_512.png",
    "v27/images/original/Guitar-in-Dolomites.png",
    "v27/images/original/Hero.jpg",
    "v27/images/original/Hero_square.jpg",
    "v27/images/original/Julia-skiing-Dolomites.png",
    "v27/images/original/Stage_1.png",
    "v27/images/original/Stage_2.png",
    "v27/images/original/Stage_3.png",
    "v27/images/original/Stage_4.png",
    "v27/images/original/Stage_5.png",
    "v27/images/original/Stage_6.png",
    "v27/images/original/Stage_7.png",
    "v27/images/original/Stage_8.png",
    "v27/impressum.html",
    "v27/index.html",
    "v27/js/DiaryService.js",
    "v27/js/Main.js",
    "v27/js/PickerDrum.js",
    "v27/js/Player.js",
    "v27/js/SongCollection.js",
    "v27/js/SongService.js",
    "v27/js/VersionCore.js",
    "v27/js/lucide.js",
    "v27/js/tailwindcss.js",
    "v27/legal_notice.html",
    "v27/manifest.json",
    "v27/privacy_policy.html"
];

// Service Worker im Root steuert alle Unterverzeichnisse
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Neural App Shell v27 syncing into isolation...');
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
