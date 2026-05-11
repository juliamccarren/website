const STATIC_CACHE = 'julia-site-v73';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v73/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v73/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v73/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v73/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v73/artwork/a_slow_blossoming_rose.webp",
    "v73/artwork/alejandro.webp",
    "v73/artwork/antitoxic.webp",
    "v73/artwork/autumns_whisper.webp",
    "v73/artwork/avalanche.webp",
    "v73/artwork/betrayal.webp",
    "v73/artwork/big_dreams_shine.webp",
    "v73/artwork/big_dreams_shine_live.webp",
    "v73/artwork/bite_of_the_night.webp",
    "v73/artwork/boring.webp",
    "v73/artwork/brooklyn.webp",
    "v73/artwork/buckn_the_bain.webp",
    "v73/artwork/cheerleader.webp",
    "v73/artwork/coffee_in_amsterdam.webp",
    "v73/artwork/cool_fire.webp",
    "v73/artwork/date_disaster.webp",
    "v73/artwork/deep_blue.webp",
    "v73/artwork/deepdive_1.webp",
    "v73/artwork/deepdive_2.webp",
    "v73/artwork/default.webp",
    "v73/artwork/digital_ghost.webp",
    "v73/artwork/disco_flashback.webp",
    "v73/artwork/disco_flashback_2.webp",
    "v73/artwork/disposable.webp",
    "v73/artwork/distortion.webp",
    "v73/artwork/drunk_not_dumb.webp",
    "v73/artwork/dynamite.webp",
    "v73/artwork/electric_hearts.webp",
    "v73/artwork/embers_and_sparks.webp",
    "v73/artwork/fences_down.webp",
    "v73/artwork/first_steps_to_stardom.webp",
    "v73/artwork/fog_of_fear.webp",
    "v73/artwork/forever.webp",
    "v73/artwork/four_chords_later.webp",
    "v73/artwork/friday_night.webp",
    "v73/artwork/from_first_steps_to_stardom.webp",
    "v73/artwork/frost_and_friction.webp",
    "v73/artwork/frozen_heart.webp",
    "v73/artwork/garage_band.webp",
    "v73/artwork/ghost_in_the_garden.webp",
    "v73/artwork/god_save_the_king.webp",
    "v73/artwork/golden_days.webp",
    "v73/artwork/good_enough.webp",
    "v73/artwork/happy_birthday_in_heaven.webp",
    "v73/artwork/haunted_haven.webp",
    "v73/artwork/heart_of_fire_and_ice.webp",
    "v73/artwork/her_first_truck.webp",
    "v73/artwork/hes_still_here.webp",
    "v73/artwork/home_now.webp",
    "v73/artwork/howling_wolves.webp",
    "v73/artwork/hypocrites.webp",
    "v73/artwork/i_hate_you.webp",
    "v73/artwork/i_love_school.webp",
    "v73/artwork/i_scream.webp",
    "v73/artwork/insatiable.webp",
    "v73/artwork/insult_the_ones_you_love.webp",
    "v73/artwork/introverted_girl.webp",
    "v73/artwork/jet_set.webp",
    "v73/artwork/just_a_vibe.webp",
    "v73/artwork/just_wants_to_be_loved.webp",
    "v73/artwork/last_exit.webp",
    "v73/artwork/left_lane_legend.webp",
    "v73/artwork/little_butterflies.webp",
    "v73/artwork/luck_for_granted.webp",
    "v73/artwork/maybe_they_knew.webp",
    "v73/artwork/mind_the_gap.webp",
    "v73/artwork/my_foundation.webp",
    "v73/artwork/my_sweet_little_star.webp",
    "v73/artwork/need_for_speed.webp",
    "v73/artwork/one_in_a_quarter_billion.webp",
    "v73/artwork/paradox_love.webp",
    "v73/artwork/password_expired.webp",
    "v73/artwork/password_expired_live.webp",
    "v73/artwork/peaks_of_gold.webp",
    "v73/artwork/private_lake.webp",
    "v73/artwork/radio_trash.webp",
    "v73/artwork/ride_the_groove.webp",
    "v73/artwork/rocker_songwriter.webp",
    "v73/artwork/sailing_on_open_water.webp",
    "v73/artwork/sanctified_sinner.webp",
    "v73/artwork/sanctuary_riot.webp",
    "v73/artwork/schools_out.webp",
    "v73/artwork/set_the_spirit_free.webp",
    "v73/artwork/siblings.webp",
    "v73/artwork/skeleton_dance.webp",
    "v73/artwork/slippery_road.webp",
    "v73/artwork/social_lubricant.webp",
    "v73/artwork/soulmate.webp",
    "v73/artwork/spooky.webp",
    "v73/artwork/spring.webp",
    "v73/artwork/storm_of_the_abyss.webp",
    "v73/artwork/summers_farewell.webp",
    "v73/artwork/tabby_gonzalez.webp",
    "v73/artwork/the_city_i_long_for.webp",
    "v73/artwork/the_dive.webp",
    "v73/artwork/the_hard_way.webp",
    "v73/artwork/the_hook.webp",
    "v73/artwork/the_quiet_kind.webp",
    "v73/artwork/the_rhythm_of_the_fox.webp",
    "v73/artwork/the_rhythm_of_you.webp",
    "v73/artwork/the_sharpened_bow.webp",
    "v73/artwork/the_sirens_anchor.webp",
    "v73/artwork/the_soft_return.webp",
    "v73/artwork/the_steel_winged_swan.webp",
    "v73/artwork/this_is_fine.webp",
    "v73/artwork/tide_on_stone.webp",
    "v73/artwork/toccata.webp",
    "v73/artwork/trick_or_treat.webp",
    "v73/artwork/uncaged.webp",
    "v73/artwork/upon_a_winding_trail.webp",
    "v73/artwork/venezia.webp",
    "v73/artwork/verona.webp",
    "v73/artwork/weekend.webp",
    "v73/artwork/whiteout.webp",
    "v73/artwork/winterstorm.webp",
    "v73/datenschutz.html",
    "v73/images/Guitar-in-Dolomites.webp",
    "v73/images/Hero.webp",
    "v73/images/Hero_square.webp",
    "v73/images/Julia-skiing-Dolomites.webp",
    "v73/images/Stage_1.webp",
    "v73/images/Stage_2.webp",
    "v73/images/Stage_3.webp",
    "v73/images/Stage_4.webp",
    "v73/images/Stage_5.webp",
    "v73/images/Stage_6.webp",
    "v73/images/Stage_7.webp",
    "v73/images/Stage_8.webp",
    "v73/images/icons/app_icon_192.png",
    "v73/images/icons/app_icon_512.png",
    "v73/images/original/Guitar-in-Dolomites.png",
    "v73/images/original/Hero.jpg",
    "v73/images/original/Hero_square.jpg",
    "v73/images/original/Julia-skiing-Dolomites.png",
    "v73/images/original/Stage_1.png",
    "v73/images/original/Stage_2.png",
    "v73/images/original/Stage_3.png",
    "v73/images/original/Stage_4.png",
    "v73/images/original/Stage_5.png",
    "v73/images/original/Stage_6.png",
    "v73/images/original/Stage_7.png",
    "v73/images/original/Stage_8.png",
    "v73/images/password_expired_live.webp",
    "v73/images/podcasts.webp",
    "v73/impressum.html",
    "v73/index.html",
    "v73/js/DiaryService.js",
    "v73/js/Director.js",
    "v73/js/Main 20260319_1300.js",
    "v73/js/Main.js",
    "v73/js/PickerDrum.js",
    "v73/js/Player 20260319_1300.js",
    "v73/js/Player.js",
    "v73/js/SongCollection 20260319_1400.js",
    "v73/js/SongCollection.js",
    "v73/js/SongService.js",
    "v73/js/VersionCore.js",
    "v73/js/ffmpeg.min.js",
    "v73/js/lucide.js",
    "v73/js/tailwindcss.js",
    "v73/legal_notice.html",
    "v73/manifest.json",
    "v73/privacy_policy.html"
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
