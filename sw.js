const STATIC_CACHE = 'julia-site-v66';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v66/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v66/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v66/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v66/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v66/artwork/a_slow_blossoming_rose.webp",
    "v66/artwork/alejandro.webp",
    "v66/artwork/antitoxic.webp",
    "v66/artwork/autumns_whisper.webp",
    "v66/artwork/avalanche.webp",
    "v66/artwork/betrayal.webp",
    "v66/artwork/big_dreams_shine.webp",
    "v66/artwork/big_dreams_shine_live.webp",
    "v66/artwork/bite_of_the_night.webp",
    "v66/artwork/boring.webp",
    "v66/artwork/brooklyn.webp",
    "v66/artwork/buckn_the_bain.webp",
    "v66/artwork/cheerleader.webp",
    "v66/artwork/coffee_in_amsterdam.webp",
    "v66/artwork/cool_fire.webp",
    "v66/artwork/date_disaster.webp",
    "v66/artwork/deep_blue.webp",
    "v66/artwork/deepdive_1.webp",
    "v66/artwork/deepdive_2.webp",
    "v66/artwork/default.webp",
    "v66/artwork/digital_ghost.webp",
    "v66/artwork/disco_flashback.webp",
    "v66/artwork/disco_flashback_2.webp",
    "v66/artwork/disposable.webp",
    "v66/artwork/distortion.webp",
    "v66/artwork/drunk_not_dumb.webp",
    "v66/artwork/dynamite.webp",
    "v66/artwork/electric_hearts.webp",
    "v66/artwork/embers_and_sparks.webp",
    "v66/artwork/fences_down.webp",
    "v66/artwork/first_steps_to_stardom.webp",
    "v66/artwork/fog_of_fear.webp",
    "v66/artwork/forever.webp",
    "v66/artwork/four_chords_later.webp",
    "v66/artwork/friday_night.webp",
    "v66/artwork/from_first_steps_to_stardom.webp",
    "v66/artwork/frost_and_friction.webp",
    "v66/artwork/frozen_heart.webp",
    "v66/artwork/garage_band.webp",
    "v66/artwork/ghost_in_the_garden.webp",
    "v66/artwork/god_save_the_king.webp",
    "v66/artwork/golden_days.webp",
    "v66/artwork/good_enough.webp",
    "v66/artwork/happy_birthday_in_heaven.webp",
    "v66/artwork/haunted_haven.webp",
    "v66/artwork/heart_of_fire_and_ice.webp",
    "v66/artwork/her_first_truck.webp",
    "v66/artwork/hes_still_here.webp",
    "v66/artwork/home_now.webp",
    "v66/artwork/howling_wolves.webp",
    "v66/artwork/hypocrites.webp",
    "v66/artwork/i_hate_you.webp",
    "v66/artwork/i_love_school.webp",
    "v66/artwork/i_scream.webp",
    "v66/artwork/insatiable.webp",
    "v66/artwork/insult_the_ones_you_love.webp",
    "v66/artwork/introverted_girl.webp",
    "v66/artwork/jet_set.webp",
    "v66/artwork/just_a_vibe.webp",
    "v66/artwork/just_wants_to_be_loved.webp",
    "v66/artwork/last_exit.webp",
    "v66/artwork/left_lane_legend.webp",
    "v66/artwork/little_butterflies.webp",
    "v66/artwork/maybe_they_knew.webp",
    "v66/artwork/mind_the_gap.webp",
    "v66/artwork/my_foundation.webp",
    "v66/artwork/my_sweet_little_star.webp",
    "v66/artwork/need_for_speed.webp",
    "v66/artwork/one_in_a_quarter_billion.webp",
    "v66/artwork/paradox_love.webp",
    "v66/artwork/password_expired.webp",
    "v66/artwork/password_expired_live.webp",
    "v66/artwork/peaks_of_gold.webp",
    "v66/artwork/private_lake.webp",
    "v66/artwork/radio_trash.webp",
    "v66/artwork/ride_the_groove.webp",
    "v66/artwork/rocker_songwriter.webp",
    "v66/artwork/sailing_on_open_water.webp",
    "v66/artwork/sanctified_sinner.webp",
    "v66/artwork/sanctuary_riot.webp",
    "v66/artwork/schools_out.webp",
    "v66/artwork/set_the_spirit_free.webp",
    "v66/artwork/siblings.webp",
    "v66/artwork/skeleton_dance.webp",
    "v66/artwork/slippery_road.webp",
    "v66/artwork/social_lubricant.webp",
    "v66/artwork/soulmate.webp",
    "v66/artwork/spooky.webp",
    "v66/artwork/storm_of_the_abyss.webp",
    "v66/artwork/summers_farewell.webp",
    "v66/artwork/tabby_gonzalez.webp",
    "v66/artwork/the_city_i_long_for.webp",
    "v66/artwork/the_dive.webp",
    "v66/artwork/the_hard_way.webp",
    "v66/artwork/the_hook.webp",
    "v66/artwork/the_quiet_kind.webp",
    "v66/artwork/the_rhythm_of_the_fox.webp",
    "v66/artwork/the_rhythm_of_you.webp",
    "v66/artwork/the_sharpened_bow.webp",
    "v66/artwork/the_sirens_anchor.webp",
    "v66/artwork/the_soft_return.webp",
    "v66/artwork/the_steel_winged_swan.webp",
    "v66/artwork/this_is_fine.webp",
    "v66/artwork/tide_on_stone.webp",
    "v66/artwork/toccata.webp",
    "v66/artwork/trick_or_treat.webp",
    "v66/artwork/uncaged.webp",
    "v66/artwork/upon_a_winding_trail.webp",
    "v66/artwork/venezia.webp",
    "v66/artwork/verona.webp",
    "v66/artwork/weekend.webp",
    "v66/artwork/whiteout.webp",
    "v66/artwork/winterstorm.webp",
    "v66/datenschutz.html",
    "v66/images/Guitar-in-Dolomites.webp",
    "v66/images/Hero.webp",
    "v66/images/Hero_square.webp",
    "v66/images/Julia-skiing-Dolomites.webp",
    "v66/images/Stage_1.webp",
    "v66/images/Stage_2.webp",
    "v66/images/Stage_3.webp",
    "v66/images/Stage_4.webp",
    "v66/images/Stage_5.webp",
    "v66/images/Stage_6.webp",
    "v66/images/Stage_7.webp",
    "v66/images/Stage_8.webp",
    "v66/images/icons/app_icon_192.png",
    "v66/images/icons/app_icon_512.png",
    "v66/images/original/Guitar-in-Dolomites.png",
    "v66/images/original/Hero.jpg",
    "v66/images/original/Hero_square.jpg",
    "v66/images/original/Julia-skiing-Dolomites.png",
    "v66/images/original/Stage_1.png",
    "v66/images/original/Stage_2.png",
    "v66/images/original/Stage_3.png",
    "v66/images/original/Stage_4.png",
    "v66/images/original/Stage_5.png",
    "v66/images/original/Stage_6.png",
    "v66/images/original/Stage_7.png",
    "v66/images/original/Stage_8.png",
    "v66/images/password_expired_live.webp",
    "v66/images/podcasts.webp",
    "v66/impressum.html",
    "v66/index.html",
    "v66/js/DiaryService.js",
    "v66/js/Director.js",
    "v66/js/Main 20260319_1300.js",
    "v66/js/Main.js",
    "v66/js/PickerDrum.js",
    "v66/js/Player 20260319_1300.js",
    "v66/js/Player.js",
    "v66/js/SongCollection 20260319_1400.js",
    "v66/js/SongCollection.js",
    "v66/js/SongService.js",
    "v66/js/VersionCore.js",
    "v66/js/ffmpeg.min.js",
    "v66/js/lucide.js",
    "v66/js/tailwindcss.js",
    "v66/legal_notice.html",
    "v66/manifest.json",
    "v66/privacy_policy.html"
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
