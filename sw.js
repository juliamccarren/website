const STATIC_CACHE = 'julia-site-v65';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "js/VersionCore.js",
    "v65/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v65/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v65/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v65/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v65/artwork/a_slow_blossoming_rose.webp",
    "v65/artwork/alejandro.webp",
    "v65/artwork/antitoxic.webp",
    "v65/artwork/autumns_whisper.webp",
    "v65/artwork/avalanche.webp",
    "v65/artwork/betrayal.webp",
    "v65/artwork/big_dreams_shine.webp",
    "v65/artwork/big_dreams_shine_live.webp",
    "v65/artwork/bite_of_the_night.webp",
    "v65/artwork/boring.webp",
    "v65/artwork/brooklyn.webp",
    "v65/artwork/buckn_the_bain.webp",
    "v65/artwork/cheerleader.webp",
    "v65/artwork/coffee_in_amsterdam.webp",
    "v65/artwork/cool_fire.webp",
    "v65/artwork/date_disaster.webp",
    "v65/artwork/deep_blue.webp",
    "v65/artwork/deepdive_1.webp",
    "v65/artwork/deepdive_2.webp",
    "v65/artwork/default.webp",
    "v65/artwork/digital_ghost.webp",
    "v65/artwork/disco_flashback.webp",
    "v65/artwork/disco_flashback_2.webp",
    "v65/artwork/disposable.webp",
    "v65/artwork/distortion.webp",
    "v65/artwork/drunk_not_dumb.webp",
    "v65/artwork/dynamite.webp",
    "v65/artwork/electric_hearts.webp",
    "v65/artwork/embers_and_sparks.webp",
    "v65/artwork/fences_down.webp",
    "v65/artwork/first_steps_to_stardom.webp",
    "v65/artwork/fog_of_fear.webp",
    "v65/artwork/forever.webp",
    "v65/artwork/four_chords_later.webp",
    "v65/artwork/friday_night.webp",
    "v65/artwork/from_first_steps_to_stardom.webp",
    "v65/artwork/frost_and_friction.webp",
    "v65/artwork/frozen_heart.webp",
    "v65/artwork/garage_band.webp",
    "v65/artwork/ghost_in_the_garden.webp",
    "v65/artwork/god_save_the_king.webp",
    "v65/artwork/golden_days.webp",
    "v65/artwork/good_enough.webp",
    "v65/artwork/happy_birthday_in_heaven.webp",
    "v65/artwork/haunted_haven.webp",
    "v65/artwork/heart_of_fire_and_ice.webp",
    "v65/artwork/her_first_truck.webp",
    "v65/artwork/hes_still_here.webp",
    "v65/artwork/home_now.webp",
    "v65/artwork/howling_wolves.webp",
    "v65/artwork/hypocrites.webp",
    "v65/artwork/i_hate_you.webp",
    "v65/artwork/i_love_school.webp",
    "v65/artwork/i_scream.webp",
    "v65/artwork/insatiable.webp",
    "v65/artwork/insult_the_ones_you_love.webp",
    "v65/artwork/introverted_girl.webp",
    "v65/artwork/jet_set.webp",
    "v65/artwork/just_a_vibe.webp",
    "v65/artwork/just_wants_to_be_loved.webp",
    "v65/artwork/last_exit.webp",
    "v65/artwork/left_lane_legend.webp",
    "v65/artwork/little_butterflies.webp",
    "v65/artwork/maybe_they_knew.webp",
    "v65/artwork/mind_the_gap.webp",
    "v65/artwork/my_foundation.webp",
    "v65/artwork/my_sweet_little_star.webp",
    "v65/artwork/need_for_speed.webp",
    "v65/artwork/one_in_a_quarter_billion.webp",
    "v65/artwork/paradox_love.webp",
    "v65/artwork/password_expired.webp",
    "v65/artwork/password_expired_live.webp",
    "v65/artwork/peaks_of_gold.webp",
    "v65/artwork/private_lake.webp",
    "v65/artwork/radio_trash.webp",
    "v65/artwork/ride_the_groove.webp",
    "v65/artwork/rocker_songwriter.webp",
    "v65/artwork/sailing_on_open_water.webp",
    "v65/artwork/sanctified_sinner.webp",
    "v65/artwork/sanctuary_riot.webp",
    "v65/artwork/schools_out.webp",
    "v65/artwork/set_the_spirit_free.webp",
    "v65/artwork/siblings.webp",
    "v65/artwork/skeleton_dance.webp",
    "v65/artwork/slippery_road.webp",
    "v65/artwork/social_lubricant.webp",
    "v65/artwork/soulmate.webp",
    "v65/artwork/spooky.webp",
    "v65/artwork/storm_of_the_abyss.webp",
    "v65/artwork/summers_farewell.webp",
    "v65/artwork/tabby_gonzalez.webp",
    "v65/artwork/the_city_i_long_for.webp",
    "v65/artwork/the_dive.webp",
    "v65/artwork/the_hard_way.webp",
    "v65/artwork/the_hook.webp",
    "v65/artwork/the_quiet_kind.webp",
    "v65/artwork/the_rhythm_of_the_fox.webp",
    "v65/artwork/the_rhythm_of_you.webp",
    "v65/artwork/the_sharpened_bow.webp",
    "v65/artwork/the_sirens_anchor.webp",
    "v65/artwork/the_soft_return.webp",
    "v65/artwork/the_steel_winged_swan.webp",
    "v65/artwork/this_is_fine.webp",
    "v65/artwork/tide_on_stone.webp",
    "v65/artwork/toccata.webp",
    "v65/artwork/trick_or_treat.webp",
    "v65/artwork/uncaged.webp",
    "v65/artwork/upon_a_winding_trail.webp",
    "v65/artwork/venezia.webp",
    "v65/artwork/verona.webp",
    "v65/artwork/weekend.webp",
    "v65/artwork/whiteout.webp",
    "v65/artwork/winterstorm.webp",
    "v65/datenschutz.html",
    "v65/images/Guitar-in-Dolomites.webp",
    "v65/images/Hero.webp",
    "v65/images/Hero_square.webp",
    "v65/images/Julia-skiing-Dolomites.webp",
    "v65/images/Stage_1.webp",
    "v65/images/Stage_2.webp",
    "v65/images/Stage_3.webp",
    "v65/images/Stage_4.webp",
    "v65/images/Stage_5.webp",
    "v65/images/Stage_6.webp",
    "v65/images/Stage_7.webp",
    "v65/images/Stage_8.webp",
    "v65/images/icons/app_icon_192.png",
    "v65/images/icons/app_icon_512.png",
    "v65/images/original/Guitar-in-Dolomites.png",
    "v65/images/original/Hero.jpg",
    "v65/images/original/Hero_square.jpg",
    "v65/images/original/Julia-skiing-Dolomites.png",
    "v65/images/original/Stage_1.png",
    "v65/images/original/Stage_2.png",
    "v65/images/original/Stage_3.png",
    "v65/images/original/Stage_4.png",
    "v65/images/original/Stage_5.png",
    "v65/images/original/Stage_6.png",
    "v65/images/original/Stage_7.png",
    "v65/images/original/Stage_8.png",
    "v65/images/password_expired_live.webp",
    "v65/images/podcasts.webp",
    "v65/impressum.html",
    "v65/index.html",
    "v65/js/DiaryService.js",
    "v65/js/Director.js",
    "v65/js/Main 20260319_1300.js",
    "v65/js/Main.js",
    "v65/js/PickerDrum.js",
    "v65/js/Player 20260319_1300.js",
    "v65/js/Player.js",
    "v65/js/SongCollection 20260319_1400.js",
    "v65/js/SongCollection.js",
    "v65/js/SongService.js",
    "v65/js/VersionCore.js",
    "v65/js/ffmpeg.min.js",
    "v65/js/lucide.js",
    "v65/js/tailwindcss.js",
    "v65/legal_notice.html",
    "v65/manifest.json",
    "v65/privacy_policy.html"
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
