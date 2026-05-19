const STATIC_CACHE = 'julia-site-v76';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v76/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v76/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v76/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v76/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v76/artwork/a_slow_blossoming_rose.webp",
    "v76/artwork/alejandro.webp",
    "v76/artwork/antitoxic.webp",
    "v76/artwork/autumns_whisper.webp",
    "v76/artwork/avalanche.webp",
    "v76/artwork/betrayal.webp",
    "v76/artwork/big_dreams_shine.webp",
    "v76/artwork/big_dreams_shine_live.webp",
    "v76/artwork/bite_of_the_night.webp",
    "v76/artwork/boring.webp",
    "v76/artwork/brooklyn.webp",
    "v76/artwork/buckn_the_bain.webp",
    "v76/artwork/cheerleader.webp",
    "v76/artwork/coffee_in_amsterdam.webp",
    "v76/artwork/cool_fire.webp",
    "v76/artwork/date_disaster.webp",
    "v76/artwork/deep_blue.webp",
    "v76/artwork/deepdive_1.webp",
    "v76/artwork/deepdive_2.webp",
    "v76/artwork/default.webp",
    "v76/artwork/digital_ghost.webp",
    "v76/artwork/disco_flashback.webp",
    "v76/artwork/disco_flashback_2.webp",
    "v76/artwork/disposable.webp",
    "v76/artwork/distortion.webp",
    "v76/artwork/drunk_not_dumb.webp",
    "v76/artwork/dynamite.webp",
    "v76/artwork/electric_hearts.webp",
    "v76/artwork/embers_and_sparks.webp",
    "v76/artwork/fences_down.webp",
    "v76/artwork/first_steps_to_stardom.webp",
    "v76/artwork/fog_of_fear.webp",
    "v76/artwork/forever.webp",
    "v76/artwork/four_chords_later.webp",
    "v76/artwork/friday_night.webp",
    "v76/artwork/from_first_steps_to_stardom.webp",
    "v76/artwork/frost_and_friction.webp",
    "v76/artwork/frozen_heart.webp",
    "v76/artwork/garage_band.webp",
    "v76/artwork/ghost_in_the_garden.webp",
    "v76/artwork/god_save_the_king.webp",
    "v76/artwork/golden_days.webp",
    "v76/artwork/good_enough.webp",
    "v76/artwork/happy_birthday_in_heaven.webp",
    "v76/artwork/haunted_haven.webp",
    "v76/artwork/heart_of_fire_and_ice.webp",
    "v76/artwork/her_first_truck.webp",
    "v76/artwork/hes_still_here.webp",
    "v76/artwork/home_now.webp",
    "v76/artwork/howling_wolves.webp",
    "v76/artwork/hypocrites.webp",
    "v76/artwork/i_hate_you.webp",
    "v76/artwork/i_love_school.webp",
    "v76/artwork/i_scream.webp",
    "v76/artwork/insatiable.webp",
    "v76/artwork/insult_the_ones_you_love.webp",
    "v76/artwork/introverted_girl.webp",
    "v76/artwork/jet_set.webp",
    "v76/artwork/just_a_vibe.webp",
    "v76/artwork/just_wants_to_be_loved.webp",
    "v76/artwork/last_exit.webp",
    "v76/artwork/left_lane_legend.webp",
    "v76/artwork/little_butterflies.webp",
    "v76/artwork/luck_for_granted.webp",
    "v76/artwork/maybe_they_knew.webp",
    "v76/artwork/mind_the_gap.webp",
    "v76/artwork/my_foundation.webp",
    "v76/artwork/my_sweet_little_star.webp",
    "v76/artwork/need_for_speed.webp",
    "v76/artwork/nice_girl.webp",
    "v76/artwork/one_in_a_quarter_billion.webp",
    "v76/artwork/paradox_love.webp",
    "v76/artwork/password_expired.webp",
    "v76/artwork/password_expired_live.webp",
    "v76/artwork/peaks_of_gold.webp",
    "v76/artwork/private_lake.webp",
    "v76/artwork/radio_trash.webp",
    "v76/artwork/ride_the_groove.webp",
    "v76/artwork/rocker_songwriter.webp",
    "v76/artwork/sailing_on_open_water.webp",
    "v76/artwork/sanctified_sinner.webp",
    "v76/artwork/sanctuary_riot.webp",
    "v76/artwork/schools_out.webp",
    "v76/artwork/set_the_spirit_free.webp",
    "v76/artwork/siblings.webp",
    "v76/artwork/skeleton_dance.webp",
    "v76/artwork/slippery_road.webp",
    "v76/artwork/social_lubricant.webp",
    "v76/artwork/soulmate.webp",
    "v76/artwork/spooky.webp",
    "v76/artwork/spring.webp",
    "v76/artwork/storm_of_the_abyss.webp",
    "v76/artwork/summers_farewell.webp",
    "v76/artwork/tabby_gonzalez.webp",
    "v76/artwork/the_city_i_long_for.webp",
    "v76/artwork/the_dive.webp",
    "v76/artwork/the_hard_way.webp",
    "v76/artwork/the_hook.webp",
    "v76/artwork/the_quiet_kind.webp",
    "v76/artwork/the_rhythm_of_the_fox.webp",
    "v76/artwork/the_rhythm_of_you.webp",
    "v76/artwork/the_sharpened_bow.webp",
    "v76/artwork/the_sirens_anchor.webp",
    "v76/artwork/the_soft_return.webp",
    "v76/artwork/the_steel_winged_swan.webp",
    "v76/artwork/this_is_fine.webp",
    "v76/artwork/tide_on_stone.webp",
    "v76/artwork/toccata.webp",
    "v76/artwork/trick_or_treat.webp",
    "v76/artwork/uncaged.webp",
    "v76/artwork/upon_a_winding_trail.webp",
    "v76/artwork/venezia.webp",
    "v76/artwork/verona.webp",
    "v76/artwork/weekend.webp",
    "v76/artwork/whiteout.webp",
    "v76/artwork/winterstorm.webp",
    "v76/datenschutz.html",
    "v76/images/Guitar-in-Dolomites.webp",
    "v76/images/Hero.webp",
    "v76/images/Hero_square.webp",
    "v76/images/Julia-skiing-Dolomites.webp",
    "v76/images/Stage_1.webp",
    "v76/images/Stage_2.webp",
    "v76/images/Stage_3.webp",
    "v76/images/Stage_4.webp",
    "v76/images/Stage_5.webp",
    "v76/images/Stage_6.webp",
    "v76/images/Stage_7.webp",
    "v76/images/Stage_8.webp",
    "v76/images/icons/app_icon_192.png",
    "v76/images/icons/app_icon_512.png",
    "v76/images/original/Guitar-in-Dolomites.png",
    "v76/images/original/Hero.jpg",
    "v76/images/original/Hero_square.jpg",
    "v76/images/original/Julia-skiing-Dolomites.png",
    "v76/images/original/Stage_1.png",
    "v76/images/original/Stage_2.png",
    "v76/images/original/Stage_3.png",
    "v76/images/original/Stage_4.png",
    "v76/images/original/Stage_5.png",
    "v76/images/original/Stage_6.png",
    "v76/images/original/Stage_7.png",
    "v76/images/original/Stage_8.png",
    "v76/images/password_expired_live.webp",
    "v76/images/podcasts.webp",
    "v76/impressum.html",
    "v76/index.html",
    "v76/js/DiaryService.js",
    "v76/js/Director.js",
    "v76/js/Main 20260319_1300.js",
    "v76/js/Main.js",
    "v76/js/PickerDrum.js",
    "v76/js/Player 20260319_1300.js",
    "v76/js/Player.js",
    "v76/js/SongCollection 20260319_1400.js",
    "v76/js/SongCollection.js",
    "v76/js/SongService.js",
    "v76/js/VersionCore.js",
    "v76/js/ffmpeg.min.js",
    "v76/js/lucide.js",
    "v76/js/tailwindcss.js",
    "v76/legal_notice.html",
    "v76/manifest.json",
    "v76/privacy_policy.html"
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
