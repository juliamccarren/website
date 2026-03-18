const STATIC_CACHE = 'julia-site-v56';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v56/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v56/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v56/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v56/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v56/artwork/a_slow_blossoming_rose.webp",
    "v56/artwork/antitoxic.webp",
    "v56/artwork/autumns_whisper.webp",
    "v56/artwork/avalanche.webp",
    "v56/artwork/betrayal.webp",
    "v56/artwork/big_dreams_shine.webp",
    "v56/artwork/big_dreams_shine_live.webp",
    "v56/artwork/bite_of_the_night.webp",
    "v56/artwork/boring.webp",
    "v56/artwork/brooklyn.webp",
    "v56/artwork/buckn_the_bain.webp",
    "v56/artwork/cheerleader.webp",
    "v56/artwork/coffee_in_amsterdam.webp",
    "v56/artwork/cool_fire.webp",
    "v56/artwork/deep_blue.webp",
    "v56/artwork/deepdive_1.webp",
    "v56/artwork/deepdive_2.webp",
    "v56/artwork/default.webp",
    "v56/artwork/digital_ghost.webp",
    "v56/artwork/disco_flashback.webp",
    "v56/artwork/disco_flashback_2.webp",
    "v56/artwork/drunk_not_dumb.webp",
    "v56/artwork/electric_hearts.webp",
    "v56/artwork/embers_and_sparks.webp",
    "v56/artwork/fences_down.webp",
    "v56/artwork/first_steps_to_stardom.webp",
    "v56/artwork/fog_of_fear.webp",
    "v56/artwork/forever.webp",
    "v56/artwork/friday_night.webp",
    "v56/artwork/from_first_steps_to_stardom.webp",
    "v56/artwork/frost_and_friction.webp",
    "v56/artwork/frozen_heart.webp",
    "v56/artwork/garage_band.webp",
    "v56/artwork/ghost_in_the_garden.webp",
    "v56/artwork/god_save_the_king.webp",
    "v56/artwork/golden_days.webp",
    "v56/artwork/good_enough.webp",
    "v56/artwork/haunted_haven.webp",
    "v56/artwork/heart_of_fire_and_ice.webp",
    "v56/artwork/her_first_truck.webp",
    "v56/artwork/hes_still_here.webp",
    "v56/artwork/howling_wolves.webp",
    "v56/artwork/i_hate_you.webp",
    "v56/artwork/i_love_school.webp",
    "v56/artwork/i_scream.webp",
    "v56/artwork/insult_the_ones_you_love.webp",
    "v56/artwork/introverted_girl.webp",
    "v56/artwork/jet_set.webp",
    "v56/artwork/just_wants_to_be_loved.webp",
    "v56/artwork/last_exit.webp",
    "v56/artwork/left_lane_legend.webp",
    "v56/artwork/little_butterflies.webp",
    "v56/artwork/maybe_they_knew.webp",
    "v56/artwork/my_foundation.webp",
    "v56/artwork/my_sweet_little_star.webp",
    "v56/artwork/need_for_speed.webp",
    "v56/artwork/one_in_a_quarter_billion.webp",
    "v56/artwork/paradox_love.webp",
    "v56/artwork/password_expired.webp",
    "v56/artwork/password_expired_live.webp",
    "v56/artwork/peaks_of_gold.webp",
    "v56/artwork/private_lake.webp",
    "v56/artwork/radio_trash.webp",
    "v56/artwork/ride_the_groove.webp",
    "v56/artwork/rocker_songwriter.webp",
    "v56/artwork/sailing_on_open_water.webp",
    "v56/artwork/sanctified_sinner.webp",
    "v56/artwork/sanctuary_riot.webp",
    "v56/artwork/schools_out.webp",
    "v56/artwork/siblings.webp",
    "v56/artwork/skeleton_dance.webp",
    "v56/artwork/slippery_road.webp",
    "v56/artwork/spooky.webp",
    "v56/artwork/storm_of_the_abyss.webp",
    "v56/artwork/summers_farewell.webp",
    "v56/artwork/tabby_gonzalez.webp",
    "v56/artwork/the_dive.webp",
    "v56/artwork/the_rhythm_of_the_fox.webp",
    "v56/artwork/the_rhythm_of_you.webp",
    "v56/artwork/the_sharpened_bow.webp",
    "v56/artwork/the_soft_return.webp",
    "v56/artwork/the_steel_winged_swan.webp",
    "v56/artwork/toccata.webp",
    "v56/artwork/trick_or_treat.webp",
    "v56/artwork/uncaged.webp",
    "v56/artwork/upon_a_winding_trail.webp",
    "v56/artwork/venezia.webp",
    "v56/artwork/verona.webp",
    "v56/artwork/whiteout.webp",
    "v56/artwork/winterstorm.webp",
    "v56/datenschutz.html",
    "v56/images/Guitar-in-Dolomites.webp",
    "v56/images/Hero.webp",
    "v56/images/Hero_square.webp",
    "v56/images/Julia-skiing-Dolomites.webp",
    "v56/images/Stage_1.webp",
    "v56/images/Stage_2.webp",
    "v56/images/Stage_3.webp",
    "v56/images/Stage_4.webp",
    "v56/images/Stage_5.webp",
    "v56/images/Stage_6.webp",
    "v56/images/Stage_7.webp",
    "v56/images/Stage_8.webp",
    "v56/images/icons/app_icon_192.png",
    "v56/images/icons/app_icon_512.png",
    "v56/images/original/Guitar-in-Dolomites.png",
    "v56/images/original/Hero.jpg",
    "v56/images/original/Hero_square.jpg",
    "v56/images/original/Julia-skiing-Dolomites.png",
    "v56/images/original/Stage_1.png",
    "v56/images/original/Stage_2.png",
    "v56/images/original/Stage_3.png",
    "v56/images/original/Stage_4.png",
    "v56/images/original/Stage_5.png",
    "v56/images/original/Stage_6.png",
    "v56/images/original/Stage_7.png",
    "v56/images/original/Stage_8.png",
    "v56/images/password_expired_live.webp",
    "v56/images/podcasts.webp",
    "v56/impressum.html",
    "v56/index.html",
    "v56/js/DiaryService.js",
    "v56/js/Main.js",
    "v56/js/PickerDrum.js",
    "v56/js/Player.js",
    "v56/js/SongCollection.js",
    "v56/js/SongService.js",
    "v56/js/VersionCore.js",
    "v56/js/ffmpeg.min.js",
    "v56/js/lucide.js",
    "v56/js/tailwindcss.js",
    "v56/legal_notice.html",
    "v56/manifest.json",
    "v56/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v56...');
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
