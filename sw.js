const STATIC_CACHE = 'julia-site-v104';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v104/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v104/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v104/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v104/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v104/artwork/a_slow_blossoming_rose.webp",
    "v104/artwork/alejandro.webp",
    "v104/artwork/antitoxic.webp",
    "v104/artwork/autumns_whisper.webp",
    "v104/artwork/avalanche.webp",
    "v104/artwork/betrayal.webp",
    "v104/artwork/big_dreams_shine.webp",
    "v104/artwork/big_dreams_shine_live.webp",
    "v104/artwork/bite_of_the_night.webp",
    "v104/artwork/black_cat_bones.webp",
    "v104/artwork/boring.webp",
    "v104/artwork/brainrot.webp",
    "v104/artwork/brooklyn.webp",
    "v104/artwork/buckn_the_bain.webp",
    "v104/artwork/cheerleader.webp",
    "v104/artwork/coffee_in_amsterdam.webp",
    "v104/artwork/cool_fire.webp",
    "v104/artwork/dancing_on_your_grave.webp",
    "v104/artwork/date_disaster.webp",
    "v104/artwork/deep_blue.webp",
    "v104/artwork/deepdive_1.webp",
    "v104/artwork/deepdive_2.webp",
    "v104/artwork/default.webp",
    "v104/artwork/delta_blues.webp",
    "v104/artwork/digital_ghost.webp",
    "v104/artwork/disco_flashback.webp",
    "v104/artwork/disco_flashback_2.webp",
    "v104/artwork/disposable.webp",
    "v104/artwork/distortion.webp",
    "v104/artwork/drunk_not_dumb.webp",
    "v104/artwork/dynamite.webp",
    "v104/artwork/electric_hearts.webp",
    "v104/artwork/embers_and_sparks.webp",
    "v104/artwork/fences_down.webp",
    "v104/artwork/fire_in_my_veins.webp",
    "v104/artwork/first_steps_to_stardom.webp",
    "v104/artwork/fog_of_fear.webp",
    "v104/artwork/forever.webp",
    "v104/artwork/four_chords_later.webp",
    "v104/artwork/friday_night.webp",
    "v104/artwork/from_first_steps_to_stardom.webp",
    "v104/artwork/frost_and_friction.webp",
    "v104/artwork/frozen_heart.webp",
    "v104/artwork/garage_band.webp",
    "v104/artwork/ghost_in_the_garden.webp",
    "v104/artwork/god_save_the_king.webp",
    "v104/artwork/golden_days.webp",
    "v104/artwork/good_enough.webp",
    "v104/artwork/happy_birthday_in_heaven.webp",
    "v104/artwork/haunted_haven.webp",
    "v104/artwork/heart_of_fire_and_ice.webp",
    "v104/artwork/her_first_truck.webp",
    "v104/artwork/hes_still_here.webp",
    "v104/artwork/home_now.webp",
    "v104/artwork/howling_wolves.webp",
    "v104/artwork/hurricane.webp",
    "v104/artwork/hypocrites.webp",
    "v104/artwork/i_hate_you.webp",
    "v104/artwork/i_love_school.webp",
    "v104/artwork/i_scream.webp",
    "v104/artwork/insatiable.webp",
    "v104/artwork/insult_the_ones_you_love.webp",
    "v104/artwork/introverted_girl.webp",
    "v104/artwork/jet_set.webp",
    "v104/artwork/julia_and_friends.webp",
    "v104/artwork/just_a_vibe.webp",
    "v104/artwork/just_wants_to_be_loved.webp",
    "v104/artwork/last_exit.webp",
    "v104/artwork/left_lane_legend.webp",
    "v104/artwork/little_butterflies.webp",
    "v104/artwork/luck_for_granted.webp",
    "v104/artwork/maybe_they_knew.webp",
    "v104/artwork/mind_the_gap.webp",
    "v104/artwork/my_foundation.webp",
    "v104/artwork/my_sweet_little_star.webp",
    "v104/artwork/need_for_speed.webp",
    "v104/artwork/nice_girl.webp",
    "v104/artwork/one_in_a_quarter_billion.webp",
    "v104/artwork/one_pulse.webp",
    "v104/artwork/paradox_love.webp",
    "v104/artwork/password_expired.webp",
    "v104/artwork/password_expired_live.webp",
    "v104/artwork/pathetique.webp",
    "v104/artwork/peaks_of_gold.webp",
    "v104/artwork/play_it_again.webp",
    "v104/artwork/private_lake.webp",
    "v104/artwork/radio_trash.webp",
    "v104/artwork/ride_the_groove.webp",
    "v104/artwork/rocker_songwriter.webp",
    "v104/artwork/sailing_on_open_water.webp",
    "v104/artwork/sanctified_sinner.webp",
    "v104/artwork/sanctuary_riot.webp",
    "v104/artwork/schools_out.webp",
    "v104/artwork/set_the_spirit_free.webp",
    "v104/artwork/siblings.webp",
    "v104/artwork/skeleton_dance.webp",
    "v104/artwork/slippery_road.webp",
    "v104/artwork/social_lubricant.webp",
    "v104/artwork/soulmate.webp",
    "v104/artwork/southern_belle.webp",
    "v104/artwork/southern_heat.webp",
    "v104/artwork/southerns_eve.webp",
    "v104/artwork/spooky.webp",
    "v104/artwork/spring.webp",
    "v104/artwork/storm_of_the_abyss.webp",
    "v104/artwork/summers_farewell.webp",
    "v104/artwork/surfing_girl_wild_and_free.webp",
    "v104/artwork/tabby_gonzalez.webp",
    "v104/artwork/the_city_i_long_for.webp",
    "v104/artwork/the_dive.webp",
    "v104/artwork/the_hard_way.webp",
    "v104/artwork/the_hook.webp",
    "v104/artwork/the_quiet_kind.webp",
    "v104/artwork/the_rhythm_of_the_fox.webp",
    "v104/artwork/the_rhythm_of_you.webp",
    "v104/artwork/the_sharpened_bow.webp",
    "v104/artwork/the_sirens_anchor.webp",
    "v104/artwork/the_soft_return.webp",
    "v104/artwork/the_steel_winged_swan.webp",
    "v104/artwork/this_is_fine.webp",
    "v104/artwork/tide_on_stone.webp",
    "v104/artwork/toccata.webp",
    "v104/artwork/trick_or_treat.webp",
    "v104/artwork/uncaged.webp",
    "v104/artwork/upon_a_winding_trail.webp",
    "v104/artwork/venezia.webp",
    "v104/artwork/verona.webp",
    "v104/artwork/weekend.webp",
    "v104/artwork/whiteout.webp",
    "v104/artwork/winterstorm.webp",
    "v104/css/style.css",
    "v104/datenschutz.html",
    "v104/essays/embeddings.html",
    "v104/essays/essay1.html",
    "v104/essays/gemini-code-1782138112807.html",
    "v104/essays/ssm.html",
    "v104/essays/transformers.html",
    "v104/images/Guitar-in-Dolomites.webp",
    "v104/images/Hero.webp",
    "v104/images/Hero_square.webp",
    "v104/images/Julia-skiing-Dolomites.webp",
    "v104/images/Stage_1.webp",
    "v104/images/Stage_2.webp",
    "v104/images/Stage_3.webp",
    "v104/images/Stage_4.webp",
    "v104/images/Stage_5.webp",
    "v104/images/Stage_6.webp",
    "v104/images/Stage_7.webp",
    "v104/images/Stage_8.webp",
    "v104/images/embeddings_music.webp",
    "v104/images/embeddings_words.webp",
    "v104/images/icons/app_icon_192.png",
    "v104/images/icons/app_icon_512.png",
    "v104/images/julia_embeddings.webp",
    "v104/images/julia_ssm_equations.webp",
    "v104/images/password_expired_live.webp",
    "v104/images/podcasts.webp",
    "v104/images/southern_belle.webp",
    "v104/images/ssm_diagram.webp",
    "v104/images/surfing_girl_wild_and_free.webp",
    "v104/images/under_the_hood.webp",
    "v104/images/witch.webp",
    "v104/impressum.html",
    "v104/index.html",
    "v104/js/DiaryService.js",
    "v104/js/Director.js",
    "v104/js/Main 20260319_1300.js",
    "v104/js/Main.js",
    "v104/js/PickerDrum.js",
    "v104/js/Placeholder.js",
    "v104/js/Player.js",
    "v104/js/SongCollection.js",
    "v104/js/SongService.js",
    "v104/js/VersionCore.js",
    "v104/js/ffmpeg.min.js",
    "v104/js/lucide.js",
    "v104/js/tailwindcss.js",
    "v104/js/tex-mml-chtml.js",
    "v104/legal_notice.html",
    "v104/manifest.json",
    "v104/placeholder/footer.html",
    "v104/placeholder/header.html",
    "v104/privacy_policy.html"
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
