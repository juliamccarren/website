const STATIC_CACHE = 'julia-site-v80';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v80/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v80/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v80/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v80/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v80/artwork/a_slow_blossoming_rose.webp",
    "v80/artwork/alejandro.webp",
    "v80/artwork/antitoxic.webp",
    "v80/artwork/autumns_whisper.webp",
    "v80/artwork/avalanche.webp",
    "v80/artwork/betrayal.webp",
    "v80/artwork/big_dreams_shine.webp",
    "v80/artwork/big_dreams_shine_live.webp",
    "v80/artwork/bite_of_the_night.webp",
    "v80/artwork/boring.webp",
    "v80/artwork/brooklyn.webp",
    "v80/artwork/buckn_the_bain.webp",
    "v80/artwork/cheerleader.webp",
    "v80/artwork/coffee_in_amsterdam.webp",
    "v80/artwork/cool_fire.webp",
    "v80/artwork/date_disaster.webp",
    "v80/artwork/deep_blue.webp",
    "v80/artwork/deepdive_1.webp",
    "v80/artwork/deepdive_2.webp",
    "v80/artwork/default.webp",
    "v80/artwork/digital_ghost.webp",
    "v80/artwork/disco_flashback.webp",
    "v80/artwork/disco_flashback_2.webp",
    "v80/artwork/disposable.webp",
    "v80/artwork/distortion.webp",
    "v80/artwork/drunk_not_dumb.webp",
    "v80/artwork/dynamite.webp",
    "v80/artwork/electric_hearts.webp",
    "v80/artwork/embers_and_sparks.webp",
    "v80/artwork/fences_down.webp",
    "v80/artwork/first_steps_to_stardom.webp",
    "v80/artwork/fog_of_fear.webp",
    "v80/artwork/forever.webp",
    "v80/artwork/four_chords_later.webp",
    "v80/artwork/friday_night.webp",
    "v80/artwork/from_first_steps_to_stardom.webp",
    "v80/artwork/frost_and_friction.webp",
    "v80/artwork/frozen_heart.webp",
    "v80/artwork/garage_band.webp",
    "v80/artwork/ghost_in_the_garden.webp",
    "v80/artwork/god_save_the_king.webp",
    "v80/artwork/golden_days.webp",
    "v80/artwork/good_enough.webp",
    "v80/artwork/happy_birthday_in_heaven.webp",
    "v80/artwork/haunted_haven.webp",
    "v80/artwork/heart_of_fire_and_ice.webp",
    "v80/artwork/her_first_truck.webp",
    "v80/artwork/hes_still_here.webp",
    "v80/artwork/home_now.webp",
    "v80/artwork/howling_wolves.webp",
    "v80/artwork/hypocrites.webp",
    "v80/artwork/i_hate_you.webp",
    "v80/artwork/i_love_school.webp",
    "v80/artwork/i_scream.webp",
    "v80/artwork/insatiable.webp",
    "v80/artwork/insult_the_ones_you_love.webp",
    "v80/artwork/introverted_girl.webp",
    "v80/artwork/jet_set.webp",
    "v80/artwork/julia_and_friends.webp",
    "v80/artwork/just_a_vibe.webp",
    "v80/artwork/just_wants_to_be_loved.webp",
    "v80/artwork/last_exit.webp",
    "v80/artwork/left_lane_legend.webp",
    "v80/artwork/little_butterflies.webp",
    "v80/artwork/luck_for_granted.webp",
    "v80/artwork/maybe_they_knew.webp",
    "v80/artwork/mind_the_gap.webp",
    "v80/artwork/my_foundation.webp",
    "v80/artwork/my_sweet_little_star.webp",
    "v80/artwork/need_for_speed.webp",
    "v80/artwork/nice_girl.webp",
    "v80/artwork/one_in_a_quarter_billion.webp",
    "v80/artwork/paradox_love.webp",
    "v80/artwork/password_expired.webp",
    "v80/artwork/password_expired_live.webp",
    "v80/artwork/peaks_of_gold.webp",
    "v80/artwork/private_lake.webp",
    "v80/artwork/radio_trash.webp",
    "v80/artwork/ride_the_groove.webp",
    "v80/artwork/rocker_songwriter.webp",
    "v80/artwork/sailing_on_open_water.webp",
    "v80/artwork/sanctified_sinner.webp",
    "v80/artwork/sanctuary_riot.webp",
    "v80/artwork/schools_out.webp",
    "v80/artwork/set_the_spirit_free.webp",
    "v80/artwork/siblings.webp",
    "v80/artwork/skeleton_dance.webp",
    "v80/artwork/slippery_road.webp",
    "v80/artwork/social_lubricant.webp",
    "v80/artwork/soulmate.webp",
    "v80/artwork/southern_belle.webp",
    "v80/artwork/spooky.webp",
    "v80/artwork/spring.webp",
    "v80/artwork/storm_of_the_abyss.webp",
    "v80/artwork/summers_farewell.webp",
    "v80/artwork/tabby_gonzalez.webp",
    "v80/artwork/the_city_i_long_for.webp",
    "v80/artwork/the_dive.webp",
    "v80/artwork/the_hard_way.webp",
    "v80/artwork/the_hook.webp",
    "v80/artwork/the_quiet_kind.webp",
    "v80/artwork/the_rhythm_of_the_fox.webp",
    "v80/artwork/the_rhythm_of_you.webp",
    "v80/artwork/the_sharpened_bow.webp",
    "v80/artwork/the_sirens_anchor.webp",
    "v80/artwork/the_soft_return.webp",
    "v80/artwork/the_steel_winged_swan.webp",
    "v80/artwork/this_is_fine.webp",
    "v80/artwork/tide_on_stone.webp",
    "v80/artwork/toccata.webp",
    "v80/artwork/trick_or_treat.webp",
    "v80/artwork/uncaged.webp",
    "v80/artwork/upon_a_winding_trail.webp",
    "v80/artwork/venezia.webp",
    "v80/artwork/verona.webp",
    "v80/artwork/weekend.webp",
    "v80/artwork/whiteout.webp",
    "v80/artwork/winterstorm.webp",
    "v80/datenschutz.html",
    "v80/images/Guitar-in-Dolomites.webp",
    "v80/images/Hero.webp",
    "v80/images/Hero_square.webp",
    "v80/images/Julia-skiing-Dolomites.webp",
    "v80/images/Stage_1.webp",
    "v80/images/Stage_2.webp",
    "v80/images/Stage_3.webp",
    "v80/images/Stage_4.webp",
    "v80/images/Stage_5.webp",
    "v80/images/Stage_6.webp",
    "v80/images/Stage_7.webp",
    "v80/images/Stage_8.webp",
    "v80/images/icons/app_icon_192.png",
    "v80/images/icons/app_icon_512.png",
    "v80/images/original/Guitar-in-Dolomites.png",
    "v80/images/original/Hero.jpg",
    "v80/images/original/Hero_square.jpg",
    "v80/images/original/Julia-skiing-Dolomites.png",
    "v80/images/original/Stage_1.png",
    "v80/images/original/Stage_2.png",
    "v80/images/original/Stage_3.png",
    "v80/images/original/Stage_4.png",
    "v80/images/original/Stage_5.png",
    "v80/images/original/Stage_6.png",
    "v80/images/original/Stage_7.png",
    "v80/images/original/Stage_8.png",
    "v80/images/password_expired_live.webp",
    "v80/images/podcasts.webp",
    "v80/images/southern_belle.webp",
    "v80/impressum.html",
    "v80/index.html",
    "v80/js/DiaryService.js",
    "v80/js/Director.js",
    "v80/js/Main 20260319_1300.js",
    "v80/js/Main.js",
    "v80/js/PickerDrum.js",
    "v80/js/Player 20260319_1300.js",
    "v80/js/Player.js",
    "v80/js/SongCollection 20260319_1400.js",
    "v80/js/SongCollection.js",
    "v80/js/SongService.js",
    "v80/js/VersionCore.js",
    "v80/js/ffmpeg.min.js",
    "v80/js/lucide.js",
    "v80/js/tailwindcss.js",
    "v80/legal_notice.html",
    "v80/manifest.json",
    "v80/privacy_policy.html"
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
