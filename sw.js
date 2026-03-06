const STATIC_CACHE = 'julia-site-v42';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v42/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v42/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v42/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v42/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v42/artwork/a_slow_blossoming_rose.webp",
    "v42/artwork/antitoxic.webp",
    "v42/artwork/autumns_whisper.webp",
    "v42/artwork/big_dreams_shine.webp",
    "v42/artwork/big_dreams_shine_live.webp",
    "v42/artwork/bite_of_the_night.webp",
    "v42/artwork/brooklyn.webp",
    "v42/artwork/buckn_the_bain.webp",
    "v42/artwork/cheerleader.webp",
    "v42/artwork/cool_fire.webp",
    "v42/artwork/deep_blue.webp",
    "v42/artwork/default.webp",
    "v42/artwork/digital_ghost.webp",
    "v42/artwork/disco_flashback.webp",
    "v42/artwork/disco_flashback_2.webp",
    "v42/artwork/first_steps_to_stardom.webp",
    "v42/artwork/fog_of_fear.webp",
    "v42/artwork/forever.webp",
    "v42/artwork/friday_night.webp",
    "v42/artwork/from_first_steps_to_stardom.webp",
    "v42/artwork/frost_and_friction.webp",
    "v42/artwork/frozen_heart.webp",
    "v42/artwork/garage_band.webp",
    "v42/artwork/ghost_in_the_garden.webp",
    "v42/artwork/god_save_the_king.webp",
    "v42/artwork/golden_days.webp",
    "v42/artwork/good_enough.webp",
    "v42/artwork/haunted_haven.webp",
    "v42/artwork/heart_of_fire_and_ice.webp",
    "v42/artwork/her_first_truck.webp",
    "v42/artwork/hes_still_here.webp",
    "v42/artwork/howling_wolves.webp",
    "v42/artwork/i_love_school.webp",
    "v42/artwork/i_scream.webp",
    "v42/artwork/introverted_girl.webp",
    "v42/artwork/just_wants_to_be_loved.webp",
    "v42/artwork/last_exit.webp",
    "v42/artwork/left_lane_legend.webp",
    "v42/artwork/little_butterflies.webp",
    "v42/artwork/maybe_they_knew.webp",
    "v42/artwork/my_foundation.webp",
    "v42/artwork/my_sweet_little_star.webp",
    "v42/artwork/need_for_speed.webp",
    "v42/artwork/paradox_love.webp",
    "v42/artwork/password_expired.webp",
    "v42/artwork/password_expired_live.webp",
    "v42/artwork/peaks_of_gold.webp",
    "v42/artwork/private_lake.webp",
    "v42/artwork/radio_trash.webp",
    "v42/artwork/ride_the_groove.webp",
    "v42/artwork/sailing_on_open_water.webp",
    "v42/artwork/sanctified_sinner.webp",
    "v42/artwork/sanctuary_riot.webp",
    "v42/artwork/schools_out.webp",
    "v42/artwork/siblings.webp",
    "v42/artwork/skeleton_dance.webp",
    "v42/artwork/spooky.webp",
    "v42/artwork/storm_of_the_abyss.webp",
    "v42/artwork/summers_farewell.webp",
    "v42/artwork/tabby_gonzalez.webp",
    "v42/artwork/the_dive.webp",
    "v42/artwork/the_rhythm_of_the_fox.webp",
    "v42/artwork/the_soft_return.webp",
    "v42/artwork/the_steel_winged_swan.webp",
    "v42/artwork/toccata.webp",
    "v42/artwork/trick_or_treat.webp",
    "v42/artwork/uncaged.webp",
    "v42/artwork/upon_a_winding_trail.webp",
    "v42/artwork/venezia.webp",
    "v42/artwork/whiteout.webp",
    "v42/artwork/winterstorm.webp",
    "v42/datenschutz.html",
    "v42/images/Guitar-in-Dolomites.webp",
    "v42/images/Hero.webp",
    "v42/images/Hero_square.webp",
    "v42/images/Julia-skiing-Dolomites.webp",
    "v42/images/Stage_1.webp",
    "v42/images/Stage_2.webp",
    "v42/images/Stage_3.webp",
    "v42/images/Stage_4.webp",
    "v42/images/Stage_5.webp",
    "v42/images/Stage_6.webp",
    "v42/images/Stage_7.webp",
    "v42/images/Stage_8.webp",
    "v42/images/icons/app_icon_192.png",
    "v42/images/icons/app_icon_512.png",
    "v42/images/original/Guitar-in-Dolomites.png",
    "v42/images/original/Hero.jpg",
    "v42/images/original/Hero_square.jpg",
    "v42/images/original/Julia-skiing-Dolomites.png",
    "v42/images/original/Stage_1.png",
    "v42/images/original/Stage_2.png",
    "v42/images/original/Stage_3.png",
    "v42/images/original/Stage_4.png",
    "v42/images/original/Stage_5.png",
    "v42/images/original/Stage_6.png",
    "v42/images/original/Stage_7.png",
    "v42/images/original/Stage_8.png",
    "v42/images/password_expired_live.webp",
    "v42/impressum.html",
    "v42/index.html",
    "v42/js/DiaryService.js",
    "v42/js/Main.js",
    "v42/js/PickerDrum.js",
    "v42/js/Player.js",
    "v42/js/SongCollection.js",
    "v42/js/SongService.js",
    "v42/js/VersionCore.js",
    "v42/js/ffmpeg.min.js",
    "v42/js/lucide.js",
    "v42/js/tailwindcss.js",
    "v42/legal_notice.html",
    "v42/manifest.json",
    "v42/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v42...');
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
