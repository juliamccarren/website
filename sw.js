const STATIC_CACHE = 'julia-site-v116';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v116/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v116/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v116/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v116/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v116/artwork/a_slow_blossoming_rose.webp",
    "v116/artwork/alejandro.webp",
    "v116/artwork/alta_tensione.webp",
    "v116/artwork/antitoxic.webp",
    "v116/artwork/autumns_whisper.webp",
    "v116/artwork/avalanche.webp",
    "v116/artwork/betrayal.webp",
    "v116/artwork/big_dreams_shine.webp",
    "v116/artwork/big_dreams_shine_live.webp",
    "v116/artwork/bite_of_the_night.webp",
    "v116/artwork/black_cat_bones.webp",
    "v116/artwork/boring.webp",
    "v116/artwork/brainrot.webp",
    "v116/artwork/brooklyn.webp",
    "v116/artwork/buckn_the_bain.webp",
    "v116/artwork/buio_perfetto.webp",
    "v116/artwork/cheerleader.webp",
    "v116/artwork/coffee_in_amsterdam.webp",
    "v116/artwork/cool_fire.webp",
    "v116/artwork/dancing_on_your_grave.webp",
    "v116/artwork/date_disaster.webp",
    "v116/artwork/deep_blue.webp",
    "v116/artwork/deepdive_1.webp",
    "v116/artwork/deepdive_2.webp",
    "v116/artwork/default.webp",
    "v116/artwork/delta_blues.webp",
    "v116/artwork/digital_ghost.webp",
    "v116/artwork/disco_flashback.webp",
    "v116/artwork/disco_flashback_2.webp",
    "v116/artwork/disposable.webp",
    "v116/artwork/distortion.webp",
    "v116/artwork/drunk_not_dumb.webp",
    "v116/artwork/dynamite.webp",
    "v116/artwork/electric_hearts.webp",
    "v116/artwork/embers_and_sparks.webp",
    "v116/artwork/fences_down.webp",
    "v116/artwork/ferro_e_canna.webp",
    "v116/artwork/fine_apnea.webp",
    "v116/artwork/fire_in_my_veins.webp",
    "v116/artwork/first_steps_to_stardom.webp",
    "v116/artwork/fog_of_fear.webp",
    "v116/artwork/forever.webp",
    "v116/artwork/fornello_rosso.webp",
    "v116/artwork/four_chords_later.webp",
    "v116/artwork/friday_night.webp",
    "v116/artwork/from_first_steps_to_stardom.webp",
    "v116/artwork/frost_and_friction.webp",
    "v116/artwork/frozen_heart.webp",
    "v116/artwork/fuori_dai_piedi.webp",
    "v116/artwork/fuori_dai_piedi_live.webp",
    "v116/artwork/garage_band.webp",
    "v116/artwork/ghost_in_the_garden.webp",
    "v116/artwork/god_save_the_king.webp",
    "v116/artwork/golden_days.webp",
    "v116/artwork/good_enough.webp",
    "v116/artwork/happy_birthday_in_heaven.webp",
    "v116/artwork/haunted_haven.webp",
    "v116/artwork/heart_of_fire_and_ice.webp",
    "v116/artwork/her_first_truck.webp",
    "v116/artwork/hes_still_here.webp",
    "v116/artwork/hes_still_here_2026.webp",
    "v116/artwork/home_now.webp",
    "v116/artwork/howling_wolves.webp",
    "v116/artwork/hurricane.webp",
    "v116/artwork/hypocrites.webp",
    "v116/artwork/i_hate_you.webp",
    "v116/artwork/i_love_school.webp",
    "v116/artwork/i_scream.webp",
    "v116/artwork/i_tuoi_piccoli_disordini.webp",
    "v116/artwork/insatiable.webp",
    "v116/artwork/insult_the_ones_you_love.webp",
    "v116/artwork/introverted_girl.webp",
    "v116/artwork/jet_set.webp",
    "v116/artwork/julia_and_friends.webp",
    "v116/artwork/just_a_vibe.webp",
    "v116/artwork/just_wants_to_be_loved.webp",
    "v116/artwork/last_exit.webp",
    "v116/artwork/left_lane_legend.webp",
    "v116/artwork/little_butterflies.webp",
    "v116/artwork/luce_rossa.webp",
    "v116/artwork/luck_for_granted.webp",
    "v116/artwork/maybe_they_knew.webp",
    "v116/artwork/mind_the_gap.webp",
    "v116/artwork/my_foundation.webp",
    "v116/artwork/my_sweet_little_star.webp",
    "v116/artwork/need_for_speed.webp",
    "v116/artwork/nice_girl.webp",
    "v116/artwork/one_in_a_quarter_billion.webp",
    "v116/artwork/one_pulse.webp",
    "v116/artwork/paradox_love.webp",
    "v116/artwork/password_expired.webp",
    "v116/artwork/password_expired_live.webp",
    "v116/artwork/pathetique.webp",
    "v116/artwork/peaks_of_gold.webp",
    "v116/artwork/play_it_again.webp",
    "v116/artwork/private_lake.webp",
    "v116/artwork/radio_trash.webp",
    "v116/artwork/regina_di_niente.webp",
    "v116/artwork/resti_qui.webp",
    "v116/artwork/ride_the_groove.webp",
    "v116/artwork/rocker_songwriter.webp",
    "v116/artwork/sailing_on_open_water.webp",
    "v116/artwork/sanctified_sinner.webp",
    "v116/artwork/sanctuary_riot.webp",
    "v116/artwork/schools_out.webp",
    "v116/artwork/set_the_spirit_free.webp",
    "v116/artwork/siblings.webp",
    "v116/artwork/skeleton_dance.webp",
    "v116/artwork/slippery_road.webp",
    "v116/artwork/social_lubricant.webp",
    "v116/artwork/soulmate.webp",
    "v116/artwork/southern_belle.webp",
    "v116/artwork/southern_heat.webp",
    "v116/artwork/southerns_eve.webp",
    "v116/artwork/spooky.webp",
    "v116/artwork/spring.webp",
    "v116/artwork/storm_of_the_abyss.webp",
    "v116/artwork/summers_farewell.webp",
    "v116/artwork/surfing_girl_wild_and_free.webp",
    "v116/artwork/tabby_gonzalez.webp",
    "v116/artwork/the_city_i_long_for.webp",
    "v116/artwork/the_dive.webp",
    "v116/artwork/the_hard_way.webp",
    "v116/artwork/the_hook.webp",
    "v116/artwork/the_quiet_kind.webp",
    "v116/artwork/the_rhythm_of_the_fox.webp",
    "v116/artwork/the_rhythm_of_you.webp",
    "v116/artwork/the_sharpened_bow.webp",
    "v116/artwork/the_sirens_anchor.webp",
    "v116/artwork/the_soft_return.webp",
    "v116/artwork/the_steel_winged_swan.webp",
    "v116/artwork/this_is_fine.webp",
    "v116/artwork/tide_on_stone.webp",
    "v116/artwork/toccata.webp",
    "v116/artwork/trick_or_treat.webp",
    "v116/artwork/uncaged.webp",
    "v116/artwork/upon_a_winding_trail.webp",
    "v116/artwork/venezia.webp",
    "v116/artwork/verona.webp",
    "v116/artwork/vetro_di_genova.webp",
    "v116/artwork/weekend.webp",
    "v116/artwork/whiteout.webp",
    "v116/artwork/winterstorm.webp",
    "v116/css/style 20260815_1400.css",
    "v116/css/style.css",
    "v116/datenschutz.html",
    "v116/essays/embeddings.html",
    "v116/essays/essay1.html",
    "v116/essays/gemini-code-1782138112807.html",
    "v116/essays/ssm.html",
    "v116/essays/transformers.html",
    "v116/images/Guitar-in-Dolomites.webp",
    "v116/images/Hero.webp",
    "v116/images/Hero_square.webp",
    "v116/images/Julia-skiing-Dolomites.webp",
    "v116/images/Stage_1.webp",
    "v116/images/Stage_2.webp",
    "v116/images/Stage_3.webp",
    "v116/images/Stage_4.webp",
    "v116/images/Stage_5.webp",
    "v116/images/Stage_6.webp",
    "v116/images/Stage_7.webp",
    "v116/images/Stage_8.webp",
    "v116/images/embeddings_music.webp",
    "v116/images/embeddings_words.webp",
    "v116/images/icons/app_icon_192.png",
    "v116/images/icons/app_icon_512.png",
    "v116/images/julia_embeddings.webp",
    "v116/images/julia_ssm_equations.webp",
    "v116/images/password_expired_live.webp",
    "v116/images/podcasts.webp",
    "v116/images/southern_belle.webp",
    "v116/images/ssm_diagram.webp",
    "v116/images/surfing_girl_wild_and_free.webp",
    "v116/images/under_the_hood.webp",
    "v116/images/witch.webp",
    "v116/impressum.html",
    "v116/index.html",
    "v116/js/DiaryService.js",
    "v116/js/Director.js",
    "v116/js/Main 20260319_1300.js",
    "v116/js/Main.js",
    "v116/js/PickerDrum.js",
    "v116/js/Placeholder.js",
    "v116/js/Player.js",
    "v116/js/SongCollection.js",
    "v116/js/SongService.js",
    "v116/js/VersionCore.js",
    "v116/js/ffmpeg.min.js",
    "v116/js/lucide.js",
    "v116/js/tailwindcss.js",
    "v116/js/tex-mml-chtml.js",
    "v116/legal_notice.html",
    "v116/manifest.json",
    "v116/placeholder/footer.html",
    "v116/placeholder/header.html",
    "v116/privacy_policy.html"
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
