const STATIC_CACHE = 'julia-site-v34';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v34/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v34/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v34/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v34/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v34/artwork/a_slow_blossoming_rose.webp",
    "v34/artwork/autumns_whisper.webp",
    "v34/artwork/big_dreams_shine.webp",
    "v34/artwork/bite_of_the_night.webp",
    "v34/artwork/brooklyn.webp",
    "v34/artwork/buckn_the_bain.webp",
    "v34/artwork/cheerleader.webp",
    "v34/artwork/cool_fire.webp",
    "v34/artwork/deep_blue.webp",
    "v34/artwork/disco_flashback.webp",
    "v34/artwork/first_steps_to_stardom.webp",
    "v34/artwork/fog_of_fear.webp",
    "v34/artwork/forever.webp",
    "v34/artwork/friday_night.webp",
    "v34/artwork/frozen_heart.webp",
    "v34/artwork/garage_band.webp",
    "v34/artwork/ghost_in_the_garden.webp",
    "v34/artwork/god_save_the_king.webp",
    "v34/artwork/good_enough.webp",
    "v34/artwork/haunted_haven.webp",
    "v34/artwork/heart_of_fire_and_ice.webp",
    "v34/artwork/her_first_truck.webp",
    "v34/artwork/hes_still_here.webp",
    "v34/artwork/howling_wolves.webp",
    "v34/artwork/i_love_school.webp",
    "v34/artwork/introverted_girl.webp",
    "v34/artwork/just_wants_to_be_loved.webp",
    "v34/artwork/last_exit.webp",
    "v34/artwork/maybe_they_knew.webp",
    "v34/artwork/my_foundation.webp",
    "v34/artwork/need_for_speed.webp",
    "v34/artwork/paradox_love.webp",
    "v34/artwork/password_expired.webp",
    "v34/artwork/password_expired_live.webp",
    "v34/artwork/peaks_of_gold.webp",
    "v34/artwork/radio_trash.webp",
    "v34/artwork/ride_the_groove.webp",
    "v34/artwork/sailing_on_open_water.webp",
    "v34/artwork/sanctified_sinner.webp",
    "v34/artwork/sanctuary_riot.webp",
    "v34/artwork/schools_out.webp",
    "v34/artwork/siblings.webp",
    "v34/artwork/skeleton_dance.webp",
    "v34/artwork/spooky.webp",
    "v34/artwork/storm_of_the_abyss.webp",
    "v34/artwork/summers_farewell.webp",
    "v34/artwork/tabby_gonzalez.webp",
    "v34/artwork/the_dive.webp",
    "v34/artwork/the_rhythm_of_the_fox.webp",
    "v34/artwork/the_steel_winged_swan.webp",
    "v34/artwork/toccata.webp",
    "v34/artwork/trick_or_treat.webp",
    "v34/artwork/upon_a_winding_trail.webp",
    "v34/artwork/venezia.webp",
    "v34/artwork/whiteout.webp",
    "v34/artwork/winterstorm.webp",
    "v34/datenschutz.html",
    "v34/images/Guitar-in-Dolomites.webp",
    "v34/images/Hero.webp",
    "v34/images/Hero_square.webp",
    "v34/images/Julia-skiing-Dolomites.webp",
    "v34/images/Stage_1.webp",
    "v34/images/Stage_2.webp",
    "v34/images/Stage_3.webp",
    "v34/images/Stage_4.webp",
    "v34/images/Stage_5.webp",
    "v34/images/Stage_6.webp",
    "v34/images/Stage_7.webp",
    "v34/images/Stage_8.webp",
    "v34/images/icons/app_icon_192.png",
    "v34/images/icons/app_icon_512.png",
    "v34/images/original/Guitar-in-Dolomites.png",
    "v34/images/original/Hero.jpg",
    "v34/images/original/Hero_square.jpg",
    "v34/images/original/Julia-skiing-Dolomites.png",
    "v34/images/original/Stage_1.png",
    "v34/images/original/Stage_2.png",
    "v34/images/original/Stage_3.png",
    "v34/images/original/Stage_4.png",
    "v34/images/original/Stage_5.png",
    "v34/images/original/Stage_6.png",
    "v34/images/original/Stage_7.png",
    "v34/images/original/Stage_8.png",
    "v34/images/password_expired_live.webp",
    "v34/impressum.html",
    "v34/index.html",
    "v34/js/DiaryService.js",
    "v34/js/Main.js",
    "v34/js/PickerDrum.js",
    "v34/js/Player.js",
    "v34/js/SongCollection.js",
    "v34/js/SongService.js",
    "v34/js/VersionCore.js",
    "v34/js/lucide.js",
    "v34/js/tailwindcss.js",
    "v34/legal_notice.html",
    "v34/manifest.json",
    "v34/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v34...');
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
