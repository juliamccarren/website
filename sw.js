const STATIC_CACHE = 'julia-site-v69';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v69/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v69/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v69/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v69/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v69/artwork/a_slow_blossoming_rose.webp",
    "v69/artwork/alejandro.webp",
    "v69/artwork/antitoxic.webp",
    "v69/artwork/autumns_whisper.webp",
    "v69/artwork/avalanche.webp",
    "v69/artwork/betrayal.webp",
    "v69/artwork/big_dreams_shine.webp",
    "v69/artwork/big_dreams_shine_live.webp",
    "v69/artwork/bite_of_the_night.webp",
    "v69/artwork/boring.webp",
    "v69/artwork/brooklyn.webp",
    "v69/artwork/buckn_the_bain.webp",
    "v69/artwork/cheerleader.webp",
    "v69/artwork/coffee_in_amsterdam.webp",
    "v69/artwork/cool_fire.webp",
    "v69/artwork/date_disaster.webp",
    "v69/artwork/deep_blue.webp",
    "v69/artwork/deepdive_1.webp",
    "v69/artwork/deepdive_2.webp",
    "v69/artwork/default.webp",
    "v69/artwork/digital_ghost.webp",
    "v69/artwork/disco_flashback.webp",
    "v69/artwork/disco_flashback_2.webp",
    "v69/artwork/disposable.webp",
    "v69/artwork/distortion.webp",
    "v69/artwork/drunk_not_dumb.webp",
    "v69/artwork/dynamite.webp",
    "v69/artwork/electric_hearts.webp",
    "v69/artwork/embers_and_sparks.webp",
    "v69/artwork/fences_down.webp",
    "v69/artwork/first_steps_to_stardom.webp",
    "v69/artwork/fog_of_fear.webp",
    "v69/artwork/forever.webp",
    "v69/artwork/four_chords_later.webp",
    "v69/artwork/friday_night.webp",
    "v69/artwork/from_first_steps_to_stardom.webp",
    "v69/artwork/frost_and_friction.webp",
    "v69/artwork/frozen_heart.webp",
    "v69/artwork/garage_band.webp",
    "v69/artwork/ghost_in_the_garden.webp",
    "v69/artwork/god_save_the_king.webp",
    "v69/artwork/golden_days.webp",
    "v69/artwork/good_enough.webp",
    "v69/artwork/happy_birthday_in_heaven.webp",
    "v69/artwork/haunted_haven.webp",
    "v69/artwork/heart_of_fire_and_ice.webp",
    "v69/artwork/her_first_truck.webp",
    "v69/artwork/hes_still_here.webp",
    "v69/artwork/home_now.webp",
    "v69/artwork/howling_wolves.webp",
    "v69/artwork/hypocrites.webp",
    "v69/artwork/i_hate_you.webp",
    "v69/artwork/i_love_school.webp",
    "v69/artwork/i_scream.webp",
    "v69/artwork/insatiable.webp",
    "v69/artwork/insult_the_ones_you_love.webp",
    "v69/artwork/introverted_girl.webp",
    "v69/artwork/jet_set.webp",
    "v69/artwork/just_a_vibe.webp",
    "v69/artwork/just_wants_to_be_loved.webp",
    "v69/artwork/last_exit.webp",
    "v69/artwork/left_lane_legend.webp",
    "v69/artwork/little_butterflies.webp",
    "v69/artwork/maybe_they_knew.webp",
    "v69/artwork/mind_the_gap.webp",
    "v69/artwork/my_foundation.webp",
    "v69/artwork/my_sweet_little_star.webp",
    "v69/artwork/need_for_speed.webp",
    "v69/artwork/one_in_a_quarter_billion.webp",
    "v69/artwork/paradox_love.webp",
    "v69/artwork/password_expired.webp",
    "v69/artwork/password_expired_live.webp",
    "v69/artwork/peaks_of_gold.webp",
    "v69/artwork/private_lake.webp",
    "v69/artwork/radio_trash.webp",
    "v69/artwork/ride_the_groove.webp",
    "v69/artwork/rocker_songwriter.webp",
    "v69/artwork/sailing_on_open_water.webp",
    "v69/artwork/sanctified_sinner.webp",
    "v69/artwork/sanctuary_riot.webp",
    "v69/artwork/schools_out.webp",
    "v69/artwork/set_the_spirit_free.webp",
    "v69/artwork/siblings.webp",
    "v69/artwork/skeleton_dance.webp",
    "v69/artwork/slippery_road.webp",
    "v69/artwork/social_lubricant.webp",
    "v69/artwork/soulmate.webp",
    "v69/artwork/spooky.webp",
    "v69/artwork/storm_of_the_abyss.webp",
    "v69/artwork/summers_farewell.webp",
    "v69/artwork/tabby_gonzalez.webp",
    "v69/artwork/the_city_i_long_for.webp",
    "v69/artwork/the_dive.webp",
    "v69/artwork/the_hard_way.webp",
    "v69/artwork/the_hook.webp",
    "v69/artwork/the_quiet_kind.webp",
    "v69/artwork/the_rhythm_of_the_fox.webp",
    "v69/artwork/the_rhythm_of_you.webp",
    "v69/artwork/the_sharpened_bow.webp",
    "v69/artwork/the_sirens_anchor.webp",
    "v69/artwork/the_soft_return.webp",
    "v69/artwork/the_steel_winged_swan.webp",
    "v69/artwork/this_is_fine.webp",
    "v69/artwork/tide_on_stone.webp",
    "v69/artwork/toccata.webp",
    "v69/artwork/trick_or_treat.webp",
    "v69/artwork/uncaged.webp",
    "v69/artwork/upon_a_winding_trail.webp",
    "v69/artwork/venezia.webp",
    "v69/artwork/verona.webp",
    "v69/artwork/weekend.webp",
    "v69/artwork/whiteout.webp",
    "v69/artwork/winterstorm.webp",
    "v69/datenschutz.html",
    "v69/images/Guitar-in-Dolomites.webp",
    "v69/images/Hero.webp",
    "v69/images/Hero_square.webp",
    "v69/images/Julia-skiing-Dolomites.webp",
    "v69/images/Stage_1.webp",
    "v69/images/Stage_2.webp",
    "v69/images/Stage_3.webp",
    "v69/images/Stage_4.webp",
    "v69/images/Stage_5.webp",
    "v69/images/Stage_6.webp",
    "v69/images/Stage_7.webp",
    "v69/images/Stage_8.webp",
    "v69/images/icons/app_icon_192.png",
    "v69/images/icons/app_icon_512.png",
    "v69/images/original/Guitar-in-Dolomites.png",
    "v69/images/original/Hero.jpg",
    "v69/images/original/Hero_square.jpg",
    "v69/images/original/Julia-skiing-Dolomites.png",
    "v69/images/original/Stage_1.png",
    "v69/images/original/Stage_2.png",
    "v69/images/original/Stage_3.png",
    "v69/images/original/Stage_4.png",
    "v69/images/original/Stage_5.png",
    "v69/images/original/Stage_6.png",
    "v69/images/original/Stage_7.png",
    "v69/images/original/Stage_8.png",
    "v69/images/password_expired_live.webp",
    "v69/images/podcasts.webp",
    "v69/impressum.html",
    "v69/index.html",
    "v69/js/DiaryService.js",
    "v69/js/Director.js",
    "v69/js/Main 20260319_1300.js",
    "v69/js/Main.js",
    "v69/js/PickerDrum.js",
    "v69/js/Player 20260319_1300.js",
    "v69/js/Player.js",
    "v69/js/SongCollection 20260319_1400.js",
    "v69/js/SongCollection.js",
    "v69/js/SongService.js",
    "v69/js/VersionCore.js",
    "v69/js/ffmpeg.min.js",
    "v69/js/lucide.js",
    "v69/js/tailwindcss.js",
    "v69/legal_notice.html",
    "v69/manifest.json",
    "v69/privacy_policy.html"
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
