const STATIC_CACHE = 'julia-site-v29';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v29/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v29/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v29/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v29/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v29/artwork/autumns_whisper.webp",
    "v29/artwork/bite_of_the_night.webp",
    "v29/artwork/brooklyn.webp",
    "v29/artwork/fog_of_fear.webp",
    "v29/artwork/forever.webp",
    "v29/artwork/friday_night.webp",
    "v29/artwork/frozen_heart.webp",
    "v29/artwork/god_save_the_king.webp",
    "v29/artwork/good_enough.webp",
    "v29/artwork/haunted_haven.webp",
    "v29/artwork/heart_of_fire_and_ice.webp",
    "v29/artwork/howling_wolves.webp",
    "v29/artwork/i_love_school.webp",
    "v29/artwork/just_wants_to_be_loved.webp",
    "v29/artwork/last_exit.webp",
    "v29/artwork/my_foundation.webp",
    "v29/artwork/password_expired.webp",
    "v29/artwork/peaks_of_gold.webp",
    "v29/artwork/radio_trash.webp",
    "v29/artwork/sanctified_sinner.webp",
    "v29/artwork/sanctuary_riot.webp",
    "v29/artwork/schools_out.webp",
    "v29/artwork/skeleton_dance.webp",
    "v29/artwork/spooky.webp",
    "v29/artwork/summers_farewell.webp",
    "v29/artwork/the_steel_winged_swan.webp",
    "v29/artwork/toccata.webp",
    "v29/artwork/trick_or_treat.webp",
    "v29/artwork/upon_a_winding_trail.webp",
    "v29/artwork/whiteout.webp",
    "v29/artwork/winterstorm.webp",
    "v29/datenschutz.html",
    "v29/images/Guitar-in-Dolomites.webp",
    "v29/images/Hero.webp",
    "v29/images/Hero_square.webp",
    "v29/images/Julia-skiing-Dolomites.webp",
    "v29/images/Stage_1.webp",
    "v29/images/Stage_2.webp",
    "v29/images/Stage_3.webp",
    "v29/images/Stage_4.webp",
    "v29/images/Stage_5.webp",
    "v29/images/Stage_6.webp",
    "v29/images/Stage_7.webp",
    "v29/images/Stage_8.webp",
    "v29/images/icons/app_icon_192.png",
    "v29/images/icons/app_icon_512.png",
    "v29/images/original/Guitar-in-Dolomites.png",
    "v29/images/original/Hero.jpg",
    "v29/images/original/Hero_square.jpg",
    "v29/images/original/Julia-skiing-Dolomites.png",
    "v29/images/original/Stage_1.png",
    "v29/images/original/Stage_2.png",
    "v29/images/original/Stage_3.png",
    "v29/images/original/Stage_4.png",
    "v29/images/original/Stage_5.png",
    "v29/images/original/Stage_6.png",
    "v29/images/original/Stage_7.png",
    "v29/images/original/Stage_8.png",
    "v29/impressum.html",
    "v29/index.html",
    "v29/js/DiaryService.js",
    "v29/js/Main.js",
    "v29/js/PickerDrum.js",
    "v29/js/Player.js",
    "v29/js/SongCollection.js",
    "v29/js/SongService.js",
    "v29/js/VersionCore.js",
    "v29/js/lucide.js",
    "v29/js/tailwindcss.js",
    "v29/legal_notice.html",
    "v29/manifest.json",
    "v29/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v29...');
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
