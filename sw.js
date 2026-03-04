const STATIC_CACHE = 'julia-site-v40';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v40/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v40/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v40/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v40/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v40/artwork/a_slow_blossoming_rose.webp",
    "v40/artwork/antitoxic.webp",
    "v40/artwork/autumns_whisper.webp",
    "v40/artwork/big_dreams_shine.webp",
    "v40/artwork/bite_of_the_night.webp",
    "v40/artwork/brooklyn.webp",
    "v40/artwork/buckn_the_bain.webp",
    "v40/artwork/cheerleader.webp",
    "v40/artwork/cool_fire.webp",
    "v40/artwork/deep_blue.webp",
    "v40/artwork/digital_ghost.webp",
    "v40/artwork/disco_flashback.webp",
    "v40/artwork/disco_flashback_2.webp",
    "v40/artwork/first_steps_to_stardom.webp",
    "v40/artwork/fog_of_fear.webp",
    "v40/artwork/forever.webp",
    "v40/artwork/friday_night.webp",
    "v40/artwork/frozen_heart.webp",
    "v40/artwork/garage_band.webp",
    "v40/artwork/ghost_in_the_garden.webp",
    "v40/artwork/god_save_the_king.webp",
    "v40/artwork/good_enough.webp",
    "v40/artwork/haunted_haven.webp",
    "v40/artwork/heart_of_fire_and_ice.webp",
    "v40/artwork/her_first_truck.webp",
    "v40/artwork/hes_still_here.webp",
    "v40/artwork/howling_wolves.webp",
    "v40/artwork/i_love_school.webp",
    "v40/artwork/introverted_girl.webp",
    "v40/artwork/just_wants_to_be_loved.webp",
    "v40/artwork/last_exit.webp",
    "v40/artwork/left_lane_legend.webp",
    "v40/artwork/maybe_they_knew.webp",
    "v40/artwork/my_foundation.webp",
    "v40/artwork/need_for_speed.webp",
    "v40/artwork/paradox_love.webp",
    "v40/artwork/password_expired.webp",
    "v40/artwork/password_expired_live.webp",
    "v40/artwork/peaks_of_gold.webp",
    "v40/artwork/private_lake.webp",
    "v40/artwork/radio_trash.webp",
    "v40/artwork/ride_the_groove.webp",
    "v40/artwork/sailing_on_open_water.webp",
    "v40/artwork/sanctified_sinner.webp",
    "v40/artwork/sanctuary_riot.webp",
    "v40/artwork/schools_out.webp",
    "v40/artwork/siblings.webp",
    "v40/artwork/skeleton_dance.webp",
    "v40/artwork/spooky.webp",
    "v40/artwork/storm_of_the_abyss.webp",
    "v40/artwork/summers_farewell.webp",
    "v40/artwork/tabby_gonzalez.webp",
    "v40/artwork/the_dive.webp",
    "v40/artwork/the_rhythm_of_the_fox.webp",
    "v40/artwork/the_steel_winged_swan.webp",
    "v40/artwork/toccata.webp",
    "v40/artwork/trick_or_treat.webp",
    "v40/artwork/uncaged.webp",
    "v40/artwork/upon_a_winding_trail.webp",
    "v40/artwork/venezia.webp",
    "v40/artwork/whiteout.webp",
    "v40/artwork/winterstorm.webp",
    "v40/datenschutz.html",
    "v40/images/Guitar-in-Dolomites.webp",
    "v40/images/Hero.webp",
    "v40/images/Hero_square.webp",
    "v40/images/Julia-skiing-Dolomites.webp",
    "v40/images/Stage_1.webp",
    "v40/images/Stage_2.webp",
    "v40/images/Stage_3.webp",
    "v40/images/Stage_4.webp",
    "v40/images/Stage_5.webp",
    "v40/images/Stage_6.webp",
    "v40/images/Stage_7.webp",
    "v40/images/Stage_8.webp",
    "v40/images/icons/app_icon_192.png",
    "v40/images/icons/app_icon_512.png",
    "v40/images/original/Guitar-in-Dolomites.png",
    "v40/images/original/Hero.jpg",
    "v40/images/original/Hero_square.jpg",
    "v40/images/original/Julia-skiing-Dolomites.png",
    "v40/images/original/Stage_1.png",
    "v40/images/original/Stage_2.png",
    "v40/images/original/Stage_3.png",
    "v40/images/original/Stage_4.png",
    "v40/images/original/Stage_5.png",
    "v40/images/original/Stage_6.png",
    "v40/images/original/Stage_7.png",
    "v40/images/original/Stage_8.png",
    "v40/images/password_expired_live.webp",
    "v40/impressum.html",
    "v40/index.html",
    "v40/js/DiaryService.js",
    "v40/js/Main.js",
    "v40/js/PickerDrum.js",
    "v40/js/Player.js",
    "v40/js/SongCollection.js",
    "v40/js/SongService.js",
    "v40/js/VersionCore.js",
    "v40/js/lucide.js",
    "v40/js/tailwindcss.js",
    "v40/legal_notice.html",
    "v40/manifest.json",
    "v40/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v40...');
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
