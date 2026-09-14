const STATIC_CACHE = 'julia-site-v126';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v126/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v126/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v126/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v126/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v126/artwork/a_slow_blossoming_rose.webp",
    "v126/artwork/alejandro.webp",
    "v126/artwork/alta_tensione.webp",
    "v126/artwork/antitoxic.webp",
    "v126/artwork/autumns_whisper.webp",
    "v126/artwork/avalanche.webp",
    "v126/artwork/betrayal.webp",
    "v126/artwork/big_dreams_shine.webp",
    "v126/artwork/big_dreams_shine_live.webp",
    "v126/artwork/bite_of_the_night.webp",
    "v126/artwork/black_cat_bones.webp",
    "v126/artwork/boring.webp",
    "v126/artwork/brainrot.webp",
    "v126/artwork/brooklyn.webp",
    "v126/artwork/buckn_the_bain.webp",
    "v126/artwork/buio_perfetto.webp",
    "v126/artwork/cheerleader.webp",
    "v126/artwork/coffee_in_amsterdam.webp",
    "v126/artwork/cool_fire.webp",
    "v126/artwork/dancing_on_your_grave.webp",
    "v126/artwork/date_disaster.webp",
    "v126/artwork/deep_blue.webp",
    "v126/artwork/deepdive_1.webp",
    "v126/artwork/deepdive_2.webp",
    "v126/artwork/default.webp",
    "v126/artwork/delta_blues.webp",
    "v126/artwork/digital_ghost.webp",
    "v126/artwork/disco_flashback.webp",
    "v126/artwork/disco_flashback_2.webp",
    "v126/artwork/disposable.webp",
    "v126/artwork/distortion.webp",
    "v126/artwork/drunk_not_dumb.webp",
    "v126/artwork/dynamite.webp",
    "v126/artwork/electric_hearts.webp",
    "v126/artwork/embers_and_sparks.webp",
    "v126/artwork/fences_down.webp",
    "v126/artwork/ferro_e_canna.webp",
    "v126/artwork/fine_apnea.webp",
    "v126/artwork/fine_apnea_2.webp",
    "v126/artwork/fire_in_my_veins.webp",
    "v126/artwork/first_steps_to_stardom.webp",
    "v126/artwork/fog_of_fear.webp",
    "v126/artwork/forever.webp",
    "v126/artwork/fornello_rosso.webp",
    "v126/artwork/four_chords_later.webp",
    "v126/artwork/friday_night.webp",
    "v126/artwork/from_first_steps_to_stardom.webp",
    "v126/artwork/frost_and_friction.webp",
    "v126/artwork/frozen_heart.webp",
    "v126/artwork/fuoco_nel_legno.webp",
    "v126/artwork/fuori_dai_piedi.webp",
    "v126/artwork/fuori_dai_piedi_live.webp",
    "v126/artwork/fuori_dai_piedi_live_v6.webp",
    "v126/artwork/garage_band.webp",
    "v126/artwork/ghost_in_the_garden.webp",
    "v126/artwork/god_save_the_king.webp",
    "v126/artwork/golden_days.webp",
    "v126/artwork/good_enough.webp",
    "v126/artwork/happy_birthday_in_heaven.webp",
    "v126/artwork/haunted_haven.webp",
    "v126/artwork/heart_of_fire_and_ice.webp",
    "v126/artwork/her_first_truck.webp",
    "v126/artwork/hes_still_here.webp",
    "v126/artwork/hes_still_here_2026.webp",
    "v126/artwork/home_now.webp",
    "v126/artwork/howling_wolves.webp",
    "v126/artwork/hurricane.webp",
    "v126/artwork/hypocrites.webp",
    "v126/artwork/i_hate_you.webp",
    "v126/artwork/i_love_school.webp",
    "v126/artwork/i_scream.webp",
    "v126/artwork/i_tuoi_piccoli_disordini.webp",
    "v126/artwork/insatiable.webp",
    "v126/artwork/insult_the_ones_you_love.webp",
    "v126/artwork/introverted_girl.webp",
    "v126/artwork/jet_set.webp",
    "v126/artwork/julia_and_friends.webp",
    "v126/artwork/just_a_vibe.webp",
    "v126/artwork/just_wants_to_be_loved.webp",
    "v126/artwork/la_sposa_del_tuono.webp",
    "v126/artwork/last_exit.webp",
    "v126/artwork/left_lane_legend.webp",
    "v126/artwork/little_butterflies.webp",
    "v126/artwork/luce_rossa.webp",
    "v126/artwork/luck_for_granted.webp",
    "v126/artwork/maybe_they_knew.webp",
    "v126/artwork/mind_the_gap.webp",
    "v126/artwork/my_foundation.webp",
    "v126/artwork/my_sweet_little_star.webp",
    "v126/artwork/need_for_speed.webp",
    "v126/artwork/nice_girl.webp",
    "v126/artwork/nuora_selvaggia.webp",
    "v126/artwork/one_in_a_quarter_billion.webp",
    "v126/artwork/one_pulse.webp",
    "v126/artwork/paradox_love.webp",
    "v126/artwork/password_expired.webp",
    "v126/artwork/password_expired_live.webp",
    "v126/artwork/pathetique.webp",
    "v126/artwork/peaks_of_gold.webp",
    "v126/artwork/play_it_again.webp",
    "v126/artwork/private_lake.webp",
    "v126/artwork/radio_trash.webp",
    "v126/artwork/regina_di_niente.webp",
    "v126/artwork/resti_qui.webp",
    "v126/artwork/ride_the_groove.webp",
    "v126/artwork/rocker_songwriter.webp",
    "v126/artwork/sailing_on_open_water.webp",
    "v126/artwork/sanctified_sinner.webp",
    "v126/artwork/sanctuary_riot.webp",
    "v126/artwork/schools_out.webp",
    "v126/artwork/set_the_spirit_free.webp",
    "v126/artwork/siblings.webp",
    "v126/artwork/skeleton_dance.webp",
    "v126/artwork/slippery_road.webp",
    "v126/artwork/social_lubricant.webp",
    "v126/artwork/soulmate.webp",
    "v126/artwork/southern_belle.webp",
    "v126/artwork/southern_heat.webp",
    "v126/artwork/southerns_eve.webp",
    "v126/artwork/spooky.webp",
    "v126/artwork/spring.webp",
    "v126/artwork/storm_of_the_abyss.webp",
    "v126/artwork/summers_farewell.webp",
    "v126/artwork/surfing_girl_wild_and_free.webp",
    "v126/artwork/tabby_gonzalez.webp",
    "v126/artwork/the_city_i_long_for.webp",
    "v126/artwork/the_dive.webp",
    "v126/artwork/the_hard_way.webp",
    "v126/artwork/the_hook.webp",
    "v126/artwork/the_quiet_kind.webp",
    "v126/artwork/the_rhythm_of_the_fox.webp",
    "v126/artwork/the_rhythm_of_you.webp",
    "v126/artwork/the_sharpened_bow.webp",
    "v126/artwork/the_sirens_anchor.webp",
    "v126/artwork/the_soft_return.webp",
    "v126/artwork/the_steel_winged_swan.webp",
    "v126/artwork/this_is_fine.webp",
    "v126/artwork/tide_on_stone.webp",
    "v126/artwork/toccata.webp",
    "v126/artwork/trick_or_treat.webp",
    "v126/artwork/uncaged.webp",
    "v126/artwork/upon_a_winding_trail.webp",
    "v126/artwork/venezia.webp",
    "v126/artwork/verona.webp",
    "v126/artwork/vetro_di_genova.webp",
    "v126/artwork/weekend.webp",
    "v126/artwork/whiteout.webp",
    "v126/artwork/winterstorm.webp",
    "v126/css/style 20260815_1400.css",
    "v126/css/style copy.css",
    "v126/css/style.css",
    "v126/datenschutz.html",
    "v126/essays/embeddings.html",
    "v126/essays/essay1.html",
    "v126/essays/gemini-code-1782138112807.html",
    "v126/essays/ssm.html",
    "v126/essays/transformers.html",
    "v126/images/Guitar-in-Dolomites.webp",
    "v126/images/Hero.webp",
    "v126/images/Hero_1.webp",
    "v126/images/Hero_1_Square.webp",
    "v126/images/Hero_2.webp",
    "v126/images/Julia-skiing-Dolomites.webp",
    "v126/images/Stage_1.webp",
    "v126/images/Stage_2.webp",
    "v126/images/Stage_3.webp",
    "v126/images/Stage_4.webp",
    "v126/images/Stage_5.webp",
    "v126/images/Stage_6.webp",
    "v126/images/Stage_7.webp",
    "v126/images/Stage_8.webp",
    "v126/images/embeddings_music.webp",
    "v126/images/embeddings_words.webp",
    "v126/images/icons/app_icon_192 copy.png",
    "v126/images/icons/app_icon_192.png",
    "v126/images/icons/app_icon_512 copy.png",
    "v126/images/icons/app_icon_512.png",
    "v126/images/julia_embeddings.webp",
    "v126/images/julia_ssm_equations.webp",
    "v126/images/password_expired_live.webp",
    "v126/images/podcasts.webp",
    "v126/images/southern_belle.webp",
    "v126/images/ssm_diagram.webp",
    "v126/images/surfing_girl_wild_and_free.webp",
    "v126/images/under_the_hood.webp",
    "v126/images/witch.webp",
    "v126/impressum.html",
    "v126/index.html",
    "v126/js/DiaryService.js",
    "v126/js/Director.js",
    "v126/js/Main 20260319_1300.js",
    "v126/js/Main.js",
    "v126/js/PickerDrum.js",
    "v126/js/Placeholder.js",
    "v126/js/Player.js",
    "v126/js/SongCollection.js",
    "v126/js/SongService.js",
    "v126/js/VersionCore.js",
    "v126/js/ffmpeg.min.js",
    "v126/js/lucide.js",
    "v126/js/tailwindcss.js",
    "v126/js/tex-mml-chtml.js",
    "v126/legal_notice.html",
    "v126/manifest.json",
    "v126/placeholder/footer.html",
    "v126/placeholder/header.html",
    "v126/privacy_policy.html"
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
