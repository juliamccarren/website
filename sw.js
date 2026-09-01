const STATIC_CACHE = 'julia-site-v110';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v110/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v110/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v110/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v110/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v110/artwork/a_slow_blossoming_rose.webp",
    "v110/artwork/alejandro.webp",
    "v110/artwork/alta_tensione.webp",
    "v110/artwork/antitoxic.webp",
    "v110/artwork/autumns_whisper.webp",
    "v110/artwork/avalanche.webp",
    "v110/artwork/betrayal.webp",
    "v110/artwork/big_dreams_shine.webp",
    "v110/artwork/big_dreams_shine_live.webp",
    "v110/artwork/bite_of_the_night.webp",
    "v110/artwork/black_cat_bones.webp",
    "v110/artwork/boring.webp",
    "v110/artwork/brainrot.webp",
    "v110/artwork/brooklyn.webp",
    "v110/artwork/buckn_the_bain.webp",
    "v110/artwork/buio_perfetto.webp",
    "v110/artwork/cheerleader.webp",
    "v110/artwork/coffee_in_amsterdam.webp",
    "v110/artwork/cool_fire.webp",
    "v110/artwork/dancing_on_your_grave.webp",
    "v110/artwork/date_disaster.webp",
    "v110/artwork/deep_blue.webp",
    "v110/artwork/deepdive_1.webp",
    "v110/artwork/deepdive_2.webp",
    "v110/artwork/default.webp",
    "v110/artwork/delta_blues.webp",
    "v110/artwork/digital_ghost.webp",
    "v110/artwork/disco_flashback.webp",
    "v110/artwork/disco_flashback_2.webp",
    "v110/artwork/disposable.webp",
    "v110/artwork/distortion.webp",
    "v110/artwork/drunk_not_dumb.webp",
    "v110/artwork/dynamite.webp",
    "v110/artwork/electric_hearts.webp",
    "v110/artwork/embers_and_sparks.webp",
    "v110/artwork/fences_down.webp",
    "v110/artwork/fire_in_my_veins.webp",
    "v110/artwork/first_steps_to_stardom.webp",
    "v110/artwork/fog_of_fear.webp",
    "v110/artwork/forever.webp",
    "v110/artwork/fornello_rosso.webp",
    "v110/artwork/four_chords_later.webp",
    "v110/artwork/friday_night.webp",
    "v110/artwork/from_first_steps_to_stardom.webp",
    "v110/artwork/frost_and_friction.webp",
    "v110/artwork/frozen_heart.webp",
    "v110/artwork/garage_band.webp",
    "v110/artwork/ghost_in_the_garden.webp",
    "v110/artwork/god_save_the_king.webp",
    "v110/artwork/golden_days.webp",
    "v110/artwork/good_enough.webp",
    "v110/artwork/happy_birthday_in_heaven.webp",
    "v110/artwork/haunted_haven.webp",
    "v110/artwork/heart_of_fire_and_ice.webp",
    "v110/artwork/her_first_truck.webp",
    "v110/artwork/hes_still_here.webp",
    "v110/artwork/hes_still_here_2026.webp",
    "v110/artwork/home_now.webp",
    "v110/artwork/howling_wolves.webp",
    "v110/artwork/hurricane.webp",
    "v110/artwork/hypocrites.webp",
    "v110/artwork/i_hate_you.webp",
    "v110/artwork/i_love_school.webp",
    "v110/artwork/i_scream.webp",
    "v110/artwork/insatiable.webp",
    "v110/artwork/insult_the_ones_you_love.webp",
    "v110/artwork/introverted_girl.webp",
    "v110/artwork/jet_set.webp",
    "v110/artwork/julia_and_friends.webp",
    "v110/artwork/just_a_vibe.webp",
    "v110/artwork/just_wants_to_be_loved.webp",
    "v110/artwork/last_exit.webp",
    "v110/artwork/left_lane_legend.webp",
    "v110/artwork/little_butterflies.webp",
    "v110/artwork/luce_rossa.webp",
    "v110/artwork/luck_for_granted.webp",
    "v110/artwork/maybe_they_knew.webp",
    "v110/artwork/mind_the_gap.webp",
    "v110/artwork/my_foundation.webp",
    "v110/artwork/my_sweet_little_star.webp",
    "v110/artwork/need_for_speed.webp",
    "v110/artwork/nice_girl.webp",
    "v110/artwork/one_in_a_quarter_billion.webp",
    "v110/artwork/one_pulse.webp",
    "v110/artwork/paradox_love.webp",
    "v110/artwork/password_expired.webp",
    "v110/artwork/password_expired_live.webp",
    "v110/artwork/pathetique.webp",
    "v110/artwork/peaks_of_gold.webp",
    "v110/artwork/play_it_again.webp",
    "v110/artwork/private_lake.webp",
    "v110/artwork/radio_trash.webp",
    "v110/artwork/resti_qui.webp",
    "v110/artwork/ride_the_groove.webp",
    "v110/artwork/rocker_songwriter.webp",
    "v110/artwork/sailing_on_open_water.webp",
    "v110/artwork/sanctified_sinner.webp",
    "v110/artwork/sanctuary_riot.webp",
    "v110/artwork/schools_out.webp",
    "v110/artwork/set_the_spirit_free.webp",
    "v110/artwork/siblings.webp",
    "v110/artwork/skeleton_dance.webp",
    "v110/artwork/slippery_road.webp",
    "v110/artwork/social_lubricant.webp",
    "v110/artwork/soulmate.webp",
    "v110/artwork/southern_belle.webp",
    "v110/artwork/southern_heat.webp",
    "v110/artwork/southerns_eve.webp",
    "v110/artwork/spooky.webp",
    "v110/artwork/spring.webp",
    "v110/artwork/storm_of_the_abyss.webp",
    "v110/artwork/summers_farewell.webp",
    "v110/artwork/surfing_girl_wild_and_free.webp",
    "v110/artwork/tabby_gonzalez.webp",
    "v110/artwork/the_city_i_long_for.webp",
    "v110/artwork/the_dive.webp",
    "v110/artwork/the_hard_way.webp",
    "v110/artwork/the_hook.webp",
    "v110/artwork/the_quiet_kind.webp",
    "v110/artwork/the_rhythm_of_the_fox.webp",
    "v110/artwork/the_rhythm_of_you.webp",
    "v110/artwork/the_sharpened_bow.webp",
    "v110/artwork/the_sirens_anchor.webp",
    "v110/artwork/the_soft_return.webp",
    "v110/artwork/the_steel_winged_swan.webp",
    "v110/artwork/this_is_fine.webp",
    "v110/artwork/tide_on_stone.webp",
    "v110/artwork/toccata.webp",
    "v110/artwork/trick_or_treat.webp",
    "v110/artwork/uncaged.webp",
    "v110/artwork/upon_a_winding_trail.webp",
    "v110/artwork/venezia.webp",
    "v110/artwork/verona.webp",
    "v110/artwork/vetro_di_genova.webp",
    "v110/artwork/weekend.webp",
    "v110/artwork/whiteout.webp",
    "v110/artwork/winterstorm.webp",
    "v110/css/style 20260815_1400.css",
    "v110/css/style.css",
    "v110/datenschutz.html",
    "v110/essays/embeddings.html",
    "v110/essays/essay1.html",
    "v110/essays/gemini-code-1782138112807.html",
    "v110/essays/ssm.html",
    "v110/essays/transformers.html",
    "v110/images/Guitar-in-Dolomites.webp",
    "v110/images/Hero.webp",
    "v110/images/Hero_square.webp",
    "v110/images/Julia-skiing-Dolomites.webp",
    "v110/images/Stage_1.webp",
    "v110/images/Stage_2.webp",
    "v110/images/Stage_3.webp",
    "v110/images/Stage_4.webp",
    "v110/images/Stage_5.webp",
    "v110/images/Stage_6.webp",
    "v110/images/Stage_7.webp",
    "v110/images/Stage_8.webp",
    "v110/images/embeddings_music.webp",
    "v110/images/embeddings_words.webp",
    "v110/images/icons/app_icon_192.png",
    "v110/images/icons/app_icon_512.png",
    "v110/images/julia_embeddings.webp",
    "v110/images/julia_ssm_equations.webp",
    "v110/images/password_expired_live.webp",
    "v110/images/podcasts.webp",
    "v110/images/southern_belle.webp",
    "v110/images/ssm_diagram.webp",
    "v110/images/surfing_girl_wild_and_free.webp",
    "v110/images/under_the_hood.webp",
    "v110/images/witch.webp",
    "v110/impressum.html",
    "v110/index.html",
    "v110/js/DiaryService.js",
    "v110/js/Director.js",
    "v110/js/Main 20260319_1300.js",
    "v110/js/Main.js",
    "v110/js/PickerDrum.js",
    "v110/js/Placeholder.js",
    "v110/js/Player.js",
    "v110/js/SongCollection.js",
    "v110/js/SongService.js",
    "v110/js/VersionCore.js",
    "v110/js/ffmpeg.min.js",
    "v110/js/lucide.js",
    "v110/js/tailwindcss.js",
    "v110/js/tex-mml-chtml.js",
    "v110/legal_notice.html",
    "v110/manifest.json",
    "v110/placeholder/footer.html",
    "v110/placeholder/header.html",
    "v110/privacy_policy.html"
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
