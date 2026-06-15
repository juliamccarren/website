const STATIC_CACHE = 'julia-site-v89';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v89/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v89/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v89/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v89/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v89/artwork/a_slow_blossoming_rose.webp",
    "v89/artwork/alejandro.webp",
    "v89/artwork/antitoxic.webp",
    "v89/artwork/autumns_whisper.webp",
    "v89/artwork/avalanche.webp",
    "v89/artwork/betrayal.webp",
    "v89/artwork/big_dreams_shine.webp",
    "v89/artwork/big_dreams_shine_live.webp",
    "v89/artwork/bite_of_the_night.webp",
    "v89/artwork/boring.webp",
    "v89/artwork/brooklyn.webp",
    "v89/artwork/buckn_the_bain.webp",
    "v89/artwork/cheerleader.webp",
    "v89/artwork/coffee_in_amsterdam.webp",
    "v89/artwork/cool_fire.webp",
    "v89/artwork/date_disaster.webp",
    "v89/artwork/deep_blue.webp",
    "v89/artwork/deepdive_1.webp",
    "v89/artwork/deepdive_2.webp",
    "v89/artwork/default.webp",
    "v89/artwork/digital_ghost.webp",
    "v89/artwork/disco_flashback.webp",
    "v89/artwork/disco_flashback_2.webp",
    "v89/artwork/disposable.webp",
    "v89/artwork/distortion.webp",
    "v89/artwork/drunk_not_dumb.webp",
    "v89/artwork/dynamite.webp",
    "v89/artwork/electric_hearts.webp",
    "v89/artwork/embers_and_sparks.webp",
    "v89/artwork/fences_down.webp",
    "v89/artwork/first_steps_to_stardom.webp",
    "v89/artwork/fog_of_fear.webp",
    "v89/artwork/forever.webp",
    "v89/artwork/four_chords_later.webp",
    "v89/artwork/friday_night.webp",
    "v89/artwork/from_first_steps_to_stardom.webp",
    "v89/artwork/frost_and_friction.webp",
    "v89/artwork/frozen_heart.webp",
    "v89/artwork/garage_band.webp",
    "v89/artwork/ghost_in_the_garden.webp",
    "v89/artwork/god_save_the_king.webp",
    "v89/artwork/golden_days.webp",
    "v89/artwork/good_enough.webp",
    "v89/artwork/happy_birthday_in_heaven.webp",
    "v89/artwork/haunted_haven.webp",
    "v89/artwork/heart_of_fire_and_ice.webp",
    "v89/artwork/her_first_truck.webp",
    "v89/artwork/hes_still_here.webp",
    "v89/artwork/home_now.webp",
    "v89/artwork/howling_wolves.webp",
    "v89/artwork/hypocrites.webp",
    "v89/artwork/i_hate_you.webp",
    "v89/artwork/i_love_school.webp",
    "v89/artwork/i_scream.webp",
    "v89/artwork/insatiable.webp",
    "v89/artwork/insult_the_ones_you_love.webp",
    "v89/artwork/introverted_girl.webp",
    "v89/artwork/jet_set.webp",
    "v89/artwork/julia_and_friends.webp",
    "v89/artwork/just_a_vibe.webp",
    "v89/artwork/just_wants_to_be_loved.webp",
    "v89/artwork/last_exit.webp",
    "v89/artwork/left_lane_legend.webp",
    "v89/artwork/little_butterflies.webp",
    "v89/artwork/luck_for_granted.webp",
    "v89/artwork/maybe_they_knew.webp",
    "v89/artwork/mind_the_gap.webp",
    "v89/artwork/my_foundation.webp",
    "v89/artwork/my_sweet_little_star.webp",
    "v89/artwork/need_for_speed.webp",
    "v89/artwork/nice_girl.webp",
    "v89/artwork/one_in_a_quarter_billion.webp",
    "v89/artwork/paradox_love.webp",
    "v89/artwork/password_expired.webp",
    "v89/artwork/password_expired_live.webp",
    "v89/artwork/peaks_of_gold.webp",
    "v89/artwork/private_lake.webp",
    "v89/artwork/radio_trash.webp",
    "v89/artwork/ride_the_groove.webp",
    "v89/artwork/rocker_songwriter.webp",
    "v89/artwork/sailing_on_open_water.webp",
    "v89/artwork/sanctified_sinner.webp",
    "v89/artwork/sanctuary_riot.webp",
    "v89/artwork/schools_out.webp",
    "v89/artwork/set_the_spirit_free.webp",
    "v89/artwork/siblings.webp",
    "v89/artwork/skeleton_dance.webp",
    "v89/artwork/slippery_road.webp",
    "v89/artwork/social_lubricant.webp",
    "v89/artwork/soulmate.webp",
    "v89/artwork/southern_belle.webp",
    "v89/artwork/spooky.webp",
    "v89/artwork/spring.webp",
    "v89/artwork/storm_of_the_abyss.webp",
    "v89/artwork/summers_farewell.webp",
    "v89/artwork/tabby_gonzalez.webp",
    "v89/artwork/the_city_i_long_for.webp",
    "v89/artwork/the_dive.webp",
    "v89/artwork/the_hard_way.webp",
    "v89/artwork/the_hook.webp",
    "v89/artwork/the_quiet_kind.webp",
    "v89/artwork/the_rhythm_of_the_fox.webp",
    "v89/artwork/the_rhythm_of_you.webp",
    "v89/artwork/the_sharpened_bow.webp",
    "v89/artwork/the_sirens_anchor.webp",
    "v89/artwork/the_soft_return.webp",
    "v89/artwork/the_steel_winged_swan.webp",
    "v89/artwork/this_is_fine.webp",
    "v89/artwork/tide_on_stone.webp",
    "v89/artwork/toccata.webp",
    "v89/artwork/trick_or_treat.webp",
    "v89/artwork/uncaged.webp",
    "v89/artwork/upon_a_winding_trail.webp",
    "v89/artwork/venezia.webp",
    "v89/artwork/verona.webp",
    "v89/artwork/weekend.webp",
    "v89/artwork/whiteout.webp",
    "v89/artwork/winterstorm.webp",
    "v89/css/style.css",
    "v89/datenschutz.html",
    "v89/essays/essay1.html",
    "v89/essays/ssm.html",
    "v89/images/Guitar-in-Dolomites.webp",
    "v89/images/Hero.webp",
    "v89/images/Hero_square.webp",
    "v89/images/Julia-skiing-Dolomites.webp",
    "v89/images/Stage_1.webp",
    "v89/images/Stage_2.webp",
    "v89/images/Stage_3.webp",
    "v89/images/Stage_4.webp",
    "v89/images/Stage_5.webp",
    "v89/images/Stage_6.webp",
    "v89/images/Stage_7.webp",
    "v89/images/Stage_8.webp",
    "v89/images/icons/app_icon_192.png",
    "v89/images/icons/app_icon_512.png",
    "v89/images/julia_ssm_equations.webp",
    "v89/images/password_expired_live.webp",
    "v89/images/podcasts.webp",
    "v89/images/southern_belle.webp",
    "v89/images/ssm_diagram.webp",
    "v89/impressum.html",
    "v89/index.html",
    "v89/js/DiaryService.js",
    "v89/js/Director.js",
    "v89/js/Main 20260319_1300.js",
    "v89/js/Main.js",
    "v89/js/PickerDrum.js",
    "v89/js/Placeholder.js",
    "v89/js/Player 20260319_1300.js",
    "v89/js/Player.js",
    "v89/js/SongCollection 20260319_1400.js",
    "v89/js/SongCollection.js",
    "v89/js/SongService.js",
    "v89/js/VersionCore.js",
    "v89/js/ffmpeg.min.js",
    "v89/js/lucide.js",
    "v89/js/tailwindcss.js",
    "v89/legal_notice.html",
    "v89/manifest.json",
    "v89/placeholder/footer.html",
    "v89/placeholder/header.html",
    "v89/privacy_policy.html"
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

