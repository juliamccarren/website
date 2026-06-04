const STATIC_CACHE = 'julia-site-v78';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v78/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v78/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v78/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v78/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v78/artwork/a_slow_blossoming_rose.webp",
    "v78/artwork/alejandro.webp",
    "v78/artwork/antitoxic.webp",
    "v78/artwork/autumns_whisper.webp",
    "v78/artwork/avalanche.webp",
    "v78/artwork/betrayal.webp",
    "v78/artwork/big_dreams_shine.webp",
    "v78/artwork/big_dreams_shine_live.webp",
    "v78/artwork/bite_of_the_night.webp",
    "v78/artwork/boring.webp",
    "v78/artwork/brooklyn.webp",
    "v78/artwork/buckn_the_bain.webp",
    "v78/artwork/cheerleader.webp",
    "v78/artwork/coffee_in_amsterdam.webp",
    "v78/artwork/cool_fire.webp",
    "v78/artwork/date_disaster.webp",
    "v78/artwork/deep_blue.webp",
    "v78/artwork/deepdive_1.webp",
    "v78/artwork/deepdive_2.webp",
    "v78/artwork/default.webp",
    "v78/artwork/digital_ghost.webp",
    "v78/artwork/disco_flashback.webp",
    "v78/artwork/disco_flashback_2.webp",
    "v78/artwork/disposable.webp",
    "v78/artwork/distortion.webp",
    "v78/artwork/drunk_not_dumb.webp",
    "v78/artwork/dynamite.webp",
    "v78/artwork/electric_hearts.webp",
    "v78/artwork/embers_and_sparks.webp",
    "v78/artwork/fences_down.webp",
    "v78/artwork/first_steps_to_stardom.webp",
    "v78/artwork/fog_of_fear.webp",
    "v78/artwork/forever.webp",
    "v78/artwork/four_chords_later.webp",
    "v78/artwork/friday_night.webp",
    "v78/artwork/from_first_steps_to_stardom.webp",
    "v78/artwork/frost_and_friction.webp",
    "v78/artwork/frozen_heart.webp",
    "v78/artwork/garage_band.webp",
    "v78/artwork/ghost_in_the_garden.webp",
    "v78/artwork/god_save_the_king.webp",
    "v78/artwork/golden_days.webp",
    "v78/artwork/good_enough.webp",
    "v78/artwork/happy_birthday_in_heaven.webp",
    "v78/artwork/haunted_haven.webp",
    "v78/artwork/heart_of_fire_and_ice.webp",
    "v78/artwork/her_first_truck.webp",
    "v78/artwork/hes_still_here.webp",
    "v78/artwork/home_now.webp",
    "v78/artwork/howling_wolves.webp",
    "v78/artwork/hypocrites.webp",
    "v78/artwork/i_hate_you.webp",
    "v78/artwork/i_love_school.webp",
    "v78/artwork/i_scream.webp",
    "v78/artwork/insatiable.webp",
    "v78/artwork/insult_the_ones_you_love.webp",
    "v78/artwork/introverted_girl.webp",
    "v78/artwork/jet_set.webp",
    "v78/artwork/julia_and_friends.webp",
    "v78/artwork/just_a_vibe.webp",
    "v78/artwork/just_wants_to_be_loved.webp",
    "v78/artwork/last_exit.webp",
    "v78/artwork/left_lane_legend.webp",
    "v78/artwork/little_butterflies.webp",
    "v78/artwork/luck_for_granted.webp",
    "v78/artwork/maybe_they_knew.webp",
    "v78/artwork/mind_the_gap.webp",
    "v78/artwork/my_foundation.webp",
    "v78/artwork/my_sweet_little_star.webp",
    "v78/artwork/need_for_speed.webp",
    "v78/artwork/nice_girl.webp",
    "v78/artwork/one_in_a_quarter_billion.webp",
    "v78/artwork/paradox_love.webp",
    "v78/artwork/password_expired.webp",
    "v78/artwork/password_expired_live.webp",
    "v78/artwork/peaks_of_gold.webp",
    "v78/artwork/private_lake.webp",
    "v78/artwork/radio_trash.webp",
    "v78/artwork/ride_the_groove.webp",
    "v78/artwork/rocker_songwriter.webp",
    "v78/artwork/sailing_on_open_water.webp",
    "v78/artwork/sanctified_sinner.webp",
    "v78/artwork/sanctuary_riot.webp",
    "v78/artwork/schools_out.webp",
    "v78/artwork/set_the_spirit_free.webp",
    "v78/artwork/siblings.webp",
    "v78/artwork/skeleton_dance.webp",
    "v78/artwork/slippery_road.webp",
    "v78/artwork/social_lubricant.webp",
    "v78/artwork/soulmate.webp",
    "v78/artwork/southern_belle.webp",
    "v78/artwork/spooky.webp",
    "v78/artwork/spring.webp",
    "v78/artwork/storm_of_the_abyss.webp",
    "v78/artwork/summers_farewell.webp",
    "v78/artwork/tabby_gonzalez.webp",
    "v78/artwork/the_city_i_long_for.webp",
    "v78/artwork/the_dive.webp",
    "v78/artwork/the_hard_way.webp",
    "v78/artwork/the_hook.webp",
    "v78/artwork/the_quiet_kind.webp",
    "v78/artwork/the_rhythm_of_the_fox.webp",
    "v78/artwork/the_rhythm_of_you.webp",
    "v78/artwork/the_sharpened_bow.webp",
    "v78/artwork/the_sirens_anchor.webp",
    "v78/artwork/the_soft_return.webp",
    "v78/artwork/the_steel_winged_swan.webp",
    "v78/artwork/this_is_fine.webp",
    "v78/artwork/tide_on_stone.webp",
    "v78/artwork/toccata.webp",
    "v78/artwork/trick_or_treat.webp",
    "v78/artwork/uncaged.webp",
    "v78/artwork/upon_a_winding_trail.webp",
    "v78/artwork/venezia.webp",
    "v78/artwork/verona.webp",
    "v78/artwork/weekend.webp",
    "v78/artwork/whiteout.webp",
    "v78/artwork/winterstorm.webp",
    "v78/datenschutz.html",
    "v78/images/Guitar-in-Dolomites.webp",
    "v78/images/Hero.webp",
    "v78/images/Hero_square.webp",
    "v78/images/Julia-skiing-Dolomites.webp",
    "v78/images/Stage_1.webp",
    "v78/images/Stage_2.webp",
    "v78/images/Stage_3.webp",
    "v78/images/Stage_4.webp",
    "v78/images/Stage_5.webp",
    "v78/images/Stage_6.webp",
    "v78/images/Stage_7.webp",
    "v78/images/Stage_8.webp",
    "v78/images/icons/app_icon_192.png",
    "v78/images/icons/app_icon_512.png",
    "v78/images/original/Guitar-in-Dolomites.png",
    "v78/images/original/Hero.jpg",
    "v78/images/original/Hero_square.jpg",
    "v78/images/original/Julia-skiing-Dolomites.png",
    "v78/images/original/Stage_1.png",
    "v78/images/original/Stage_2.png",
    "v78/images/original/Stage_3.png",
    "v78/images/original/Stage_4.png",
    "v78/images/original/Stage_5.png",
    "v78/images/original/Stage_6.png",
    "v78/images/original/Stage_7.png",
    "v78/images/original/Stage_8.png",
    "v78/images/password_expired_live.webp",
    "v78/images/podcasts.webp",
    "v78/images/southern_belle.webp",
    "v78/impressum.html",
    "v78/index.html",
    "v78/js/DiaryService.js",
    "v78/js/Director.js",
    "v78/js/Main 20260319_1300.js",
    "v78/js/Main.js",
    "v78/js/PickerDrum.js",
    "v78/js/Player 20260319_1300.js",
    "v78/js/Player.js",
    "v78/js/SongCollection 20260319_1400.js",
    "v78/js/SongCollection.js",
    "v78/js/SongService.js",
    "v78/js/VersionCore.js",
    "v78/js/ffmpeg.min.js",
    "v78/js/lucide.js",
    "v78/js/tailwindcss.js",
    "v78/legal_notice.html",
    "v78/manifest.json",
    "v78/privacy_policy.html"
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
