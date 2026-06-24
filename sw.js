const STATIC_CACHE = 'julia-site-v93';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v93/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v93/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v93/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v93/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v93/artwork/a_slow_blossoming_rose.webp",
    "v93/artwork/alejandro.webp",
    "v93/artwork/antitoxic.webp",
    "v93/artwork/autumns_whisper.webp",
    "v93/artwork/avalanche.webp",
    "v93/artwork/betrayal.webp",
    "v93/artwork/big_dreams_shine.webp",
    "v93/artwork/big_dreams_shine_live.webp",
    "v93/artwork/bite_of_the_night.webp",
    "v93/artwork/boring.webp",
    "v93/artwork/brooklyn.webp",
    "v93/artwork/buckn_the_bain.webp",
    "v93/artwork/cheerleader.webp",
    "v93/artwork/coffee_in_amsterdam.webp",
    "v93/artwork/cool_fire.webp",
    "v93/artwork/date_disaster.webp",
    "v93/artwork/deep_blue.webp",
    "v93/artwork/deepdive_1.webp",
    "v93/artwork/deepdive_2.webp",
    "v93/artwork/default.webp",
    "v93/artwork/delta_blues.webp",
    "v93/artwork/digital_ghost.webp",
    "v93/artwork/disco_flashback.webp",
    "v93/artwork/disco_flashback_2.webp",
    "v93/artwork/disposable.webp",
    "v93/artwork/distortion.webp",
    "v93/artwork/drunk_not_dumb.webp",
    "v93/artwork/dynamite.webp",
    "v93/artwork/electric_hearts.webp",
    "v93/artwork/embers_and_sparks.webp",
    "v93/artwork/fences_down.webp",
    "v93/artwork/first_steps_to_stardom.webp",
    "v93/artwork/fog_of_fear.webp",
    "v93/artwork/forever.webp",
    "v93/artwork/four_chords_later.webp",
    "v93/artwork/friday_night.webp",
    "v93/artwork/from_first_steps_to_stardom.webp",
    "v93/artwork/frost_and_friction.webp",
    "v93/artwork/frozen_heart.webp",
    "v93/artwork/garage_band.webp",
    "v93/artwork/ghost_in_the_garden.webp",
    "v93/artwork/god_save_the_king.webp",
    "v93/artwork/golden_days.webp",
    "v93/artwork/good_enough.webp",
    "v93/artwork/happy_birthday_in_heaven.webp",
    "v93/artwork/haunted_haven.webp",
    "v93/artwork/heart_of_fire_and_ice.webp",
    "v93/artwork/her_first_truck.webp",
    "v93/artwork/hes_still_here.webp",
    "v93/artwork/home_now.webp",
    "v93/artwork/howling_wolves.webp",
    "v93/artwork/hypocrites.webp",
    "v93/artwork/i_hate_you.webp",
    "v93/artwork/i_love_school.webp",
    "v93/artwork/i_scream.webp",
    "v93/artwork/insatiable.webp",
    "v93/artwork/insult_the_ones_you_love.webp",
    "v93/artwork/introverted_girl.webp",
    "v93/artwork/jet_set.webp",
    "v93/artwork/julia_and_friends.webp",
    "v93/artwork/just_a_vibe.webp",
    "v93/artwork/just_wants_to_be_loved.webp",
    "v93/artwork/last_exit.webp",
    "v93/artwork/left_lane_legend.webp",
    "v93/artwork/little_butterflies.webp",
    "v93/artwork/luck_for_granted.webp",
    "v93/artwork/maybe_they_knew.webp",
    "v93/artwork/mind_the_gap.webp",
    "v93/artwork/my_foundation.webp",
    "v93/artwork/my_sweet_little_star.webp",
    "v93/artwork/need_for_speed.webp",
    "v93/artwork/nice_girl.webp",
    "v93/artwork/one_in_a_quarter_billion.webp",
    "v93/artwork/paradox_love.webp",
    "v93/artwork/password_expired.webp",
    "v93/artwork/password_expired_live.webp",
    "v93/artwork/peaks_of_gold.webp",
    "v93/artwork/private_lake.webp",
    "v93/artwork/radio_trash.webp",
    "v93/artwork/ride_the_groove.webp",
    "v93/artwork/rocker_songwriter.webp",
    "v93/artwork/sailing_on_open_water.webp",
    "v93/artwork/sanctified_sinner.webp",
    "v93/artwork/sanctuary_riot.webp",
    "v93/artwork/schools_out.webp",
    "v93/artwork/set_the_spirit_free.webp",
    "v93/artwork/siblings.webp",
    "v93/artwork/skeleton_dance.webp",
    "v93/artwork/slippery_road.webp",
    "v93/artwork/social_lubricant.webp",
    "v93/artwork/soulmate.webp",
    "v93/artwork/southern_belle.webp",
    "v93/artwork/southerns_eve.webp",
    "v93/artwork/spooky.webp",
    "v93/artwork/spring.webp",
    "v93/artwork/storm_of_the_abyss.webp",
    "v93/artwork/summers_farewell.webp",
    "v93/artwork/tabby_gonzalez.webp",
    "v93/artwork/the_city_i_long_for.webp",
    "v93/artwork/the_dive.webp",
    "v93/artwork/the_hard_way.webp",
    "v93/artwork/the_hook.webp",
    "v93/artwork/the_quiet_kind.webp",
    "v93/artwork/the_rhythm_of_the_fox.webp",
    "v93/artwork/the_rhythm_of_you.webp",
    "v93/artwork/the_sharpened_bow.webp",
    "v93/artwork/the_sirens_anchor.webp",
    "v93/artwork/the_soft_return.webp",
    "v93/artwork/the_steel_winged_swan.webp",
    "v93/artwork/this_is_fine.webp",
    "v93/artwork/tide_on_stone.webp",
    "v93/artwork/toccata.webp",
    "v93/artwork/trick_or_treat.webp",
    "v93/artwork/uncaged.webp",
    "v93/artwork/upon_a_winding_trail.webp",
    "v93/artwork/venezia.webp",
    "v93/artwork/verona.webp",
    "v93/artwork/weekend.webp",
    "v93/artwork/whiteout.webp",
    "v93/artwork/winterstorm.webp",
    "v93/css/style.css",
    "v93/datenschutz.html",
    "v93/essays/embeddings.html",
    "v93/essays/essay1.html",
    "v93/essays/gemini-code-1782138112807.html",
    "v93/essays/ssm.html",
    "v93/essays/transformers.html",
    "v93/images/Guitar-in-Dolomites.webp",
    "v93/images/Hero.webp",
    "v93/images/Hero_square.webp",
    "v93/images/Julia-skiing-Dolomites.webp",
    "v93/images/Stage_1.webp",
    "v93/images/Stage_2.webp",
    "v93/images/Stage_3.webp",
    "v93/images/Stage_4.webp",
    "v93/images/Stage_5.webp",
    "v93/images/Stage_6.webp",
    "v93/images/Stage_7.webp",
    "v93/images/Stage_8.webp",
    "v93/images/embeddings_music.webp",
    "v93/images/embeddings_words.webp",
    "v93/images/icons/app_icon_192.png",
    "v93/images/icons/app_icon_512.png",
    "v93/images/julia_embeddings.webp",
    "v93/images/julia_ssm_equations.webp",
    "v93/images/password_expired_live.webp",
    "v93/images/podcasts.webp",
    "v93/images/southern_belle.webp",
    "v93/images/ssm_diagram.webp",
    "v93/images/under_the_hood.webp",
    "v93/images/witch.webp",
    "v93/impressum.html",
    "v93/index.html",
    "v93/js/DiaryService.js",
    "v93/js/Director.js",
    "v93/js/Main 20260319_1300.js",
    "v93/js/Main.js",
    "v93/js/PickerDrum.js",
    "v93/js/Placeholder.js",
    "v93/js/Player.js",
    "v93/js/SongCollection.js",
    "v93/js/SongService.js",
    "v93/js/VersionCore.js",
    "v93/js/ffmpeg.min.js",
    "v93/js/lucide.js",
    "v93/js/tailwindcss.js",
    "v93/js/tex-mml-chtml.js",
    "v93/legal_notice.html",
    "v93/manifest.json",
    "v93/placeholder/footer.html",
    "v93/placeholder/header.html",
    "v93/privacy_policy.html"
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
