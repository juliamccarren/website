const STATIC_CACHE = 'julia-site-v128';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v128/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v128/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v128/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v128/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v128/artwork/a_slow_blossoming_rose.webp",
    "v128/artwork/alejandro.webp",
    "v128/artwork/alta_tensione.webp",
    "v128/artwork/antitoxic.webp",
    "v128/artwork/autumns_whisper.webp",
    "v128/artwork/avalanche.webp",
    "v128/artwork/betrayal.webp",
    "v128/artwork/big_dreams_shine.webp",
    "v128/artwork/big_dreams_shine_live.webp",
    "v128/artwork/bite_of_the_night.webp",
    "v128/artwork/black_cat_bones.webp",
    "v128/artwork/boring.webp",
    "v128/artwork/brainrot.webp",
    "v128/artwork/brooklyn.webp",
    "v128/artwork/buckn_the_bain.webp",
    "v128/artwork/buio_perfetto.webp",
    "v128/artwork/cheerleader.webp",
    "v128/artwork/coffee_in_amsterdam.webp",
    "v128/artwork/cool_fire.webp",
    "v128/artwork/dancing_on_your_grave.webp",
    "v128/artwork/date_disaster.webp",
    "v128/artwork/deep_blue.webp",
    "v128/artwork/deepdive_1.webp",
    "v128/artwork/deepdive_2.webp",
    "v128/artwork/default.webp",
    "v128/artwork/delta_blues.webp",
    "v128/artwork/digital_ghost.webp",
    "v128/artwork/disco_flashback.webp",
    "v128/artwork/disco_flashback_2.webp",
    "v128/artwork/disposable.webp",
    "v128/artwork/distortion.webp",
    "v128/artwork/drunk_not_dumb.webp",
    "v128/artwork/dynamite.webp",
    "v128/artwork/electric_hearts.webp",
    "v128/artwork/embers_and_sparks.webp",
    "v128/artwork/fences_down.webp",
    "v128/artwork/ferro_e_canna.webp",
    "v128/artwork/fine_apnea.webp",
    "v128/artwork/fine_apnea_2.webp",
    "v128/artwork/fire_in_my_veins.webp",
    "v128/artwork/first_steps_to_stardom.webp",
    "v128/artwork/fog_of_fear.webp",
    "v128/artwork/forever.webp",
    "v128/artwork/fornello_rosso.webp",
    "v128/artwork/four_chords_later.webp",
    "v128/artwork/friday_night.webp",
    "v128/artwork/from_first_steps_to_stardom.webp",
    "v128/artwork/frost_and_friction.webp",
    "v128/artwork/frozen_heart.webp",
    "v128/artwork/fuoco_nel_legno.webp",
    "v128/artwork/fuori_dai_piedi.webp",
    "v128/artwork/fuori_dai_piedi_live.webp",
    "v128/artwork/fuori_dai_piedi_live_v6.webp",
    "v128/artwork/garage_band.webp",
    "v128/artwork/ghost_in_the_garden.webp",
    "v128/artwork/god_save_the_king.webp",
    "v128/artwork/golden_days.webp",
    "v128/artwork/good_enough.webp",
    "v128/artwork/happy_birthday_in_heaven.webp",
    "v128/artwork/haunted_haven.webp",
    "v128/artwork/heart_of_fire_and_ice.webp",
    "v128/artwork/her_first_truck.webp",
    "v128/artwork/hes_still_here.webp",
    "v128/artwork/hes_still_here_2026.webp",
    "v128/artwork/home_now.webp",
    "v128/artwork/howling_wolves.webp",
    "v128/artwork/hurricane.webp",
    "v128/artwork/hypocrites.webp",
    "v128/artwork/i_hate_you.webp",
    "v128/artwork/i_love_school.webp",
    "v128/artwork/i_scream.webp",
    "v128/artwork/i_tuoi_piccoli_disordini.webp",
    "v128/artwork/insatiable.webp",
    "v128/artwork/insult_the_ones_you_love.webp",
    "v128/artwork/introverted_girl.webp",
    "v128/artwork/jet_set.webp",
    "v128/artwork/julia_and_friends.webp",
    "v128/artwork/just_a_vibe.webp",
    "v128/artwork/just_wants_to_be_loved.webp",
    "v128/artwork/la_sposa_del_tuono.webp",
    "v128/artwork/last_exit.webp",
    "v128/artwork/left_lane_legend.webp",
    "v128/artwork/little_butterflies.webp",
    "v128/artwork/luce_rossa.webp",
    "v128/artwork/luck_for_granted.webp",
    "v128/artwork/maybe_they_knew.webp",
    "v128/artwork/mind_the_gap.webp",
    "v128/artwork/my_foundation.webp",
    "v128/artwork/my_sweet_little_star.webp",
    "v128/artwork/need_for_speed.webp",
    "v128/artwork/nessun_dorma.webp",
    "v128/artwork/nice_girl.webp",
    "v128/artwork/nuora_selvaggia.webp",
    "v128/artwork/one_in_a_quarter_billion.webp",
    "v128/artwork/one_pulse.webp",
    "v128/artwork/paradox_love.webp",
    "v128/artwork/password_expired.webp",
    "v128/artwork/password_expired_live.webp",
    "v128/artwork/pathetique.webp",
    "v128/artwork/peaks_of_gold.webp",
    "v128/artwork/play_it_again.webp",
    "v128/artwork/private_lake.webp",
    "v128/artwork/radio_trash.webp",
    "v128/artwork/regina_di_niente.webp",
    "v128/artwork/resti_qui.webp",
    "v128/artwork/ride_the_groove.webp",
    "v128/artwork/rocker_songwriter.webp",
    "v128/artwork/sailing_on_open_water.webp",
    "v128/artwork/sanctified_sinner.webp",
    "v128/artwork/sanctuary_riot.webp",
    "v128/artwork/scendi_dalla_sella.webp",
    "v128/artwork/schools_out.webp",
    "v128/artwork/set_the_spirit_free.webp",
    "v128/artwork/siblings.webp",
    "v128/artwork/skeleton_dance.webp",
    "v128/artwork/slippery_road.webp",
    "v128/artwork/social_lubricant.webp",
    "v128/artwork/soulmate.webp",
    "v128/artwork/southern_belle.webp",
    "v128/artwork/southern_heat.webp",
    "v128/artwork/southerns_eve.webp",
    "v128/artwork/spooky.webp",
    "v128/artwork/spring.webp",
    "v128/artwork/storm_of_the_abyss.webp",
    "v128/artwork/summers_farewell.webp",
    "v128/artwork/surfing_girl_wild_and_free.webp",
    "v128/artwork/tabby_gonzalez.webp",
    "v128/artwork/the_city_i_long_for.webp",
    "v128/artwork/the_dive.webp",
    "v128/artwork/the_hard_way.webp",
    "v128/artwork/the_hook.webp",
    "v128/artwork/the_quiet_kind.webp",
    "v128/artwork/the_rhythm_of_the_fox.webp",
    "v128/artwork/the_rhythm_of_you.webp",
    "v128/artwork/the_sharpened_bow.webp",
    "v128/artwork/the_sirens_anchor.webp",
    "v128/artwork/the_soft_return.webp",
    "v128/artwork/the_steel_winged_swan.webp",
    "v128/artwork/this_is_fine.webp",
    "v128/artwork/tide_on_stone.webp",
    "v128/artwork/toccata.webp",
    "v128/artwork/trick_or_treat.webp",
    "v128/artwork/uncaged.webp",
    "v128/artwork/upon_a_winding_trail.webp",
    "v128/artwork/venezia.webp",
    "v128/artwork/verona.webp",
    "v128/artwork/vetro_di_genova.webp",
    "v128/artwork/weekend.webp",
    "v128/artwork/whiteout.webp",
    "v128/artwork/winterstorm.webp",
    "v128/css/style 20260815_1400.css",
    "v128/css/style copy.css",
    "v128/css/style.css",
    "v128/datenschutz.html",
    "v128/essays/embeddings.html",
    "v128/essays/essay1.html",
    "v128/essays/gemini-code-1782138112807.html",
    "v128/essays/ssm.html",
    "v128/essays/transformers.html",
    "v128/images/Guitar-in-Dolomites.webp",
    "v128/images/Hero.webp",
    "v128/images/Hero_1.webp",
    "v128/images/Hero_1_Square.webp",
    "v128/images/Hero_2.webp",
    "v128/images/Julia-skiing-Dolomites.webp",
    "v128/images/Stage_1.webp",
    "v128/images/Stage_2.webp",
    "v128/images/Stage_3.webp",
    "v128/images/Stage_4.webp",
    "v128/images/Stage_5.webp",
    "v128/images/Stage_6.webp",
    "v128/images/Stage_7.webp",
    "v128/images/Stage_8.webp",
    "v128/images/embeddings_music.webp",
    "v128/images/embeddings_words.webp",
    "v128/images/icons/app_icon_192 copy.png",
    "v128/images/icons/app_icon_192.png",
    "v128/images/icons/app_icon_512 copy.png",
    "v128/images/icons/app_icon_512.png",
    "v128/images/julia_embeddings.webp",
    "v128/images/julia_ssm_equations.webp",
    "v128/images/password_expired_live.webp",
    "v128/images/podcasts.webp",
    "v128/images/southern_belle.webp",
    "v128/images/ssm_diagram.webp",
    "v128/images/surfing_girl_wild_and_free.webp",
    "v128/images/under_the_hood.webp",
    "v128/images/witch.webp",
    "v128/impressum.html",
    "v128/index.html",
    "v128/js/DiaryService.js",
    "v128/js/Director.js",
    "v128/js/Main 20260319_1300.js",
    "v128/js/Main.js",
    "v128/js/PickerDrum.js",
    "v128/js/Placeholder.js",
    "v128/js/Player.js",
    "v128/js/SongCollection.js",
    "v128/js/SongService.js",
    "v128/js/VersionCore.js",
    "v128/js/ffmpeg.min.js",
    "v128/js/lucide.js",
    "v128/js/tailwindcss.js",
    "v128/js/tex-mml-chtml.js",
    "v128/legal_notice.html",
    "v128/manifest.json",
    "v128/placeholder/footer.html",
    "v128/placeholder/header.html",
    "v128/privacy_policy.html"
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
