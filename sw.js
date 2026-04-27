const STATIC_CACHE = 'julia-site-v64';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v64/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v64/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v64/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v64/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v64/artwork/a_slow_blossoming_rose.webp",
    "v64/artwork/antitoxic.webp",
    "v64/artwork/autumns_whisper.webp",
    "v64/artwork/avalanche.webp",
    "v64/artwork/betrayal.webp",
    "v64/artwork/big_dreams_shine.webp",
    "v64/artwork/big_dreams_shine_live.webp",
    "v64/artwork/bite_of_the_night.webp",
    "v64/artwork/boring.webp",
    "v64/artwork/brooklyn.webp",
    "v64/artwork/buckn_the_bain.webp",
    "v64/artwork/cheerleader.webp",
    "v64/artwork/coffee_in_amsterdam.webp",
    "v64/artwork/cool_fire.webp",
    "v64/artwork/date_disaster.webp",
    "v64/artwork/deep_blue.webp",
    "v64/artwork/deepdive_1.webp",
    "v64/artwork/deepdive_2.webp",
    "v64/artwork/default.webp",
    "v64/artwork/digital_ghost.webp",
    "v64/artwork/disco_flashback.webp",
    "v64/artwork/disco_flashback_2.webp",
    "v64/artwork/disposable.webp",
    "v64/artwork/distortion.webp",
    "v64/artwork/drunk_not_dumb.webp",
    "v64/artwork/dynamite.webp",
    "v64/artwork/electric_hearts.webp",
    "v64/artwork/embers_and_sparks.webp",
    "v64/artwork/fences_down.webp",
    "v64/artwork/first_steps_to_stardom.webp",
    "v64/artwork/fog_of_fear.webp",
    "v64/artwork/forever.webp",
    "v64/artwork/four_chords_later.webp",
    "v64/artwork/friday_night.webp",
    "v64/artwork/from_first_steps_to_stardom.webp",
    "v64/artwork/frost_and_friction.webp",
    "v64/artwork/frozen_heart.webp",
    "v64/artwork/garage_band.webp",
    "v64/artwork/ghost_in_the_garden.webp",
    "v64/artwork/god_save_the_king.webp",
    "v64/artwork/golden_days.webp",
    "v64/artwork/good_enough.webp",
    "v64/artwork/happy_birthday_in_heaven.webp",
    "v64/artwork/haunted_haven.webp",
    "v64/artwork/heart_of_fire_and_ice.webp",
    "v64/artwork/her_first_truck.webp",
    "v64/artwork/hes_still_here.webp",
    "v64/artwork/home_now.webp",
    "v64/artwork/howling_wolves.webp",
    "v64/artwork/i_hate_you.webp",
    "v64/artwork/i_love_school.webp",
    "v64/artwork/i_scream.webp",
    "v64/artwork/insatiable.webp",
    "v64/artwork/insult_the_ones_you_love.webp",
    "v64/artwork/introverted_girl.webp",
    "v64/artwork/jet_set.webp",
    "v64/artwork/just_a_vibe.webp",
    "v64/artwork/just_wants_to_be_loved.webp",
    "v64/artwork/last_exit.webp",
    "v64/artwork/left_lane_legend.webp",
    "v64/artwork/little_butterflies.webp",
    "v64/artwork/maybe_they_knew.webp",
    "v64/artwork/mind_the_gap.webp",
    "v64/artwork/my_foundation.webp",
    "v64/artwork/my_sweet_little_star.webp",
    "v64/artwork/need_for_speed.webp",
    "v64/artwork/one_in_a_quarter_billion.webp",
    "v64/artwork/paradox_love.webp",
    "v64/artwork/password_expired.webp",
    "v64/artwork/password_expired_live.webp",
    "v64/artwork/peaks_of_gold.webp",
    "v64/artwork/private_lake.webp",
    "v64/artwork/radio_trash.webp",
    "v64/artwork/ride_the_groove.webp",
    "v64/artwork/rocker_songwriter.webp",
    "v64/artwork/sailing_on_open_water.webp",
    "v64/artwork/sanctified_sinner.webp",
    "v64/artwork/sanctuary_riot.webp",
    "v64/artwork/schools_out.webp",
    "v64/artwork/set_the_spirit_free.webp",
    "v64/artwork/siblings.webp",
    "v64/artwork/skeleton_dance.webp",
    "v64/artwork/slippery_road.webp",
    "v64/artwork/social_lubricant.webp",
    "v64/artwork/soulmate.webp",
    "v64/artwork/spooky.webp",
    "v64/artwork/storm_of_the_abyss.webp",
    "v64/artwork/summers_farewell.webp",
    "v64/artwork/tabby_gonzalez.webp",
    "v64/artwork/the_city_i_long_for.webp",
    "v64/artwork/the_dive.webp",
    "v64/artwork/the_hard_way.webp",
    "v64/artwork/the_hook.webp",
    "v64/artwork/the_quiet_kind.webp",
    "v64/artwork/the_rhythm_of_the_fox.webp",
    "v64/artwork/the_rhythm_of_you.webp",
    "v64/artwork/the_sharpened_bow.webp",
    "v64/artwork/the_sirens_anchor.webp",
    "v64/artwork/the_soft_return.webp",
    "v64/artwork/the_steel_winged_swan.webp",
    "v64/artwork/this_is_fine.webp",
    "v64/artwork/tide_on_stone.webp",
    "v64/artwork/toccata.webp",
    "v64/artwork/trick_or_treat.webp",
    "v64/artwork/uncaged.webp",
    "v64/artwork/upon_a_winding_trail.webp",
    "v64/artwork/venezia.webp",
    "v64/artwork/verona.webp",
    "v64/artwork/weekend.webp",
    "v64/artwork/whiteout.webp",
    "v64/artwork/winterstorm.webp",
    "v64/datenschutz.html",
    "v64/images/Guitar-in-Dolomites.webp",
    "v64/images/Hero.webp",
    "v64/images/Hero_square.webp",
    "v64/images/Julia-skiing-Dolomites.webp",
    "v64/images/Stage_1.webp",
    "v64/images/Stage_2.webp",
    "v64/images/Stage_3.webp",
    "v64/images/Stage_4.webp",
    "v64/images/Stage_5.webp",
    "v64/images/Stage_6.webp",
    "v64/images/Stage_7.webp",
    "v64/images/Stage_8.webp",
    "v64/images/icons/app_icon_192.png",
    "v64/images/icons/app_icon_512.png",
    "v64/images/original/Guitar-in-Dolomites.png",
    "v64/images/original/Hero.jpg",
    "v64/images/original/Hero_square.jpg",
    "v64/images/original/Julia-skiing-Dolomites.png",
    "v64/images/original/Stage_1.png",
    "v64/images/original/Stage_2.png",
    "v64/images/original/Stage_3.png",
    "v64/images/original/Stage_4.png",
    "v64/images/original/Stage_5.png",
    "v64/images/original/Stage_6.png",
    "v64/images/original/Stage_7.png",
    "v64/images/original/Stage_8.png",
    "v64/images/password_expired_live.webp",
    "v64/images/podcasts.webp",
    "v64/impressum.html",
    "v64/index.html",
    "v64/js/DiaryService.js",
    "v64/js/Director.js",
    "v64/js/Main 20260319_1300.js",
    "v64/js/Main.js",
    "v64/js/PickerDrum.js",
    "v64/js/Player 20260319_1300.js",
    "v64/js/Player.js",
    "v64/js/SongCollection 20260319_1400.js",
    "v64/js/SongCollection.js",
    "v64/js/SongService.js",
    "v64/js/VersionCore.js",
    "v64/js/ffmpeg.min.js",
    "v64/js/lucide.js",
    "v64/js/tailwindcss.js",
    "v64/legal_notice.html",
    "v64/manifest.json",
    "v64/privacy_policy.html"
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
