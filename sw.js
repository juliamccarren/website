const STATIC_CACHE = 'julia-site-v77';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v77/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v77/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v77/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v77/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v77/artwork/a_slow_blossoming_rose.webp",
    "v77/artwork/alejandro.webp",
    "v77/artwork/antitoxic.webp",
    "v77/artwork/autumns_whisper.webp",
    "v77/artwork/avalanche.webp",
    "v77/artwork/betrayal.webp",
    "v77/artwork/big_dreams_shine.webp",
    "v77/artwork/big_dreams_shine_live.webp",
    "v77/artwork/bite_of_the_night.webp",
    "v77/artwork/boring.webp",
    "v77/artwork/brooklyn.webp",
    "v77/artwork/buckn_the_bain.webp",
    "v77/artwork/cheerleader.webp",
    "v77/artwork/coffee_in_amsterdam.webp",
    "v77/artwork/cool_fire.webp",
    "v77/artwork/date_disaster.webp",
    "v77/artwork/deep_blue.webp",
    "v77/artwork/deepdive_1.webp",
    "v77/artwork/deepdive_2.webp",
    "v77/artwork/default.webp",
    "v77/artwork/digital_ghost.webp",
    "v77/artwork/disco_flashback.webp",
    "v77/artwork/disco_flashback_2.webp",
    "v77/artwork/disposable.webp",
    "v77/artwork/distortion.webp",
    "v77/artwork/drunk_not_dumb.webp",
    "v77/artwork/dynamite.webp",
    "v77/artwork/electric_hearts.webp",
    "v77/artwork/embers_and_sparks.webp",
    "v77/artwork/fences_down.webp",
    "v77/artwork/first_steps_to_stardom.webp",
    "v77/artwork/fog_of_fear.webp",
    "v77/artwork/forever.webp",
    "v77/artwork/four_chords_later.webp",
    "v77/artwork/friday_night.webp",
    "v77/artwork/from_first_steps_to_stardom.webp",
    "v77/artwork/frost_and_friction.webp",
    "v77/artwork/frozen_heart.webp",
    "v77/artwork/garage_band.webp",
    "v77/artwork/ghost_in_the_garden.webp",
    "v77/artwork/god_save_the_king.webp",
    "v77/artwork/golden_days.webp",
    "v77/artwork/good_enough.webp",
    "v77/artwork/happy_birthday_in_heaven.webp",
    "v77/artwork/haunted_haven.webp",
    "v77/artwork/heart_of_fire_and_ice.webp",
    "v77/artwork/her_first_truck.webp",
    "v77/artwork/hes_still_here.webp",
    "v77/artwork/home_now.webp",
    "v77/artwork/howling_wolves.webp",
    "v77/artwork/hypocrites.webp",
    "v77/artwork/i_hate_you.webp",
    "v77/artwork/i_love_school.webp",
    "v77/artwork/i_scream.webp",
    "v77/artwork/insatiable.webp",
    "v77/artwork/insult_the_ones_you_love.webp",
    "v77/artwork/introverted_girl.webp",
    "v77/artwork/jet_set.webp",
    "v77/artwork/julia_and_friends.webp",
    "v77/artwork/just_a_vibe.webp",
    "v77/artwork/just_wants_to_be_loved.webp",
    "v77/artwork/last_exit.webp",
    "v77/artwork/left_lane_legend.webp",
    "v77/artwork/little_butterflies.webp",
    "v77/artwork/luck_for_granted.webp",
    "v77/artwork/maybe_they_knew.webp",
    "v77/artwork/mind_the_gap.webp",
    "v77/artwork/my_foundation.webp",
    "v77/artwork/my_sweet_little_star.webp",
    "v77/artwork/need_for_speed.webp",
    "v77/artwork/nice_girl.webp",
    "v77/artwork/one_in_a_quarter_billion.webp",
    "v77/artwork/paradox_love.webp",
    "v77/artwork/password_expired.webp",
    "v77/artwork/password_expired_live.webp",
    "v77/artwork/peaks_of_gold.webp",
    "v77/artwork/private_lake.webp",
    "v77/artwork/radio_trash.webp",
    "v77/artwork/ride_the_groove.webp",
    "v77/artwork/rocker_songwriter.webp",
    "v77/artwork/sailing_on_open_water.webp",
    "v77/artwork/sanctified_sinner.webp",
    "v77/artwork/sanctuary_riot.webp",
    "v77/artwork/schools_out.webp",
    "v77/artwork/set_the_spirit_free.webp",
    "v77/artwork/siblings.webp",
    "v77/artwork/skeleton_dance.webp",
    "v77/artwork/slippery_road.webp",
    "v77/artwork/social_lubricant.webp",
    "v77/artwork/soulmate.webp",
    "v77/artwork/spooky.webp",
    "v77/artwork/spring.webp",
    "v77/artwork/storm_of_the_abyss.webp",
    "v77/artwork/summers_farewell.webp",
    "v77/artwork/tabby_gonzalez.webp",
    "v77/artwork/the_city_i_long_for.webp",
    "v77/artwork/the_dive.webp",
    "v77/artwork/the_hard_way.webp",
    "v77/artwork/the_hook.webp",
    "v77/artwork/the_quiet_kind.webp",
    "v77/artwork/the_rhythm_of_the_fox.webp",
    "v77/artwork/the_rhythm_of_you.webp",
    "v77/artwork/the_sharpened_bow.webp",
    "v77/artwork/the_sirens_anchor.webp",
    "v77/artwork/the_soft_return.webp",
    "v77/artwork/the_steel_winged_swan.webp",
    "v77/artwork/this_is_fine.webp",
    "v77/artwork/tide_on_stone.webp",
    "v77/artwork/toccata.webp",
    "v77/artwork/trick_or_treat.webp",
    "v77/artwork/uncaged.webp",
    "v77/artwork/upon_a_winding_trail.webp",
    "v77/artwork/venezia.webp",
    "v77/artwork/verona.webp",
    "v77/artwork/weekend.webp",
    "v77/artwork/whiteout.webp",
    "v77/artwork/winterstorm.webp",
    "v77/datenschutz.html",
    "v77/images/Guitar-in-Dolomites.webp",
    "v77/images/Hero.webp",
    "v77/images/Hero_square.webp",
    "v77/images/Julia-skiing-Dolomites.webp",
    "v77/images/Stage_1.webp",
    "v77/images/Stage_2.webp",
    "v77/images/Stage_3.webp",
    "v77/images/Stage_4.webp",
    "v77/images/Stage_5.webp",
    "v77/images/Stage_6.webp",
    "v77/images/Stage_7.webp",
    "v77/images/Stage_8.webp",
    "v77/images/icons/app_icon_192.png",
    "v77/images/icons/app_icon_512.png",
    "v77/images/original/Guitar-in-Dolomites.png",
    "v77/images/original/Hero.jpg",
    "v77/images/original/Hero_square.jpg",
    "v77/images/original/Julia-skiing-Dolomites.png",
    "v77/images/original/Stage_1.png",
    "v77/images/original/Stage_2.png",
    "v77/images/original/Stage_3.png",
    "v77/images/original/Stage_4.png",
    "v77/images/original/Stage_5.png",
    "v77/images/original/Stage_6.png",
    "v77/images/original/Stage_7.png",
    "v77/images/original/Stage_8.png",
    "v77/images/password_expired_live.webp",
    "v77/images/podcasts.webp",
    "v77/impressum.html",
    "v77/index.html",
    "v77/js/DiaryService.js",
    "v77/js/Director.js",
    "v77/js/Main 20260319_1300.js",
    "v77/js/Main.js",
    "v77/js/PickerDrum.js",
    "v77/js/Player 20260319_1300.js",
    "v77/js/Player.js",
    "v77/js/SongCollection 20260319_1400.js",
    "v77/js/SongCollection.js",
    "v77/js/SongService.js",
    "v77/js/VersionCore.js",
    "v77/js/ffmpeg.min.js",
    "v77/js/lucide.js",
    "v77/js/tailwindcss.js",
    "v77/legal_notice.html",
    "v77/manifest.json",
    "v77/privacy_policy.html"
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
