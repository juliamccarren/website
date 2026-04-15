const STATIC_CACHE = 'julia-site-v58';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v58/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v58/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v58/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v58/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v58/artwork/a_slow_blossoming_rose.webp",
    "v58/artwork/antitoxic.webp",
    "v58/artwork/autumns_whisper.webp",
    "v58/artwork/avalanche.webp",
    "v58/artwork/betrayal.webp",
    "v58/artwork/big_dreams_shine.webp",
    "v58/artwork/big_dreams_shine_live.webp",
    "v58/artwork/bite_of_the_night.webp",
    "v58/artwork/boring.webp",
    "v58/artwork/brooklyn.webp",
    "v58/artwork/buckn_the_bain.webp",
    "v58/artwork/cheerleader.webp",
    "v58/artwork/coffee_in_amsterdam.webp",
    "v58/artwork/cool_fire.webp",
    "v58/artwork/deep_blue.webp",
    "v58/artwork/deepdive_1.webp",
    "v58/artwork/deepdive_2.webp",
    "v58/artwork/default.webp",
    "v58/artwork/digital_ghost.webp",
    "v58/artwork/disco_flashback.webp",
    "v58/artwork/disco_flashback_2.webp",
    "v58/artwork/drunk_not_dumb.webp",
    "v58/artwork/electric_hearts.webp",
    "v58/artwork/embers_and_sparks.webp",
    "v58/artwork/fences_down.webp",
    "v58/artwork/first_steps_to_stardom.webp",
    "v58/artwork/fog_of_fear.webp",
    "v58/artwork/forever.webp",
    "v58/artwork/friday_night.webp",
    "v58/artwork/from_first_steps_to_stardom.webp",
    "v58/artwork/frost_and_friction.webp",
    "v58/artwork/frozen_heart.webp",
    "v58/artwork/garage_band.webp",
    "v58/artwork/ghost_in_the_garden.webp",
    "v58/artwork/god_save_the_king.webp",
    "v58/artwork/golden_days.webp",
    "v58/artwork/good_enough.webp",
    "v58/artwork/haunted_haven.webp",
    "v58/artwork/heart_of_fire_and_ice.webp",
    "v58/artwork/her_first_truck.webp",
    "v58/artwork/hes_still_here.webp",
    "v58/artwork/howling_wolves.webp",
    "v58/artwork/i_hate_you.webp",
    "v58/artwork/i_love_school.webp",
    "v58/artwork/i_scream.webp",
    "v58/artwork/insult_the_ones_you_love.webp",
    "v58/artwork/introverted_girl.webp",
    "v58/artwork/jet_set.webp",
    "v58/artwork/just_wants_to_be_loved.webp",
    "v58/artwork/last_exit.webp",
    "v58/artwork/left_lane_legend.webp",
    "v58/artwork/little_butterflies.webp",
    "v58/artwork/maybe_they_knew.webp",
    "v58/artwork/my_foundation.webp",
    "v58/artwork/my_sweet_little_star.webp",
    "v58/artwork/need_for_speed.webp",
    "v58/artwork/one_in_a_quarter_billion.webp",
    "v58/artwork/paradox_love.webp",
    "v58/artwork/password_expired.webp",
    "v58/artwork/password_expired_live.webp",
    "v58/artwork/peaks_of_gold.webp",
    "v58/artwork/private_lake.webp",
    "v58/artwork/radio_trash.webp",
    "v58/artwork/ride_the_groove.webp",
    "v58/artwork/rocker_songwriter.webp",
    "v58/artwork/sailing_on_open_water.webp",
    "v58/artwork/sanctified_sinner.webp",
    "v58/artwork/sanctuary_riot.webp",
    "v58/artwork/schools_out.webp",
    "v58/artwork/set_the_spirit_free.webp",
    "v58/artwork/siblings.webp",
    "v58/artwork/skeleton_dance.webp",
    "v58/artwork/slippery_road.webp",
    "v58/artwork/spooky.webp",
    "v58/artwork/storm_of_the_abyss.webp",
    "v58/artwork/summers_farewell.webp",
    "v58/artwork/tabby_gonzalez.webp",
    "v58/artwork/the_dive.webp",
    "v58/artwork/the_rhythm_of_the_fox.webp",
    "v58/artwork/the_rhythm_of_you.webp",
    "v58/artwork/the_sharpened_bow.webp",
    "v58/artwork/the_soft_return.webp",
    "v58/artwork/the_steel_winged_swan.webp",
    "v58/artwork/toccata.webp",
    "v58/artwork/trick_or_treat.webp",
    "v58/artwork/uncaged.webp",
    "v58/artwork/upon_a_winding_trail.webp",
    "v58/artwork/venezia.webp",
    "v58/artwork/verona.webp",
    "v58/artwork/whiteout.webp",
    "v58/artwork/winterstorm.webp",
    "v58/datenschutz.html",
    "v58/images/Guitar-in-Dolomites.webp",
    "v58/images/Hero.webp",
    "v58/images/Hero_square.webp",
    "v58/images/Julia-skiing-Dolomites.webp",
    "v58/images/Stage_1.webp",
    "v58/images/Stage_2.webp",
    "v58/images/Stage_3.webp",
    "v58/images/Stage_4.webp",
    "v58/images/Stage_5.webp",
    "v58/images/Stage_6.webp",
    "v58/images/Stage_7.webp",
    "v58/images/Stage_8.webp",
    "v58/images/icons/app_icon_192.png",
    "v58/images/icons/app_icon_512.png",
    "v58/images/original/Guitar-in-Dolomites.png",
    "v58/images/original/Hero.jpg",
    "v58/images/original/Hero_square.jpg",
    "v58/images/original/Julia-skiing-Dolomites.png",
    "v58/images/original/Stage_1.png",
    "v58/images/original/Stage_2.png",
    "v58/images/original/Stage_3.png",
    "v58/images/original/Stage_4.png",
    "v58/images/original/Stage_5.png",
    "v58/images/original/Stage_6.png",
    "v58/images/original/Stage_7.png",
    "v58/images/original/Stage_8.png",
    "v58/images/password_expired_live.webp",
    "v58/images/podcasts.webp",
    "v58/impressum.html",
    "v58/index.html",
    "v58/js/DiaryService.js",
    "v58/js/Director.js",
    "v58/js/Main 20260319_1300.js",
    "v58/js/Main.js",
    "v58/js/PickerDrum.js",
    "v58/js/Player 20260319_1300.js",
    "v58/js/Player.js",
    "v58/js/SongCollection 20260319_1400.js",
    "v58/js/SongCollection.js",
    "v58/js/SongService.js",
    "v58/js/VersionCore.js",
    "v58/js/ffmpeg.min.js",
    "v58/js/lucide.js",
    "v58/js/tailwindcss.js",
    "v58/legal_notice.html",
    "v58/manifest.json",
    "v58/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v58...');
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