// Central fetch handler with special cases for VersionCore.js and MP3 files
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    const fileName = url.pathname.split('/').pop(); // Variable für Logging

    // 1. Special treatment: VersionCore.js (Network-First)
    if (url.pathname.endsWith('VersionCore.js')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    console.log(`%c[SW] NETWORK-FIRST: Loading ${fileName} from Cloud`, 'color: #10b981');
                    const responseClone = response.clone();
                    caches.open(STATIC_CORE_CACHE).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    console.warn(`%c[SW] OFFLINE-FALLBACK: Serving ${fileName} from Cache`, 'color: #f59e0b');
                    return caches.match(event.request);
                })
        );
        return;
    }

    // 2. Special treatment: MP3-Audio (Cache-First + Bypass dead zone)
    if (url.pathname.endsWith('.mp3')) {
        event.respondWith(
            caches.match(event.request, { ignoreSearch: true })
                .then(response => {
                    if (response) {
                        console.log(`%c[SW] CACHE-HIT (Audio): Serving ${fileName} from local storage`, 'color: #d946ef');
                        return response;
                    }
                    console.log(`%c[SW] CACHE-MISS (Audio): Fetching ${fileName} from Network`, 'color: #3b82f6');
                    return fetch(event.request);
                })
        );
        return;
    }

    // 3. Standard treatment: All other assets (Cache-First)
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                // Only important for HTML/JSON files to log cache hits, others can be silent
                if(url.pathname.endsWith('.html') || url.pathname.endsWith('.json')) {
                    console.log(`%c[SW] CACHE-HIT: ${fileName}`, 'color: #94a3b8');
                }
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
