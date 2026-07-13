const STATIC_CACHE = 'julia-site-v99';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v99/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v99/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v99/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v99/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v99/artwork/a_slow_blossoming_rose.webp",
    "v99/artwork/alejandro.webp",
    "v99/artwork/antitoxic.webp",
    "v99/artwork/autumns_whisper.webp",
    "v99/artwork/avalanche.webp",
    "v99/artwork/betrayal.webp",
    "v99/artwork/big_dreams_shine.webp",
    "v99/artwork/big_dreams_shine_live.webp",
    "v99/artwork/bite_of_the_night.webp",
    "v99/artwork/black_cat_bones.webp",
    "v99/artwork/boring.webp",
    "v99/artwork/brooklyn.webp",
    "v99/artwork/buckn_the_bain.webp",
    "v99/artwork/cheerleader.webp",
    "v99/artwork/coffee_in_amsterdam.webp",
    "v99/artwork/cool_fire.webp",
    "v99/artwork/date_disaster.webp",
    "v99/artwork/deep_blue.webp",
    "v99/artwork/deepdive_1.webp",
    "v99/artwork/deepdive_2.webp",
    "v99/artwork/default.webp",
    "v99/artwork/delta_blues.webp",
    "v99/artwork/digital_ghost.webp",
    "v99/artwork/disco_flashback.webp",
    "v99/artwork/disco_flashback_2.webp",
    "v99/artwork/disposable.webp",
    "v99/artwork/distortion.webp",
    "v99/artwork/drunk_not_dumb.webp",
    "v99/artwork/dynamite.webp",
    "v99/artwork/electric_hearts.webp",
    "v99/artwork/embers_and_sparks.webp",
    "v99/artwork/fences_down.webp",
    "v99/artwork/fire_in_my_veins.webp",
    "v99/artwork/first_steps_to_stardom.webp",
    "v99/artwork/fog_of_fear.webp",
    "v99/artwork/forever.webp",
    "v99/artwork/four_chords_later.webp",
    "v99/artwork/friday_night.webp",
    "v99/artwork/from_first_steps_to_stardom.webp",
    "v99/artwork/frost_and_friction.webp",
    "v99/artwork/frozen_heart.webp",
    "v99/artwork/garage_band.webp",
    "v99/artwork/ghost_in_the_garden.webp",
    "v99/artwork/god_save_the_king.webp",
    "v99/artwork/golden_days.webp",
    "v99/artwork/good_enough.webp",
    "v99/artwork/happy_birthday_in_heaven.webp",
    "v99/artwork/haunted_haven.webp",
    "v99/artwork/heart_of_fire_and_ice.webp",
    "v99/artwork/her_first_truck.webp",
    "v99/artwork/hes_still_here.webp",
    "v99/artwork/home_now.webp",
    "v99/artwork/howling_wolves.webp",
    "v99/artwork/hurricane.webp",
    "v99/artwork/hypocrites.webp",
    "v99/artwork/i_hate_you.webp",
    "v99/artwork/i_love_school.webp",
    "v99/artwork/i_scream.webp",
    "v99/artwork/insatiable.webp",
    "v99/artwork/insult_the_ones_you_love.webp",
    "v99/artwork/introverted_girl.webp",
    "v99/artwork/jet_set.webp",
    "v99/artwork/julia_and_friends.webp",
    "v99/artwork/just_a_vibe.webp",
    "v99/artwork/just_wants_to_be_loved.webp",
    "v99/artwork/last_exit.webp",
    "v99/artwork/left_lane_legend.webp",
    "v99/artwork/little_butterflies.webp",
    "v99/artwork/luck_for_granted.webp",
    "v99/artwork/maybe_they_knew.webp",
    "v99/artwork/mind_the_gap.webp",
    "v99/artwork/my_foundation.webp",
    "v99/artwork/my_sweet_little_star.webp",
    "v99/artwork/need_for_speed.webp",
    "v99/artwork/nice_girl.webp",
    "v99/artwork/one_in_a_quarter_billion.webp",
    "v99/artwork/paradox_love.webp",
    "v99/artwork/password_expired.webp",
    "v99/artwork/password_expired_live.webp",
    "v99/artwork/pathetique.webp",
    "v99/artwork/peaks_of_gold.webp",
    "v99/artwork/private_lake.webp",
    "v99/artwork/radio_trash.webp",
    "v99/artwork/ride_the_groove.webp",
    "v99/artwork/rocker_songwriter.webp",
    "v99/artwork/sailing_on_open_water.webp",
    "v99/artwork/sanctified_sinner.webp",
    "v99/artwork/sanctuary_riot.webp",
    "v99/artwork/schools_out.webp",
    "v99/artwork/set_the_spirit_free.webp",
    "v99/artwork/siblings.webp",
    "v99/artwork/skeleton_dance.webp",
    "v99/artwork/slippery_road.webp",
    "v99/artwork/social_lubricant.webp",
    "v99/artwork/soulmate.webp",
    "v99/artwork/southern_belle.webp",
    "v99/artwork/southern_heat.webp",
    "v99/artwork/southerns_eve.webp",
    "v99/artwork/spooky.webp",
    "v99/artwork/spring.webp",
    "v99/artwork/storm_of_the_abyss.webp",
    "v99/artwork/summers_farewell.webp",
    "v99/artwork/surfing_girl_wild_and_free.webp",
    "v99/artwork/tabby_gonzalez.webp",
    "v99/artwork/the_city_i_long_for.webp",
    "v99/artwork/the_dive.webp",
    "v99/artwork/the_hard_way.webp",
    "v99/artwork/the_hook.webp",
    "v99/artwork/the_quiet_kind.webp",
    "v99/artwork/the_rhythm_of_the_fox.webp",
    "v99/artwork/the_rhythm_of_you.webp",
    "v99/artwork/the_sharpened_bow.webp",
    "v99/artwork/the_sirens_anchor.webp",
    "v99/artwork/the_soft_return.webp",
    "v99/artwork/the_steel_winged_swan.webp",
    "v99/artwork/this_is_fine.webp",
    "v99/artwork/tide_on_stone.webp",
    "v99/artwork/toccata.webp",
    "v99/artwork/trick_or_treat.webp",
    "v99/artwork/uncaged.webp",
    "v99/artwork/upon_a_winding_trail.webp",
    "v99/artwork/venezia.webp",
    "v99/artwork/verona.webp",
    "v99/artwork/weekend.webp",
    "v99/artwork/whiteout.webp",
    "v99/artwork/winterstorm.webp",
    "v99/css/style.css",
    "v99/datenschutz.html",
    "v99/essays/embeddings.html",
    "v99/essays/essay1.html",
    "v99/essays/gemini-code-1782138112807.html",
    "v99/essays/ssm.html",
    "v99/essays/transformers.html",
    "v99/images/Guitar-in-Dolomites.webp",
    "v99/images/Hero.webp",
    "v99/images/Hero_square.webp",
    "v99/images/Julia-skiing-Dolomites.webp",
    "v99/images/Stage_1.webp",
    "v99/images/Stage_2.webp",
    "v99/images/Stage_3.webp",
    "v99/images/Stage_4.webp",
    "v99/images/Stage_5.webp",
    "v99/images/Stage_6.webp",
    "v99/images/Stage_7.webp",
    "v99/images/Stage_8.webp",
    "v99/images/embeddings_music.webp",
    "v99/images/embeddings_words.webp",
    "v99/images/icons/app_icon_192.png",
    "v99/images/icons/app_icon_512.png",
    "v99/images/julia_embeddings.webp",
    "v99/images/julia_ssm_equations.webp",
    "v99/images/password_expired_live.webp",
    "v99/images/podcasts.webp",
    "v99/images/southern_belle.webp",
    "v99/images/ssm_diagram.webp",
    "v99/images/surfing_girl_wild_and_free.webp",
    "v99/images/under_the_hood.webp",
    "v99/images/witch.webp",
    "v99/impressum.html",
    "v99/index.html",
    "v99/js/DiaryService.js",
    "v99/js/Director.js",
    "v99/js/Main 20260319_1300.js",
    "v99/js/Main.js",
    "v99/js/PickerDrum.js",
    "v99/js/Placeholder.js",
    "v99/js/Player.js",
    "v99/js/SongCollection.js",
    "v99/js/SongService.js",
    "v99/js/VersionCore.js",
    "v99/js/ffmpeg.min.js",
    "v99/js/lucide.js",
    "v99/js/tailwindcss.js",
    "v99/js/tex-mml-chtml.js",
    "v99/legal_notice.html",
    "v99/manifest.json",
    "v99/placeholder/footer.html",
    "v99/placeholder/header.html",
    "v99/privacy_policy.html"
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
