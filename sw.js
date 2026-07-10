const STATIC_CACHE = 'julia-site-v97';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v97/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v97/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v97/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v97/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v97/artwork/a_slow_blossoming_rose.webp",
    "v97/artwork/alejandro.webp",
    "v97/artwork/antitoxic.webp",
    "v97/artwork/autumns_whisper.webp",
    "v97/artwork/avalanche.webp",
    "v97/artwork/betrayal.webp",
    "v97/artwork/big_dreams_shine.webp",
    "v97/artwork/big_dreams_shine_live.webp",
    "v97/artwork/bite_of_the_night.webp",
    "v97/artwork/black_cat_bones.webp",
    "v97/artwork/boring.webp",
    "v97/artwork/brooklyn.webp",
    "v97/artwork/buckn_the_bain.webp",
    "v97/artwork/cheerleader.webp",
    "v97/artwork/coffee_in_amsterdam.webp",
    "v97/artwork/cool_fire.webp",
    "v97/artwork/date_disaster.webp",
    "v97/artwork/deep_blue.webp",
    "v97/artwork/deepdive_1.webp",
    "v97/artwork/deepdive_2.webp",
    "v97/artwork/default.webp",
    "v97/artwork/delta_blues.webp",
    "v97/artwork/digital_ghost.webp",
    "v97/artwork/disco_flashback.webp",
    "v97/artwork/disco_flashback_2.webp",
    "v97/artwork/disposable.webp",
    "v97/artwork/distortion.webp",
    "v97/artwork/drunk_not_dumb.webp",
    "v97/artwork/dynamite.webp",
    "v97/artwork/electric_hearts.webp",
    "v97/artwork/embers_and_sparks.webp",
    "v97/artwork/fences_down.webp",
    "v97/artwork/fire_in_my_veins.webp",
    "v97/artwork/first_steps_to_stardom.webp",
    "v97/artwork/fog_of_fear.webp",
    "v97/artwork/forever.webp",
    "v97/artwork/four_chords_later.webp",
    "v97/artwork/friday_night.webp",
    "v97/artwork/from_first_steps_to_stardom.webp",
    "v97/artwork/frost_and_friction.webp",
    "v97/artwork/frozen_heart.webp",
    "v97/artwork/garage_band.webp",
    "v97/artwork/ghost_in_the_garden.webp",
    "v97/artwork/god_save_the_king.webp",
    "v97/artwork/golden_days.webp",
    "v97/artwork/good_enough.webp",
    "v97/artwork/happy_birthday_in_heaven.webp",
    "v97/artwork/haunted_haven.webp",
    "v97/artwork/heart_of_fire_and_ice.webp",
    "v97/artwork/her_first_truck.webp",
    "v97/artwork/hes_still_here.webp",
    "v97/artwork/home_now.webp",
    "v97/artwork/howling_wolves.webp",
    "v97/artwork/hypocrites.webp",
    "v97/artwork/i_hate_you.webp",
    "v97/artwork/i_love_school.webp",
    "v97/artwork/i_scream.webp",
    "v97/artwork/insatiable.webp",
    "v97/artwork/insult_the_ones_you_love.webp",
    "v97/artwork/introverted_girl.webp",
    "v97/artwork/jet_set.webp",
    "v97/artwork/julia_and_friends.webp",
    "v97/artwork/just_a_vibe.webp",
    "v97/artwork/just_wants_to_be_loved.webp",
    "v97/artwork/last_exit.webp",
    "v97/artwork/left_lane_legend.webp",
    "v97/artwork/little_butterflies.webp",
    "v97/artwork/luck_for_granted.webp",
    "v97/artwork/maybe_they_knew.webp",
    "v97/artwork/mind_the_gap.webp",
    "v97/artwork/my_foundation.webp",
    "v97/artwork/my_sweet_little_star.webp",
    "v97/artwork/need_for_speed.webp",
    "v97/artwork/nice_girl.webp",
    "v97/artwork/one_in_a_quarter_billion.webp",
    "v97/artwork/paradox_love.webp",
    "v97/artwork/password_expired.webp",
    "v97/artwork/password_expired_live.webp",
    "v97/artwork/peaks_of_gold.webp",
    "v97/artwork/private_lake.webp",
    "v97/artwork/radio_trash.webp",
    "v97/artwork/ride_the_groove.webp",
    "v97/artwork/rocker_songwriter.webp",
    "v97/artwork/sailing_on_open_water.webp",
    "v97/artwork/sanctified_sinner.webp",
    "v97/artwork/sanctuary_riot.webp",
    "v97/artwork/schools_out.webp",
    "v97/artwork/set_the_spirit_free.webp",
    "v97/artwork/siblings.webp",
    "v97/artwork/skeleton_dance.webp",
    "v97/artwork/slippery_road.webp",
    "v97/artwork/social_lubricant.webp",
    "v97/artwork/soulmate.webp",
    "v97/artwork/southern_belle.webp",
    "v97/artwork/southern_heat.webp",
    "v97/artwork/southerns_eve.webp",
    "v97/artwork/spooky.webp",
    "v97/artwork/spring.webp",
    "v97/artwork/storm_of_the_abyss.webp",
    "v97/artwork/summers_farewell.webp",
    "v97/artwork/surfing_girl_wild_and_free.webp",
    "v97/artwork/tabby_gonzalez.webp",
    "v97/artwork/the_city_i_long_for.webp",
    "v97/artwork/the_dive.webp",
    "v97/artwork/the_hard_way.webp",
    "v97/artwork/the_hook.webp",
    "v97/artwork/the_quiet_kind.webp",
    "v97/artwork/the_rhythm_of_the_fox.webp",
    "v97/artwork/the_rhythm_of_you.webp",
    "v97/artwork/the_sharpened_bow.webp",
    "v97/artwork/the_sirens_anchor.webp",
    "v97/artwork/the_soft_return.webp",
    "v97/artwork/the_steel_winged_swan.webp",
    "v97/artwork/this_is_fine.webp",
    "v97/artwork/tide_on_stone.webp",
    "v97/artwork/toccata.webp",
    "v97/artwork/trick_or_treat.webp",
    "v97/artwork/uncaged.webp",
    "v97/artwork/upon_a_winding_trail.webp",
    "v97/artwork/venezia.webp",
    "v97/artwork/verona.webp",
    "v97/artwork/weekend.webp",
    "v97/artwork/whiteout.webp",
    "v97/artwork/winterstorm.webp",
    "v97/css/style.css",
    "v97/datenschutz.html",
    "v97/essays/embeddings.html",
    "v97/essays/essay1.html",
    "v97/essays/gemini-code-1782138112807.html",
    "v97/essays/ssm.html",
    "v97/essays/transformers.html",
    "v97/images/Guitar-in-Dolomites.webp",
    "v97/images/Hero.webp",
    "v97/images/Hero_square.webp",
    "v97/images/Julia-skiing-Dolomites.webp",
    "v97/images/Stage_1.webp",
    "v97/images/Stage_2.webp",
    "v97/images/Stage_3.webp",
    "v97/images/Stage_4.webp",
    "v97/images/Stage_5.webp",
    "v97/images/Stage_6.webp",
    "v97/images/Stage_7.webp",
    "v97/images/Stage_8.webp",
    "v97/images/embeddings_music.webp",
    "v97/images/embeddings_words.webp",
    "v97/images/icons/app_icon_192.png",
    "v97/images/icons/app_icon_512.png",
    "v97/images/julia_embeddings.webp",
    "v97/images/julia_ssm_equations.webp",
    "v97/images/password_expired_live.webp",
    "v97/images/podcasts.webp",
    "v97/images/southern_belle.webp",
    "v97/images/ssm_diagram.webp",
    "v97/images/surfing_girl_wild_and_free.webp",
    "v97/images/under_the_hood.webp",
    "v97/images/witch.webp",
    "v97/impressum.html",
    "v97/index.html",
    "v97/js/DiaryService.js",
    "v97/js/Director.js",
    "v97/js/Main 20260319_1300.js",
    "v97/js/Main.js",
    "v97/js/PickerDrum.js",
    "v97/js/Placeholder.js",
    "v97/js/Player.js",
    "v97/js/SongCollection.js",
    "v97/js/SongService.js",
    "v97/js/VersionCore.js",
    "v97/js/ffmpeg.min.js",
    "v97/js/lucide.js",
    "v97/js/tailwindcss.js",
    "v97/js/tex-mml-chtml.js",
    "v97/legal_notice.html",
    "v97/manifest.json",
    "v97/placeholder/footer.html",
    "v97/placeholder/header.html",
    "v97/privacy_policy.html"
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
