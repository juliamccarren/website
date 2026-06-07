const STATIC_CACHE = 'julia-site-v82';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v82/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v82/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v82/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v82/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v82/artwork/a_slow_blossoming_rose.webp",
    "v82/artwork/alejandro.webp",
    "v82/artwork/antitoxic.webp",
    "v82/artwork/autumns_whisper.webp",
    "v82/artwork/avalanche.webp",
    "v82/artwork/betrayal.webp",
    "v82/artwork/big_dreams_shine.webp",
    "v82/artwork/big_dreams_shine_live.webp",
    "v82/artwork/bite_of_the_night.webp",
    "v82/artwork/boring.webp",
    "v82/artwork/brooklyn.webp",
    "v82/artwork/buckn_the_bain.webp",
    "v82/artwork/cheerleader.webp",
    "v82/artwork/coffee_in_amsterdam.webp",
    "v82/artwork/cool_fire.webp",
    "v82/artwork/date_disaster.webp",
    "v82/artwork/deep_blue.webp",
    "v82/artwork/deepdive_1.webp",
    "v82/artwork/deepdive_2.webp",
    "v82/artwork/default.webp",
    "v82/artwork/digital_ghost.webp",
    "v82/artwork/disco_flashback.webp",
    "v82/artwork/disco_flashback_2.webp",
    "v82/artwork/disposable.webp",
    "v82/artwork/distortion.webp",
    "v82/artwork/drunk_not_dumb.webp",
    "v82/artwork/dynamite.webp",
    "v82/artwork/electric_hearts.webp",
    "v82/artwork/embers_and_sparks.webp",
    "v82/artwork/fences_down.webp",
    "v82/artwork/first_steps_to_stardom.webp",
    "v82/artwork/fog_of_fear.webp",
    "v82/artwork/forever.webp",
    "v82/artwork/four_chords_later.webp",
    "v82/artwork/friday_night.webp",
    "v82/artwork/from_first_steps_to_stardom.webp",
    "v82/artwork/frost_and_friction.webp",
    "v82/artwork/frozen_heart.webp",
    "v82/artwork/garage_band.webp",
    "v82/artwork/ghost_in_the_garden.webp",
    "v82/artwork/god_save_the_king.webp",
    "v82/artwork/golden_days.webp",
    "v82/artwork/good_enough.webp",
    "v82/artwork/happy_birthday_in_heaven.webp",
    "v82/artwork/haunted_haven.webp",
    "v82/artwork/heart_of_fire_and_ice.webp",
    "v82/artwork/her_first_truck.webp",
    "v82/artwork/hes_still_here.webp",
    "v82/artwork/home_now.webp",
    "v82/artwork/howling_wolves.webp",
    "v82/artwork/hypocrites.webp",
    "v82/artwork/i_hate_you.webp",
    "v82/artwork/i_love_school.webp",
    "v82/artwork/i_scream.webp",
    "v82/artwork/insatiable.webp",
    "v82/artwork/insult_the_ones_you_love.webp",
    "v82/artwork/introverted_girl.webp",
    "v82/artwork/jet_set.webp",
    "v82/artwork/julia_and_friends.webp",
    "v82/artwork/just_a_vibe.webp",
    "v82/artwork/just_wants_to_be_loved.webp",
    "v82/artwork/last_exit.webp",
    "v82/artwork/left_lane_legend.webp",
    "v82/artwork/little_butterflies.webp",
    "v82/artwork/luck_for_granted.webp",
    "v82/artwork/maybe_they_knew.webp",
    "v82/artwork/mind_the_gap.webp",
    "v82/artwork/my_foundation.webp",
    "v82/artwork/my_sweet_little_star.webp",
    "v82/artwork/need_for_speed.webp",
    "v82/artwork/nice_girl.webp",
    "v82/artwork/one_in_a_quarter_billion.webp",
    "v82/artwork/paradox_love.webp",
    "v82/artwork/password_expired.webp",
    "v82/artwork/password_expired_live.webp",
    "v82/artwork/peaks_of_gold.webp",
    "v82/artwork/private_lake.webp",
    "v82/artwork/radio_trash.webp",
    "v82/artwork/ride_the_groove.webp",
    "v82/artwork/rocker_songwriter.webp",
    "v82/artwork/sailing_on_open_water.webp",
    "v82/artwork/sanctified_sinner.webp",
    "v82/artwork/sanctuary_riot.webp",
    "v82/artwork/schools_out.webp",
    "v82/artwork/set_the_spirit_free.webp",
    "v82/artwork/siblings.webp",
    "v82/artwork/skeleton_dance.webp",
    "v82/artwork/slippery_road.webp",
    "v82/artwork/social_lubricant.webp",
    "v82/artwork/soulmate.webp",
    "v82/artwork/southern_belle.webp",
    "v82/artwork/spooky.webp",
    "v82/artwork/spring.webp",
    "v82/artwork/storm_of_the_abyss.webp",
    "v82/artwork/summers_farewell.webp",
    "v82/artwork/tabby_gonzalez.webp",
    "v82/artwork/the_city_i_long_for.webp",
    "v82/artwork/the_dive.webp",
    "v82/artwork/the_hard_way.webp",
    "v82/artwork/the_hook.webp",
    "v82/artwork/the_quiet_kind.webp",
    "v82/artwork/the_rhythm_of_the_fox.webp",
    "v82/artwork/the_rhythm_of_you.webp",
    "v82/artwork/the_sharpened_bow.webp",
    "v82/artwork/the_sirens_anchor.webp",
    "v82/artwork/the_soft_return.webp",
    "v82/artwork/the_steel_winged_swan.webp",
    "v82/artwork/this_is_fine.webp",
    "v82/artwork/tide_on_stone.webp",
    "v82/artwork/toccata.webp",
    "v82/artwork/trick_or_treat.webp",
    "v82/artwork/uncaged.webp",
    "v82/artwork/upon_a_winding_trail.webp",
    "v82/artwork/venezia.webp",
    "v82/artwork/verona.webp",
    "v82/artwork/weekend.webp",
    "v82/artwork/whiteout.webp",
    "v82/artwork/winterstorm.webp",
    "v82/datenschutz.html",
    "v82/images/Guitar-in-Dolomites.webp",
    "v82/images/Hero.webp",
    "v82/images/Hero_square.webp",
    "v82/images/Julia-skiing-Dolomites.webp",
    "v82/images/Stage_1.webp",
    "v82/images/Stage_2.webp",
    "v82/images/Stage_3.webp",
    "v82/images/Stage_4.webp",
    "v82/images/Stage_5.webp",
    "v82/images/Stage_6.webp",
    "v82/images/Stage_7.webp",
    "v82/images/Stage_8.webp",
    "v82/images/icons/app_icon_192.png",
    "v82/images/icons/app_icon_512.png",
    "v82/images/original/Guitar-in-Dolomites.png",
    "v82/images/original/Hero.jpg",
    "v82/images/original/Hero_square.jpg",
    "v82/images/original/Julia-skiing-Dolomites.png",
    "v82/images/original/Stage_1.png",
    "v82/images/original/Stage_2.png",
    "v82/images/original/Stage_3.png",
    "v82/images/original/Stage_4.png",
    "v82/images/original/Stage_5.png",
    "v82/images/original/Stage_6.png",
    "v82/images/original/Stage_7.png",
    "v82/images/original/Stage_8.png",
    "v82/images/password_expired_live.webp",
    "v82/images/podcasts.webp",
    "v82/images/southern_belle.webp",
    "v82/impressum.html",
    "v82/index.html",
    "v82/js/DiaryService.js",
    "v82/js/Director.js",
    "v82/js/Main 20260319_1300.js",
    "v82/js/Main.js",
    "v82/js/PickerDrum.js",
    "v82/js/Player 20260319_1300.js",
    "v82/js/Player.js",
    "v82/js/SongCollection 20260319_1400.js",
    "v82/js/SongCollection.js",
    "v82/js/SongService.js",
    "v82/js/VersionCore.js",
    "v82/js/ffmpeg.min.js",
    "v82/js/lucide.js",
    "v82/js/tailwindcss.js",
    "v82/legal_notice.html",
    "v82/manifest.json",
    "v82/privacy_policy.html"
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
