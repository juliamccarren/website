const STATIC_CACHE = 'julia-site-v109';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v109/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v109/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v109/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v109/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v109/artwork/a_slow_blossoming_rose.webp",
    "v109/artwork/alejandro.webp",
    "v109/artwork/alta_tensione.webp",
    "v109/artwork/antitoxic.webp",
    "v109/artwork/autumns_whisper.webp",
    "v109/artwork/avalanche.webp",
    "v109/artwork/betrayal.webp",
    "v109/artwork/big_dreams_shine.webp",
    "v109/artwork/big_dreams_shine_live.webp",
    "v109/artwork/bite_of_the_night.webp",
    "v109/artwork/black_cat_bones.webp",
    "v109/artwork/boring.webp",
    "v109/artwork/brainrot.webp",
    "v109/artwork/brooklyn.webp",
    "v109/artwork/buckn_the_bain.webp",
    "v109/artwork/buio_perfetto.webp",
    "v109/artwork/cheerleader.webp",
    "v109/artwork/coffee_in_amsterdam.webp",
    "v109/artwork/cool_fire.webp",
    "v109/artwork/dancing_on_your_grave.webp",
    "v109/artwork/date_disaster.webp",
    "v109/artwork/deep_blue.webp",
    "v109/artwork/deepdive_1.webp",
    "v109/artwork/deepdive_2.webp",
    "v109/artwork/default.webp",
    "v109/artwork/delta_blues.webp",
    "v109/artwork/digital_ghost.webp",
    "v109/artwork/disco_flashback.webp",
    "v109/artwork/disco_flashback_2.webp",
    "v109/artwork/disposable.webp",
    "v109/artwork/distortion.webp",
    "v109/artwork/drunk_not_dumb.webp",
    "v109/artwork/dynamite.webp",
    "v109/artwork/electric_hearts.webp",
    "v109/artwork/embers_and_sparks.webp",
    "v109/artwork/fences_down.webp",
    "v109/artwork/fire_in_my_veins.webp",
    "v109/artwork/first_steps_to_stardom.webp",
    "v109/artwork/fog_of_fear.webp",
    "v109/artwork/forever.webp",
    "v109/artwork/fornello_rosso.webp",
    "v109/artwork/four_chords_later.webp",
    "v109/artwork/friday_night.webp",
    "v109/artwork/from_first_steps_to_stardom.webp",
    "v109/artwork/frost_and_friction.webp",
    "v109/artwork/frozen_heart.webp",
    "v109/artwork/garage_band.webp",
    "v109/artwork/ghost_in_the_garden.webp",
    "v109/artwork/god_save_the_king.webp",
    "v109/artwork/golden_days.webp",
    "v109/artwork/good_enough.webp",
    "v109/artwork/happy_birthday_in_heaven.webp",
    "v109/artwork/haunted_haven.webp",
    "v109/artwork/heart_of_fire_and_ice.webp",
    "v109/artwork/her_first_truck.webp",
    "v109/artwork/hes_still_here.webp",
    "v109/artwork/home_now.webp",
    "v109/artwork/howling_wolves.webp",
    "v109/artwork/hurricane.webp",
    "v109/artwork/hypocrites.webp",
    "v109/artwork/i_hate_you.webp",
    "v109/artwork/i_love_school.webp",
    "v109/artwork/i_scream.webp",
    "v109/artwork/insatiable.webp",
    "v109/artwork/insult_the_ones_you_love.webp",
    "v109/artwork/introverted_girl.webp",
    "v109/artwork/jet_set.webp",
    "v109/artwork/julia_and_friends.webp",
    "v109/artwork/just_a_vibe.webp",
    "v109/artwork/just_wants_to_be_loved.webp",
    "v109/artwork/last_exit.webp",
    "v109/artwork/left_lane_legend.webp",
    "v109/artwork/little_butterflies.webp",
    "v109/artwork/luck_for_granted.webp",
    "v109/artwork/maybe_they_knew.webp",
    "v109/artwork/mind_the_gap.webp",
    "v109/artwork/my_foundation.webp",
    "v109/artwork/my_sweet_little_star.webp",
    "v109/artwork/need_for_speed.webp",
    "v109/artwork/nice_girl.webp",
    "v109/artwork/one_in_a_quarter_billion.webp",
    "v109/artwork/one_pulse.webp",
    "v109/artwork/paradox_love.webp",
    "v109/artwork/password_expired.webp",
    "v109/artwork/password_expired_live.webp",
    "v109/artwork/pathetique.webp",
    "v109/artwork/peaks_of_gold.webp",
    "v109/artwork/play_it_again.webp",
    "v109/artwork/private_lake.webp",
    "v109/artwork/radio_trash.webp",
    "v109/artwork/resti_qui.webp",
    "v109/artwork/ride_the_groove.webp",
    "v109/artwork/rocker_songwriter.webp",
    "v109/artwork/sailing_on_open_water.webp",
    "v109/artwork/sanctified_sinner.webp",
    "v109/artwork/sanctuary_riot.webp",
    "v109/artwork/schools_out.webp",
    "v109/artwork/set_the_spirit_free.webp",
    "v109/artwork/siblings.webp",
    "v109/artwork/skeleton_dance.webp",
    "v109/artwork/slippery_road.webp",
    "v109/artwork/social_lubricant.webp",
    "v109/artwork/soulmate.webp",
    "v109/artwork/southern_belle.webp",
    "v109/artwork/southern_heat.webp",
    "v109/artwork/southerns_eve.webp",
    "v109/artwork/spooky.webp",
    "v109/artwork/spring.webp",
    "v109/artwork/storm_of_the_abyss.webp",
    "v109/artwork/summers_farewell.webp",
    "v109/artwork/surfing_girl_wild_and_free.webp",
    "v109/artwork/tabby_gonzalez.webp",
    "v109/artwork/the_city_i_long_for.webp",
    "v109/artwork/the_dive.webp",
    "v109/artwork/the_hard_way.webp",
    "v109/artwork/the_hook.webp",
    "v109/artwork/the_quiet_kind.webp",
    "v109/artwork/the_rhythm_of_the_fox.webp",
    "v109/artwork/the_rhythm_of_you.webp",
    "v109/artwork/the_sharpened_bow.webp",
    "v109/artwork/the_sirens_anchor.webp",
    "v109/artwork/the_soft_return.webp",
    "v109/artwork/the_steel_winged_swan.webp",
    "v109/artwork/this_is_fine.webp",
    "v109/artwork/tide_on_stone.webp",
    "v109/artwork/toccata.webp",
    "v109/artwork/trick_or_treat.webp",
    "v109/artwork/uncaged.webp",
    "v109/artwork/upon_a_winding_trail.webp",
    "v109/artwork/venezia.webp",
    "v109/artwork/verona.webp",
    "v109/artwork/vetro_di_genova.webp",
    "v109/artwork/weekend.webp",
    "v109/artwork/whiteout.webp",
    "v109/artwork/winterstorm.webp",
    "v109/css/style 20260815_1400.css",
    "v109/css/style.css",
    "v109/datenschutz.html",
    "v109/essays/embeddings.html",
    "v109/essays/essay1.html",
    "v109/essays/gemini-code-1782138112807.html",
    "v109/essays/ssm.html",
    "v109/essays/transformers.html",
    "v109/images/Guitar-in-Dolomites.webp",
    "v109/images/Hero.webp",
    "v109/images/Hero_square.webp",
    "v109/images/Julia-skiing-Dolomites.webp",
    "v109/images/Stage_1.webp",
    "v109/images/Stage_2.webp",
    "v109/images/Stage_3.webp",
    "v109/images/Stage_4.webp",
    "v109/images/Stage_5.webp",
    "v109/images/Stage_6.webp",
    "v109/images/Stage_7.webp",
    "v109/images/Stage_8.webp",
    "v109/images/embeddings_music.webp",
    "v109/images/embeddings_words.webp",
    "v109/images/icons/app_icon_192.png",
    "v109/images/icons/app_icon_512.png",
    "v109/images/julia_embeddings.webp",
    "v109/images/julia_ssm_equations.webp",
    "v109/images/password_expired_live.webp",
    "v109/images/podcasts.webp",
    "v109/images/southern_belle.webp",
    "v109/images/ssm_diagram.webp",
    "v109/images/surfing_girl_wild_and_free.webp",
    "v109/images/under_the_hood.webp",
    "v109/images/witch.webp",
    "v109/impressum.html",
    "v109/index.html",
    "v109/js/DiaryService.js",
    "v109/js/Director.js",
    "v109/js/Main 20260319_1300.js",
    "v109/js/Main.js",
    "v109/js/PickerDrum.js",
    "v109/js/Placeholder.js",
    "v109/js/Player.js",
    "v109/js/SongCollection.js",
    "v109/js/SongService.js",
    "v109/js/VersionCore.js",
    "v109/js/ffmpeg.min.js",
    "v109/js/lucide.js",
    "v109/js/tailwindcss.js",
    "v109/js/tex-mml-chtml.js",
    "v109/legal_notice.html",
    "v109/manifest.json",
    "v109/placeholder/footer.html",
    "v109/placeholder/header.html",
    "v109/privacy_policy.html"
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
