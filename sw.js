const STATIC_CACHE = 'julia-site-v43';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v43/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v43/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v43/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v43/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v43/artwork/a_slow_blossoming_rose.webp",
    "v43/artwork/antitoxic.webp",
    "v43/artwork/autumns_whisper.webp",
    "v43/artwork/big_dreams_shine.webp",
    "v43/artwork/big_dreams_shine_live.webp",
    "v43/artwork/bite_of_the_night.webp",
    "v43/artwork/brooklyn.webp",
    "v43/artwork/buckn_the_bain.webp",
    "v43/artwork/cheerleader.webp",
    "v43/artwork/cool_fire.webp",
    "v43/artwork/deep_blue.webp",
    "v43/artwork/default.webp",
    "v43/artwork/digital_ghost.webp",
    "v43/artwork/disco_flashback.webp",
    "v43/artwork/disco_flashback_2.webp",
    "v43/artwork/first_steps_to_stardom.webp",
    "v43/artwork/fog_of_fear.webp",
    "v43/artwork/forever.webp",
    "v43/artwork/friday_night.webp",
    "v43/artwork/from_first_steps_to_stardom.webp",
    "v43/artwork/frost_and_friction.webp",
    "v43/artwork/frozen_heart.webp",
    "v43/artwork/garage_band.webp",
    "v43/artwork/ghost_in_the_garden.webp",
    "v43/artwork/god_save_the_king.webp",
    "v43/artwork/golden_days.webp",
    "v43/artwork/good_enough.webp",
    "v43/artwork/haunted_haven.webp",
    "v43/artwork/heart_of_fire_and_ice.webp",
    "v43/artwork/her_first_truck.webp",
    "v43/artwork/hes_still_here.webp",
    "v43/artwork/howling_wolves.webp",
    "v43/artwork/i_love_school.webp",
    "v43/artwork/i_scream.webp",
    "v43/artwork/introverted_girl.webp",
    "v43/artwork/just_wants_to_be_loved.webp",
    "v43/artwork/last_exit.webp",
    "v43/artwork/left_lane_legend.webp",
    "v43/artwork/little_butterflies.webp",
    "v43/artwork/maybe_they_knew.webp",
    "v43/artwork/my_foundation.webp",
    "v43/artwork/my_sweet_little_star.webp",
    "v43/artwork/need_for_speed.webp",
    "v43/artwork/paradox_love.webp",
    "v43/artwork/password_expired.webp",
    "v43/artwork/password_expired_live.webp",
    "v43/artwork/peaks_of_gold.webp",
    "v43/artwork/private_lake.webp",
    "v43/artwork/radio_trash.webp",
    "v43/artwork/ride_the_groove.webp",
    "v43/artwork/sailing_on_open_water.webp",
    "v43/artwork/sanctified_sinner.webp",
    "v43/artwork/sanctuary_riot.webp",
    "v43/artwork/schools_out.webp",
    "v43/artwork/siblings.webp",
    "v43/artwork/skeleton_dance.webp",
    "v43/artwork/spooky.webp",
    "v43/artwork/storm_of_the_abyss.webp",
    "v43/artwork/summers_farewell.webp",
    "v43/artwork/tabby_gonzalez.webp",
    "v43/artwork/the_dive.webp",
    "v43/artwork/the_rhythm_of_the_fox.webp",
    "v43/artwork/the_soft_return.webp",
    "v43/artwork/the_steel_winged_swan.webp",
    "v43/artwork/toccata.webp",
    "v43/artwork/trick_or_treat.webp",
    "v43/artwork/uncaged.webp",
    "v43/artwork/upon_a_winding_trail.webp",
    "v43/artwork/venezia.webp",
    "v43/artwork/whiteout.webp",
    "v43/artwork/winterstorm.webp",
    "v43/datenschutz.html",
    "v43/images/Guitar-in-Dolomites.webp",
    "v43/images/Hero.webp",
    "v43/images/Hero_square.webp",
    "v43/images/Julia-skiing-Dolomites.webp",
    "v43/images/Stage_1.webp",
    "v43/images/Stage_2.webp",
    "v43/images/Stage_3.webp",
    "v43/images/Stage_4.webp",
    "v43/images/Stage_5.webp",
    "v43/images/Stage_6.webp",
    "v43/images/Stage_7.webp",
    "v43/images/Stage_8.webp",
    "v43/images/icons/app_icon_192.png",
    "v43/images/icons/app_icon_512.png",
    "v43/images/original/Guitar-in-Dolomites.png",
    "v43/images/original/Hero.jpg",
    "v43/images/original/Hero_square.jpg",
    "v43/images/original/Julia-skiing-Dolomites.png",
    "v43/images/original/Stage_1.png",
    "v43/images/original/Stage_2.png",
    "v43/images/original/Stage_3.png",
    "v43/images/original/Stage_4.png",
    "v43/images/original/Stage_5.png",
    "v43/images/original/Stage_6.png",
    "v43/images/original/Stage_7.png",
    "v43/images/original/Stage_8.png",
    "v43/images/password_expired_live.webp",
    "v43/impressum.html",
    "v43/index.html",
    "v43/js/DiaryService.js",
    "v43/js/Main.js",
    "v43/js/PickerDrum.js",
    "v43/js/Player.js",
    "v43/js/SongCollection.js",
    "v43/js/SongService.js",
    "v43/js/VersionCore.js",
    "v43/js/ffmpeg.min.js",
    "v43/js/lucide.js",
    "v43/js/tailwindcss.js",
    "v43/legal_notice.html",
    "v43/manifest.json",
    "v43/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v43...');
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
