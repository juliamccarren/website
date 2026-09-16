const STATIC_CACHE = 'julia-site-v130';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v130/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v130/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v130/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v130/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v130/artwork/a_slow_blossoming_rose.webp",
    "v130/artwork/alejandro.webp",
    "v130/artwork/alta_tensione.webp",
    "v130/artwork/antitoxic.webp",
    "v130/artwork/autumns_whisper.webp",
    "v130/artwork/avalanche.webp",
    "v130/artwork/betrayal.webp",
    "v130/artwork/big_dreams_shine.webp",
    "v130/artwork/big_dreams_shine_live.webp",
    "v130/artwork/bite_of_the_night.webp",
    "v130/artwork/black_cat_bones.webp",
    "v130/artwork/boring.webp",
    "v130/artwork/brainrot.webp",
    "v130/artwork/brooklyn.webp",
    "v130/artwork/buckn_the_bain.webp",
    "v130/artwork/buio_perfetto.webp",
    "v130/artwork/cheerleader.webp",
    "v130/artwork/coffee_in_amsterdam.webp",
    "v130/artwork/cool_fire.webp",
    "v130/artwork/dancing_on_your_grave.webp",
    "v130/artwork/date_disaster.webp",
    "v130/artwork/deep_blue.webp",
    "v130/artwork/deepdive_1.webp",
    "v130/artwork/deepdive_2.webp",
    "v130/artwork/default.webp",
    "v130/artwork/delta_blues.webp",
    "v130/artwork/digital_ghost.webp",
    "v130/artwork/disco_flashback.webp",
    "v130/artwork/disco_flashback_2.webp",
    "v130/artwork/disposable.webp",
    "v130/artwork/distortion.webp",
    "v130/artwork/drunk_not_dumb.webp",
    "v130/artwork/dynamite.webp",
    "v130/artwork/electric_hearts.webp",
    "v130/artwork/embers_and_sparks.webp",
    "v130/artwork/fences_down.webp",
    "v130/artwork/ferro_e_canna.webp",
    "v130/artwork/fine_apnea.webp",
    "v130/artwork/fine_apnea_2.webp",
    "v130/artwork/fire_in_my_veins.webp",
    "v130/artwork/first_steps_to_stardom.webp",
    "v130/artwork/fog_of_fear.webp",
    "v130/artwork/forever.webp",
    "v130/artwork/fornello_rosso.webp",
    "v130/artwork/four_chords_later.webp",
    "v130/artwork/friday_night.webp",
    "v130/artwork/from_first_steps_to_stardom.webp",
    "v130/artwork/frost_and_friction.webp",
    "v130/artwork/frozen_heart.webp",
    "v130/artwork/fuoco_nel_legno.webp",
    "v130/artwork/fuori_dai_piedi.webp",
    "v130/artwork/fuori_dai_piedi_live.webp",
    "v130/artwork/fuori_dai_piedi_live_v6.webp",
    "v130/artwork/garage_band.webp",
    "v130/artwork/ghost_in_the_garden.webp",
    "v130/artwork/god_save_the_king.webp",
    "v130/artwork/golden_days.webp",
    "v130/artwork/good_enough.webp",
    "v130/artwork/happy_birthday_in_heaven.webp",
    "v130/artwork/haunted_haven.webp",
    "v130/artwork/heart_of_fire_and_ice.webp",
    "v130/artwork/her_first_truck.webp",
    "v130/artwork/hes_still_here.webp",
    "v130/artwork/hes_still_here_2026.webp",
    "v130/artwork/home_now.webp",
    "v130/artwork/howling_wolves.webp",
    "v130/artwork/hurricane.webp",
    "v130/artwork/hypocrites.webp",
    "v130/artwork/i_hate_you.webp",
    "v130/artwork/i_love_school.webp",
    "v130/artwork/i_scream.webp",
    "v130/artwork/i_tuoi_piccoli_disordini.webp",
    "v130/artwork/insatiable.webp",
    "v130/artwork/insult_the_ones_you_love.webp",
    "v130/artwork/introverted_girl.webp",
    "v130/artwork/jet_set.webp",
    "v130/artwork/julia_and_friends.webp",
    "v130/artwork/just_a_vibe.webp",
    "v130/artwork/just_wants_to_be_loved.webp",
    "v130/artwork/l_ultimo_adesso.webp",
    "v130/artwork/la_sposa_del_tuono.webp",
    "v130/artwork/la_sposa_del_tuono_live.webp",
    "v130/artwork/last_exit.webp",
    "v130/artwork/left_lane_legend.webp",
    "v130/artwork/little_butterflies.webp",
    "v130/artwork/luce_rossa.webp",
    "v130/artwork/luck_for_granted.webp",
    "v130/artwork/maybe_they_knew.webp",
    "v130/artwork/mind_the_gap.webp",
    "v130/artwork/my_foundation.webp",
    "v130/artwork/my_sweet_little_star.webp",
    "v130/artwork/need_for_speed.webp",
    "v130/artwork/nessun_dorma.webp",
    "v130/artwork/nice_girl.webp",
    "v130/artwork/nuora_selvaggia.webp",
    "v130/artwork/one_in_a_quarter_billion.webp",
    "v130/artwork/one_pulse.webp",
    "v130/artwork/paradox_love.webp",
    "v130/artwork/password_expired.webp",
    "v130/artwork/password_expired_live.webp",
    "v130/artwork/pathetique.webp",
    "v130/artwork/peaks_of_gold.webp",
    "v130/artwork/play_it_again.webp",
    "v130/artwork/private_lake.webp",
    "v130/artwork/radio_trash.webp",
    "v130/artwork/regina_di_niente.webp",
    "v130/artwork/resti_qui.webp",
    "v130/artwork/ride_the_groove.webp",
    "v130/artwork/rocker_songwriter.webp",
    "v130/artwork/sailing_on_open_water.webp",
    "v130/artwork/sanctified_sinner.webp",
    "v130/artwork/sanctuary_riot.webp",
    "v130/artwork/scendi_dalla_sella.webp",
    "v130/artwork/schools_out.webp",
    "v130/artwork/set_the_spirit_free.webp",
    "v130/artwork/siblings.webp",
    "v130/artwork/skeleton_dance.webp",
    "v130/artwork/slippery_road.webp",
    "v130/artwork/social_lubricant.webp",
    "v130/artwork/soulmate.webp",
    "v130/artwork/southern_belle.webp",
    "v130/artwork/southern_heat.webp",
    "v130/artwork/southerns_eve.webp",
    "v130/artwork/spooky.webp",
    "v130/artwork/spring.webp",
    "v130/artwork/storm_of_the_abyss.webp",
    "v130/artwork/summers_farewell.webp",
    "v130/artwork/surfing_girl_wild_and_free.webp",
    "v130/artwork/tabby_gonzalez.webp",
    "v130/artwork/the_city_i_long_for.webp",
    "v130/artwork/the_dive.webp",
    "v130/artwork/the_hard_way.webp",
    "v130/artwork/the_hook.webp",
    "v130/artwork/the_quiet_kind.webp",
    "v130/artwork/the_rhythm_of_the_fox.webp",
    "v130/artwork/the_rhythm_of_you.webp",
    "v130/artwork/the_sharpened_bow.webp",
    "v130/artwork/the_sirens_anchor.webp",
    "v130/artwork/the_soft_return.webp",
    "v130/artwork/the_steel_winged_swan.webp",
    "v130/artwork/this_is_fine.webp",
    "v130/artwork/tide_on_stone.webp",
    "v130/artwork/toccata.webp",
    "v130/artwork/trick_or_treat.webp",
    "v130/artwork/uncaged.webp",
    "v130/artwork/upon_a_winding_trail.webp",
    "v130/artwork/venezia.webp",
    "v130/artwork/verona.webp",
    "v130/artwork/vetro_di_genova.webp",
    "v130/artwork/weekend.webp",
    "v130/artwork/whiteout.webp",
    "v130/artwork/winterstorm.webp",
    "v130/css/style 20260815_1400.css",
    "v130/css/style copy.css",
    "v130/css/style.css",
    "v130/datenschutz.html",
    "v130/essays/embeddings.html",
    "v130/essays/essay1.html",
    "v130/essays/gemini-code-1782138112807.html",
    "v130/essays/ssm.html",
    "v130/essays/transformers.html",
    "v130/images/Guitar-in-Dolomites.webp",
    "v130/images/Hero.webp",
    "v130/images/Hero_1.webp",
    "v130/images/Hero_1_Square.webp",
    "v130/images/Hero_2.webp",
    "v130/images/Julia-skiing-Dolomites.webp",
    "v130/images/Stage_1.webp",
    "v130/images/Stage_2.webp",
    "v130/images/Stage_3.webp",
    "v130/images/Stage_4.webp",
    "v130/images/Stage_5.webp",
    "v130/images/Stage_6.webp",
    "v130/images/Stage_7.webp",
    "v130/images/Stage_8.webp",
    "v130/images/embeddings_music.webp",
    "v130/images/embeddings_words.webp",
    "v130/images/icons/app_icon_192 copy.png",
    "v130/images/icons/app_icon_192.png",
    "v130/images/icons/app_icon_512 copy.png",
    "v130/images/icons/app_icon_512.png",
    "v130/images/julia_embeddings.webp",
    "v130/images/julia_ssm_equations.webp",
    "v130/images/password_expired_live.webp",
    "v130/images/podcasts.webp",
    "v130/images/southern_belle.webp",
    "v130/images/ssm_diagram.webp",
    "v130/images/surfing_girl_wild_and_free.webp",
    "v130/images/under_the_hood.webp",
    "v130/images/witch.webp",
    "v130/impressum.html",
    "v130/index.html",
    "v130/js/DiaryService.js",
    "v130/js/Director.js",
    "v130/js/Main 20260319_1300.js",
    "v130/js/Main.js",
    "v130/js/PickerDrum.js",
    "v130/js/Placeholder.js",
    "v130/js/Player.js",
    "v130/js/SongCollection.js",
    "v130/js/SongService.js",
    "v130/js/VersionCore.js",
    "v130/js/ffmpeg.min.js",
    "v130/js/lucide.js",
    "v130/js/tailwindcss.js",
    "v130/js/tex-mml-chtml.js",
    "v130/legal_notice.html",
    "v130/manifest.json",
    "v130/placeholder/footer.html",
    "v130/placeholder/header.html",
    "v130/privacy_policy.html"
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
