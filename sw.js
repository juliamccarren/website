const STATIC_CACHE = 'julia-site-v96';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v96/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v96/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v96/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v96/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v96/artwork/a_slow_blossoming_rose.webp",
    "v96/artwork/alejandro.webp",
    "v96/artwork/antitoxic.webp",
    "v96/artwork/autumns_whisper.webp",
    "v96/artwork/avalanche.webp",
    "v96/artwork/betrayal.webp",
    "v96/artwork/big_dreams_shine.webp",
    "v96/artwork/big_dreams_shine_live.webp",
    "v96/artwork/bite_of_the_night.webp",
    "v96/artwork/black_cat_bones.webp",
    "v96/artwork/boring.webp",
    "v96/artwork/brooklyn.webp",
    "v96/artwork/buckn_the_bain.webp",
    "v96/artwork/cheerleader.webp",
    "v96/artwork/coffee_in_amsterdam.webp",
    "v96/artwork/cool_fire.webp",
    "v96/artwork/date_disaster.webp",
    "v96/artwork/deep_blue.webp",
    "v96/artwork/deepdive_1.webp",
    "v96/artwork/deepdive_2.webp",
    "v96/artwork/default.webp",
    "v96/artwork/delta_blues.webp",
    "v96/artwork/digital_ghost.webp",
    "v96/artwork/disco_flashback.webp",
    "v96/artwork/disco_flashback_2.webp",
    "v96/artwork/disposable.webp",
    "v96/artwork/distortion.webp",
    "v96/artwork/drunk_not_dumb.webp",
    "v96/artwork/dynamite.webp",
    "v96/artwork/electric_hearts.webp",
    "v96/artwork/embers_and_sparks.webp",
    "v96/artwork/fences_down.webp",
    "v96/artwork/fire_in_my_veins.webp",
    "v96/artwork/first_steps_to_stardom.webp",
    "v96/artwork/fog_of_fear.webp",
    "v96/artwork/forever.webp",
    "v96/artwork/four_chords_later.webp",
    "v96/artwork/friday_night.webp",
    "v96/artwork/from_first_steps_to_stardom.webp",
    "v96/artwork/frost_and_friction.webp",
    "v96/artwork/frozen_heart.webp",
    "v96/artwork/garage_band.webp",
    "v96/artwork/ghost_in_the_garden.webp",
    "v96/artwork/god_save_the_king.webp",
    "v96/artwork/golden_days.webp",
    "v96/artwork/good_enough.webp",
    "v96/artwork/happy_birthday_in_heaven.webp",
    "v96/artwork/haunted_haven.webp",
    "v96/artwork/heart_of_fire_and_ice.webp",
    "v96/artwork/her_first_truck.webp",
    "v96/artwork/hes_still_here.webp",
    "v96/artwork/home_now.webp",
    "v96/artwork/howling_wolves.webp",
    "v96/artwork/hypocrites.webp",
    "v96/artwork/i_hate_you.webp",
    "v96/artwork/i_love_school.webp",
    "v96/artwork/i_scream.webp",
    "v96/artwork/insatiable.webp",
    "v96/artwork/insult_the_ones_you_love.webp",
    "v96/artwork/introverted_girl.webp",
    "v96/artwork/jet_set.webp",
    "v96/artwork/julia_and_friends.webp",
    "v96/artwork/just_a_vibe.webp",
    "v96/artwork/just_wants_to_be_loved.webp",
    "v96/artwork/last_exit.webp",
    "v96/artwork/left_lane_legend.webp",
    "v96/artwork/little_butterflies.webp",
    "v96/artwork/luck_for_granted.webp",
    "v96/artwork/maybe_they_knew.webp",
    "v96/artwork/mind_the_gap.webp",
    "v96/artwork/my_foundation.webp",
    "v96/artwork/my_sweet_little_star.webp",
    "v96/artwork/need_for_speed.webp",
    "v96/artwork/nice_girl.webp",
    "v96/artwork/one_in_a_quarter_billion.webp",
    "v96/artwork/paradox_love.webp",
    "v96/artwork/password_expired.webp",
    "v96/artwork/password_expired_live.webp",
    "v96/artwork/peaks_of_gold.webp",
    "v96/artwork/private_lake.webp",
    "v96/artwork/radio_trash.webp",
    "v96/artwork/ride_the_groove.webp",
    "v96/artwork/rocker_songwriter.webp",
    "v96/artwork/sailing_on_open_water.webp",
    "v96/artwork/sanctified_sinner.webp",
    "v96/artwork/sanctuary_riot.webp",
    "v96/artwork/schools_out.webp",
    "v96/artwork/set_the_spirit_free.webp",
    "v96/artwork/siblings.webp",
    "v96/artwork/skeleton_dance.webp",
    "v96/artwork/slippery_road.webp",
    "v96/artwork/social_lubricant.webp",
    "v96/artwork/soulmate.webp",
    "v96/artwork/southern_belle.webp",
    "v96/artwork/southern_heat.webp",
    "v96/artwork/southerns_eve.webp",
    "v96/artwork/spooky.webp",
    "v96/artwork/spring.webp",
    "v96/artwork/storm_of_the_abyss.webp",
    "v96/artwork/summers_farewell.webp",
    "v96/artwork/surfing_girl_wild_and_free.webp",
    "v96/artwork/tabby_gonzalez.webp",
    "v96/artwork/the_city_i_long_for.webp",
    "v96/artwork/the_dive.webp",
    "v96/artwork/the_hard_way.webp",
    "v96/artwork/the_hook.webp",
    "v96/artwork/the_quiet_kind.webp",
    "v96/artwork/the_rhythm_of_the_fox.webp",
    "v96/artwork/the_rhythm_of_you.webp",
    "v96/artwork/the_sharpened_bow.webp",
    "v96/artwork/the_sirens_anchor.webp",
    "v96/artwork/the_soft_return.webp",
    "v96/artwork/the_steel_winged_swan.webp",
    "v96/artwork/this_is_fine.webp",
    "v96/artwork/tide_on_stone.webp",
    "v96/artwork/toccata.webp",
    "v96/artwork/trick_or_treat.webp",
    "v96/artwork/uncaged.webp",
    "v96/artwork/upon_a_winding_trail.webp",
    "v96/artwork/venezia.webp",
    "v96/artwork/verona.webp",
    "v96/artwork/weekend.webp",
    "v96/artwork/whiteout.webp",
    "v96/artwork/winterstorm.webp",
    "v96/css/style.css",
    "v96/datenschutz.html",
    "v96/essays/embeddings.html",
    "v96/essays/essay1.html",
    "v96/essays/gemini-code-1782138112807.html",
    "v96/essays/ssm.html",
    "v96/essays/transformers.html",
    "v96/images/Guitar-in-Dolomites.webp",
    "v96/images/Hero.webp",
    "v96/images/Hero_square.webp",
    "v96/images/Julia-skiing-Dolomites.webp",
    "v96/images/Stage_1.webp",
    "v96/images/Stage_2.webp",
    "v96/images/Stage_3.webp",
    "v96/images/Stage_4.webp",
    "v96/images/Stage_5.webp",
    "v96/images/Stage_6.webp",
    "v96/images/Stage_7.webp",
    "v96/images/Stage_8.webp",
    "v96/images/embeddings_music.webp",
    "v96/images/embeddings_words.webp",
    "v96/images/icons/app_icon_192.png",
    "v96/images/icons/app_icon_512.png",
    "v96/images/julia_embeddings.webp",
    "v96/images/julia_ssm_equations.webp",
    "v96/images/password_expired_live.webp",
    "v96/images/podcasts.webp",
    "v96/images/southern_belle.webp",
    "v96/images/ssm_diagram.webp",
    "v96/images/under_the_hood.webp",
    "v96/images/witch.webp",
    "v96/impressum.html",
    "v96/index.html",
    "v96/js/DiaryService.js",
    "v96/js/Director.js",
    "v96/js/Main 20260319_1300.js",
    "v96/js/Main.js",
    "v96/js/PickerDrum.js",
    "v96/js/Placeholder.js",
    "v96/js/Player.js",
    "v96/js/SongCollection.js",
    "v96/js/SongService.js",
    "v96/js/VersionCore.js",
    "v96/js/ffmpeg.min.js",
    "v96/js/lucide.js",
    "v96/js/tailwindcss.js",
    "v96/js/tex-mml-chtml.js",
    "v96/legal_notice.html",
    "v96/manifest.json",
    "v96/placeholder/footer.html",
    "v96/placeholder/header.html",
    "v96/privacy_policy.html"
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
