const STATIC_CACHE = 'julia-site-v44';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v44/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v44/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v44/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v44/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v44/artwork/a_slow_blossoming_rose.webp",
    "v44/artwork/antitoxic.webp",
    "v44/artwork/autumns_whisper.webp",
    "v44/artwork/big_dreams_shine.webp",
    "v44/artwork/big_dreams_shine_live.webp",
    "v44/artwork/bite_of_the_night.webp",
    "v44/artwork/brooklyn.webp",
    "v44/artwork/buckn_the_bain.webp",
    "v44/artwork/cheerleader.webp",
    "v44/artwork/cool_fire.webp",
    "v44/artwork/deep_blue.webp",
    "v44/artwork/default.webp",
    "v44/artwork/digital_ghost.webp",
    "v44/artwork/disco_flashback.webp",
    "v44/artwork/disco_flashback_2.webp",
    "v44/artwork/first_steps_to_stardom.webp",
    "v44/artwork/fog_of_fear.webp",
    "v44/artwork/forever.webp",
    "v44/artwork/friday_night.webp",
    "v44/artwork/from_first_steps_to_stardom.webp",
    "v44/artwork/frost_and_friction.webp",
    "v44/artwork/frozen_heart.webp",
    "v44/artwork/garage_band.webp",
    "v44/artwork/ghost_in_the_garden.webp",
    "v44/artwork/god_save_the_king.webp",
    "v44/artwork/golden_days.webp",
    "v44/artwork/good_enough.webp",
    "v44/artwork/haunted_haven.webp",
    "v44/artwork/heart_of_fire_and_ice.webp",
    "v44/artwork/her_first_truck.webp",
    "v44/artwork/hes_still_here.webp",
    "v44/artwork/howling_wolves.webp",
    "v44/artwork/i_love_school.webp",
    "v44/artwork/i_scream.webp",
    "v44/artwork/introverted_girl.webp",
    "v44/artwork/just_wants_to_be_loved.webp",
    "v44/artwork/last_exit.webp",
    "v44/artwork/left_lane_legend.webp",
    "v44/artwork/little_butterflies.webp",
    "v44/artwork/maybe_they_knew.webp",
    "v44/artwork/my_foundation.webp",
    "v44/artwork/my_sweet_little_star.webp",
    "v44/artwork/need_for_speed.webp",
    "v44/artwork/paradox_love.webp",
    "v44/artwork/password_expired.webp",
    "v44/artwork/password_expired_live.webp",
    "v44/artwork/peaks_of_gold.webp",
    "v44/artwork/private_lake.webp",
    "v44/artwork/radio_trash.webp",
    "v44/artwork/ride_the_groove.webp",
    "v44/artwork/sailing_on_open_water.webp",
    "v44/artwork/sanctified_sinner.webp",
    "v44/artwork/sanctuary_riot.webp",
    "v44/artwork/schools_out.webp",
    "v44/artwork/siblings.webp",
    "v44/artwork/skeleton_dance.webp",
    "v44/artwork/spooky.webp",
    "v44/artwork/storm_of_the_abyss.webp",
    "v44/artwork/summers_farewell.webp",
    "v44/artwork/tabby_gonzalez.webp",
    "v44/artwork/the_dive.webp",
    "v44/artwork/the_rhythm_of_the_fox.webp",
    "v44/artwork/the_soft_return.webp",
    "v44/artwork/the_steel_winged_swan.webp",
    "v44/artwork/toccata.webp",
    "v44/artwork/trick_or_treat.webp",
    "v44/artwork/uncaged.webp",
    "v44/artwork/upon_a_winding_trail.webp",
    "v44/artwork/venezia.webp",
    "v44/artwork/whiteout.webp",
    "v44/artwork/winterstorm.webp",
    "v44/datenschutz.html",
    "v44/images/Guitar-in-Dolomites.webp",
    "v44/images/Hero.webp",
    "v44/images/Hero_square.webp",
    "v44/images/Julia-skiing-Dolomites.webp",
    "v44/images/Stage_1.webp",
    "v44/images/Stage_2.webp",
    "v44/images/Stage_3.webp",
    "v44/images/Stage_4.webp",
    "v44/images/Stage_5.webp",
    "v44/images/Stage_6.webp",
    "v44/images/Stage_7.webp",
    "v44/images/Stage_8.webp",
    "v44/images/icons/app_icon_192.png",
    "v44/images/icons/app_icon_512.png",
    "v44/images/original/Guitar-in-Dolomites.png",
    "v44/images/original/Hero.jpg",
    "v44/images/original/Hero_square.jpg",
    "v44/images/original/Julia-skiing-Dolomites.png",
    "v44/images/original/Stage_1.png",
    "v44/images/original/Stage_2.png",
    "v44/images/original/Stage_3.png",
    "v44/images/original/Stage_4.png",
    "v44/images/original/Stage_5.png",
    "v44/images/original/Stage_6.png",
    "v44/images/original/Stage_7.png",
    "v44/images/original/Stage_8.png",
    "v44/images/password_expired_live.webp",
    "v44/impressum.html",
    "v44/index.html",
    "v44/js/DiaryService.js",
    "v44/js/Main.js",
    "v44/js/PickerDrum.js",
    "v44/js/Player.js",
    "v44/js/SongCollection.js",
    "v44/js/SongService.js",
    "v44/js/VersionCore.js",
    "v44/js/ffmpeg.min.js",
    "v44/js/lucide.js",
    "v44/js/tailwindcss.js",
    "v44/legal_notice.html",
    "v44/manifest.json",
    "v44/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v44...');
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
