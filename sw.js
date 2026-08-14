const STATIC_CACHE = 'julia-site-v105';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v105/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v105/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v105/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v105/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v105/artwork/a_slow_blossoming_rose.webp",
    "v105/artwork/alejandro.webp",
    "v105/artwork/antitoxic.webp",
    "v105/artwork/autumns_whisper.webp",
    "v105/artwork/avalanche.webp",
    "v105/artwork/betrayal.webp",
    "v105/artwork/big_dreams_shine.webp",
    "v105/artwork/big_dreams_shine_live.webp",
    "v105/artwork/bite_of_the_night.webp",
    "v105/artwork/black_cat_bones.webp",
    "v105/artwork/boring.webp",
    "v105/artwork/brainrot.webp",
    "v105/artwork/brooklyn.webp",
    "v105/artwork/buckn_the_bain.webp",
    "v105/artwork/cheerleader.webp",
    "v105/artwork/coffee_in_amsterdam.webp",
    "v105/artwork/cool_fire.webp",
    "v105/artwork/dancing_on_your_grave.webp",
    "v105/artwork/date_disaster.webp",
    "v105/artwork/deep_blue.webp",
    "v105/artwork/deepdive_1.webp",
    "v105/artwork/deepdive_2.webp",
    "v105/artwork/default.webp",
    "v105/artwork/delta_blues.webp",
    "v105/artwork/digital_ghost.webp",
    "v105/artwork/disco_flashback.webp",
    "v105/artwork/disco_flashback_2.webp",
    "v105/artwork/disposable.webp",
    "v105/artwork/distortion.webp",
    "v105/artwork/drunk_not_dumb.webp",
    "v105/artwork/dynamite.webp",
    "v105/artwork/electric_hearts.webp",
    "v105/artwork/embers_and_sparks.webp",
    "v105/artwork/fences_down.webp",
    "v105/artwork/fire_in_my_veins.webp",
    "v105/artwork/first_steps_to_stardom.webp",
    "v105/artwork/fog_of_fear.webp",
    "v105/artwork/forever.webp",
    "v105/artwork/four_chords_later.webp",
    "v105/artwork/friday_night.webp",
    "v105/artwork/from_first_steps_to_stardom.webp",
    "v105/artwork/frost_and_friction.webp",
    "v105/artwork/frozen_heart.webp",
    "v105/artwork/garage_band.webp",
    "v105/artwork/ghost_in_the_garden.webp",
    "v105/artwork/god_save_the_king.webp",
    "v105/artwork/golden_days.webp",
    "v105/artwork/good_enough.webp",
    "v105/artwork/happy_birthday_in_heaven.webp",
    "v105/artwork/haunted_haven.webp",
    "v105/artwork/heart_of_fire_and_ice.webp",
    "v105/artwork/her_first_truck.webp",
    "v105/artwork/hes_still_here.webp",
    "v105/artwork/home_now.webp",
    "v105/artwork/howling_wolves.webp",
    "v105/artwork/hurricane.webp",
    "v105/artwork/hypocrites.webp",
    "v105/artwork/i_hate_you.webp",
    "v105/artwork/i_love_school.webp",
    "v105/artwork/i_scream.webp",
    "v105/artwork/insatiable.webp",
    "v105/artwork/insult_the_ones_you_love.webp",
    "v105/artwork/introverted_girl.webp",
    "v105/artwork/jet_set.webp",
    "v105/artwork/julia_and_friends.webp",
    "v105/artwork/just_a_vibe.webp",
    "v105/artwork/just_wants_to_be_loved.webp",
    "v105/artwork/last_exit.webp",
    "v105/artwork/left_lane_legend.webp",
    "v105/artwork/little_butterflies.webp",
    "v105/artwork/luck_for_granted.webp",
    "v105/artwork/maybe_they_knew.webp",
    "v105/artwork/mind_the_gap.webp",
    "v105/artwork/my_foundation.webp",
    "v105/artwork/my_sweet_little_star.webp",
    "v105/artwork/need_for_speed.webp",
    "v105/artwork/nice_girl.webp",
    "v105/artwork/one_in_a_quarter_billion.webp",
    "v105/artwork/one_pulse.webp",
    "v105/artwork/paradox_love.webp",
    "v105/artwork/password_expired.webp",
    "v105/artwork/password_expired_live.webp",
    "v105/artwork/pathetique.webp",
    "v105/artwork/peaks_of_gold.webp",
    "v105/artwork/play_it_again.webp",
    "v105/artwork/private_lake.webp",
    "v105/artwork/radio_trash.webp",
    "v105/artwork/resti_qui.webp",
    "v105/artwork/ride_the_groove.webp",
    "v105/artwork/rocker_songwriter.webp",
    "v105/artwork/sailing_on_open_water.webp",
    "v105/artwork/sanctified_sinner.webp",
    "v105/artwork/sanctuary_riot.webp",
    "v105/artwork/schools_out.webp",
    "v105/artwork/set_the_spirit_free.webp",
    "v105/artwork/siblings.webp",
    "v105/artwork/skeleton_dance.webp",
    "v105/artwork/slippery_road.webp",
    "v105/artwork/social_lubricant.webp",
    "v105/artwork/soulmate.webp",
    "v105/artwork/southern_belle.webp",
    "v105/artwork/southern_heat.webp",
    "v105/artwork/southerns_eve.webp",
    "v105/artwork/spooky.webp",
    "v105/artwork/spring.webp",
    "v105/artwork/storm_of_the_abyss.webp",
    "v105/artwork/summers_farewell.webp",
    "v105/artwork/surfing_girl_wild_and_free.webp",
    "v105/artwork/tabby_gonzalez.webp",
    "v105/artwork/the_city_i_long_for.webp",
    "v105/artwork/the_dive.webp",
    "v105/artwork/the_hard_way.webp",
    "v105/artwork/the_hook.webp",
    "v105/artwork/the_quiet_kind.webp",
    "v105/artwork/the_rhythm_of_the_fox.webp",
    "v105/artwork/the_rhythm_of_you.webp",
    "v105/artwork/the_sharpened_bow.webp",
    "v105/artwork/the_sirens_anchor.webp",
    "v105/artwork/the_soft_return.webp",
    "v105/artwork/the_steel_winged_swan.webp",
    "v105/artwork/this_is_fine.webp",
    "v105/artwork/tide_on_stone.webp",
    "v105/artwork/toccata.webp",
    "v105/artwork/trick_or_treat.webp",
    "v105/artwork/uncaged.webp",
    "v105/artwork/upon_a_winding_trail.webp",
    "v105/artwork/venezia.webp",
    "v105/artwork/verona.webp",
    "v105/artwork/weekend.webp",
    "v105/artwork/whiteout.webp",
    "v105/artwork/winterstorm.webp",
    "v105/css/style.css",
    "v105/datenschutz.html",
    "v105/essays/embeddings.html",
    "v105/essays/essay1.html",
    "v105/essays/gemini-code-1782138112807.html",
    "v105/essays/ssm.html",
    "v105/essays/transformers.html",
    "v105/images/Guitar-in-Dolomites.webp",
    "v105/images/Hero.webp",
    "v105/images/Hero_square.webp",
    "v105/images/Julia-skiing-Dolomites.webp",
    "v105/images/Stage_1.webp",
    "v105/images/Stage_2.webp",
    "v105/images/Stage_3.webp",
    "v105/images/Stage_4.webp",
    "v105/images/Stage_5.webp",
    "v105/images/Stage_6.webp",
    "v105/images/Stage_7.webp",
    "v105/images/Stage_8.webp",
    "v105/images/embeddings_music.webp",
    "v105/images/embeddings_words.webp",
    "v105/images/icons/app_icon_192.png",
    "v105/images/icons/app_icon_512.png",
    "v105/images/julia_embeddings.webp",
    "v105/images/julia_ssm_equations.webp",
    "v105/images/password_expired_live.webp",
    "v105/images/podcasts.webp",
    "v105/images/southern_belle.webp",
    "v105/images/ssm_diagram.webp",
    "v105/images/surfing_girl_wild_and_free.webp",
    "v105/images/under_the_hood.webp",
    "v105/images/witch.webp",
    "v105/impressum.html",
    "v105/index.html",
    "v105/js/DiaryService.js",
    "v105/js/Director.js",
    "v105/js/Main 20260319_1300.js",
    "v105/js/Main.js",
    "v105/js/PickerDrum.js",
    "v105/js/Placeholder.js",
    "v105/js/Player.js",
    "v105/js/SongCollection.js",
    "v105/js/SongService.js",
    "v105/js/VersionCore.js",
    "v105/js/ffmpeg.min.js",
    "v105/js/lucide.js",
    "v105/js/tailwindcss.js",
    "v105/js/tex-mml-chtml.js",
    "v105/legal_notice.html",
    "v105/manifest.json",
    "v105/placeholder/footer.html",
    "v105/placeholder/header.html",
    "v105/privacy_policy.html"
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
