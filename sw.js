const STATIC_CACHE = 'julia-site-v31';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v31/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v31/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v31/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v31/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v31/artwork/a_slow_blossoming_rose.webp",
    "v31/artwork/autumns_whisper.webp",
    "v31/artwork/big_dreams_shine.webp",
    "v31/artwork/bite_of_the_night.webp",
    "v31/artwork/brooklyn.webp",
    "v31/artwork/buckn_the_bain.webp",
    "v31/artwork/cheerleader.webp",
    "v31/artwork/cool_fire.webp",
    "v31/artwork/deep_blue.webp",
    "v31/artwork/disco_flashback.webp",
    "v31/artwork/first_steps_to_stardom.webp",
    "v31/artwork/fog_of_fear.webp",
    "v31/artwork/forever.webp",
    "v31/artwork/friday_night.webp",
    "v31/artwork/frozen_heart.webp",
    "v31/artwork/garage_band.webp",
    "v31/artwork/ghost_in_the_garden.webp",
    "v31/artwork/god_save_the_king.webp",
    "v31/artwork/good_enough.webp",
    "v31/artwork/haunted_haven.webp",
    "v31/artwork/heart_of_fire_and_ice.webp",
    "v31/artwork/her_first_truck.webp",
    "v31/artwork/hes_still_here.webp",
    "v31/artwork/howling_wolves.webp",
    "v31/artwork/i_love_school.webp",
    "v31/artwork/introverted_girl.webp",
    "v31/artwork/just_wants_to_be_loved.webp",
    "v31/artwork/last_exit.webp",
    "v31/artwork/maybe_they_knew.webp",
    "v31/artwork/my_foundation.webp",
    "v31/artwork/need_for_speed.webp",
    "v31/artwork/paradox_love.webp",
    "v31/artwork/password_expired.webp",
    "v31/artwork/password_expired_live.webp",
    "v31/artwork/peaks_of_gold.webp",
    "v31/artwork/radio_trash.webp",
    "v31/artwork/ride_the_groove.webp",
    "v31/artwork/sailing_on_open_water.webp",
    "v31/artwork/sanctified_sinner.webp",
    "v31/artwork/sanctuary_riot.webp",
    "v31/artwork/schools_out.webp",
    "v31/artwork/siblings.webp",
    "v31/artwork/skeleton_dance.webp",
    "v31/artwork/spooky.webp",
    "v31/artwork/storm_of_the_abyss.webp",
    "v31/artwork/summers_farewell.webp",
    "v31/artwork/tabby_gonzalez.webp",
    "v31/artwork/the_dive.webp",
    "v31/artwork/the_rhythm_of_the_fox.webp",
    "v31/artwork/the_steel_winged_swan.webp",
    "v31/artwork/toccata.webp",
    "v31/artwork/trick_or_treat.webp",
    "v31/artwork/upon_a_winding_trail.webp",
    "v31/artwork/venezia.webp",
    "v31/artwork/whiteout.webp",
    "v31/artwork/winterstorm.webp",
    "v31/datenschutz.html",
    "v31/images/Guitar-in-Dolomites.webp",
    "v31/images/Hero.webp",
    "v31/images/Hero_square.webp",
    "v31/images/Julia-skiing-Dolomites.webp",
    "v31/images/Stage_1.webp",
    "v31/images/Stage_2.webp",
    "v31/images/Stage_3.webp",
    "v31/images/Stage_4.webp",
    "v31/images/Stage_5.webp",
    "v31/images/Stage_6.webp",
    "v31/images/Stage_7.webp",
    "v31/images/Stage_8.webp",
    "v31/images/icons/app_icon_192.png",
    "v31/images/icons/app_icon_512.png",
    "v31/images/original/Guitar-in-Dolomites.png",
    "v31/images/original/Hero.jpg",
    "v31/images/original/Hero_square.jpg",
    "v31/images/original/Julia-skiing-Dolomites.png",
    "v31/images/original/Stage_1.png",
    "v31/images/original/Stage_2.png",
    "v31/images/original/Stage_3.png",
    "v31/images/original/Stage_4.png",
    "v31/images/original/Stage_5.png",
    "v31/images/original/Stage_6.png",
    "v31/images/original/Stage_7.png",
    "v31/images/original/Stage_8.png",
    "v31/images/password_expired_live.webp",
    "v31/impressum.html",
    "v31/index.html",
    "v31/js/DiaryService.js",
    "v31/js/Main.js",
    "v31/js/PickerDrum.js",
    "v31/js/Player.js",
    "v31/js/SongCollection.js",
    "v31/js/SongService.js",
    "v31/js/VersionCore.js",
    "v31/js/lucide.js",
    "v31/js/tailwindcss.js",
    "v31/legal_notice.html",
    "v31/manifest.json",
    "v31/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v31...');
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
