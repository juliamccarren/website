const STATIC_CACHE = 'julia-site-v137';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v137/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v137/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v137/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v137/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v137/artwork/a_cinque_metri_dal_cielo.webp",
    "v137/artwork/a_slow_blossoming_rose.webp",
    "v137/artwork/alejandro.webp",
    "v137/artwork/alta_tensione.webp",
    "v137/artwork/antitoxic.webp",
    "v137/artwork/autumns_whisper.webp",
    "v137/artwork/avalanche.webp",
    "v137/artwork/betrayal.webp",
    "v137/artwork/big_dreams_shine.webp",
    "v137/artwork/big_dreams_shine_live.webp",
    "v137/artwork/bite_of_the_night.webp",
    "v137/artwork/black_cat_bones.webp",
    "v137/artwork/boring.webp",
    "v137/artwork/brainrot.webp",
    "v137/artwork/brooklyn.webp",
    "v137/artwork/buckn_the_bain.webp",
    "v137/artwork/buio_perfetto.webp",
    "v137/artwork/cheerleader.webp",
    "v137/artwork/coffee_in_amsterdam.webp",
    "v137/artwork/cool_fire.webp",
    "v137/artwork/dancing_on_your_grave.webp",
    "v137/artwork/date_disaster.webp",
    "v137/artwork/deep_blue.webp",
    "v137/artwork/deepdive_1.webp",
    "v137/artwork/deepdive_2.webp",
    "v137/artwork/default.webp",
    "v137/artwork/delta_blues.webp",
    "v137/artwork/digital_ghost.webp",
    "v137/artwork/disco_flashback.webp",
    "v137/artwork/disco_flashback_2.webp",
    "v137/artwork/disposable.webp",
    "v137/artwork/distortion.webp",
    "v137/artwork/drunk_not_dumb.webp",
    "v137/artwork/duecento_all_ora.webp",
    "v137/artwork/dynamite.webp",
    "v137/artwork/electric_hearts.webp",
    "v137/artwork/embers_and_sparks.webp",
    "v137/artwork/fences_down.webp",
    "v137/artwork/ferro_e_canna.webp",
    "v137/artwork/fine_apnea.webp",
    "v137/artwork/fine_apnea_2.webp",
    "v137/artwork/fire_in_my_veins.webp",
    "v137/artwork/first_steps_to_stardom.webp",
    "v137/artwork/fog_of_fear.webp",
    "v137/artwork/forever.webp",
    "v137/artwork/fornello_rosso.webp",
    "v137/artwork/four_chords_later.webp",
    "v137/artwork/friday_night.webp",
    "v137/artwork/from_first_steps_to_stardom.webp",
    "v137/artwork/frost_and_friction.webp",
    "v137/artwork/frozen_heart.webp",
    "v137/artwork/fuoco_nel_legno.webp",
    "v137/artwork/fuori_dai_piedi.webp",
    "v137/artwork/fuori_dai_piedi_live.webp",
    "v137/artwork/fuori_dai_piedi_live_v6.webp",
    "v137/artwork/garage_band.webp",
    "v137/artwork/ghost_in_the_garden.webp",
    "v137/artwork/god_save_the_king.webp",
    "v137/artwork/golden_days.webp",
    "v137/artwork/good_enough.webp",
    "v137/artwork/happy_birthday_in_heaven.webp",
    "v137/artwork/haunted_haven.webp",
    "v137/artwork/heart_of_fire_and_ice.webp",
    "v137/artwork/her_first_truck.webp",
    "v137/artwork/hes_still_here.webp",
    "v137/artwork/hes_still_here_2026.webp",
    "v137/artwork/home_now.webp",
    "v137/artwork/howling_wolves.webp",
    "v137/artwork/hurricane.webp",
    "v137/artwork/hypocrites.webp",
    "v137/artwork/i_hate_you.webp",
    "v137/artwork/i_love_school.webp",
    "v137/artwork/i_scream.webp",
    "v137/artwork/i_tuoi_piccoli_disordini.webp",
    "v137/artwork/insatiable.webp",
    "v137/artwork/insult_the_ones_you_love.webp",
    "v137/artwork/introverted_girl.webp",
    "v137/artwork/jet_set.webp",
    "v137/artwork/julia_and_friends.webp",
    "v137/artwork/just_a_vibe.webp",
    "v137/artwork/just_wants_to_be_loved.webp",
    "v137/artwork/l_ultimo_adesso.webp",
    "v137/artwork/la_sposa_del_tuono.webp",
    "v137/artwork/la_sposa_del_tuono_live.webp",
    "v137/artwork/last_exit.webp",
    "v137/artwork/left_lane_legend.webp",
    "v137/artwork/little_butterflies.webp",
    "v137/artwork/luce_rossa.webp",
    "v137/artwork/luck_for_granted.webp",
    "v137/artwork/maybe_they_knew.webp",
    "v137/artwork/mind_the_gap.webp",
    "v137/artwork/my_foundation.webp",
    "v137/artwork/my_sweet_little_star.webp",
    "v137/artwork/need_for_speed.webp",
    "v137/artwork/nessun_dorma.webp",
    "v137/artwork/nice_girl.webp",
    "v137/artwork/nuora_selvaggia.webp",
    "v137/artwork/one_in_a_quarter_billion.webp",
    "v137/artwork/one_pulse.webp",
    "v137/artwork/paradox_love.webp",
    "v137/artwork/password_expired.webp",
    "v137/artwork/password_expired_live.webp",
    "v137/artwork/pathetique.webp",
    "v137/artwork/peaks_of_gold.webp",
    "v137/artwork/play_it_again.webp",
    "v137/artwork/private_lake.webp",
    "v137/artwork/radio_trash.webp",
    "v137/artwork/regina_di_niente.webp",
    "v137/artwork/resti_qui.webp",
    "v137/artwork/ride_the_groove.webp",
    "v137/artwork/rocker_songwriter.webp",
    "v137/artwork/sailing_on_open_water.webp",
    "v137/artwork/sanctified_sinner.webp",
    "v137/artwork/sanctuary_riot.webp",
    "v137/artwork/scendi_dalla_sella.webp",
    "v137/artwork/schools_out.webp",
    "v137/artwork/set_the_spirit_free.webp",
    "v137/artwork/settembre_mi_guarda.jpg",
    "v137/artwork/settembre_mi_guarda.webp",
    "v137/artwork/siblings.webp",
    "v137/artwork/skeleton_dance.webp",
    "v137/artwork/slippery_road.webp",
    "v137/artwork/social_lubricant.webp",
    "v137/artwork/soulmate.webp",
    "v137/artwork/southern_belle.webp",
    "v137/artwork/southern_heat.webp",
    "v137/artwork/southerns_eve.webp",
    "v137/artwork/spacca_il_cristallo.webp",
    "v137/artwork/spooky.webp",
    "v137/artwork/spring.webp",
    "v137/artwork/storm_of_the_abyss.webp",
    "v137/artwork/summers_farewell.webp",
    "v137/artwork/surfing_girl_wild_and_free.webp",
    "v137/artwork/tabby_gonzalez.webp",
    "v137/artwork/the_city_i_long_for.webp",
    "v137/artwork/the_dive.webp",
    "v137/artwork/the_hard_way.webp",
    "v137/artwork/the_hook.webp",
    "v137/artwork/the_quiet_kind.webp",
    "v137/artwork/the_rhythm_of_the_fox.webp",
    "v137/artwork/the_rhythm_of_you.webp",
    "v137/artwork/the_sharpened_bow.webp",
    "v137/artwork/the_sirens_anchor.webp",
    "v137/artwork/the_soft_return.webp",
    "v137/artwork/the_steel_winged_swan.webp",
    "v137/artwork/this_is_fine.webp",
    "v137/artwork/tide_on_stone.webp",
    "v137/artwork/toccata.webp",
    "v137/artwork/trick_or_treat.webp",
    "v137/artwork/un_docile_arco.webp",
    "v137/artwork/un_tuffo_al_cuore.webp",
    "v137/artwork/uncaged.webp",
    "v137/artwork/upon_a_winding_trail.webp",
    "v137/artwork/venezia.webp",
    "v137/artwork/verona.webp",
    "v137/artwork/vetro_di_genova.webp",
    "v137/artwork/weekend.webp",
    "v137/artwork/whiteout.webp",
    "v137/artwork/winterstorm.webp",
    "v137/css/style 20260815_1400.css",
    "v137/css/style copy.css",
    "v137/css/style.css",
    "v137/datenschutz.html",
    "v137/essays/embeddings.html",
    "v137/essays/essay1.html",
    "v137/essays/gemini-code-1782138112807.html",
    "v137/essays/ssm.html",
    "v137/essays/transformers.html",
    "v137/images/Guitar-in-Dolomites.webp",
    "v137/images/Hero.webp",
    "v137/images/Hero_1.webp",
    "v137/images/Hero_1_Square.webp",
    "v137/images/Hero_2.webp",
    "v137/images/Julia-skiing-Dolomites.webp",
    "v137/images/Stage_1.webp",
    "v137/images/Stage_2.webp",
    "v137/images/Stage_3.webp",
    "v137/images/Stage_4.webp",
    "v137/images/Stage_5.webp",
    "v137/images/Stage_6.webp",
    "v137/images/Stage_7.webp",
    "v137/images/Stage_8.webp",
    "v137/images/embeddings_music.webp",
    "v137/images/embeddings_words.webp",
    "v137/images/icons/app_icon_192 copy.png",
    "v137/images/icons/app_icon_192.png",
    "v137/images/icons/app_icon_512 copy.png",
    "v137/images/icons/app_icon_512.png",
    "v137/images/julia_embeddings.webp",
    "v137/images/julia_ssm_equations.webp",
    "v137/images/password_expired_live.webp",
    "v137/images/podcasts.webp",
    "v137/images/southern_belle.webp",
    "v137/images/ssm_diagram.webp",
    "v137/images/surfing_girl_wild_and_free.webp",
    "v137/images/under_the_hood.webp",
    "v137/images/witch.webp",
    "v137/impressum.html",
    "v137/index.html",
    "v137/js/DiaryService.js",
    "v137/js/Director.js",
    "v137/js/Main 20260319_1300.js",
    "v137/js/Main.js",
    "v137/js/PickerDrum.js",
    "v137/js/Placeholder.js",
    "v137/js/Player.js",
    "v137/js/SongCollection.js",
    "v137/js/SongService.js",
    "v137/js/VersionCore.js",
    "v137/js/ffmpeg.min.js",
    "v137/js/lucide.js",
    "v137/js/tailwindcss.js",
    "v137/js/tex-mml-chtml.js",
    "v137/legal_notice.html",
    "v137/manifest.json",
    "v137/placeholder/footer.html",
    "v137/placeholder/header.html",
    "v137/privacy_policy.html"
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
