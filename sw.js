const STATIC_CACHE = 'julia-site-v74';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v74/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v74/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v74/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v74/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v74/artwork/a_slow_blossoming_rose.webp",
    "v74/artwork/alejandro.webp",
    "v74/artwork/antitoxic.webp",
    "v74/artwork/autumns_whisper.webp",
    "v74/artwork/avalanche.webp",
    "v74/artwork/betrayal.webp",
    "v74/artwork/big_dreams_shine.webp",
    "v74/artwork/big_dreams_shine_live.webp",
    "v74/artwork/bite_of_the_night.webp",
    "v74/artwork/boring.webp",
    "v74/artwork/brooklyn.webp",
    "v74/artwork/buckn_the_bain.webp",
    "v74/artwork/cheerleader.webp",
    "v74/artwork/coffee_in_amsterdam.webp",
    "v74/artwork/cool_fire.webp",
    "v74/artwork/date_disaster.webp",
    "v74/artwork/deep_blue.webp",
    "v74/artwork/deepdive_1.webp",
    "v74/artwork/deepdive_2.webp",
    "v74/artwork/default.webp",
    "v74/artwork/digital_ghost.webp",
    "v74/artwork/disco_flashback.webp",
    "v74/artwork/disco_flashback_2.webp",
    "v74/artwork/disposable.webp",
    "v74/artwork/distortion.webp",
    "v74/artwork/drunk_not_dumb.webp",
    "v74/artwork/dynamite.webp",
    "v74/artwork/electric_hearts.webp",
    "v74/artwork/embers_and_sparks.webp",
    "v74/artwork/fences_down.webp",
    "v74/artwork/first_steps_to_stardom.webp",
    "v74/artwork/fog_of_fear.webp",
    "v74/artwork/forever.webp",
    "v74/artwork/four_chords_later.webp",
    "v74/artwork/friday_night.webp",
    "v74/artwork/from_first_steps_to_stardom.webp",
    "v74/artwork/frost_and_friction.webp",
    "v74/artwork/frozen_heart.webp",
    "v74/artwork/garage_band.webp",
    "v74/artwork/ghost_in_the_garden.webp",
    "v74/artwork/god_save_the_king.webp",
    "v74/artwork/golden_days.webp",
    "v74/artwork/good_enough.webp",
    "v74/artwork/happy_birthday_in_heaven.webp",
    "v74/artwork/haunted_haven.webp",
    "v74/artwork/heart_of_fire_and_ice.webp",
    "v74/artwork/her_first_truck.webp",
    "v74/artwork/hes_still_here.webp",
    "v74/artwork/home_now.webp",
    "v74/artwork/howling_wolves.webp",
    "v74/artwork/hypocrites.webp",
    "v74/artwork/i_hate_you.webp",
    "v74/artwork/i_love_school.webp",
    "v74/artwork/i_scream.webp",
    "v74/artwork/insatiable.webp",
    "v74/artwork/insult_the_ones_you_love.webp",
    "v74/artwork/introverted_girl.webp",
    "v74/artwork/jet_set.webp",
    "v74/artwork/just_a_vibe.webp",
    "v74/artwork/just_wants_to_be_loved.webp",
    "v74/artwork/last_exit.webp",
    "v74/artwork/left_lane_legend.webp",
    "v74/artwork/little_butterflies.webp",
    "v74/artwork/luck_for_granted.webp",
    "v74/artwork/maybe_they_knew.webp",
    "v74/artwork/mind_the_gap.webp",
    "v74/artwork/my_foundation.webp",
    "v74/artwork/my_sweet_little_star.webp",
    "v74/artwork/need_for_speed.webp",
    "v74/artwork/one_in_a_quarter_billion.webp",
    "v74/artwork/paradox_love.webp",
    "v74/artwork/password_expired.webp",
    "v74/artwork/password_expired_live.webp",
    "v74/artwork/peaks_of_gold.webp",
    "v74/artwork/private_lake.webp",
    "v74/artwork/radio_trash.webp",
    "v74/artwork/ride_the_groove.webp",
    "v74/artwork/rocker_songwriter.webp",
    "v74/artwork/sailing_on_open_water.webp",
    "v74/artwork/sanctified_sinner.webp",
    "v74/artwork/sanctuary_riot.webp",
    "v74/artwork/schools_out.webp",
    "v74/artwork/set_the_spirit_free.webp",
    "v74/artwork/siblings.webp",
    "v74/artwork/skeleton_dance.webp",
    "v74/artwork/slippery_road.webp",
    "v74/artwork/social_lubricant.webp",
    "v74/artwork/soulmate.webp",
    "v74/artwork/spooky.webp",
    "v74/artwork/spring.webp",
    "v74/artwork/storm_of_the_abyss.webp",
    "v74/artwork/summers_farewell.webp",
    "v74/artwork/tabby_gonzalez.webp",
    "v74/artwork/the_city_i_long_for.webp",
    "v74/artwork/the_dive.webp",
    "v74/artwork/the_hard_way.webp",
    "v74/artwork/the_hook.webp",
    "v74/artwork/the_quiet_kind.webp",
    "v74/artwork/the_rhythm_of_the_fox.webp",
    "v74/artwork/the_rhythm_of_you.webp",
    "v74/artwork/the_sharpened_bow.webp",
    "v74/artwork/the_sirens_anchor.webp",
    "v74/artwork/the_soft_return.webp",
    "v74/artwork/the_steel_winged_swan.webp",
    "v74/artwork/this_is_fine.webp",
    "v74/artwork/tide_on_stone.webp",
    "v74/artwork/toccata.webp",
    "v74/artwork/trick_or_treat.webp",
    "v74/artwork/uncaged.webp",
    "v74/artwork/upon_a_winding_trail.webp",
    "v74/artwork/venezia.webp",
    "v74/artwork/verona.webp",
    "v74/artwork/weekend.webp",
    "v74/artwork/whiteout.webp",
    "v74/artwork/winterstorm.webp",
    "v74/datenschutz.html",
    "v74/images/Guitar-in-Dolomites.webp",
    "v74/images/Hero.webp",
    "v74/images/Hero_square.webp",
    "v74/images/Julia-skiing-Dolomites.webp",
    "v74/images/Stage_1.webp",
    "v74/images/Stage_2.webp",
    "v74/images/Stage_3.webp",
    "v74/images/Stage_4.webp",
    "v74/images/Stage_5.webp",
    "v74/images/Stage_6.webp",
    "v74/images/Stage_7.webp",
    "v74/images/Stage_8.webp",
    "v74/images/icons/app_icon_192.png",
    "v74/images/icons/app_icon_512.png",
    "v74/images/original/Guitar-in-Dolomites.png",
    "v74/images/original/Hero.jpg",
    "v74/images/original/Hero_square.jpg",
    "v74/images/original/Julia-skiing-Dolomites.png",
    "v74/images/original/Stage_1.png",
    "v74/images/original/Stage_2.png",
    "v74/images/original/Stage_3.png",
    "v74/images/original/Stage_4.png",
    "v74/images/original/Stage_5.png",
    "v74/images/original/Stage_6.png",
    "v74/images/original/Stage_7.png",
    "v74/images/original/Stage_8.png",
    "v74/images/password_expired_live.webp",
    "v74/images/podcasts.webp",
    "v74/impressum.html",
    "v74/index.html",
    "v74/js/DiaryService.js",
    "v74/js/Director.js",
    "v74/js/Main 20260319_1300.js",
    "v74/js/Main.js",
    "v74/js/PickerDrum.js",
    "v74/js/Player 20260319_1300.js",
    "v74/js/Player.js",
    "v74/js/SongCollection 20260319_1400.js",
    "v74/js/SongCollection.js",
    "v74/js/SongService.js",
    "v74/js/VersionCore.js",
    "v74/js/ffmpeg.min.js",
    "v74/js/lucide.js",
    "v74/js/tailwindcss.js",
    "v74/legal_notice.html",
    "v74/manifest.json",
    "v74/privacy_policy.html"
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
