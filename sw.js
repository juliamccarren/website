const STATIC_CACHE = 'julia-site-v103';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v103/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v103/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v103/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v103/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v103/artwork/a_slow_blossoming_rose.webp",
    "v103/artwork/alejandro.webp",
    "v103/artwork/antitoxic.webp",
    "v103/artwork/autumns_whisper.webp",
    "v103/artwork/avalanche.webp",
    "v103/artwork/betrayal.webp",
    "v103/artwork/big_dreams_shine.webp",
    "v103/artwork/big_dreams_shine_live.webp",
    "v103/artwork/bite_of_the_night.webp",
    "v103/artwork/black_cat_bones.webp",
    "v103/artwork/boring.webp",
    "v103/artwork/brainrot.webp",
    "v103/artwork/brooklyn.webp",
    "v103/artwork/buckn_the_bain.webp",
    "v103/artwork/cheerleader.webp",
    "v103/artwork/coffee_in_amsterdam.webp",
    "v103/artwork/cool_fire.webp",
    "v103/artwork/dancing_on_your_grave.webp",
    "v103/artwork/date_disaster.webp",
    "v103/artwork/deep_blue.webp",
    "v103/artwork/deepdive_1.webp",
    "v103/artwork/deepdive_2.webp",
    "v103/artwork/default.webp",
    "v103/artwork/delta_blues.webp",
    "v103/artwork/digital_ghost.webp",
    "v103/artwork/disco_flashback.webp",
    "v103/artwork/disco_flashback_2.webp",
    "v103/artwork/disposable.webp",
    "v103/artwork/distortion.webp",
    "v103/artwork/drunk_not_dumb.webp",
    "v103/artwork/dynamite.webp",
    "v103/artwork/electric_hearts.webp",
    "v103/artwork/embers_and_sparks.webp",
    "v103/artwork/fences_down.webp",
    "v103/artwork/fire_in_my_veins.webp",
    "v103/artwork/first_steps_to_stardom.webp",
    "v103/artwork/fog_of_fear.webp",
    "v103/artwork/forever.webp",
    "v103/artwork/four_chords_later.webp",
    "v103/artwork/friday_night.webp",
    "v103/artwork/from_first_steps_to_stardom.webp",
    "v103/artwork/frost_and_friction.webp",
    "v103/artwork/frozen_heart.webp",
    "v103/artwork/garage_band.webp",
    "v103/artwork/ghost_in_the_garden.webp",
    "v103/artwork/god_save_the_king.webp",
    "v103/artwork/golden_days.webp",
    "v103/artwork/good_enough.webp",
    "v103/artwork/happy_birthday_in_heaven.webp",
    "v103/artwork/haunted_haven.webp",
    "v103/artwork/heart_of_fire_and_ice.webp",
    "v103/artwork/her_first_truck.webp",
    "v103/artwork/hes_still_here.webp",
    "v103/artwork/home_now.webp",
    "v103/artwork/howling_wolves.webp",
    "v103/artwork/hurricane.webp",
    "v103/artwork/hypocrites.webp",
    "v103/artwork/i_hate_you.webp",
    "v103/artwork/i_love_school.webp",
    "v103/artwork/i_scream.webp",
    "v103/artwork/insatiable.webp",
    "v103/artwork/insult_the_ones_you_love.webp",
    "v103/artwork/introverted_girl.webp",
    "v103/artwork/jet_set.webp",
    "v103/artwork/julia_and_friends.webp",
    "v103/artwork/just_a_vibe.webp",
    "v103/artwork/just_wants_to_be_loved.webp",
    "v103/artwork/last_exit.webp",
    "v103/artwork/left_lane_legend.webp",
    "v103/artwork/little_butterflies.webp",
    "v103/artwork/luck_for_granted.webp",
    "v103/artwork/maybe_they_knew.webp",
    "v103/artwork/mind_the_gap.webp",
    "v103/artwork/my_foundation.webp",
    "v103/artwork/my_sweet_little_star.webp",
    "v103/artwork/need_for_speed.webp",
    "v103/artwork/nice_girl.webp",
    "v103/artwork/one_in_a_quarter_billion.webp",
    "v103/artwork/one_pulse.webp",
    "v103/artwork/paradox_love.webp",
    "v103/artwork/password_expired.webp",
    "v103/artwork/password_expired_live.webp",
    "v103/artwork/pathetique.webp",
    "v103/artwork/peaks_of_gold.webp",
    "v103/artwork/play_it_again.webp",
    "v103/artwork/private_lake.webp",
    "v103/artwork/radio_trash.webp",
    "v103/artwork/ride_the_groove.webp",
    "v103/artwork/rocker_songwriter.webp",
    "v103/artwork/sailing_on_open_water.webp",
    "v103/artwork/sanctified_sinner.webp",
    "v103/artwork/sanctuary_riot.webp",
    "v103/artwork/schools_out.webp",
    "v103/artwork/set_the_spirit_free.webp",
    "v103/artwork/siblings.webp",
    "v103/artwork/skeleton_dance.webp",
    "v103/artwork/slippery_road.webp",
    "v103/artwork/social_lubricant.webp",
    "v103/artwork/soulmate.webp",
    "v103/artwork/southern_belle.webp",
    "v103/artwork/southern_heat.webp",
    "v103/artwork/southerns_eve.webp",
    "v103/artwork/spooky.webp",
    "v103/artwork/spring.webp",
    "v103/artwork/storm_of_the_abyss.webp",
    "v103/artwork/summers_farewell.webp",
    "v103/artwork/surfing_girl_wild_and_free.webp",
    "v103/artwork/tabby_gonzalez.webp",
    "v103/artwork/the_city_i_long_for.webp",
    "v103/artwork/the_dive.webp",
    "v103/artwork/the_hard_way.webp",
    "v103/artwork/the_hook.webp",
    "v103/artwork/the_quiet_kind.webp",
    "v103/artwork/the_rhythm_of_the_fox.webp",
    "v103/artwork/the_rhythm_of_you.webp",
    "v103/artwork/the_sharpened_bow.webp",
    "v103/artwork/the_sirens_anchor.webp",
    "v103/artwork/the_soft_return.webp",
    "v103/artwork/the_steel_winged_swan.webp",
    "v103/artwork/this_is_fine.webp",
    "v103/artwork/tide_on_stone.webp",
    "v103/artwork/toccata.webp",
    "v103/artwork/trick_or_treat.webp",
    "v103/artwork/uncaged.webp",
    "v103/artwork/upon_a_winding_trail.webp",
    "v103/artwork/venezia.webp",
    "v103/artwork/verona.webp",
    "v103/artwork/weekend.webp",
    "v103/artwork/whiteout.webp",
    "v103/artwork/winterstorm.webp",
    "v103/css/style.css",
    "v103/datenschutz.html",
    "v103/essays/embeddings.html",
    "v103/essays/essay1.html",
    "v103/essays/gemini-code-1782138112807.html",
    "v103/essays/ssm.html",
    "v103/essays/transformers.html",
    "v103/images/Guitar-in-Dolomites.webp",
    "v103/images/Hero.webp",
    "v103/images/Hero_square.webp",
    "v103/images/Julia-skiing-Dolomites.webp",
    "v103/images/Stage_1.webp",
    "v103/images/Stage_2.webp",
    "v103/images/Stage_3.webp",
    "v103/images/Stage_4.webp",
    "v103/images/Stage_5.webp",
    "v103/images/Stage_6.webp",
    "v103/images/Stage_7.webp",
    "v103/images/Stage_8.webp",
    "v103/images/embeddings_music.webp",
    "v103/images/embeddings_words.webp",
    "v103/images/icons/app_icon_192.png",
    "v103/images/icons/app_icon_512.png",
    "v103/images/julia_embeddings.webp",
    "v103/images/julia_ssm_equations.webp",
    "v103/images/password_expired_live.webp",
    "v103/images/podcasts.webp",
    "v103/images/southern_belle.webp",
    "v103/images/ssm_diagram.webp",
    "v103/images/surfing_girl_wild_and_free.webp",
    "v103/images/under_the_hood.webp",
    "v103/images/witch.webp",
    "v103/impressum.html",
    "v103/index.html",
    "v103/js/DiaryService.js",
    "v103/js/Director.js",
    "v103/js/Main 20260319_1300.js",
    "v103/js/Main.js",
    "v103/js/PickerDrum.js",
    "v103/js/Placeholder.js",
    "v103/js/Player.js",
    "v103/js/SongCollection.js",
    "v103/js/SongService.js",
    "v103/js/VersionCore.js",
    "v103/js/ffmpeg.min.js",
    "v103/js/lucide.js",
    "v103/js/tailwindcss.js",
    "v103/js/tex-mml-chtml.js",
    "v103/legal_notice.html",
    "v103/manifest.json",
    "v103/placeholder/footer.html",
    "v103/placeholder/header.html",
    "v103/privacy_policy.html"
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
