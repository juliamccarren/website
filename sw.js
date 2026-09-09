const STATIC_CACHE = 'julia-site-v123';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v123/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v123/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v123/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v123/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v123/artwork/a_slow_blossoming_rose.webp",
    "v123/artwork/alejandro.webp",
    "v123/artwork/alta_tensione.webp",
    "v123/artwork/antitoxic.webp",
    "v123/artwork/autumns_whisper.webp",
    "v123/artwork/avalanche.webp",
    "v123/artwork/betrayal.webp",
    "v123/artwork/big_dreams_shine.webp",
    "v123/artwork/big_dreams_shine_live.webp",
    "v123/artwork/bite_of_the_night.webp",
    "v123/artwork/black_cat_bones.webp",
    "v123/artwork/boring.webp",
    "v123/artwork/brainrot.webp",
    "v123/artwork/brooklyn.webp",
    "v123/artwork/buckn_the_bain.webp",
    "v123/artwork/buio_perfetto.webp",
    "v123/artwork/cheerleader.webp",
    "v123/artwork/coffee_in_amsterdam.webp",
    "v123/artwork/cool_fire.webp",
    "v123/artwork/dancing_on_your_grave.webp",
    "v123/artwork/date_disaster.webp",
    "v123/artwork/deep_blue.webp",
    "v123/artwork/deepdive_1.webp",
    "v123/artwork/deepdive_2.webp",
    "v123/artwork/default.webp",
    "v123/artwork/delta_blues.webp",
    "v123/artwork/digital_ghost.webp",
    "v123/artwork/disco_flashback.webp",
    "v123/artwork/disco_flashback_2.webp",
    "v123/artwork/disposable.webp",
    "v123/artwork/distortion.webp",
    "v123/artwork/drunk_not_dumb.webp",
    "v123/artwork/dynamite.webp",
    "v123/artwork/electric_hearts.webp",
    "v123/artwork/embers_and_sparks.webp",
    "v123/artwork/fences_down.webp",
    "v123/artwork/ferro_e_canna.webp",
    "v123/artwork/fine_apnea.webp",
    "v123/artwork/fine_apnea_2.webp",
    "v123/artwork/fire_in_my_veins.webp",
    "v123/artwork/first_steps_to_stardom.webp",
    "v123/artwork/fog_of_fear.webp",
    "v123/artwork/forever.webp",
    "v123/artwork/fornello_rosso.webp",
    "v123/artwork/four_chords_later.webp",
    "v123/artwork/friday_night.webp",
    "v123/artwork/from_first_steps_to_stardom.webp",
    "v123/artwork/frost_and_friction.webp",
    "v123/artwork/frozen_heart.webp",
    "v123/artwork/fuoco_nel_legno.webp",
    "v123/artwork/fuori_dai_piedi.webp",
    "v123/artwork/fuori_dai_piedi_live.webp",
    "v123/artwork/garage_band.webp",
    "v123/artwork/ghost_in_the_garden.webp",
    "v123/artwork/god_save_the_king.webp",
    "v123/artwork/golden_days.webp",
    "v123/artwork/good_enough.webp",
    "v123/artwork/happy_birthday_in_heaven.webp",
    "v123/artwork/haunted_haven.webp",
    "v123/artwork/heart_of_fire_and_ice.webp",
    "v123/artwork/her_first_truck.webp",
    "v123/artwork/hes_still_here.webp",
    "v123/artwork/hes_still_here_2026.webp",
    "v123/artwork/home_now.webp",
    "v123/artwork/howling_wolves.webp",
    "v123/artwork/hurricane.webp",
    "v123/artwork/hypocrites.webp",
    "v123/artwork/i_hate_you.webp",
    "v123/artwork/i_love_school.webp",
    "v123/artwork/i_scream.webp",
    "v123/artwork/i_tuoi_piccoli_disordini.webp",
    "v123/artwork/insatiable.webp",
    "v123/artwork/insult_the_ones_you_love.webp",
    "v123/artwork/introverted_girl.webp",
    "v123/artwork/jet_set.webp",
    "v123/artwork/julia_and_friends.webp",
    "v123/artwork/just_a_vibe.webp",
    "v123/artwork/just_wants_to_be_loved.webp",
    "v123/artwork/last_exit.webp",
    "v123/artwork/left_lane_legend.webp",
    "v123/artwork/little_butterflies.webp",
    "v123/artwork/luce_rossa.webp",
    "v123/artwork/luck_for_granted.webp",
    "v123/artwork/maybe_they_knew.webp",
    "v123/artwork/mind_the_gap.webp",
    "v123/artwork/my_foundation.webp",
    "v123/artwork/my_sweet_little_star.webp",
    "v123/artwork/need_for_speed.webp",
    "v123/artwork/nice_girl.webp",
    "v123/artwork/nuora_selvaggia.webp",
    "v123/artwork/one_in_a_quarter_billion.webp",
    "v123/artwork/one_pulse.webp",
    "v123/artwork/paradox_love.webp",
    "v123/artwork/password_expired.webp",
    "v123/artwork/password_expired_live.webp",
    "v123/artwork/pathetique.webp",
    "v123/artwork/peaks_of_gold.webp",
    "v123/artwork/play_it_again.webp",
    "v123/artwork/private_lake.webp",
    "v123/artwork/radio_trash.webp",
    "v123/artwork/regina_di_niente.webp",
    "v123/artwork/resti_qui.webp",
    "v123/artwork/ride_the_groove.webp",
    "v123/artwork/rocker_songwriter.webp",
    "v123/artwork/sailing_on_open_water.webp",
    "v123/artwork/sanctified_sinner.webp",
    "v123/artwork/sanctuary_riot.webp",
    "v123/artwork/schools_out.webp",
    "v123/artwork/set_the_spirit_free.webp",
    "v123/artwork/siblings.webp",
    "v123/artwork/skeleton_dance.webp",
    "v123/artwork/slippery_road.webp",
    "v123/artwork/social_lubricant.webp",
    "v123/artwork/soulmate.webp",
    "v123/artwork/southern_belle.webp",
    "v123/artwork/southern_heat.webp",
    "v123/artwork/southerns_eve.webp",
    "v123/artwork/spooky.webp",
    "v123/artwork/spring.webp",
    "v123/artwork/storm_of_the_abyss.webp",
    "v123/artwork/summers_farewell.webp",
    "v123/artwork/surfing_girl_wild_and_free.webp",
    "v123/artwork/tabby_gonzalez.webp",
    "v123/artwork/the_city_i_long_for.webp",
    "v123/artwork/the_dive.webp",
    "v123/artwork/the_hard_way.webp",
    "v123/artwork/the_hook.webp",
    "v123/artwork/the_quiet_kind.webp",
    "v123/artwork/the_rhythm_of_the_fox.webp",
    "v123/artwork/the_rhythm_of_you.webp",
    "v123/artwork/the_sharpened_bow.webp",
    "v123/artwork/the_sirens_anchor.webp",
    "v123/artwork/the_soft_return.webp",
    "v123/artwork/the_steel_winged_swan.webp",
    "v123/artwork/this_is_fine.webp",
    "v123/artwork/tide_on_stone.webp",
    "v123/artwork/toccata.webp",
    "v123/artwork/trick_or_treat.webp",
    "v123/artwork/uncaged.webp",
    "v123/artwork/upon_a_winding_trail.webp",
    "v123/artwork/venezia.webp",
    "v123/artwork/verona.webp",
    "v123/artwork/vetro_di_genova.webp",
    "v123/artwork/weekend.webp",
    "v123/artwork/whiteout.webp",
    "v123/artwork/winterstorm.webp",
    "v123/css/style 20260815_1400.css",
    "v123/css/style copy.css",
    "v123/css/style.css",
    "v123/datenschutz.html",
    "v123/essays/embeddings.html",
    "v123/essays/essay1.html",
    "v123/essays/gemini-code-1782138112807.html",
    "v123/essays/ssm.html",
    "v123/essays/transformers.html",
    "v123/images/Guitar-in-Dolomites.webp",
    "v123/images/Hero.webp",
    "v123/images/Hero_1.webp",
    "v123/images/Hero_1_Square.webp",
    "v123/images/Hero_2.webp",
    "v123/images/Julia-skiing-Dolomites.webp",
    "v123/images/Stage_1.webp",
    "v123/images/Stage_2.webp",
    "v123/images/Stage_3.webp",
    "v123/images/Stage_4.webp",
    "v123/images/Stage_5.webp",
    "v123/images/Stage_6.webp",
    "v123/images/Stage_7.webp",
    "v123/images/Stage_8.webp",
    "v123/images/embeddings_music.webp",
    "v123/images/embeddings_words.webp",
    "v123/images/icons/app_icon_192 copy.png",
    "v123/images/icons/app_icon_192.png",
    "v123/images/icons/app_icon_512 copy.png",
    "v123/images/icons/app_icon_512.png",
    "v123/images/julia_embeddings.webp",
    "v123/images/julia_ssm_equations.webp",
    "v123/images/password_expired_live.webp",
    "v123/images/podcasts.webp",
    "v123/images/southern_belle.webp",
    "v123/images/ssm_diagram.webp",
    "v123/images/surfing_girl_wild_and_free.webp",
    "v123/images/under_the_hood.webp",
    "v123/images/witch.webp",
    "v123/impressum.html",
    "v123/index.html",
    "v123/js/DiaryService.js",
    "v123/js/Director.js",
    "v123/js/Main 20260319_1300.js",
    "v123/js/Main.js",
    "v123/js/PickerDrum.js",
    "v123/js/Placeholder.js",
    "v123/js/Player.js",
    "v123/js/SongCollection.js",
    "v123/js/SongService.js",
    "v123/js/VersionCore.js",
    "v123/js/ffmpeg.min.js",
    "v123/js/lucide.js",
    "v123/js/tailwindcss.js",
    "v123/js/tex-mml-chtml.js",
    "v123/legal_notice.html",
    "v123/manifest.json",
    "v123/placeholder/footer.html",
    "v123/placeholder/header.html",
    "v123/privacy_policy.html"
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
