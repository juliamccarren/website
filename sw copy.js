const STATIC_CACHE = 'julia-site-v63';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v63/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v63/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v63/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v63/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v63/artwork/a_slow_blossoming_rose.webp",
    "v63/artwork/antitoxic.webp",
    "v63/artwork/autumns_whisper.webp",
    "v63/artwork/avalanche.webp",
    "v63/artwork/betrayal.webp",
    "v63/artwork/big_dreams_shine.webp",
    "v63/artwork/big_dreams_shine_live.webp",
    "v63/artwork/bite_of_the_night.webp",
    "v63/artwork/boring.webp",
    "v63/artwork/brooklyn.webp",
    "v63/artwork/buckn_the_bain.webp",
    "v63/artwork/cheerleader.webp",
    "v63/artwork/coffee_in_amsterdam.webp",
    "v63/artwork/cool_fire.webp",
    "v63/artwork/date_disaster.webp",
    "v63/artwork/deep_blue.webp",
    "v63/artwork/deepdive_1.webp",
    "v63/artwork/deepdive_2.webp",
    "v63/artwork/default.webp",
    "v63/artwork/digital_ghost.webp",
    "v63/artwork/disco_flashback.webp",
    "v63/artwork/disco_flashback_2.webp",
    "v63/artwork/disposable.webp",
    "v63/artwork/distortion.webp",
    "v63/artwork/drunk_not_dumb.webp",
    "v63/artwork/dynamite.webp",
    "v63/artwork/electric_hearts.webp",
    "v63/artwork/embers_and_sparks.webp",
    "v63/artwork/fences_down.webp",
    "v63/artwork/first_steps_to_stardom.webp",
    "v63/artwork/fog_of_fear.webp",
    "v63/artwork/forever.webp",
    "v63/artwork/four_chords_later.webp",
    "v63/artwork/friday_night.webp",
    "v63/artwork/from_first_steps_to_stardom.webp",
    "v63/artwork/frost_and_friction.webp",
    "v63/artwork/frozen_heart.webp",
    "v63/artwork/garage_band.webp",
    "v63/artwork/ghost_in_the_garden.webp",
    "v63/artwork/god_save_the_king.webp",
    "v63/artwork/golden_days.webp",
    "v63/artwork/good_enough.webp",
    "v63/artwork/happy_birthday_in_heaven.webp",
    "v63/artwork/haunted_haven.webp",
    "v63/artwork/heart_of_fire_and_ice.webp",
    "v63/artwork/her_first_truck.webp",
    "v63/artwork/hes_still_here.webp",
    "v63/artwork/home_now.webp",
    "v63/artwork/howling_wolves.webp",
    "v63/artwork/i_hate_you.webp",
    "v63/artwork/i_love_school.webp",
    "v63/artwork/i_scream.webp",
    "v63/artwork/insatiable.webp",
    "v63/artwork/insult_the_ones_you_love.webp",
    "v63/artwork/introverted_girl.webp",
    "v63/artwork/jet_set.webp",
    "v63/artwork/just_a_vibe.webp",
    "v63/artwork/just_wants_to_be_loved.webp",
    "v63/artwork/last_exit.webp",
    "v63/artwork/left_lane_legend.webp",
    "v63/artwork/little_butterflies.webp",
    "v63/artwork/maybe_they_knew.webp",
    "v63/artwork/mind_the_gap.webp",
    "v63/artwork/my_foundation.webp",
    "v63/artwork/my_sweet_little_star.webp",
    "v63/artwork/need_for_speed.webp",
    "v63/artwork/one_in_a_quarter_billion.webp",
    "v63/artwork/paradox_love.webp",
    "v63/artwork/password_expired.webp",
    "v63/artwork/password_expired_live.webp",
    "v63/artwork/peaks_of_gold.webp",
    "v63/artwork/private_lake.webp",
    "v63/artwork/radio_trash.webp",
    "v63/artwork/ride_the_groove.webp",
    "v63/artwork/rocker_songwriter.webp",
    "v63/artwork/sailing_on_open_water.webp",
    "v63/artwork/sanctified_sinner.webp",
    "v63/artwork/sanctuary_riot.webp",
    "v63/artwork/schools_out.webp",
    "v63/artwork/set_the_spirit_free.webp",
    "v63/artwork/siblings.webp",
    "v63/artwork/skeleton_dance.webp",
    "v63/artwork/slippery_road.webp",
    "v63/artwork/social_lubricant.webp",
    "v63/artwork/soulmate.webp",
    "v63/artwork/spooky.webp",
    "v63/artwork/storm_of_the_abyss.webp",
    "v63/artwork/summers_farewell.webp",
    "v63/artwork/tabby_gonzalez.webp",
    "v63/artwork/the_city_i_long_for.webp",
    "v63/artwork/the_dive.webp",
    "v63/artwork/the_hard_way.webp",
    "v63/artwork/the_hook.webp",
    "v63/artwork/the_quiet_kind.webp",
    "v63/artwork/the_rhythm_of_the_fox.webp",
    "v63/artwork/the_rhythm_of_you.webp",
    "v63/artwork/the_sharpened_bow.webp",
    "v63/artwork/the_sirens_anchor.webp",
    "v63/artwork/the_soft_return.webp",
    "v63/artwork/the_steel_winged_swan.webp",
    "v63/artwork/this_is_fine.webp",
    "v63/artwork/tide_on_stone.webp",
    "v63/artwork/toccata.webp",
    "v63/artwork/trick_or_treat.webp",
    "v63/artwork/uncaged.webp",
    "v63/artwork/upon_a_winding_trail.webp",
    "v63/artwork/venezia.webp",
    "v63/artwork/verona.webp",
    "v63/artwork/weekend.webp",
    "v63/artwork/whiteout.webp",
    "v63/artwork/winterstorm.webp",
    "v63/datenschutz.html",
    "v63/images/Guitar-in-Dolomites.webp",
    "v63/images/Hero.webp",
    "v63/images/Hero_square.webp",
    "v63/images/Julia-skiing-Dolomites.webp",
    "v63/images/Stage_1.webp",
    "v63/images/Stage_2.webp",
    "v63/images/Stage_3.webp",
    "v63/images/Stage_4.webp",
    "v63/images/Stage_5.webp",
    "v63/images/Stage_6.webp",
    "v63/images/Stage_7.webp",
    "v63/images/Stage_8.webp",
    "v63/images/icons/app_icon_192.png",
    "v63/images/icons/app_icon_512.png",
    "v63/images/original/Guitar-in-Dolomites.png",
    "v63/images/original/Hero.jpg",
    "v63/images/original/Hero_square.jpg",
    "v63/images/original/Julia-skiing-Dolomites.png",
    "v63/images/original/Stage_1.png",
    "v63/images/original/Stage_2.png",
    "v63/images/original/Stage_3.png",
    "v63/images/original/Stage_4.png",
    "v63/images/original/Stage_5.png",
    "v63/images/original/Stage_6.png",
    "v63/images/original/Stage_7.png",
    "v63/images/original/Stage_8.png",
    "v63/images/password_expired_live.webp",
    "v63/images/podcasts.webp",
    "v63/impressum.html",
    "v63/index.html",
    "v63/js/DiaryService.js",
    "v63/js/Director.js",
    "v63/js/Main 20260319_1300.js",
    "v63/js/Main.js",
    "v63/js/PickerDrum.js",
    "v63/js/Player 20260319_1300.js",
    "v63/js/Player.js",
    "v63/js/SongCollection 20260319_1400.js",
    "v63/js/SongCollection.js",
    "v63/js/SongService.js",
    "v63/js/VersionCore.js",
    "v63/js/ffmpeg.min.js",
    "v63/js/lucide.js",
    "v63/js/tailwindcss.js",
    "v63/legal_notice.html",
    "v63/manifest.json",
    "v63/privacy_policy.html"
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
