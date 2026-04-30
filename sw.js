const STATIC_CACHE = 'julia-site-v68';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v68/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v68/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v68/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v68/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v68/artwork/a_slow_blossoming_rose.webp",
    "v68/artwork/alejandro.webp",
    "v68/artwork/antitoxic.webp",
    "v68/artwork/autumns_whisper.webp",
    "v68/artwork/avalanche.webp",
    "v68/artwork/betrayal.webp",
    "v68/artwork/big_dreams_shine.webp",
    "v68/artwork/big_dreams_shine_live.webp",
    "v68/artwork/bite_of_the_night.webp",
    "v68/artwork/boring.webp",
    "v68/artwork/brooklyn.webp",
    "v68/artwork/buckn_the_bain.webp",
    "v68/artwork/cheerleader.webp",
    "v68/artwork/coffee_in_amsterdam.webp",
    "v68/artwork/cool_fire.webp",
    "v68/artwork/date_disaster.webp",
    "v68/artwork/deep_blue.webp",
    "v68/artwork/deepdive_1.webp",
    "v68/artwork/deepdive_2.webp",
    "v68/artwork/default.webp",
    "v68/artwork/digital_ghost.webp",
    "v68/artwork/disco_flashback.webp",
    "v68/artwork/disco_flashback_2.webp",
    "v68/artwork/disposable.webp",
    "v68/artwork/distortion.webp",
    "v68/artwork/drunk_not_dumb.webp",
    "v68/artwork/dynamite.webp",
    "v68/artwork/electric_hearts.webp",
    "v68/artwork/embers_and_sparks.webp",
    "v68/artwork/fences_down.webp",
    "v68/artwork/first_steps_to_stardom.webp",
    "v68/artwork/fog_of_fear.webp",
    "v68/artwork/forever.webp",
    "v68/artwork/four_chords_later.webp",
    "v68/artwork/friday_night.webp",
    "v68/artwork/from_first_steps_to_stardom.webp",
    "v68/artwork/frost_and_friction.webp",
    "v68/artwork/frozen_heart.webp",
    "v68/artwork/garage_band.webp",
    "v68/artwork/ghost_in_the_garden.webp",
    "v68/artwork/god_save_the_king.webp",
    "v68/artwork/golden_days.webp",
    "v68/artwork/good_enough.webp",
    "v68/artwork/happy_birthday_in_heaven.webp",
    "v68/artwork/haunted_haven.webp",
    "v68/artwork/heart_of_fire_and_ice.webp",
    "v68/artwork/her_first_truck.webp",
    "v68/artwork/hes_still_here.webp",
    "v68/artwork/home_now.webp",
    "v68/artwork/howling_wolves.webp",
    "v68/artwork/hypocrites.webp",
    "v68/artwork/i_hate_you.webp",
    "v68/artwork/i_love_school.webp",
    "v68/artwork/i_scream.webp",
    "v68/artwork/insatiable.webp",
    "v68/artwork/insult_the_ones_you_love.webp",
    "v68/artwork/introverted_girl.webp",
    "v68/artwork/jet_set.webp",
    "v68/artwork/just_a_vibe.webp",
    "v68/artwork/just_wants_to_be_loved.webp",
    "v68/artwork/last_exit.webp",
    "v68/artwork/left_lane_legend.webp",
    "v68/artwork/little_butterflies.webp",
    "v68/artwork/maybe_they_knew.webp",
    "v68/artwork/mind_the_gap.webp",
    "v68/artwork/my_foundation.webp",
    "v68/artwork/my_sweet_little_star.webp",
    "v68/artwork/need_for_speed.webp",
    "v68/artwork/one_in_a_quarter_billion.webp",
    "v68/artwork/paradox_love.webp",
    "v68/artwork/password_expired.webp",
    "v68/artwork/password_expired_live.webp",
    "v68/artwork/peaks_of_gold.webp",
    "v68/artwork/private_lake.webp",
    "v68/artwork/radio_trash.webp",
    "v68/artwork/ride_the_groove.webp",
    "v68/artwork/rocker_songwriter.webp",
    "v68/artwork/sailing_on_open_water.webp",
    "v68/artwork/sanctified_sinner.webp",
    "v68/artwork/sanctuary_riot.webp",
    "v68/artwork/schools_out.webp",
    "v68/artwork/set_the_spirit_free.webp",
    "v68/artwork/siblings.webp",
    "v68/artwork/skeleton_dance.webp",
    "v68/artwork/slippery_road.webp",
    "v68/artwork/social_lubricant.webp",
    "v68/artwork/soulmate.webp",
    "v68/artwork/spooky.webp",
    "v68/artwork/storm_of_the_abyss.webp",
    "v68/artwork/summers_farewell.webp",
    "v68/artwork/tabby_gonzalez.webp",
    "v68/artwork/the_city_i_long_for.webp",
    "v68/artwork/the_dive.webp",
    "v68/artwork/the_hard_way.webp",
    "v68/artwork/the_hook.webp",
    "v68/artwork/the_quiet_kind.webp",
    "v68/artwork/the_rhythm_of_the_fox.webp",
    "v68/artwork/the_rhythm_of_you.webp",
    "v68/artwork/the_sharpened_bow.webp",
    "v68/artwork/the_sirens_anchor.webp",
    "v68/artwork/the_soft_return.webp",
    "v68/artwork/the_steel_winged_swan.webp",
    "v68/artwork/this_is_fine.webp",
    "v68/artwork/tide_on_stone.webp",
    "v68/artwork/toccata.webp",
    "v68/artwork/trick_or_treat.webp",
    "v68/artwork/uncaged.webp",
    "v68/artwork/upon_a_winding_trail.webp",
    "v68/artwork/venezia.webp",
    "v68/artwork/verona.webp",
    "v68/artwork/weekend.webp",
    "v68/artwork/whiteout.webp",
    "v68/artwork/winterstorm.webp",
    "v68/datenschutz.html",
    "v68/images/Guitar-in-Dolomites.webp",
    "v68/images/Hero.webp",
    "v68/images/Hero_square.webp",
    "v68/images/Julia-skiing-Dolomites.webp",
    "v68/images/Stage_1.webp",
    "v68/images/Stage_2.webp",
    "v68/images/Stage_3.webp",
    "v68/images/Stage_4.webp",
    "v68/images/Stage_5.webp",
    "v68/images/Stage_6.webp",
    "v68/images/Stage_7.webp",
    "v68/images/Stage_8.webp",
    "v68/images/icons/app_icon_192.png",
    "v68/images/icons/app_icon_512.png",
    "v68/images/original/Guitar-in-Dolomites.png",
    "v68/images/original/Hero.jpg",
    "v68/images/original/Hero_square.jpg",
    "v68/images/original/Julia-skiing-Dolomites.png",
    "v68/images/original/Stage_1.png",
    "v68/images/original/Stage_2.png",
    "v68/images/original/Stage_3.png",
    "v68/images/original/Stage_4.png",
    "v68/images/original/Stage_5.png",
    "v68/images/original/Stage_6.png",
    "v68/images/original/Stage_7.png",
    "v68/images/original/Stage_8.png",
    "v68/images/password_expired_live.webp",
    "v68/images/podcasts.webp",
    "v68/impressum.html",
    "v68/index.html",
    "v68/js/DiaryService.js",
    "v68/js/Director.js",
    "v68/js/Main 20260319_1300.js",
    "v68/js/Main.js",
    "v68/js/PickerDrum.js",
    "v68/js/Player 20260319_1300.js",
    "v68/js/Player.js",
    "v68/js/SongCollection 20260319_1400.js",
    "v68/js/SongCollection.js",
    "v68/js/SongService.js",
    "v68/js/VersionCore.js",
    "v68/js/ffmpeg.min.js",
    "v68/js/lucide.js",
    "v68/js/tailwindcss.js",
    "v68/legal_notice.html",
    "v68/manifest.json",
    "v68/privacy_policy.html"
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
