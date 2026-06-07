const STATIC_CACHE = 'julia-site-v81';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v81/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v81/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v81/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v81/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v81/artwork/a_slow_blossoming_rose.webp",
    "v81/artwork/alejandro.webp",
    "v81/artwork/antitoxic.webp",
    "v81/artwork/autumns_whisper.webp",
    "v81/artwork/avalanche.webp",
    "v81/artwork/betrayal.webp",
    "v81/artwork/big_dreams_shine.webp",
    "v81/artwork/big_dreams_shine_live.webp",
    "v81/artwork/bite_of_the_night.webp",
    "v81/artwork/boring.webp",
    "v81/artwork/brooklyn.webp",
    "v81/artwork/buckn_the_bain.webp",
    "v81/artwork/cheerleader.webp",
    "v81/artwork/coffee_in_amsterdam.webp",
    "v81/artwork/cool_fire.webp",
    "v81/artwork/date_disaster.webp",
    "v81/artwork/deep_blue.webp",
    "v81/artwork/deepdive_1.webp",
    "v81/artwork/deepdive_2.webp",
    "v81/artwork/default.webp",
    "v81/artwork/digital_ghost.webp",
    "v81/artwork/disco_flashback.webp",
    "v81/artwork/disco_flashback_2.webp",
    "v81/artwork/disposable.webp",
    "v81/artwork/distortion.webp",
    "v81/artwork/drunk_not_dumb.webp",
    "v81/artwork/dynamite.webp",
    "v81/artwork/electric_hearts.webp",
    "v81/artwork/embers_and_sparks.webp",
    "v81/artwork/fences_down.webp",
    "v81/artwork/first_steps_to_stardom.webp",
    "v81/artwork/fog_of_fear.webp",
    "v81/artwork/forever.webp",
    "v81/artwork/four_chords_later.webp",
    "v81/artwork/friday_night.webp",
    "v81/artwork/from_first_steps_to_stardom.webp",
    "v81/artwork/frost_and_friction.webp",
    "v81/artwork/frozen_heart.webp",
    "v81/artwork/garage_band.webp",
    "v81/artwork/ghost_in_the_garden.webp",
    "v81/artwork/god_save_the_king.webp",
    "v81/artwork/golden_days.webp",
    "v81/artwork/good_enough.webp",
    "v81/artwork/happy_birthday_in_heaven.webp",
    "v81/artwork/haunted_haven.webp",
    "v81/artwork/heart_of_fire_and_ice.webp",
    "v81/artwork/her_first_truck.webp",
    "v81/artwork/hes_still_here.webp",
    "v81/artwork/home_now.webp",
    "v81/artwork/howling_wolves.webp",
    "v81/artwork/hypocrites.webp",
    "v81/artwork/i_hate_you.webp",
    "v81/artwork/i_love_school.webp",
    "v81/artwork/i_scream.webp",
    "v81/artwork/insatiable.webp",
    "v81/artwork/insult_the_ones_you_love.webp",
    "v81/artwork/introverted_girl.webp",
    "v81/artwork/jet_set.webp",
    "v81/artwork/julia_and_friends.webp",
    "v81/artwork/just_a_vibe.webp",
    "v81/artwork/just_wants_to_be_loved.webp",
    "v81/artwork/last_exit.webp",
    "v81/artwork/left_lane_legend.webp",
    "v81/artwork/little_butterflies.webp",
    "v81/artwork/luck_for_granted.webp",
    "v81/artwork/maybe_they_knew.webp",
    "v81/artwork/mind_the_gap.webp",
    "v81/artwork/my_foundation.webp",
    "v81/artwork/my_sweet_little_star.webp",
    "v81/artwork/need_for_speed.webp",
    "v81/artwork/nice_girl.webp",
    "v81/artwork/one_in_a_quarter_billion.webp",
    "v81/artwork/paradox_love.webp",
    "v81/artwork/password_expired.webp",
    "v81/artwork/password_expired_live.webp",
    "v81/artwork/peaks_of_gold.webp",
    "v81/artwork/private_lake.webp",
    "v81/artwork/radio_trash.webp",
    "v81/artwork/ride_the_groove.webp",
    "v81/artwork/rocker_songwriter.webp",
    "v81/artwork/sailing_on_open_water.webp",
    "v81/artwork/sanctified_sinner.webp",
    "v81/artwork/sanctuary_riot.webp",
    "v81/artwork/schools_out.webp",
    "v81/artwork/set_the_spirit_free.webp",
    "v81/artwork/siblings.webp",
    "v81/artwork/skeleton_dance.webp",
    "v81/artwork/slippery_road.webp",
    "v81/artwork/social_lubricant.webp",
    "v81/artwork/soulmate.webp",
    "v81/artwork/southern_belle.webp",
    "v81/artwork/spooky.webp",
    "v81/artwork/spring.webp",
    "v81/artwork/storm_of_the_abyss.webp",
    "v81/artwork/summers_farewell.webp",
    "v81/artwork/tabby_gonzalez.webp",
    "v81/artwork/the_city_i_long_for.webp",
    "v81/artwork/the_dive.webp",
    "v81/artwork/the_hard_way.webp",
    "v81/artwork/the_hook.webp",
    "v81/artwork/the_quiet_kind.webp",
    "v81/artwork/the_rhythm_of_the_fox.webp",
    "v81/artwork/the_rhythm_of_you.webp",
    "v81/artwork/the_sharpened_bow.webp",
    "v81/artwork/the_sirens_anchor.webp",
    "v81/artwork/the_soft_return.webp",
    "v81/artwork/the_steel_winged_swan.webp",
    "v81/artwork/this_is_fine.webp",
    "v81/artwork/tide_on_stone.webp",
    "v81/artwork/toccata.webp",
    "v81/artwork/trick_or_treat.webp",
    "v81/artwork/uncaged.webp",
    "v81/artwork/upon_a_winding_trail.webp",
    "v81/artwork/venezia.webp",
    "v81/artwork/verona.webp",
    "v81/artwork/weekend.webp",
    "v81/artwork/whiteout.webp",
    "v81/artwork/winterstorm.webp",
    "v81/datenschutz.html",
    "v81/images/Guitar-in-Dolomites.webp",
    "v81/images/Hero.webp",
    "v81/images/Hero_square.webp",
    "v81/images/Julia-skiing-Dolomites.webp",
    "v81/images/Stage_1.webp",
    "v81/images/Stage_2.webp",
    "v81/images/Stage_3.webp",
    "v81/images/Stage_4.webp",
    "v81/images/Stage_5.webp",
    "v81/images/Stage_6.webp",
    "v81/images/Stage_7.webp",
    "v81/images/Stage_8.webp",
    "v81/images/icons/app_icon_192.png",
    "v81/images/icons/app_icon_512.png",
    "v81/images/original/Guitar-in-Dolomites.png",
    "v81/images/original/Hero.jpg",
    "v81/images/original/Hero_square.jpg",
    "v81/images/original/Julia-skiing-Dolomites.png",
    "v81/images/original/Stage_1.png",
    "v81/images/original/Stage_2.png",
    "v81/images/original/Stage_3.png",
    "v81/images/original/Stage_4.png",
    "v81/images/original/Stage_5.png",
    "v81/images/original/Stage_6.png",
    "v81/images/original/Stage_7.png",
    "v81/images/original/Stage_8.png",
    "v81/images/password_expired_live.webp",
    "v81/images/podcasts.webp",
    "v81/images/southern_belle.webp",
    "v81/impressum.html",
    "v81/index.html",
    "v81/js/DiaryService.js",
    "v81/js/Director.js",
    "v81/js/Main 20260319_1300.js",
    "v81/js/Main.js",
    "v81/js/PickerDrum.js",
    "v81/js/Player 20260319_1300.js",
    "v81/js/Player.js",
    "v81/js/SongCollection 20260319_1400.js",
    "v81/js/SongCollection.js",
    "v81/js/SongService.js",
    "v81/js/VersionCore.js",
    "v81/js/ffmpeg.min.js",
    "v81/js/lucide.js",
    "v81/js/tailwindcss.js",
    "v81/legal_notice.html",
    "v81/manifest.json",
    "v81/privacy_policy.html"
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
