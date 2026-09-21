const STATIC_CACHE = 'julia-site-v133';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v133/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v133/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v133/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v133/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v133/artwork/a_cinque_metri_dal_cielo.webp",
    "v133/artwork/a_slow_blossoming_rose.webp",
    "v133/artwork/alejandro.webp",
    "v133/artwork/alta_tensione.webp",
    "v133/artwork/antitoxic.webp",
    "v133/artwork/autumns_whisper.webp",
    "v133/artwork/avalanche.webp",
    "v133/artwork/betrayal.webp",
    "v133/artwork/big_dreams_shine.webp",
    "v133/artwork/big_dreams_shine_live.webp",
    "v133/artwork/bite_of_the_night.webp",
    "v133/artwork/black_cat_bones.webp",
    "v133/artwork/boring.webp",
    "v133/artwork/brainrot.webp",
    "v133/artwork/brooklyn.webp",
    "v133/artwork/buckn_the_bain.webp",
    "v133/artwork/buio_perfetto.webp",
    "v133/artwork/cheerleader.webp",
    "v133/artwork/coffee_in_amsterdam.webp",
    "v133/artwork/cool_fire.webp",
    "v133/artwork/dancing_on_your_grave.webp",
    "v133/artwork/date_disaster.webp",
    "v133/artwork/deep_blue.webp",
    "v133/artwork/deepdive_1.webp",
    "v133/artwork/deepdive_2.webp",
    "v133/artwork/default.webp",
    "v133/artwork/delta_blues.webp",
    "v133/artwork/digital_ghost.webp",
    "v133/artwork/disco_flashback.webp",
    "v133/artwork/disco_flashback_2.webp",
    "v133/artwork/disposable.webp",
    "v133/artwork/distortion.webp",
    "v133/artwork/drunk_not_dumb.webp",
    "v133/artwork/dynamite.webp",
    "v133/artwork/electric_hearts.webp",
    "v133/artwork/embers_and_sparks.webp",
    "v133/artwork/fences_down.webp",
    "v133/artwork/ferro_e_canna.webp",
    "v133/artwork/fine_apnea.webp",
    "v133/artwork/fine_apnea_2.webp",
    "v133/artwork/fire_in_my_veins.webp",
    "v133/artwork/first_steps_to_stardom.webp",
    "v133/artwork/fog_of_fear.webp",
    "v133/artwork/forever.webp",
    "v133/artwork/fornello_rosso.webp",
    "v133/artwork/four_chords_later.webp",
    "v133/artwork/friday_night.webp",
    "v133/artwork/from_first_steps_to_stardom.webp",
    "v133/artwork/frost_and_friction.webp",
    "v133/artwork/frozen_heart.webp",
    "v133/artwork/fuoco_nel_legno.webp",
    "v133/artwork/fuori_dai_piedi.webp",
    "v133/artwork/fuori_dai_piedi_live.webp",
    "v133/artwork/fuori_dai_piedi_live_v6.webp",
    "v133/artwork/garage_band.webp",
    "v133/artwork/ghost_in_the_garden.webp",
    "v133/artwork/god_save_the_king.webp",
    "v133/artwork/golden_days.webp",
    "v133/artwork/good_enough.webp",
    "v133/artwork/happy_birthday_in_heaven.webp",
    "v133/artwork/haunted_haven.webp",
    "v133/artwork/heart_of_fire_and_ice.webp",
    "v133/artwork/her_first_truck.webp",
    "v133/artwork/hes_still_here.webp",
    "v133/artwork/hes_still_here_2026.webp",
    "v133/artwork/home_now.webp",
    "v133/artwork/howling_wolves.webp",
    "v133/artwork/hurricane.webp",
    "v133/artwork/hypocrites.webp",
    "v133/artwork/i_hate_you.webp",
    "v133/artwork/i_love_school.webp",
    "v133/artwork/i_scream.webp",
    "v133/artwork/i_tuoi_piccoli_disordini.webp",
    "v133/artwork/insatiable.webp",
    "v133/artwork/insult_the_ones_you_love.webp",
    "v133/artwork/introverted_girl.webp",
    "v133/artwork/jet_set.webp",
    "v133/artwork/julia_and_friends.webp",
    "v133/artwork/just_a_vibe.webp",
    "v133/artwork/just_wants_to_be_loved.webp",
    "v133/artwork/l_ultimo_adesso.webp",
    "v133/artwork/la_sposa_del_tuono.webp",
    "v133/artwork/la_sposa_del_tuono_live.webp",
    "v133/artwork/last_exit.webp",
    "v133/artwork/left_lane_legend.webp",
    "v133/artwork/little_butterflies.webp",
    "v133/artwork/luce_rossa.webp",
    "v133/artwork/luck_for_granted.webp",
    "v133/artwork/maybe_they_knew.webp",
    "v133/artwork/mind_the_gap.webp",
    "v133/artwork/my_foundation.webp",
    "v133/artwork/my_sweet_little_star.webp",
    "v133/artwork/need_for_speed.webp",
    "v133/artwork/nessun_dorma.webp",
    "v133/artwork/nice_girl.webp",
    "v133/artwork/nuora_selvaggia.webp",
    "v133/artwork/one_in_a_quarter_billion.webp",
    "v133/artwork/one_pulse.webp",
    "v133/artwork/paradox_love.webp",
    "v133/artwork/password_expired.webp",
    "v133/artwork/password_expired_live.webp",
    "v133/artwork/pathetique.webp",
    "v133/artwork/peaks_of_gold.webp",
    "v133/artwork/play_it_again.webp",
    "v133/artwork/private_lake.webp",
    "v133/artwork/radio_trash.webp",
    "v133/artwork/regina_di_niente.webp",
    "v133/artwork/resti_qui.webp",
    "v133/artwork/ride_the_groove.webp",
    "v133/artwork/rocker_songwriter.webp",
    "v133/artwork/sailing_on_open_water.webp",
    "v133/artwork/sanctified_sinner.webp",
    "v133/artwork/sanctuary_riot.webp",
    "v133/artwork/scendi_dalla_sella.webp",
    "v133/artwork/schools_out.webp",
    "v133/artwork/set_the_spirit_free.webp",
    "v133/artwork/siblings.webp",
    "v133/artwork/skeleton_dance.webp",
    "v133/artwork/slippery_road.webp",
    "v133/artwork/social_lubricant.webp",
    "v133/artwork/soulmate.webp",
    "v133/artwork/southern_belle.webp",
    "v133/artwork/southern_heat.webp",
    "v133/artwork/southerns_eve.webp",
    "v133/artwork/spooky.webp",
    "v133/artwork/spring.webp",
    "v133/artwork/storm_of_the_abyss.webp",
    "v133/artwork/summers_farewell.webp",
    "v133/artwork/surfing_girl_wild_and_free.webp",
    "v133/artwork/tabby_gonzalez.webp",
    "v133/artwork/the_city_i_long_for.webp",
    "v133/artwork/the_dive.webp",
    "v133/artwork/the_hard_way.webp",
    "v133/artwork/the_hook.webp",
    "v133/artwork/the_quiet_kind.webp",
    "v133/artwork/the_rhythm_of_the_fox.webp",
    "v133/artwork/the_rhythm_of_you.webp",
    "v133/artwork/the_sharpened_bow.webp",
    "v133/artwork/the_sirens_anchor.webp",
    "v133/artwork/the_soft_return.webp",
    "v133/artwork/the_steel_winged_swan.webp",
    "v133/artwork/this_is_fine.webp",
    "v133/artwork/tide_on_stone.webp",
    "v133/artwork/toccata.webp",
    "v133/artwork/trick_or_treat.webp",
    "v133/artwork/un_docile_arco.webp",
    "v133/artwork/un_tuffo_al_cuore.webp",
    "v133/artwork/uncaged.webp",
    "v133/artwork/upon_a_winding_trail.webp",
    "v133/artwork/venezia.webp",
    "v133/artwork/verona.webp",
    "v133/artwork/vetro_di_genova.webp",
    "v133/artwork/weekend.webp",
    "v133/artwork/whiteout.webp",
    "v133/artwork/winterstorm.webp",
    "v133/css/style 20260815_1400.css",
    "v133/css/style copy.css",
    "v133/css/style.css",
    "v133/datenschutz.html",
    "v133/essays/embeddings.html",
    "v133/essays/essay1.html",
    "v133/essays/gemini-code-1782138112807.html",
    "v133/essays/ssm.html",
    "v133/essays/transformers.html",
    "v133/images/Guitar-in-Dolomites.webp",
    "v133/images/Hero.webp",
    "v133/images/Hero_1.webp",
    "v133/images/Hero_1_Square.webp",
    "v133/images/Hero_2.webp",
    "v133/images/Julia-skiing-Dolomites.webp",
    "v133/images/Stage_1.webp",
    "v133/images/Stage_2.webp",
    "v133/images/Stage_3.webp",
    "v133/images/Stage_4.webp",
    "v133/images/Stage_5.webp",
    "v133/images/Stage_6.webp",
    "v133/images/Stage_7.webp",
    "v133/images/Stage_8.webp",
    "v133/images/embeddings_music.webp",
    "v133/images/embeddings_words.webp",
    "v133/images/icons/app_icon_192 copy.png",
    "v133/images/icons/app_icon_192.png",
    "v133/images/icons/app_icon_512 copy.png",
    "v133/images/icons/app_icon_512.png",
    "v133/images/julia_embeddings.webp",
    "v133/images/julia_ssm_equations.webp",
    "v133/images/password_expired_live.webp",
    "v133/images/podcasts.webp",
    "v133/images/southern_belle.webp",
    "v133/images/ssm_diagram.webp",
    "v133/images/surfing_girl_wild_and_free.webp",
    "v133/images/under_the_hood.webp",
    "v133/images/witch.webp",
    "v133/impressum.html",
    "v133/index.html",
    "v133/js/DiaryService.js",
    "v133/js/Director.js",
    "v133/js/Main 20260319_1300.js",
    "v133/js/Main.js",
    "v133/js/PickerDrum.js",
    "v133/js/Placeholder.js",
    "v133/js/Player.js",
    "v133/js/SongCollection.js",
    "v133/js/SongService.js",
    "v133/js/VersionCore.js",
    "v133/js/ffmpeg.min.js",
    "v133/js/lucide.js",
    "v133/js/tailwindcss.js",
    "v133/js/tex-mml-chtml.js",
    "v133/legal_notice.html",
    "v133/manifest.json",
    "v133/placeholder/footer.html",
    "v133/placeholder/header.html",
    "v133/privacy_policy.html"
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
