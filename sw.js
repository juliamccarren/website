const STATIC_CACHE = 'julia-site-v121';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v121/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v121/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v121/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v121/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v121/artwork/a_slow_blossoming_rose.webp",
    "v121/artwork/alejandro.webp",
    "v121/artwork/alta_tensione.webp",
    "v121/artwork/antitoxic.webp",
    "v121/artwork/autumns_whisper.webp",
    "v121/artwork/avalanche.webp",
    "v121/artwork/betrayal.webp",
    "v121/artwork/big_dreams_shine.webp",
    "v121/artwork/big_dreams_shine_live.webp",
    "v121/artwork/bite_of_the_night.webp",
    "v121/artwork/black_cat_bones.webp",
    "v121/artwork/boring.webp",
    "v121/artwork/brainrot.webp",
    "v121/artwork/brooklyn.webp",
    "v121/artwork/buckn_the_bain.webp",
    "v121/artwork/buio_perfetto.webp",
    "v121/artwork/cheerleader.webp",
    "v121/artwork/coffee_in_amsterdam.webp",
    "v121/artwork/cool_fire.webp",
    "v121/artwork/dancing_on_your_grave.webp",
    "v121/artwork/date_disaster.webp",
    "v121/artwork/deep_blue.webp",
    "v121/artwork/deepdive_1.webp",
    "v121/artwork/deepdive_2.webp",
    "v121/artwork/default.webp",
    "v121/artwork/delta_blues.webp",
    "v121/artwork/digital_ghost.webp",
    "v121/artwork/disco_flashback.webp",
    "v121/artwork/disco_flashback_2.webp",
    "v121/artwork/disposable.webp",
    "v121/artwork/distortion.webp",
    "v121/artwork/drunk_not_dumb.webp",
    "v121/artwork/dynamite.webp",
    "v121/artwork/electric_hearts.webp",
    "v121/artwork/embers_and_sparks.webp",
    "v121/artwork/fences_down.webp",
    "v121/artwork/ferro_e_canna.webp",
    "v121/artwork/fine_apnea.webp",
    "v121/artwork/fine_apnea_2.webp",
    "v121/artwork/fire_in_my_veins.webp",
    "v121/artwork/first_steps_to_stardom.webp",
    "v121/artwork/fog_of_fear.webp",
    "v121/artwork/forever.webp",
    "v121/artwork/fornello_rosso.webp",
    "v121/artwork/four_chords_later.webp",
    "v121/artwork/friday_night.webp",
    "v121/artwork/from_first_steps_to_stardom.webp",
    "v121/artwork/frost_and_friction.webp",
    "v121/artwork/frozen_heart.webp",
    "v121/artwork/fuoco_nel_legno.webp",
    "v121/artwork/fuori_dai_piedi.webp",
    "v121/artwork/fuori_dai_piedi_live.webp",
    "v121/artwork/garage_band.webp",
    "v121/artwork/ghost_in_the_garden.webp",
    "v121/artwork/god_save_the_king.webp",
    "v121/artwork/golden_days.webp",
    "v121/artwork/good_enough.webp",
    "v121/artwork/happy_birthday_in_heaven.webp",
    "v121/artwork/haunted_haven.webp",
    "v121/artwork/heart_of_fire_and_ice.webp",
    "v121/artwork/her_first_truck.webp",
    "v121/artwork/hes_still_here.webp",
    "v121/artwork/hes_still_here_2026.webp",
    "v121/artwork/home_now.webp",
    "v121/artwork/howling_wolves.webp",
    "v121/artwork/hurricane.webp",
    "v121/artwork/hypocrites.webp",
    "v121/artwork/i_hate_you.webp",
    "v121/artwork/i_love_school.webp",
    "v121/artwork/i_scream.webp",
    "v121/artwork/i_tuoi_piccoli_disordini.webp",
    "v121/artwork/insatiable.webp",
    "v121/artwork/insult_the_ones_you_love.webp",
    "v121/artwork/introverted_girl.webp",
    "v121/artwork/jet_set.webp",
    "v121/artwork/julia_and_friends.webp",
    "v121/artwork/just_a_vibe.webp",
    "v121/artwork/just_wants_to_be_loved.webp",
    "v121/artwork/last_exit.webp",
    "v121/artwork/left_lane_legend.webp",
    "v121/artwork/little_butterflies.webp",
    "v121/artwork/luce_rossa.webp",
    "v121/artwork/luck_for_granted.webp",
    "v121/artwork/maybe_they_knew.webp",
    "v121/artwork/mind_the_gap.webp",
    "v121/artwork/my_foundation.webp",
    "v121/artwork/my_sweet_little_star.webp",
    "v121/artwork/need_for_speed.webp",
    "v121/artwork/nice_girl.webp",
    "v121/artwork/one_in_a_quarter_billion.webp",
    "v121/artwork/one_pulse.webp",
    "v121/artwork/paradox_love.webp",
    "v121/artwork/password_expired.webp",
    "v121/artwork/password_expired_live.webp",
    "v121/artwork/pathetique.webp",
    "v121/artwork/peaks_of_gold.webp",
    "v121/artwork/play_it_again.webp",
    "v121/artwork/private_lake.webp",
    "v121/artwork/radio_trash.webp",
    "v121/artwork/regina_di_niente.webp",
    "v121/artwork/resti_qui.webp",
    "v121/artwork/ride_the_groove.webp",
    "v121/artwork/rocker_songwriter.webp",
    "v121/artwork/sailing_on_open_water.webp",
    "v121/artwork/sanctified_sinner.webp",
    "v121/artwork/sanctuary_riot.webp",
    "v121/artwork/schools_out.webp",
    "v121/artwork/set_the_spirit_free.webp",
    "v121/artwork/siblings.webp",
    "v121/artwork/skeleton_dance.webp",
    "v121/artwork/slippery_road.webp",
    "v121/artwork/social_lubricant.webp",
    "v121/artwork/soulmate.webp",
    "v121/artwork/southern_belle.webp",
    "v121/artwork/southern_heat.webp",
    "v121/artwork/southerns_eve.webp",
    "v121/artwork/spooky.webp",
    "v121/artwork/spring.webp",
    "v121/artwork/storm_of_the_abyss.webp",
    "v121/artwork/summers_farewell.webp",
    "v121/artwork/surfing_girl_wild_and_free.webp",
    "v121/artwork/tabby_gonzalez.webp",
    "v121/artwork/the_city_i_long_for.webp",
    "v121/artwork/the_dive.webp",
    "v121/artwork/the_hard_way.webp",
    "v121/artwork/the_hook.webp",
    "v121/artwork/the_quiet_kind.webp",
    "v121/artwork/the_rhythm_of_the_fox.webp",
    "v121/artwork/the_rhythm_of_you.webp",
    "v121/artwork/the_sharpened_bow.webp",
    "v121/artwork/the_sirens_anchor.webp",
    "v121/artwork/the_soft_return.webp",
    "v121/artwork/the_steel_winged_swan.webp",
    "v121/artwork/this_is_fine.webp",
    "v121/artwork/tide_on_stone.webp",
    "v121/artwork/toccata.webp",
    "v121/artwork/trick_or_treat.webp",
    "v121/artwork/uncaged.webp",
    "v121/artwork/upon_a_winding_trail.webp",
    "v121/artwork/venezia.webp",
    "v121/artwork/verona.webp",
    "v121/artwork/vetro_di_genova.webp",
    "v121/artwork/weekend.webp",
    "v121/artwork/whiteout.webp",
    "v121/artwork/winterstorm.webp",
    "v121/css/style 20260815_1400.css",
    "v121/css/style copy.css",
    "v121/css/style.css",
    "v121/datenschutz.html",
    "v121/essays/embeddings.html",
    "v121/essays/essay1.html",
    "v121/essays/gemini-code-1782138112807.html",
    "v121/essays/ssm.html",
    "v121/essays/transformers.html",
    "v121/images/Guitar-in-Dolomites.webp",
    "v121/images/Hero.webp",
    "v121/images/Hero_Old.webp",
    "v121/images/Hero_square.webp",
    "v121/images/Julia-skiing-Dolomites.webp",
    "v121/images/Stage_1.webp",
    "v121/images/Stage_2.webp",
    "v121/images/Stage_3.webp",
    "v121/images/Stage_4.webp",
    "v121/images/Stage_5.webp",
    "v121/images/Stage_6.webp",
    "v121/images/Stage_7.webp",
    "v121/images/Stage_8.webp",
    "v121/images/embeddings_music.webp",
    "v121/images/embeddings_words.webp",
    "v121/images/icons/app_icon_192 copy.png",
    "v121/images/icons/app_icon_192.png",
    "v121/images/icons/app_icon_512 copy.png",
    "v121/images/icons/app_icon_512.png",
    "v121/images/julia_embeddings.webp",
    "v121/images/julia_ssm_equations.webp",
    "v121/images/password_expired_live.webp",
    "v121/images/podcasts.webp",
    "v121/images/southern_belle.webp",
    "v121/images/ssm_diagram.webp",
    "v121/images/surfing_girl_wild_and_free.webp",
    "v121/images/under_the_hood.webp",
    "v121/images/witch.webp",
    "v121/impressum.html",
    "v121/index.html",
    "v121/js/DiaryService.js",
    "v121/js/Director.js",
    "v121/js/Main 20260319_1300.js",
    "v121/js/Main.js",
    "v121/js/PickerDrum.js",
    "v121/js/Placeholder.js",
    "v121/js/Player.js",
    "v121/js/SongCollection.js",
    "v121/js/SongService.js",
    "v121/js/VersionCore.js",
    "v121/js/ffmpeg.min.js",
    "v121/js/lucide.js",
    "v121/js/tailwindcss.js",
    "v121/js/tex-mml-chtml.js",
    "v121/legal_notice.html",
    "v121/manifest.json",
    "v121/placeholder/footer.html",
    "v121/placeholder/header.html",
    "v121/privacy_policy.html"
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
