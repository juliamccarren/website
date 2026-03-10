const STATIC_CACHE = 'julia-site-v47';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v47/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v47/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v47/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v47/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v47/artwork/a_slow_blossoming_rose.webp",
    "v47/artwork/antitoxic.webp",
    "v47/artwork/autumns_whisper.webp",
    "v47/artwork/big_dreams_shine.webp",
    "v47/artwork/big_dreams_shine_live.webp",
    "v47/artwork/bite_of_the_night.webp",
    "v47/artwork/brooklyn.webp",
    "v47/artwork/buckn_the_bain.webp",
    "v47/artwork/cheerleader.webp",
    "v47/artwork/coffee_in_amsterdam.webp",
    "v47/artwork/cool_fire.webp",
    "v47/artwork/deep_blue.webp",
    "v47/artwork/default.webp",
    "v47/artwork/digital_ghost.webp",
    "v47/artwork/disco_flashback.webp",
    "v47/artwork/disco_flashback_2.webp",
    "v47/artwork/drunk_not_dumb.webp",
    "v47/artwork/first_steps_to_stardom.webp",
    "v47/artwork/fog_of_fear.webp",
    "v47/artwork/forever.webp",
    "v47/artwork/friday_night.webp",
    "v47/artwork/from_first_steps_to_stardom.webp",
    "v47/artwork/frost_and_friction.webp",
    "v47/artwork/frozen_heart.webp",
    "v47/artwork/garage_band.webp",
    "v47/artwork/ghost_in_the_garden.webp",
    "v47/artwork/god_save_the_king.webp",
    "v47/artwork/golden_days.webp",
    "v47/artwork/good_enough.webp",
    "v47/artwork/haunted_haven.webp",
    "v47/artwork/heart_of_fire_and_ice.webp",
    "v47/artwork/her_first_truck.webp",
    "v47/artwork/hes_still_here.webp",
    "v47/artwork/howling_wolves.webp",
    "v47/artwork/i_love_school.webp",
    "v47/artwork/i_scream.webp",
    "v47/artwork/introverted_girl.webp",
    "v47/artwork/just_wants_to_be_loved.webp",
    "v47/artwork/last_exit.webp",
    "v47/artwork/left_lane_legend.webp",
    "v47/artwork/little_butterflies.webp",
    "v47/artwork/maybe_they_knew.webp",
    "v47/artwork/my_foundation.webp",
    "v47/artwork/my_sweet_little_star.webp",
    "v47/artwork/need_for_speed.webp",
    "v47/artwork/paradox_love.webp",
    "v47/artwork/password_expired.webp",
    "v47/artwork/password_expired_live.webp",
    "v47/artwork/peaks_of_gold.webp",
    "v47/artwork/private_lake.webp",
    "v47/artwork/radio_trash.webp",
    "v47/artwork/ride_the_groove.webp",
    "v47/artwork/sailing_on_open_water.webp",
    "v47/artwork/sanctified_sinner.webp",
    "v47/artwork/sanctuary_riot.webp",
    "v47/artwork/schools_out.webp",
    "v47/artwork/siblings.webp",
    "v47/artwork/skeleton_dance.webp",
    "v47/artwork/spooky.webp",
    "v47/artwork/storm_of_the_abyss.webp",
    "v47/artwork/summers_farewell.webp",
    "v47/artwork/tabby_gonzalez.webp",
    "v47/artwork/the_dive.webp",
    "v47/artwork/the_rhythm_of_the_fox.webp",
    "v47/artwork/the_soft_return.webp",
    "v47/artwork/the_steel_winged_swan.webp",
    "v47/artwork/toccata.webp",
    "v47/artwork/trick_or_treat.webp",
    "v47/artwork/uncaged.webp",
    "v47/artwork/upon_a_winding_trail.webp",
    "v47/artwork/venezia.webp",
    "v47/artwork/whiteout.webp",
    "v47/artwork/winterstorm.webp",
    "v47/datenschutz.html",
    "v47/images/Guitar-in-Dolomites.webp",
    "v47/images/Hero.webp",
    "v47/images/Hero_square.webp",
    "v47/images/Julia-skiing-Dolomites.webp",
    "v47/images/Stage_1.webp",
    "v47/images/Stage_2.webp",
    "v47/images/Stage_3.webp",
    "v47/images/Stage_4.webp",
    "v47/images/Stage_5.webp",
    "v47/images/Stage_6.webp",
    "v47/images/Stage_7.webp",
    "v47/images/Stage_8.webp",
    "v47/images/icons/app_icon_192.png",
    "v47/images/icons/app_icon_512.png",
    "v47/images/original/Guitar-in-Dolomites.png",
    "v47/images/original/Hero.jpg",
    "v47/images/original/Hero_square.jpg",
    "v47/images/original/Julia-skiing-Dolomites.png",
    "v47/images/original/Stage_1.png",
    "v47/images/original/Stage_2.png",
    "v47/images/original/Stage_3.png",
    "v47/images/original/Stage_4.png",
    "v47/images/original/Stage_5.png",
    "v47/images/original/Stage_6.png",
    "v47/images/original/Stage_7.png",
    "v47/images/original/Stage_8.png",
    "v47/images/password_expired_live.webp",
    "v47/impressum.html",
    "v47/index.html",
    "v47/js/DiaryService.js",
    "v47/js/Main.js",
    "v47/js/PickerDrum.js",
    "v47/js/Player.js",
    "v47/js/SongCollection.js",
    "v47/js/SongService.js",
    "v47/js/VersionCore.js",
    "v47/js/ffmpeg.min.js",
    "v47/js/lucide.js",
    "v47/js/tailwindcss.js",
    "v47/legal_notice.html",
    "v47/manifest.json",
    "v47/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v47...');
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
