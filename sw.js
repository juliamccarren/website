const STATIC_CACHE = 'julia-site-v94';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v94/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v94/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v94/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v94/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v94/artwork/a_slow_blossoming_rose.webp",
    "v94/artwork/alejandro.webp",
    "v94/artwork/antitoxic.webp",
    "v94/artwork/autumns_whisper.webp",
    "v94/artwork/avalanche.webp",
    "v94/artwork/betrayal.webp",
    "v94/artwork/big_dreams_shine.webp",
    "v94/artwork/big_dreams_shine_live.webp",
    "v94/artwork/bite_of_the_night.webp",
    "v94/artwork/black_cat_bones.webp",
    "v94/artwork/boring.webp",
    "v94/artwork/brooklyn.webp",
    "v94/artwork/buckn_the_bain.webp",
    "v94/artwork/cheerleader.webp",
    "v94/artwork/coffee_in_amsterdam.webp",
    "v94/artwork/cool_fire.webp",
    "v94/artwork/date_disaster.webp",
    "v94/artwork/deep_blue.webp",
    "v94/artwork/deepdive_1.webp",
    "v94/artwork/deepdive_2.webp",
    "v94/artwork/default.webp",
    "v94/artwork/delta_blues.webp",
    "v94/artwork/digital_ghost.webp",
    "v94/artwork/disco_flashback.webp",
    "v94/artwork/disco_flashback_2.webp",
    "v94/artwork/disposable.webp",
    "v94/artwork/distortion.webp",
    "v94/artwork/drunk_not_dumb.webp",
    "v94/artwork/dynamite.webp",
    "v94/artwork/electric_hearts.webp",
    "v94/artwork/embers_and_sparks.webp",
    "v94/artwork/fences_down.webp",
    "v94/artwork/first_steps_to_stardom.webp",
    "v94/artwork/fog_of_fear.webp",
    "v94/artwork/forever.webp",
    "v94/artwork/four_chords_later.webp",
    "v94/artwork/friday_night.webp",
    "v94/artwork/from_first_steps_to_stardom.webp",
    "v94/artwork/frost_and_friction.webp",
    "v94/artwork/frozen_heart.webp",
    "v94/artwork/garage_band.webp",
    "v94/artwork/ghost_in_the_garden.webp",
    "v94/artwork/god_save_the_king.webp",
    "v94/artwork/golden_days.webp",
    "v94/artwork/good_enough.webp",
    "v94/artwork/happy_birthday_in_heaven.webp",
    "v94/artwork/haunted_haven.webp",
    "v94/artwork/heart_of_fire_and_ice.webp",
    "v94/artwork/her_first_truck.webp",
    "v94/artwork/hes_still_here.webp",
    "v94/artwork/home_now.webp",
    "v94/artwork/howling_wolves.webp",
    "v94/artwork/hypocrites.webp",
    "v94/artwork/i_hate_you.webp",
    "v94/artwork/i_love_school.webp",
    "v94/artwork/i_scream.webp",
    "v94/artwork/insatiable.webp",
    "v94/artwork/insult_the_ones_you_love.webp",
    "v94/artwork/introverted_girl.webp",
    "v94/artwork/jet_set.webp",
    "v94/artwork/julia_and_friends.webp",
    "v94/artwork/just_a_vibe.webp",
    "v94/artwork/just_wants_to_be_loved.webp",
    "v94/artwork/last_exit.webp",
    "v94/artwork/left_lane_legend.webp",
    "v94/artwork/little_butterflies.webp",
    "v94/artwork/luck_for_granted.webp",
    "v94/artwork/maybe_they_knew.webp",
    "v94/artwork/mind_the_gap.webp",
    "v94/artwork/my_foundation.webp",
    "v94/artwork/my_sweet_little_star.webp",
    "v94/artwork/need_for_speed.webp",
    "v94/artwork/nice_girl.webp",
    "v94/artwork/one_in_a_quarter_billion.webp",
    "v94/artwork/paradox_love.webp",
    "v94/artwork/password_expired.webp",
    "v94/artwork/password_expired_live.webp",
    "v94/artwork/peaks_of_gold.webp",
    "v94/artwork/private_lake.webp",
    "v94/artwork/radio_trash.webp",
    "v94/artwork/ride_the_groove.webp",
    "v94/artwork/rocker_songwriter.webp",
    "v94/artwork/sailing_on_open_water.webp",
    "v94/artwork/sanctified_sinner.webp",
    "v94/artwork/sanctuary_riot.webp",
    "v94/artwork/schools_out.webp",
    "v94/artwork/set_the_spirit_free.webp",
    "v94/artwork/siblings.webp",
    "v94/artwork/skeleton_dance.webp",
    "v94/artwork/slippery_road.webp",
    "v94/artwork/social_lubricant.webp",
    "v94/artwork/soulmate.webp",
    "v94/artwork/southern_belle.webp",
    "v94/artwork/southern_heat.webp",
    "v94/artwork/southerns_eve.webp",
    "v94/artwork/spooky.webp",
    "v94/artwork/spring.webp",
    "v94/artwork/storm_of_the_abyss.webp",
    "v94/artwork/summers_farewell.webp",
    "v94/artwork/tabby_gonzalez.webp",
    "v94/artwork/the_city_i_long_for.webp",
    "v94/artwork/the_dive.webp",
    "v94/artwork/the_hard_way.webp",
    "v94/artwork/the_hook.webp",
    "v94/artwork/the_quiet_kind.webp",
    "v94/artwork/the_rhythm_of_the_fox.webp",
    "v94/artwork/the_rhythm_of_you.webp",
    "v94/artwork/the_sharpened_bow.webp",
    "v94/artwork/the_sirens_anchor.webp",
    "v94/artwork/the_soft_return.webp",
    "v94/artwork/the_steel_winged_swan.webp",
    "v94/artwork/this_is_fine.webp",
    "v94/artwork/tide_on_stone.webp",
    "v94/artwork/toccata.webp",
    "v94/artwork/trick_or_treat.webp",
    "v94/artwork/uncaged.webp",
    "v94/artwork/upon_a_winding_trail.webp",
    "v94/artwork/venezia.webp",
    "v94/artwork/verona.webp",
    "v94/artwork/weekend.webp",
    "v94/artwork/whiteout.webp",
    "v94/artwork/winterstorm.webp",
    "v94/css/style.css",
    "v94/datenschutz.html",
    "v94/essays/embeddings.html",
    "v94/essays/essay1.html",
    "v94/essays/gemini-code-1782138112807.html",
    "v94/essays/ssm.html",
    "v94/essays/transformers.html",
    "v94/images/Guitar-in-Dolomites.webp",
    "v94/images/Hero.webp",
    "v94/images/Hero_square.webp",
    "v94/images/Julia-skiing-Dolomites.webp",
    "v94/images/Stage_1.webp",
    "v94/images/Stage_2.webp",
    "v94/images/Stage_3.webp",
    "v94/images/Stage_4.webp",
    "v94/images/Stage_5.webp",
    "v94/images/Stage_6.webp",
    "v94/images/Stage_7.webp",
    "v94/images/Stage_8.webp",
    "v94/images/embeddings_music.webp",
    "v94/images/embeddings_words.webp",
    "v94/images/icons/app_icon_192.png",
    "v94/images/icons/app_icon_512.png",
    "v94/images/julia_embeddings.webp",
    "v94/images/julia_ssm_equations.webp",
    "v94/images/password_expired_live.webp",
    "v94/images/podcasts.webp",
    "v94/images/southern_belle.webp",
    "v94/images/ssm_diagram.webp",
    "v94/images/under_the_hood.webp",
    "v94/images/witch.webp",
    "v94/impressum.html",
    "v94/index.html",
    "v94/js/DiaryService.js",
    "v94/js/Director.js",
    "v94/js/Main 20260319_1300.js",
    "v94/js/Main.js",
    "v94/js/PickerDrum.js",
    "v94/js/Placeholder.js",
    "v94/js/Player.js",
    "v94/js/SongCollection.js",
    "v94/js/SongService.js",
    "v94/js/VersionCore.js",
    "v94/js/ffmpeg.min.js",
    "v94/js/lucide.js",
    "v94/js/tailwindcss.js",
    "v94/js/tex-mml-chtml.js",
    "v94/legal_notice.html",
    "v94/manifest.json",
    "v94/placeholder/footer.html",
    "v94/placeholder/header.html",
    "v94/privacy_policy.html"
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
