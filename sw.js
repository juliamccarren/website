const STATIC_CACHE = 'julia-site-v50';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v50/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v50/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v50/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v50/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v50/artwork/a_slow_blossoming_rose.webp",
    "v50/artwork/antitoxic.webp",
    "v50/artwork/autumns_whisper.webp",
    "v50/artwork/big_dreams_shine.webp",
    "v50/artwork/big_dreams_shine_live.webp",
    "v50/artwork/bite_of_the_night.webp",
    "v50/artwork/brooklyn.webp",
    "v50/artwork/buckn_the_bain.webp",
    "v50/artwork/cheerleader.webp",
    "v50/artwork/coffee_in_amsterdam.webp",
    "v50/artwork/cool_fire.webp",
    "v50/artwork/deep_blue.webp",
    "v50/artwork/default.webp",
    "v50/artwork/digital_ghost.webp",
    "v50/artwork/disco_flashback.webp",
    "v50/artwork/disco_flashback_2.webp",
    "v50/artwork/drunk_not_dumb.webp",
    "v50/artwork/first_steps_to_stardom.webp",
    "v50/artwork/fog_of_fear.webp",
    "v50/artwork/forever.webp",
    "v50/artwork/friday_night.webp",
    "v50/artwork/from_first_steps_to_stardom.webp",
    "v50/artwork/frost_and_friction.webp",
    "v50/artwork/frozen_heart.webp",
    "v50/artwork/garage_band.webp",
    "v50/artwork/ghost_in_the_garden.webp",
    "v50/artwork/god_save_the_king.webp",
    "v50/artwork/golden_days.webp",
    "v50/artwork/good_enough.webp",
    "v50/artwork/haunted_haven.webp",
    "v50/artwork/heart_of_fire_and_ice.webp",
    "v50/artwork/her_first_truck.webp",
    "v50/artwork/hes_still_here.webp",
    "v50/artwork/howling_wolves.webp",
    "v50/artwork/i_love_school.webp",
    "v50/artwork/i_scream.webp",
    "v50/artwork/introverted_girl.webp",
    "v50/artwork/just_wants_to_be_loved.webp",
    "v50/artwork/last_exit.webp",
    "v50/artwork/left_lane_legend.webp",
    "v50/artwork/little_butterflies.webp",
    "v50/artwork/maybe_they_knew.webp",
    "v50/artwork/my_foundation.webp",
    "v50/artwork/my_sweet_little_star.webp",
    "v50/artwork/need_for_speed.webp",
    "v50/artwork/paradox_love.webp",
    "v50/artwork/password_expired.webp",
    "v50/artwork/password_expired_live.webp",
    "v50/artwork/peaks_of_gold.webp",
    "v50/artwork/private_lake.webp",
    "v50/artwork/radio_trash.webp",
    "v50/artwork/ride_the_groove.webp",
    "v50/artwork/sailing_on_open_water.webp",
    "v50/artwork/sanctified_sinner.webp",
    "v50/artwork/sanctuary_riot.webp",
    "v50/artwork/schools_out.webp",
    "v50/artwork/siblings.webp",
    "v50/artwork/skeleton_dance.webp",
    "v50/artwork/spooky.webp",
    "v50/artwork/storm_of_the_abyss.webp",
    "v50/artwork/summers_farewell.webp",
    "v50/artwork/tabby_gonzalez.webp",
    "v50/artwork/the_dive.webp",
    "v50/artwork/the_rhythm_of_the_fox.webp",
    "v50/artwork/the_soft_return.webp",
    "v50/artwork/the_steel_winged_swan.webp",
    "v50/artwork/toccata.webp",
    "v50/artwork/trick_or_treat.webp",
    "v50/artwork/uncaged.webp",
    "v50/artwork/upon_a_winding_trail.webp",
    "v50/artwork/venezia.webp",
    "v50/artwork/whiteout.webp",
    "v50/artwork/winterstorm.webp",
    "v50/datenschutz.html",
    "v50/images/Guitar-in-Dolomites.webp",
    "v50/images/Hero.webp",
    "v50/images/Hero_square.webp",
    "v50/images/Julia-skiing-Dolomites.webp",
    "v50/images/Stage_1.webp",
    "v50/images/Stage_2.webp",
    "v50/images/Stage_3.webp",
    "v50/images/Stage_4.webp",
    "v50/images/Stage_5.webp",
    "v50/images/Stage_6.webp",
    "v50/images/Stage_7.webp",
    "v50/images/Stage_8.webp",
    "v50/images/icons/app_icon_192.png",
    "v50/images/icons/app_icon_512.png",
    "v50/images/original/Guitar-in-Dolomites.png",
    "v50/images/original/Hero.jpg",
    "v50/images/original/Hero_square.jpg",
    "v50/images/original/Julia-skiing-Dolomites.png",
    "v50/images/original/Stage_1.png",
    "v50/images/original/Stage_2.png",
    "v50/images/original/Stage_3.png",
    "v50/images/original/Stage_4.png",
    "v50/images/original/Stage_5.png",
    "v50/images/original/Stage_6.png",
    "v50/images/original/Stage_7.png",
    "v50/images/original/Stage_8.png",
    "v50/images/password_expired_live.webp",
    "v50/impressum.html",
    "v50/index.html",
    "v50/js/DiaryService.js",
    "v50/js/Main.js",
    "v50/js/PickerDrum.js",
    "v50/js/Player.js",
    "v50/js/SongCollection.js",
    "v50/js/SongService.js",
    "v50/js/VersionCore.js",
    "v50/js/ffmpeg.min.js",
    "v50/js/lucide.js",
    "v50/js/tailwindcss.js",
    "v50/legal_notice.html",
    "v50/manifest.json",
    "v50/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v50...');
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
