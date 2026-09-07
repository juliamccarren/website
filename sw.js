const STATIC_CACHE = 'julia-site-v117';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v117/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v117/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v117/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v117/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v117/artwork/a_slow_blossoming_rose.webp",
    "v117/artwork/alejandro.webp",
    "v117/artwork/alta_tensione.webp",
    "v117/artwork/antitoxic.webp",
    "v117/artwork/autumns_whisper.webp",
    "v117/artwork/avalanche.webp",
    "v117/artwork/betrayal.webp",
    "v117/artwork/big_dreams_shine.webp",
    "v117/artwork/big_dreams_shine_live.webp",
    "v117/artwork/bite_of_the_night.webp",
    "v117/artwork/black_cat_bones.webp",
    "v117/artwork/boring.webp",
    "v117/artwork/brainrot.webp",
    "v117/artwork/brooklyn.webp",
    "v117/artwork/buckn_the_bain.webp",
    "v117/artwork/buio_perfetto.webp",
    "v117/artwork/cheerleader.webp",
    "v117/artwork/coffee_in_amsterdam.webp",
    "v117/artwork/cool_fire.webp",
    "v117/artwork/dancing_on_your_grave.webp",
    "v117/artwork/date_disaster.webp",
    "v117/artwork/deep_blue.webp",
    "v117/artwork/deepdive_1.webp",
    "v117/artwork/deepdive_2.webp",
    "v117/artwork/default.webp",
    "v117/artwork/delta_blues.webp",
    "v117/artwork/digital_ghost.webp",
    "v117/artwork/disco_flashback.webp",
    "v117/artwork/disco_flashback_2.webp",
    "v117/artwork/disposable.webp",
    "v117/artwork/distortion.webp",
    "v117/artwork/drunk_not_dumb.webp",
    "v117/artwork/dynamite.webp",
    "v117/artwork/electric_hearts.webp",
    "v117/artwork/embers_and_sparks.webp",
    "v117/artwork/fences_down.webp",
    "v117/artwork/ferro_e_canna.webp",
    "v117/artwork/fine_apnea.webp",
    "v117/artwork/fine_apnea_2.webp",
    "v117/artwork/fire_in_my_veins.webp",
    "v117/artwork/first_steps_to_stardom.webp",
    "v117/artwork/fog_of_fear.webp",
    "v117/artwork/forever.webp",
    "v117/artwork/fornello_rosso.webp",
    "v117/artwork/four_chords_later.webp",
    "v117/artwork/friday_night.webp",
    "v117/artwork/from_first_steps_to_stardom.webp",
    "v117/artwork/frost_and_friction.webp",
    "v117/artwork/frozen_heart.webp",
    "v117/artwork/fuori_dai_piedi.webp",
    "v117/artwork/fuori_dai_piedi_live.webp",
    "v117/artwork/garage_band.webp",
    "v117/artwork/ghost_in_the_garden.webp",
    "v117/artwork/god_save_the_king.webp",
    "v117/artwork/golden_days.webp",
    "v117/artwork/good_enough.webp",
    "v117/artwork/happy_birthday_in_heaven.webp",
    "v117/artwork/haunted_haven.webp",
    "v117/artwork/heart_of_fire_and_ice.webp",
    "v117/artwork/her_first_truck.webp",
    "v117/artwork/hes_still_here.webp",
    "v117/artwork/hes_still_here_2026.webp",
    "v117/artwork/home_now.webp",
    "v117/artwork/howling_wolves.webp",
    "v117/artwork/hurricane.webp",
    "v117/artwork/hypocrites.webp",
    "v117/artwork/i_hate_you.webp",
    "v117/artwork/i_love_school.webp",
    "v117/artwork/i_scream.webp",
    "v117/artwork/i_tuoi_piccoli_disordini.webp",
    "v117/artwork/insatiable.webp",
    "v117/artwork/insult_the_ones_you_love.webp",
    "v117/artwork/introverted_girl.webp",
    "v117/artwork/jet_set.webp",
    "v117/artwork/julia_and_friends.webp",
    "v117/artwork/just_a_vibe.webp",
    "v117/artwork/just_wants_to_be_loved.webp",
    "v117/artwork/last_exit.webp",
    "v117/artwork/left_lane_legend.webp",
    "v117/artwork/little_butterflies.webp",
    "v117/artwork/luce_rossa.webp",
    "v117/artwork/luck_for_granted.webp",
    "v117/artwork/maybe_they_knew.webp",
    "v117/artwork/mind_the_gap.webp",
    "v117/artwork/my_foundation.webp",
    "v117/artwork/my_sweet_little_star.webp",
    "v117/artwork/need_for_speed.webp",
    "v117/artwork/nice_girl.webp",
    "v117/artwork/one_in_a_quarter_billion.webp",
    "v117/artwork/one_pulse.webp",
    "v117/artwork/paradox_love.webp",
    "v117/artwork/password_expired.webp",
    "v117/artwork/password_expired_live.webp",
    "v117/artwork/pathetique.webp",
    "v117/artwork/peaks_of_gold.webp",
    "v117/artwork/play_it_again.webp",
    "v117/artwork/private_lake.webp",
    "v117/artwork/radio_trash.webp",
    "v117/artwork/regina_di_niente.webp",
    "v117/artwork/resti_qui.webp",
    "v117/artwork/ride_the_groove.webp",
    "v117/artwork/rocker_songwriter.webp",
    "v117/artwork/sailing_on_open_water.webp",
    "v117/artwork/sanctified_sinner.webp",
    "v117/artwork/sanctuary_riot.webp",
    "v117/artwork/schools_out.webp",
    "v117/artwork/set_the_spirit_free.webp",
    "v117/artwork/siblings.webp",
    "v117/artwork/skeleton_dance.webp",
    "v117/artwork/slippery_road.webp",
    "v117/artwork/social_lubricant.webp",
    "v117/artwork/soulmate.webp",
    "v117/artwork/southern_belle.webp",
    "v117/artwork/southern_heat.webp",
    "v117/artwork/southerns_eve.webp",
    "v117/artwork/spooky.webp",
    "v117/artwork/spring.webp",
    "v117/artwork/storm_of_the_abyss.webp",
    "v117/artwork/summers_farewell.webp",
    "v117/artwork/surfing_girl_wild_and_free.webp",
    "v117/artwork/tabby_gonzalez.webp",
    "v117/artwork/the_city_i_long_for.webp",
    "v117/artwork/the_dive.webp",
    "v117/artwork/the_hard_way.webp",
    "v117/artwork/the_hook.webp",
    "v117/artwork/the_quiet_kind.webp",
    "v117/artwork/the_rhythm_of_the_fox.webp",
    "v117/artwork/the_rhythm_of_you.webp",
    "v117/artwork/the_sharpened_bow.webp",
    "v117/artwork/the_sirens_anchor.webp",
    "v117/artwork/the_soft_return.webp",
    "v117/artwork/the_steel_winged_swan.webp",
    "v117/artwork/this_is_fine.webp",
    "v117/artwork/tide_on_stone.webp",
    "v117/artwork/toccata.webp",
    "v117/artwork/trick_or_treat.webp",
    "v117/artwork/uncaged.webp",
    "v117/artwork/upon_a_winding_trail.webp",
    "v117/artwork/venezia.webp",
    "v117/artwork/verona.webp",
    "v117/artwork/vetro_di_genova.webp",
    "v117/artwork/weekend.webp",
    "v117/artwork/whiteout.webp",
    "v117/artwork/winterstorm.webp",
    "v117/css/style 20260815_1400.css",
    "v117/css/style.css",
    "v117/datenschutz.html",
    "v117/essays/embeddings.html",
    "v117/essays/essay1.html",
    "v117/essays/gemini-code-1782138112807.html",
    "v117/essays/ssm.html",
    "v117/essays/transformers.html",
    "v117/images/Guitar-in-Dolomites.webp",
    "v117/images/Hero.webp",
    "v117/images/Hero_square.webp",
    "v117/images/Julia-skiing-Dolomites.webp",
    "v117/images/Stage_1.webp",
    "v117/images/Stage_2.webp",
    "v117/images/Stage_3.webp",
    "v117/images/Stage_4.webp",
    "v117/images/Stage_5.webp",
    "v117/images/Stage_6.webp",
    "v117/images/Stage_7.webp",
    "v117/images/Stage_8.webp",
    "v117/images/embeddings_music.webp",
    "v117/images/embeddings_words.webp",
    "v117/images/icons/app_icon_192.png",
    "v117/images/icons/app_icon_512.png",
    "v117/images/julia_embeddings.webp",
    "v117/images/julia_ssm_equations.webp",
    "v117/images/password_expired_live.webp",
    "v117/images/podcasts.webp",
    "v117/images/southern_belle.webp",
    "v117/images/ssm_diagram.webp",
    "v117/images/surfing_girl_wild_and_free.webp",
    "v117/images/under_the_hood.webp",
    "v117/images/witch.webp",
    "v117/impressum.html",
    "v117/index.html",
    "v117/js/DiaryService.js",
    "v117/js/Director.js",
    "v117/js/Main 20260319_1300.js",
    "v117/js/Main.js",
    "v117/js/PickerDrum.js",
    "v117/js/Placeholder.js",
    "v117/js/Player.js",
    "v117/js/SongCollection.js",
    "v117/js/SongService.js",
    "v117/js/VersionCore.js",
    "v117/js/ffmpeg.min.js",
    "v117/js/lucide.js",
    "v117/js/tailwindcss.js",
    "v117/js/tex-mml-chtml.js",
    "v117/legal_notice.html",
    "v117/manifest.json",
    "v117/placeholder/footer.html",
    "v117/placeholder/header.html",
    "v117/privacy_policy.html"
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
