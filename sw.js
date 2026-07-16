const STATIC_CACHE = 'julia-site-v101';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v101/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v101/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v101/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v101/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v101/artwork/a_slow_blossoming_rose.webp",
    "v101/artwork/alejandro.webp",
    "v101/artwork/antitoxic.webp",
    "v101/artwork/autumns_whisper.webp",
    "v101/artwork/avalanche.webp",
    "v101/artwork/betrayal.webp",
    "v101/artwork/big_dreams_shine.webp",
    "v101/artwork/big_dreams_shine_live.webp",
    "v101/artwork/bite_of_the_night.webp",
    "v101/artwork/black_cat_bones.webp",
    "v101/artwork/boring.webp",
    "v101/artwork/brooklyn.webp",
    "v101/artwork/buckn_the_bain.webp",
    "v101/artwork/cheerleader.webp",
    "v101/artwork/coffee_in_amsterdam.webp",
    "v101/artwork/cool_fire.webp",
    "v101/artwork/dancing_on_your_grave.webp",
    "v101/artwork/date_disaster.webp",
    "v101/artwork/deep_blue.webp",
    "v101/artwork/deepdive_1.webp",
    "v101/artwork/deepdive_2.webp",
    "v101/artwork/default.webp",
    "v101/artwork/delta_blues.webp",
    "v101/artwork/digital_ghost.webp",
    "v101/artwork/disco_flashback.webp",
    "v101/artwork/disco_flashback_2.webp",
    "v101/artwork/disposable.webp",
    "v101/artwork/distortion.webp",
    "v101/artwork/drunk_not_dumb.webp",
    "v101/artwork/dynamite.webp",
    "v101/artwork/electric_hearts.webp",
    "v101/artwork/embers_and_sparks.webp",
    "v101/artwork/fences_down.webp",
    "v101/artwork/fire_in_my_veins.webp",
    "v101/artwork/first_steps_to_stardom.webp",
    "v101/artwork/fog_of_fear.webp",
    "v101/artwork/forever.webp",
    "v101/artwork/four_chords_later.webp",
    "v101/artwork/friday_night.webp",
    "v101/artwork/from_first_steps_to_stardom.webp",
    "v101/artwork/frost_and_friction.webp",
    "v101/artwork/frozen_heart.webp",
    "v101/artwork/garage_band.webp",
    "v101/artwork/ghost_in_the_garden.webp",
    "v101/artwork/god_save_the_king.webp",
    "v101/artwork/golden_days.webp",
    "v101/artwork/good_enough.webp",
    "v101/artwork/happy_birthday_in_heaven.webp",
    "v101/artwork/haunted_haven.webp",
    "v101/artwork/heart_of_fire_and_ice.webp",
    "v101/artwork/her_first_truck.webp",
    "v101/artwork/hes_still_here.webp",
    "v101/artwork/home_now.webp",
    "v101/artwork/howling_wolves.webp",
    "v101/artwork/hurricane.webp",
    "v101/artwork/hypocrites.webp",
    "v101/artwork/i_hate_you.webp",
    "v101/artwork/i_love_school.webp",
    "v101/artwork/i_scream.webp",
    "v101/artwork/insatiable.webp",
    "v101/artwork/insult_the_ones_you_love.webp",
    "v101/artwork/introverted_girl.webp",
    "v101/artwork/jet_set.webp",
    "v101/artwork/julia_and_friends.webp",
    "v101/artwork/just_a_vibe.webp",
    "v101/artwork/just_wants_to_be_loved.webp",
    "v101/artwork/last_exit.webp",
    "v101/artwork/left_lane_legend.webp",
    "v101/artwork/little_butterflies.webp",
    "v101/artwork/luck_for_granted.webp",
    "v101/artwork/maybe_they_knew.webp",
    "v101/artwork/mind_the_gap.webp",
    "v101/artwork/my_foundation.webp",
    "v101/artwork/my_sweet_little_star.webp",
    "v101/artwork/need_for_speed.webp",
    "v101/artwork/nice_girl.webp",
    "v101/artwork/one_in_a_quarter_billion.webp",
    "v101/artwork/one_pulse.webp",
    "v101/artwork/paradox_love.webp",
    "v101/artwork/password_expired.webp",
    "v101/artwork/password_expired_live.webp",
    "v101/artwork/pathetique.webp",
    "v101/artwork/peaks_of_gold.webp",
    "v101/artwork/private_lake.webp",
    "v101/artwork/radio_trash.webp",
    "v101/artwork/ride_the_groove.webp",
    "v101/artwork/rocker_songwriter.webp",
    "v101/artwork/sailing_on_open_water.webp",
    "v101/artwork/sanctified_sinner.webp",
    "v101/artwork/sanctuary_riot.webp",
    "v101/artwork/schools_out.webp",
    "v101/artwork/set_the_spirit_free.webp",
    "v101/artwork/siblings.webp",
    "v101/artwork/skeleton_dance.webp",
    "v101/artwork/slippery_road.webp",
    "v101/artwork/social_lubricant.webp",
    "v101/artwork/soulmate.webp",
    "v101/artwork/southern_belle.webp",
    "v101/artwork/southern_heat.webp",
    "v101/artwork/southerns_eve.webp",
    "v101/artwork/spooky.webp",
    "v101/artwork/spring.webp",
    "v101/artwork/storm_of_the_abyss.webp",
    "v101/artwork/summers_farewell.webp",
    "v101/artwork/surfing_girl_wild_and_free.webp",
    "v101/artwork/tabby_gonzalez.webp",
    "v101/artwork/the_city_i_long_for.webp",
    "v101/artwork/the_dive.webp",
    "v101/artwork/the_hard_way.webp",
    "v101/artwork/the_hook.webp",
    "v101/artwork/the_quiet_kind.webp",
    "v101/artwork/the_rhythm_of_the_fox.webp",
    "v101/artwork/the_rhythm_of_you.webp",
    "v101/artwork/the_sharpened_bow.webp",
    "v101/artwork/the_sirens_anchor.webp",
    "v101/artwork/the_soft_return.webp",
    "v101/artwork/the_steel_winged_swan.webp",
    "v101/artwork/this_is_fine.webp",
    "v101/artwork/tide_on_stone.webp",
    "v101/artwork/toccata.webp",
    "v101/artwork/trick_or_treat.webp",
    "v101/artwork/uncaged.webp",
    "v101/artwork/upon_a_winding_trail.webp",
    "v101/artwork/venezia.webp",
    "v101/artwork/verona.webp",
    "v101/artwork/weekend.webp",
    "v101/artwork/whiteout.webp",
    "v101/artwork/winterstorm.webp",
    "v101/css/style.css",
    "v101/datenschutz.html",
    "v101/essays/embeddings.html",
    "v101/essays/essay1.html",
    "v101/essays/gemini-code-1782138112807.html",
    "v101/essays/ssm.html",
    "v101/essays/transformers.html",
    "v101/images/Guitar-in-Dolomites.webp",
    "v101/images/Hero.webp",
    "v101/images/Hero_square.webp",
    "v101/images/Julia-skiing-Dolomites.webp",
    "v101/images/Stage_1.webp",
    "v101/images/Stage_2.webp",
    "v101/images/Stage_3.webp",
    "v101/images/Stage_4.webp",
    "v101/images/Stage_5.webp",
    "v101/images/Stage_6.webp",
    "v101/images/Stage_7.webp",
    "v101/images/Stage_8.webp",
    "v101/images/embeddings_music.webp",
    "v101/images/embeddings_words.webp",
    "v101/images/icons/app_icon_192.png",
    "v101/images/icons/app_icon_512.png",
    "v101/images/julia_embeddings.webp",
    "v101/images/julia_ssm_equations.webp",
    "v101/images/password_expired_live.webp",
    "v101/images/podcasts.webp",
    "v101/images/southern_belle.webp",
    "v101/images/ssm_diagram.webp",
    "v101/images/surfing_girl_wild_and_free.webp",
    "v101/images/under_the_hood.webp",
    "v101/images/witch.webp",
    "v101/impressum.html",
    "v101/index.html",
    "v101/js/DiaryService.js",
    "v101/js/Director.js",
    "v101/js/Main 20260319_1300.js",
    "v101/js/Main.js",
    "v101/js/PickerDrum.js",
    "v101/js/Placeholder.js",
    "v101/js/Player.js",
    "v101/js/SongCollection.js",
    "v101/js/SongService.js",
    "v101/js/VersionCore.js",
    "v101/js/ffmpeg.min.js",
    "v101/js/lucide.js",
    "v101/js/tailwindcss.js",
    "v101/js/tex-mml-chtml.js",
    "v101/legal_notice.html",
    "v101/manifest.json",
    "v101/placeholder/footer.html",
    "v101/placeholder/header.html",
    "v101/privacy_policy.html"
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
