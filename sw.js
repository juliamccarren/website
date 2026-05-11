const STATIC_CACHE = 'julia-site-v72';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v72/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v72/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v72/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v72/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v72/artwork/a_slow_blossoming_rose.webp",
    "v72/artwork/alejandro.webp",
    "v72/artwork/antitoxic.webp",
    "v72/artwork/autumns_whisper.webp",
    "v72/artwork/avalanche.webp",
    "v72/artwork/betrayal.webp",
    "v72/artwork/big_dreams_shine.webp",
    "v72/artwork/big_dreams_shine_live.webp",
    "v72/artwork/bite_of_the_night.webp",
    "v72/artwork/boring.webp",
    "v72/artwork/brooklyn.webp",
    "v72/artwork/buckn_the_bain.webp",
    "v72/artwork/cheerleader.webp",
    "v72/artwork/coffee_in_amsterdam.webp",
    "v72/artwork/cool_fire.webp",
    "v72/artwork/date_disaster.webp",
    "v72/artwork/deep_blue.webp",
    "v72/artwork/deepdive_1.webp",
    "v72/artwork/deepdive_2.webp",
    "v72/artwork/default.webp",
    "v72/artwork/digital_ghost.webp",
    "v72/artwork/disco_flashback.webp",
    "v72/artwork/disco_flashback_2.webp",
    "v72/artwork/disposable.webp",
    "v72/artwork/distortion.webp",
    "v72/artwork/drunk_not_dumb.webp",
    "v72/artwork/dynamite.webp",
    "v72/artwork/electric_hearts.webp",
    "v72/artwork/embers_and_sparks.webp",
    "v72/artwork/fences_down.webp",
    "v72/artwork/first_steps_to_stardom.webp",
    "v72/artwork/fog_of_fear.webp",
    "v72/artwork/forever.webp",
    "v72/artwork/four_chords_later.webp",
    "v72/artwork/friday_night.webp",
    "v72/artwork/from_first_steps_to_stardom.webp",
    "v72/artwork/frost_and_friction.webp",
    "v72/artwork/frozen_heart.webp",
    "v72/artwork/garage_band.webp",
    "v72/artwork/ghost_in_the_garden.webp",
    "v72/artwork/god_save_the_king.webp",
    "v72/artwork/golden_days.webp",
    "v72/artwork/good_enough.webp",
    "v72/artwork/happy_birthday_in_heaven.webp",
    "v72/artwork/haunted_haven.webp",
    "v72/artwork/heart_of_fire_and_ice.webp",
    "v72/artwork/her_first_truck.webp",
    "v72/artwork/hes_still_here.webp",
    "v72/artwork/home_now.webp",
    "v72/artwork/howling_wolves.webp",
    "v72/artwork/hypocrites.webp",
    "v72/artwork/i_hate_you.webp",
    "v72/artwork/i_love_school.webp",
    "v72/artwork/i_scream.webp",
    "v72/artwork/insatiable.webp",
    "v72/artwork/insult_the_ones_you_love.webp",
    "v72/artwork/introverted_girl.webp",
    "v72/artwork/jet_set.webp",
    "v72/artwork/just_a_vibe.webp",
    "v72/artwork/just_wants_to_be_loved.webp",
    "v72/artwork/last_exit.webp",
    "v72/artwork/left_lane_legend.webp",
    "v72/artwork/little_butterflies.webp",
    "v72/artwork/luck_for_granted.webp",
    "v72/artwork/maybe_they_knew.webp",
    "v72/artwork/mind_the_gap.webp",
    "v72/artwork/my_foundation.webp",
    "v72/artwork/my_sweet_little_star.webp",
    "v72/artwork/need_for_speed.webp",
    "v72/artwork/one_in_a_quarter_billion.webp",
    "v72/artwork/paradox_love.webp",
    "v72/artwork/password_expired.webp",
    "v72/artwork/password_expired_live.webp",
    "v72/artwork/peaks_of_gold.webp",
    "v72/artwork/private_lake.webp",
    "v72/artwork/radio_trash.webp",
    "v72/artwork/ride_the_groove.webp",
    "v72/artwork/rocker_songwriter.webp",
    "v72/artwork/sailing_on_open_water.webp",
    "v72/artwork/sanctified_sinner.webp",
    "v72/artwork/sanctuary_riot.webp",
    "v72/artwork/schools_out.webp",
    "v72/artwork/set_the_spirit_free.webp",
    "v72/artwork/siblings.webp",
    "v72/artwork/skeleton_dance.webp",
    "v72/artwork/slippery_road.webp",
    "v72/artwork/social_lubricant.webp",
    "v72/artwork/soulmate.webp",
    "v72/artwork/spooky.webp",
    "v72/artwork/spring.webp",
    "v72/artwork/storm_of_the_abyss.webp",
    "v72/artwork/summers_farewell.webp",
    "v72/artwork/tabby_gonzalez.webp",
    "v72/artwork/the_city_i_long_for.webp",
    "v72/artwork/the_dive.webp",
    "v72/artwork/the_hard_way.webp",
    "v72/artwork/the_hook.webp",
    "v72/artwork/the_quiet_kind.webp",
    "v72/artwork/the_rhythm_of_the_fox.webp",
    "v72/artwork/the_rhythm_of_you.webp",
    "v72/artwork/the_sharpened_bow.webp",
    "v72/artwork/the_sirens_anchor.webp",
    "v72/artwork/the_soft_return.webp",
    "v72/artwork/the_steel_winged_swan.webp",
    "v72/artwork/this_is_fine.webp",
    "v72/artwork/tide_on_stone.webp",
    "v72/artwork/toccata.webp",
    "v72/artwork/trick_or_treat.webp",
    "v72/artwork/uncaged.webp",
    "v72/artwork/upon_a_winding_trail.webp",
    "v72/artwork/venezia.webp",
    "v72/artwork/verona.webp",
    "v72/artwork/weekend.webp",
    "v72/artwork/whiteout.webp",
    "v72/artwork/winterstorm.webp",
    "v72/datenschutz.html",
    "v72/images/Guitar-in-Dolomites.webp",
    "v72/images/Hero.webp",
    "v72/images/Hero_square.webp",
    "v72/images/Julia-skiing-Dolomites.webp",
    "v72/images/Stage_1.webp",
    "v72/images/Stage_2.webp",
    "v72/images/Stage_3.webp",
    "v72/images/Stage_4.webp",
    "v72/images/Stage_5.webp",
    "v72/images/Stage_6.webp",
    "v72/images/Stage_7.webp",
    "v72/images/Stage_8.webp",
    "v72/images/icons/app_icon_192.png",
    "v72/images/icons/app_icon_512.png",
    "v72/images/original/Guitar-in-Dolomites.png",
    "v72/images/original/Hero.jpg",
    "v72/images/original/Hero_square.jpg",
    "v72/images/original/Julia-skiing-Dolomites.png",
    "v72/images/original/Stage_1.png",
    "v72/images/original/Stage_2.png",
    "v72/images/original/Stage_3.png",
    "v72/images/original/Stage_4.png",
    "v72/images/original/Stage_5.png",
    "v72/images/original/Stage_6.png",
    "v72/images/original/Stage_7.png",
    "v72/images/original/Stage_8.png",
    "v72/images/password_expired_live.webp",
    "v72/images/podcasts.webp",
    "v72/impressum.html",
    "v72/index.html",
    "v72/js/DiaryService.js",
    "v72/js/Director.js",
    "v72/js/Main 20260319_1300.js",
    "v72/js/Main.js",
    "v72/js/PickerDrum.js",
    "v72/js/Player 20260319_1300.js",
    "v72/js/Player.js",
    "v72/js/SongCollection 20260319_1400.js",
    "v72/js/SongCollection.js",
    "v72/js/SongService.js",
    "v72/js/VersionCore.js",
    "v72/js/ffmpeg.min.js",
    "v72/js/lucide.js",
    "v72/js/tailwindcss.js",
    "v72/legal_notice.html",
    "v72/manifest.json",
    "v72/privacy_policy.html"
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
