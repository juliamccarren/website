const STATIC_CACHE = 'julia-site-v30';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v30/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v30/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v30/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v30/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v30/artwork/autumns_whisper.webp",
    "v30/artwork/bite_of_the_night.webp",
    "v30/artwork/brooklyn.webp",
    "v30/artwork/fog_of_fear.webp",
    "v30/artwork/forever.webp",
    "v30/artwork/friday_night.webp",
    "v30/artwork/frozen_heart.webp",
    "v30/artwork/god_save_the_king.webp",
    "v30/artwork/good_enough.webp",
    "v30/artwork/haunted_haven.webp",
    "v30/artwork/heart_of_fire_and_ice.webp",
    "v30/artwork/howling_wolves.webp",
    "v30/artwork/i_love_school.webp",
    "v30/artwork/just_wants_to_be_loved.webp",
    "v30/artwork/last_exit.webp",
    "v30/artwork/my_foundation.webp",
    "v30/artwork/password_expired.webp",
    "v30/artwork/peaks_of_gold.webp",
    "v30/artwork/radio_trash.webp",
    "v30/artwork/sanctified_sinner.webp",
    "v30/artwork/sanctuary_riot.webp",
    "v30/artwork/schools_out.webp",
    "v30/artwork/skeleton_dance.webp",
    "v30/artwork/spooky.webp",
    "v30/artwork/summers_farewell.webp",
    "v30/artwork/the_steel_winged_swan.webp",
    "v30/artwork/toccata.webp",
    "v30/artwork/trick_or_treat.webp",
    "v30/artwork/upon_a_winding_trail.webp",
    "v30/artwork/whiteout.webp",
    "v30/artwork/winterstorm.webp",
    "v30/datenschutz.html",
    "v30/images/Guitar-in-Dolomites.webp",
    "v30/images/Hero.webp",
    "v30/images/Hero_square.webp",
    "v30/images/Julia-skiing-Dolomites.webp",
    "v30/images/Stage_1.webp",
    "v30/images/Stage_2.webp",
    "v30/images/Stage_3.webp",
    "v30/images/Stage_4.webp",
    "v30/images/Stage_5.webp",
    "v30/images/Stage_6.webp",
    "v30/images/Stage_7.webp",
    "v30/images/Stage_8.webp",
    "v30/images/icons/app_icon_192.png",
    "v30/images/icons/app_icon_512.png",
    "v30/images/original/Guitar-in-Dolomites.png",
    "v30/images/original/Hero.jpg",
    "v30/images/original/Hero_square.jpg",
    "v30/images/original/Julia-skiing-Dolomites.png",
    "v30/images/original/Stage_1.png",
    "v30/images/original/Stage_2.png",
    "v30/images/original/Stage_3.png",
    "v30/images/original/Stage_4.png",
    "v30/images/original/Stage_5.png",
    "v30/images/original/Stage_6.png",
    "v30/images/original/Stage_7.png",
    "v30/images/original/Stage_8.png",
    "v30/impressum.html",
    "v30/index.html",
    "v30/js/DiaryService.js",
    "v30/js/Main.js",
    "v30/js/PickerDrum.js",
    "v30/js/Player.js",
    "v30/js/SongCollection.js",
    "v30/js/SongService.js",
    "v30/js/VersionCore.js",
    "v30/js/lucide.js",
    "v30/js/tailwindcss.js",
    "v30/legal_notice.html",
    "v30/manifest.json",
    "v30/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v30...');
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

self.addEventListener('fetch', event => {
    if (event.request.url.includes('music.juliamccarren.com')) return;
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
