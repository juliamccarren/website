const STATIC_CACHE = 'julia-site-v83';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v83/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v83/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v83/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v83/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v83/artwork/a_slow_blossoming_rose.webp",
    "v83/artwork/alejandro.webp",
    "v83/artwork/antitoxic.webp",
    "v83/artwork/autumns_whisper.webp",
    "v83/artwork/avalanche.webp",
    "v83/artwork/betrayal.webp",
    "v83/artwork/big_dreams_shine.webp",
    "v83/artwork/big_dreams_shine_live.webp",
    "v83/artwork/bite_of_the_night.webp",
    "v83/artwork/boring.webp",
    "v83/artwork/brooklyn.webp",
    "v83/artwork/buckn_the_bain.webp",
    "v83/artwork/cheerleader.webp",
    "v83/artwork/coffee_in_amsterdam.webp",
    "v83/artwork/cool_fire.webp",
    "v83/artwork/date_disaster.webp",
    "v83/artwork/deep_blue.webp",
    "v83/artwork/deepdive_1.webp",
    "v83/artwork/deepdive_2.webp",
    "v83/artwork/default.webp",
    "v83/artwork/digital_ghost.webp",
    "v83/artwork/disco_flashback.webp",
    "v83/artwork/disco_flashback_2.webp",
    "v83/artwork/disposable.webp",
    "v83/artwork/distortion.webp",
    "v83/artwork/drunk_not_dumb.webp",
    "v83/artwork/dynamite.webp",
    "v83/artwork/electric_hearts.webp",
    "v83/artwork/embers_and_sparks.webp",
    "v83/artwork/fences_down.webp",
    "v83/artwork/first_steps_to_stardom.webp",
    "v83/artwork/fog_of_fear.webp",
    "v83/artwork/forever.webp",
    "v83/artwork/four_chords_later.webp",
    "v83/artwork/friday_night.webp",
    "v83/artwork/from_first_steps_to_stardom.webp",
    "v83/artwork/frost_and_friction.webp",
    "v83/artwork/frozen_heart.webp",
    "v83/artwork/garage_band.webp",
    "v83/artwork/ghost_in_the_garden.webp",
    "v83/artwork/god_save_the_king.webp",
    "v83/artwork/golden_days.webp",
    "v83/artwork/good_enough.webp",
    "v83/artwork/happy_birthday_in_heaven.webp",
    "v83/artwork/haunted_haven.webp",
    "v83/artwork/heart_of_fire_and_ice.webp",
    "v83/artwork/her_first_truck.webp",
    "v83/artwork/hes_still_here.webp",
    "v83/artwork/home_now.webp",
    "v83/artwork/howling_wolves.webp",
    "v83/artwork/hypocrites.webp",
    "v83/artwork/i_hate_you.webp",
    "v83/artwork/i_love_school.webp",
    "v83/artwork/i_scream.webp",
    "v83/artwork/insatiable.webp",
    "v83/artwork/insult_the_ones_you_love.webp",
    "v83/artwork/introverted_girl.webp",
    "v83/artwork/jet_set.webp",
    "v83/artwork/julia_and_friends.webp",
    "v83/artwork/just_a_vibe.webp",
    "v83/artwork/just_wants_to_be_loved.webp",
    "v83/artwork/last_exit.webp",
    "v83/artwork/left_lane_legend.webp",
    "v83/artwork/little_butterflies.webp",
    "v83/artwork/luck_for_granted.webp",
    "v83/artwork/maybe_they_knew.webp",
    "v83/artwork/mind_the_gap.webp",
    "v83/artwork/my_foundation.webp",
    "v83/artwork/my_sweet_little_star.webp",
    "v83/artwork/need_for_speed.webp",
    "v83/artwork/nice_girl.webp",
    "v83/artwork/one_in_a_quarter_billion.webp",
    "v83/artwork/paradox_love.webp",
    "v83/artwork/password_expired.webp",
    "v83/artwork/password_expired_live.webp",
    "v83/artwork/peaks_of_gold.webp",
    "v83/artwork/private_lake.webp",
    "v83/artwork/radio_trash.webp",
    "v83/artwork/ride_the_groove.webp",
    "v83/artwork/rocker_songwriter.webp",
    "v83/artwork/sailing_on_open_water.webp",
    "v83/artwork/sanctified_sinner.webp",
    "v83/artwork/sanctuary_riot.webp",
    "v83/artwork/schools_out.webp",
    "v83/artwork/set_the_spirit_free.webp",
    "v83/artwork/siblings.webp",
    "v83/artwork/skeleton_dance.webp",
    "v83/artwork/slippery_road.webp",
    "v83/artwork/social_lubricant.webp",
    "v83/artwork/soulmate.webp",
    "v83/artwork/southern_belle.webp",
    "v83/artwork/spooky.webp",
    "v83/artwork/spring.webp",
    "v83/artwork/storm_of_the_abyss.webp",
    "v83/artwork/summers_farewell.webp",
    "v83/artwork/tabby_gonzalez.webp",
    "v83/artwork/the_city_i_long_for.webp",
    "v83/artwork/the_dive.webp",
    "v83/artwork/the_hard_way.webp",
    "v83/artwork/the_hook.webp",
    "v83/artwork/the_quiet_kind.webp",
    "v83/artwork/the_rhythm_of_the_fox.webp",
    "v83/artwork/the_rhythm_of_you.webp",
    "v83/artwork/the_sharpened_bow.webp",
    "v83/artwork/the_sirens_anchor.webp",
    "v83/artwork/the_soft_return.webp",
    "v83/artwork/the_steel_winged_swan.webp",
    "v83/artwork/this_is_fine.webp",
    "v83/artwork/tide_on_stone.webp",
    "v83/artwork/toccata.webp",
    "v83/artwork/trick_or_treat.webp",
    "v83/artwork/uncaged.webp",
    "v83/artwork/upon_a_winding_trail.webp",
    "v83/artwork/venezia.webp",
    "v83/artwork/verona.webp",
    "v83/artwork/weekend.webp",
    "v83/artwork/whiteout.webp",
    "v83/artwork/winterstorm.webp",
    "v83/datenschutz.html",
    "v83/images/Guitar-in-Dolomites.webp",
    "v83/images/Hero.webp",
    "v83/images/Hero_square.webp",
    "v83/images/Julia-skiing-Dolomites.webp",
    "v83/images/Stage_1.webp",
    "v83/images/Stage_2.webp",
    "v83/images/Stage_3.webp",
    "v83/images/Stage_4.webp",
    "v83/images/Stage_5.webp",
    "v83/images/Stage_6.webp",
    "v83/images/Stage_7.webp",
    "v83/images/Stage_8.webp",
    "v83/images/icons/app_icon_192.png",
    "v83/images/icons/app_icon_512.png",
    "v83/images/original/Guitar-in-Dolomites.png",
    "v83/images/original/Hero.jpg",
    "v83/images/original/Hero_square.jpg",
    "v83/images/original/Julia-skiing-Dolomites.png",
    "v83/images/original/Stage_1.png",
    "v83/images/original/Stage_2.png",
    "v83/images/original/Stage_3.png",
    "v83/images/original/Stage_4.png",
    "v83/images/original/Stage_5.png",
    "v83/images/original/Stage_6.png",
    "v83/images/original/Stage_7.png",
    "v83/images/original/Stage_8.png",
    "v83/images/password_expired_live.webp",
    "v83/images/podcasts.webp",
    "v83/images/southern_belle.webp",
    "v83/impressum.html",
    "v83/index.html",
    "v83/js/DiaryService.js",
    "v83/js/Director.js",
    "v83/js/Main 20260319_1300.js",
    "v83/js/Main.js",
    "v83/js/PickerDrum.js",
    "v83/js/Player 20260319_1300.js",
    "v83/js/Player.js",
    "v83/js/SongCollection 20260319_1400.js",
    "v83/js/SongCollection.js",
    "v83/js/SongService.js",
    "v83/js/VersionCore.js",
    "v83/js/ffmpeg.min.js",
    "v83/js/lucide.js",
    "v83/js/tailwindcss.js",
    "v83/legal_notice.html",
    "v83/manifest.json",
    "v83/privacy_policy.html"
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
