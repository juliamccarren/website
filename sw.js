const STATIC_CACHE = 'julia-site-v135';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v135/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v135/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v135/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v135/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v135/artwork/a_cinque_metri_dal_cielo.webp",
    "v135/artwork/a_slow_blossoming_rose.webp",
    "v135/artwork/alejandro.webp",
    "v135/artwork/alta_tensione.webp",
    "v135/artwork/antitoxic.webp",
    "v135/artwork/autumns_whisper.webp",
    "v135/artwork/avalanche.webp",
    "v135/artwork/betrayal.webp",
    "v135/artwork/big_dreams_shine.webp",
    "v135/artwork/big_dreams_shine_live.webp",
    "v135/artwork/bite_of_the_night.webp",
    "v135/artwork/black_cat_bones.webp",
    "v135/artwork/boring.webp",
    "v135/artwork/brainrot.webp",
    "v135/artwork/brooklyn.webp",
    "v135/artwork/buckn_the_bain.webp",
    "v135/artwork/buio_perfetto.webp",
    "v135/artwork/cheerleader.webp",
    "v135/artwork/coffee_in_amsterdam.webp",
    "v135/artwork/cool_fire.webp",
    "v135/artwork/dancing_on_your_grave.webp",
    "v135/artwork/date_disaster.webp",
    "v135/artwork/deep_blue.webp",
    "v135/artwork/deepdive_1.webp",
    "v135/artwork/deepdive_2.webp",
    "v135/artwork/default.webp",
    "v135/artwork/delta_blues.webp",
    "v135/artwork/digital_ghost.webp",
    "v135/artwork/disco_flashback.webp",
    "v135/artwork/disco_flashback_2.webp",
    "v135/artwork/disposable.webp",
    "v135/artwork/distortion.webp",
    "v135/artwork/drunk_not_dumb.webp",
    "v135/artwork/duecento_all_ora.webp",
    "v135/artwork/dynamite.webp",
    "v135/artwork/electric_hearts.webp",
    "v135/artwork/embers_and_sparks.webp",
    "v135/artwork/fences_down.webp",
    "v135/artwork/ferro_e_canna.webp",
    "v135/artwork/fine_apnea.webp",
    "v135/artwork/fine_apnea_2.webp",
    "v135/artwork/fire_in_my_veins.webp",
    "v135/artwork/first_steps_to_stardom.webp",
    "v135/artwork/fog_of_fear.webp",
    "v135/artwork/forever.webp",
    "v135/artwork/fornello_rosso.webp",
    "v135/artwork/four_chords_later.webp",
    "v135/artwork/friday_night.webp",
    "v135/artwork/from_first_steps_to_stardom.webp",
    "v135/artwork/frost_and_friction.webp",
    "v135/artwork/frozen_heart.webp",
    "v135/artwork/fuoco_nel_legno.webp",
    "v135/artwork/fuori_dai_piedi.webp",
    "v135/artwork/fuori_dai_piedi_live.webp",
    "v135/artwork/fuori_dai_piedi_live_v6.webp",
    "v135/artwork/garage_band.webp",
    "v135/artwork/ghost_in_the_garden.webp",
    "v135/artwork/god_save_the_king.webp",
    "v135/artwork/golden_days.webp",
    "v135/artwork/good_enough.webp",
    "v135/artwork/happy_birthday_in_heaven.webp",
    "v135/artwork/haunted_haven.webp",
    "v135/artwork/heart_of_fire_and_ice.webp",
    "v135/artwork/her_first_truck.webp",
    "v135/artwork/hes_still_here.webp",
    "v135/artwork/hes_still_here_2026.webp",
    "v135/artwork/home_now.webp",
    "v135/artwork/howling_wolves.webp",
    "v135/artwork/hurricane.webp",
    "v135/artwork/hypocrites.webp",
    "v135/artwork/i_hate_you.webp",
    "v135/artwork/i_love_school.webp",
    "v135/artwork/i_scream.webp",
    "v135/artwork/i_tuoi_piccoli_disordini.webp",
    "v135/artwork/insatiable.webp",
    "v135/artwork/insult_the_ones_you_love.webp",
    "v135/artwork/introverted_girl.webp",
    "v135/artwork/jet_set.webp",
    "v135/artwork/julia_and_friends.webp",
    "v135/artwork/just_a_vibe.webp",
    "v135/artwork/just_wants_to_be_loved.webp",
    "v135/artwork/l_ultimo_adesso.webp",
    "v135/artwork/la_sposa_del_tuono.webp",
    "v135/artwork/la_sposa_del_tuono_live.webp",
    "v135/artwork/last_exit.webp",
    "v135/artwork/left_lane_legend.webp",
    "v135/artwork/little_butterflies.webp",
    "v135/artwork/luce_rossa.webp",
    "v135/artwork/luck_for_granted.webp",
    "v135/artwork/maybe_they_knew.webp",
    "v135/artwork/mind_the_gap.webp",
    "v135/artwork/my_foundation.webp",
    "v135/artwork/my_sweet_little_star.webp",
    "v135/artwork/need_for_speed.webp",
    "v135/artwork/nessun_dorma.webp",
    "v135/artwork/nice_girl.webp",
    "v135/artwork/nuora_selvaggia.webp",
    "v135/artwork/one_in_a_quarter_billion.webp",
    "v135/artwork/one_pulse.webp",
    "v135/artwork/paradox_love.webp",
    "v135/artwork/password_expired.webp",
    "v135/artwork/password_expired_live.webp",
    "v135/artwork/pathetique.webp",
    "v135/artwork/peaks_of_gold.webp",
    "v135/artwork/play_it_again.webp",
    "v135/artwork/private_lake.webp",
    "v135/artwork/radio_trash.webp",
    "v135/artwork/regina_di_niente.webp",
    "v135/artwork/resti_qui.webp",
    "v135/artwork/ride_the_groove.webp",
    "v135/artwork/rocker_songwriter.webp",
    "v135/artwork/sailing_on_open_water.webp",
    "v135/artwork/sanctified_sinner.webp",
    "v135/artwork/sanctuary_riot.webp",
    "v135/artwork/scendi_dalla_sella.webp",
    "v135/artwork/schools_out.webp",
    "v135/artwork/set_the_spirit_free.webp",
    "v135/artwork/siblings.webp",
    "v135/artwork/skeleton_dance.webp",
    "v135/artwork/slippery_road.webp",
    "v135/artwork/social_lubricant.webp",
    "v135/artwork/soulmate.webp",
    "v135/artwork/southern_belle.webp",
    "v135/artwork/southern_heat.webp",
    "v135/artwork/southerns_eve.webp",
    "v135/artwork/spacca_il_cristallo.webp",
    "v135/artwork/spooky.webp",
    "v135/artwork/spring.webp",
    "v135/artwork/storm_of_the_abyss.webp",
    "v135/artwork/summers_farewell.webp",
    "v135/artwork/surfing_girl_wild_and_free.webp",
    "v135/artwork/tabby_gonzalez.webp",
    "v135/artwork/the_city_i_long_for.webp",
    "v135/artwork/the_dive.webp",
    "v135/artwork/the_hard_way.webp",
    "v135/artwork/the_hook.webp",
    "v135/artwork/the_quiet_kind.webp",
    "v135/artwork/the_rhythm_of_the_fox.webp",
    "v135/artwork/the_rhythm_of_you.webp",
    "v135/artwork/the_sharpened_bow.webp",
    "v135/artwork/the_sirens_anchor.webp",
    "v135/artwork/the_soft_return.webp",
    "v135/artwork/the_steel_winged_swan.webp",
    "v135/artwork/this_is_fine.webp",
    "v135/artwork/tide_on_stone.webp",
    "v135/artwork/toccata.webp",
    "v135/artwork/trick_or_treat.webp",
    "v135/artwork/un_docile_arco.webp",
    "v135/artwork/un_tuffo_al_cuore.webp",
    "v135/artwork/uncaged.webp",
    "v135/artwork/upon_a_winding_trail.webp",
    "v135/artwork/venezia.webp",
    "v135/artwork/verona.webp",
    "v135/artwork/vetro_di_genova.webp",
    "v135/artwork/weekend.webp",
    "v135/artwork/whiteout.webp",
    "v135/artwork/winterstorm.webp",
    "v135/css/style 20260815_1400.css",
    "v135/css/style copy.css",
    "v135/css/style.css",
    "v135/datenschutz.html",
    "v135/essays/embeddings.html",
    "v135/essays/essay1.html",
    "v135/essays/gemini-code-1782138112807.html",
    "v135/essays/ssm.html",
    "v135/essays/transformers.html",
    "v135/images/Guitar-in-Dolomites.webp",
    "v135/images/Hero.webp",
    "v135/images/Hero_1.webp",
    "v135/images/Hero_1_Square.webp",
    "v135/images/Hero_2.webp",
    "v135/images/Julia-skiing-Dolomites.webp",
    "v135/images/Stage_1.webp",
    "v135/images/Stage_2.webp",
    "v135/images/Stage_3.webp",
    "v135/images/Stage_4.webp",
    "v135/images/Stage_5.webp",
    "v135/images/Stage_6.webp",
    "v135/images/Stage_7.webp",
    "v135/images/Stage_8.webp",
    "v135/images/embeddings_music.webp",
    "v135/images/embeddings_words.webp",
    "v135/images/icons/app_icon_192 copy.png",
    "v135/images/icons/app_icon_192.png",
    "v135/images/icons/app_icon_512 copy.png",
    "v135/images/icons/app_icon_512.png",
    "v135/images/julia_embeddings.webp",
    "v135/images/julia_ssm_equations.webp",
    "v135/images/password_expired_live.webp",
    "v135/images/podcasts.webp",
    "v135/images/southern_belle.webp",
    "v135/images/ssm_diagram.webp",
    "v135/images/surfing_girl_wild_and_free.webp",
    "v135/images/under_the_hood.webp",
    "v135/images/witch.webp",
    "v135/impressum.html",
    "v135/index.html",
    "v135/js/DiaryService.js",
    "v135/js/Director.js",
    "v135/js/Main 20260319_1300.js",
    "v135/js/Main.js",
    "v135/js/PickerDrum.js",
    "v135/js/Placeholder.js",
    "v135/js/Player.js",
    "v135/js/SongCollection.js",
    "v135/js/SongService.js",
    "v135/js/VersionCore.js",
    "v135/js/ffmpeg.min.js",
    "v135/js/lucide.js",
    "v135/js/tailwindcss.js",
    "v135/js/tex-mml-chtml.js",
    "v135/legal_notice.html",
    "v135/manifest.json",
    "v135/placeholder/footer.html",
    "v135/placeholder/header.html",
    "v135/privacy_policy.html"
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
