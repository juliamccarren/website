const STATIC_CACHE = 'julia-site-v86';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v86/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v86/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v86/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v86/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v86/artwork/a_slow_blossoming_rose.webp",
    "v86/artwork/alejandro.webp",
    "v86/artwork/antitoxic.webp",
    "v86/artwork/autumns_whisper.webp",
    "v86/artwork/avalanche.webp",
    "v86/artwork/betrayal.webp",
    "v86/artwork/big_dreams_shine.webp",
    "v86/artwork/big_dreams_shine_live.webp",
    "v86/artwork/bite_of_the_night.webp",
    "v86/artwork/boring.webp",
    "v86/artwork/brooklyn.webp",
    "v86/artwork/buckn_the_bain.webp",
    "v86/artwork/cheerleader.webp",
    "v86/artwork/coffee_in_amsterdam.webp",
    "v86/artwork/cool_fire.webp",
    "v86/artwork/date_disaster.webp",
    "v86/artwork/deep_blue.webp",
    "v86/artwork/deepdive_1.webp",
    "v86/artwork/deepdive_2.webp",
    "v86/artwork/default.webp",
    "v86/artwork/digital_ghost.webp",
    "v86/artwork/disco_flashback.webp",
    "v86/artwork/disco_flashback_2.webp",
    "v86/artwork/disposable.webp",
    "v86/artwork/distortion.webp",
    "v86/artwork/drunk_not_dumb.webp",
    "v86/artwork/dynamite.webp",
    "v86/artwork/electric_hearts.webp",
    "v86/artwork/embers_and_sparks.webp",
    "v86/artwork/fences_down.webp",
    "v86/artwork/first_steps_to_stardom.webp",
    "v86/artwork/fog_of_fear.webp",
    "v86/artwork/forever.webp",
    "v86/artwork/four_chords_later.webp",
    "v86/artwork/friday_night.webp",
    "v86/artwork/from_first_steps_to_stardom.webp",
    "v86/artwork/frost_and_friction.webp",
    "v86/artwork/frozen_heart.webp",
    "v86/artwork/garage_band.webp",
    "v86/artwork/ghost_in_the_garden.webp",
    "v86/artwork/god_save_the_king.webp",
    "v86/artwork/golden_days.webp",
    "v86/artwork/good_enough.webp",
    "v86/artwork/happy_birthday_in_heaven.webp",
    "v86/artwork/haunted_haven.webp",
    "v86/artwork/heart_of_fire_and_ice.webp",
    "v86/artwork/her_first_truck.webp",
    "v86/artwork/hes_still_here.webp",
    "v86/artwork/home_now.webp",
    "v86/artwork/howling_wolves.webp",
    "v86/artwork/hypocrites.webp",
    "v86/artwork/i_hate_you.webp",
    "v86/artwork/i_love_school.webp",
    "v86/artwork/i_scream.webp",
    "v86/artwork/insatiable.webp",
    "v86/artwork/insult_the_ones_you_love.webp",
    "v86/artwork/introverted_girl.webp",
    "v86/artwork/jet_set.webp",
    "v86/artwork/julia_and_friends.webp",
    "v86/artwork/just_a_vibe.webp",
    "v86/artwork/just_wants_to_be_loved.webp",
    "v86/artwork/last_exit.webp",
    "v86/artwork/left_lane_legend.webp",
    "v86/artwork/little_butterflies.webp",
    "v86/artwork/luck_for_granted.webp",
    "v86/artwork/maybe_they_knew.webp",
    "v86/artwork/mind_the_gap.webp",
    "v86/artwork/my_foundation.webp",
    "v86/artwork/my_sweet_little_star.webp",
    "v86/artwork/need_for_speed.webp",
    "v86/artwork/nice_girl.webp",
    "v86/artwork/one_in_a_quarter_billion.webp",
    "v86/artwork/paradox_love.webp",
    "v86/artwork/password_expired.webp",
    "v86/artwork/password_expired_live.webp",
    "v86/artwork/peaks_of_gold.webp",
    "v86/artwork/private_lake.webp",
    "v86/artwork/radio_trash.webp",
    "v86/artwork/ride_the_groove.webp",
    "v86/artwork/rocker_songwriter.webp",
    "v86/artwork/sailing_on_open_water.webp",
    "v86/artwork/sanctified_sinner.webp",
    "v86/artwork/sanctuary_riot.webp",
    "v86/artwork/schools_out.webp",
    "v86/artwork/set_the_spirit_free.webp",
    "v86/artwork/siblings.webp",
    "v86/artwork/skeleton_dance.webp",
    "v86/artwork/slippery_road.webp",
    "v86/artwork/social_lubricant.webp",
    "v86/artwork/soulmate.webp",
    "v86/artwork/southern_belle.webp",
    "v86/artwork/spooky.webp",
    "v86/artwork/spring.webp",
    "v86/artwork/storm_of_the_abyss.webp",
    "v86/artwork/summers_farewell.webp",
    "v86/artwork/tabby_gonzalez.webp",
    "v86/artwork/the_city_i_long_for.webp",
    "v86/artwork/the_dive.webp",
    "v86/artwork/the_hard_way.webp",
    "v86/artwork/the_hook.webp",
    "v86/artwork/the_quiet_kind.webp",
    "v86/artwork/the_rhythm_of_the_fox.webp",
    "v86/artwork/the_rhythm_of_you.webp",
    "v86/artwork/the_sharpened_bow.webp",
    "v86/artwork/the_sirens_anchor.webp",
    "v86/artwork/the_soft_return.webp",
    "v86/artwork/the_steel_winged_swan.webp",
    "v86/artwork/this_is_fine.webp",
    "v86/artwork/tide_on_stone.webp",
    "v86/artwork/toccata.webp",
    "v86/artwork/trick_or_treat.webp",
    "v86/artwork/uncaged.webp",
    "v86/artwork/upon_a_winding_trail.webp",
    "v86/artwork/venezia.webp",
    "v86/artwork/verona.webp",
    "v86/artwork/weekend.webp",
    "v86/artwork/whiteout.webp",
    "v86/artwork/winterstorm.webp",
    "v86/css/style.css",
    "v86/datenschutz.html",
    "v86/essays/essay1.html",
    "v86/essays/ssm.html",
    "v86/images/Guitar-in-Dolomites.webp",
    "v86/images/Hero.webp",
    "v86/images/Hero_square.webp",
    "v86/images/Julia-skiing-Dolomites.webp",
    "v86/images/Stage_1.webp",
    "v86/images/Stage_2.webp",
    "v86/images/Stage_3.webp",
    "v86/images/Stage_4.webp",
    "v86/images/Stage_5.webp",
    "v86/images/Stage_6.webp",
    "v86/images/Stage_7.webp",
    "v86/images/Stage_8.webp",
    "v86/images/State Space Model.pptx",
    "v86/images/icons/app_icon_192.png",
    "v86/images/icons/app_icon_512.png",
    "v86/images/julia_ssm_equations.webp",
    "v86/images/original/Guitar-in-Dolomites.png",
    "v86/images/original/Hero.jpg",
    "v86/images/original/Hero_square.jpg",
    "v86/images/original/Julia-skiing-Dolomites.png",
    "v86/images/original/Stage_1.png",
    "v86/images/original/Stage_2.png",
    "v86/images/original/Stage_3.png",
    "v86/images/original/Stage_4.png",
    "v86/images/original/Stage_5.png",
    "v86/images/original/Stage_6.png",
    "v86/images/original/Stage_7.png",
    "v86/images/original/Stage_8.png",
    "v86/images/password_expired_live.webp",
    "v86/images/podcasts.webp",
    "v86/images/southern_belle.webp",
    "v86/images/ssm_diagram.webp",
    "v86/impressum.html",
    "v86/index.html",
    "v86/js/DiaryService.js",
    "v86/js/Director.js",
    "v86/js/Main 20260319_1300.js",
    "v86/js/Main.js",
    "v86/js/PickerDrum.js",
    "v86/js/Placeholder.js",
    "v86/js/Player 20260319_1300.js",
    "v86/js/Player.js",
    "v86/js/SongCollection 20260319_1400.js",
    "v86/js/SongCollection.js",
    "v86/js/SongService.js",
    "v86/js/VersionCore.js",
    "v86/js/ffmpeg.min.js",
    "v86/js/lucide.js",
    "v86/js/tailwindcss.js",
    "v86/legal_notice.html",
    "v86/manifest.json",
    "v86/placeholder/footer.html",
    "v86/placeholder/header.html",
    "v86/privacy_policy.html"
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
