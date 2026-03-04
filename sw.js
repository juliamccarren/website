const STATIC_CACHE = 'julia-site-v41';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v41/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v41/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v41/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v41/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v41/artwork/a_slow_blossoming_rose.webp",
    "v41/artwork/antitoxic.webp",
    "v41/artwork/autumns_whisper.webp",
    "v41/artwork/big_dreams_shine.webp",
    "v41/artwork/bite_of_the_night.webp",
    "v41/artwork/brooklyn.webp",
    "v41/artwork/buckn_the_bain.webp",
    "v41/artwork/cheerleader.webp",
    "v41/artwork/cool_fire.webp",
    "v41/artwork/deep_blue.webp",
    "v41/artwork/digital_ghost.webp",
    "v41/artwork/disco_flashback.webp",
    "v41/artwork/disco_flashback_2.webp",
    "v41/artwork/first_steps_to_stardom.webp",
    "v41/artwork/fog_of_fear.webp",
    "v41/artwork/forever.webp",
    "v41/artwork/friday_night.webp",
    "v41/artwork/from_first_steps_to_stardom.webp",
    "v41/artwork/frost_and_friction.webp",
    "v41/artwork/frozen_heart.webp",
    "v41/artwork/garage_band.webp",
    "v41/artwork/ghost_in_the_garden.webp",
    "v41/artwork/god_save_the_king.webp",
    "v41/artwork/golden_days.webp",
    "v41/artwork/good_enough.webp",
    "v41/artwork/haunted_haven.webp",
    "v41/artwork/heart_of_fire_and_ice.webp",
    "v41/artwork/her_first_truck.webp",
    "v41/artwork/hes_still_here.webp",
    "v41/artwork/howling_wolves.webp",
    "v41/artwork/i_love_school.webp",
    "v41/artwork/i_scream.webp",
    "v41/artwork/introverted_girl.webp",
    "v41/artwork/just_wants_to_be_loved.webp",
    "v41/artwork/last_exit.webp",
    "v41/artwork/left_lane_legend.webp",
    "v41/artwork/little_butterflies.webp",
    "v41/artwork/maybe_they_knew.webp",
    "v41/artwork/my_foundation.webp",
    "v41/artwork/my_sweet_little_star.webp",
    "v41/artwork/need_for_speed.webp",
    "v41/artwork/paradox_love.webp",
    "v41/artwork/password_expired.webp",
    "v41/artwork/password_expired_live.webp",
    "v41/artwork/peaks_of_gold.webp",
    "v41/artwork/private_lake.webp",
    "v41/artwork/radio_trash.webp",
    "v41/artwork/ride_the_groove.webp",
    "v41/artwork/sailing_on_open_water.webp",
    "v41/artwork/sanctified_sinner.webp",
    "v41/artwork/sanctuary_riot.webp",
    "v41/artwork/schools_out.webp",
    "v41/artwork/siblings.webp",
    "v41/artwork/skeleton_dance.webp",
    "v41/artwork/spooky.webp",
    "v41/artwork/storm_of_the_abyss.webp",
    "v41/artwork/summers_farewell.webp",
    "v41/artwork/tabby_gonzalez.webp",
    "v41/artwork/the_dive.webp",
    "v41/artwork/the_rhythm_of_the_fox.webp",
    "v41/artwork/the_soft_return.webp",
    "v41/artwork/the_steel_winged_swan.webp",
    "v41/artwork/toccata.webp",
    "v41/artwork/trick_or_treat.webp",
    "v41/artwork/uncaged.webp",
    "v41/artwork/upon_a_winding_trail.webp",
    "v41/artwork/venezia.webp",
    "v41/artwork/whiteout.webp",
    "v41/artwork/winterstorm.webp",
    "v41/datenschutz.html",
    "v41/images/Guitar-in-Dolomites.webp",
    "v41/images/Hero.webp",
    "v41/images/Hero_square.webp",
    "v41/images/Julia-skiing-Dolomites.webp",
    "v41/images/Stage_1.webp",
    "v41/images/Stage_2.webp",
    "v41/images/Stage_3.webp",
    "v41/images/Stage_4.webp",
    "v41/images/Stage_5.webp",
    "v41/images/Stage_6.webp",
    "v41/images/Stage_7.webp",
    "v41/images/Stage_8.webp",
    "v41/images/icons/app_icon_192.png",
    "v41/images/icons/app_icon_512.png",
    "v41/images/original/Guitar-in-Dolomites.png",
    "v41/images/original/Hero.jpg",
    "v41/images/original/Hero_square.jpg",
    "v41/images/original/Julia-skiing-Dolomites.png",
    "v41/images/original/Stage_1.png",
    "v41/images/original/Stage_2.png",
    "v41/images/original/Stage_3.png",
    "v41/images/original/Stage_4.png",
    "v41/images/original/Stage_5.png",
    "v41/images/original/Stage_6.png",
    "v41/images/original/Stage_7.png",
    "v41/images/original/Stage_8.png",
    "v41/images/password_expired_live.webp",
    "v41/impressum.html",
    "v41/index.html",
    "v41/js/DiaryService.js",
    "v41/js/Main.js",
    "v41/js/PickerDrum.js",
    "v41/js/Player.js",
    "v41/js/SongCollection.js",
    "v41/js/SongService.js",
    "v41/js/VersionCore.js",
    "v41/js/lucide.js",
    "v41/js/tailwindcss.js",
    "v41/legal_notice.html",
    "v41/manifest.json",
    "v41/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v41...');
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
