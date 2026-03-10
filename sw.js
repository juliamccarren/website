const STATIC_CACHE = 'julia-site-v49';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v49/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v49/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v49/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v49/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v49/artwork/a_slow_blossoming_rose.webp",
    "v49/artwork/antitoxic.webp",
    "v49/artwork/autumns_whisper.webp",
    "v49/artwork/big_dreams_shine.webp",
    "v49/artwork/big_dreams_shine_live.webp",
    "v49/artwork/bite_of_the_night.webp",
    "v49/artwork/brooklyn.webp",
    "v49/artwork/buckn_the_bain.webp",
    "v49/artwork/cheerleader.webp",
    "v49/artwork/coffee_in_amsterdam.webp",
    "v49/artwork/cool_fire.webp",
    "v49/artwork/deep_blue.webp",
    "v49/artwork/default.webp",
    "v49/artwork/digital_ghost.webp",
    "v49/artwork/disco_flashback.webp",
    "v49/artwork/disco_flashback_2.webp",
    "v49/artwork/drunk_not_dumb.webp",
    "v49/artwork/first_steps_to_stardom.webp",
    "v49/artwork/fog_of_fear.webp",
    "v49/artwork/forever.webp",
    "v49/artwork/friday_night.webp",
    "v49/artwork/from_first_steps_to_stardom.webp",
    "v49/artwork/frost_and_friction.webp",
    "v49/artwork/frozen_heart.webp",
    "v49/artwork/garage_band.webp",
    "v49/artwork/ghost_in_the_garden.webp",
    "v49/artwork/god_save_the_king.webp",
    "v49/artwork/golden_days.webp",
    "v49/artwork/good_enough.webp",
    "v49/artwork/haunted_haven.webp",
    "v49/artwork/heart_of_fire_and_ice.webp",
    "v49/artwork/her_first_truck.webp",
    "v49/artwork/hes_still_here.webp",
    "v49/artwork/howling_wolves.webp",
    "v49/artwork/i_love_school.webp",
    "v49/artwork/i_scream.webp",
    "v49/artwork/introverted_girl.webp",
    "v49/artwork/just_wants_to_be_loved.webp",
    "v49/artwork/last_exit.webp",
    "v49/artwork/left_lane_legend.webp",
    "v49/artwork/little_butterflies.webp",
    "v49/artwork/maybe_they_knew.webp",
    "v49/artwork/my_foundation.webp",
    "v49/artwork/my_sweet_little_star.webp",
    "v49/artwork/need_for_speed.webp",
    "v49/artwork/paradox_love.webp",
    "v49/artwork/password_expired.webp",
    "v49/artwork/password_expired_live.webp",
    "v49/artwork/peaks_of_gold.webp",
    "v49/artwork/private_lake.webp",
    "v49/artwork/radio_trash.webp",
    "v49/artwork/ride_the_groove.webp",
    "v49/artwork/sailing_on_open_water.webp",
    "v49/artwork/sanctified_sinner.webp",
    "v49/artwork/sanctuary_riot.webp",
    "v49/artwork/schools_out.webp",
    "v49/artwork/siblings.webp",
    "v49/artwork/skeleton_dance.webp",
    "v49/artwork/spooky.webp",
    "v49/artwork/storm_of_the_abyss.webp",
    "v49/artwork/summers_farewell.webp",
    "v49/artwork/tabby_gonzalez.webp",
    "v49/artwork/the_dive.webp",
    "v49/artwork/the_rhythm_of_the_fox.webp",
    "v49/artwork/the_soft_return.webp",
    "v49/artwork/the_steel_winged_swan.webp",
    "v49/artwork/toccata.webp",
    "v49/artwork/trick_or_treat.webp",
    "v49/artwork/uncaged.webp",
    "v49/artwork/upon_a_winding_trail.webp",
    "v49/artwork/venezia.webp",
    "v49/artwork/whiteout.webp",
    "v49/artwork/winterstorm.webp",
    "v49/datenschutz.html",
    "v49/images/Guitar-in-Dolomites.webp",
    "v49/images/Hero.webp",
    "v49/images/Hero_square.webp",
    "v49/images/Julia-skiing-Dolomites.webp",
    "v49/images/Stage_1.webp",
    "v49/images/Stage_2.webp",
    "v49/images/Stage_3.webp",
    "v49/images/Stage_4.webp",
    "v49/images/Stage_5.webp",
    "v49/images/Stage_6.webp",
    "v49/images/Stage_7.webp",
    "v49/images/Stage_8.webp",
    "v49/images/icons/app_icon_192.png",
    "v49/images/icons/app_icon_512.png",
    "v49/images/original/Guitar-in-Dolomites.png",
    "v49/images/original/Hero.jpg",
    "v49/images/original/Hero_square.jpg",
    "v49/images/original/Julia-skiing-Dolomites.png",
    "v49/images/original/Stage_1.png",
    "v49/images/original/Stage_2.png",
    "v49/images/original/Stage_3.png",
    "v49/images/original/Stage_4.png",
    "v49/images/original/Stage_5.png",
    "v49/images/original/Stage_6.png",
    "v49/images/original/Stage_7.png",
    "v49/images/original/Stage_8.png",
    "v49/images/password_expired_live.webp",
    "v49/impressum.html",
    "v49/index.html",
    "v49/js/DiaryService.js",
    "v49/js/Main.js",
    "v49/js/PickerDrum.js",
    "v49/js/Player.js",
    "v49/js/SongCollection.js",
    "v49/js/SongService.js",
    "v49/js/VersionCore.js",
    "v49/js/ffmpeg.min.js",
    "v49/js/lucide.js",
    "v49/js/tailwindcss.js",
    "v49/legal_notice.html",
    "v49/manifest.json",
    "v49/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v49...');
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
