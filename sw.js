const STATIC_CACHE = 'julia-site-v129';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v129/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v129/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v129/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v129/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v129/artwork/a_slow_blossoming_rose.webp",
    "v129/artwork/alejandro.webp",
    "v129/artwork/alta_tensione.webp",
    "v129/artwork/antitoxic.webp",
    "v129/artwork/autumns_whisper.webp",
    "v129/artwork/avalanche.webp",
    "v129/artwork/betrayal.webp",
    "v129/artwork/big_dreams_shine.webp",
    "v129/artwork/big_dreams_shine_live.webp",
    "v129/artwork/bite_of_the_night.webp",
    "v129/artwork/black_cat_bones.webp",
    "v129/artwork/boring.webp",
    "v129/artwork/brainrot.webp",
    "v129/artwork/brooklyn.webp",
    "v129/artwork/buckn_the_bain.webp",
    "v129/artwork/buio_perfetto.webp",
    "v129/artwork/cheerleader.webp",
    "v129/artwork/coffee_in_amsterdam.webp",
    "v129/artwork/cool_fire.webp",
    "v129/artwork/dancing_on_your_grave.webp",
    "v129/artwork/date_disaster.webp",
    "v129/artwork/deep_blue.webp",
    "v129/artwork/deepdive_1.webp",
    "v129/artwork/deepdive_2.webp",
    "v129/artwork/default.webp",
    "v129/artwork/delta_blues.webp",
    "v129/artwork/digital_ghost.webp",
    "v129/artwork/disco_flashback.webp",
    "v129/artwork/disco_flashback_2.webp",
    "v129/artwork/disposable.webp",
    "v129/artwork/distortion.webp",
    "v129/artwork/drunk_not_dumb.webp",
    "v129/artwork/dynamite.webp",
    "v129/artwork/electric_hearts.webp",
    "v129/artwork/embers_and_sparks.webp",
    "v129/artwork/fences_down.webp",
    "v129/artwork/ferro_e_canna.webp",
    "v129/artwork/fine_apnea.webp",
    "v129/artwork/fine_apnea_2.webp",
    "v129/artwork/fire_in_my_veins.webp",
    "v129/artwork/first_steps_to_stardom.webp",
    "v129/artwork/fog_of_fear.webp",
    "v129/artwork/forever.webp",
    "v129/artwork/fornello_rosso.webp",
    "v129/artwork/four_chords_later.webp",
    "v129/artwork/friday_night.webp",
    "v129/artwork/from_first_steps_to_stardom.webp",
    "v129/artwork/frost_and_friction.webp",
    "v129/artwork/frozen_heart.webp",
    "v129/artwork/fuoco_nel_legno.webp",
    "v129/artwork/fuori_dai_piedi.webp",
    "v129/artwork/fuori_dai_piedi_live.webp",
    "v129/artwork/fuori_dai_piedi_live_v6.webp",
    "v129/artwork/garage_band.webp",
    "v129/artwork/ghost_in_the_garden.webp",
    "v129/artwork/god_save_the_king.webp",
    "v129/artwork/golden_days.webp",
    "v129/artwork/good_enough.webp",
    "v129/artwork/happy_birthday_in_heaven.webp",
    "v129/artwork/haunted_haven.webp",
    "v129/artwork/heart_of_fire_and_ice.webp",
    "v129/artwork/her_first_truck.webp",
    "v129/artwork/hes_still_here.webp",
    "v129/artwork/hes_still_here_2026.webp",
    "v129/artwork/home_now.webp",
    "v129/artwork/howling_wolves.webp",
    "v129/artwork/hurricane.webp",
    "v129/artwork/hypocrites.webp",
    "v129/artwork/i_hate_you.webp",
    "v129/artwork/i_love_school.webp",
    "v129/artwork/i_scream.webp",
    "v129/artwork/i_tuoi_piccoli_disordini.webp",
    "v129/artwork/insatiable.webp",
    "v129/artwork/insult_the_ones_you_love.webp",
    "v129/artwork/introverted_girl.webp",
    "v129/artwork/jet_set.webp",
    "v129/artwork/julia_and_friends.webp",
    "v129/artwork/just_a_vibe.webp",
    "v129/artwork/just_wants_to_be_loved.webp",
    "v129/artwork/l_ultimo_adesso.webp",
    "v129/artwork/la_sposa_del_tuono.webp",
    "v129/artwork/last_exit.webp",
    "v129/artwork/left_lane_legend.webp",
    "v129/artwork/little_butterflies.webp",
    "v129/artwork/luce_rossa.webp",
    "v129/artwork/luck_for_granted.webp",
    "v129/artwork/maybe_they_knew.webp",
    "v129/artwork/mind_the_gap.webp",
    "v129/artwork/my_foundation.webp",
    "v129/artwork/my_sweet_little_star.webp",
    "v129/artwork/need_for_speed.webp",
    "v129/artwork/nessun_dorma.webp",
    "v129/artwork/nice_girl.webp",
    "v129/artwork/nuora_selvaggia.webp",
    "v129/artwork/one_in_a_quarter_billion.webp",
    "v129/artwork/one_pulse.webp",
    "v129/artwork/paradox_love.webp",
    "v129/artwork/password_expired.webp",
    "v129/artwork/password_expired_live.webp",
    "v129/artwork/pathetique.webp",
    "v129/artwork/peaks_of_gold.webp",
    "v129/artwork/play_it_again.webp",
    "v129/artwork/private_lake.webp",
    "v129/artwork/radio_trash.webp",
    "v129/artwork/regina_di_niente.webp",
    "v129/artwork/resti_qui.webp",
    "v129/artwork/ride_the_groove.webp",
    "v129/artwork/rocker_songwriter.webp",
    "v129/artwork/sailing_on_open_water.webp",
    "v129/artwork/sanctified_sinner.webp",
    "v129/artwork/sanctuary_riot.webp",
    "v129/artwork/scendi_dalla_sella.webp",
    "v129/artwork/schools_out.webp",
    "v129/artwork/set_the_spirit_free.webp",
    "v129/artwork/siblings.webp",
    "v129/artwork/skeleton_dance.webp",
    "v129/artwork/slippery_road.webp",
    "v129/artwork/social_lubricant.webp",
    "v129/artwork/soulmate.webp",
    "v129/artwork/southern_belle.webp",
    "v129/artwork/southern_heat.webp",
    "v129/artwork/southerns_eve.webp",
    "v129/artwork/spooky.webp",
    "v129/artwork/spring.webp",
    "v129/artwork/storm_of_the_abyss.webp",
    "v129/artwork/summers_farewell.webp",
    "v129/artwork/surfing_girl_wild_and_free.webp",
    "v129/artwork/tabby_gonzalez.webp",
    "v129/artwork/the_city_i_long_for.webp",
    "v129/artwork/the_dive.webp",
    "v129/artwork/the_hard_way.webp",
    "v129/artwork/the_hook.webp",
    "v129/artwork/the_quiet_kind.webp",
    "v129/artwork/the_rhythm_of_the_fox.webp",
    "v129/artwork/the_rhythm_of_you.webp",
    "v129/artwork/the_sharpened_bow.webp",
    "v129/artwork/the_sirens_anchor.webp",
    "v129/artwork/the_soft_return.webp",
    "v129/artwork/the_steel_winged_swan.webp",
    "v129/artwork/this_is_fine.webp",
    "v129/artwork/tide_on_stone.webp",
    "v129/artwork/toccata.webp",
    "v129/artwork/trick_or_treat.webp",
    "v129/artwork/uncaged.webp",
    "v129/artwork/upon_a_winding_trail.webp",
    "v129/artwork/venezia.webp",
    "v129/artwork/verona.webp",
    "v129/artwork/vetro_di_genova.webp",
    "v129/artwork/weekend.webp",
    "v129/artwork/whiteout.webp",
    "v129/artwork/winterstorm.webp",
    "v129/css/style 20260815_1400.css",
    "v129/css/style copy.css",
    "v129/css/style.css",
    "v129/datenschutz.html",
    "v129/essays/embeddings.html",
    "v129/essays/essay1.html",
    "v129/essays/gemini-code-1782138112807.html",
    "v129/essays/ssm.html",
    "v129/essays/transformers.html",
    "v129/images/Guitar-in-Dolomites.webp",
    "v129/images/Hero.webp",
    "v129/images/Hero_1.webp",
    "v129/images/Hero_1_Square.webp",
    "v129/images/Hero_2.webp",
    "v129/images/Julia-skiing-Dolomites.webp",
    "v129/images/Stage_1.webp",
    "v129/images/Stage_2.webp",
    "v129/images/Stage_3.webp",
    "v129/images/Stage_4.webp",
    "v129/images/Stage_5.webp",
    "v129/images/Stage_6.webp",
    "v129/images/Stage_7.webp",
    "v129/images/Stage_8.webp",
    "v129/images/embeddings_music.webp",
    "v129/images/embeddings_words.webp",
    "v129/images/icons/app_icon_192 copy.png",
    "v129/images/icons/app_icon_192.png",
    "v129/images/icons/app_icon_512 copy.png",
    "v129/images/icons/app_icon_512.png",
    "v129/images/julia_embeddings.webp",
    "v129/images/julia_ssm_equations.webp",
    "v129/images/password_expired_live.webp",
    "v129/images/podcasts.webp",
    "v129/images/southern_belle.webp",
    "v129/images/ssm_diagram.webp",
    "v129/images/surfing_girl_wild_and_free.webp",
    "v129/images/under_the_hood.webp",
    "v129/images/witch.webp",
    "v129/impressum.html",
    "v129/index.html",
    "v129/js/DiaryService.js",
    "v129/js/Director.js",
    "v129/js/Main 20260319_1300.js",
    "v129/js/Main.js",
    "v129/js/PickerDrum.js",
    "v129/js/Placeholder.js",
    "v129/js/Player.js",
    "v129/js/SongCollection.js",
    "v129/js/SongService.js",
    "v129/js/VersionCore.js",
    "v129/js/ffmpeg.min.js",
    "v129/js/lucide.js",
    "v129/js/tailwindcss.js",
    "v129/js/tex-mml-chtml.js",
    "v129/legal_notice.html",
    "v129/manifest.json",
    "v129/placeholder/footer.html",
    "v129/placeholder/header.html",
    "v129/privacy_policy.html"
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
