const STATIC_CACHE = 'julia-site-v55';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v55/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v55/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v55/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v55/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v55/artwork/a_slow_blossoming_rose.webp",
    "v55/artwork/antitoxic.webp",
    "v55/artwork/autumns_whisper.webp",
    "v55/artwork/big_dreams_shine.webp",
    "v55/artwork/big_dreams_shine_live.webp",
    "v55/artwork/bite_of_the_night.webp",
    "v55/artwork/boring.webp",
    "v55/artwork/brooklyn.webp",
    "v55/artwork/buckn_the_bain.webp",
    "v55/artwork/cheerleader.webp",
    "v55/artwork/coffee_in_amsterdam.webp",
    "v55/artwork/cool_fire.webp",
    "v55/artwork/deep_blue.webp",
    "v55/artwork/deepdive_1.webp",
    "v55/artwork/deepdive_2.webp",
    "v55/artwork/default.webp",
    "v55/artwork/digital_ghost.webp",
    "v55/artwork/disco_flashback.webp",
    "v55/artwork/disco_flashback_2.webp",
    "v55/artwork/drunk_not_dumb.webp",
    "v55/artwork/first_steps_to_stardom.webp",
    "v55/artwork/fog_of_fear.webp",
    "v55/artwork/forever.webp",
    "v55/artwork/friday_night.webp",
    "v55/artwork/from_first_steps_to_stardom.webp",
    "v55/artwork/frost_and_friction.webp",
    "v55/artwork/frozen_heart.webp",
    "v55/artwork/garage_band.webp",
    "v55/artwork/ghost_in_the_garden.webp",
    "v55/artwork/god_save_the_king.webp",
    "v55/artwork/golden_days.webp",
    "v55/artwork/good_enough.webp",
    "v55/artwork/haunted_haven.webp",
    "v55/artwork/heart_of_fire_and_ice.webp",
    "v55/artwork/her_first_truck.webp",
    "v55/artwork/hes_still_here.webp",
    "v55/artwork/howling_wolves.webp",
    "v55/artwork/i_love_school.webp",
    "v55/artwork/i_scream.webp",
    "v55/artwork/insult_the_ones_you_love.webp",
    "v55/artwork/introverted_girl.webp",
    "v55/artwork/just_wants_to_be_loved.webp",
    "v55/artwork/last_exit.webp",
    "v55/artwork/left_lane_legend.webp",
    "v55/artwork/little_butterflies.webp",
    "v55/artwork/maybe_they_knew.webp",
    "v55/artwork/my_foundation.webp",
    "v55/artwork/my_sweet_little_star.webp",
    "v55/artwork/need_for_speed.webp",
    "v55/artwork/paradox_love.webp",
    "v55/artwork/password_expired.webp",
    "v55/artwork/password_expired_live.webp",
    "v55/artwork/peaks_of_gold.webp",
    "v55/artwork/private_lake.webp",
    "v55/artwork/radio_trash.webp",
    "v55/artwork/ride_the_groove.webp",
    "v55/artwork/sailing_on_open_water.webp",
    "v55/artwork/sanctified_sinner.webp",
    "v55/artwork/sanctuary_riot.webp",
    "v55/artwork/schools_out.webp",
    "v55/artwork/siblings.webp",
    "v55/artwork/skeleton_dance.webp",
    "v55/artwork/spooky.webp",
    "v55/artwork/storm_of_the_abyss.webp",
    "v55/artwork/summers_farewell.webp",
    "v55/artwork/tabby_gonzalez.webp",
    "v55/artwork/the_dive.webp",
    "v55/artwork/the_rhythm_of_the_fox.webp",
    "v55/artwork/the_soft_return.webp",
    "v55/artwork/the_steel_winged_swan.webp",
    "v55/artwork/toccata.webp",
    "v55/artwork/trick_or_treat.webp",
    "v55/artwork/uncaged.webp",
    "v55/artwork/upon_a_winding_trail.webp",
    "v55/artwork/venezia.webp",
    "v55/artwork/whiteout.webp",
    "v55/artwork/winterstorm.webp",
    "v55/datenschutz.html",
    "v55/images/Guitar-in-Dolomites.webp",
    "v55/images/Hero.webp",
    "v55/images/Hero_square.webp",
    "v55/images/Julia-skiing-Dolomites.webp",
    "v55/images/Stage_1.webp",
    "v55/images/Stage_2.webp",
    "v55/images/Stage_3.webp",
    "v55/images/Stage_4.webp",
    "v55/images/Stage_5.webp",
    "v55/images/Stage_6.webp",
    "v55/images/Stage_7.webp",
    "v55/images/Stage_8.webp",
    "v55/images/icons/app_icon_192.png",
    "v55/images/icons/app_icon_512.png",
    "v55/images/original/Guitar-in-Dolomites.png",
    "v55/images/original/Hero.jpg",
    "v55/images/original/Hero_square.jpg",
    "v55/images/original/Julia-skiing-Dolomites.png",
    "v55/images/original/Stage_1.png",
    "v55/images/original/Stage_2.png",
    "v55/images/original/Stage_3.png",
    "v55/images/original/Stage_4.png",
    "v55/images/original/Stage_5.png",
    "v55/images/original/Stage_6.png",
    "v55/images/original/Stage_7.png",
    "v55/images/original/Stage_8.png",
    "v55/images/password_expired_live.webp",
    "v55/images/podcasts.webp",
    "v55/impressum.html",
    "v55/index.html",
    "v55/js/DiaryService.js",
    "v55/js/Main.js",
    "v55/js/PickerDrum.js",
    "v55/js/Player.js",
    "v55/js/SongCollection.js",
    "v55/js/SongService.js",
    "v55/js/VersionCore.js",
    "v55/js/ffmpeg.min.js",
    "v55/js/lucide.js",
    "v55/js/tailwindcss.js",
    "v55/legal_notice.html",
    "v55/manifest.json",
    "v55/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v55...');
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
