const STATIC_CACHE = 'julia-site-v53';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v53/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v53/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v53/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v53/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v53/artwork/a_slow_blossoming_rose.webp",
    "v53/artwork/antitoxic.webp",
    "v53/artwork/autumns_whisper.webp",
    "v53/artwork/big_dreams_shine.webp",
    "v53/artwork/big_dreams_shine_live.webp",
    "v53/artwork/bite_of_the_night.webp",
    "v53/artwork/boring.webp",
    "v53/artwork/brooklyn.webp",
    "v53/artwork/buckn_the_bain.webp",
    "v53/artwork/cheerleader.webp",
    "v53/artwork/coffee_in_amsterdam.webp",
    "v53/artwork/cool_fire.webp",
    "v53/artwork/deep_blue.webp",
    "v53/artwork/deepdive_1.webp",
    "v53/artwork/deepdive_2.webp",
    "v53/artwork/default.webp",
    "v53/artwork/digital_ghost.webp",
    "v53/artwork/disco_flashback.webp",
    "v53/artwork/disco_flashback_2.webp",
    "v53/artwork/drunk_not_dumb.webp",
    "v53/artwork/first_steps_to_stardom.webp",
    "v53/artwork/fog_of_fear.webp",
    "v53/artwork/forever.webp",
    "v53/artwork/friday_night.webp",
    "v53/artwork/from_first_steps_to_stardom.webp",
    "v53/artwork/frost_and_friction.webp",
    "v53/artwork/frozen_heart.webp",
    "v53/artwork/garage_band.webp",
    "v53/artwork/ghost_in_the_garden.webp",
    "v53/artwork/god_save_the_king.webp",
    "v53/artwork/golden_days.webp",
    "v53/artwork/good_enough.webp",
    "v53/artwork/haunted_haven.webp",
    "v53/artwork/heart_of_fire_and_ice.webp",
    "v53/artwork/her_first_truck.webp",
    "v53/artwork/hes_still_here.webp",
    "v53/artwork/howling_wolves.webp",
    "v53/artwork/i_love_school.webp",
    "v53/artwork/i_scream.webp",
    "v53/artwork/introverted_girl.webp",
    "v53/artwork/just_wants_to_be_loved.webp",
    "v53/artwork/last_exit.webp",
    "v53/artwork/left_lane_legend.webp",
    "v53/artwork/little_butterflies.webp",
    "v53/artwork/maybe_they_knew.webp",
    "v53/artwork/my_foundation.webp",
    "v53/artwork/my_sweet_little_star.webp",
    "v53/artwork/need_for_speed.webp",
    "v53/artwork/paradox_love.webp",
    "v53/artwork/password_expired.webp",
    "v53/artwork/password_expired_live.webp",
    "v53/artwork/peaks_of_gold.webp",
    "v53/artwork/private_lake.webp",
    "v53/artwork/radio_trash.webp",
    "v53/artwork/ride_the_groove.webp",
    "v53/artwork/sailing_on_open_water.webp",
    "v53/artwork/sanctified_sinner.webp",
    "v53/artwork/sanctuary_riot.webp",
    "v53/artwork/schools_out.webp",
    "v53/artwork/siblings.webp",
    "v53/artwork/skeleton_dance.webp",
    "v53/artwork/spooky.webp",
    "v53/artwork/storm_of_the_abyss.webp",
    "v53/artwork/summers_farewell.webp",
    "v53/artwork/tabby_gonzalez.webp",
    "v53/artwork/the_dive.webp",
    "v53/artwork/the_rhythm_of_the_fox.webp",
    "v53/artwork/the_soft_return.webp",
    "v53/artwork/the_steel_winged_swan.webp",
    "v53/artwork/toccata.webp",
    "v53/artwork/trick_or_treat.webp",
    "v53/artwork/uncaged.webp",
    "v53/artwork/upon_a_winding_trail.webp",
    "v53/artwork/venezia.webp",
    "v53/artwork/whiteout.webp",
    "v53/artwork/winterstorm.webp",
    "v53/datenschutz.html",
    "v53/images/Guitar-in-Dolomites.webp",
    "v53/images/Hero.webp",
    "v53/images/Hero_square.webp",
    "v53/images/Julia-skiing-Dolomites.webp",
    "v53/images/Stage_1.webp",
    "v53/images/Stage_2.webp",
    "v53/images/Stage_3.webp",
    "v53/images/Stage_4.webp",
    "v53/images/Stage_5.webp",
    "v53/images/Stage_6.webp",
    "v53/images/Stage_7.webp",
    "v53/images/Stage_8.webp",
    "v53/images/icons/app_icon_192.png",
    "v53/images/icons/app_icon_512.png",
    "v53/images/original/Guitar-in-Dolomites.png",
    "v53/images/original/Hero.jpg",
    "v53/images/original/Hero_square.jpg",
    "v53/images/original/Julia-skiing-Dolomites.png",
    "v53/images/original/Stage_1.png",
    "v53/images/original/Stage_2.png",
    "v53/images/original/Stage_3.png",
    "v53/images/original/Stage_4.png",
    "v53/images/original/Stage_5.png",
    "v53/images/original/Stage_6.png",
    "v53/images/original/Stage_7.png",
    "v53/images/original/Stage_8.png",
    "v53/images/password_expired_live.webp",
    "v53/images/podcasts.webp",
    "v53/impressum.html",
    "v53/index.html",
    "v53/js/DiaryService.js",
    "v53/js/Main.js",
    "v53/js/PickerDrum.js",
    "v53/js/Player.js",
    "v53/js/SongCollection.js",
    "v53/js/SongService.js",
    "v53/js/VersionCore.js",
    "v53/js/ffmpeg.min.js",
    "v53/js/lucide.js",
    "v53/js/tailwindcss.js",
    "v53/legal_notice.html",
    "v53/manifest.json",
    "v53/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v53...');
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
