const STATIC_CACHE = 'julia-site-v79';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v79/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v79/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v79/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v79/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v79/artwork/a_slow_blossoming_rose.webp",
    "v79/artwork/alejandro.webp",
    "v79/artwork/antitoxic.webp",
    "v79/artwork/autumns_whisper.webp",
    "v79/artwork/avalanche.webp",
    "v79/artwork/betrayal.webp",
    "v79/artwork/big_dreams_shine.webp",
    "v79/artwork/big_dreams_shine_live.webp",
    "v79/artwork/bite_of_the_night.webp",
    "v79/artwork/boring.webp",
    "v79/artwork/brooklyn.webp",
    "v79/artwork/buckn_the_bain.webp",
    "v79/artwork/cheerleader.webp",
    "v79/artwork/coffee_in_amsterdam.webp",
    "v79/artwork/cool_fire.webp",
    "v79/artwork/date_disaster.webp",
    "v79/artwork/deep_blue.webp",
    "v79/artwork/deepdive_1.webp",
    "v79/artwork/deepdive_2.webp",
    "v79/artwork/default.webp",
    "v79/artwork/digital_ghost.webp",
    "v79/artwork/disco_flashback.webp",
    "v79/artwork/disco_flashback_2.webp",
    "v79/artwork/disposable.webp",
    "v79/artwork/distortion.webp",
    "v79/artwork/drunk_not_dumb.webp",
    "v79/artwork/dynamite.webp",
    "v79/artwork/electric_hearts.webp",
    "v79/artwork/embers_and_sparks.webp",
    "v79/artwork/fences_down.webp",
    "v79/artwork/first_steps_to_stardom.webp",
    "v79/artwork/fog_of_fear.webp",
    "v79/artwork/forever.webp",
    "v79/artwork/four_chords_later.webp",
    "v79/artwork/friday_night.webp",
    "v79/artwork/from_first_steps_to_stardom.webp",
    "v79/artwork/frost_and_friction.webp",
    "v79/artwork/frozen_heart.webp",
    "v79/artwork/garage_band.webp",
    "v79/artwork/ghost_in_the_garden.webp",
    "v79/artwork/god_save_the_king.webp",
    "v79/artwork/golden_days.webp",
    "v79/artwork/good_enough.webp",
    "v79/artwork/happy_birthday_in_heaven.webp",
    "v79/artwork/haunted_haven.webp",
    "v79/artwork/heart_of_fire_and_ice.webp",
    "v79/artwork/her_first_truck.webp",
    "v79/artwork/hes_still_here.webp",
    "v79/artwork/home_now.webp",
    "v79/artwork/howling_wolves.webp",
    "v79/artwork/hypocrites.webp",
    "v79/artwork/i_hate_you.webp",
    "v79/artwork/i_love_school.webp",
    "v79/artwork/i_scream.webp",
    "v79/artwork/insatiable.webp",
    "v79/artwork/insult_the_ones_you_love.webp",
    "v79/artwork/introverted_girl.webp",
    "v79/artwork/jet_set.webp",
    "v79/artwork/julia_and_friends.webp",
    "v79/artwork/just_a_vibe.webp",
    "v79/artwork/just_wants_to_be_loved.webp",
    "v79/artwork/last_exit.webp",
    "v79/artwork/left_lane_legend.webp",
    "v79/artwork/little_butterflies.webp",
    "v79/artwork/luck_for_granted.webp",
    "v79/artwork/maybe_they_knew.webp",
    "v79/artwork/mind_the_gap.webp",
    "v79/artwork/my_foundation.webp",
    "v79/artwork/my_sweet_little_star.webp",
    "v79/artwork/need_for_speed.webp",
    "v79/artwork/nice_girl.webp",
    "v79/artwork/one_in_a_quarter_billion.webp",
    "v79/artwork/paradox_love.webp",
    "v79/artwork/password_expired.webp",
    "v79/artwork/password_expired_live.webp",
    "v79/artwork/peaks_of_gold.webp",
    "v79/artwork/private_lake.webp",
    "v79/artwork/radio_trash.webp",
    "v79/artwork/ride_the_groove.webp",
    "v79/artwork/rocker_songwriter.webp",
    "v79/artwork/sailing_on_open_water.webp",
    "v79/artwork/sanctified_sinner.webp",
    "v79/artwork/sanctuary_riot.webp",
    "v79/artwork/schools_out.webp",
    "v79/artwork/set_the_spirit_free.webp",
    "v79/artwork/siblings.webp",
    "v79/artwork/skeleton_dance.webp",
    "v79/artwork/slippery_road.webp",
    "v79/artwork/social_lubricant.webp",
    "v79/artwork/soulmate.webp",
    "v79/artwork/southern_belle.webp",
    "v79/artwork/spooky.webp",
    "v79/artwork/spring.webp",
    "v79/artwork/storm_of_the_abyss.webp",
    "v79/artwork/summers_farewell.webp",
    "v79/artwork/tabby_gonzalez.webp",
    "v79/artwork/the_city_i_long_for.webp",
    "v79/artwork/the_dive.webp",
    "v79/artwork/the_hard_way.webp",
    "v79/artwork/the_hook.webp",
    "v79/artwork/the_quiet_kind.webp",
    "v79/artwork/the_rhythm_of_the_fox.webp",
    "v79/artwork/the_rhythm_of_you.webp",
    "v79/artwork/the_sharpened_bow.webp",
    "v79/artwork/the_sirens_anchor.webp",
    "v79/artwork/the_soft_return.webp",
    "v79/artwork/the_steel_winged_swan.webp",
    "v79/artwork/this_is_fine.webp",
    "v79/artwork/tide_on_stone.webp",
    "v79/artwork/toccata.webp",
    "v79/artwork/trick_or_treat.webp",
    "v79/artwork/uncaged.webp",
    "v79/artwork/upon_a_winding_trail.webp",
    "v79/artwork/venezia.webp",
    "v79/artwork/verona.webp",
    "v79/artwork/weekend.webp",
    "v79/artwork/whiteout.webp",
    "v79/artwork/winterstorm.webp",
    "v79/datenschutz.html",
    "v79/images/Guitar-in-Dolomites.webp",
    "v79/images/Hero.webp",
    "v79/images/Hero_square.webp",
    "v79/images/Julia-skiing-Dolomites.webp",
    "v79/images/Stage_1.webp",
    "v79/images/Stage_2.webp",
    "v79/images/Stage_3.webp",
    "v79/images/Stage_4.webp",
    "v79/images/Stage_5.webp",
    "v79/images/Stage_6.webp",
    "v79/images/Stage_7.webp",
    "v79/images/Stage_8.webp",
    "v79/images/icons/app_icon_192.png",
    "v79/images/icons/app_icon_512.png",
    "v79/images/original/Guitar-in-Dolomites.png",
    "v79/images/original/Hero.jpg",
    "v79/images/original/Hero_square.jpg",
    "v79/images/original/Julia-skiing-Dolomites.png",
    "v79/images/original/Stage_1.png",
    "v79/images/original/Stage_2.png",
    "v79/images/original/Stage_3.png",
    "v79/images/original/Stage_4.png",
    "v79/images/original/Stage_5.png",
    "v79/images/original/Stage_6.png",
    "v79/images/original/Stage_7.png",
    "v79/images/original/Stage_8.png",
    "v79/images/password_expired_live.webp",
    "v79/images/podcasts.webp",
    "v79/images/southern_belle.webp",
    "v79/impressum.html",
    "v79/index.html",
    "v79/js/DiaryService.js",
    "v79/js/Director.js",
    "v79/js/Main 20260319_1300.js",
    "v79/js/Main.js",
    "v79/js/PickerDrum.js",
    "v79/js/Player 20260319_1300.js",
    "v79/js/Player.js",
    "v79/js/SongCollection 20260319_1400.js",
    "v79/js/SongCollection.js",
    "v79/js/SongService.js",
    "v79/js/VersionCore.js",
    "v79/js/ffmpeg.min.js",
    "v79/js/lucide.js",
    "v79/js/tailwindcss.js",
    "v79/legal_notice.html",
    "v79/manifest.json",
    "v79/privacy_policy.html"
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
