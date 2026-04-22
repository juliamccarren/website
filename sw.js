const STATIC_CACHE = 'julia-site-v61';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v61/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v61/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v61/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v61/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v61/artwork/a_slow_blossoming_rose.webp",
    "v61/artwork/antitoxic.webp",
    "v61/artwork/autumns_whisper.webp",
    "v61/artwork/avalanche.webp",
    "v61/artwork/betrayal.webp",
    "v61/artwork/big_dreams_shine.webp",
    "v61/artwork/big_dreams_shine_live.webp",
    "v61/artwork/bite_of_the_night.webp",
    "v61/artwork/boring.webp",
    "v61/artwork/brooklyn.webp",
    "v61/artwork/buckn_the_bain.webp",
    "v61/artwork/cheerleader.webp",
    "v61/artwork/coffee_in_amsterdam.webp",
    "v61/artwork/cool_fire.webp",
    "v61/artwork/date_disaster.webp",
    "v61/artwork/deep_blue.webp",
    "v61/artwork/deepdive_1.webp",
    "v61/artwork/deepdive_2.webp",
    "v61/artwork/default.webp",
    "v61/artwork/digital_ghost.webp",
    "v61/artwork/disco_flashback.webp",
    "v61/artwork/disco_flashback_2.webp",
    "v61/artwork/disposable.webp",
    "v61/artwork/drunk_not_dumb.webp",
    "v61/artwork/dynamite.webp",
    "v61/artwork/electric_hearts.webp",
    "v61/artwork/embers_and_sparks.webp",
    "v61/artwork/fences_down.webp",
    "v61/artwork/first_steps_to_stardom.webp",
    "v61/artwork/fog_of_fear.webp",
    "v61/artwork/forever.webp",
    "v61/artwork/four_chords_later.webp",
    "v61/artwork/friday_night.webp",
    "v61/artwork/from_first_steps_to_stardom.webp",
    "v61/artwork/frost_and_friction.webp",
    "v61/artwork/frozen_heart.webp",
    "v61/artwork/garage_band.webp",
    "v61/artwork/ghost_in_the_garden.webp",
    "v61/artwork/god_save_the_king.webp",
    "v61/artwork/golden_days.webp",
    "v61/artwork/good_enough.webp",
    "v61/artwork/haunted_haven.webp",
    "v61/artwork/heart_of_fire_and_ice.webp",
    "v61/artwork/her_first_truck.webp",
    "v61/artwork/hes_still_here.webp",
    "v61/artwork/howling_wolves.webp",
    "v61/artwork/i_hate_you.webp",
    "v61/artwork/i_love_school.webp",
    "v61/artwork/i_scream.webp",
    "v61/artwork/insatiable.webp",
    "v61/artwork/insult_the_ones_you_love.webp",
    "v61/artwork/introverted_girl.webp",
    "v61/artwork/jet_set.webp",
    "v61/artwork/just_a_vibe.webp",
    "v61/artwork/just_wants_to_be_loved.webp",
    "v61/artwork/last_exit.webp",
    "v61/artwork/left_lane_legend.webp",
    "v61/artwork/little_butterflies.webp",
    "v61/artwork/maybe_they_knew.webp",
    "v61/artwork/mind_the_gap.webp",
    "v61/artwork/my_foundation.webp",
    "v61/artwork/my_sweet_little_star.webp",
    "v61/artwork/need_for_speed.webp",
    "v61/artwork/one_in_a_quarter_billion.webp",
    "v61/artwork/paradox_love.webp",
    "v61/artwork/password_expired.webp",
    "v61/artwork/password_expired_live.webp",
    "v61/artwork/peaks_of_gold.webp",
    "v61/artwork/private_lake.webp",
    "v61/artwork/radio_trash.webp",
    "v61/artwork/ride_the_groove.webp",
    "v61/artwork/rocker_songwriter.webp",
    "v61/artwork/sailing_on_open_water.webp",
    "v61/artwork/sanctified_sinner.webp",
    "v61/artwork/sanctuary_riot.webp",
    "v61/artwork/schools_out.webp",
    "v61/artwork/set_the_spirit_free.webp",
    "v61/artwork/siblings.webp",
    "v61/artwork/skeleton_dance.webp",
    "v61/artwork/slippery_road.webp",
    "v61/artwork/social_lubricant.webp",
    "v61/artwork/soulmate.webp",
    "v61/artwork/spooky.webp",
    "v61/artwork/storm_of_the_abyss.webp",
    "v61/artwork/summers_farewell.webp",
    "v61/artwork/tabby_gonzalez.webp",
    "v61/artwork/the_city_i_long_for.webp",
    "v61/artwork/the_dive.webp",
    "v61/artwork/the_hard_way.webp",
    "v61/artwork/the_hook.webp",
    "v61/artwork/the_quiet_kind.webp",
    "v61/artwork/the_rhythm_of_the_fox.webp",
    "v61/artwork/the_rhythm_of_you.webp",
    "v61/artwork/the_sharpened_bow.webp",
    "v61/artwork/the_sirens_anchor.webp",
    "v61/artwork/the_soft_return.webp",
    "v61/artwork/the_steel_winged_swan.webp",
    "v61/artwork/this_is_fine.webp",
    "v61/artwork/tide_on_stone.webp",
    "v61/artwork/toccata.webp",
    "v61/artwork/trick_or_treat.webp",
    "v61/artwork/uncaged.webp",
    "v61/artwork/upon_a_winding_trail.webp",
    "v61/artwork/venezia.webp",
    "v61/artwork/verona.webp",
    "v61/artwork/whiteout.webp",
    "v61/artwork/winterstorm.webp",
    "v61/datenschutz.html",
    "v61/images/Guitar-in-Dolomites.webp",
    "v61/images/Hero.webp",
    "v61/images/Hero_square.webp",
    "v61/images/Julia-skiing-Dolomites.webp",
    "v61/images/Stage_1.webp",
    "v61/images/Stage_2.webp",
    "v61/images/Stage_3.webp",
    "v61/images/Stage_4.webp",
    "v61/images/Stage_5.webp",
    "v61/images/Stage_6.webp",
    "v61/images/Stage_7.webp",
    "v61/images/Stage_8.webp",
    "v61/images/icons/app_icon_192.png",
    "v61/images/icons/app_icon_512.png",
    "v61/images/original/Guitar-in-Dolomites.png",
    "v61/images/original/Hero.jpg",
    "v61/images/original/Hero_square.jpg",
    "v61/images/original/Julia-skiing-Dolomites.png",
    "v61/images/original/Stage_1.png",
    "v61/images/original/Stage_2.png",
    "v61/images/original/Stage_3.png",
    "v61/images/original/Stage_4.png",
    "v61/images/original/Stage_5.png",
    "v61/images/original/Stage_6.png",
    "v61/images/original/Stage_7.png",
    "v61/images/original/Stage_8.png",
    "v61/images/password_expired_live.webp",
    "v61/images/podcasts.webp",
    "v61/impressum.html",
    "v61/index.html",
    "v61/js/DiaryService.js",
    "v61/js/Director.js",
    "v61/js/Main 20260319_1300.js",
    "v61/js/Main.js",
    "v61/js/PickerDrum.js",
    "v61/js/Player 20260319_1300.js",
    "v61/js/Player.js",
    "v61/js/SongCollection 20260319_1400.js",
    "v61/js/SongCollection.js",
    "v61/js/SongService.js",
    "v61/js/VersionCore.js",
    "v61/js/ffmpeg.min.js",
    "v61/js/lucide.js",
    "v61/js/tailwindcss.js",
    "v61/legal_notice.html",
    "v61/manifest.json",
    "v61/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v61...');
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
