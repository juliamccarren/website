const STATIC_CACHE = 'julia-site-v91';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v91/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v91/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v91/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v91/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v91/artwork/a_slow_blossoming_rose.webp",
    "v91/artwork/alejandro.webp",
    "v91/artwork/antitoxic.webp",
    "v91/artwork/autumns_whisper.webp",
    "v91/artwork/avalanche.webp",
    "v91/artwork/betrayal.webp",
    "v91/artwork/big_dreams_shine.webp",
    "v91/artwork/big_dreams_shine_live.webp",
    "v91/artwork/bite_of_the_night.webp",
    "v91/artwork/boring.webp",
    "v91/artwork/brooklyn.webp",
    "v91/artwork/buckn_the_bain.webp",
    "v91/artwork/cheerleader.webp",
    "v91/artwork/coffee_in_amsterdam.webp",
    "v91/artwork/cool_fire.webp",
    "v91/artwork/date_disaster.webp",
    "v91/artwork/deep_blue.webp",
    "v91/artwork/deepdive_1.webp",
    "v91/artwork/deepdive_2.webp",
    "v91/artwork/default.webp",
    "v91/artwork/delta_blues.webp",
    "v91/artwork/digital_ghost.webp",
    "v91/artwork/disco_flashback.webp",
    "v91/artwork/disco_flashback_2.webp",
    "v91/artwork/disposable.webp",
    "v91/artwork/distortion.webp",
    "v91/artwork/drunk_not_dumb.webp",
    "v91/artwork/dynamite.webp",
    "v91/artwork/electric_hearts.webp",
    "v91/artwork/embers_and_sparks.webp",
    "v91/artwork/fences_down.webp",
    "v91/artwork/first_steps_to_stardom.webp",
    "v91/artwork/fog_of_fear.webp",
    "v91/artwork/forever.webp",
    "v91/artwork/four_chords_later.webp",
    "v91/artwork/friday_night.webp",
    "v91/artwork/from_first_steps_to_stardom.webp",
    "v91/artwork/frost_and_friction.webp",
    "v91/artwork/frozen_heart.webp",
    "v91/artwork/garage_band.webp",
    "v91/artwork/ghost_in_the_garden.webp",
    "v91/artwork/god_save_the_king.webp",
    "v91/artwork/golden_days.webp",
    "v91/artwork/good_enough.webp",
    "v91/artwork/happy_birthday_in_heaven.webp",
    "v91/artwork/haunted_haven.webp",
    "v91/artwork/heart_of_fire_and_ice.webp",
    "v91/artwork/her_first_truck.webp",
    "v91/artwork/hes_still_here.webp",
    "v91/artwork/home_now.webp",
    "v91/artwork/howling_wolves.webp",
    "v91/artwork/hypocrites.webp",
    "v91/artwork/i_hate_you.webp",
    "v91/artwork/i_love_school.webp",
    "v91/artwork/i_scream.webp",
    "v91/artwork/insatiable.webp",
    "v91/artwork/insult_the_ones_you_love.webp",
    "v91/artwork/introverted_girl.webp",
    "v91/artwork/jet_set.webp",
    "v91/artwork/julia_and_friends.webp",
    "v91/artwork/just_a_vibe.webp",
    "v91/artwork/just_wants_to_be_loved.webp",
    "v91/artwork/last_exit.webp",
    "v91/artwork/left_lane_legend.webp",
    "v91/artwork/little_butterflies.webp",
    "v91/artwork/luck_for_granted.webp",
    "v91/artwork/maybe_they_knew.webp",
    "v91/artwork/mind_the_gap.webp",
    "v91/artwork/my_foundation.webp",
    "v91/artwork/my_sweet_little_star.webp",
    "v91/artwork/need_for_speed.webp",
    "v91/artwork/nice_girl.webp",
    "v91/artwork/one_in_a_quarter_billion.webp",
    "v91/artwork/paradox_love.webp",
    "v91/artwork/password_expired.webp",
    "v91/artwork/password_expired_live.webp",
    "v91/artwork/peaks_of_gold.webp",
    "v91/artwork/private_lake.webp",
    "v91/artwork/radio_trash.webp",
    "v91/artwork/ride_the_groove.webp",
    "v91/artwork/rocker_songwriter.webp",
    "v91/artwork/sailing_on_open_water.webp",
    "v91/artwork/sanctified_sinner.webp",
    "v91/artwork/sanctuary_riot.webp",
    "v91/artwork/schools_out.webp",
    "v91/artwork/set_the_spirit_free.webp",
    "v91/artwork/siblings.webp",
    "v91/artwork/skeleton_dance.webp",
    "v91/artwork/slippery_road.webp",
    "v91/artwork/social_lubricant.webp",
    "v91/artwork/soulmate.webp",
    "v91/artwork/southern_belle.webp",
    "v91/artwork/spooky.webp",
    "v91/artwork/spring.webp",
    "v91/artwork/storm_of_the_abyss.webp",
    "v91/artwork/summers_farewell.webp",
    "v91/artwork/tabby_gonzalez.webp",
    "v91/artwork/the_city_i_long_for.webp",
    "v91/artwork/the_dive.webp",
    "v91/artwork/the_hard_way.webp",
    "v91/artwork/the_hook.webp",
    "v91/artwork/the_quiet_kind.webp",
    "v91/artwork/the_rhythm_of_the_fox.webp",
    "v91/artwork/the_rhythm_of_you.webp",
    "v91/artwork/the_sharpened_bow.webp",
    "v91/artwork/the_sirens_anchor.webp",
    "v91/artwork/the_soft_return.webp",
    "v91/artwork/the_steel_winged_swan.webp",
    "v91/artwork/this_is_fine.webp",
    "v91/artwork/tide_on_stone.webp",
    "v91/artwork/toccata.webp",
    "v91/artwork/trick_or_treat.webp",
    "v91/artwork/uncaged.webp",
    "v91/artwork/upon_a_winding_trail.webp",
    "v91/artwork/venezia.webp",
    "v91/artwork/verona.webp",
    "v91/artwork/weekend.webp",
    "v91/artwork/whiteout.webp",
    "v91/artwork/winterstorm.webp",
    "v91/css/style.css",
    "v91/datenschutz.html",
    "v91/essays/embeddings.html",
    "v91/essays/essay1.html",
    "v91/essays/ssm.html",
    "v91/images/Guitar-in-Dolomites.webp",
    "v91/images/Hero.webp",
    "v91/images/Hero_square.webp",
    "v91/images/Julia-skiing-Dolomites.webp",
    "v91/images/Stage_1.webp",
    "v91/images/Stage_2.webp",
    "v91/images/Stage_3.webp",
    "v91/images/Stage_4.webp",
    "v91/images/Stage_5.webp",
    "v91/images/Stage_6.webp",
    "v91/images/Stage_7.webp",
    "v91/images/Stage_8.webp",
    "v91/images/embeddings_music.webp",
    "v91/images/embeddings_words.webp",
    "v91/images/icons/app_icon_192.png",
    "v91/images/icons/app_icon_512.png",
    "v91/images/julia_embeddings.webp",
    "v91/images/julia_ssm_equations.webp",
    "v91/images/password_expired_live.webp",
    "v91/images/podcasts.webp",
    "v91/images/southern_belle.webp",
    "v91/images/ssm_diagram.webp",
    "v91/impressum.html",
    "v91/index.html",
    "v91/js/DiaryService.js",
    "v91/js/Director.js",
    "v91/js/Main 20260319_1300.js",
    "v91/js/Main.js",
    "v91/js/PickerDrum.js",
    "v91/js/Placeholder.js",
    "v91/js/Player 20260319_1300.js",
    "v91/js/Player.js",
    "v91/js/SongCollection 20260319_1400.js",
    "v91/js/SongCollection.js",
    "v91/js/SongService.js",
    "v91/js/VersionCore.js",
    "v91/js/ffmpeg.min.js",
    "v91/js/lucide.js",
    "v91/js/tailwindcss.js",
    "v91/legal_notice.html",
    "v91/manifest.json",
    "v91/placeholder/footer.html",
    "v91/placeholder/header.html",
    "v91/privacy_policy.html"
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
