const STATIC_CACHE = 'julia-site-v100';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v100/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v100/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v100/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v100/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v100/artwork/a_slow_blossoming_rose.webp",
    "v100/artwork/alejandro.webp",
    "v100/artwork/antitoxic.webp",
    "v100/artwork/autumns_whisper.webp",
    "v100/artwork/avalanche.webp",
    "v100/artwork/betrayal.webp",
    "v100/artwork/big_dreams_shine.webp",
    "v100/artwork/big_dreams_shine_live.webp",
    "v100/artwork/bite_of_the_night.webp",
    "v100/artwork/black_cat_bones.webp",
    "v100/artwork/boring.webp",
    "v100/artwork/brooklyn.webp",
    "v100/artwork/buckn_the_bain.webp",
    "v100/artwork/cheerleader.webp",
    "v100/artwork/coffee_in_amsterdam.webp",
    "v100/artwork/cool_fire.webp",
    "v100/artwork/dancing_on_your_grave.webp",
    "v100/artwork/date_disaster.webp",
    "v100/artwork/deep_blue.webp",
    "v100/artwork/deepdive_1.webp",
    "v100/artwork/deepdive_2.webp",
    "v100/artwork/default.webp",
    "v100/artwork/delta_blues.webp",
    "v100/artwork/digital_ghost.webp",
    "v100/artwork/disco_flashback.webp",
    "v100/artwork/disco_flashback_2.webp",
    "v100/artwork/disposable.webp",
    "v100/artwork/distortion.webp",
    "v100/artwork/drunk_not_dumb.webp",
    "v100/artwork/dynamite.webp",
    "v100/artwork/electric_hearts.webp",
    "v100/artwork/embers_and_sparks.webp",
    "v100/artwork/fences_down.webp",
    "v100/artwork/fire_in_my_veins.webp",
    "v100/artwork/first_steps_to_stardom.webp",
    "v100/artwork/fog_of_fear.webp",
    "v100/artwork/forever.webp",
    "v100/artwork/four_chords_later.webp",
    "v100/artwork/friday_night.webp",
    "v100/artwork/from_first_steps_to_stardom.webp",
    "v100/artwork/frost_and_friction.webp",
    "v100/artwork/frozen_heart.webp",
    "v100/artwork/garage_band.webp",
    "v100/artwork/ghost_in_the_garden.webp",
    "v100/artwork/god_save_the_king.webp",
    "v100/artwork/golden_days.webp",
    "v100/artwork/good_enough.webp",
    "v100/artwork/happy_birthday_in_heaven.webp",
    "v100/artwork/haunted_haven.webp",
    "v100/artwork/heart_of_fire_and_ice.webp",
    "v100/artwork/her_first_truck.webp",
    "v100/artwork/hes_still_here.webp",
    "v100/artwork/home_now.webp",
    "v100/artwork/howling_wolves.webp",
    "v100/artwork/hurricane.webp",
    "v100/artwork/hypocrites.webp",
    "v100/artwork/i_hate_you.webp",
    "v100/artwork/i_love_school.webp",
    "v100/artwork/i_scream.webp",
    "v100/artwork/insatiable.webp",
    "v100/artwork/insult_the_ones_you_love.webp",
    "v100/artwork/introverted_girl.webp",
    "v100/artwork/jet_set.webp",
    "v100/artwork/julia_and_friends.webp",
    "v100/artwork/just_a_vibe.webp",
    "v100/artwork/just_wants_to_be_loved.webp",
    "v100/artwork/last_exit.webp",
    "v100/artwork/left_lane_legend.webp",
    "v100/artwork/little_butterflies.webp",
    "v100/artwork/luck_for_granted.webp",
    "v100/artwork/maybe_they_knew.webp",
    "v100/artwork/mind_the_gap.webp",
    "v100/artwork/my_foundation.webp",
    "v100/artwork/my_sweet_little_star.webp",
    "v100/artwork/need_for_speed.webp",
    "v100/artwork/nice_girl.webp",
    "v100/artwork/one_in_a_quarter_billion.webp",
    "v100/artwork/paradox_love.webp",
    "v100/artwork/password_expired.webp",
    "v100/artwork/password_expired_live.webp",
    "v100/artwork/pathetique.webp",
    "v100/artwork/peaks_of_gold.webp",
    "v100/artwork/private_lake.webp",
    "v100/artwork/radio_trash.webp",
    "v100/artwork/ride_the_groove.webp",
    "v100/artwork/rocker_songwriter.webp",
    "v100/artwork/sailing_on_open_water.webp",
    "v100/artwork/sanctified_sinner.webp",
    "v100/artwork/sanctuary_riot.webp",
    "v100/artwork/schools_out.webp",
    "v100/artwork/set_the_spirit_free.webp",
    "v100/artwork/siblings.webp",
    "v100/artwork/skeleton_dance.webp",
    "v100/artwork/slippery_road.webp",
    "v100/artwork/social_lubricant.webp",
    "v100/artwork/soulmate.webp",
    "v100/artwork/southern_belle.webp",
    "v100/artwork/southern_heat.webp",
    "v100/artwork/southerns_eve.webp",
    "v100/artwork/spooky.webp",
    "v100/artwork/spring.webp",
    "v100/artwork/storm_of_the_abyss.webp",
    "v100/artwork/summers_farewell.webp",
    "v100/artwork/surfing_girl_wild_and_free.webp",
    "v100/artwork/tabby_gonzalez.webp",
    "v100/artwork/the_city_i_long_for.webp",
    "v100/artwork/the_dive.webp",
    "v100/artwork/the_hard_way.webp",
    "v100/artwork/the_hook.webp",
    "v100/artwork/the_quiet_kind.webp",
    "v100/artwork/the_rhythm_of_the_fox.webp",
    "v100/artwork/the_rhythm_of_you.webp",
    "v100/artwork/the_sharpened_bow.webp",
    "v100/artwork/the_sirens_anchor.webp",
    "v100/artwork/the_soft_return.webp",
    "v100/artwork/the_steel_winged_swan.webp",
    "v100/artwork/this_is_fine.webp",
    "v100/artwork/tide_on_stone.webp",
    "v100/artwork/toccata.webp",
    "v100/artwork/trick_or_treat.webp",
    "v100/artwork/uncaged.webp",
    "v100/artwork/upon_a_winding_trail.webp",
    "v100/artwork/venezia.webp",
    "v100/artwork/verona.webp",
    "v100/artwork/weekend.webp",
    "v100/artwork/whiteout.webp",
    "v100/artwork/winterstorm.webp",
    "v100/css/style.css",
    "v100/datenschutz.html",
    "v100/essays/embeddings.html",
    "v100/essays/essay1.html",
    "v100/essays/gemini-code-1782138112807.html",
    "v100/essays/ssm.html",
    "v100/essays/transformers.html",
    "v100/images/Guitar-in-Dolomites.webp",
    "v100/images/Hero.webp",
    "v100/images/Hero_square.webp",
    "v100/images/Julia-skiing-Dolomites.webp",
    "v100/images/Stage_1.webp",
    "v100/images/Stage_2.webp",
    "v100/images/Stage_3.webp",
    "v100/images/Stage_4.webp",
    "v100/images/Stage_5.webp",
    "v100/images/Stage_6.webp",
    "v100/images/Stage_7.webp",
    "v100/images/Stage_8.webp",
    "v100/images/embeddings_music.webp",
    "v100/images/embeddings_words.webp",
    "v100/images/icons/app_icon_192.png",
    "v100/images/icons/app_icon_512.png",
    "v100/images/julia_embeddings.webp",
    "v100/images/julia_ssm_equations.webp",
    "v100/images/password_expired_live.webp",
    "v100/images/podcasts.webp",
    "v100/images/southern_belle.webp",
    "v100/images/ssm_diagram.webp",
    "v100/images/surfing_girl_wild_and_free.webp",
    "v100/images/under_the_hood.webp",
    "v100/images/witch.webp",
    "v100/impressum.html",
    "v100/index.html",
    "v100/js/DiaryService.js",
    "v100/js/Director.js",
    "v100/js/Main 20260319_1300.js",
    "v100/js/Main.js",
    "v100/js/PickerDrum.js",
    "v100/js/Placeholder.js",
    "v100/js/Player.js",
    "v100/js/SongCollection.js",
    "v100/js/SongService.js",
    "v100/js/VersionCore.js",
    "v100/js/ffmpeg.min.js",
    "v100/js/lucide.js",
    "v100/js/tailwindcss.js",
    "v100/js/tex-mml-chtml.js",
    "v100/legal_notice.html",
    "v100/manifest.json",
    "v100/placeholder/footer.html",
    "v100/placeholder/header.html",
    "v100/privacy_policy.html"
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
