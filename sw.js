const STATIC_CACHE = 'julia-site-v95';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v95/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v95/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v95/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v95/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v95/artwork/a_slow_blossoming_rose.webp",
    "v95/artwork/alejandro.webp",
    "v95/artwork/antitoxic.webp",
    "v95/artwork/autumns_whisper.webp",
    "v95/artwork/avalanche.webp",
    "v95/artwork/betrayal.webp",
    "v95/artwork/big_dreams_shine.webp",
    "v95/artwork/big_dreams_shine_live.webp",
    "v95/artwork/bite_of_the_night.webp",
    "v95/artwork/black_cat_bones.webp",
    "v95/artwork/boring.webp",
    "v95/artwork/brooklyn.webp",
    "v95/artwork/buckn_the_bain.webp",
    "v95/artwork/cheerleader.webp",
    "v95/artwork/coffee_in_amsterdam.webp",
    "v95/artwork/cool_fire.webp",
    "v95/artwork/date_disaster.webp",
    "v95/artwork/deep_blue.webp",
    "v95/artwork/deepdive_1.webp",
    "v95/artwork/deepdive_2.webp",
    "v95/artwork/default.webp",
    "v95/artwork/delta_blues.webp",
    "v95/artwork/digital_ghost.webp",
    "v95/artwork/disco_flashback.webp",
    "v95/artwork/disco_flashback_2.webp",
    "v95/artwork/disposable.webp",
    "v95/artwork/distortion.webp",
    "v95/artwork/drunk_not_dumb.webp",
    "v95/artwork/dynamite.webp",
    "v95/artwork/electric_hearts.webp",
    "v95/artwork/embers_and_sparks.webp",
    "v95/artwork/fences_down.webp",
    "v95/artwork/first_steps_to_stardom.webp",
    "v95/artwork/fog_of_fear.webp",
    "v95/artwork/forever.webp",
    "v95/artwork/four_chords_later.webp",
    "v95/artwork/friday_night.webp",
    "v95/artwork/from_first_steps_to_stardom.webp",
    "v95/artwork/frost_and_friction.webp",
    "v95/artwork/frozen_heart.webp",
    "v95/artwork/garage_band.webp",
    "v95/artwork/ghost_in_the_garden.webp",
    "v95/artwork/god_save_the_king.webp",
    "v95/artwork/golden_days.webp",
    "v95/artwork/good_enough.webp",
    "v95/artwork/happy_birthday_in_heaven.webp",
    "v95/artwork/haunted_haven.webp",
    "v95/artwork/heart_of_fire_and_ice.webp",
    "v95/artwork/her_first_truck.webp",
    "v95/artwork/hes_still_here.webp",
    "v95/artwork/home_now.webp",
    "v95/artwork/howling_wolves.webp",
    "v95/artwork/hypocrites.webp",
    "v95/artwork/i_hate_you.webp",
    "v95/artwork/i_love_school.webp",
    "v95/artwork/i_scream.webp",
    "v95/artwork/insatiable.webp",
    "v95/artwork/insult_the_ones_you_love.webp",
    "v95/artwork/introverted_girl.webp",
    "v95/artwork/jet_set.webp",
    "v95/artwork/julia_and_friends.webp",
    "v95/artwork/just_a_vibe.webp",
    "v95/artwork/just_wants_to_be_loved.webp",
    "v95/artwork/last_exit.webp",
    "v95/artwork/left_lane_legend.webp",
    "v95/artwork/little_butterflies.webp",
    "v95/artwork/luck_for_granted.webp",
    "v95/artwork/maybe_they_knew.webp",
    "v95/artwork/mind_the_gap.webp",
    "v95/artwork/my_foundation.webp",
    "v95/artwork/my_sweet_little_star.webp",
    "v95/artwork/need_for_speed.webp",
    "v95/artwork/nice_girl.webp",
    "v95/artwork/one_in_a_quarter_billion.webp",
    "v95/artwork/paradox_love.webp",
    "v95/artwork/password_expired.webp",
    "v95/artwork/password_expired_live.webp",
    "v95/artwork/peaks_of_gold.webp",
    "v95/artwork/private_lake.webp",
    "v95/artwork/radio_trash.webp",
    "v95/artwork/ride_the_groove.webp",
    "v95/artwork/rocker_songwriter.webp",
    "v95/artwork/sailing_on_open_water.webp",
    "v95/artwork/sanctified_sinner.webp",
    "v95/artwork/sanctuary_riot.webp",
    "v95/artwork/schools_out.webp",
    "v95/artwork/set_the_spirit_free.webp",
    "v95/artwork/siblings.webp",
    "v95/artwork/skeleton_dance.webp",
    "v95/artwork/slippery_road.webp",
    "v95/artwork/social_lubricant.webp",
    "v95/artwork/soulmate.webp",
    "v95/artwork/southern_belle.webp",
    "v95/artwork/southern_heat.webp",
    "v95/artwork/southerns_eve.webp",
    "v95/artwork/spooky.webp",
    "v95/artwork/spring.webp",
    "v95/artwork/storm_of_the_abyss.webp",
    "v95/artwork/summers_farewell.webp",
    "v95/artwork/tabby_gonzalez.webp",
    "v95/artwork/the_city_i_long_for.webp",
    "v95/artwork/the_dive.webp",
    "v95/artwork/the_hard_way.webp",
    "v95/artwork/the_hook.webp",
    "v95/artwork/the_quiet_kind.webp",
    "v95/artwork/the_rhythm_of_the_fox.webp",
    "v95/artwork/the_rhythm_of_you.webp",
    "v95/artwork/the_sharpened_bow.webp",
    "v95/artwork/the_sirens_anchor.webp",
    "v95/artwork/the_soft_return.webp",
    "v95/artwork/the_steel_winged_swan.webp",
    "v95/artwork/this_is_fine.webp",
    "v95/artwork/tide_on_stone.webp",
    "v95/artwork/toccata.webp",
    "v95/artwork/trick_or_treat.webp",
    "v95/artwork/uncaged.webp",
    "v95/artwork/upon_a_winding_trail.webp",
    "v95/artwork/venezia.webp",
    "v95/artwork/verona.webp",
    "v95/artwork/weekend.webp",
    "v95/artwork/whiteout.webp",
    "v95/artwork/winterstorm.webp",
    "v95/css/style.css",
    "v95/datenschutz.html",
    "v95/essays/embeddings.html",
    "v95/essays/essay1.html",
    "v95/essays/gemini-code-1782138112807.html",
    "v95/essays/ssm.html",
    "v95/essays/transformers.html",
    "v95/images/Guitar-in-Dolomites.webp",
    "v95/images/Hero.webp",
    "v95/images/Hero_square.webp",
    "v95/images/Julia-skiing-Dolomites.webp",
    "v95/images/Stage_1.webp",
    "v95/images/Stage_2.webp",
    "v95/images/Stage_3.webp",
    "v95/images/Stage_4.webp",
    "v95/images/Stage_5.webp",
    "v95/images/Stage_6.webp",
    "v95/images/Stage_7.webp",
    "v95/images/Stage_8.webp",
    "v95/images/embeddings_music.webp",
    "v95/images/embeddings_words.webp",
    "v95/images/icons/app_icon_192.png",
    "v95/images/icons/app_icon_512.png",
    "v95/images/julia_embeddings.webp",
    "v95/images/julia_ssm_equations.webp",
    "v95/images/password_expired_live.webp",
    "v95/images/podcasts.webp",
    "v95/images/southern_belle.webp",
    "v95/images/ssm_diagram.webp",
    "v95/images/under_the_hood.webp",
    "v95/images/witch.webp",
    "v95/impressum.html",
    "v95/index.html",
    "v95/js/DiaryService.js",
    "v95/js/Director.js",
    "v95/js/Main 20260319_1300.js",
    "v95/js/Main.js",
    "v95/js/PickerDrum.js",
    "v95/js/Placeholder.js",
    "v95/js/Player.js",
    "v95/js/SongCollection.js",
    "v95/js/SongService.js",
    "v95/js/VersionCore.js",
    "v95/js/ffmpeg.min.js",
    "v95/js/lucide.js",
    "v95/js/tailwindcss.js",
    "v95/js/tex-mml-chtml.js",
    "v95/legal_notice.html",
    "v95/manifest.json",
    "v95/placeholder/footer.html",
    "v95/placeholder/header.html",
    "v95/privacy_policy.html"
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
