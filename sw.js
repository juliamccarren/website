const STATIC_CACHE = 'julia-site-v23';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "artwork/autumns_whisper.webp",
    "artwork/bite_of_the_night.webp",
    "artwork/brooklyn.webp",
    "artwork/fog_of_fear.webp",
    "artwork/forever.webp",
    "artwork/friday_night.webp",
    "artwork/frozen_heart.webp",
    "artwork/god_save_the_king.webp",
    "artwork/good_enough.webp",
    "artwork/haunted_haven.webp",
    "artwork/heart_of_fire_and_ice.webp",
    "artwork/howling_wolves.webp",
    "artwork/i_love_school.webp",
    "artwork/just_wants_to_be_loved.webp",
    "artwork/last_exit.webp",
    "artwork/my_foundation.webp",
    "artwork/password_expired.webp",
    "artwork/peaks_of_gold.webp",
    "artwork/radio_trash.webp",
    "artwork/sanctified_sinner.webp",
    "artwork/sanctuary_riot.webp",
    "artwork/schools_out.webp",
    "artwork/skeleton_dance.webp",
    "artwork/spooky.webp",
    "artwork/summers_farewell.webp",
    "artwork/the_steel_winged_swan.webp",
    "artwork/toccata.webp",
    "artwork/trick_or_treat.webp",
    "artwork/upon_a_winding_trail.webp",
    "artwork/whiteout.webp",
    "artwork/winterstorm.webp",
    "datenschutz.html",
    "images/Guitar-in-Dolomites.webp",
    "images/Hero.webp",
    "images/Hero_square.webp",
    "images/Julia-skiing-Dolomites.webp",
    "images/Stage_1.webp",
    "images/Stage_2.webp",
    "images/Stage_3.webp",
    "images/Stage_4.webp",
    "images/Stage_5.webp",
    "images/Stage_6.webp",
    "images/Stage_7.webp",
    "images/Stage_8.webp",
    "images/icons/app_icon_192.png",
    "images/icons/app_icon_512.png",
    "images/original/Guitar-in-Dolomites.png",
    "images/original/Hero.jpg",
    "images/original/Hero_square.jpg",
    "images/original/Julia-skiing-Dolomites.png",
    "images/original/Stage_1.png",
    "images/original/Stage_2.png",
    "images/original/Stage_3.png",
    "images/original/Stage_4.png",
    "images/original/Stage_5.png",
    "images/original/Stage_6.png",
    "images/original/Stage_7.png",
    "images/original/Stage_8.png",
    "impressum.html",
    "index.html",
    "js/DiaryService.js",
    "js/Main.js",
    "js/PickerDrum.js",
    "js/Player.js",
    "js/SongCollection.js",
    "js/SongService.js",
    "js/VersionCore.js",
    "js/lucide.js",
    "js/tailwindcss.js",
    "legal_notice.html",
    "manifest.json",
    "privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Neural App Shell v23 syncing...');
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
            return response || fetch(event.request);
        })
    );
});
