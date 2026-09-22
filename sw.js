const STATIC_CACHE = 'julia-site-v134';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v134/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v134/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v134/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v134/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v134/artwork/a_cinque_metri_dal_cielo.webp",
    "v134/artwork/a_slow_blossoming_rose.webp",
    "v134/artwork/alejandro.webp",
    "v134/artwork/alta_tensione.webp",
    "v134/artwork/antitoxic.webp",
    "v134/artwork/autumns_whisper.webp",
    "v134/artwork/avalanche.webp",
    "v134/artwork/betrayal.webp",
    "v134/artwork/big_dreams_shine.webp",
    "v134/artwork/big_dreams_shine_live.webp",
    "v134/artwork/bite_of_the_night.webp",
    "v134/artwork/black_cat_bones.webp",
    "v134/artwork/boring.webp",
    "v134/artwork/brainrot.webp",
    "v134/artwork/brooklyn.webp",
    "v134/artwork/buckn_the_bain.webp",
    "v134/artwork/buio_perfetto.webp",
    "v134/artwork/cheerleader.webp",
    "v134/artwork/coffee_in_amsterdam.webp",
    "v134/artwork/cool_fire.webp",
    "v134/artwork/dancing_on_your_grave.webp",
    "v134/artwork/date_disaster.webp",
    "v134/artwork/deep_blue.webp",
    "v134/artwork/deepdive_1.webp",
    "v134/artwork/deepdive_2.webp",
    "v134/artwork/default.webp",
    "v134/artwork/delta_blues.webp",
    "v134/artwork/digital_ghost.webp",
    "v134/artwork/disco_flashback.webp",
    "v134/artwork/disco_flashback_2.webp",
    "v134/artwork/disposable.webp",
    "v134/artwork/distortion.webp",
    "v134/artwork/drunk_not_dumb.webp",
    "v134/artwork/dynamite.webp",
    "v134/artwork/electric_hearts.webp",
    "v134/artwork/embers_and_sparks.webp",
    "v134/artwork/fences_down.webp",
    "v134/artwork/ferro_e_canna.webp",
    "v134/artwork/fine_apnea.webp",
    "v134/artwork/fine_apnea_2.webp",
    "v134/artwork/fire_in_my_veins.webp",
    "v134/artwork/first_steps_to_stardom.webp",
    "v134/artwork/fog_of_fear.webp",
    "v134/artwork/forever.webp",
    "v134/artwork/fornello_rosso.webp",
    "v134/artwork/four_chords_later.webp",
    "v134/artwork/friday_night.webp",
    "v134/artwork/from_first_steps_to_stardom.webp",
    "v134/artwork/frost_and_friction.webp",
    "v134/artwork/frozen_heart.webp",
    "v134/artwork/fuoco_nel_legno.webp",
    "v134/artwork/fuori_dai_piedi.webp",
    "v134/artwork/fuori_dai_piedi_live.webp",
    "v134/artwork/fuori_dai_piedi_live_v6.webp",
    "v134/artwork/garage_band.webp",
    "v134/artwork/ghost_in_the_garden.webp",
    "v134/artwork/god_save_the_king.webp",
    "v134/artwork/golden_days.webp",
    "v134/artwork/good_enough.webp",
    "v134/artwork/happy_birthday_in_heaven.webp",
    "v134/artwork/haunted_haven.webp",
    "v134/artwork/heart_of_fire_and_ice.webp",
    "v134/artwork/her_first_truck.webp",
    "v134/artwork/hes_still_here.webp",
    "v134/artwork/hes_still_here_2026.webp",
    "v134/artwork/home_now.webp",
    "v134/artwork/howling_wolves.webp",
    "v134/artwork/hurricane.webp",
    "v134/artwork/hypocrites.webp",
    "v134/artwork/i_hate_you.webp",
    "v134/artwork/i_love_school.webp",
    "v134/artwork/i_scream.webp",
    "v134/artwork/i_tuoi_piccoli_disordini.webp",
    "v134/artwork/insatiable.webp",
    "v134/artwork/insult_the_ones_you_love.webp",
    "v134/artwork/introverted_girl.webp",
    "v134/artwork/jet_set.webp",
    "v134/artwork/julia_and_friends.webp",
    "v134/artwork/just_a_vibe.webp",
    "v134/artwork/just_wants_to_be_loved.webp",
    "v134/artwork/l_ultimo_adesso.webp",
    "v134/artwork/la_sposa_del_tuono.webp",
    "v134/artwork/la_sposa_del_tuono_live.webp",
    "v134/artwork/last_exit.webp",
    "v134/artwork/left_lane_legend.webp",
    "v134/artwork/little_butterflies.webp",
    "v134/artwork/luce_rossa.webp",
    "v134/artwork/luck_for_granted.webp",
    "v134/artwork/maybe_they_knew.webp",
    "v134/artwork/mind_the_gap.webp",
    "v134/artwork/my_foundation.webp",
    "v134/artwork/my_sweet_little_star.webp",
    "v134/artwork/need_for_speed.webp",
    "v134/artwork/nessun_dorma.webp",
    "v134/artwork/nice_girl.webp",
    "v134/artwork/nuora_selvaggia.webp",
    "v134/artwork/one_in_a_quarter_billion.webp",
    "v134/artwork/one_pulse.webp",
    "v134/artwork/paradox_love.webp",
    "v134/artwork/password_expired.webp",
    "v134/artwork/password_expired_live.webp",
    "v134/artwork/pathetique.webp",
    "v134/artwork/peaks_of_gold.webp",
    "v134/artwork/play_it_again.webp",
    "v134/artwork/private_lake.webp",
    "v134/artwork/radio_trash.webp",
    "v134/artwork/regina_di_niente.webp",
    "v134/artwork/resti_qui.webp",
    "v134/artwork/ride_the_groove.webp",
    "v134/artwork/rocker_songwriter.webp",
    "v134/artwork/sailing_on_open_water.webp",
    "v134/artwork/sanctified_sinner.webp",
    "v134/artwork/sanctuary_riot.webp",
    "v134/artwork/scendi_dalla_sella.webp",
    "v134/artwork/schools_out.webp",
    "v134/artwork/set_the_spirit_free.webp",
    "v134/artwork/siblings.webp",
    "v134/artwork/skeleton_dance.webp",
    "v134/artwork/slippery_road.webp",
    "v134/artwork/social_lubricant.webp",
    "v134/artwork/soulmate.webp",
    "v134/artwork/southern_belle.webp",
    "v134/artwork/southern_heat.webp",
    "v134/artwork/southerns_eve.webp",
    "v134/artwork/spacca_il_cristallo.webp",
    "v134/artwork/spooky.webp",
    "v134/artwork/spring.webp",
    "v134/artwork/storm_of_the_abyss.webp",
    "v134/artwork/summers_farewell.webp",
    "v134/artwork/surfing_girl_wild_and_free.webp",
    "v134/artwork/tabby_gonzalez.webp",
    "v134/artwork/the_city_i_long_for.webp",
    "v134/artwork/the_dive.webp",
    "v134/artwork/the_hard_way.webp",
    "v134/artwork/the_hook.webp",
    "v134/artwork/the_quiet_kind.webp",
    "v134/artwork/the_rhythm_of_the_fox.webp",
    "v134/artwork/the_rhythm_of_you.webp",
    "v134/artwork/the_sharpened_bow.webp",
    "v134/artwork/the_sirens_anchor.webp",
    "v134/artwork/the_soft_return.webp",
    "v134/artwork/the_steel_winged_swan.webp",
    "v134/artwork/this_is_fine.webp",
    "v134/artwork/tide_on_stone.webp",
    "v134/artwork/toccata.webp",
    "v134/artwork/trick_or_treat.webp",
    "v134/artwork/un_docile_arco.webp",
    "v134/artwork/un_tuffo_al_cuore.webp",
    "v134/artwork/uncaged.webp",
    "v134/artwork/upon_a_winding_trail.webp",
    "v134/artwork/venezia.webp",
    "v134/artwork/verona.webp",
    "v134/artwork/vetro_di_genova.webp",
    "v134/artwork/weekend.webp",
    "v134/artwork/whiteout.webp",
    "v134/artwork/winterstorm.webp",
    "v134/css/style 20260815_1400.css",
    "v134/css/style copy.css",
    "v134/css/style.css",
    "v134/datenschutz.html",
    "v134/essays/embeddings.html",
    "v134/essays/essay1.html",
    "v134/essays/gemini-code-1782138112807.html",
    "v134/essays/ssm.html",
    "v134/essays/transformers.html",
    "v134/images/Guitar-in-Dolomites.webp",
    "v134/images/Hero.webp",
    "v134/images/Hero_1.webp",
    "v134/images/Hero_1_Square.webp",
    "v134/images/Hero_2.webp",
    "v134/images/Julia-skiing-Dolomites.webp",
    "v134/images/Stage_1.webp",
    "v134/images/Stage_2.webp",
    "v134/images/Stage_3.webp",
    "v134/images/Stage_4.webp",
    "v134/images/Stage_5.webp",
    "v134/images/Stage_6.webp",
    "v134/images/Stage_7.webp",
    "v134/images/Stage_8.webp",
    "v134/images/embeddings_music.webp",
    "v134/images/embeddings_words.webp",
    "v134/images/icons/app_icon_192 copy.png",
    "v134/images/icons/app_icon_192.png",
    "v134/images/icons/app_icon_512 copy.png",
    "v134/images/icons/app_icon_512.png",
    "v134/images/julia_embeddings.webp",
    "v134/images/julia_ssm_equations.webp",
    "v134/images/password_expired_live.webp",
    "v134/images/podcasts.webp",
    "v134/images/southern_belle.webp",
    "v134/images/ssm_diagram.webp",
    "v134/images/surfing_girl_wild_and_free.webp",
    "v134/images/under_the_hood.webp",
    "v134/images/witch.webp",
    "v134/impressum.html",
    "v134/index.html",
    "v134/js/DiaryService.js",
    "v134/js/Director.js",
    "v134/js/Main 20260319_1300.js",
    "v134/js/Main.js",
    "v134/js/PickerDrum.js",
    "v134/js/Placeholder.js",
    "v134/js/Player.js",
    "v134/js/SongCollection.js",
    "v134/js/SongService.js",
    "v134/js/VersionCore.js",
    "v134/js/ffmpeg.min.js",
    "v134/js/lucide.js",
    "v134/js/tailwindcss.js",
    "v134/js/tex-mml-chtml.js",
    "v134/legal_notice.html",
    "v134/manifest.json",
    "v134/placeholder/footer.html",
    "v134/placeholder/header.html",
    "v134/privacy_policy.html"
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
