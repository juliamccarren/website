const STATIC_CACHE = 'julia-site-v45';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v45/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v45/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v45/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v45/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v45/artwork/a_slow_blossoming_rose.webp",
    "v45/artwork/antitoxic.webp",
    "v45/artwork/autumns_whisper.webp",
    "v45/artwork/big_dreams_shine.webp",
    "v45/artwork/big_dreams_shine_live.webp",
    "v45/artwork/bite_of_the_night.webp",
    "v45/artwork/brooklyn.webp",
    "v45/artwork/buckn_the_bain.webp",
    "v45/artwork/cheerleader.webp",
    "v45/artwork/cool_fire.webp",
    "v45/artwork/deep_blue.webp",
    "v45/artwork/default.webp",
    "v45/artwork/digital_ghost.webp",
    "v45/artwork/disco_flashback.webp",
    "v45/artwork/disco_flashback_2.webp",
    "v45/artwork/first_steps_to_stardom.webp",
    "v45/artwork/fog_of_fear.webp",
    "v45/artwork/forever.webp",
    "v45/artwork/friday_night.webp",
    "v45/artwork/from_first_steps_to_stardom.webp",
    "v45/artwork/frost_and_friction.webp",
    "v45/artwork/frozen_heart.webp",
    "v45/artwork/garage_band.webp",
    "v45/artwork/ghost_in_the_garden.webp",
    "v45/artwork/god_save_the_king.webp",
    "v45/artwork/golden_days.webp",
    "v45/artwork/good_enough.webp",
    "v45/artwork/haunted_haven.webp",
    "v45/artwork/heart_of_fire_and_ice.webp",
    "v45/artwork/her_first_truck.webp",
    "v45/artwork/hes_still_here.webp",
    "v45/artwork/howling_wolves.webp",
    "v45/artwork/i_love_school.webp",
    "v45/artwork/i_scream.webp",
    "v45/artwork/introverted_girl.webp",
    "v45/artwork/just_wants_to_be_loved.webp",
    "v45/artwork/last_exit.webp",
    "v45/artwork/left_lane_legend.webp",
    "v45/artwork/little_butterflies.webp",
    "v45/artwork/maybe_they_knew.webp",
    "v45/artwork/my_foundation.webp",
    "v45/artwork/my_sweet_little_star.webp",
    "v45/artwork/need_for_speed.webp",
    "v45/artwork/paradox_love.webp",
    "v45/artwork/password_expired.webp",
    "v45/artwork/password_expired_live.webp",
    "v45/artwork/peaks_of_gold.webp",
    "v45/artwork/private_lake.webp",
    "v45/artwork/radio_trash.webp",
    "v45/artwork/ride_the_groove.webp",
    "v45/artwork/sailing_on_open_water.webp",
    "v45/artwork/sanctified_sinner.webp",
    "v45/artwork/sanctuary_riot.webp",
    "v45/artwork/schools_out.webp",
    "v45/artwork/siblings.webp",
    "v45/artwork/skeleton_dance.webp",
    "v45/artwork/spooky.webp",
    "v45/artwork/storm_of_the_abyss.webp",
    "v45/artwork/summers_farewell.webp",
    "v45/artwork/tabby_gonzalez.webp",
    "v45/artwork/the_dive.webp",
    "v45/artwork/the_rhythm_of_the_fox.webp",
    "v45/artwork/the_soft_return.webp",
    "v45/artwork/the_steel_winged_swan.webp",
    "v45/artwork/toccata.webp",
    "v45/artwork/trick_or_treat.webp",
    "v45/artwork/uncaged.webp",
    "v45/artwork/upon_a_winding_trail.webp",
    "v45/artwork/venezia.webp",
    "v45/artwork/whiteout.webp",
    "v45/artwork/winterstorm.webp",
    "v45/datenschutz.html",
    "v45/images/Guitar-in-Dolomites.webp",
    "v45/images/Hero.webp",
    "v45/images/Hero_square.webp",
    "v45/images/Julia-skiing-Dolomites.webp",
    "v45/images/Stage_1.webp",
    "v45/images/Stage_2.webp",
    "v45/images/Stage_3.webp",
    "v45/images/Stage_4.webp",
    "v45/images/Stage_5.webp",
    "v45/images/Stage_6.webp",
    "v45/images/Stage_7.webp",
    "v45/images/Stage_8.webp",
    "v45/images/icons/app_icon_192.png",
    "v45/images/icons/app_icon_512.png",
    "v45/images/original/Guitar-in-Dolomites.png",
    "v45/images/original/Hero.jpg",
    "v45/images/original/Hero_square.jpg",
    "v45/images/original/Julia-skiing-Dolomites.png",
    "v45/images/original/Stage_1.png",
    "v45/images/original/Stage_2.png",
    "v45/images/original/Stage_3.png",
    "v45/images/original/Stage_4.png",
    "v45/images/original/Stage_5.png",
    "v45/images/original/Stage_6.png",
    "v45/images/original/Stage_7.png",
    "v45/images/original/Stage_8.png",
    "v45/images/password_expired_live.webp",
    "v45/impressum.html",
    "v45/index.html",
    "v45/js/DiaryService.js",
    "v45/js/Main.js",
    "v45/js/PickerDrum.js",
    "v45/js/Player.js",
    "v45/js/SongCollection.js",
    "v45/js/SongService.js",
    "v45/js/VersionCore.js",
    "v45/js/ffmpeg.min.js",
    "v45/js/lucide.js",
    "v45/js/tailwindcss.js",
    "v45/legal_notice.html",
    "v45/manifest.json",
    "v45/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v45...');
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
