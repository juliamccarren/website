const STATIC_CACHE = 'julia-site-v54';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v54/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v54/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v54/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v54/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v54/artwork/a_slow_blossoming_rose.webp",
    "v54/artwork/antitoxic.webp",
    "v54/artwork/autumns_whisper.webp",
    "v54/artwork/big_dreams_shine.webp",
    "v54/artwork/big_dreams_shine_live.webp",
    "v54/artwork/bite_of_the_night.webp",
    "v54/artwork/boring.webp",
    "v54/artwork/brooklyn.webp",
    "v54/artwork/buckn_the_bain.webp",
    "v54/artwork/cheerleader.webp",
    "v54/artwork/coffee_in_amsterdam.webp",
    "v54/artwork/cool_fire.webp",
    "v54/artwork/deep_blue.webp",
    "v54/artwork/deepdive_1.webp",
    "v54/artwork/deepdive_2.webp",
    "v54/artwork/default.webp",
    "v54/artwork/digital_ghost.webp",
    "v54/artwork/disco_flashback.webp",
    "v54/artwork/disco_flashback_2.webp",
    "v54/artwork/drunk_not_dumb.webp",
    "v54/artwork/first_steps_to_stardom.webp",
    "v54/artwork/fog_of_fear.webp",
    "v54/artwork/forever.webp",
    "v54/artwork/friday_night.webp",
    "v54/artwork/from_first_steps_to_stardom.webp",
    "v54/artwork/frost_and_friction.webp",
    "v54/artwork/frozen_heart.webp",
    "v54/artwork/garage_band.webp",
    "v54/artwork/ghost_in_the_garden.webp",
    "v54/artwork/god_save_the_king.webp",
    "v54/artwork/golden_days.webp",
    "v54/artwork/good_enough.webp",
    "v54/artwork/haunted_haven.webp",
    "v54/artwork/heart_of_fire_and_ice.webp",
    "v54/artwork/her_first_truck.webp",
    "v54/artwork/hes_still_here.webp",
    "v54/artwork/howling_wolves.webp",
    "v54/artwork/i_love_school.webp",
    "v54/artwork/i_scream.webp",
    "v54/artwork/introverted_girl.webp",
    "v54/artwork/just_wants_to_be_loved.webp",
    "v54/artwork/last_exit.webp",
    "v54/artwork/left_lane_legend.webp",
    "v54/artwork/little_butterflies.webp",
    "v54/artwork/maybe_they_knew.webp",
    "v54/artwork/my_foundation.webp",
    "v54/artwork/my_sweet_little_star.webp",
    "v54/artwork/need_for_speed.webp",
    "v54/artwork/paradox_love.webp",
    "v54/artwork/password_expired.webp",
    "v54/artwork/password_expired_live.webp",
    "v54/artwork/peaks_of_gold.webp",
    "v54/artwork/private_lake.webp",
    "v54/artwork/radio_trash.webp",
    "v54/artwork/ride_the_groove.webp",
    "v54/artwork/sailing_on_open_water.webp",
    "v54/artwork/sanctified_sinner.webp",
    "v54/artwork/sanctuary_riot.webp",
    "v54/artwork/schools_out.webp",
    "v54/artwork/siblings.webp",
    "v54/artwork/skeleton_dance.webp",
    "v54/artwork/spooky.webp",
    "v54/artwork/storm_of_the_abyss.webp",
    "v54/artwork/summers_farewell.webp",
    "v54/artwork/tabby_gonzalez.webp",
    "v54/artwork/the_dive.webp",
    "v54/artwork/the_rhythm_of_the_fox.webp",
    "v54/artwork/the_soft_return.webp",
    "v54/artwork/the_steel_winged_swan.webp",
    "v54/artwork/toccata.webp",
    "v54/artwork/trick_or_treat.webp",
    "v54/artwork/uncaged.webp",
    "v54/artwork/upon_a_winding_trail.webp",
    "v54/artwork/venezia.webp",
    "v54/artwork/whiteout.webp",
    "v54/artwork/winterstorm.webp",
    "v54/datenschutz.html",
    "v54/images/Guitar-in-Dolomites.webp",
    "v54/images/Hero.webp",
    "v54/images/Hero_square.webp",
    "v54/images/Julia-skiing-Dolomites.webp",
    "v54/images/Stage_1.webp",
    "v54/images/Stage_2.webp",
    "v54/images/Stage_3.webp",
    "v54/images/Stage_4.webp",
    "v54/images/Stage_5.webp",
    "v54/images/Stage_6.webp",
    "v54/images/Stage_7.webp",
    "v54/images/Stage_8.webp",
    "v54/images/icons/app_icon_192.png",
    "v54/images/icons/app_icon_512.png",
    "v54/images/original/Guitar-in-Dolomites.png",
    "v54/images/original/Hero.jpg",
    "v54/images/original/Hero_square.jpg",
    "v54/images/original/Julia-skiing-Dolomites.png",
    "v54/images/original/Stage_1.png",
    "v54/images/original/Stage_2.png",
    "v54/images/original/Stage_3.png",
    "v54/images/original/Stage_4.png",
    "v54/images/original/Stage_5.png",
    "v54/images/original/Stage_6.png",
    "v54/images/original/Stage_7.png",
    "v54/images/original/Stage_8.png",
    "v54/images/password_expired_live.webp",
    "v54/images/podcasts.webp",
    "v54/impressum.html",
    "v54/index.html",
    "v54/js/DiaryService.js",
    "v54/js/Main.js",
    "v54/js/PickerDrum.js",
    "v54/js/Player.js",
    "v54/js/SongCollection.js",
    "v54/js/SongService.js",
    "v54/js/VersionCore.js",
    "v54/js/ffmpeg.min.js",
    "v54/js/lucide.js",
    "v54/js/tailwindcss.js",
    "v54/legal_notice.html",
    "v54/manifest.json",
    "v54/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v54...');
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
