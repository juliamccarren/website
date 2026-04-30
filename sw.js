const STATIC_CACHE = 'julia-site-v67';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v67/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v67/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v67/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v67/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v67/artwork/a_slow_blossoming_rose.webp",
    "v67/artwork/alejandro.webp",
    "v67/artwork/antitoxic.webp",
    "v67/artwork/autumns_whisper.webp",
    "v67/artwork/avalanche.webp",
    "v67/artwork/betrayal.webp",
    "v67/artwork/big_dreams_shine.webp",
    "v67/artwork/big_dreams_shine_live.webp",
    "v67/artwork/bite_of_the_night.webp",
    "v67/artwork/boring.webp",
    "v67/artwork/brooklyn.webp",
    "v67/artwork/buckn_the_bain.webp",
    "v67/artwork/cheerleader.webp",
    "v67/artwork/coffee_in_amsterdam.webp",
    "v67/artwork/cool_fire.webp",
    "v67/artwork/date_disaster.webp",
    "v67/artwork/deep_blue.webp",
    "v67/artwork/deepdive_1.webp",
    "v67/artwork/deepdive_2.webp",
    "v67/artwork/default.webp",
    "v67/artwork/digital_ghost.webp",
    "v67/artwork/disco_flashback.webp",
    "v67/artwork/disco_flashback_2.webp",
    "v67/artwork/disposable.webp",
    "v67/artwork/distortion.webp",
    "v67/artwork/drunk_not_dumb.webp",
    "v67/artwork/dynamite.webp",
    "v67/artwork/electric_hearts.webp",
    "v67/artwork/embers_and_sparks.webp",
    "v67/artwork/fences_down.webp",
    "v67/artwork/first_steps_to_stardom.webp",
    "v67/artwork/fog_of_fear.webp",
    "v67/artwork/forever.webp",
    "v67/artwork/four_chords_later.webp",
    "v67/artwork/friday_night.webp",
    "v67/artwork/from_first_steps_to_stardom.webp",
    "v67/artwork/frost_and_friction.webp",
    "v67/artwork/frozen_heart.webp",
    "v67/artwork/garage_band.webp",
    "v67/artwork/ghost_in_the_garden.webp",
    "v67/artwork/god_save_the_king.webp",
    "v67/artwork/golden_days.webp",
    "v67/artwork/good_enough.webp",
    "v67/artwork/happy_birthday_in_heaven.webp",
    "v67/artwork/haunted_haven.webp",
    "v67/artwork/heart_of_fire_and_ice.webp",
    "v67/artwork/her_first_truck.webp",
    "v67/artwork/hes_still_here.webp",
    "v67/artwork/home_now.webp",
    "v67/artwork/howling_wolves.webp",
    "v67/artwork/hypocrites.webp",
    "v67/artwork/i_hate_you.webp",
    "v67/artwork/i_love_school.webp",
    "v67/artwork/i_scream.webp",
    "v67/artwork/insatiable.webp",
    "v67/artwork/insult_the_ones_you_love.webp",
    "v67/artwork/introverted_girl.webp",
    "v67/artwork/jet_set.webp",
    "v67/artwork/just_a_vibe.webp",
    "v67/artwork/just_wants_to_be_loved.webp",
    "v67/artwork/last_exit.webp",
    "v67/artwork/left_lane_legend.webp",
    "v67/artwork/little_butterflies.webp",
    "v67/artwork/maybe_they_knew.webp",
    "v67/artwork/mind_the_gap.webp",
    "v67/artwork/my_foundation.webp",
    "v67/artwork/my_sweet_little_star.webp",
    "v67/artwork/need_for_speed.webp",
    "v67/artwork/one_in_a_quarter_billion.webp",
    "v67/artwork/paradox_love.webp",
    "v67/artwork/password_expired.webp",
    "v67/artwork/password_expired_live.webp",
    "v67/artwork/peaks_of_gold.webp",
    "v67/artwork/private_lake.webp",
    "v67/artwork/radio_trash.webp",
    "v67/artwork/ride_the_groove.webp",
    "v67/artwork/rocker_songwriter.webp",
    "v67/artwork/sailing_on_open_water.webp",
    "v67/artwork/sanctified_sinner.webp",
    "v67/artwork/sanctuary_riot.webp",
    "v67/artwork/schools_out.webp",
    "v67/artwork/set_the_spirit_free.webp",
    "v67/artwork/siblings.webp",
    "v67/artwork/skeleton_dance.webp",
    "v67/artwork/slippery_road.webp",
    "v67/artwork/social_lubricant.webp",
    "v67/artwork/soulmate.webp",
    "v67/artwork/spooky.webp",
    "v67/artwork/storm_of_the_abyss.webp",
    "v67/artwork/summers_farewell.webp",
    "v67/artwork/tabby_gonzalez.webp",
    "v67/artwork/the_city_i_long_for.webp",
    "v67/artwork/the_dive.webp",
    "v67/artwork/the_hard_way.webp",
    "v67/artwork/the_hook.webp",
    "v67/artwork/the_quiet_kind.webp",
    "v67/artwork/the_rhythm_of_the_fox.webp",
    "v67/artwork/the_rhythm_of_you.webp",
    "v67/artwork/the_sharpened_bow.webp",
    "v67/artwork/the_sirens_anchor.webp",
    "v67/artwork/the_soft_return.webp",
    "v67/artwork/the_steel_winged_swan.webp",
    "v67/artwork/this_is_fine.webp",
    "v67/artwork/tide_on_stone.webp",
    "v67/artwork/toccata.webp",
    "v67/artwork/trick_or_treat.webp",
    "v67/artwork/uncaged.webp",
    "v67/artwork/upon_a_winding_trail.webp",
    "v67/artwork/venezia.webp",
    "v67/artwork/verona.webp",
    "v67/artwork/weekend.webp",
    "v67/artwork/whiteout.webp",
    "v67/artwork/winterstorm.webp",
    "v67/datenschutz.html",
    "v67/images/Guitar-in-Dolomites.webp",
    "v67/images/Hero.webp",
    "v67/images/Hero_square.webp",
    "v67/images/Julia-skiing-Dolomites.webp",
    "v67/images/Stage_1.webp",
    "v67/images/Stage_2.webp",
    "v67/images/Stage_3.webp",
    "v67/images/Stage_4.webp",
    "v67/images/Stage_5.webp",
    "v67/images/Stage_6.webp",
    "v67/images/Stage_7.webp",
    "v67/images/Stage_8.webp",
    "v67/images/icons/app_icon_192.png",
    "v67/images/icons/app_icon_512.png",
    "v67/images/original/Guitar-in-Dolomites.png",
    "v67/images/original/Hero.jpg",
    "v67/images/original/Hero_square.jpg",
    "v67/images/original/Julia-skiing-Dolomites.png",
    "v67/images/original/Stage_1.png",
    "v67/images/original/Stage_2.png",
    "v67/images/original/Stage_3.png",
    "v67/images/original/Stage_4.png",
    "v67/images/original/Stage_5.png",
    "v67/images/original/Stage_6.png",
    "v67/images/original/Stage_7.png",
    "v67/images/original/Stage_8.png",
    "v67/images/password_expired_live.webp",
    "v67/images/podcasts.webp",
    "v67/impressum.html",
    "v67/index.html",
    "v67/js/DiaryService.js",
    "v67/js/Director.js",
    "v67/js/Main 20260319_1300.js",
    "v67/js/Main.js",
    "v67/js/PickerDrum.js",
    "v67/js/Player 20260319_1300.js",
    "v67/js/Player.js",
    "v67/js/SongCollection 20260319_1400.js",
    "v67/js/SongCollection.js",
    "v67/js/SongService.js",
    "v67/js/VersionCore.js",
    "v67/js/ffmpeg.min.js",
    "v67/js/lucide.js",
    "v67/js/tailwindcss.js",
    "v67/legal_notice.html",
    "v67/manifest.json",
    "v67/privacy_policy.html"
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
