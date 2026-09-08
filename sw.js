const STATIC_CACHE = 'julia-site-v120';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v120/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v120/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v120/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v120/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v120/artwork/a_slow_blossoming_rose.webp",
    "v120/artwork/alejandro.webp",
    "v120/artwork/alta_tensione.webp",
    "v120/artwork/antitoxic.webp",
    "v120/artwork/autumns_whisper.webp",
    "v120/artwork/avalanche.webp",
    "v120/artwork/betrayal.webp",
    "v120/artwork/big_dreams_shine.webp",
    "v120/artwork/big_dreams_shine_live.webp",
    "v120/artwork/bite_of_the_night.webp",
    "v120/artwork/black_cat_bones.webp",
    "v120/artwork/boring.webp",
    "v120/artwork/brainrot.webp",
    "v120/artwork/brooklyn.webp",
    "v120/artwork/buckn_the_bain.webp",
    "v120/artwork/buio_perfetto.webp",
    "v120/artwork/cheerleader.webp",
    "v120/artwork/coffee_in_amsterdam.webp",
    "v120/artwork/cool_fire.webp",
    "v120/artwork/dancing_on_your_grave.webp",
    "v120/artwork/date_disaster.webp",
    "v120/artwork/deep_blue.webp",
    "v120/artwork/deepdive_1.webp",
    "v120/artwork/deepdive_2.webp",
    "v120/artwork/default.webp",
    "v120/artwork/delta_blues.webp",
    "v120/artwork/digital_ghost.webp",
    "v120/artwork/disco_flashback.webp",
    "v120/artwork/disco_flashback_2.webp",
    "v120/artwork/disposable.webp",
    "v120/artwork/distortion.webp",
    "v120/artwork/drunk_not_dumb.webp",
    "v120/artwork/dynamite.webp",
    "v120/artwork/electric_hearts.webp",
    "v120/artwork/embers_and_sparks.webp",
    "v120/artwork/fences_down.webp",
    "v120/artwork/ferro_e_canna.webp",
    "v120/artwork/fine_apnea.webp",
    "v120/artwork/fine_apnea_2.webp",
    "v120/artwork/fire_in_my_veins.webp",
    "v120/artwork/first_steps_to_stardom.webp",
    "v120/artwork/fog_of_fear.webp",
    "v120/artwork/forever.webp",
    "v120/artwork/fornello_rosso.webp",
    "v120/artwork/four_chords_later.webp",
    "v120/artwork/friday_night.webp",
    "v120/artwork/from_first_steps_to_stardom.webp",
    "v120/artwork/frost_and_friction.webp",
    "v120/artwork/frozen_heart.webp",
    "v120/artwork/fuoco_nel_legno.webp",
    "v120/artwork/fuori_dai_piedi.webp",
    "v120/artwork/fuori_dai_piedi_live.webp",
    "v120/artwork/garage_band.webp",
    "v120/artwork/ghost_in_the_garden.webp",
    "v120/artwork/god_save_the_king.webp",
    "v120/artwork/golden_days.webp",
    "v120/artwork/good_enough.webp",
    "v120/artwork/happy_birthday_in_heaven.webp",
    "v120/artwork/haunted_haven.webp",
    "v120/artwork/heart_of_fire_and_ice.webp",
    "v120/artwork/her_first_truck.webp",
    "v120/artwork/hes_still_here.webp",
    "v120/artwork/hes_still_here_2026.webp",
    "v120/artwork/home_now.webp",
    "v120/artwork/howling_wolves.webp",
    "v120/artwork/hurricane.webp",
    "v120/artwork/hypocrites.webp",
    "v120/artwork/i_hate_you.webp",
    "v120/artwork/i_love_school.webp",
    "v120/artwork/i_scream.webp",
    "v120/artwork/i_tuoi_piccoli_disordini.webp",
    "v120/artwork/insatiable.webp",
    "v120/artwork/insult_the_ones_you_love.webp",
    "v120/artwork/introverted_girl.webp",
    "v120/artwork/jet_set.webp",
    "v120/artwork/julia_and_friends.webp",
    "v120/artwork/just_a_vibe.webp",
    "v120/artwork/just_wants_to_be_loved.webp",
    "v120/artwork/last_exit.webp",
    "v120/artwork/left_lane_legend.webp",
    "v120/artwork/little_butterflies.webp",
    "v120/artwork/luce_rossa.webp",
    "v120/artwork/luck_for_granted.webp",
    "v120/artwork/maybe_they_knew.webp",
    "v120/artwork/mind_the_gap.webp",
    "v120/artwork/my_foundation.webp",
    "v120/artwork/my_sweet_little_star.webp",
    "v120/artwork/need_for_speed.webp",
    "v120/artwork/nice_girl.webp",
    "v120/artwork/one_in_a_quarter_billion.webp",
    "v120/artwork/one_pulse.webp",
    "v120/artwork/paradox_love.webp",
    "v120/artwork/password_expired.webp",
    "v120/artwork/password_expired_live.webp",
    "v120/artwork/pathetique.webp",
    "v120/artwork/peaks_of_gold.webp",
    "v120/artwork/play_it_again.webp",
    "v120/artwork/private_lake.webp",
    "v120/artwork/radio_trash.webp",
    "v120/artwork/regina_di_niente.webp",
    "v120/artwork/resti_qui.webp",
    "v120/artwork/ride_the_groove.webp",
    "v120/artwork/rocker_songwriter.webp",
    "v120/artwork/sailing_on_open_water.webp",
    "v120/artwork/sanctified_sinner.webp",
    "v120/artwork/sanctuary_riot.webp",
    "v120/artwork/schools_out.webp",
    "v120/artwork/set_the_spirit_free.webp",
    "v120/artwork/siblings.webp",
    "v120/artwork/skeleton_dance.webp",
    "v120/artwork/slippery_road.webp",
    "v120/artwork/social_lubricant.webp",
    "v120/artwork/soulmate.webp",
    "v120/artwork/southern_belle.webp",
    "v120/artwork/southern_heat.webp",
    "v120/artwork/southerns_eve.webp",
    "v120/artwork/spooky.webp",
    "v120/artwork/spring.webp",
    "v120/artwork/storm_of_the_abyss.webp",
    "v120/artwork/summers_farewell.webp",
    "v120/artwork/surfing_girl_wild_and_free.webp",
    "v120/artwork/tabby_gonzalez.webp",
    "v120/artwork/the_city_i_long_for.webp",
    "v120/artwork/the_dive.webp",
    "v120/artwork/the_hard_way.webp",
    "v120/artwork/the_hook.webp",
    "v120/artwork/the_quiet_kind.webp",
    "v120/artwork/the_rhythm_of_the_fox.webp",
    "v120/artwork/the_rhythm_of_you.webp",
    "v120/artwork/the_sharpened_bow.webp",
    "v120/artwork/the_sirens_anchor.webp",
    "v120/artwork/the_soft_return.webp",
    "v120/artwork/the_steel_winged_swan.webp",
    "v120/artwork/this_is_fine.webp",
    "v120/artwork/tide_on_stone.webp",
    "v120/artwork/toccata.webp",
    "v120/artwork/trick_or_treat.webp",
    "v120/artwork/uncaged.webp",
    "v120/artwork/upon_a_winding_trail.webp",
    "v120/artwork/venezia.webp",
    "v120/artwork/verona.webp",
    "v120/artwork/vetro_di_genova.webp",
    "v120/artwork/weekend.webp",
    "v120/artwork/whiteout.webp",
    "v120/artwork/winterstorm.webp",
    "v120/css/style 20260815_1400.css",
    "v120/css/style copy.css",
    "v120/css/style.css",
    "v120/datenschutz.html",
    "v120/essays/embeddings.html",
    "v120/essays/essay1.html",
    "v120/essays/gemini-code-1782138112807.html",
    "v120/essays/ssm.html",
    "v120/essays/transformers.html",
    "v120/images/Guitar-in-Dolomites.webp",
    "v120/images/Hero.webp",
    "v120/images/Hero_Old.webp",
    "v120/images/Hero_square.webp",
    "v120/images/Julia-skiing-Dolomites.webp",
    "v120/images/Stage_1.webp",
    "v120/images/Stage_2.webp",
    "v120/images/Stage_3.webp",
    "v120/images/Stage_4.webp",
    "v120/images/Stage_5.webp",
    "v120/images/Stage_6.webp",
    "v120/images/Stage_7.webp",
    "v120/images/Stage_8.webp",
    "v120/images/embeddings_music.webp",
    "v120/images/embeddings_words.webp",
    "v120/images/icons/app_icon_192.png",
    "v120/images/icons/app_icon_512.png",
    "v120/images/julia_embeddings.webp",
    "v120/images/julia_ssm_equations.webp",
    "v120/images/password_expired_live.webp",
    "v120/images/podcasts.webp",
    "v120/images/southern_belle.webp",
    "v120/images/ssm_diagram.webp",
    "v120/images/surfing_girl_wild_and_free.webp",
    "v120/images/under_the_hood.webp",
    "v120/images/witch.webp",
    "v120/impressum.html",
    "v120/index.html",
    "v120/js/DiaryService.js",
    "v120/js/Director.js",
    "v120/js/Main 20260319_1300.js",
    "v120/js/Main.js",
    "v120/js/PickerDrum.js",
    "v120/js/Placeholder.js",
    "v120/js/Player.js",
    "v120/js/SongCollection.js",
    "v120/js/SongService.js",
    "v120/js/VersionCore.js",
    "v120/js/ffmpeg.min.js",
    "v120/js/lucide.js",
    "v120/js/tailwindcss.js",
    "v120/js/tex-mml-chtml.js",
    "v120/legal_notice.html",
    "v120/manifest.json",
    "v120/placeholder/footer.html",
    "v120/placeholder/header.html",
    "v120/privacy_policy.html"
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
