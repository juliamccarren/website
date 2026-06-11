const STATIC_CACHE = 'julia-site-v87';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v87/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v87/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v87/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v87/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v87/artwork/a_slow_blossoming_rose.webp",
    "v87/artwork/alejandro.webp",
    "v87/artwork/antitoxic.webp",
    "v87/artwork/autumns_whisper.webp",
    "v87/artwork/avalanche.webp",
    "v87/artwork/betrayal.webp",
    "v87/artwork/big_dreams_shine.webp",
    "v87/artwork/big_dreams_shine_live.webp",
    "v87/artwork/bite_of_the_night.webp",
    "v87/artwork/boring.webp",
    "v87/artwork/brooklyn.webp",
    "v87/artwork/buckn_the_bain.webp",
    "v87/artwork/cheerleader.webp",
    "v87/artwork/coffee_in_amsterdam.webp",
    "v87/artwork/cool_fire.webp",
    "v87/artwork/date_disaster.webp",
    "v87/artwork/deep_blue.webp",
    "v87/artwork/deepdive_1.webp",
    "v87/artwork/deepdive_2.webp",
    "v87/artwork/default.webp",
    "v87/artwork/digital_ghost.webp",
    "v87/artwork/disco_flashback.webp",
    "v87/artwork/disco_flashback_2.webp",
    "v87/artwork/disposable.webp",
    "v87/artwork/distortion.webp",
    "v87/artwork/drunk_not_dumb.webp",
    "v87/artwork/dynamite.webp",
    "v87/artwork/electric_hearts.webp",
    "v87/artwork/embers_and_sparks.webp",
    "v87/artwork/fences_down.webp",
    "v87/artwork/first_steps_to_stardom.webp",
    "v87/artwork/fog_of_fear.webp",
    "v87/artwork/forever.webp",
    "v87/artwork/four_chords_later.webp",
    "v87/artwork/friday_night.webp",
    "v87/artwork/from_first_steps_to_stardom.webp",
    "v87/artwork/frost_and_friction.webp",
    "v87/artwork/frozen_heart.webp",
    "v87/artwork/garage_band.webp",
    "v87/artwork/ghost_in_the_garden.webp",
    "v87/artwork/god_save_the_king.webp",
    "v87/artwork/golden_days.webp",
    "v87/artwork/good_enough.webp",
    "v87/artwork/happy_birthday_in_heaven.webp",
    "v87/artwork/haunted_haven.webp",
    "v87/artwork/heart_of_fire_and_ice.webp",
    "v87/artwork/her_first_truck.webp",
    "v87/artwork/hes_still_here.webp",
    "v87/artwork/home_now.webp",
    "v87/artwork/howling_wolves.webp",
    "v87/artwork/hypocrites.webp",
    "v87/artwork/i_hate_you.webp",
    "v87/artwork/i_love_school.webp",
    "v87/artwork/i_scream.webp",
    "v87/artwork/insatiable.webp",
    "v87/artwork/insult_the_ones_you_love.webp",
    "v87/artwork/introverted_girl.webp",
    "v87/artwork/jet_set.webp",
    "v87/artwork/julia_and_friends.webp",
    "v87/artwork/just_a_vibe.webp",
    "v87/artwork/just_wants_to_be_loved.webp",
    "v87/artwork/last_exit.webp",
    "v87/artwork/left_lane_legend.webp",
    "v87/artwork/little_butterflies.webp",
    "v87/artwork/luck_for_granted.webp",
    "v87/artwork/maybe_they_knew.webp",
    "v87/artwork/mind_the_gap.webp",
    "v87/artwork/my_foundation.webp",
    "v87/artwork/my_sweet_little_star.webp",
    "v87/artwork/need_for_speed.webp",
    "v87/artwork/nice_girl.webp",
    "v87/artwork/one_in_a_quarter_billion.webp",
    "v87/artwork/paradox_love.webp",
    "v87/artwork/password_expired.webp",
    "v87/artwork/password_expired_live.webp",
    "v87/artwork/peaks_of_gold.webp",
    "v87/artwork/private_lake.webp",
    "v87/artwork/radio_trash.webp",
    "v87/artwork/ride_the_groove.webp",
    "v87/artwork/rocker_songwriter.webp",
    "v87/artwork/sailing_on_open_water.webp",
    "v87/artwork/sanctified_sinner.webp",
    "v87/artwork/sanctuary_riot.webp",
    "v87/artwork/schools_out.webp",
    "v87/artwork/set_the_spirit_free.webp",
    "v87/artwork/siblings.webp",
    "v87/artwork/skeleton_dance.webp",
    "v87/artwork/slippery_road.webp",
    "v87/artwork/social_lubricant.webp",
    "v87/artwork/soulmate.webp",
    "v87/artwork/southern_belle.webp",
    "v87/artwork/spooky.webp",
    "v87/artwork/spring.webp",
    "v87/artwork/storm_of_the_abyss.webp",
    "v87/artwork/summers_farewell.webp",
    "v87/artwork/tabby_gonzalez.webp",
    "v87/artwork/the_city_i_long_for.webp",
    "v87/artwork/the_dive.webp",
    "v87/artwork/the_hard_way.webp",
    "v87/artwork/the_hook.webp",
    "v87/artwork/the_quiet_kind.webp",
    "v87/artwork/the_rhythm_of_the_fox.webp",
    "v87/artwork/the_rhythm_of_you.webp",
    "v87/artwork/the_sharpened_bow.webp",
    "v87/artwork/the_sirens_anchor.webp",
    "v87/artwork/the_soft_return.webp",
    "v87/artwork/the_steel_winged_swan.webp",
    "v87/artwork/this_is_fine.webp",
    "v87/artwork/tide_on_stone.webp",
    "v87/artwork/toccata.webp",
    "v87/artwork/trick_or_treat.webp",
    "v87/artwork/uncaged.webp",
    "v87/artwork/upon_a_winding_trail.webp",
    "v87/artwork/venezia.webp",
    "v87/artwork/verona.webp",
    "v87/artwork/weekend.webp",
    "v87/artwork/whiteout.webp",
    "v87/artwork/winterstorm.webp",
    "v87/css/style.css",
    "v87/datenschutz.html",
    "v87/essays/essay1.html",
    "v87/essays/ssm.html",
    "v87/images/Guitar-in-Dolomites.webp",
    "v87/images/Hero.webp",
    "v87/images/Hero_square.webp",
    "v87/images/Julia-skiing-Dolomites.webp",
    "v87/images/Stage_1.webp",
    "v87/images/Stage_2.webp",
    "v87/images/Stage_3.webp",
    "v87/images/Stage_4.webp",
    "v87/images/Stage_5.webp",
    "v87/images/Stage_6.webp",
    "v87/images/Stage_7.webp",
    "v87/images/Stage_8.webp",
    "v87/images/icons/app_icon_192.png",
    "v87/images/icons/app_icon_512.png",
    "v87/images/julia_ssm_equations.webp",
    "v87/images/password_expired_live.webp",
    "v87/images/podcasts.webp",
    "v87/images/southern_belle.webp",
    "v87/images/ssm_diagram.webp",
    "v87/impressum.html",
    "v87/index.html",
    "v87/js/DiaryService.js",
    "v87/js/Director.js",
    "v87/js/Main 20260319_1300.js",
    "v87/js/Main.js",
    "v87/js/PickerDrum.js",
    "v87/js/Placeholder.js",
    "v87/js/Player 20260319_1300.js",
    "v87/js/Player.js",
    "v87/js/SongCollection 20260319_1400.js",
    "v87/js/SongCollection.js",
    "v87/js/SongService.js",
    "v87/js/VersionCore.js",
    "v87/js/ffmpeg.min.js",
    "v87/js/lucide.js",
    "v87/js/tailwindcss.js",
    "v87/legal_notice.html",
    "v87/manifest.json",
    "v87/placeholder/footer.html",
    "v87/placeholder/header.html",
    "v87/privacy_policy.html"
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
