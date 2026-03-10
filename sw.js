const STATIC_CACHE = 'julia-site-v48';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v48/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v48/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v48/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v48/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v48/artwork/a_slow_blossoming_rose.webp",
    "v48/artwork/antitoxic.webp",
    "v48/artwork/autumns_whisper.webp",
    "v48/artwork/big_dreams_shine.webp",
    "v48/artwork/big_dreams_shine_live.webp",
    "v48/artwork/bite_of_the_night.webp",
    "v48/artwork/brooklyn.webp",
    "v48/artwork/buckn_the_bain.webp",
    "v48/artwork/cheerleader.webp",
    "v48/artwork/coffee_in_amsterdam.webp",
    "v48/artwork/cool_fire.webp",
    "v48/artwork/deep_blue.webp",
    "v48/artwork/default.webp",
    "v48/artwork/digital_ghost.webp",
    "v48/artwork/disco_flashback.webp",
    "v48/artwork/disco_flashback_2.webp",
    "v48/artwork/drunk_not_dumb.webp",
    "v48/artwork/first_steps_to_stardom.webp",
    "v48/artwork/fog_of_fear.webp",
    "v48/artwork/forever.webp",
    "v48/artwork/friday_night.webp",
    "v48/artwork/from_first_steps_to_stardom.webp",
    "v48/artwork/frost_and_friction.webp",
    "v48/artwork/frozen_heart.webp",
    "v48/artwork/garage_band.webp",
    "v48/artwork/ghost_in_the_garden.webp",
    "v48/artwork/god_save_the_king.webp",
    "v48/artwork/golden_days.webp",
    "v48/artwork/good_enough.webp",
    "v48/artwork/haunted_haven.webp",
    "v48/artwork/heart_of_fire_and_ice.webp",
    "v48/artwork/her_first_truck.webp",
    "v48/artwork/hes_still_here.webp",
    "v48/artwork/howling_wolves.webp",
    "v48/artwork/i_love_school.webp",
    "v48/artwork/i_scream.webp",
    "v48/artwork/introverted_girl.webp",
    "v48/artwork/just_wants_to_be_loved.webp",
    "v48/artwork/last_exit.webp",
    "v48/artwork/left_lane_legend.webp",
    "v48/artwork/little_butterflies.webp",
    "v48/artwork/maybe_they_knew.webp",
    "v48/artwork/my_foundation.webp",
    "v48/artwork/my_sweet_little_star.webp",
    "v48/artwork/need_for_speed.webp",
    "v48/artwork/paradox_love.webp",
    "v48/artwork/password_expired.webp",
    "v48/artwork/password_expired_live.webp",
    "v48/artwork/peaks_of_gold.webp",
    "v48/artwork/private_lake.webp",
    "v48/artwork/radio_trash.webp",
    "v48/artwork/ride_the_groove.webp",
    "v48/artwork/sailing_on_open_water.webp",
    "v48/artwork/sanctified_sinner.webp",
    "v48/artwork/sanctuary_riot.webp",
    "v48/artwork/schools_out.webp",
    "v48/artwork/siblings.webp",
    "v48/artwork/skeleton_dance.webp",
    "v48/artwork/spooky.webp",
    "v48/artwork/storm_of_the_abyss.webp",
    "v48/artwork/summers_farewell.webp",
    "v48/artwork/tabby_gonzalez.webp",
    "v48/artwork/the_dive.webp",
    "v48/artwork/the_rhythm_of_the_fox.webp",
    "v48/artwork/the_soft_return.webp",
    "v48/artwork/the_steel_winged_swan.webp",
    "v48/artwork/toccata.webp",
    "v48/artwork/trick_or_treat.webp",
    "v48/artwork/uncaged.webp",
    "v48/artwork/upon_a_winding_trail.webp",
    "v48/artwork/venezia.webp",
    "v48/artwork/whiteout.webp",
    "v48/artwork/winterstorm.webp",
    "v48/datenschutz.html",
    "v48/images/Guitar-in-Dolomites.webp",
    "v48/images/Hero.webp",
    "v48/images/Hero_square.webp",
    "v48/images/Julia-skiing-Dolomites.webp",
    "v48/images/Stage_1.webp",
    "v48/images/Stage_2.webp",
    "v48/images/Stage_3.webp",
    "v48/images/Stage_4.webp",
    "v48/images/Stage_5.webp",
    "v48/images/Stage_6.webp",
    "v48/images/Stage_7.webp",
    "v48/images/Stage_8.webp",
    "v48/images/icons/app_icon_192.png",
    "v48/images/icons/app_icon_512.png",
    "v48/images/original/Guitar-in-Dolomites.png",
    "v48/images/original/Hero.jpg",
    "v48/images/original/Hero_square.jpg",
    "v48/images/original/Julia-skiing-Dolomites.png",
    "v48/images/original/Stage_1.png",
    "v48/images/original/Stage_2.png",
    "v48/images/original/Stage_3.png",
    "v48/images/original/Stage_4.png",
    "v48/images/original/Stage_5.png",
    "v48/images/original/Stage_6.png",
    "v48/images/original/Stage_7.png",
    "v48/images/original/Stage_8.png",
    "v48/images/password_expired_live.webp",
    "v48/impressum.html",
    "v48/index.html",
    "v48/js/DiaryService.js",
    "v48/js/Main.js",
    "v48/js/PickerDrum.js",
    "v48/js/Player.js",
    "v48/js/SongCollection.js",
    "v48/js/SongService.js",
    "v48/js/VersionCore.js",
    "v48/js/ffmpeg.min.js",
    "v48/js/lucide.js",
    "v48/js/tailwindcss.js",
    "v48/legal_notice.html",
    "v48/manifest.json",
    "v48/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v48...');
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
