const STATIC_CACHE = 'julia-site-v132';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v132/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v132/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v132/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v132/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v132/artwork/a_slow_blossoming_rose.webp",
    "v132/artwork/alejandro.webp",
    "v132/artwork/alta_tensione.webp",
    "v132/artwork/antitoxic.webp",
    "v132/artwork/autumns_whisper.webp",
    "v132/artwork/avalanche.webp",
    "v132/artwork/betrayal.webp",
    "v132/artwork/big_dreams_shine.webp",
    "v132/artwork/big_dreams_shine_live.webp",
    "v132/artwork/bite_of_the_night.webp",
    "v132/artwork/black_cat_bones.webp",
    "v132/artwork/boring.webp",
    "v132/artwork/brainrot.webp",
    "v132/artwork/brooklyn.webp",
    "v132/artwork/buckn_the_bain.webp",
    "v132/artwork/buio_perfetto.webp",
    "v132/artwork/cheerleader.webp",
    "v132/artwork/coffee_in_amsterdam.webp",
    "v132/artwork/cool_fire.webp",
    "v132/artwork/dancing_on_your_grave.webp",
    "v132/artwork/date_disaster.webp",
    "v132/artwork/deep_blue.webp",
    "v132/artwork/deepdive_1.webp",
    "v132/artwork/deepdive_2.webp",
    "v132/artwork/default.webp",
    "v132/artwork/delta_blues.webp",
    "v132/artwork/digital_ghost.webp",
    "v132/artwork/disco_flashback.webp",
    "v132/artwork/disco_flashback_2.webp",
    "v132/artwork/disposable.webp",
    "v132/artwork/distortion.webp",
    "v132/artwork/drunk_not_dumb.webp",
    "v132/artwork/dynamite.webp",
    "v132/artwork/electric_hearts.webp",
    "v132/artwork/embers_and_sparks.webp",
    "v132/artwork/fences_down.webp",
    "v132/artwork/ferro_e_canna.webp",
    "v132/artwork/fine_apnea.webp",
    "v132/artwork/fine_apnea_2.webp",
    "v132/artwork/fire_in_my_veins.webp",
    "v132/artwork/first_steps_to_stardom.webp",
    "v132/artwork/fog_of_fear.webp",
    "v132/artwork/forever.webp",
    "v132/artwork/fornello_rosso.webp",
    "v132/artwork/four_chords_later.webp",
    "v132/artwork/friday_night.webp",
    "v132/artwork/from_first_steps_to_stardom.webp",
    "v132/artwork/frost_and_friction.webp",
    "v132/artwork/frozen_heart.webp",
    "v132/artwork/fuoco_nel_legno.webp",
    "v132/artwork/fuori_dai_piedi.webp",
    "v132/artwork/fuori_dai_piedi_live.webp",
    "v132/artwork/fuori_dai_piedi_live_v6.webp",
    "v132/artwork/garage_band.webp",
    "v132/artwork/ghost_in_the_garden.webp",
    "v132/artwork/god_save_the_king.webp",
    "v132/artwork/golden_days.webp",
    "v132/artwork/good_enough.webp",
    "v132/artwork/happy_birthday_in_heaven.webp",
    "v132/artwork/haunted_haven.webp",
    "v132/artwork/heart_of_fire_and_ice.webp",
    "v132/artwork/her_first_truck.webp",
    "v132/artwork/hes_still_here.webp",
    "v132/artwork/hes_still_here_2026.webp",
    "v132/artwork/home_now.webp",
    "v132/artwork/howling_wolves.webp",
    "v132/artwork/hurricane.webp",
    "v132/artwork/hypocrites.webp",
    "v132/artwork/i_hate_you.webp",
    "v132/artwork/i_love_school.webp",
    "v132/artwork/i_scream.webp",
    "v132/artwork/i_tuoi_piccoli_disordini.webp",
    "v132/artwork/insatiable.webp",
    "v132/artwork/insult_the_ones_you_love.webp",
    "v132/artwork/introverted_girl.webp",
    "v132/artwork/jet_set.webp",
    "v132/artwork/julia_and_friends.webp",
    "v132/artwork/just_a_vibe.webp",
    "v132/artwork/just_wants_to_be_loved.webp",
    "v132/artwork/l_ultimo_adesso.webp",
    "v132/artwork/la_sposa_del_tuono.webp",
    "v132/artwork/la_sposa_del_tuono_live.webp",
    "v132/artwork/last_exit.webp",
    "v132/artwork/left_lane_legend.webp",
    "v132/artwork/little_butterflies.webp",
    "v132/artwork/luce_rossa.webp",
    "v132/artwork/luck_for_granted.webp",
    "v132/artwork/maybe_they_knew.webp",
    "v132/artwork/mind_the_gap.webp",
    "v132/artwork/my_foundation.webp",
    "v132/artwork/my_sweet_little_star.webp",
    "v132/artwork/need_for_speed.webp",
    "v132/artwork/nessun_dorma.webp",
    "v132/artwork/nice_girl.webp",
    "v132/artwork/nuora_selvaggia.webp",
    "v132/artwork/one_in_a_quarter_billion.webp",
    "v132/artwork/one_pulse.webp",
    "v132/artwork/paradox_love.webp",
    "v132/artwork/password_expired.webp",
    "v132/artwork/password_expired_live.webp",
    "v132/artwork/pathetique.webp",
    "v132/artwork/peaks_of_gold.webp",
    "v132/artwork/play_it_again.webp",
    "v132/artwork/private_lake.webp",
    "v132/artwork/radio_trash.webp",
    "v132/artwork/regina_di_niente.webp",
    "v132/artwork/resti_qui.webp",
    "v132/artwork/ride_the_groove.webp",
    "v132/artwork/rocker_songwriter.webp",
    "v132/artwork/sailing_on_open_water.webp",
    "v132/artwork/sanctified_sinner.webp",
    "v132/artwork/sanctuary_riot.webp",
    "v132/artwork/scendi_dalla_sella.webp",
    "v132/artwork/schools_out.webp",
    "v132/artwork/set_the_spirit_free.webp",
    "v132/artwork/siblings.webp",
    "v132/artwork/skeleton_dance.webp",
    "v132/artwork/slippery_road.webp",
    "v132/artwork/social_lubricant.webp",
    "v132/artwork/soulmate.webp",
    "v132/artwork/southern_belle.webp",
    "v132/artwork/southern_heat.webp",
    "v132/artwork/southerns_eve.webp",
    "v132/artwork/spooky.webp",
    "v132/artwork/spring.webp",
    "v132/artwork/storm_of_the_abyss.webp",
    "v132/artwork/summers_farewell.webp",
    "v132/artwork/surfing_girl_wild_and_free.webp",
    "v132/artwork/tabby_gonzalez.webp",
    "v132/artwork/the_city_i_long_for.webp",
    "v132/artwork/the_dive.webp",
    "v132/artwork/the_hard_way.webp",
    "v132/artwork/the_hook.webp",
    "v132/artwork/the_quiet_kind.webp",
    "v132/artwork/the_rhythm_of_the_fox.webp",
    "v132/artwork/the_rhythm_of_you.webp",
    "v132/artwork/the_sharpened_bow.webp",
    "v132/artwork/the_sirens_anchor.webp",
    "v132/artwork/the_soft_return.webp",
    "v132/artwork/the_steel_winged_swan.webp",
    "v132/artwork/this_is_fine.webp",
    "v132/artwork/tide_on_stone.webp",
    "v132/artwork/toccata.webp",
    "v132/artwork/trick_or_treat.webp",
    "v132/artwork/un_docile_arco.webp",
    "v132/artwork/un_tuffo_al_cuore.webp",
    "v132/artwork/uncaged.webp",
    "v132/artwork/upon_a_winding_trail.webp",
    "v132/artwork/venezia.webp",
    "v132/artwork/verona.webp",
    "v132/artwork/vetro_di_genova.webp",
    "v132/artwork/weekend.webp",
    "v132/artwork/whiteout.webp",
    "v132/artwork/winterstorm.webp",
    "v132/css/style 20260815_1400.css",
    "v132/css/style copy.css",
    "v132/css/style.css",
    "v132/datenschutz.html",
    "v132/essays/embeddings.html",
    "v132/essays/essay1.html",
    "v132/essays/gemini-code-1782138112807.html",
    "v132/essays/ssm.html",
    "v132/essays/transformers.html",
    "v132/images/Guitar-in-Dolomites.webp",
    "v132/images/Hero.webp",
    "v132/images/Hero_1.webp",
    "v132/images/Hero_1_Square.webp",
    "v132/images/Hero_2.webp",
    "v132/images/Julia-skiing-Dolomites.webp",
    "v132/images/Stage_1.webp",
    "v132/images/Stage_2.webp",
    "v132/images/Stage_3.webp",
    "v132/images/Stage_4.webp",
    "v132/images/Stage_5.webp",
    "v132/images/Stage_6.webp",
    "v132/images/Stage_7.webp",
    "v132/images/Stage_8.webp",
    "v132/images/embeddings_music.webp",
    "v132/images/embeddings_words.webp",
    "v132/images/icons/app_icon_192 copy.png",
    "v132/images/icons/app_icon_192.png",
    "v132/images/icons/app_icon_512 copy.png",
    "v132/images/icons/app_icon_512.png",
    "v132/images/julia_embeddings.webp",
    "v132/images/julia_ssm_equations.webp",
    "v132/images/password_expired_live.webp",
    "v132/images/podcasts.webp",
    "v132/images/southern_belle.webp",
    "v132/images/ssm_diagram.webp",
    "v132/images/surfing_girl_wild_and_free.webp",
    "v132/images/under_the_hood.webp",
    "v132/images/witch.webp",
    "v132/impressum.html",
    "v132/index.html",
    "v132/js/DiaryService.js",
    "v132/js/Director.js",
    "v132/js/Main 20260319_1300.js",
    "v132/js/Main.js",
    "v132/js/PickerDrum.js",
    "v132/js/Placeholder.js",
    "v132/js/Player.js",
    "v132/js/SongCollection.js",
    "v132/js/SongService.js",
    "v132/js/VersionCore.js",
    "v132/js/ffmpeg.min.js",
    "v132/js/lucide.js",
    "v132/js/tailwindcss.js",
    "v132/js/tex-mml-chtml.js",
    "v132/legal_notice.html",
    "v132/manifest.json",
    "v132/placeholder/footer.html",
    "v132/placeholder/header.html",
    "v132/privacy_policy.html"
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
