const STATIC_CACHE = 'julia-site-v88';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v88/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v88/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v88/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v88/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v88/artwork/a_slow_blossoming_rose.webp",
    "v88/artwork/alejandro.webp",
    "v88/artwork/antitoxic.webp",
    "v88/artwork/autumns_whisper.webp",
    "v88/artwork/avalanche.webp",
    "v88/artwork/betrayal.webp",
    "v88/artwork/big_dreams_shine.webp",
    "v88/artwork/big_dreams_shine_live.webp",
    "v88/artwork/bite_of_the_night.webp",
    "v88/artwork/boring.webp",
    "v88/artwork/brooklyn.webp",
    "v88/artwork/buckn_the_bain.webp",
    "v88/artwork/cheerleader.webp",
    "v88/artwork/coffee_in_amsterdam.webp",
    "v88/artwork/cool_fire.webp",
    "v88/artwork/date_disaster.webp",
    "v88/artwork/deep_blue.webp",
    "v88/artwork/deepdive_1.webp",
    "v88/artwork/deepdive_2.webp",
    "v88/artwork/default.webp",
    "v88/artwork/digital_ghost.webp",
    "v88/artwork/disco_flashback.webp",
    "v88/artwork/disco_flashback_2.webp",
    "v88/artwork/disposable.webp",
    "v88/artwork/distortion.webp",
    "v88/artwork/drunk_not_dumb.webp",
    "v88/artwork/dynamite.webp",
    "v88/artwork/electric_hearts.webp",
    "v88/artwork/embers_and_sparks.webp",
    "v88/artwork/fences_down.webp",
    "v88/artwork/first_steps_to_stardom.webp",
    "v88/artwork/fog_of_fear.webp",
    "v88/artwork/forever.webp",
    "v88/artwork/four_chords_later.webp",
    "v88/artwork/friday_night.webp",
    "v88/artwork/from_first_steps_to_stardom.webp",
    "v88/artwork/frost_and_friction.webp",
    "v88/artwork/frozen_heart.webp",
    "v88/artwork/garage_band.webp",
    "v88/artwork/ghost_in_the_garden.webp",
    "v88/artwork/god_save_the_king.webp",
    "v88/artwork/golden_days.webp",
    "v88/artwork/good_enough.webp",
    "v88/artwork/happy_birthday_in_heaven.webp",
    "v88/artwork/haunted_haven.webp",
    "v88/artwork/heart_of_fire_and_ice.webp",
    "v88/artwork/her_first_truck.webp",
    "v88/artwork/hes_still_here.webp",
    "v88/artwork/home_now.webp",
    "v88/artwork/howling_wolves.webp",
    "v88/artwork/hypocrites.webp",
    "v88/artwork/i_hate_you.webp",
    "v88/artwork/i_love_school.webp",
    "v88/artwork/i_scream.webp",
    "v88/artwork/insatiable.webp",
    "v88/artwork/insult_the_ones_you_love.webp",
    "v88/artwork/introverted_girl.webp",
    "v88/artwork/jet_set.webp",
    "v88/artwork/julia_and_friends.webp",
    "v88/artwork/just_a_vibe.webp",
    "v88/artwork/just_wants_to_be_loved.webp",
    "v88/artwork/last_exit.webp",
    "v88/artwork/left_lane_legend.webp",
    "v88/artwork/little_butterflies.webp",
    "v88/artwork/luck_for_granted.webp",
    "v88/artwork/maybe_they_knew.webp",
    "v88/artwork/mind_the_gap.webp",
    "v88/artwork/my_foundation.webp",
    "v88/artwork/my_sweet_little_star.webp",
    "v88/artwork/need_for_speed.webp",
    "v88/artwork/nice_girl.webp",
    "v88/artwork/one_in_a_quarter_billion.webp",
    "v88/artwork/paradox_love.webp",
    "v88/artwork/password_expired.webp",
    "v88/artwork/password_expired_live.webp",
    "v88/artwork/peaks_of_gold.webp",
    "v88/artwork/private_lake.webp",
    "v88/artwork/radio_trash.webp",
    "v88/artwork/ride_the_groove.webp",
    "v88/artwork/rocker_songwriter.webp",
    "v88/artwork/sailing_on_open_water.webp",
    "v88/artwork/sanctified_sinner.webp",
    "v88/artwork/sanctuary_riot.webp",
    "v88/artwork/schools_out.webp",
    "v88/artwork/set_the_spirit_free.webp",
    "v88/artwork/siblings.webp",
    "v88/artwork/skeleton_dance.webp",
    "v88/artwork/slippery_road.webp",
    "v88/artwork/social_lubricant.webp",
    "v88/artwork/soulmate.webp",
    "v88/artwork/southern_belle.webp",
    "v88/artwork/spooky.webp",
    "v88/artwork/spring.webp",
    "v88/artwork/storm_of_the_abyss.webp",
    "v88/artwork/summers_farewell.webp",
    "v88/artwork/tabby_gonzalez.webp",
    "v88/artwork/the_city_i_long_for.webp",
    "v88/artwork/the_dive.webp",
    "v88/artwork/the_hard_way.webp",
    "v88/artwork/the_hook.webp",
    "v88/artwork/the_quiet_kind.webp",
    "v88/artwork/the_rhythm_of_the_fox.webp",
    "v88/artwork/the_rhythm_of_you.webp",
    "v88/artwork/the_sharpened_bow.webp",
    "v88/artwork/the_sirens_anchor.webp",
    "v88/artwork/the_soft_return.webp",
    "v88/artwork/the_steel_winged_swan.webp",
    "v88/artwork/this_is_fine.webp",
    "v88/artwork/tide_on_stone.webp",
    "v88/artwork/toccata.webp",
    "v88/artwork/trick_or_treat.webp",
    "v88/artwork/uncaged.webp",
    "v88/artwork/upon_a_winding_trail.webp",
    "v88/artwork/venezia.webp",
    "v88/artwork/verona.webp",
    "v88/artwork/weekend.webp",
    "v88/artwork/whiteout.webp",
    "v88/artwork/winterstorm.webp",
    "v88/css/style.css",
    "v88/datenschutz.html",
    "v88/essays/essay1.html",
    "v88/essays/ssm.html",
    "v88/images/Guitar-in-Dolomites.webp",
    "v88/images/Hero.webp",
    "v88/images/Hero_square.webp",
    "v88/images/Julia-skiing-Dolomites.webp",
    "v88/images/Stage_1.webp",
    "v88/images/Stage_2.webp",
    "v88/images/Stage_3.webp",
    "v88/images/Stage_4.webp",
    "v88/images/Stage_5.webp",
    "v88/images/Stage_6.webp",
    "v88/images/Stage_7.webp",
    "v88/images/Stage_8.webp",
    "v88/images/icons/app_icon_192.png",
    "v88/images/icons/app_icon_512.png",
    "v88/images/julia_ssm_equations.webp",
    "v88/images/password_expired_live.webp",
    "v88/images/podcasts.webp",
    "v88/images/southern_belle.webp",
    "v88/images/ssm_diagram.webp",
    "v88/impressum.html",
    "v88/index.html",
    "v88/js/DiaryService.js",
    "v88/js/Director.js",
    "v88/js/Main 20260319_1300.js",
    "v88/js/Main.js",
    "v88/js/PickerDrum.js",
    "v88/js/Placeholder.js",
    "v88/js/Player 20260319_1300.js",
    "v88/js/Player.js",
    "v88/js/SongCollection 20260319_1400.js",
    "v88/js/SongCollection.js",
    "v88/js/SongService.js",
    "v88/js/VersionCore.js",
    "v88/js/ffmpeg.min.js",
    "v88/js/lucide.js",
    "v88/js/tailwindcss.js",
    "v88/legal_notice.html",
    "v88/manifest.json",
    "v88/placeholder/footer.html",
    "v88/placeholder/header.html",
    "v88/privacy_policy.html"
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
