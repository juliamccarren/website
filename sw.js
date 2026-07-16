const STATIC_CACHE = 'julia-site-v102';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v102/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v102/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v102/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v102/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v102/artwork/a_slow_blossoming_rose.webp",
    "v102/artwork/alejandro.webp",
    "v102/artwork/antitoxic.webp",
    "v102/artwork/autumns_whisper.webp",
    "v102/artwork/avalanche.webp",
    "v102/artwork/betrayal.webp",
    "v102/artwork/big_dreams_shine.webp",
    "v102/artwork/big_dreams_shine_live.webp",
    "v102/artwork/bite_of_the_night.webp",
    "v102/artwork/black_cat_bones.webp",
    "v102/artwork/boring.webp",
    "v102/artwork/brainrot.webp",
    "v102/artwork/brooklyn.webp",
    "v102/artwork/buckn_the_bain.webp",
    "v102/artwork/cheerleader.webp",
    "v102/artwork/coffee_in_amsterdam.webp",
    "v102/artwork/cool_fire.webp",
    "v102/artwork/dancing_on_your_grave.webp",
    "v102/artwork/date_disaster.webp",
    "v102/artwork/deep_blue.webp",
    "v102/artwork/deepdive_1.webp",
    "v102/artwork/deepdive_2.webp",
    "v102/artwork/default.webp",
    "v102/artwork/delta_blues.webp",
    "v102/artwork/digital_ghost.webp",
    "v102/artwork/disco_flashback.webp",
    "v102/artwork/disco_flashback_2.webp",
    "v102/artwork/disposable.webp",
    "v102/artwork/distortion.webp",
    "v102/artwork/drunk_not_dumb.webp",
    "v102/artwork/dynamite.webp",
    "v102/artwork/electric_hearts.webp",
    "v102/artwork/embers_and_sparks.webp",
    "v102/artwork/fences_down.webp",
    "v102/artwork/fire_in_my_veins.webp",
    "v102/artwork/first_steps_to_stardom.webp",
    "v102/artwork/fog_of_fear.webp",
    "v102/artwork/forever.webp",
    "v102/artwork/four_chords_later.webp",
    "v102/artwork/friday_night.webp",
    "v102/artwork/from_first_steps_to_stardom.webp",
    "v102/artwork/frost_and_friction.webp",
    "v102/artwork/frozen_heart.webp",
    "v102/artwork/garage_band.webp",
    "v102/artwork/ghost_in_the_garden.webp",
    "v102/artwork/god_save_the_king.webp",
    "v102/artwork/golden_days.webp",
    "v102/artwork/good_enough.webp",
    "v102/artwork/happy_birthday_in_heaven.webp",
    "v102/artwork/haunted_haven.webp",
    "v102/artwork/heart_of_fire_and_ice.webp",
    "v102/artwork/her_first_truck.webp",
    "v102/artwork/hes_still_here.webp",
    "v102/artwork/home_now.webp",
    "v102/artwork/howling_wolves.webp",
    "v102/artwork/hurricane.webp",
    "v102/artwork/hypocrites.webp",
    "v102/artwork/i_hate_you.webp",
    "v102/artwork/i_love_school.webp",
    "v102/artwork/i_scream.webp",
    "v102/artwork/insatiable.webp",
    "v102/artwork/insult_the_ones_you_love.webp",
    "v102/artwork/introverted_girl.webp",
    "v102/artwork/jet_set.webp",
    "v102/artwork/julia_and_friends.webp",
    "v102/artwork/just_a_vibe.webp",
    "v102/artwork/just_wants_to_be_loved.webp",
    "v102/artwork/last_exit.webp",
    "v102/artwork/left_lane_legend.webp",
    "v102/artwork/little_butterflies.webp",
    "v102/artwork/luck_for_granted.webp",
    "v102/artwork/maybe_they_knew.webp",
    "v102/artwork/mind_the_gap.webp",
    "v102/artwork/my_foundation.webp",
    "v102/artwork/my_sweet_little_star.webp",
    "v102/artwork/need_for_speed.webp",
    "v102/artwork/nice_girl.webp",
    "v102/artwork/one_in_a_quarter_billion.webp",
    "v102/artwork/one_pulse.webp",
    "v102/artwork/paradox_love.webp",
    "v102/artwork/password_expired.webp",
    "v102/artwork/password_expired_live.webp",
    "v102/artwork/pathetique.webp",
    "v102/artwork/peaks_of_gold.webp",
    "v102/artwork/private_lake.webp",
    "v102/artwork/radio_trash.webp",
    "v102/artwork/ride_the_groove.webp",
    "v102/artwork/rocker_songwriter.webp",
    "v102/artwork/sailing_on_open_water.webp",
    "v102/artwork/sanctified_sinner.webp",
    "v102/artwork/sanctuary_riot.webp",
    "v102/artwork/schools_out.webp",
    "v102/artwork/set_the_spirit_free.webp",
    "v102/artwork/siblings.webp",
    "v102/artwork/skeleton_dance.webp",
    "v102/artwork/slippery_road.webp",
    "v102/artwork/social_lubricant.webp",
    "v102/artwork/soulmate.webp",
    "v102/artwork/southern_belle.webp",
    "v102/artwork/southern_heat.webp",
    "v102/artwork/southerns_eve.webp",
    "v102/artwork/spooky.webp",
    "v102/artwork/spring.webp",
    "v102/artwork/storm_of_the_abyss.webp",
    "v102/artwork/summers_farewell.webp",
    "v102/artwork/surfing_girl_wild_and_free.webp",
    "v102/artwork/tabby_gonzalez.webp",
    "v102/artwork/the_city_i_long_for.webp",
    "v102/artwork/the_dive.webp",
    "v102/artwork/the_hard_way.webp",
    "v102/artwork/the_hook.webp",
    "v102/artwork/the_quiet_kind.webp",
    "v102/artwork/the_rhythm_of_the_fox.webp",
    "v102/artwork/the_rhythm_of_you.webp",
    "v102/artwork/the_sharpened_bow.webp",
    "v102/artwork/the_sirens_anchor.webp",
    "v102/artwork/the_soft_return.webp",
    "v102/artwork/the_steel_winged_swan.webp",
    "v102/artwork/this_is_fine.webp",
    "v102/artwork/tide_on_stone.webp",
    "v102/artwork/toccata.webp",
    "v102/artwork/trick_or_treat.webp",
    "v102/artwork/uncaged.webp",
    "v102/artwork/upon_a_winding_trail.webp",
    "v102/artwork/venezia.webp",
    "v102/artwork/verona.webp",
    "v102/artwork/weekend.webp",
    "v102/artwork/whiteout.webp",
    "v102/artwork/winterstorm.webp",
    "v102/css/style.css",
    "v102/datenschutz.html",
    "v102/essays/embeddings.html",
    "v102/essays/essay1.html",
    "v102/essays/gemini-code-1782138112807.html",
    "v102/essays/ssm.html",
    "v102/essays/transformers.html",
    "v102/images/Guitar-in-Dolomites.webp",
    "v102/images/Hero.webp",
    "v102/images/Hero_square.webp",
    "v102/images/Julia-skiing-Dolomites.webp",
    "v102/images/Stage_1.webp",
    "v102/images/Stage_2.webp",
    "v102/images/Stage_3.webp",
    "v102/images/Stage_4.webp",
    "v102/images/Stage_5.webp",
    "v102/images/Stage_6.webp",
    "v102/images/Stage_7.webp",
    "v102/images/Stage_8.webp",
    "v102/images/embeddings_music.webp",
    "v102/images/embeddings_words.webp",
    "v102/images/icons/app_icon_192.png",
    "v102/images/icons/app_icon_512.png",
    "v102/images/julia_embeddings.webp",
    "v102/images/julia_ssm_equations.webp",
    "v102/images/password_expired_live.webp",
    "v102/images/podcasts.webp",
    "v102/images/southern_belle.webp",
    "v102/images/ssm_diagram.webp",
    "v102/images/surfing_girl_wild_and_free.webp",
    "v102/images/under_the_hood.webp",
    "v102/images/witch.webp",
    "v102/impressum.html",
    "v102/index.html",
    "v102/js/DiaryService.js",
    "v102/js/Director.js",
    "v102/js/Main 20260319_1300.js",
    "v102/js/Main.js",
    "v102/js/PickerDrum.js",
    "v102/js/Placeholder.js",
    "v102/js/Player.js",
    "v102/js/SongCollection.js",
    "v102/js/SongService.js",
    "v102/js/VersionCore.js",
    "v102/js/ffmpeg.min.js",
    "v102/js/lucide.js",
    "v102/js/tailwindcss.js",
    "v102/js/tex-mml-chtml.js",
    "v102/legal_notice.html",
    "v102/manifest.json",
    "v102/placeholder/footer.html",
    "v102/placeholder/header.html",
    "v102/privacy_policy.html"
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
