const STATIC_CACHE = 'julia-site-v119';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v119/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v119/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v119/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v119/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v119/artwork/a_slow_blossoming_rose.webp",
    "v119/artwork/alejandro.webp",
    "v119/artwork/alta_tensione.webp",
    "v119/artwork/antitoxic.webp",
    "v119/artwork/autumns_whisper.webp",
    "v119/artwork/avalanche.webp",
    "v119/artwork/betrayal.webp",
    "v119/artwork/big_dreams_shine.webp",
    "v119/artwork/big_dreams_shine_live.webp",
    "v119/artwork/bite_of_the_night.webp",
    "v119/artwork/black_cat_bones.webp",
    "v119/artwork/boring.webp",
    "v119/artwork/brainrot.webp",
    "v119/artwork/brooklyn.webp",
    "v119/artwork/buckn_the_bain.webp",
    "v119/artwork/buio_perfetto.webp",
    "v119/artwork/cheerleader.webp",
    "v119/artwork/coffee_in_amsterdam.webp",
    "v119/artwork/cool_fire.webp",
    "v119/artwork/dancing_on_your_grave.webp",
    "v119/artwork/date_disaster.webp",
    "v119/artwork/deep_blue.webp",
    "v119/artwork/deepdive_1.webp",
    "v119/artwork/deepdive_2.webp",
    "v119/artwork/default.webp",
    "v119/artwork/delta_blues.webp",
    "v119/artwork/digital_ghost.webp",
    "v119/artwork/disco_flashback.webp",
    "v119/artwork/disco_flashback_2.webp",
    "v119/artwork/disposable.webp",
    "v119/artwork/distortion.webp",
    "v119/artwork/drunk_not_dumb.webp",
    "v119/artwork/dynamite.webp",
    "v119/artwork/electric_hearts.webp",
    "v119/artwork/embers_and_sparks.webp",
    "v119/artwork/fences_down.webp",
    "v119/artwork/ferro_e_canna.webp",
    "v119/artwork/fine_apnea.webp",
    "v119/artwork/fine_apnea_2.webp",
    "v119/artwork/fire_in_my_veins.webp",
    "v119/artwork/first_steps_to_stardom.webp",
    "v119/artwork/fog_of_fear.webp",
    "v119/artwork/forever.webp",
    "v119/artwork/fornello_rosso.webp",
    "v119/artwork/four_chords_later.webp",
    "v119/artwork/friday_night.webp",
    "v119/artwork/from_first_steps_to_stardom.webp",
    "v119/artwork/frost_and_friction.webp",
    "v119/artwork/frozen_heart.webp",
    "v119/artwork/fuoco_nel_legno.webp",
    "v119/artwork/fuori_dai_piedi.webp",
    "v119/artwork/fuori_dai_piedi_live.webp",
    "v119/artwork/garage_band.webp",
    "v119/artwork/ghost_in_the_garden.webp",
    "v119/artwork/god_save_the_king.webp",
    "v119/artwork/golden_days.webp",
    "v119/artwork/good_enough.webp",
    "v119/artwork/happy_birthday_in_heaven.webp",
    "v119/artwork/haunted_haven.webp",
    "v119/artwork/heart_of_fire_and_ice.webp",
    "v119/artwork/her_first_truck.webp",
    "v119/artwork/hes_still_here.webp",
    "v119/artwork/hes_still_here_2026.webp",
    "v119/artwork/home_now.webp",
    "v119/artwork/howling_wolves.webp",
    "v119/artwork/hurricane.webp",
    "v119/artwork/hypocrites.webp",
    "v119/artwork/i_hate_you.webp",
    "v119/artwork/i_love_school.webp",
    "v119/artwork/i_scream.webp",
    "v119/artwork/i_tuoi_piccoli_disordini.webp",
    "v119/artwork/insatiable.webp",
    "v119/artwork/insult_the_ones_you_love.webp",
    "v119/artwork/introverted_girl.webp",
    "v119/artwork/jet_set.webp",
    "v119/artwork/julia_and_friends.webp",
    "v119/artwork/just_a_vibe.webp",
    "v119/artwork/just_wants_to_be_loved.webp",
    "v119/artwork/last_exit.webp",
    "v119/artwork/left_lane_legend.webp",
    "v119/artwork/little_butterflies.webp",
    "v119/artwork/luce_rossa.webp",
    "v119/artwork/luck_for_granted.webp",
    "v119/artwork/maybe_they_knew.webp",
    "v119/artwork/mind_the_gap.webp",
    "v119/artwork/my_foundation.webp",
    "v119/artwork/my_sweet_little_star.webp",
    "v119/artwork/need_for_speed.webp",
    "v119/artwork/nice_girl.webp",
    "v119/artwork/one_in_a_quarter_billion.webp",
    "v119/artwork/one_pulse.webp",
    "v119/artwork/paradox_love.webp",
    "v119/artwork/password_expired.webp",
    "v119/artwork/password_expired_live.webp",
    "v119/artwork/pathetique.webp",
    "v119/artwork/peaks_of_gold.webp",
    "v119/artwork/play_it_again.webp",
    "v119/artwork/private_lake.webp",
    "v119/artwork/radio_trash.webp",
    "v119/artwork/regina_di_niente.webp",
    "v119/artwork/resti_qui.webp",
    "v119/artwork/ride_the_groove.webp",
    "v119/artwork/rocker_songwriter.webp",
    "v119/artwork/sailing_on_open_water.webp",
    "v119/artwork/sanctified_sinner.webp",
    "v119/artwork/sanctuary_riot.webp",
    "v119/artwork/schools_out.webp",
    "v119/artwork/set_the_spirit_free.webp",
    "v119/artwork/siblings.webp",
    "v119/artwork/skeleton_dance.webp",
    "v119/artwork/slippery_road.webp",
    "v119/artwork/social_lubricant.webp",
    "v119/artwork/soulmate.webp",
    "v119/artwork/southern_belle.webp",
    "v119/artwork/southern_heat.webp",
    "v119/artwork/southerns_eve.webp",
    "v119/artwork/spooky.webp",
    "v119/artwork/spring.webp",
    "v119/artwork/storm_of_the_abyss.webp",
    "v119/artwork/summers_farewell.webp",
    "v119/artwork/surfing_girl_wild_and_free.webp",
    "v119/artwork/tabby_gonzalez.webp",
    "v119/artwork/the_city_i_long_for.webp",
    "v119/artwork/the_dive.webp",
    "v119/artwork/the_hard_way.webp",
    "v119/artwork/the_hook.webp",
    "v119/artwork/the_quiet_kind.webp",
    "v119/artwork/the_rhythm_of_the_fox.webp",
    "v119/artwork/the_rhythm_of_you.webp",
    "v119/artwork/the_sharpened_bow.webp",
    "v119/artwork/the_sirens_anchor.webp",
    "v119/artwork/the_soft_return.webp",
    "v119/artwork/the_steel_winged_swan.webp",
    "v119/artwork/this_is_fine.webp",
    "v119/artwork/tide_on_stone.webp",
    "v119/artwork/toccata.webp",
    "v119/artwork/trick_or_treat.webp",
    "v119/artwork/uncaged.webp",
    "v119/artwork/upon_a_winding_trail.webp",
    "v119/artwork/venezia.webp",
    "v119/artwork/verona.webp",
    "v119/artwork/vetro_di_genova.webp",
    "v119/artwork/weekend.webp",
    "v119/artwork/whiteout.webp",
    "v119/artwork/winterstorm.webp",
    "v119/css/style 20260815_1400.css",
    "v119/css/style.css",
    "v119/datenschutz.html",
    "v119/essays/embeddings.html",
    "v119/essays/essay1.html",
    "v119/essays/gemini-code-1782138112807.html",
    "v119/essays/ssm.html",
    "v119/essays/transformers.html",
    "v119/images/Guitar-in-Dolomites.webp",
    "v119/images/Hero.webp",
    "v119/images/Hero_square.webp",
    "v119/images/Julia-skiing-Dolomites.webp",
    "v119/images/Stage_1.webp",
    "v119/images/Stage_2.webp",
    "v119/images/Stage_3.webp",
    "v119/images/Stage_4.webp",
    "v119/images/Stage_5.webp",
    "v119/images/Stage_6.webp",
    "v119/images/Stage_7.webp",
    "v119/images/Stage_8.webp",
    "v119/images/embeddings_music.webp",
    "v119/images/embeddings_words.webp",
    "v119/images/icons/app_icon_192.png",
    "v119/images/icons/app_icon_512.png",
    "v119/images/julia_embeddings.webp",
    "v119/images/julia_ssm_equations.webp",
    "v119/images/password_expired_live.webp",
    "v119/images/podcasts.webp",
    "v119/images/southern_belle.webp",
    "v119/images/ssm_diagram.webp",
    "v119/images/surfing_girl_wild_and_free.webp",
    "v119/images/under_the_hood.webp",
    "v119/images/witch.webp",
    "v119/impressum.html",
    "v119/index.html",
    "v119/js/DiaryService.js",
    "v119/js/Director.js",
    "v119/js/Main 20260319_1300.js",
    "v119/js/Main.js",
    "v119/js/PickerDrum.js",
    "v119/js/Placeholder.js",
    "v119/js/Player.js",
    "v119/js/SongCollection.js",
    "v119/js/SongService.js",
    "v119/js/VersionCore.js",
    "v119/js/ffmpeg.min.js",
    "v119/js/lucide.js",
    "v119/js/tailwindcss.js",
    "v119/js/tex-mml-chtml.js",
    "v119/legal_notice.html",
    "v119/manifest.json",
    "v119/placeholder/footer.html",
    "v119/placeholder/header.html",
    "v119/privacy_policy.html"
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
