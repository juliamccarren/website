const STATIC_CACHE = 'julia-site-v131';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v131/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v131/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v131/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v131/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v131/artwork/a_slow_blossoming_rose.webp",
    "v131/artwork/alejandro.webp",
    "v131/artwork/alta_tensione.webp",
    "v131/artwork/antitoxic.webp",
    "v131/artwork/autumns_whisper.webp",
    "v131/artwork/avalanche.webp",
    "v131/artwork/betrayal.webp",
    "v131/artwork/big_dreams_shine.webp",
    "v131/artwork/big_dreams_shine_live.webp",
    "v131/artwork/bite_of_the_night.webp",
    "v131/artwork/black_cat_bones.webp",
    "v131/artwork/boring.webp",
    "v131/artwork/brainrot.webp",
    "v131/artwork/brooklyn.webp",
    "v131/artwork/buckn_the_bain.webp",
    "v131/artwork/buio_perfetto.webp",
    "v131/artwork/cheerleader.webp",
    "v131/artwork/coffee_in_amsterdam.webp",
    "v131/artwork/cool_fire.webp",
    "v131/artwork/dancing_on_your_grave.webp",
    "v131/artwork/date_disaster.webp",
    "v131/artwork/deep_blue.webp",
    "v131/artwork/deepdive_1.webp",
    "v131/artwork/deepdive_2.webp",
    "v131/artwork/default.webp",
    "v131/artwork/delta_blues.webp",
    "v131/artwork/digital_ghost.webp",
    "v131/artwork/disco_flashback.webp",
    "v131/artwork/disco_flashback_2.webp",
    "v131/artwork/disposable.webp",
    "v131/artwork/distortion.webp",
    "v131/artwork/drunk_not_dumb.webp",
    "v131/artwork/dynamite.webp",
    "v131/artwork/electric_hearts.webp",
    "v131/artwork/embers_and_sparks.webp",
    "v131/artwork/fences_down.webp",
    "v131/artwork/ferro_e_canna.webp",
    "v131/artwork/fine_apnea.webp",
    "v131/artwork/fine_apnea_2.webp",
    "v131/artwork/fire_in_my_veins.webp",
    "v131/artwork/first_steps_to_stardom.webp",
    "v131/artwork/fog_of_fear.webp",
    "v131/artwork/forever.webp",
    "v131/artwork/fornello_rosso.webp",
    "v131/artwork/four_chords_later.webp",
    "v131/artwork/friday_night.webp",
    "v131/artwork/from_first_steps_to_stardom.webp",
    "v131/artwork/frost_and_friction.webp",
    "v131/artwork/frozen_heart.webp",
    "v131/artwork/fuoco_nel_legno.webp",
    "v131/artwork/fuori_dai_piedi.webp",
    "v131/artwork/fuori_dai_piedi_live.webp",
    "v131/artwork/fuori_dai_piedi_live_v6.webp",
    "v131/artwork/garage_band.webp",
    "v131/artwork/ghost_in_the_garden.webp",
    "v131/artwork/god_save_the_king.webp",
    "v131/artwork/golden_days.webp",
    "v131/artwork/good_enough.webp",
    "v131/artwork/happy_birthday_in_heaven.webp",
    "v131/artwork/haunted_haven.webp",
    "v131/artwork/heart_of_fire_and_ice.webp",
    "v131/artwork/her_first_truck.webp",
    "v131/artwork/hes_still_here.webp",
    "v131/artwork/hes_still_here_2026.webp",
    "v131/artwork/home_now.webp",
    "v131/artwork/howling_wolves.webp",
    "v131/artwork/hurricane.webp",
    "v131/artwork/hypocrites.webp",
    "v131/artwork/i_hate_you.webp",
    "v131/artwork/i_love_school.webp",
    "v131/artwork/i_scream.webp",
    "v131/artwork/i_tuoi_piccoli_disordini.webp",
    "v131/artwork/insatiable.webp",
    "v131/artwork/insult_the_ones_you_love.webp",
    "v131/artwork/introverted_girl.webp",
    "v131/artwork/jet_set.webp",
    "v131/artwork/julia_and_friends.webp",
    "v131/artwork/just_a_vibe.webp",
    "v131/artwork/just_wants_to_be_loved.webp",
    "v131/artwork/l_ultimo_adesso.webp",
    "v131/artwork/la_sposa_del_tuono.webp",
    "v131/artwork/la_sposa_del_tuono_live.webp",
    "v131/artwork/last_exit.webp",
    "v131/artwork/left_lane_legend.webp",
    "v131/artwork/little_butterflies.webp",
    "v131/artwork/luce_rossa.webp",
    "v131/artwork/luck_for_granted.webp",
    "v131/artwork/maybe_they_knew.webp",
    "v131/artwork/mind_the_gap.webp",
    "v131/artwork/my_foundation.webp",
    "v131/artwork/my_sweet_little_star.webp",
    "v131/artwork/need_for_speed.webp",
    "v131/artwork/nessun_dorma.webp",
    "v131/artwork/nice_girl.webp",
    "v131/artwork/nuora_selvaggia.webp",
    "v131/artwork/one_in_a_quarter_billion.webp",
    "v131/artwork/one_pulse.webp",
    "v131/artwork/paradox_love.webp",
    "v131/artwork/password_expired.webp",
    "v131/artwork/password_expired_live.webp",
    "v131/artwork/pathetique.webp",
    "v131/artwork/peaks_of_gold.webp",
    "v131/artwork/play_it_again.webp",
    "v131/artwork/private_lake.webp",
    "v131/artwork/radio_trash.webp",
    "v131/artwork/regina_di_niente.webp",
    "v131/artwork/resti_qui.webp",
    "v131/artwork/ride_the_groove.webp",
    "v131/artwork/rocker_songwriter.webp",
    "v131/artwork/sailing_on_open_water.webp",
    "v131/artwork/sanctified_sinner.webp",
    "v131/artwork/sanctuary_riot.webp",
    "v131/artwork/scendi_dalla_sella.webp",
    "v131/artwork/schools_out.webp",
    "v131/artwork/set_the_spirit_free.webp",
    "v131/artwork/siblings.webp",
    "v131/artwork/skeleton_dance.webp",
    "v131/artwork/slippery_road.webp",
    "v131/artwork/social_lubricant.webp",
    "v131/artwork/soulmate.webp",
    "v131/artwork/southern_belle.webp",
    "v131/artwork/southern_heat.webp",
    "v131/artwork/southerns_eve.webp",
    "v131/artwork/spooky.webp",
    "v131/artwork/spring.webp",
    "v131/artwork/storm_of_the_abyss.webp",
    "v131/artwork/summers_farewell.webp",
    "v131/artwork/surfing_girl_wild_and_free.webp",
    "v131/artwork/tabby_gonzalez.webp",
    "v131/artwork/the_city_i_long_for.webp",
    "v131/artwork/the_dive.webp",
    "v131/artwork/the_hard_way.webp",
    "v131/artwork/the_hook.webp",
    "v131/artwork/the_quiet_kind.webp",
    "v131/artwork/the_rhythm_of_the_fox.webp",
    "v131/artwork/the_rhythm_of_you.webp",
    "v131/artwork/the_sharpened_bow.webp",
    "v131/artwork/the_sirens_anchor.webp",
    "v131/artwork/the_soft_return.webp",
    "v131/artwork/the_steel_winged_swan.webp",
    "v131/artwork/this_is_fine.webp",
    "v131/artwork/tide_on_stone.webp",
    "v131/artwork/toccata.webp",
    "v131/artwork/trick_or_treat.webp",
    "v131/artwork/un_tuffo_al_cuore.webp",
    "v131/artwork/uncaged.webp",
    "v131/artwork/upon_a_winding_trail.webp",
    "v131/artwork/venezia.webp",
    "v131/artwork/verona.webp",
    "v131/artwork/vetro_di_genova.webp",
    "v131/artwork/weekend.webp",
    "v131/artwork/whiteout.webp",
    "v131/artwork/winterstorm.webp",
    "v131/css/style 20260815_1400.css",
    "v131/css/style copy.css",
    "v131/css/style.css",
    "v131/datenschutz.html",
    "v131/essays/embeddings.html",
    "v131/essays/essay1.html",
    "v131/essays/gemini-code-1782138112807.html",
    "v131/essays/ssm.html",
    "v131/essays/transformers.html",
    "v131/images/Guitar-in-Dolomites.webp",
    "v131/images/Hero.webp",
    "v131/images/Hero_1.webp",
    "v131/images/Hero_1_Square.webp",
    "v131/images/Hero_2.webp",
    "v131/images/Julia-skiing-Dolomites.webp",
    "v131/images/Stage_1.webp",
    "v131/images/Stage_2.webp",
    "v131/images/Stage_3.webp",
    "v131/images/Stage_4.webp",
    "v131/images/Stage_5.webp",
    "v131/images/Stage_6.webp",
    "v131/images/Stage_7.webp",
    "v131/images/Stage_8.webp",
    "v131/images/embeddings_music.webp",
    "v131/images/embeddings_words.webp",
    "v131/images/icons/app_icon_192 copy.png",
    "v131/images/icons/app_icon_192.png",
    "v131/images/icons/app_icon_512 copy.png",
    "v131/images/icons/app_icon_512.png",
    "v131/images/julia_embeddings.webp",
    "v131/images/julia_ssm_equations.webp",
    "v131/images/password_expired_live.webp",
    "v131/images/podcasts.webp",
    "v131/images/southern_belle.webp",
    "v131/images/ssm_diagram.webp",
    "v131/images/surfing_girl_wild_and_free.webp",
    "v131/images/under_the_hood.webp",
    "v131/images/witch.webp",
    "v131/impressum.html",
    "v131/index.html",
    "v131/js/DiaryService.js",
    "v131/js/Director.js",
    "v131/js/Main 20260319_1300.js",
    "v131/js/Main.js",
    "v131/js/PickerDrum.js",
    "v131/js/Placeholder.js",
    "v131/js/Player.js",
    "v131/js/SongCollection.js",
    "v131/js/SongService.js",
    "v131/js/VersionCore.js",
    "v131/js/ffmpeg.min.js",
    "v131/js/lucide.js",
    "v131/js/tailwindcss.js",
    "v131/js/tex-mml-chtml.js",
    "v131/legal_notice.html",
    "v131/manifest.json",
    "v131/placeholder/footer.html",
    "v131/placeholder/header.html",
    "v131/privacy_policy.html"
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
