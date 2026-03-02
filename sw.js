const STATIC_CACHE = 'julia-site-v32';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v32/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v32/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v32/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v32/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v32/artwork/a_slow_blossoming_rose.webp",
    "v32/artwork/autumns_whisper.webp",
    "v32/artwork/big_dreams_shine.webp",
    "v32/artwork/bite_of_the_night.webp",
    "v32/artwork/brooklyn.webp",
    "v32/artwork/buckn_the_bain.webp",
    "v32/artwork/cheerleader.webp",
    "v32/artwork/cool_fire.webp",
    "v32/artwork/deep_blue.webp",
    "v32/artwork/disco_flashback.webp",
    "v32/artwork/first_steps_to_stardom.webp",
    "v32/artwork/fog_of_fear.webp",
    "v32/artwork/forever.webp",
    "v32/artwork/friday_night.webp",
    "v32/artwork/frozen_heart.webp",
    "v32/artwork/garage_band.webp",
    "v32/artwork/ghost_in_the_garden.webp",
    "v32/artwork/god_save_the_king.webp",
    "v32/artwork/good_enough.webp",
    "v32/artwork/haunted_haven.webp",
    "v32/artwork/heart_of_fire_and_ice.webp",
    "v32/artwork/her_first_truck.webp",
    "v32/artwork/hes_still_here.webp",
    "v32/artwork/howling_wolves.webp",
    "v32/artwork/i_love_school.webp",
    "v32/artwork/introverted_girl.webp",
    "v32/artwork/just_wants_to_be_loved.webp",
    "v32/artwork/last_exit.webp",
    "v32/artwork/maybe_they_knew.webp",
    "v32/artwork/my_foundation.webp",
    "v32/artwork/need_for_speed.webp",
    "v32/artwork/paradox_love.webp",
    "v32/artwork/password_expired.webp",
    "v32/artwork/password_expired_live.webp",
    "v32/artwork/peaks_of_gold.webp",
    "v32/artwork/radio_trash.webp",
    "v32/artwork/ride_the_groove.webp",
    "v32/artwork/sailing_on_open_water.webp",
    "v32/artwork/sanctified_sinner.webp",
    "v32/artwork/sanctuary_riot.webp",
    "v32/artwork/schools_out.webp",
    "v32/artwork/siblings.webp",
    "v32/artwork/skeleton_dance.webp",
    "v32/artwork/spooky.webp",
    "v32/artwork/storm_of_the_abyss.webp",
    "v32/artwork/summers_farewell.webp",
    "v32/artwork/tabby_gonzalez.webp",
    "v32/artwork/the_dive.webp",
    "v32/artwork/the_rhythm_of_the_fox.webp",
    "v32/artwork/the_steel_winged_swan.webp",
    "v32/artwork/toccata.webp",
    "v32/artwork/trick_or_treat.webp",
    "v32/artwork/upon_a_winding_trail.webp",
    "v32/artwork/venezia.webp",
    "v32/artwork/whiteout.webp",
    "v32/artwork/winterstorm.webp",
    "v32/datenschutz.html",
    "v32/images/Guitar-in-Dolomites.webp",
    "v32/images/Hero.webp",
    "v32/images/Hero_square.webp",
    "v32/images/Julia-skiing-Dolomites.webp",
    "v32/images/Stage_1.webp",
    "v32/images/Stage_2.webp",
    "v32/images/Stage_3.webp",
    "v32/images/Stage_4.webp",
    "v32/images/Stage_5.webp",
    "v32/images/Stage_6.webp",
    "v32/images/Stage_7.webp",
    "v32/images/Stage_8.webp",
    "v32/images/icons/app_icon_192.png",
    "v32/images/icons/app_icon_512.png",
    "v32/images/original/Guitar-in-Dolomites.png",
    "v32/images/original/Hero.jpg",
    "v32/images/original/Hero_square.jpg",
    "v32/images/original/Julia-skiing-Dolomites.png",
    "v32/images/original/Stage_1.png",
    "v32/images/original/Stage_2.png",
    "v32/images/original/Stage_3.png",
    "v32/images/original/Stage_4.png",
    "v32/images/original/Stage_5.png",
    "v32/images/original/Stage_6.png",
    "v32/images/original/Stage_7.png",
    "v32/images/original/Stage_8.png",
    "v32/images/password_expired_live.webp",
    "v32/impressum.html",
    "v32/index.html",
    "v32/js/DiaryService.js",
    "v32/js/Main.js",
    "v32/js/PickerDrum.js",
    "v32/js/Player.js",
    "v32/js/SongCollection.js",
    "v32/js/SongService.js",
    "v32/js/VersionCore.js",
    "v32/js/lucide.js",
    "v32/js/tailwindcss.js",
    "v32/legal_notice.html",
    "v32/manifest.json",
    "v32/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v32...');
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
