const STATIC_CACHE = 'julia-site-v75';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v75/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v75/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v75/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v75/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v75/artwork/a_slow_blossoming_rose.webp",
    "v75/artwork/alejandro.webp",
    "v75/artwork/antitoxic.webp",
    "v75/artwork/autumns_whisper.webp",
    "v75/artwork/avalanche.webp",
    "v75/artwork/betrayal.webp",
    "v75/artwork/big_dreams_shine.webp",
    "v75/artwork/big_dreams_shine_live.webp",
    "v75/artwork/bite_of_the_night.webp",
    "v75/artwork/boring.webp",
    "v75/artwork/brooklyn.webp",
    "v75/artwork/buckn_the_bain.webp",
    "v75/artwork/cheerleader.webp",
    "v75/artwork/coffee_in_amsterdam.webp",
    "v75/artwork/cool_fire.webp",
    "v75/artwork/date_disaster.webp",
    "v75/artwork/deep_blue.webp",
    "v75/artwork/deepdive_1.webp",
    "v75/artwork/deepdive_2.webp",
    "v75/artwork/default.webp",
    "v75/artwork/digital_ghost.webp",
    "v75/artwork/disco_flashback.webp",
    "v75/artwork/disco_flashback_2.webp",
    "v75/artwork/disposable.webp",
    "v75/artwork/distortion.webp",
    "v75/artwork/drunk_not_dumb.webp",
    "v75/artwork/dynamite.webp",
    "v75/artwork/electric_hearts.webp",
    "v75/artwork/embers_and_sparks.webp",
    "v75/artwork/fences_down.webp",
    "v75/artwork/first_steps_to_stardom.webp",
    "v75/artwork/fog_of_fear.webp",
    "v75/artwork/forever.webp",
    "v75/artwork/four_chords_later.webp",
    "v75/artwork/friday_night.webp",
    "v75/artwork/from_first_steps_to_stardom.webp",
    "v75/artwork/frost_and_friction.webp",
    "v75/artwork/frozen_heart.webp",
    "v75/artwork/garage_band.webp",
    "v75/artwork/ghost_in_the_garden.webp",
    "v75/artwork/god_save_the_king.webp",
    "v75/artwork/golden_days.webp",
    "v75/artwork/good_enough.webp",
    "v75/artwork/happy_birthday_in_heaven.webp",
    "v75/artwork/haunted_haven.webp",
    "v75/artwork/heart_of_fire_and_ice.webp",
    "v75/artwork/her_first_truck.webp",
    "v75/artwork/hes_still_here.webp",
    "v75/artwork/home_now.webp",
    "v75/artwork/howling_wolves.webp",
    "v75/artwork/hypocrites.webp",
    "v75/artwork/i_hate_you.webp",
    "v75/artwork/i_love_school.webp",
    "v75/artwork/i_scream.webp",
    "v75/artwork/insatiable.webp",
    "v75/artwork/insult_the_ones_you_love.webp",
    "v75/artwork/introverted_girl.webp",
    "v75/artwork/jet_set.webp",
    "v75/artwork/just_a_vibe.webp",
    "v75/artwork/just_wants_to_be_loved.webp",
    "v75/artwork/last_exit.webp",
    "v75/artwork/left_lane_legend.webp",
    "v75/artwork/little_butterflies.webp",
    "v75/artwork/luck_for_granted.webp",
    "v75/artwork/maybe_they_knew.webp",
    "v75/artwork/mind_the_gap.webp",
    "v75/artwork/my_foundation.webp",
    "v75/artwork/my_sweet_little_star.webp",
    "v75/artwork/need_for_speed.webp",
    "v75/artwork/nice_girl.webp",
    "v75/artwork/one_in_a_quarter_billion.webp",
    "v75/artwork/paradox_love.webp",
    "v75/artwork/password_expired.webp",
    "v75/artwork/password_expired_live.webp",
    "v75/artwork/peaks_of_gold.webp",
    "v75/artwork/private_lake.webp",
    "v75/artwork/radio_trash.webp",
    "v75/artwork/ride_the_groove.webp",
    "v75/artwork/rocker_songwriter.webp",
    "v75/artwork/sailing_on_open_water.webp",
    "v75/artwork/sanctified_sinner.webp",
    "v75/artwork/sanctuary_riot.webp",
    "v75/artwork/schools_out.webp",
    "v75/artwork/set_the_spirit_free.webp",
    "v75/artwork/siblings.webp",
    "v75/artwork/skeleton_dance.webp",
    "v75/artwork/slippery_road.webp",
    "v75/artwork/social_lubricant.webp",
    "v75/artwork/soulmate.webp",
    "v75/artwork/spooky.webp",
    "v75/artwork/spring.webp",
    "v75/artwork/storm_of_the_abyss.webp",
    "v75/artwork/summers_farewell.webp",
    "v75/artwork/tabby_gonzalez.webp",
    "v75/artwork/the_city_i_long_for.webp",
    "v75/artwork/the_dive.webp",
    "v75/artwork/the_hard_way.webp",
    "v75/artwork/the_hook.webp",
    "v75/artwork/the_quiet_kind.webp",
    "v75/artwork/the_rhythm_of_the_fox.webp",
    "v75/artwork/the_rhythm_of_you.webp",
    "v75/artwork/the_sharpened_bow.webp",
    "v75/artwork/the_sirens_anchor.webp",
    "v75/artwork/the_soft_return.webp",
    "v75/artwork/the_steel_winged_swan.webp",
    "v75/artwork/this_is_fine.webp",
    "v75/artwork/tide_on_stone.webp",
    "v75/artwork/toccata.webp",
    "v75/artwork/trick_or_treat.webp",
    "v75/artwork/uncaged.webp",
    "v75/artwork/upon_a_winding_trail.webp",
    "v75/artwork/venezia.webp",
    "v75/artwork/verona.webp",
    "v75/artwork/weekend.webp",
    "v75/artwork/whiteout.webp",
    "v75/artwork/winterstorm.webp",
    "v75/datenschutz.html",
    "v75/images/Guitar-in-Dolomites.webp",
    "v75/images/Hero.webp",
    "v75/images/Hero_square.webp",
    "v75/images/Julia-skiing-Dolomites.webp",
    "v75/images/Stage_1.webp",
    "v75/images/Stage_2.webp",
    "v75/images/Stage_3.webp",
    "v75/images/Stage_4.webp",
    "v75/images/Stage_5.webp",
    "v75/images/Stage_6.webp",
    "v75/images/Stage_7.webp",
    "v75/images/Stage_8.webp",
    "v75/images/icons/app_icon_192.png",
    "v75/images/icons/app_icon_512.png",
    "v75/images/original/Guitar-in-Dolomites.png",
    "v75/images/original/Hero.jpg",
    "v75/images/original/Hero_square.jpg",
    "v75/images/original/Julia-skiing-Dolomites.png",
    "v75/images/original/Stage_1.png",
    "v75/images/original/Stage_2.png",
    "v75/images/original/Stage_3.png",
    "v75/images/original/Stage_4.png",
    "v75/images/original/Stage_5.png",
    "v75/images/original/Stage_6.png",
    "v75/images/original/Stage_7.png",
    "v75/images/original/Stage_8.png",
    "v75/images/password_expired_live.webp",
    "v75/images/podcasts.webp",
    "v75/impressum.html",
    "v75/index.html",
    "v75/js/DiaryService.js",
    "v75/js/Director.js",
    "v75/js/Main 20260319_1300.js",
    "v75/js/Main.js",
    "v75/js/PickerDrum.js",
    "v75/js/Player 20260319_1300.js",
    "v75/js/Player.js",
    "v75/js/SongCollection 20260319_1400.js",
    "v75/js/SongCollection.js",
    "v75/js/SongService.js",
    "v75/js/VersionCore.js",
    "v75/js/ffmpeg.min.js",
    "v75/js/lucide.js",
    "v75/js/tailwindcss.js",
    "v75/legal_notice.html",
    "v75/manifest.json",
    "v75/privacy_policy.html"
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
