const STATIC_CACHE = 'julia-site-v62';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v62/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v62/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v62/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v62/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v62/artwork/a_slow_blossoming_rose.webp",
    "v62/artwork/antitoxic.webp",
    "v62/artwork/autumns_whisper.webp",
    "v62/artwork/avalanche.webp",
    "v62/artwork/betrayal.webp",
    "v62/artwork/big_dreams_shine.webp",
    "v62/artwork/big_dreams_shine_live.webp",
    "v62/artwork/bite_of_the_night.webp",
    "v62/artwork/boring.webp",
    "v62/artwork/brooklyn.webp",
    "v62/artwork/buckn_the_bain.webp",
    "v62/artwork/cheerleader.webp",
    "v62/artwork/coffee_in_amsterdam.webp",
    "v62/artwork/cool_fire.webp",
    "v62/artwork/date_disaster.webp",
    "v62/artwork/deep_blue.webp",
    "v62/artwork/deepdive_1.webp",
    "v62/artwork/deepdive_2.webp",
    "v62/artwork/default.webp",
    "v62/artwork/digital_ghost.webp",
    "v62/artwork/disco_flashback.webp",
    "v62/artwork/disco_flashback_2.webp",
    "v62/artwork/disposable.webp",
    "v62/artwork/drunk_not_dumb.webp",
    "v62/artwork/dynamite.webp",
    "v62/artwork/electric_hearts.webp",
    "v62/artwork/embers_and_sparks.webp",
    "v62/artwork/fences_down.webp",
    "v62/artwork/first_steps_to_stardom.webp",
    "v62/artwork/fog_of_fear.webp",
    "v62/artwork/forever.webp",
    "v62/artwork/four_chords_later.webp",
    "v62/artwork/friday_night.webp",
    "v62/artwork/from_first_steps_to_stardom.webp",
    "v62/artwork/frost_and_friction.webp",
    "v62/artwork/frozen_heart.webp",
    "v62/artwork/garage_band.webp",
    "v62/artwork/ghost_in_the_garden.webp",
    "v62/artwork/god_save_the_king.webp",
    "v62/artwork/golden_days.webp",
    "v62/artwork/good_enough.webp",
    "v62/artwork/haunted_haven.webp",
    "v62/artwork/heart_of_fire_and_ice.webp",
    "v62/artwork/her_first_truck.webp",
    "v62/artwork/hes_still_here.webp",
    "v62/artwork/howling_wolves.webp",
    "v62/artwork/i_hate_you.webp",
    "v62/artwork/i_love_school.webp",
    "v62/artwork/i_scream.webp",
    "v62/artwork/insatiable.webp",
    "v62/artwork/insult_the_ones_you_love.webp",
    "v62/artwork/introverted_girl.webp",
    "v62/artwork/jet_set.webp",
    "v62/artwork/just_a_vibe.webp",
    "v62/artwork/just_wants_to_be_loved.webp",
    "v62/artwork/last_exit.webp",
    "v62/artwork/left_lane_legend.webp",
    "v62/artwork/little_butterflies.webp",
    "v62/artwork/maybe_they_knew.webp",
    "v62/artwork/mind_the_gap.webp",
    "v62/artwork/my_foundation.webp",
    "v62/artwork/my_sweet_little_star.webp",
    "v62/artwork/need_for_speed.webp",
    "v62/artwork/one_in_a_quarter_billion.webp",
    "v62/artwork/paradox_love.webp",
    "v62/artwork/password_expired.webp",
    "v62/artwork/password_expired_live.webp",
    "v62/artwork/peaks_of_gold.webp",
    "v62/artwork/private_lake.webp",
    "v62/artwork/radio_trash.webp",
    "v62/artwork/ride_the_groove.webp",
    "v62/artwork/rocker_songwriter.webp",
    "v62/artwork/sailing_on_open_water.webp",
    "v62/artwork/sanctified_sinner.webp",
    "v62/artwork/sanctuary_riot.webp",
    "v62/artwork/schools_out.webp",
    "v62/artwork/set_the_spirit_free.webp",
    "v62/artwork/siblings.webp",
    "v62/artwork/skeleton_dance.webp",
    "v62/artwork/slippery_road.webp",
    "v62/artwork/social_lubricant.webp",
    "v62/artwork/soulmate.webp",
    "v62/artwork/spooky.webp",
    "v62/artwork/storm_of_the_abyss.webp",
    "v62/artwork/summers_farewell.webp",
    "v62/artwork/tabby_gonzalez.webp",
    "v62/artwork/the_city_i_long_for.webp",
    "v62/artwork/the_dive.webp",
    "v62/artwork/the_hard_way.webp",
    "v62/artwork/the_hook.webp",
    "v62/artwork/the_quiet_kind.webp",
    "v62/artwork/the_rhythm_of_the_fox.webp",
    "v62/artwork/the_rhythm_of_you.webp",
    "v62/artwork/the_sharpened_bow.webp",
    "v62/artwork/the_sirens_anchor.webp",
    "v62/artwork/the_soft_return.webp",
    "v62/artwork/the_steel_winged_swan.webp",
    "v62/artwork/this_is_fine.webp",
    "v62/artwork/tide_on_stone.webp",
    "v62/artwork/toccata.webp",
    "v62/artwork/trick_or_treat.webp",
    "v62/artwork/uncaged.webp",
    "v62/artwork/upon_a_winding_trail.webp",
    "v62/artwork/venezia.webp",
    "v62/artwork/verona.webp",
    "v62/artwork/whiteout.webp",
    "v62/artwork/winterstorm.webp",
    "v62/datenschutz.html",
    "v62/images/Guitar-in-Dolomites.webp",
    "v62/images/Hero.webp",
    "v62/images/Hero_square.webp",
    "v62/images/Julia-skiing-Dolomites.webp",
    "v62/images/Stage_1.webp",
    "v62/images/Stage_2.webp",
    "v62/images/Stage_3.webp",
    "v62/images/Stage_4.webp",
    "v62/images/Stage_5.webp",
    "v62/images/Stage_6.webp",
    "v62/images/Stage_7.webp",
    "v62/images/Stage_8.webp",
    "v62/images/icons/app_icon_192.png",
    "v62/images/icons/app_icon_512.png",
    "v62/images/original/Guitar-in-Dolomites.png",
    "v62/images/original/Hero.jpg",
    "v62/images/original/Hero_square.jpg",
    "v62/images/original/Julia-skiing-Dolomites.png",
    "v62/images/original/Stage_1.png",
    "v62/images/original/Stage_2.png",
    "v62/images/original/Stage_3.png",
    "v62/images/original/Stage_4.png",
    "v62/images/original/Stage_5.png",
    "v62/images/original/Stage_6.png",
    "v62/images/original/Stage_7.png",
    "v62/images/original/Stage_8.png",
    "v62/images/password_expired_live.webp",
    "v62/images/podcasts.webp",
    "v62/impressum.html",
    "v62/index.html",
    "v62/js/DiaryService.js",
    "v62/js/Director.js",
    "v62/js/Main 20260319_1300.js",
    "v62/js/Main.js",
    "v62/js/PickerDrum.js",
    "v62/js/Player 20260319_1300.js",
    "v62/js/Player.js",
    "v62/js/SongCollection 20260319_1400.js",
    "v62/js/SongCollection.js",
    "v62/js/SongService.js",
    "v62/js/VersionCore.js",
    "v62/js/ffmpeg.min.js",
    "v62/js/lucide.js",
    "v62/js/tailwindcss.js",
    "v62/legal_notice.html",
    "v62/manifest.json",
    "v62/privacy_policy.html"
];
const STATIC_CORE_ASSETS = [
    "js/VersionCore.js"
];

self.addEventListener('install', event => {
    event.waitUntil(
        Promise.all([
                    caches.open(STATIC_CACHE).then(cache => cache.addAll(ASSETS)),
                    caches.open(STATIC_CORE_CACHE).then(cache => cache.addAll(STATIC_CORE_ASSETS))
                ])
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
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) return response;
            
            return fetch(event.request);
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
