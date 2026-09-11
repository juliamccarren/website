const STATIC_CACHE = 'julia-site-v125';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v125/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v125/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v125/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v125/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v125/artwork/a_slow_blossoming_rose.webp",
    "v125/artwork/alejandro.webp",
    "v125/artwork/alta_tensione.webp",
    "v125/artwork/antitoxic.webp",
    "v125/artwork/autumns_whisper.webp",
    "v125/artwork/avalanche.webp",
    "v125/artwork/betrayal.webp",
    "v125/artwork/big_dreams_shine.webp",
    "v125/artwork/big_dreams_shine_live.webp",
    "v125/artwork/bite_of_the_night.webp",
    "v125/artwork/black_cat_bones.webp",
    "v125/artwork/boring.webp",
    "v125/artwork/brainrot.webp",
    "v125/artwork/brooklyn.webp",
    "v125/artwork/buckn_the_bain.webp",
    "v125/artwork/buio_perfetto.webp",
    "v125/artwork/cheerleader.webp",
    "v125/artwork/coffee_in_amsterdam.webp",
    "v125/artwork/cool_fire.webp",
    "v125/artwork/dancing_on_your_grave.webp",
    "v125/artwork/date_disaster.webp",
    "v125/artwork/deep_blue.webp",
    "v125/artwork/deepdive_1.webp",
    "v125/artwork/deepdive_2.webp",
    "v125/artwork/default.webp",
    "v125/artwork/delta_blues.webp",
    "v125/artwork/digital_ghost.webp",
    "v125/artwork/disco_flashback.webp",
    "v125/artwork/disco_flashback_2.webp",
    "v125/artwork/disposable.webp",
    "v125/artwork/distortion.webp",
    "v125/artwork/drunk_not_dumb.webp",
    "v125/artwork/dynamite.webp",
    "v125/artwork/electric_hearts.webp",
    "v125/artwork/embers_and_sparks.webp",
    "v125/artwork/fences_down.webp",
    "v125/artwork/ferro_e_canna.webp",
    "v125/artwork/fine_apnea.webp",
    "v125/artwork/fine_apnea_2.webp",
    "v125/artwork/fire_in_my_veins.webp",
    "v125/artwork/first_steps_to_stardom.webp",
    "v125/artwork/fog_of_fear.webp",
    "v125/artwork/forever.webp",
    "v125/artwork/fornello_rosso.webp",
    "v125/artwork/four_chords_later.webp",
    "v125/artwork/friday_night.webp",
    "v125/artwork/from_first_steps_to_stardom.webp",
    "v125/artwork/frost_and_friction.webp",
    "v125/artwork/frozen_heart.webp",
    "v125/artwork/fuoco_nel_legno.webp",
    "v125/artwork/fuori_dai_piedi.webp",
    "v125/artwork/fuori_dai_piedi_live.webp",
    "v125/artwork/fuori_dai_piedi_live_v6.webp",
    "v125/artwork/garage_band.webp",
    "v125/artwork/ghost_in_the_garden.webp",
    "v125/artwork/god_save_the_king.webp",
    "v125/artwork/golden_days.webp",
    "v125/artwork/good_enough.webp",
    "v125/artwork/happy_birthday_in_heaven.webp",
    "v125/artwork/haunted_haven.webp",
    "v125/artwork/heart_of_fire_and_ice.webp",
    "v125/artwork/her_first_truck.webp",
    "v125/artwork/hes_still_here.webp",
    "v125/artwork/hes_still_here_2026.webp",
    "v125/artwork/home_now.webp",
    "v125/artwork/howling_wolves.webp",
    "v125/artwork/hurricane.webp",
    "v125/artwork/hypocrites.webp",
    "v125/artwork/i_hate_you.webp",
    "v125/artwork/i_love_school.webp",
    "v125/artwork/i_scream.webp",
    "v125/artwork/i_tuoi_piccoli_disordini.webp",
    "v125/artwork/insatiable.webp",
    "v125/artwork/insult_the_ones_you_love.webp",
    "v125/artwork/introverted_girl.webp",
    "v125/artwork/jet_set.webp",
    "v125/artwork/julia_and_friends.webp",
    "v125/artwork/just_a_vibe.webp",
    "v125/artwork/just_wants_to_be_loved.webp",
    "v125/artwork/last_exit.webp",
    "v125/artwork/left_lane_legend.webp",
    "v125/artwork/little_butterflies.webp",
    "v125/artwork/luce_rossa.webp",
    "v125/artwork/luck_for_granted.webp",
    "v125/artwork/maybe_they_knew.webp",
    "v125/artwork/mind_the_gap.webp",
    "v125/artwork/my_foundation.webp",
    "v125/artwork/my_sweet_little_star.webp",
    "v125/artwork/need_for_speed.webp",
    "v125/artwork/nice_girl.webp",
    "v125/artwork/nuora_selvaggia.webp",
    "v125/artwork/one_in_a_quarter_billion.webp",
    "v125/artwork/one_pulse.webp",
    "v125/artwork/paradox_love.webp",
    "v125/artwork/password_expired.webp",
    "v125/artwork/password_expired_live.webp",
    "v125/artwork/pathetique.webp",
    "v125/artwork/peaks_of_gold.webp",
    "v125/artwork/play_it_again.webp",
    "v125/artwork/private_lake.webp",
    "v125/artwork/radio_trash.webp",
    "v125/artwork/regina_di_niente.webp",
    "v125/artwork/resti_qui.webp",
    "v125/artwork/ride_the_groove.webp",
    "v125/artwork/rocker_songwriter.webp",
    "v125/artwork/sailing_on_open_water.webp",
    "v125/artwork/sanctified_sinner.webp",
    "v125/artwork/sanctuary_riot.webp",
    "v125/artwork/schools_out.webp",
    "v125/artwork/set_the_spirit_free.webp",
    "v125/artwork/siblings.webp",
    "v125/artwork/skeleton_dance.webp",
    "v125/artwork/slippery_road.webp",
    "v125/artwork/social_lubricant.webp",
    "v125/artwork/soulmate.webp",
    "v125/artwork/southern_belle.webp",
    "v125/artwork/southern_heat.webp",
    "v125/artwork/southerns_eve.webp",
    "v125/artwork/spooky.webp",
    "v125/artwork/spring.webp",
    "v125/artwork/storm_of_the_abyss.webp",
    "v125/artwork/summers_farewell.webp",
    "v125/artwork/surfing_girl_wild_and_free.webp",
    "v125/artwork/tabby_gonzalez.webp",
    "v125/artwork/the_city_i_long_for.webp",
    "v125/artwork/the_dive.webp",
    "v125/artwork/the_hard_way.webp",
    "v125/artwork/the_hook.webp",
    "v125/artwork/the_quiet_kind.webp",
    "v125/artwork/the_rhythm_of_the_fox.webp",
    "v125/artwork/the_rhythm_of_you.webp",
    "v125/artwork/the_sharpened_bow.webp",
    "v125/artwork/the_sirens_anchor.webp",
    "v125/artwork/the_soft_return.webp",
    "v125/artwork/the_steel_winged_swan.webp",
    "v125/artwork/this_is_fine.webp",
    "v125/artwork/tide_on_stone.webp",
    "v125/artwork/toccata.webp",
    "v125/artwork/trick_or_treat.webp",
    "v125/artwork/uncaged.webp",
    "v125/artwork/upon_a_winding_trail.webp",
    "v125/artwork/venezia.webp",
    "v125/artwork/verona.webp",
    "v125/artwork/vetro_di_genova.webp",
    "v125/artwork/weekend.webp",
    "v125/artwork/whiteout.webp",
    "v125/artwork/winterstorm.webp",
    "v125/css/style 20260815_1400.css",
    "v125/css/style copy.css",
    "v125/css/style.css",
    "v125/datenschutz.html",
    "v125/essays/embeddings.html",
    "v125/essays/essay1.html",
    "v125/essays/gemini-code-1782138112807.html",
    "v125/essays/ssm.html",
    "v125/essays/transformers.html",
    "v125/images/Guitar-in-Dolomites.webp",
    "v125/images/Hero.webp",
    "v125/images/Hero_1.webp",
    "v125/images/Hero_1_Square.webp",
    "v125/images/Hero_2.webp",
    "v125/images/Julia-skiing-Dolomites.webp",
    "v125/images/Stage_1.webp",
    "v125/images/Stage_2.webp",
    "v125/images/Stage_3.webp",
    "v125/images/Stage_4.webp",
    "v125/images/Stage_5.webp",
    "v125/images/Stage_6.webp",
    "v125/images/Stage_7.webp",
    "v125/images/Stage_8.webp",
    "v125/images/embeddings_music.webp",
    "v125/images/embeddings_words.webp",
    "v125/images/icons/app_icon_192 copy.png",
    "v125/images/icons/app_icon_192.png",
    "v125/images/icons/app_icon_512 copy.png",
    "v125/images/icons/app_icon_512.png",
    "v125/images/julia_embeddings.webp",
    "v125/images/julia_ssm_equations.webp",
    "v125/images/password_expired_live.webp",
    "v125/images/podcasts.webp",
    "v125/images/southern_belle.webp",
    "v125/images/ssm_diagram.webp",
    "v125/images/surfing_girl_wild_and_free.webp",
    "v125/images/under_the_hood.webp",
    "v125/images/witch.webp",
    "v125/impressum.html",
    "v125/index.html",
    "v125/js/DiaryService.js",
    "v125/js/Director.js",
    "v125/js/Main 20260319_1300.js",
    "v125/js/Main.js",
    "v125/js/PickerDrum.js",
    "v125/js/Placeholder.js",
    "v125/js/Player.js",
    "v125/js/SongCollection.js",
    "v125/js/SongService.js",
    "v125/js/VersionCore.js",
    "v125/js/ffmpeg.min.js",
    "v125/js/lucide.js",
    "v125/js/tailwindcss.js",
    "v125/js/tex-mml-chtml.js",
    "v125/legal_notice.html",
    "v125/manifest.json",
    "v125/placeholder/footer.html",
    "v125/placeholder/header.html",
    "v125/privacy_policy.html"
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
