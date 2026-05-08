const STATIC_CACHE = 'julia-site-v71';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v71/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v71/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v71/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v71/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v71/artwork/a_slow_blossoming_rose.webp",
    "v71/artwork/alejandro.webp",
    "v71/artwork/antitoxic.webp",
    "v71/artwork/autumns_whisper.webp",
    "v71/artwork/avalanche.webp",
    "v71/artwork/betrayal.webp",
    "v71/artwork/big_dreams_shine.webp",
    "v71/artwork/big_dreams_shine_live.webp",
    "v71/artwork/bite_of_the_night.webp",
    "v71/artwork/boring.webp",
    "v71/artwork/brooklyn.webp",
    "v71/artwork/buckn_the_bain.webp",
    "v71/artwork/cheerleader.webp",
    "v71/artwork/coffee_in_amsterdam.webp",
    "v71/artwork/cool_fire.webp",
    "v71/artwork/date_disaster.webp",
    "v71/artwork/deep_blue.webp",
    "v71/artwork/deepdive_1.webp",
    "v71/artwork/deepdive_2.webp",
    "v71/artwork/default.webp",
    "v71/artwork/digital_ghost.webp",
    "v71/artwork/disco_flashback.webp",
    "v71/artwork/disco_flashback_2.webp",
    "v71/artwork/disposable.webp",
    "v71/artwork/distortion.webp",
    "v71/artwork/drunk_not_dumb.webp",
    "v71/artwork/dynamite.webp",
    "v71/artwork/electric_hearts.webp",
    "v71/artwork/embers_and_sparks.webp",
    "v71/artwork/fences_down.webp",
    "v71/artwork/first_steps_to_stardom.webp",
    "v71/artwork/fog_of_fear.webp",
    "v71/artwork/forever.webp",
    "v71/artwork/four_chords_later.webp",
    "v71/artwork/friday_night.webp",
    "v71/artwork/from_first_steps_to_stardom.webp",
    "v71/artwork/frost_and_friction.webp",
    "v71/artwork/frozen_heart.webp",
    "v71/artwork/garage_band.webp",
    "v71/artwork/ghost_in_the_garden.webp",
    "v71/artwork/god_save_the_king.webp",
    "v71/artwork/golden_days.webp",
    "v71/artwork/good_enough.webp",
    "v71/artwork/happy_birthday_in_heaven.webp",
    "v71/artwork/haunted_haven.webp",
    "v71/artwork/heart_of_fire_and_ice.webp",
    "v71/artwork/her_first_truck.webp",
    "v71/artwork/hes_still_here.webp",
    "v71/artwork/home_now.webp",
    "v71/artwork/howling_wolves.webp",
    "v71/artwork/hypocrites.webp",
    "v71/artwork/i_hate_you.webp",
    "v71/artwork/i_love_school.webp",
    "v71/artwork/i_scream.webp",
    "v71/artwork/insatiable.webp",
    "v71/artwork/insult_the_ones_you_love.webp",
    "v71/artwork/introverted_girl.webp",
    "v71/artwork/jet_set.webp",
    "v71/artwork/just_a_vibe.webp",
    "v71/artwork/just_wants_to_be_loved.webp",
    "v71/artwork/last_exit.webp",
    "v71/artwork/left_lane_legend.webp",
    "v71/artwork/little_butterflies.webp",
    "v71/artwork/maybe_they_knew.webp",
    "v71/artwork/mind_the_gap.webp",
    "v71/artwork/my_foundation.webp",
    "v71/artwork/my_sweet_little_star.webp",
    "v71/artwork/need_for_speed.webp",
    "v71/artwork/one_in_a_quarter_billion.webp",
    "v71/artwork/paradox_love.webp",
    "v71/artwork/password_expired.webp",
    "v71/artwork/password_expired_live.webp",
    "v71/artwork/peaks_of_gold.webp",
    "v71/artwork/private_lake.webp",
    "v71/artwork/radio_trash.webp",
    "v71/artwork/ride_the_groove.webp",
    "v71/artwork/rocker_songwriter.webp",
    "v71/artwork/sailing_on_open_water.webp",
    "v71/artwork/sanctified_sinner.webp",
    "v71/artwork/sanctuary_riot.webp",
    "v71/artwork/schools_out.webp",
    "v71/artwork/set_the_spirit_free.webp",
    "v71/artwork/siblings.webp",
    "v71/artwork/skeleton_dance.webp",
    "v71/artwork/slippery_road.webp",
    "v71/artwork/social_lubricant.webp",
    "v71/artwork/soulmate.webp",
    "v71/artwork/spooky.webp",
    "v71/artwork/spring.webp",
    "v71/artwork/storm_of_the_abyss.webp",
    "v71/artwork/summers_farewell.webp",
    "v71/artwork/tabby_gonzalez.webp",
    "v71/artwork/the_city_i_long_for.webp",
    "v71/artwork/the_dive.webp",
    "v71/artwork/the_hard_way.webp",
    "v71/artwork/the_hook.webp",
    "v71/artwork/the_quiet_kind.webp",
    "v71/artwork/the_rhythm_of_the_fox.webp",
    "v71/artwork/the_rhythm_of_you.webp",
    "v71/artwork/the_sharpened_bow.webp",
    "v71/artwork/the_sirens_anchor.webp",
    "v71/artwork/the_soft_return.webp",
    "v71/artwork/the_steel_winged_swan.webp",
    "v71/artwork/this_is_fine.webp",
    "v71/artwork/tide_on_stone.webp",
    "v71/artwork/toccata.webp",
    "v71/artwork/trick_or_treat.webp",
    "v71/artwork/uncaged.webp",
    "v71/artwork/upon_a_winding_trail.webp",
    "v71/artwork/venezia.webp",
    "v71/artwork/verona.webp",
    "v71/artwork/weekend.webp",
    "v71/artwork/whiteout.webp",
    "v71/artwork/winterstorm.webp",
    "v71/datenschutz.html",
    "v71/images/Guitar-in-Dolomites.webp",
    "v71/images/Hero.webp",
    "v71/images/Hero_square.webp",
    "v71/images/Julia-skiing-Dolomites.webp",
    "v71/images/Stage_1.webp",
    "v71/images/Stage_2.webp",
    "v71/images/Stage_3.webp",
    "v71/images/Stage_4.webp",
    "v71/images/Stage_5.webp",
    "v71/images/Stage_6.webp",
    "v71/images/Stage_7.webp",
    "v71/images/Stage_8.webp",
    "v71/images/icons/app_icon_192.png",
    "v71/images/icons/app_icon_512.png",
    "v71/images/original/Guitar-in-Dolomites.png",
    "v71/images/original/Hero.jpg",
    "v71/images/original/Hero_square.jpg",
    "v71/images/original/Julia-skiing-Dolomites.png",
    "v71/images/original/Stage_1.png",
    "v71/images/original/Stage_2.png",
    "v71/images/original/Stage_3.png",
    "v71/images/original/Stage_4.png",
    "v71/images/original/Stage_5.png",
    "v71/images/original/Stage_6.png",
    "v71/images/original/Stage_7.png",
    "v71/images/original/Stage_8.png",
    "v71/images/password_expired_live.webp",
    "v71/images/podcasts.webp",
    "v71/impressum.html",
    "v71/index.html",
    "v71/js/DiaryService.js",
    "v71/js/Director.js",
    "v71/js/Main 20260319_1300.js",
    "v71/js/Main.js",
    "v71/js/PickerDrum.js",
    "v71/js/Player 20260319_1300.js",
    "v71/js/Player.js",
    "v71/js/SongCollection 20260319_1400.js",
    "v71/js/SongCollection.js",
    "v71/js/SongService.js",
    "v71/js/VersionCore.js",
    "v71/js/ffmpeg.min.js",
    "v71/js/lucide.js",
    "v71/js/tailwindcss.js",
    "v71/legal_notice.html",
    "v71/manifest.json",
    "v71/privacy_policy.html"
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
