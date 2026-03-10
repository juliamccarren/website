const STATIC_CACHE = 'julia-site-v46';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v46/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v46/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v46/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v46/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v46/artwork/a_slow_blossoming_rose.webp",
    "v46/artwork/antitoxic.webp",
    "v46/artwork/autumns_whisper.webp",
    "v46/artwork/big_dreams_shine.webp",
    "v46/artwork/big_dreams_shine_live.webp",
    "v46/artwork/bite_of_the_night.webp",
    "v46/artwork/brooklyn.webp",
    "v46/artwork/buckn_the_bain.webp",
    "v46/artwork/cheerleader.webp",
    "v46/artwork/coffee_in_amsterdam.webp",
    "v46/artwork/cool_fire.webp",
    "v46/artwork/deep_blue.webp",
    "v46/artwork/default.webp",
    "v46/artwork/digital_ghost.webp",
    "v46/artwork/disco_flashback.webp",
    "v46/artwork/disco_flashback_2.webp",
    "v46/artwork/drunk_not_dumb.webp",
    "v46/artwork/first_steps_to_stardom.webp",
    "v46/artwork/fog_of_fear.webp",
    "v46/artwork/forever.webp",
    "v46/artwork/friday_night.webp",
    "v46/artwork/from_first_steps_to_stardom.webp",
    "v46/artwork/frost_and_friction.webp",
    "v46/artwork/frozen_heart.webp",
    "v46/artwork/garage_band.webp",
    "v46/artwork/ghost_in_the_garden.webp",
    "v46/artwork/god_save_the_king.webp",
    "v46/artwork/golden_days.webp",
    "v46/artwork/good_enough.webp",
    "v46/artwork/haunted_haven.webp",
    "v46/artwork/heart_of_fire_and_ice.webp",
    "v46/artwork/her_first_truck.webp",
    "v46/artwork/hes_still_here.webp",
    "v46/artwork/howling_wolves.webp",
    "v46/artwork/i_love_school.webp",
    "v46/artwork/i_scream.webp",
    "v46/artwork/introverted_girl.webp",
    "v46/artwork/just_wants_to_be_loved.webp",
    "v46/artwork/last_exit.webp",
    "v46/artwork/left_lane_legend.webp",
    "v46/artwork/little_butterflies.webp",
    "v46/artwork/maybe_they_knew.webp",
    "v46/artwork/my_foundation.webp",
    "v46/artwork/my_sweet_little_star.webp",
    "v46/artwork/need_for_speed.webp",
    "v46/artwork/paradox_love.webp",
    "v46/artwork/password_expired.webp",
    "v46/artwork/password_expired_live.webp",
    "v46/artwork/peaks_of_gold.webp",
    "v46/artwork/private_lake.webp",
    "v46/artwork/radio_trash.webp",
    "v46/artwork/ride_the_groove.webp",
    "v46/artwork/sailing_on_open_water.webp",
    "v46/artwork/sanctified_sinner.webp",
    "v46/artwork/sanctuary_riot.webp",
    "v46/artwork/schools_out.webp",
    "v46/artwork/siblings.webp",
    "v46/artwork/skeleton_dance.webp",
    "v46/artwork/spooky.webp",
    "v46/artwork/storm_of_the_abyss.webp",
    "v46/artwork/summers_farewell.webp",
    "v46/artwork/tabby_gonzalez.webp",
    "v46/artwork/the_dive.webp",
    "v46/artwork/the_rhythm_of_the_fox.webp",
    "v46/artwork/the_soft_return.webp",
    "v46/artwork/the_steel_winged_swan.webp",
    "v46/artwork/toccata.webp",
    "v46/artwork/trick_or_treat.webp",
    "v46/artwork/uncaged.webp",
    "v46/artwork/upon_a_winding_trail.webp",
    "v46/artwork/venezia.webp",
    "v46/artwork/whiteout.webp",
    "v46/artwork/winterstorm.webp",
    "v46/datenschutz.html",
    "v46/images/Guitar-in-Dolomites.webp",
    "v46/images/Hero.webp",
    "v46/images/Hero_square.webp",
    "v46/images/Julia-skiing-Dolomites.webp",
    "v46/images/Stage_1.webp",
    "v46/images/Stage_2.webp",
    "v46/images/Stage_3.webp",
    "v46/images/Stage_4.webp",
    "v46/images/Stage_5.webp",
    "v46/images/Stage_6.webp",
    "v46/images/Stage_7.webp",
    "v46/images/Stage_8.webp",
    "v46/images/icons/app_icon_192.png",
    "v46/images/icons/app_icon_512.png",
    "v46/images/original/Guitar-in-Dolomites.png",
    "v46/images/original/Hero.jpg",
    "v46/images/original/Hero_square.jpg",
    "v46/images/original/Julia-skiing-Dolomites.png",
    "v46/images/original/Stage_1.png",
    "v46/images/original/Stage_2.png",
    "v46/images/original/Stage_3.png",
    "v46/images/original/Stage_4.png",
    "v46/images/original/Stage_5.png",
    "v46/images/original/Stage_6.png",
    "v46/images/original/Stage_7.png",
    "v46/images/original/Stage_8.png",
    "v46/images/password_expired_live.webp",
    "v46/impressum.html",
    "v46/index.html",
    "v46/js/DiaryService.js",
    "v46/js/Main.js",
    "v46/js/PickerDrum.js",
    "v46/js/Player.js",
    "v46/js/SongCollection.js",
    "v46/js/SongService.js",
    "v46/js/VersionCore.js",
    "v46/js/ffmpeg.min.js",
    "v46/js/lucide.js",
    "v46/js/tailwindcss.js",
    "v46/legal_notice.html",
    "v46/manifest.json",
    "v46/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v46...');
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
