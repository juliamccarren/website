const STATIC_CACHE = 'julia-site-v118';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v118/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v118/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v118/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v118/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v118/artwork/a_slow_blossoming_rose.webp",
    "v118/artwork/alejandro.webp",
    "v118/artwork/alta_tensione.webp",
    "v118/artwork/antitoxic.webp",
    "v118/artwork/autumns_whisper.webp",
    "v118/artwork/avalanche.webp",
    "v118/artwork/betrayal.webp",
    "v118/artwork/big_dreams_shine.webp",
    "v118/artwork/big_dreams_shine_live.webp",
    "v118/artwork/bite_of_the_night.webp",
    "v118/artwork/black_cat_bones.webp",
    "v118/artwork/boring.webp",
    "v118/artwork/brainrot.webp",
    "v118/artwork/brooklyn.webp",
    "v118/artwork/buckn_the_bain.webp",
    "v118/artwork/buio_perfetto.webp",
    "v118/artwork/cheerleader.webp",
    "v118/artwork/coffee_in_amsterdam.webp",
    "v118/artwork/cool_fire.webp",
    "v118/artwork/dancing_on_your_grave.webp",
    "v118/artwork/date_disaster.webp",
    "v118/artwork/deep_blue.webp",
    "v118/artwork/deepdive_1.webp",
    "v118/artwork/deepdive_2.webp",
    "v118/artwork/default.webp",
    "v118/artwork/delta_blues.webp",
    "v118/artwork/digital_ghost.webp",
    "v118/artwork/disco_flashback.webp",
    "v118/artwork/disco_flashback_2.webp",
    "v118/artwork/disposable.webp",
    "v118/artwork/distortion.webp",
    "v118/artwork/drunk_not_dumb.webp",
    "v118/artwork/dynamite.webp",
    "v118/artwork/electric_hearts.webp",
    "v118/artwork/embers_and_sparks.webp",
    "v118/artwork/fences_down.webp",
    "v118/artwork/ferro_e_canna.webp",
    "v118/artwork/fine_apnea.webp",
    "v118/artwork/fine_apnea_2.webp",
    "v118/artwork/fire_in_my_veins.webp",
    "v118/artwork/first_steps_to_stardom.webp",
    "v118/artwork/fog_of_fear.webp",
    "v118/artwork/forever.webp",
    "v118/artwork/fornello_rosso.webp",
    "v118/artwork/four_chords_later.webp",
    "v118/artwork/friday_night.webp",
    "v118/artwork/from_first_steps_to_stardom.webp",
    "v118/artwork/frost_and_friction.webp",
    "v118/artwork/frozen_heart.webp",
    "v118/artwork/fuori_dai_piedi.webp",
    "v118/artwork/fuori_dai_piedi_live.webp",
    "v118/artwork/garage_band.webp",
    "v118/artwork/ghost_in_the_garden.webp",
    "v118/artwork/god_save_the_king.webp",
    "v118/artwork/golden_days.webp",
    "v118/artwork/good_enough.webp",
    "v118/artwork/happy_birthday_in_heaven.webp",
    "v118/artwork/haunted_haven.webp",
    "v118/artwork/heart_of_fire_and_ice.webp",
    "v118/artwork/her_first_truck.webp",
    "v118/artwork/hes_still_here.webp",
    "v118/artwork/hes_still_here_2026.webp",
    "v118/artwork/home_now.webp",
    "v118/artwork/howling_wolves.webp",
    "v118/artwork/hurricane.webp",
    "v118/artwork/hypocrites.webp",
    "v118/artwork/i_hate_you.webp",
    "v118/artwork/i_love_school.webp",
    "v118/artwork/i_scream.webp",
    "v118/artwork/i_tuoi_piccoli_disordini.webp",
    "v118/artwork/insatiable.webp",
    "v118/artwork/insult_the_ones_you_love.webp",
    "v118/artwork/introverted_girl.webp",
    "v118/artwork/jet_set.webp",
    "v118/artwork/julia_and_friends.webp",
    "v118/artwork/just_a_vibe.webp",
    "v118/artwork/just_wants_to_be_loved.webp",
    "v118/artwork/last_exit.webp",
    "v118/artwork/left_lane_legend.webp",
    "v118/artwork/little_butterflies.webp",
    "v118/artwork/luce_rossa.webp",
    "v118/artwork/luck_for_granted.webp",
    "v118/artwork/maybe_they_knew.webp",
    "v118/artwork/mind_the_gap.webp",
    "v118/artwork/my_foundation.webp",
    "v118/artwork/my_sweet_little_star.webp",
    "v118/artwork/need_for_speed.webp",
    "v118/artwork/nice_girl.webp",
    "v118/artwork/one_in_a_quarter_billion.webp",
    "v118/artwork/one_pulse.webp",
    "v118/artwork/paradox_love.webp",
    "v118/artwork/password_expired.webp",
    "v118/artwork/password_expired_live.webp",
    "v118/artwork/pathetique.webp",
    "v118/artwork/peaks_of_gold.webp",
    "v118/artwork/play_it_again.webp",
    "v118/artwork/private_lake.webp",
    "v118/artwork/radio_trash.webp",
    "v118/artwork/regina_di_niente.webp",
    "v118/artwork/resti_qui.webp",
    "v118/artwork/ride_the_groove.webp",
    "v118/artwork/rocker_songwriter.webp",
    "v118/artwork/sailing_on_open_water.webp",
    "v118/artwork/sanctified_sinner.webp",
    "v118/artwork/sanctuary_riot.webp",
    "v118/artwork/schools_out.webp",
    "v118/artwork/set_the_spirit_free.webp",
    "v118/artwork/siblings.webp",
    "v118/artwork/skeleton_dance.webp",
    "v118/artwork/slippery_road.webp",
    "v118/artwork/social_lubricant.webp",
    "v118/artwork/soulmate.webp",
    "v118/artwork/southern_belle.webp",
    "v118/artwork/southern_heat.webp",
    "v118/artwork/southerns_eve.webp",
    "v118/artwork/spooky.webp",
    "v118/artwork/spring.webp",
    "v118/artwork/storm_of_the_abyss.webp",
    "v118/artwork/summers_farewell.webp",
    "v118/artwork/surfing_girl_wild_and_free.webp",
    "v118/artwork/tabby_gonzalez.webp",
    "v118/artwork/the_city_i_long_for.webp",
    "v118/artwork/the_dive.webp",
    "v118/artwork/the_hard_way.webp",
    "v118/artwork/the_hook.webp",
    "v118/artwork/the_quiet_kind.webp",
    "v118/artwork/the_rhythm_of_the_fox.webp",
    "v118/artwork/the_rhythm_of_you.webp",
    "v118/artwork/the_sharpened_bow.webp",
    "v118/artwork/the_sirens_anchor.webp",
    "v118/artwork/the_soft_return.webp",
    "v118/artwork/the_steel_winged_swan.webp",
    "v118/artwork/this_is_fine.webp",
    "v118/artwork/tide_on_stone.webp",
    "v118/artwork/toccata.webp",
    "v118/artwork/trick_or_treat.webp",
    "v118/artwork/uncaged.webp",
    "v118/artwork/upon_a_winding_trail.webp",
    "v118/artwork/venezia.webp",
    "v118/artwork/verona.webp",
    "v118/artwork/vetro_di_genova.webp",
    "v118/artwork/weekend.webp",
    "v118/artwork/whiteout.webp",
    "v118/artwork/winterstorm.webp",
    "v118/css/style 20260815_1400.css",
    "v118/css/style.css",
    "v118/datenschutz.html",
    "v118/essays/embeddings.html",
    "v118/essays/essay1.html",
    "v118/essays/gemini-code-1782138112807.html",
    "v118/essays/ssm.html",
    "v118/essays/transformers.html",
    "v118/images/Guitar-in-Dolomites.webp",
    "v118/images/Hero.webp",
    "v118/images/Hero_square.webp",
    "v118/images/Julia-skiing-Dolomites.webp",
    "v118/images/Stage_1.webp",
    "v118/images/Stage_2.webp",
    "v118/images/Stage_3.webp",
    "v118/images/Stage_4.webp",
    "v118/images/Stage_5.webp",
    "v118/images/Stage_6.webp",
    "v118/images/Stage_7.webp",
    "v118/images/Stage_8.webp",
    "v118/images/embeddings_music.webp",
    "v118/images/embeddings_words.webp",
    "v118/images/icons/app_icon_192.png",
    "v118/images/icons/app_icon_512.png",
    "v118/images/julia_embeddings.webp",
    "v118/images/julia_ssm_equations.webp",
    "v118/images/password_expired_live.webp",
    "v118/images/podcasts.webp",
    "v118/images/southern_belle.webp",
    "v118/images/ssm_diagram.webp",
    "v118/images/surfing_girl_wild_and_free.webp",
    "v118/images/under_the_hood.webp",
    "v118/images/witch.webp",
    "v118/impressum.html",
    "v118/index.html",
    "v118/js/DiaryService.js",
    "v118/js/Director.js",
    "v118/js/Main 20260319_1300.js",
    "v118/js/Main.js",
    "v118/js/PickerDrum.js",
    "v118/js/Placeholder.js",
    "v118/js/Player.js",
    "v118/js/SongCollection.js",
    "v118/js/SongService.js",
    "v118/js/VersionCore.js",
    "v118/js/ffmpeg.min.js",
    "v118/js/lucide.js",
    "v118/js/tailwindcss.js",
    "v118/js/tex-mml-chtml.js",
    "v118/legal_notice.html",
    "v118/manifest.json",
    "v118/placeholder/footer.html",
    "v118/placeholder/header.html",
    "v118/privacy_policy.html"
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
