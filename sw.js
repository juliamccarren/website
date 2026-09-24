const STATIC_CACHE = 'julia-site-v136';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v136/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v136/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v136/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v136/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v136/artwork/a_cinque_metri_dal_cielo.webp",
    "v136/artwork/a_slow_blossoming_rose.webp",
    "v136/artwork/alejandro.webp",
    "v136/artwork/alta_tensione.webp",
    "v136/artwork/antitoxic.webp",
    "v136/artwork/autumns_whisper.webp",
    "v136/artwork/avalanche.webp",
    "v136/artwork/betrayal.webp",
    "v136/artwork/big_dreams_shine.webp",
    "v136/artwork/big_dreams_shine_live.webp",
    "v136/artwork/bite_of_the_night.webp",
    "v136/artwork/black_cat_bones.webp",
    "v136/artwork/boring.webp",
    "v136/artwork/brainrot.webp",
    "v136/artwork/brooklyn.webp",
    "v136/artwork/buckn_the_bain.webp",
    "v136/artwork/buio_perfetto.webp",
    "v136/artwork/cheerleader.webp",
    "v136/artwork/coffee_in_amsterdam.webp",
    "v136/artwork/cool_fire.webp",
    "v136/artwork/dancing_on_your_grave.webp",
    "v136/artwork/date_disaster.webp",
    "v136/artwork/deep_blue.webp",
    "v136/artwork/deepdive_1.webp",
    "v136/artwork/deepdive_2.webp",
    "v136/artwork/default.webp",
    "v136/artwork/delta_blues.webp",
    "v136/artwork/digital_ghost.webp",
    "v136/artwork/disco_flashback.webp",
    "v136/artwork/disco_flashback_2.webp",
    "v136/artwork/disposable.webp",
    "v136/artwork/distortion.webp",
    "v136/artwork/drunk_not_dumb.webp",
    "v136/artwork/duecento_all_ora.webp",
    "v136/artwork/dynamite.webp",
    "v136/artwork/electric_hearts.webp",
    "v136/artwork/embers_and_sparks.webp",
    "v136/artwork/fences_down.webp",
    "v136/artwork/ferro_e_canna.webp",
    "v136/artwork/fine_apnea.webp",
    "v136/artwork/fine_apnea_2.webp",
    "v136/artwork/fire_in_my_veins.webp",
    "v136/artwork/first_steps_to_stardom.webp",
    "v136/artwork/fog_of_fear.webp",
    "v136/artwork/forever.webp",
    "v136/artwork/fornello_rosso.webp",
    "v136/artwork/four_chords_later.webp",
    "v136/artwork/friday_night.webp",
    "v136/artwork/from_first_steps_to_stardom.webp",
    "v136/artwork/frost_and_friction.webp",
    "v136/artwork/frozen_heart.webp",
    "v136/artwork/fuoco_nel_legno.webp",
    "v136/artwork/fuori_dai_piedi.webp",
    "v136/artwork/fuori_dai_piedi_live.webp",
    "v136/artwork/fuori_dai_piedi_live_v6.webp",
    "v136/artwork/garage_band.webp",
    "v136/artwork/ghost_in_the_garden.webp",
    "v136/artwork/god_save_the_king.webp",
    "v136/artwork/golden_days.webp",
    "v136/artwork/good_enough.webp",
    "v136/artwork/happy_birthday_in_heaven.webp",
    "v136/artwork/haunted_haven.webp",
    "v136/artwork/heart_of_fire_and_ice.webp",
    "v136/artwork/her_first_truck.webp",
    "v136/artwork/hes_still_here.webp",
    "v136/artwork/hes_still_here_2026.webp",
    "v136/artwork/home_now.webp",
    "v136/artwork/howling_wolves.webp",
    "v136/artwork/hurricane.webp",
    "v136/artwork/hypocrites.webp",
    "v136/artwork/i_hate_you.webp",
    "v136/artwork/i_love_school.webp",
    "v136/artwork/i_scream.webp",
    "v136/artwork/i_tuoi_piccoli_disordini.webp",
    "v136/artwork/insatiable.webp",
    "v136/artwork/insult_the_ones_you_love.webp",
    "v136/artwork/introverted_girl.webp",
    "v136/artwork/jet_set.webp",
    "v136/artwork/julia_and_friends.webp",
    "v136/artwork/just_a_vibe.webp",
    "v136/artwork/just_wants_to_be_loved.webp",
    "v136/artwork/l_ultimo_adesso.webp",
    "v136/artwork/la_sposa_del_tuono.webp",
    "v136/artwork/la_sposa_del_tuono_live.webp",
    "v136/artwork/last_exit.webp",
    "v136/artwork/left_lane_legend.webp",
    "v136/artwork/little_butterflies.webp",
    "v136/artwork/luce_rossa.webp",
    "v136/artwork/luck_for_granted.webp",
    "v136/artwork/maybe_they_knew.webp",
    "v136/artwork/mind_the_gap.webp",
    "v136/artwork/my_foundation.webp",
    "v136/artwork/my_sweet_little_star.webp",
    "v136/artwork/need_for_speed.webp",
    "v136/artwork/nessun_dorma.webp",
    "v136/artwork/nice_girl.webp",
    "v136/artwork/nuora_selvaggia.webp",
    "v136/artwork/one_in_a_quarter_billion.webp",
    "v136/artwork/one_pulse.webp",
    "v136/artwork/paradox_love.webp",
    "v136/artwork/password_expired.webp",
    "v136/artwork/password_expired_live.webp",
    "v136/artwork/pathetique.webp",
    "v136/artwork/peaks_of_gold.webp",
    "v136/artwork/play_it_again.webp",
    "v136/artwork/private_lake.webp",
    "v136/artwork/radio_trash.webp",
    "v136/artwork/regina_di_niente.webp",
    "v136/artwork/resti_qui.webp",
    "v136/artwork/ride_the_groove.webp",
    "v136/artwork/rocker_songwriter.webp",
    "v136/artwork/sailing_on_open_water.webp",
    "v136/artwork/sanctified_sinner.webp",
    "v136/artwork/sanctuary_riot.webp",
    "v136/artwork/scendi_dalla_sella.webp",
    "v136/artwork/schools_out.webp",
    "v136/artwork/set_the_spirit_free.webp",
    "v136/artwork/settembre_mi_guarda.jpg",
    "v136/artwork/settembre_mi_guarda.webp",
    "v136/artwork/siblings.webp",
    "v136/artwork/skeleton_dance.webp",
    "v136/artwork/slippery_road.webp",
    "v136/artwork/social_lubricant.webp",
    "v136/artwork/soulmate.webp",
    "v136/artwork/southern_belle.webp",
    "v136/artwork/southern_heat.webp",
    "v136/artwork/southerns_eve.webp",
    "v136/artwork/spacca_il_cristallo.webp",
    "v136/artwork/spooky.webp",
    "v136/artwork/spring.webp",
    "v136/artwork/storm_of_the_abyss.webp",
    "v136/artwork/summers_farewell.webp",
    "v136/artwork/surfing_girl_wild_and_free.webp",
    "v136/artwork/tabby_gonzalez.webp",
    "v136/artwork/the_city_i_long_for.webp",
    "v136/artwork/the_dive.webp",
    "v136/artwork/the_hard_way.webp",
    "v136/artwork/the_hook.webp",
    "v136/artwork/the_quiet_kind.webp",
    "v136/artwork/the_rhythm_of_the_fox.webp",
    "v136/artwork/the_rhythm_of_you.webp",
    "v136/artwork/the_sharpened_bow.webp",
    "v136/artwork/the_sirens_anchor.webp",
    "v136/artwork/the_soft_return.webp",
    "v136/artwork/the_steel_winged_swan.webp",
    "v136/artwork/this_is_fine.webp",
    "v136/artwork/tide_on_stone.webp",
    "v136/artwork/toccata.webp",
    "v136/artwork/trick_or_treat.webp",
    "v136/artwork/un_docile_arco.webp",
    "v136/artwork/un_tuffo_al_cuore.webp",
    "v136/artwork/uncaged.webp",
    "v136/artwork/upon_a_winding_trail.webp",
    "v136/artwork/venezia.webp",
    "v136/artwork/verona.webp",
    "v136/artwork/vetro_di_genova.webp",
    "v136/artwork/weekend.webp",
    "v136/artwork/whiteout.webp",
    "v136/artwork/winterstorm.webp",
    "v136/css/style 20260815_1400.css",
    "v136/css/style copy.css",
    "v136/css/style.css",
    "v136/datenschutz.html",
    "v136/essays/embeddings.html",
    "v136/essays/essay1.html",
    "v136/essays/gemini-code-1782138112807.html",
    "v136/essays/ssm.html",
    "v136/essays/transformers.html",
    "v136/images/Guitar-in-Dolomites.webp",
    "v136/images/Hero.webp",
    "v136/images/Hero_1.webp",
    "v136/images/Hero_1_Square.webp",
    "v136/images/Hero_2.webp",
    "v136/images/Julia-skiing-Dolomites.webp",
    "v136/images/Stage_1.webp",
    "v136/images/Stage_2.webp",
    "v136/images/Stage_3.webp",
    "v136/images/Stage_4.webp",
    "v136/images/Stage_5.webp",
    "v136/images/Stage_6.webp",
    "v136/images/Stage_7.webp",
    "v136/images/Stage_8.webp",
    "v136/images/embeddings_music.webp",
    "v136/images/embeddings_words.webp",
    "v136/images/icons/app_icon_192 copy.png",
    "v136/images/icons/app_icon_192.png",
    "v136/images/icons/app_icon_512 copy.png",
    "v136/images/icons/app_icon_512.png",
    "v136/images/julia_embeddings.webp",
    "v136/images/julia_ssm_equations.webp",
    "v136/images/password_expired_live.webp",
    "v136/images/podcasts.webp",
    "v136/images/southern_belle.webp",
    "v136/images/ssm_diagram.webp",
    "v136/images/surfing_girl_wild_and_free.webp",
    "v136/images/under_the_hood.webp",
    "v136/images/witch.webp",
    "v136/impressum.html",
    "v136/index.html",
    "v136/js/DiaryService.js",
    "v136/js/Director.js",
    "v136/js/Main 20260319_1300.js",
    "v136/js/Main.js",
    "v136/js/PickerDrum.js",
    "v136/js/Placeholder.js",
    "v136/js/Player.js",
    "v136/js/SongCollection.js",
    "v136/js/SongService.js",
    "v136/js/VersionCore.js",
    "v136/js/ffmpeg.min.js",
    "v136/js/lucide.js",
    "v136/js/tailwindcss.js",
    "v136/js/tex-mml-chtml.js",
    "v136/legal_notice.html",
    "v136/manifest.json",
    "v136/placeholder/footer.html",
    "v136/placeholder/header.html",
    "v136/privacy_policy.html"
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
