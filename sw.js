const STATIC_CACHE = 'julia-site-v111';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v111/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v111/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v111/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v111/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v111/artwork/a_slow_blossoming_rose.webp",
    "v111/artwork/alejandro.webp",
    "v111/artwork/alta_tensione.webp",
    "v111/artwork/antitoxic.webp",
    "v111/artwork/autumns_whisper.webp",
    "v111/artwork/avalanche.webp",
    "v111/artwork/betrayal.webp",
    "v111/artwork/big_dreams_shine.webp",
    "v111/artwork/big_dreams_shine_live.webp",
    "v111/artwork/bite_of_the_night.webp",
    "v111/artwork/black_cat_bones.webp",
    "v111/artwork/boring.webp",
    "v111/artwork/brainrot.webp",
    "v111/artwork/brooklyn.webp",
    "v111/artwork/buckn_the_bain.webp",
    "v111/artwork/buio_perfetto.webp",
    "v111/artwork/cheerleader.webp",
    "v111/artwork/coffee_in_amsterdam.webp",
    "v111/artwork/cool_fire.webp",
    "v111/artwork/dancing_on_your_grave.webp",
    "v111/artwork/date_disaster.webp",
    "v111/artwork/deep_blue.webp",
    "v111/artwork/deepdive_1.webp",
    "v111/artwork/deepdive_2.webp",
    "v111/artwork/default.webp",
    "v111/artwork/delta_blues.webp",
    "v111/artwork/digital_ghost.webp",
    "v111/artwork/disco_flashback.webp",
    "v111/artwork/disco_flashback_2.webp",
    "v111/artwork/disposable.webp",
    "v111/artwork/distortion.webp",
    "v111/artwork/drunk_not_dumb.webp",
    "v111/artwork/dynamite.webp",
    "v111/artwork/electric_hearts.webp",
    "v111/artwork/embers_and_sparks.webp",
    "v111/artwork/fences_down.webp",
    "v111/artwork/fire_in_my_veins.webp",
    "v111/artwork/first_steps_to_stardom.webp",
    "v111/artwork/fog_of_fear.webp",
    "v111/artwork/forever.webp",
    "v111/artwork/fornello_rosso.webp",
    "v111/artwork/four_chords_later.webp",
    "v111/artwork/friday_night.webp",
    "v111/artwork/from_first_steps_to_stardom.webp",
    "v111/artwork/frost_and_friction.webp",
    "v111/artwork/frozen_heart.webp",
    "v111/artwork/garage_band.webp",
    "v111/artwork/ghost_in_the_garden.webp",
    "v111/artwork/god_save_the_king.webp",
    "v111/artwork/golden_days.webp",
    "v111/artwork/good_enough.webp",
    "v111/artwork/happy_birthday_in_heaven.webp",
    "v111/artwork/haunted_haven.webp",
    "v111/artwork/heart_of_fire_and_ice.webp",
    "v111/artwork/her_first_truck.webp",
    "v111/artwork/hes_still_here.webp",
    "v111/artwork/hes_still_here_2026.webp",
    "v111/artwork/home_now.webp",
    "v111/artwork/howling_wolves.webp",
    "v111/artwork/hurricane.webp",
    "v111/artwork/hypocrites.webp",
    "v111/artwork/i_hate_you.webp",
    "v111/artwork/i_love_school.webp",
    "v111/artwork/i_scream.webp",
    "v111/artwork/insatiable.webp",
    "v111/artwork/insult_the_ones_you_love.webp",
    "v111/artwork/introverted_girl.webp",
    "v111/artwork/jet_set.webp",
    "v111/artwork/julia_and_friends.webp",
    "v111/artwork/just_a_vibe.webp",
    "v111/artwork/just_wants_to_be_loved.webp",
    "v111/artwork/last_exit.webp",
    "v111/artwork/left_lane_legend.webp",
    "v111/artwork/little_butterflies.webp",
    "v111/artwork/luce_rossa.webp",
    "v111/artwork/luck_for_granted.webp",
    "v111/artwork/maybe_they_knew.webp",
    "v111/artwork/mind_the_gap.webp",
    "v111/artwork/my_foundation.webp",
    "v111/artwork/my_sweet_little_star.webp",
    "v111/artwork/need_for_speed.webp",
    "v111/artwork/nice_girl.webp",
    "v111/artwork/one_in_a_quarter_billion.webp",
    "v111/artwork/one_pulse.webp",
    "v111/artwork/paradox_love.webp",
    "v111/artwork/password_expired.webp",
    "v111/artwork/password_expired_live.webp",
    "v111/artwork/pathetique.webp",
    "v111/artwork/peaks_of_gold.webp",
    "v111/artwork/play_it_again.webp",
    "v111/artwork/private_lake.webp",
    "v111/artwork/radio_trash.webp",
    "v111/artwork/resti_qui.webp",
    "v111/artwork/ride_the_groove.webp",
    "v111/artwork/rocker_songwriter.webp",
    "v111/artwork/sailing_on_open_water.webp",
    "v111/artwork/sanctified_sinner.webp",
    "v111/artwork/sanctuary_riot.webp",
    "v111/artwork/schools_out.webp",
    "v111/artwork/set_the_spirit_free.webp",
    "v111/artwork/siblings.webp",
    "v111/artwork/skeleton_dance.webp",
    "v111/artwork/slippery_road.webp",
    "v111/artwork/social_lubricant.webp",
    "v111/artwork/soulmate.webp",
    "v111/artwork/southern_belle.webp",
    "v111/artwork/southern_heat.webp",
    "v111/artwork/southerns_eve.webp",
    "v111/artwork/spooky.webp",
    "v111/artwork/spring.webp",
    "v111/artwork/storm_of_the_abyss.webp",
    "v111/artwork/summers_farewell.webp",
    "v111/artwork/surfing_girl_wild_and_free.webp",
    "v111/artwork/tabby_gonzalez.webp",
    "v111/artwork/the_city_i_long_for.webp",
    "v111/artwork/the_dive.webp",
    "v111/artwork/the_hard_way.webp",
    "v111/artwork/the_hook.webp",
    "v111/artwork/the_quiet_kind.webp",
    "v111/artwork/the_rhythm_of_the_fox.webp",
    "v111/artwork/the_rhythm_of_you.webp",
    "v111/artwork/the_sharpened_bow.webp",
    "v111/artwork/the_sirens_anchor.webp",
    "v111/artwork/the_soft_return.webp",
    "v111/artwork/the_steel_winged_swan.webp",
    "v111/artwork/this_is_fine.webp",
    "v111/artwork/tide_on_stone.webp",
    "v111/artwork/toccata.webp",
    "v111/artwork/trick_or_treat.webp",
    "v111/artwork/uncaged.webp",
    "v111/artwork/upon_a_winding_trail.webp",
    "v111/artwork/venezia.webp",
    "v111/artwork/verona.webp",
    "v111/artwork/vetro_di_genova.webp",
    "v111/artwork/weekend.webp",
    "v111/artwork/whiteout.webp",
    "v111/artwork/winterstorm.webp",
    "v111/css/style 20260815_1400.css",
    "v111/css/style.css",
    "v111/datenschutz.html",
    "v111/essays/embeddings.html",
    "v111/essays/essay1.html",
    "v111/essays/gemini-code-1782138112807.html",
    "v111/essays/ssm.html",
    "v111/essays/transformers.html",
    "v111/images/Guitar-in-Dolomites.webp",
    "v111/images/Hero.webp",
    "v111/images/Hero_square.webp",
    "v111/images/Julia-skiing-Dolomites.webp",
    "v111/images/Stage_1.webp",
    "v111/images/Stage_2.webp",
    "v111/images/Stage_3.webp",
    "v111/images/Stage_4.webp",
    "v111/images/Stage_5.webp",
    "v111/images/Stage_6.webp",
    "v111/images/Stage_7.webp",
    "v111/images/Stage_8.webp",
    "v111/images/embeddings_music.webp",
    "v111/images/embeddings_words.webp",
    "v111/images/icons/app_icon_192.png",
    "v111/images/icons/app_icon_512.png",
    "v111/images/julia_embeddings.webp",
    "v111/images/julia_ssm_equations.webp",
    "v111/images/password_expired_live.webp",
    "v111/images/podcasts.webp",
    "v111/images/southern_belle.webp",
    "v111/images/ssm_diagram.webp",
    "v111/images/surfing_girl_wild_and_free.webp",
    "v111/images/under_the_hood.webp",
    "v111/images/witch.webp",
    "v111/impressum.html",
    "v111/index.html",
    "v111/js/DiaryService.js",
    "v111/js/Director.js",
    "v111/js/Main 20260319_1300.js",
    "v111/js/Main.js",
    "v111/js/PickerDrum.js",
    "v111/js/Placeholder.js",
    "v111/js/Player.js",
    "v111/js/SongCollection.js",
    "v111/js/SongService.js",
    "v111/js/VersionCore.js",
    "v111/js/ffmpeg.min.js",
    "v111/js/lucide.js",
    "v111/js/tailwindcss.js",
    "v111/js/tex-mml-chtml.js",
    "v111/legal_notice.html",
    "v111/manifest.json",
    "v111/placeholder/footer.html",
    "v111/placeholder/header.html",
    "v111/privacy_policy.html"
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
