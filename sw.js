const STATIC_CACHE = 'julia-site-v52';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v52/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v52/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v52/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v52/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v52/artwork/a_slow_blossoming_rose.webp",
    "v52/artwork/antitoxic.webp",
    "v52/artwork/autumns_whisper.webp",
    "v52/artwork/big_dreams_shine.webp",
    "v52/artwork/big_dreams_shine_live.webp",
    "v52/artwork/bite_of_the_night.webp",
    "v52/artwork/boring.webp",
    "v52/artwork/brooklyn.webp",
    "v52/artwork/buckn_the_bain.webp",
    "v52/artwork/cheerleader.webp",
    "v52/artwork/coffee_in_amsterdam.webp",
    "v52/artwork/cool_fire.webp",
    "v52/artwork/deep_blue.webp",
    "v52/artwork/default.webp",
    "v52/artwork/digital_ghost.webp",
    "v52/artwork/disco_flashback.webp",
    "v52/artwork/disco_flashback_2.webp",
    "v52/artwork/drunk_not_dumb.webp",
    "v52/artwork/first_steps_to_stardom.webp",
    "v52/artwork/fog_of_fear.webp",
    "v52/artwork/forever.webp",
    "v52/artwork/friday_night.webp",
    "v52/artwork/from_first_steps_to_stardom.webp",
    "v52/artwork/frost_and_friction.webp",
    "v52/artwork/frozen_heart.webp",
    "v52/artwork/garage_band.webp",
    "v52/artwork/ghost_in_the_garden.webp",
    "v52/artwork/god_save_the_king.webp",
    "v52/artwork/golden_days.webp",
    "v52/artwork/good_enough.webp",
    "v52/artwork/haunted_haven.webp",
    "v52/artwork/heart_of_fire_and_ice.webp",
    "v52/artwork/her_first_truck.webp",
    "v52/artwork/hes_still_here.webp",
    "v52/artwork/howling_wolves.webp",
    "v52/artwork/i_love_school.webp",
    "v52/artwork/i_scream.webp",
    "v52/artwork/introverted_girl.webp",
    "v52/artwork/just_wants_to_be_loved.webp",
    "v52/artwork/last_exit.webp",
    "v52/artwork/left_lane_legend.webp",
    "v52/artwork/little_butterflies.webp",
    "v52/artwork/maybe_they_knew.webp",
    "v52/artwork/my_foundation.webp",
    "v52/artwork/my_sweet_little_star.webp",
    "v52/artwork/need_for_speed.webp",
    "v52/artwork/paradox_love.webp",
    "v52/artwork/password_expired.webp",
    "v52/artwork/password_expired_live.webp",
    "v52/artwork/peaks_of_gold.webp",
    "v52/artwork/private_lake.webp",
    "v52/artwork/radio_trash.webp",
    "v52/artwork/ride_the_groove.webp",
    "v52/artwork/sailing_on_open_water.webp",
    "v52/artwork/sanctified_sinner.webp",
    "v52/artwork/sanctuary_riot.webp",
    "v52/artwork/schools_out.webp",
    "v52/artwork/siblings.webp",
    "v52/artwork/skeleton_dance.webp",
    "v52/artwork/spooky.webp",
    "v52/artwork/storm_of_the_abyss.webp",
    "v52/artwork/summers_farewell.webp",
    "v52/artwork/tabby_gonzalez.webp",
    "v52/artwork/the_dive.webp",
    "v52/artwork/the_rhythm_of_the_fox.webp",
    "v52/artwork/the_soft_return.webp",
    "v52/artwork/the_steel_winged_swan.webp",
    "v52/artwork/toccata.webp",
    "v52/artwork/trick_or_treat.webp",
    "v52/artwork/uncaged.webp",
    "v52/artwork/upon_a_winding_trail.webp",
    "v52/artwork/venezia.webp",
    "v52/artwork/whiteout.webp",
    "v52/artwork/winterstorm.webp",
    "v52/datenschutz.html",
    "v52/images/Guitar-in-Dolomites.webp",
    "v52/images/Hero.webp",
    "v52/images/Hero_square.webp",
    "v52/images/Julia-skiing-Dolomites.webp",
    "v52/images/Stage_1.webp",
    "v52/images/Stage_2.webp",
    "v52/images/Stage_3.webp",
    "v52/images/Stage_4.webp",
    "v52/images/Stage_5.webp",
    "v52/images/Stage_6.webp",
    "v52/images/Stage_7.webp",
    "v52/images/Stage_8.webp",
    "v52/images/icons/app_icon_192.png",
    "v52/images/icons/app_icon_512.png",
    "v52/images/original/Guitar-in-Dolomites.png",
    "v52/images/original/Hero.jpg",
    "v52/images/original/Hero_square.jpg",
    "v52/images/original/Julia-skiing-Dolomites.png",
    "v52/images/original/Stage_1.png",
    "v52/images/original/Stage_2.png",
    "v52/images/original/Stage_3.png",
    "v52/images/original/Stage_4.png",
    "v52/images/original/Stage_5.png",
    "v52/images/original/Stage_6.png",
    "v52/images/original/Stage_7.png",
    "v52/images/original/Stage_8.png",
    "v52/images/password_expired_live.webp",
    "v52/impressum.html",
    "v52/index.html",
    "v52/js/DiaryService.js",
    "v52/js/Main.js",
    "v52/js/PickerDrum.js",
    "v52/js/Player.js",
    "v52/js/SongCollection.js",
    "v52/js/SongService.js",
    "v52/js/VersionCore.js",
    "v52/js/ffmpeg.min.js",
    "v52/js/lucide.js",
    "v52/js/tailwindcss.js",
    "v52/legal_notice.html",
    "v52/manifest.json",
    "v52/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v52...');
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
