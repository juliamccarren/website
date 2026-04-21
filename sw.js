const STATIC_CACHE = 'julia-site-v60';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v60/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v60/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v60/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v60/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v60/artwork/a_slow_blossoming_rose.webp",
    "v60/artwork/antitoxic.webp",
    "v60/artwork/autumns_whisper.webp",
    "v60/artwork/avalanche.webp",
    "v60/artwork/betrayal.webp",
    "v60/artwork/big_dreams_shine.webp",
    "v60/artwork/big_dreams_shine_live.webp",
    "v60/artwork/bite_of_the_night.webp",
    "v60/artwork/boring.webp",
    "v60/artwork/brooklyn.webp",
    "v60/artwork/buckn_the_bain.webp",
    "v60/artwork/cheerleader.webp",
    "v60/artwork/coffee_in_amsterdam.webp",
    "v60/artwork/cool_fire.webp",
    "v60/artwork/date_disaster.webp",
    "v60/artwork/deep_blue.webp",
    "v60/artwork/deepdive_1.webp",
    "v60/artwork/deepdive_2.webp",
    "v60/artwork/default.webp",
    "v60/artwork/digital_ghost.webp",
    "v60/artwork/disco_flashback.webp",
    "v60/artwork/disco_flashback_2.webp",
    "v60/artwork/disposable.webp",
    "v60/artwork/drunk_not_dumb.webp",
    "v60/artwork/dynamite.webp",
    "v60/artwork/electric_hearts.webp",
    "v60/artwork/embers_and_sparks.webp",
    "v60/artwork/fences_down.webp",
    "v60/artwork/first_steps_to_stardom.webp",
    "v60/artwork/fog_of_fear.webp",
    "v60/artwork/forever.webp",
    "v60/artwork/four_chords_later.webp",
    "v60/artwork/friday_night.webp",
    "v60/artwork/from_first_steps_to_stardom.webp",
    "v60/artwork/frost_and_friction.webp",
    "v60/artwork/frozen_heart.webp",
    "v60/artwork/garage_band.webp",
    "v60/artwork/ghost_in_the_garden.webp",
    "v60/artwork/god_save_the_king.webp",
    "v60/artwork/golden_days.webp",
    "v60/artwork/good_enough.webp",
    "v60/artwork/haunted_haven.webp",
    "v60/artwork/heart_of_fire_and_ice.webp",
    "v60/artwork/her_first_truck.webp",
    "v60/artwork/hes_still_here.webp",
    "v60/artwork/howling_wolves.webp",
    "v60/artwork/i_hate_you.webp",
    "v60/artwork/i_love_school.webp",
    "v60/artwork/i_scream.webp",
    "v60/artwork/insult_the_ones_you_love.webp",
    "v60/artwork/introverted_girl.webp",
    "v60/artwork/jet_set.webp",
    "v60/artwork/just_a_vibe.webp",
    "v60/artwork/just_wants_to_be_loved.webp",
    "v60/artwork/last_exit.webp",
    "v60/artwork/left_lane_legend.webp",
    "v60/artwork/little_butterflies.webp",
    "v60/artwork/maybe_they_knew.webp",
    "v60/artwork/mind_the_gap.webp",
    "v60/artwork/my_foundation.webp",
    "v60/artwork/my_sweet_little_star.webp",
    "v60/artwork/need_for_speed.webp",
    "v60/artwork/one_in_a_quarter_billion.webp",
    "v60/artwork/paradox_love.webp",
    "v60/artwork/password_expired.webp",
    "v60/artwork/password_expired_live.webp",
    "v60/artwork/peaks_of_gold.webp",
    "v60/artwork/private_lake.webp",
    "v60/artwork/radio_trash.webp",
    "v60/artwork/ride_the_groove.webp",
    "v60/artwork/rocker_songwriter.webp",
    "v60/artwork/sailing_on_open_water.webp",
    "v60/artwork/sanctified_sinner.webp",
    "v60/artwork/sanctuary_riot.webp",
    "v60/artwork/schools_out.webp",
    "v60/artwork/set_the_spirit_free.webp",
    "v60/artwork/siblings.webp",
    "v60/artwork/skeleton_dance.webp",
    "v60/artwork/slippery_road.webp",
    "v60/artwork/social_lubricant.webp",
    "v60/artwork/spooky.webp",
    "v60/artwork/storm_of_the_abyss.webp",
    "v60/artwork/summers_farewell.webp",
    "v60/artwork/tabby_gonzalez.webp",
    "v60/artwork/the_city_i_long_for.webp",
    "v60/artwork/the_dive.webp",
    "v60/artwork/the_hard_way.webp",
    "v60/artwork/the_hook.webp",
    "v60/artwork/the_quiet_kind.webp",
    "v60/artwork/the_rhythm_of_the_fox.webp",
    "v60/artwork/the_rhythm_of_you.webp",
    "v60/artwork/the_sharpened_bow.webp",
    "v60/artwork/the_sirens_anchor.webp",
    "v60/artwork/the_soft_return.webp",
    "v60/artwork/the_steel_winged_swan.webp",
    "v60/artwork/this_is_fine.webp",
    "v60/artwork/toccata.webp",
    "v60/artwork/trick_or_treat.webp",
    "v60/artwork/uncaged.webp",
    "v60/artwork/upon_a_winding_trail.webp",
    "v60/artwork/venezia.webp",
    "v60/artwork/verona.webp",
    "v60/artwork/whiteout.webp",
    "v60/artwork/winterstorm.webp",
    "v60/datenschutz.html",
    "v60/images/Guitar-in-Dolomites.webp",
    "v60/images/Hero.webp",
    "v60/images/Hero_square.webp",
    "v60/images/Julia-skiing-Dolomites.webp",
    "v60/images/Stage_1.webp",
    "v60/images/Stage_2.webp",
    "v60/images/Stage_3.webp",
    "v60/images/Stage_4.webp",
    "v60/images/Stage_5.webp",
    "v60/images/Stage_6.webp",
    "v60/images/Stage_7.webp",
    "v60/images/Stage_8.webp",
    "v60/images/icons/app_icon_192.png",
    "v60/images/icons/app_icon_512.png",
    "v60/images/original/Guitar-in-Dolomites.png",
    "v60/images/original/Hero.jpg",
    "v60/images/original/Hero_square.jpg",
    "v60/images/original/Julia-skiing-Dolomites.png",
    "v60/images/original/Stage_1.png",
    "v60/images/original/Stage_2.png",
    "v60/images/original/Stage_3.png",
    "v60/images/original/Stage_4.png",
    "v60/images/original/Stage_5.png",
    "v60/images/original/Stage_6.png",
    "v60/images/original/Stage_7.png",
    "v60/images/original/Stage_8.png",
    "v60/images/password_expired_live.webp",
    "v60/images/podcasts.webp",
    "v60/impressum.html",
    "v60/index.html",
    "v60/js/DiaryService.js",
    "v60/js/Director.js",
    "v60/js/Main 20260319_1300.js",
    "v60/js/Main.js",
    "v60/js/PickerDrum.js",
    "v60/js/Player 20260319_1300.js",
    "v60/js/Player.js",
    "v60/js/SongCollection 20260319_1400.js",
    "v60/js/SongCollection.js",
    "v60/js/SongService.js",
    "v60/js/VersionCore.js",
    "v60/js/ffmpeg.min.js",
    "v60/js/lucide.js",
    "v60/js/tailwindcss.js",
    "v60/legal_notice.html",
    "v60/manifest.json",
    "v60/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v60...');
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
