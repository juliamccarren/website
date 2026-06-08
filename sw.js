const STATIC_CACHE = 'julia-site-v85';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v85/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v85/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v85/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v85/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v85/artwork/a_slow_blossoming_rose.webp",
    "v85/artwork/alejandro.webp",
    "v85/artwork/antitoxic.webp",
    "v85/artwork/autumns_whisper.webp",
    "v85/artwork/avalanche.webp",
    "v85/artwork/betrayal.webp",
    "v85/artwork/big_dreams_shine.webp",
    "v85/artwork/big_dreams_shine_live.webp",
    "v85/artwork/bite_of_the_night.webp",
    "v85/artwork/boring.webp",
    "v85/artwork/brooklyn.webp",
    "v85/artwork/buckn_the_bain.webp",
    "v85/artwork/cheerleader.webp",
    "v85/artwork/coffee_in_amsterdam.webp",
    "v85/artwork/cool_fire.webp",
    "v85/artwork/date_disaster.webp",
    "v85/artwork/deep_blue.webp",
    "v85/artwork/deepdive_1.webp",
    "v85/artwork/deepdive_2.webp",
    "v85/artwork/default.webp",
    "v85/artwork/digital_ghost.webp",
    "v85/artwork/disco_flashback.webp",
    "v85/artwork/disco_flashback_2.webp",
    "v85/artwork/disposable.webp",
    "v85/artwork/distortion.webp",
    "v85/artwork/drunk_not_dumb.webp",
    "v85/artwork/dynamite.webp",
    "v85/artwork/electric_hearts.webp",
    "v85/artwork/embers_and_sparks.webp",
    "v85/artwork/fences_down.webp",
    "v85/artwork/first_steps_to_stardom.webp",
    "v85/artwork/fog_of_fear.webp",
    "v85/artwork/forever.webp",
    "v85/artwork/four_chords_later.webp",
    "v85/artwork/friday_night.webp",
    "v85/artwork/from_first_steps_to_stardom.webp",
    "v85/artwork/frost_and_friction.webp",
    "v85/artwork/frozen_heart.webp",
    "v85/artwork/garage_band.webp",
    "v85/artwork/ghost_in_the_garden.webp",
    "v85/artwork/god_save_the_king.webp",
    "v85/artwork/golden_days.webp",
    "v85/artwork/good_enough.webp",
    "v85/artwork/happy_birthday_in_heaven.webp",
    "v85/artwork/haunted_haven.webp",
    "v85/artwork/heart_of_fire_and_ice.webp",
    "v85/artwork/her_first_truck.webp",
    "v85/artwork/hes_still_here.webp",
    "v85/artwork/home_now.webp",
    "v85/artwork/howling_wolves.webp",
    "v85/artwork/hypocrites.webp",
    "v85/artwork/i_hate_you.webp",
    "v85/artwork/i_love_school.webp",
    "v85/artwork/i_scream.webp",
    "v85/artwork/insatiable.webp",
    "v85/artwork/insult_the_ones_you_love.webp",
    "v85/artwork/introverted_girl.webp",
    "v85/artwork/jet_set.webp",
    "v85/artwork/julia_and_friends.webp",
    "v85/artwork/just_a_vibe.webp",
    "v85/artwork/just_wants_to_be_loved.webp",
    "v85/artwork/last_exit.webp",
    "v85/artwork/left_lane_legend.webp",
    "v85/artwork/little_butterflies.webp",
    "v85/artwork/luck_for_granted.webp",
    "v85/artwork/maybe_they_knew.webp",
    "v85/artwork/mind_the_gap.webp",
    "v85/artwork/my_foundation.webp",
    "v85/artwork/my_sweet_little_star.webp",
    "v85/artwork/need_for_speed.webp",
    "v85/artwork/nice_girl.webp",
    "v85/artwork/one_in_a_quarter_billion.webp",
    "v85/artwork/paradox_love.webp",
    "v85/artwork/password_expired.webp",
    "v85/artwork/password_expired_live.webp",
    "v85/artwork/peaks_of_gold.webp",
    "v85/artwork/private_lake.webp",
    "v85/artwork/radio_trash.webp",
    "v85/artwork/ride_the_groove.webp",
    "v85/artwork/rocker_songwriter.webp",
    "v85/artwork/sailing_on_open_water.webp",
    "v85/artwork/sanctified_sinner.webp",
    "v85/artwork/sanctuary_riot.webp",
    "v85/artwork/schools_out.webp",
    "v85/artwork/set_the_spirit_free.webp",
    "v85/artwork/siblings.webp",
    "v85/artwork/skeleton_dance.webp",
    "v85/artwork/slippery_road.webp",
    "v85/artwork/social_lubricant.webp",
    "v85/artwork/soulmate.webp",
    "v85/artwork/southern_belle.webp",
    "v85/artwork/spooky.webp",
    "v85/artwork/spring.webp",
    "v85/artwork/storm_of_the_abyss.webp",
    "v85/artwork/summers_farewell.webp",
    "v85/artwork/tabby_gonzalez.webp",
    "v85/artwork/the_city_i_long_for.webp",
    "v85/artwork/the_dive.webp",
    "v85/artwork/the_hard_way.webp",
    "v85/artwork/the_hook.webp",
    "v85/artwork/the_quiet_kind.webp",
    "v85/artwork/the_rhythm_of_the_fox.webp",
    "v85/artwork/the_rhythm_of_you.webp",
    "v85/artwork/the_sharpened_bow.webp",
    "v85/artwork/the_sirens_anchor.webp",
    "v85/artwork/the_soft_return.webp",
    "v85/artwork/the_steel_winged_swan.webp",
    "v85/artwork/this_is_fine.webp",
    "v85/artwork/tide_on_stone.webp",
    "v85/artwork/toccata.webp",
    "v85/artwork/trick_or_treat.webp",
    "v85/artwork/uncaged.webp",
    "v85/artwork/upon_a_winding_trail.webp",
    "v85/artwork/venezia.webp",
    "v85/artwork/verona.webp",
    "v85/artwork/weekend.webp",
    "v85/artwork/whiteout.webp",
    "v85/artwork/winterstorm.webp",
    "v85/datenschutz.html",
    "v85/images/Guitar-in-Dolomites.webp",
    "v85/images/Hero.webp",
    "v85/images/Hero_square.webp",
    "v85/images/Julia-skiing-Dolomites.webp",
    "v85/images/Stage_1.webp",
    "v85/images/Stage_2.webp",
    "v85/images/Stage_3.webp",
    "v85/images/Stage_4.webp",
    "v85/images/Stage_5.webp",
    "v85/images/Stage_6.webp",
    "v85/images/Stage_7.webp",
    "v85/images/Stage_8.webp",
    "v85/images/icons/app_icon_192.png",
    "v85/images/icons/app_icon_512.png",
    "v85/images/original/Guitar-in-Dolomites.png",
    "v85/images/original/Hero.jpg",
    "v85/images/original/Hero_square.jpg",
    "v85/images/original/Julia-skiing-Dolomites.png",
    "v85/images/original/Stage_1.png",
    "v85/images/original/Stage_2.png",
    "v85/images/original/Stage_3.png",
    "v85/images/original/Stage_4.png",
    "v85/images/original/Stage_5.png",
    "v85/images/original/Stage_6.png",
    "v85/images/original/Stage_7.png",
    "v85/images/original/Stage_8.png",
    "v85/images/password_expired_live.webp",
    "v85/images/podcasts.webp",
    "v85/images/southern_belle.webp",
    "v85/impressum.html",
    "v85/index.html",
    "v85/js/DiaryService.js",
    "v85/js/Director.js",
    "v85/js/Main 20260319_1300.js",
    "v85/js/Main.js",
    "v85/js/PickerDrum.js",
    "v85/js/Player 20260319_1300.js",
    "v85/js/Player.js",
    "v85/js/SongCollection 20260319_1400.js",
    "v85/js/SongCollection.js",
    "v85/js/SongService.js",
    "v85/js/VersionCore.js",
    "v85/js/ffmpeg.min.js",
    "v85/js/lucide.js",
    "v85/js/tailwindcss.js",
    "v85/legal_notice.html",
    "v85/manifest.json",
    "v85/privacy_policy.html"
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
