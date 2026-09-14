const STATIC_CACHE = 'julia-site-v127';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v127/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v127/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v127/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v127/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v127/artwork/a_slow_blossoming_rose.webp",
    "v127/artwork/alejandro.webp",
    "v127/artwork/alta_tensione.webp",
    "v127/artwork/antitoxic.webp",
    "v127/artwork/autumns_whisper.webp",
    "v127/artwork/avalanche.webp",
    "v127/artwork/betrayal.webp",
    "v127/artwork/big_dreams_shine.webp",
    "v127/artwork/big_dreams_shine_live.webp",
    "v127/artwork/bite_of_the_night.webp",
    "v127/artwork/black_cat_bones.webp",
    "v127/artwork/boring.webp",
    "v127/artwork/brainrot.webp",
    "v127/artwork/brooklyn.webp",
    "v127/artwork/buckn_the_bain.webp",
    "v127/artwork/buio_perfetto.webp",
    "v127/artwork/cheerleader.webp",
    "v127/artwork/coffee_in_amsterdam.webp",
    "v127/artwork/cool_fire.webp",
    "v127/artwork/dancing_on_your_grave.webp",
    "v127/artwork/date_disaster.webp",
    "v127/artwork/deep_blue.webp",
    "v127/artwork/deepdive_1.webp",
    "v127/artwork/deepdive_2.webp",
    "v127/artwork/default.webp",
    "v127/artwork/delta_blues.webp",
    "v127/artwork/digital_ghost.webp",
    "v127/artwork/disco_flashback.webp",
    "v127/artwork/disco_flashback_2.webp",
    "v127/artwork/disposable.webp",
    "v127/artwork/distortion.webp",
    "v127/artwork/drunk_not_dumb.webp",
    "v127/artwork/dynamite.webp",
    "v127/artwork/electric_hearts.webp",
    "v127/artwork/embers_and_sparks.webp",
    "v127/artwork/fences_down.webp",
    "v127/artwork/ferro_e_canna.webp",
    "v127/artwork/fine_apnea.webp",
    "v127/artwork/fine_apnea_2.webp",
    "v127/artwork/fire_in_my_veins.webp",
    "v127/artwork/first_steps_to_stardom.webp",
    "v127/artwork/fog_of_fear.webp",
    "v127/artwork/forever.webp",
    "v127/artwork/fornello_rosso.webp",
    "v127/artwork/four_chords_later.webp",
    "v127/artwork/friday_night.webp",
    "v127/artwork/from_first_steps_to_stardom.webp",
    "v127/artwork/frost_and_friction.webp",
    "v127/artwork/frozen_heart.webp",
    "v127/artwork/fuoco_nel_legno.webp",
    "v127/artwork/fuori_dai_piedi.webp",
    "v127/artwork/fuori_dai_piedi_live.webp",
    "v127/artwork/fuori_dai_piedi_live_v6.webp",
    "v127/artwork/garage_band.webp",
    "v127/artwork/ghost_in_the_garden.webp",
    "v127/artwork/god_save_the_king.webp",
    "v127/artwork/golden_days.webp",
    "v127/artwork/good_enough.webp",
    "v127/artwork/happy_birthday_in_heaven.webp",
    "v127/artwork/haunted_haven.webp",
    "v127/artwork/heart_of_fire_and_ice.webp",
    "v127/artwork/her_first_truck.webp",
    "v127/artwork/hes_still_here.webp",
    "v127/artwork/hes_still_here_2026.webp",
    "v127/artwork/home_now.webp",
    "v127/artwork/howling_wolves.webp",
    "v127/artwork/hurricane.webp",
    "v127/artwork/hypocrites.webp",
    "v127/artwork/i_hate_you.webp",
    "v127/artwork/i_love_school.webp",
    "v127/artwork/i_scream.webp",
    "v127/artwork/i_tuoi_piccoli_disordini.webp",
    "v127/artwork/insatiable.webp",
    "v127/artwork/insult_the_ones_you_love.webp",
    "v127/artwork/introverted_girl.webp",
    "v127/artwork/jet_set.webp",
    "v127/artwork/julia_and_friends.webp",
    "v127/artwork/just_a_vibe.webp",
    "v127/artwork/just_wants_to_be_loved.webp",
    "v127/artwork/la_sposa_del_tuono.webp",
    "v127/artwork/last_exit.webp",
    "v127/artwork/left_lane_legend.webp",
    "v127/artwork/little_butterflies.webp",
    "v127/artwork/luce_rossa.webp",
    "v127/artwork/luck_for_granted.webp",
    "v127/artwork/maybe_they_knew.webp",
    "v127/artwork/mind_the_gap.webp",
    "v127/artwork/my_foundation.webp",
    "v127/artwork/my_sweet_little_star.webp",
    "v127/artwork/need_for_speed.webp",
    "v127/artwork/nice_girl.webp",
    "v127/artwork/nuora_selvaggia.webp",
    "v127/artwork/one_in_a_quarter_billion.webp",
    "v127/artwork/one_pulse.webp",
    "v127/artwork/paradox_love.webp",
    "v127/artwork/password_expired.webp",
    "v127/artwork/password_expired_live.webp",
    "v127/artwork/pathetique.webp",
    "v127/artwork/peaks_of_gold.webp",
    "v127/artwork/play_it_again.webp",
    "v127/artwork/private_lake.webp",
    "v127/artwork/radio_trash.webp",
    "v127/artwork/regina_di_niente.webp",
    "v127/artwork/resti_qui.webp",
    "v127/artwork/ride_the_groove.webp",
    "v127/artwork/rocker_songwriter.webp",
    "v127/artwork/sailing_on_open_water.webp",
    "v127/artwork/sanctified_sinner.webp",
    "v127/artwork/sanctuary_riot.webp",
    "v127/artwork/scendi_dalla_sella.webp",
    "v127/artwork/schools_out.webp",
    "v127/artwork/set_the_spirit_free.webp",
    "v127/artwork/siblings.webp",
    "v127/artwork/skeleton_dance.webp",
    "v127/artwork/slippery_road.webp",
    "v127/artwork/social_lubricant.webp",
    "v127/artwork/soulmate.webp",
    "v127/artwork/southern_belle.webp",
    "v127/artwork/southern_heat.webp",
    "v127/artwork/southerns_eve.webp",
    "v127/artwork/spooky.webp",
    "v127/artwork/spring.webp",
    "v127/artwork/storm_of_the_abyss.webp",
    "v127/artwork/summers_farewell.webp",
    "v127/artwork/surfing_girl_wild_and_free.webp",
    "v127/artwork/tabby_gonzalez.webp",
    "v127/artwork/the_city_i_long_for.webp",
    "v127/artwork/the_dive.webp",
    "v127/artwork/the_hard_way.webp",
    "v127/artwork/the_hook.webp",
    "v127/artwork/the_quiet_kind.webp",
    "v127/artwork/the_rhythm_of_the_fox.webp",
    "v127/artwork/the_rhythm_of_you.webp",
    "v127/artwork/the_sharpened_bow.webp",
    "v127/artwork/the_sirens_anchor.webp",
    "v127/artwork/the_soft_return.webp",
    "v127/artwork/the_steel_winged_swan.webp",
    "v127/artwork/this_is_fine.webp",
    "v127/artwork/tide_on_stone.webp",
    "v127/artwork/toccata.webp",
    "v127/artwork/trick_or_treat.webp",
    "v127/artwork/uncaged.webp",
    "v127/artwork/upon_a_winding_trail.webp",
    "v127/artwork/venezia.webp",
    "v127/artwork/verona.webp",
    "v127/artwork/vetro_di_genova.webp",
    "v127/artwork/weekend.webp",
    "v127/artwork/whiteout.webp",
    "v127/artwork/winterstorm.webp",
    "v127/css/style 20260815_1400.css",
    "v127/css/style copy.css",
    "v127/css/style.css",
    "v127/datenschutz.html",
    "v127/essays/embeddings.html",
    "v127/essays/essay1.html",
    "v127/essays/gemini-code-1782138112807.html",
    "v127/essays/ssm.html",
    "v127/essays/transformers.html",
    "v127/images/Guitar-in-Dolomites.webp",
    "v127/images/Hero.webp",
    "v127/images/Hero_1.webp",
    "v127/images/Hero_1_Square.webp",
    "v127/images/Hero_2.webp",
    "v127/images/Julia-skiing-Dolomites.webp",
    "v127/images/Stage_1.webp",
    "v127/images/Stage_2.webp",
    "v127/images/Stage_3.webp",
    "v127/images/Stage_4.webp",
    "v127/images/Stage_5.webp",
    "v127/images/Stage_6.webp",
    "v127/images/Stage_7.webp",
    "v127/images/Stage_8.webp",
    "v127/images/embeddings_music.webp",
    "v127/images/embeddings_words.webp",
    "v127/images/icons/app_icon_192 copy.png",
    "v127/images/icons/app_icon_192.png",
    "v127/images/icons/app_icon_512 copy.png",
    "v127/images/icons/app_icon_512.png",
    "v127/images/julia_embeddings.webp",
    "v127/images/julia_ssm_equations.webp",
    "v127/images/password_expired_live.webp",
    "v127/images/podcasts.webp",
    "v127/images/southern_belle.webp",
    "v127/images/ssm_diagram.webp",
    "v127/images/surfing_girl_wild_and_free.webp",
    "v127/images/under_the_hood.webp",
    "v127/images/witch.webp",
    "v127/impressum.html",
    "v127/index.html",
    "v127/js/DiaryService.js",
    "v127/js/Director.js",
    "v127/js/Main 20260319_1300.js",
    "v127/js/Main.js",
    "v127/js/PickerDrum.js",
    "v127/js/Placeholder.js",
    "v127/js/Player.js",
    "v127/js/SongCollection.js",
    "v127/js/SongService.js",
    "v127/js/VersionCore.js",
    "v127/js/ffmpeg.min.js",
    "v127/js/lucide.js",
    "v127/js/tailwindcss.js",
    "v127/js/tex-mml-chtml.js",
    "v127/legal_notice.html",
    "v127/manifest.json",
    "v127/placeholder/footer.html",
    "v127/placeholder/header.html",
    "v127/privacy_policy.html"
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
