const STATIC_CACHE = 'julia-site-v59';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v59/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v59/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v59/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v59/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v59/artwork/a_slow_blossoming_rose.webp",
    "v59/artwork/antitoxic.webp",
    "v59/artwork/autumns_whisper.webp",
    "v59/artwork/avalanche.webp",
    "v59/artwork/betrayal.webp",
    "v59/artwork/big_dreams_shine.webp",
    "v59/artwork/big_dreams_shine_live.webp",
    "v59/artwork/bite_of_the_night.webp",
    "v59/artwork/boring.webp",
    "v59/artwork/brooklyn.webp",
    "v59/artwork/buckn_the_bain.webp",
    "v59/artwork/cheerleader.webp",
    "v59/artwork/coffee_in_amsterdam.webp",
    "v59/artwork/cool_fire.webp",
    "v59/artwork/deep_blue.webp",
    "v59/artwork/deepdive_1.webp",
    "v59/artwork/deepdive_2.webp",
    "v59/artwork/default.webp",
    "v59/artwork/digital_ghost.webp",
    "v59/artwork/disco_flashback.webp",
    "v59/artwork/disco_flashback_2.webp",
    "v59/artwork/drunk_not_dumb.webp",
    "v59/artwork/electric_hearts.webp",
    "v59/artwork/embers_and_sparks.webp",
    "v59/artwork/fences_down.webp",
    "v59/artwork/first_steps_to_stardom.webp",
    "v59/artwork/fog_of_fear.webp",
    "v59/artwork/forever.webp",
    "v59/artwork/friday_night.webp",
    "v59/artwork/from_first_steps_to_stardom.webp",
    "v59/artwork/frost_and_friction.webp",
    "v59/artwork/frozen_heart.webp",
    "v59/artwork/garage_band.webp",
    "v59/artwork/ghost_in_the_garden.webp",
    "v59/artwork/god_save_the_king.webp",
    "v59/artwork/golden_days.webp",
    "v59/artwork/good_enough.webp",
    "v59/artwork/haunted_haven.webp",
    "v59/artwork/heart_of_fire_and_ice.webp",
    "v59/artwork/her_first_truck.webp",
    "v59/artwork/hes_still_here.webp",
    "v59/artwork/howling_wolves.webp",
    "v59/artwork/i_hate_you.webp",
    "v59/artwork/i_love_school.webp",
    "v59/artwork/i_scream.webp",
    "v59/artwork/insult_the_ones_you_love.webp",
    "v59/artwork/introverted_girl.webp",
    "v59/artwork/jet_set.webp",
    "v59/artwork/just_wants_to_be_loved.webp",
    "v59/artwork/last_exit.webp",
    "v59/artwork/left_lane_legend.webp",
    "v59/artwork/little_butterflies.webp",
    "v59/artwork/maybe_they_knew.webp",
    "v59/artwork/mind_the_gap.webp",
    "v59/artwork/my_foundation.webp",
    "v59/artwork/my_sweet_little_star.webp",
    "v59/artwork/need_for_speed.webp",
    "v59/artwork/one_in_a_quarter_billion.webp",
    "v59/artwork/paradox_love.webp",
    "v59/artwork/password_expired.webp",
    "v59/artwork/password_expired_live.webp",
    "v59/artwork/peaks_of_gold.webp",
    "v59/artwork/private_lake.webp",
    "v59/artwork/radio_trash.webp",
    "v59/artwork/ride_the_groove.webp",
    "v59/artwork/rocker_songwriter.webp",
    "v59/artwork/sailing_on_open_water.webp",
    "v59/artwork/sanctified_sinner.webp",
    "v59/artwork/sanctuary_riot.webp",
    "v59/artwork/schools_out.webp",
    "v59/artwork/set_the_spirit_free.webp",
    "v59/artwork/siblings.webp",
    "v59/artwork/skeleton_dance.webp",
    "v59/artwork/slippery_road.webp",
    "v59/artwork/spooky.webp",
    "v59/artwork/storm_of_the_abyss.webp",
    "v59/artwork/summers_farewell.webp",
    "v59/artwork/tabby_gonzalez.webp",
    "v59/artwork/the_dive.webp",
    "v59/artwork/the_rhythm_of_the_fox.webp",
    "v59/artwork/the_rhythm_of_you.webp",
    "v59/artwork/the_sharpened_bow.webp",
    "v59/artwork/the_soft_return.webp",
    "v59/artwork/the_steel_winged_swan.webp",
    "v59/artwork/toccata.webp",
    "v59/artwork/trick_or_treat.webp",
    "v59/artwork/uncaged.webp",
    "v59/artwork/upon_a_winding_trail.webp",
    "v59/artwork/venezia.webp",
    "v59/artwork/verona.webp",
    "v59/artwork/whiteout.webp",
    "v59/artwork/winterstorm.webp",
    "v59/datenschutz.html",
    "v59/images/Guitar-in-Dolomites.webp",
    "v59/images/Hero.webp",
    "v59/images/Hero_square.webp",
    "v59/images/Julia-skiing-Dolomites.webp",
    "v59/images/Stage_1.webp",
    "v59/images/Stage_2.webp",
    "v59/images/Stage_3.webp",
    "v59/images/Stage_4.webp",
    "v59/images/Stage_5.webp",
    "v59/images/Stage_6.webp",
    "v59/images/Stage_7.webp",
    "v59/images/Stage_8.webp",
    "v59/images/icons/app_icon_192.png",
    "v59/images/icons/app_icon_512.png",
    "v59/images/original/Guitar-in-Dolomites.png",
    "v59/images/original/Hero.jpg",
    "v59/images/original/Hero_square.jpg",
    "v59/images/original/Julia-skiing-Dolomites.png",
    "v59/images/original/Stage_1.png",
    "v59/images/original/Stage_2.png",
    "v59/images/original/Stage_3.png",
    "v59/images/original/Stage_4.png",
    "v59/images/original/Stage_5.png",
    "v59/images/original/Stage_6.png",
    "v59/images/original/Stage_7.png",
    "v59/images/original/Stage_8.png",
    "v59/images/password_expired_live.webp",
    "v59/images/podcasts.webp",
    "v59/impressum.html",
    "v59/index.html",
    "v59/js/DiaryService.js",
    "v59/js/Director.js",
    "v59/js/Main 20260319_1300.js",
    "v59/js/Main.js",
    "v59/js/PickerDrum.js",
    "v59/js/Player 20260319_1300.js",
    "v59/js/Player.js",
    "v59/js/SongCollection 20260319_1400.js",
    "v59/js/SongCollection.js",
    "v59/js/SongService.js",
    "v59/js/VersionCore.js",
    "v59/js/ffmpeg.min.js",
    "v59/js/lucide.js",
    "v59/js/tailwindcss.js",
    "v59/legal_notice.html",
    "v59/manifest.json",
    "v59/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v59...');
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
