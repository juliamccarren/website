const STATIC_CACHE = 'julia-site-v98';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v98/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v98/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v98/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v98/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v98/artwork/a_slow_blossoming_rose.webp",
    "v98/artwork/alejandro.webp",
    "v98/artwork/antitoxic.webp",
    "v98/artwork/autumns_whisper.webp",
    "v98/artwork/avalanche.webp",
    "v98/artwork/betrayal.webp",
    "v98/artwork/big_dreams_shine.webp",
    "v98/artwork/big_dreams_shine_live.webp",
    "v98/artwork/bite_of_the_night.webp",
    "v98/artwork/black_cat_bones.webp",
    "v98/artwork/boring.webp",
    "v98/artwork/brooklyn.webp",
    "v98/artwork/buckn_the_bain.webp",
    "v98/artwork/cheerleader.webp",
    "v98/artwork/coffee_in_amsterdam.webp",
    "v98/artwork/cool_fire.webp",
    "v98/artwork/date_disaster.webp",
    "v98/artwork/deep_blue.webp",
    "v98/artwork/deepdive_1.webp",
    "v98/artwork/deepdive_2.webp",
    "v98/artwork/default.webp",
    "v98/artwork/delta_blues.webp",
    "v98/artwork/digital_ghost.webp",
    "v98/artwork/disco_flashback.webp",
    "v98/artwork/disco_flashback_2.webp",
    "v98/artwork/disposable.webp",
    "v98/artwork/distortion.webp",
    "v98/artwork/drunk_not_dumb.webp",
    "v98/artwork/dynamite.webp",
    "v98/artwork/electric_hearts.webp",
    "v98/artwork/embers_and_sparks.webp",
    "v98/artwork/fences_down.webp",
    "v98/artwork/fire_in_my_veins.webp",
    "v98/artwork/first_steps_to_stardom.webp",
    "v98/artwork/fog_of_fear.webp",
    "v98/artwork/forever.webp",
    "v98/artwork/four_chords_later.webp",
    "v98/artwork/friday_night.webp",
    "v98/artwork/from_first_steps_to_stardom.webp",
    "v98/artwork/frost_and_friction.webp",
    "v98/artwork/frozen_heart.webp",
    "v98/artwork/garage_band.webp",
    "v98/artwork/ghost_in_the_garden.webp",
    "v98/artwork/god_save_the_king.webp",
    "v98/artwork/golden_days.webp",
    "v98/artwork/good_enough.webp",
    "v98/artwork/happy_birthday_in_heaven.webp",
    "v98/artwork/haunted_haven.webp",
    "v98/artwork/heart_of_fire_and_ice.webp",
    "v98/artwork/her_first_truck.webp",
    "v98/artwork/hes_still_here.webp",
    "v98/artwork/home_now.webp",
    "v98/artwork/howling_wolves.webp",
    "v98/artwork/hurricane.webp",
    "v98/artwork/hypocrites.webp",
    "v98/artwork/i_hate_you.webp",
    "v98/artwork/i_love_school.webp",
    "v98/artwork/i_scream.webp",
    "v98/artwork/insatiable.webp",
    "v98/artwork/insult_the_ones_you_love.webp",
    "v98/artwork/introverted_girl.webp",
    "v98/artwork/jet_set.webp",
    "v98/artwork/julia_and_friends.webp",
    "v98/artwork/just_a_vibe.webp",
    "v98/artwork/just_wants_to_be_loved.webp",
    "v98/artwork/last_exit.webp",
    "v98/artwork/left_lane_legend.webp",
    "v98/artwork/little_butterflies.webp",
    "v98/artwork/luck_for_granted.webp",
    "v98/artwork/maybe_they_knew.webp",
    "v98/artwork/mind_the_gap.webp",
    "v98/artwork/my_foundation.webp",
    "v98/artwork/my_sweet_little_star.webp",
    "v98/artwork/need_for_speed.webp",
    "v98/artwork/nice_girl.webp",
    "v98/artwork/one_in_a_quarter_billion.webp",
    "v98/artwork/paradox_love.webp",
    "v98/artwork/password_expired.webp",
    "v98/artwork/password_expired_live.webp",
    "v98/artwork/peaks_of_gold.webp",
    "v98/artwork/private_lake.webp",
    "v98/artwork/radio_trash.webp",
    "v98/artwork/ride_the_groove.webp",
    "v98/artwork/rocker_songwriter.webp",
    "v98/artwork/sailing_on_open_water.webp",
    "v98/artwork/sanctified_sinner.webp",
    "v98/artwork/sanctuary_riot.webp",
    "v98/artwork/schools_out.webp",
    "v98/artwork/set_the_spirit_free.webp",
    "v98/artwork/siblings.webp",
    "v98/artwork/skeleton_dance.webp",
    "v98/artwork/slippery_road.webp",
    "v98/artwork/social_lubricant.webp",
    "v98/artwork/soulmate.webp",
    "v98/artwork/southern_belle.webp",
    "v98/artwork/southern_heat.webp",
    "v98/artwork/southerns_eve.webp",
    "v98/artwork/spooky.webp",
    "v98/artwork/spring.webp",
    "v98/artwork/storm_of_the_abyss.webp",
    "v98/artwork/summers_farewell.webp",
    "v98/artwork/surfing_girl_wild_and_free.webp",
    "v98/artwork/tabby_gonzalez.webp",
    "v98/artwork/the_city_i_long_for.webp",
    "v98/artwork/the_dive.webp",
    "v98/artwork/the_hard_way.webp",
    "v98/artwork/the_hook.webp",
    "v98/artwork/the_quiet_kind.webp",
    "v98/artwork/the_rhythm_of_the_fox.webp",
    "v98/artwork/the_rhythm_of_you.webp",
    "v98/artwork/the_sharpened_bow.webp",
    "v98/artwork/the_sirens_anchor.webp",
    "v98/artwork/the_soft_return.webp",
    "v98/artwork/the_steel_winged_swan.webp",
    "v98/artwork/this_is_fine.webp",
    "v98/artwork/tide_on_stone.webp",
    "v98/artwork/toccata.webp",
    "v98/artwork/trick_or_treat.webp",
    "v98/artwork/uncaged.webp",
    "v98/artwork/upon_a_winding_trail.webp",
    "v98/artwork/venezia.webp",
    "v98/artwork/verona.webp",
    "v98/artwork/weekend.webp",
    "v98/artwork/whiteout.webp",
    "v98/artwork/winterstorm.webp",
    "v98/css/style.css",
    "v98/datenschutz.html",
    "v98/essays/embeddings.html",
    "v98/essays/essay1.html",
    "v98/essays/gemini-code-1782138112807.html",
    "v98/essays/ssm.html",
    "v98/essays/transformers.html",
    "v98/images/Guitar-in-Dolomites.webp",
    "v98/images/Hero.webp",
    "v98/images/Hero_square.webp",
    "v98/images/Julia-skiing-Dolomites.webp",
    "v98/images/Stage_1.webp",
    "v98/images/Stage_2.webp",
    "v98/images/Stage_3.webp",
    "v98/images/Stage_4.webp",
    "v98/images/Stage_5.webp",
    "v98/images/Stage_6.webp",
    "v98/images/Stage_7.webp",
    "v98/images/Stage_8.webp",
    "v98/images/embeddings_music.webp",
    "v98/images/embeddings_words.webp",
    "v98/images/icons/app_icon_192.png",
    "v98/images/icons/app_icon_512.png",
    "v98/images/julia_embeddings.webp",
    "v98/images/julia_ssm_equations.webp",
    "v98/images/password_expired_live.webp",
    "v98/images/podcasts.webp",
    "v98/images/southern_belle.webp",
    "v98/images/ssm_diagram.webp",
    "v98/images/surfing_girl_wild_and_free.webp",
    "v98/images/under_the_hood.webp",
    "v98/images/witch.webp",
    "v98/impressum.html",
    "v98/index.html",
    "v98/js/DiaryService.js",
    "v98/js/Director.js",
    "v98/js/Main 20260319_1300.js",
    "v98/js/Main.js",
    "v98/js/PickerDrum.js",
    "v98/js/Placeholder.js",
    "v98/js/Player.js",
    "v98/js/SongCollection.js",
    "v98/js/SongService.js",
    "v98/js/VersionCore.js",
    "v98/js/ffmpeg.min.js",
    "v98/js/lucide.js",
    "v98/js/tailwindcss.js",
    "v98/js/tex-mml-chtml.js",
    "v98/legal_notice.html",
    "v98/manifest.json",
    "v98/placeholder/footer.html",
    "v98/placeholder/header.html",
    "v98/privacy_policy.html"
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
