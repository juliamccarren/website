const STATIC_CACHE = 'julia-site-v51';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v51/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v51/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v51/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v51/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v51/artwork/a_slow_blossoming_rose.webp",
    "v51/artwork/antitoxic.webp",
    "v51/artwork/autumns_whisper.webp",
    "v51/artwork/big_dreams_shine.webp",
    "v51/artwork/big_dreams_shine_live.webp",
    "v51/artwork/bite_of_the_night.webp",
    "v51/artwork/boring.webp",
    "v51/artwork/brooklyn.webp",
    "v51/artwork/buckn_the_bain.webp",
    "v51/artwork/cheerleader.webp",
    "v51/artwork/coffee_in_amsterdam.webp",
    "v51/artwork/cool_fire.webp",
    "v51/artwork/deep_blue.webp",
    "v51/artwork/default.webp",
    "v51/artwork/digital_ghost.webp",
    "v51/artwork/disco_flashback.webp",
    "v51/artwork/disco_flashback_2.webp",
    "v51/artwork/drunk_not_dumb.webp",
    "v51/artwork/first_steps_to_stardom.webp",
    "v51/artwork/fog_of_fear.webp",
    "v51/artwork/forever.webp",
    "v51/artwork/friday_night.webp",
    "v51/artwork/from_first_steps_to_stardom.webp",
    "v51/artwork/frost_and_friction.webp",
    "v51/artwork/frozen_heart.webp",
    "v51/artwork/garage_band.webp",
    "v51/artwork/ghost_in_the_garden.webp",
    "v51/artwork/god_save_the_king.webp",
    "v51/artwork/golden_days.webp",
    "v51/artwork/good_enough.webp",
    "v51/artwork/haunted_haven.webp",
    "v51/artwork/heart_of_fire_and_ice.webp",
    "v51/artwork/her_first_truck.webp",
    "v51/artwork/hes_still_here.webp",
    "v51/artwork/howling_wolves.webp",
    "v51/artwork/i_love_school.webp",
    "v51/artwork/i_scream.webp",
    "v51/artwork/introverted_girl.webp",
    "v51/artwork/just_wants_to_be_loved.webp",
    "v51/artwork/last_exit.webp",
    "v51/artwork/left_lane_legend.webp",
    "v51/artwork/little_butterflies.webp",
    "v51/artwork/maybe_they_knew.webp",
    "v51/artwork/my_foundation.webp",
    "v51/artwork/my_sweet_little_star.webp",
    "v51/artwork/need_for_speed.webp",
    "v51/artwork/paradox_love.webp",
    "v51/artwork/password_expired.webp",
    "v51/artwork/password_expired_live.webp",
    "v51/artwork/peaks_of_gold.webp",
    "v51/artwork/private_lake.webp",
    "v51/artwork/radio_trash.webp",
    "v51/artwork/ride_the_groove.webp",
    "v51/artwork/sailing_on_open_water.webp",
    "v51/artwork/sanctified_sinner.webp",
    "v51/artwork/sanctuary_riot.webp",
    "v51/artwork/schools_out.webp",
    "v51/artwork/siblings.webp",
    "v51/artwork/skeleton_dance.webp",
    "v51/artwork/spooky.webp",
    "v51/artwork/storm_of_the_abyss.webp",
    "v51/artwork/summers_farewell.webp",
    "v51/artwork/tabby_gonzalez.webp",
    "v51/artwork/the_dive.webp",
    "v51/artwork/the_rhythm_of_the_fox.webp",
    "v51/artwork/the_soft_return.webp",
    "v51/artwork/the_steel_winged_swan.webp",
    "v51/artwork/toccata.webp",
    "v51/artwork/trick_or_treat.webp",
    "v51/artwork/uncaged.webp",
    "v51/artwork/upon_a_winding_trail.webp",
    "v51/artwork/venezia.webp",
    "v51/artwork/whiteout.webp",
    "v51/artwork/winterstorm.webp",
    "v51/datenschutz.html",
    "v51/images/Guitar-in-Dolomites.webp",
    "v51/images/Hero.webp",
    "v51/images/Hero_square.webp",
    "v51/images/Julia-skiing-Dolomites.webp",
    "v51/images/Stage_1.webp",
    "v51/images/Stage_2.webp",
    "v51/images/Stage_3.webp",
    "v51/images/Stage_4.webp",
    "v51/images/Stage_5.webp",
    "v51/images/Stage_6.webp",
    "v51/images/Stage_7.webp",
    "v51/images/Stage_8.webp",
    "v51/images/icons/app_icon_192.png",
    "v51/images/icons/app_icon_512.png",
    "v51/images/original/Guitar-in-Dolomites.png",
    "v51/images/original/Hero.jpg",
    "v51/images/original/Hero_square.jpg",
    "v51/images/original/Julia-skiing-Dolomites.png",
    "v51/images/original/Stage_1.png",
    "v51/images/original/Stage_2.png",
    "v51/images/original/Stage_3.png",
    "v51/images/original/Stage_4.png",
    "v51/images/original/Stage_5.png",
    "v51/images/original/Stage_6.png",
    "v51/images/original/Stage_7.png",
    "v51/images/original/Stage_8.png",
    "v51/images/password_expired_live.webp",
    "v51/impressum.html",
    "v51/index.html",
    "v51/js/DiaryService.js",
    "v51/js/Main.js",
    "v51/js/PickerDrum.js",
    "v51/js/Player.js",
    "v51/js/SongCollection.js",
    "v51/js/SongService.js",
    "v51/js/VersionCore.js",
    "v51/js/ffmpeg.min.js",
    "v51/js/lucide.js",
    "v51/js/tailwindcss.js",
    "v51/legal_notice.html",
    "v51/manifest.json",
    "v51/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v51...');
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
