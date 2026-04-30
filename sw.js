const STATIC_CACHE = 'julia-site-v70';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v70/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v70/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v70/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v70/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v70/artwork/a_slow_blossoming_rose.webp",
    "v70/artwork/alejandro.webp",
    "v70/artwork/antitoxic.webp",
    "v70/artwork/autumns_whisper.webp",
    "v70/artwork/avalanche.webp",
    "v70/artwork/betrayal.webp",
    "v70/artwork/big_dreams_shine.webp",
    "v70/artwork/big_dreams_shine_live.webp",
    "v70/artwork/bite_of_the_night.webp",
    "v70/artwork/boring.webp",
    "v70/artwork/brooklyn.webp",
    "v70/artwork/buckn_the_bain.webp",
    "v70/artwork/cheerleader.webp",
    "v70/artwork/coffee_in_amsterdam.webp",
    "v70/artwork/cool_fire.webp",
    "v70/artwork/date_disaster.webp",
    "v70/artwork/deep_blue.webp",
    "v70/artwork/deepdive_1.webp",
    "v70/artwork/deepdive_2.webp",
    "v70/artwork/default.webp",
    "v70/artwork/digital_ghost.webp",
    "v70/artwork/disco_flashback.webp",
    "v70/artwork/disco_flashback_2.webp",
    "v70/artwork/disposable.webp",
    "v70/artwork/distortion.webp",
    "v70/artwork/drunk_not_dumb.webp",
    "v70/artwork/dynamite.webp",
    "v70/artwork/electric_hearts.webp",
    "v70/artwork/embers_and_sparks.webp",
    "v70/artwork/fences_down.webp",
    "v70/artwork/first_steps_to_stardom.webp",
    "v70/artwork/fog_of_fear.webp",
    "v70/artwork/forever.webp",
    "v70/artwork/four_chords_later.webp",
    "v70/artwork/friday_night.webp",
    "v70/artwork/from_first_steps_to_stardom.webp",
    "v70/artwork/frost_and_friction.webp",
    "v70/artwork/frozen_heart.webp",
    "v70/artwork/garage_band.webp",
    "v70/artwork/ghost_in_the_garden.webp",
    "v70/artwork/god_save_the_king.webp",
    "v70/artwork/golden_days.webp",
    "v70/artwork/good_enough.webp",
    "v70/artwork/happy_birthday_in_heaven.webp",
    "v70/artwork/haunted_haven.webp",
    "v70/artwork/heart_of_fire_and_ice.webp",
    "v70/artwork/her_first_truck.webp",
    "v70/artwork/hes_still_here.webp",
    "v70/artwork/home_now.webp",
    "v70/artwork/howling_wolves.webp",
    "v70/artwork/hypocrites.webp",
    "v70/artwork/i_hate_you.webp",
    "v70/artwork/i_love_school.webp",
    "v70/artwork/i_scream.webp",
    "v70/artwork/insatiable.webp",
    "v70/artwork/insult_the_ones_you_love.webp",
    "v70/artwork/introverted_girl.webp",
    "v70/artwork/jet_set.webp",
    "v70/artwork/just_a_vibe.webp",
    "v70/artwork/just_wants_to_be_loved.webp",
    "v70/artwork/last_exit.webp",
    "v70/artwork/left_lane_legend.webp",
    "v70/artwork/little_butterflies.webp",
    "v70/artwork/maybe_they_knew.webp",
    "v70/artwork/mind_the_gap.webp",
    "v70/artwork/my_foundation.webp",
    "v70/artwork/my_sweet_little_star.webp",
    "v70/artwork/need_for_speed.webp",
    "v70/artwork/one_in_a_quarter_billion.webp",
    "v70/artwork/paradox_love.webp",
    "v70/artwork/password_expired.webp",
    "v70/artwork/password_expired_live.webp",
    "v70/artwork/peaks_of_gold.webp",
    "v70/artwork/private_lake.webp",
    "v70/artwork/radio_trash.webp",
    "v70/artwork/ride_the_groove.webp",
    "v70/artwork/rocker_songwriter.webp",
    "v70/artwork/sailing_on_open_water.webp",
    "v70/artwork/sanctified_sinner.webp",
    "v70/artwork/sanctuary_riot.webp",
    "v70/artwork/schools_out.webp",
    "v70/artwork/set_the_spirit_free.webp",
    "v70/artwork/siblings.webp",
    "v70/artwork/skeleton_dance.webp",
    "v70/artwork/slippery_road.webp",
    "v70/artwork/social_lubricant.webp",
    "v70/artwork/soulmate.webp",
    "v70/artwork/spooky.webp",
    "v70/artwork/storm_of_the_abyss.webp",
    "v70/artwork/summers_farewell.webp",
    "v70/artwork/tabby_gonzalez.webp",
    "v70/artwork/the_city_i_long_for.webp",
    "v70/artwork/the_dive.webp",
    "v70/artwork/the_hard_way.webp",
    "v70/artwork/the_hook.webp",
    "v70/artwork/the_quiet_kind.webp",
    "v70/artwork/the_rhythm_of_the_fox.webp",
    "v70/artwork/the_rhythm_of_you.webp",
    "v70/artwork/the_sharpened_bow.webp",
    "v70/artwork/the_sirens_anchor.webp",
    "v70/artwork/the_soft_return.webp",
    "v70/artwork/the_steel_winged_swan.webp",
    "v70/artwork/this_is_fine.webp",
    "v70/artwork/tide_on_stone.webp",
    "v70/artwork/toccata.webp",
    "v70/artwork/trick_or_treat.webp",
    "v70/artwork/uncaged.webp",
    "v70/artwork/upon_a_winding_trail.webp",
    "v70/artwork/venezia.webp",
    "v70/artwork/verona.webp",
    "v70/artwork/weekend.webp",
    "v70/artwork/whiteout.webp",
    "v70/artwork/winterstorm.webp",
    "v70/datenschutz.html",
    "v70/images/Guitar-in-Dolomites.webp",
    "v70/images/Hero.webp",
    "v70/images/Hero_square.webp",
    "v70/images/Julia-skiing-Dolomites.webp",
    "v70/images/Stage_1.webp",
    "v70/images/Stage_2.webp",
    "v70/images/Stage_3.webp",
    "v70/images/Stage_4.webp",
    "v70/images/Stage_5.webp",
    "v70/images/Stage_6.webp",
    "v70/images/Stage_7.webp",
    "v70/images/Stage_8.webp",
    "v70/images/icons/app_icon_192.png",
    "v70/images/icons/app_icon_512.png",
    "v70/images/original/Guitar-in-Dolomites.png",
    "v70/images/original/Hero.jpg",
    "v70/images/original/Hero_square.jpg",
    "v70/images/original/Julia-skiing-Dolomites.png",
    "v70/images/original/Stage_1.png",
    "v70/images/original/Stage_2.png",
    "v70/images/original/Stage_3.png",
    "v70/images/original/Stage_4.png",
    "v70/images/original/Stage_5.png",
    "v70/images/original/Stage_6.png",
    "v70/images/original/Stage_7.png",
    "v70/images/original/Stage_8.png",
    "v70/images/password_expired_live.webp",
    "v70/images/podcasts.webp",
    "v70/impressum.html",
    "v70/index.html",
    "v70/js/DiaryService.js",
    "v70/js/Director.js",
    "v70/js/Main 20260319_1300.js",
    "v70/js/Main.js",
    "v70/js/PickerDrum.js",
    "v70/js/Player 20260319_1300.js",
    "v70/js/Player.js",
    "v70/js/SongCollection 20260319_1400.js",
    "v70/js/SongCollection.js",
    "v70/js/SongService.js",
    "v70/js/VersionCore.js",
    "v70/js/ffmpeg.min.js",
    "v70/js/lucide.js",
    "v70/js/tailwindcss.js",
    "v70/legal_notice.html",
    "v70/manifest.json",
    "v70/privacy_policy.html"
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
