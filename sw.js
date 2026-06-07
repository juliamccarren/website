const STATIC_CACHE = 'julia-site-v84';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v84/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v84/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v84/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v84/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v84/artwork/a_slow_blossoming_rose.webp",
    "v84/artwork/alejandro.webp",
    "v84/artwork/antitoxic.webp",
    "v84/artwork/autumns_whisper.webp",
    "v84/artwork/avalanche.webp",
    "v84/artwork/betrayal.webp",
    "v84/artwork/big_dreams_shine.webp",
    "v84/artwork/big_dreams_shine_live.webp",
    "v84/artwork/bite_of_the_night.webp",
    "v84/artwork/boring.webp",
    "v84/artwork/brooklyn.webp",
    "v84/artwork/buckn_the_bain.webp",
    "v84/artwork/cheerleader.webp",
    "v84/artwork/coffee_in_amsterdam.webp",
    "v84/artwork/cool_fire.webp",
    "v84/artwork/date_disaster.webp",
    "v84/artwork/deep_blue.webp",
    "v84/artwork/deepdive_1.webp",
    "v84/artwork/deepdive_2.webp",
    "v84/artwork/default.webp",
    "v84/artwork/digital_ghost.webp",
    "v84/artwork/disco_flashback.webp",
    "v84/artwork/disco_flashback_2.webp",
    "v84/artwork/disposable.webp",
    "v84/artwork/distortion.webp",
    "v84/artwork/drunk_not_dumb.webp",
    "v84/artwork/dynamite.webp",
    "v84/artwork/electric_hearts.webp",
    "v84/artwork/embers_and_sparks.webp",
    "v84/artwork/fences_down.webp",
    "v84/artwork/first_steps_to_stardom.webp",
    "v84/artwork/fog_of_fear.webp",
    "v84/artwork/forever.webp",
    "v84/artwork/four_chords_later.webp",
    "v84/artwork/friday_night.webp",
    "v84/artwork/from_first_steps_to_stardom.webp",
    "v84/artwork/frost_and_friction.webp",
    "v84/artwork/frozen_heart.webp",
    "v84/artwork/garage_band.webp",
    "v84/artwork/ghost_in_the_garden.webp",
    "v84/artwork/god_save_the_king.webp",
    "v84/artwork/golden_days.webp",
    "v84/artwork/good_enough.webp",
    "v84/artwork/happy_birthday_in_heaven.webp",
    "v84/artwork/haunted_haven.webp",
    "v84/artwork/heart_of_fire_and_ice.webp",
    "v84/artwork/her_first_truck.webp",
    "v84/artwork/hes_still_here.webp",
    "v84/artwork/home_now.webp",
    "v84/artwork/howling_wolves.webp",
    "v84/artwork/hypocrites.webp",
    "v84/artwork/i_hate_you.webp",
    "v84/artwork/i_love_school.webp",
    "v84/artwork/i_scream.webp",
    "v84/artwork/insatiable.webp",
    "v84/artwork/insult_the_ones_you_love.webp",
    "v84/artwork/introverted_girl.webp",
    "v84/artwork/jet_set.webp",
    "v84/artwork/julia_and_friends.webp",
    "v84/artwork/just_a_vibe.webp",
    "v84/artwork/just_wants_to_be_loved.webp",
    "v84/artwork/last_exit.webp",
    "v84/artwork/left_lane_legend.webp",
    "v84/artwork/little_butterflies.webp",
    "v84/artwork/luck_for_granted.webp",
    "v84/artwork/maybe_they_knew.webp",
    "v84/artwork/mind_the_gap.webp",
    "v84/artwork/my_foundation.webp",
    "v84/artwork/my_sweet_little_star.webp",
    "v84/artwork/need_for_speed.webp",
    "v84/artwork/nice_girl.webp",
    "v84/artwork/one_in_a_quarter_billion.webp",
    "v84/artwork/paradox_love.webp",
    "v84/artwork/password_expired.webp",
    "v84/artwork/password_expired_live.webp",
    "v84/artwork/peaks_of_gold.webp",
    "v84/artwork/private_lake.webp",
    "v84/artwork/radio_trash.webp",
    "v84/artwork/ride_the_groove.webp",
    "v84/artwork/rocker_songwriter.webp",
    "v84/artwork/sailing_on_open_water.webp",
    "v84/artwork/sanctified_sinner.webp",
    "v84/artwork/sanctuary_riot.webp",
    "v84/artwork/schools_out.webp",
    "v84/artwork/set_the_spirit_free.webp",
    "v84/artwork/siblings.webp",
    "v84/artwork/skeleton_dance.webp",
    "v84/artwork/slippery_road.webp",
    "v84/artwork/social_lubricant.webp",
    "v84/artwork/soulmate.webp",
    "v84/artwork/southern_belle.webp",
    "v84/artwork/spooky.webp",
    "v84/artwork/spring.webp",
    "v84/artwork/storm_of_the_abyss.webp",
    "v84/artwork/summers_farewell.webp",
    "v84/artwork/tabby_gonzalez.webp",
    "v84/artwork/the_city_i_long_for.webp",
    "v84/artwork/the_dive.webp",
    "v84/artwork/the_hard_way.webp",
    "v84/artwork/the_hook.webp",
    "v84/artwork/the_quiet_kind.webp",
    "v84/artwork/the_rhythm_of_the_fox.webp",
    "v84/artwork/the_rhythm_of_you.webp",
    "v84/artwork/the_sharpened_bow.webp",
    "v84/artwork/the_sirens_anchor.webp",
    "v84/artwork/the_soft_return.webp",
    "v84/artwork/the_steel_winged_swan.webp",
    "v84/artwork/this_is_fine.webp",
    "v84/artwork/tide_on_stone.webp",
    "v84/artwork/toccata.webp",
    "v84/artwork/trick_or_treat.webp",
    "v84/artwork/uncaged.webp",
    "v84/artwork/upon_a_winding_trail.webp",
    "v84/artwork/venezia.webp",
    "v84/artwork/verona.webp",
    "v84/artwork/weekend.webp",
    "v84/artwork/whiteout.webp",
    "v84/artwork/winterstorm.webp",
    "v84/datenschutz.html",
    "v84/images/Guitar-in-Dolomites.webp",
    "v84/images/Hero.webp",
    "v84/images/Hero_square.webp",
    "v84/images/Julia-skiing-Dolomites.webp",
    "v84/images/Stage_1.webp",
    "v84/images/Stage_2.webp",
    "v84/images/Stage_3.webp",
    "v84/images/Stage_4.webp",
    "v84/images/Stage_5.webp",
    "v84/images/Stage_6.webp",
    "v84/images/Stage_7.webp",
    "v84/images/Stage_8.webp",
    "v84/images/icons/app_icon_192.png",
    "v84/images/icons/app_icon_512.png",
    "v84/images/original/Guitar-in-Dolomites.png",
    "v84/images/original/Hero.jpg",
    "v84/images/original/Hero_square.jpg",
    "v84/images/original/Julia-skiing-Dolomites.png",
    "v84/images/original/Stage_1.png",
    "v84/images/original/Stage_2.png",
    "v84/images/original/Stage_3.png",
    "v84/images/original/Stage_4.png",
    "v84/images/original/Stage_5.png",
    "v84/images/original/Stage_6.png",
    "v84/images/original/Stage_7.png",
    "v84/images/original/Stage_8.png",
    "v84/images/password_expired_live.webp",
    "v84/images/podcasts.webp",
    "v84/images/southern_belle.webp",
    "v84/impressum.html",
    "v84/index.html",
    "v84/js/DiaryService.js",
    "v84/js/Director.js",
    "v84/js/Main 20260319_1300.js",
    "v84/js/Main.js",
    "v84/js/PickerDrum.js",
    "v84/js/Player 20260319_1300.js",
    "v84/js/Player.js",
    "v84/js/SongCollection 20260319_1400.js",
    "v84/js/SongCollection.js",
    "v84/js/SongService.js",
    "v84/js/VersionCore.js",
    "v84/js/ffmpeg.min.js",
    "v84/js/lucide.js",
    "v84/js/tailwindcss.js",
    "v84/legal_notice.html",
    "v84/manifest.json",
    "v84/privacy_policy.html"
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
