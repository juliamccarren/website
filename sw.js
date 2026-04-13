const STATIC_CACHE = 'julia-site-v57';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v57/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v57/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v57/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v57/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v57/artwork/a_slow_blossoming_rose.webp",
    "v57/artwork/antitoxic.webp",
    "v57/artwork/autumns_whisper.webp",
    "v57/artwork/avalanche.webp",
    "v57/artwork/betrayal.webp",
    "v57/artwork/big_dreams_shine.webp",
    "v57/artwork/big_dreams_shine_live.webp",
    "v57/artwork/bite_of_the_night.webp",
    "v57/artwork/boring.webp",
    "v57/artwork/brooklyn.webp",
    "v57/artwork/buckn_the_bain.webp",
    "v57/artwork/cheerleader.webp",
    "v57/artwork/coffee_in_amsterdam.webp",
    "v57/artwork/cool_fire.webp",
    "v57/artwork/deep_blue.webp",
    "v57/artwork/deepdive_1.webp",
    "v57/artwork/deepdive_2.webp",
    "v57/artwork/default.webp",
    "v57/artwork/digital_ghost.webp",
    "v57/artwork/disco_flashback.webp",
    "v57/artwork/disco_flashback_2.webp",
    "v57/artwork/drunk_not_dumb.webp",
    "v57/artwork/electric_hearts.webp",
    "v57/artwork/embers_and_sparks.webp",
    "v57/artwork/fences_down.webp",
    "v57/artwork/first_steps_to_stardom.webp",
    "v57/artwork/fog_of_fear.webp",
    "v57/artwork/forever.webp",
    "v57/artwork/friday_night.webp",
    "v57/artwork/from_first_steps_to_stardom.webp",
    "v57/artwork/frost_and_friction.webp",
    "v57/artwork/frozen_heart.webp",
    "v57/artwork/garage_band.webp",
    "v57/artwork/ghost_in_the_garden.webp",
    "v57/artwork/god_save_the_king.webp",
    "v57/artwork/golden_days.webp",
    "v57/artwork/good_enough.webp",
    "v57/artwork/haunted_haven.webp",
    "v57/artwork/heart_of_fire_and_ice.webp",
    "v57/artwork/her_first_truck.webp",
    "v57/artwork/hes_still_here.webp",
    "v57/artwork/howling_wolves.webp",
    "v57/artwork/i_hate_you.webp",
    "v57/artwork/i_love_school.webp",
    "v57/artwork/i_scream.webp",
    "v57/artwork/insult_the_ones_you_love.webp",
    "v57/artwork/introverted_girl.webp",
    "v57/artwork/jet_set.webp",
    "v57/artwork/just_wants_to_be_loved.webp",
    "v57/artwork/last_exit.webp",
    "v57/artwork/left_lane_legend.webp",
    "v57/artwork/little_butterflies.webp",
    "v57/artwork/maybe_they_knew.webp",
    "v57/artwork/my_foundation.webp",
    "v57/artwork/my_sweet_little_star.webp",
    "v57/artwork/need_for_speed.webp",
    "v57/artwork/one_in_a_quarter_billion.webp",
    "v57/artwork/paradox_love.webp",
    "v57/artwork/password_expired.webp",
    "v57/artwork/password_expired_live.webp",
    "v57/artwork/peaks_of_gold.webp",
    "v57/artwork/private_lake.webp",
    "v57/artwork/radio_trash.webp",
    "v57/artwork/ride_the_groove.webp",
    "v57/artwork/rocker_songwriter.webp",
    "v57/artwork/sailing_on_open_water.webp",
    "v57/artwork/sanctified_sinner.webp",
    "v57/artwork/sanctuary_riot.webp",
    "v57/artwork/schools_out.webp",
    "v57/artwork/set_the_spirit_free.webp",
    "v57/artwork/siblings.webp",
    "v57/artwork/skeleton_dance.webp",
    "v57/artwork/slippery_road.webp",
    "v57/artwork/spooky.webp",
    "v57/artwork/storm_of_the_abyss.webp",
    "v57/artwork/summers_farewell.webp",
    "v57/artwork/tabby_gonzalez.webp",
    "v57/artwork/the_dive.webp",
    "v57/artwork/the_rhythm_of_the_fox.webp",
    "v57/artwork/the_rhythm_of_you.webp",
    "v57/artwork/the_sharpened_bow.webp",
    "v57/artwork/the_soft_return.webp",
    "v57/artwork/the_steel_winged_swan.webp",
    "v57/artwork/toccata.webp",
    "v57/artwork/trick_or_treat.webp",
    "v57/artwork/uncaged.webp",
    "v57/artwork/upon_a_winding_trail.webp",
    "v57/artwork/venezia.webp",
    "v57/artwork/verona.webp",
    "v57/artwork/whiteout.webp",
    "v57/artwork/winterstorm.webp",
    "v57/datenschutz.html",
    "v57/images/Guitar-in-Dolomites.webp",
    "v57/images/Hero.webp",
    "v57/images/Hero_square.webp",
    "v57/images/Julia-skiing-Dolomites.webp",
    "v57/images/Stage_1.webp",
    "v57/images/Stage_2.webp",
    "v57/images/Stage_3.webp",
    "v57/images/Stage_4.webp",
    "v57/images/Stage_5.webp",
    "v57/images/Stage_6.webp",
    "v57/images/Stage_7.webp",
    "v57/images/Stage_8.webp",
    "v57/images/icons/app_icon_192.png",
    "v57/images/icons/app_icon_512.png",
    "v57/images/original/Guitar-in-Dolomites.png",
    "v57/images/original/Hero.jpg",
    "v57/images/original/Hero_square.jpg",
    "v57/images/original/Julia-skiing-Dolomites.png",
    "v57/images/original/Stage_1.png",
    "v57/images/original/Stage_2.png",
    "v57/images/original/Stage_3.png",
    "v57/images/original/Stage_4.png",
    "v57/images/original/Stage_5.png",
    "v57/images/original/Stage_6.png",
    "v57/images/original/Stage_7.png",
    "v57/images/original/Stage_8.png",
    "v57/images/password_expired_live.webp",
    "v57/images/podcasts.webp",
    "v57/impressum.html",
    "v57/index.html",
    "v57/js/DiaryService.js",
    "v57/js/Director.js",
    "v57/js/Main 20260319_1300.js",
    "v57/js/Main.js",
    "v57/js/PickerDrum.js",
    "v57/js/Player 20260319_1300.js",
    "v57/js/Player.js",
    "v57/js/SongCollection 20260319_1400.js",
    "v57/js/SongCollection.js",
    "v57/js/SongService.js",
    "v57/js/VersionCore.js",
    "v57/js/ffmpeg.min.js",
    "v57/js/lucide.js",
    "v57/js/tailwindcss.js",
    "v57/legal_notice.html",
    "v57/manifest.json",
    "v57/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v57...');
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
