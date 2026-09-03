const STATIC_CACHE = 'julia-site-v114';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v114/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v114/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v114/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v114/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v114/artwork/a_slow_blossoming_rose.webp",
    "v114/artwork/alejandro.webp",
    "v114/artwork/alta_tensione.webp",
    "v114/artwork/antitoxic.webp",
    "v114/artwork/autumns_whisper.webp",
    "v114/artwork/avalanche.webp",
    "v114/artwork/betrayal.webp",
    "v114/artwork/big_dreams_shine.webp",
    "v114/artwork/big_dreams_shine_live.webp",
    "v114/artwork/bite_of_the_night.webp",
    "v114/artwork/black_cat_bones.webp",
    "v114/artwork/boring.webp",
    "v114/artwork/brainrot.webp",
    "v114/artwork/brooklyn.webp",
    "v114/artwork/buckn_the_bain.webp",
    "v114/artwork/buio_perfetto.webp",
    "v114/artwork/cheerleader.webp",
    "v114/artwork/coffee_in_amsterdam.webp",
    "v114/artwork/cool_fire.webp",
    "v114/artwork/dancing_on_your_grave.webp",
    "v114/artwork/date_disaster.webp",
    "v114/artwork/deep_blue.webp",
    "v114/artwork/deepdive_1.webp",
    "v114/artwork/deepdive_2.webp",
    "v114/artwork/default.webp",
    "v114/artwork/delta_blues.webp",
    "v114/artwork/digital_ghost.webp",
    "v114/artwork/disco_flashback.webp",
    "v114/artwork/disco_flashback_2.webp",
    "v114/artwork/disposable.webp",
    "v114/artwork/distortion.webp",
    "v114/artwork/drunk_not_dumb.webp",
    "v114/artwork/dynamite.webp",
    "v114/artwork/electric_hearts.webp",
    "v114/artwork/embers_and_sparks.webp",
    "v114/artwork/fences_down.webp",
    "v114/artwork/fire_in_my_veins.webp",
    "v114/artwork/first_steps_to_stardom.webp",
    "v114/artwork/fog_of_fear.webp",
    "v114/artwork/forever.webp",
    "v114/artwork/fornello_rosso.webp",
    "v114/artwork/four_chords_later.webp",
    "v114/artwork/friday_night.webp",
    "v114/artwork/from_first_steps_to_stardom.webp",
    "v114/artwork/frost_and_friction.webp",
    "v114/artwork/frozen_heart.webp",
    "v114/artwork/fuori_dai_piedi.webp",
    "v114/artwork/fuori_dai_piedi_live.webp",
    "v114/artwork/garage_band.webp",
    "v114/artwork/ghost_in_the_garden.webp",
    "v114/artwork/god_save_the_king.webp",
    "v114/artwork/golden_days.webp",
    "v114/artwork/good_enough.webp",
    "v114/artwork/happy_birthday_in_heaven.webp",
    "v114/artwork/haunted_haven.webp",
    "v114/artwork/heart_of_fire_and_ice.webp",
    "v114/artwork/her_first_truck.webp",
    "v114/artwork/hes_still_here.webp",
    "v114/artwork/hes_still_here_2026.webp",
    "v114/artwork/home_now.webp",
    "v114/artwork/howling_wolves.webp",
    "v114/artwork/hurricane.webp",
    "v114/artwork/hypocrites.webp",
    "v114/artwork/i_hate_you.webp",
    "v114/artwork/i_love_school.webp",
    "v114/artwork/i_scream.webp",
    "v114/artwork/i_tuoi_piccoli_disordini.webp",
    "v114/artwork/insatiable.webp",
    "v114/artwork/insult_the_ones_you_love.webp",
    "v114/artwork/introverted_girl.webp",
    "v114/artwork/jet_set.webp",
    "v114/artwork/julia_and_friends.webp",
    "v114/artwork/just_a_vibe.webp",
    "v114/artwork/just_wants_to_be_loved.webp",
    "v114/artwork/last_exit.webp",
    "v114/artwork/left_lane_legend.webp",
    "v114/artwork/little_butterflies.webp",
    "v114/artwork/luce_rossa.webp",
    "v114/artwork/luck_for_granted.webp",
    "v114/artwork/maybe_they_knew.webp",
    "v114/artwork/mind_the_gap.webp",
    "v114/artwork/my_foundation.webp",
    "v114/artwork/my_sweet_little_star.webp",
    "v114/artwork/need_for_speed.webp",
    "v114/artwork/nice_girl.webp",
    "v114/artwork/one_in_a_quarter_billion.webp",
    "v114/artwork/one_pulse.webp",
    "v114/artwork/paradox_love.webp",
    "v114/artwork/password_expired.webp",
    "v114/artwork/password_expired_live.webp",
    "v114/artwork/pathetique.webp",
    "v114/artwork/peaks_of_gold.webp",
    "v114/artwork/play_it_again.webp",
    "v114/artwork/private_lake.webp",
    "v114/artwork/radio_trash.webp",
    "v114/artwork/regina_di_niente.webp",
    "v114/artwork/resti_qui.webp",
    "v114/artwork/ride_the_groove.webp",
    "v114/artwork/rocker_songwriter.webp",
    "v114/artwork/sailing_on_open_water.webp",
    "v114/artwork/sanctified_sinner.webp",
    "v114/artwork/sanctuary_riot.webp",
    "v114/artwork/schools_out.webp",
    "v114/artwork/set_the_spirit_free.webp",
    "v114/artwork/siblings.webp",
    "v114/artwork/skeleton_dance.webp",
    "v114/artwork/slippery_road.webp",
    "v114/artwork/social_lubricant.webp",
    "v114/artwork/soulmate.webp",
    "v114/artwork/southern_belle.webp",
    "v114/artwork/southern_heat.webp",
    "v114/artwork/southerns_eve.webp",
    "v114/artwork/spooky.webp",
    "v114/artwork/spring.webp",
    "v114/artwork/storm_of_the_abyss.webp",
    "v114/artwork/summers_farewell.webp",
    "v114/artwork/surfing_girl_wild_and_free.webp",
    "v114/artwork/tabby_gonzalez.webp",
    "v114/artwork/the_city_i_long_for.webp",
    "v114/artwork/the_dive.webp",
    "v114/artwork/the_hard_way.webp",
    "v114/artwork/the_hook.webp",
    "v114/artwork/the_quiet_kind.webp",
    "v114/artwork/the_rhythm_of_the_fox.webp",
    "v114/artwork/the_rhythm_of_you.webp",
    "v114/artwork/the_sharpened_bow.webp",
    "v114/artwork/the_sirens_anchor.webp",
    "v114/artwork/the_soft_return.webp",
    "v114/artwork/the_steel_winged_swan.webp",
    "v114/artwork/this_is_fine.webp",
    "v114/artwork/tide_on_stone.webp",
    "v114/artwork/toccata.webp",
    "v114/artwork/trick_or_treat.webp",
    "v114/artwork/uncaged.webp",
    "v114/artwork/upon_a_winding_trail.webp",
    "v114/artwork/venezia.webp",
    "v114/artwork/verona.webp",
    "v114/artwork/vetro_di_genova.webp",
    "v114/artwork/weekend.webp",
    "v114/artwork/whiteout.webp",
    "v114/artwork/winterstorm.webp",
    "v114/css/style 20260815_1400.css",
    "v114/css/style.css",
    "v114/datenschutz.html",
    "v114/essays/embeddings.html",
    "v114/essays/essay1.html",
    "v114/essays/gemini-code-1782138112807.html",
    "v114/essays/ssm.html",
    "v114/essays/transformers.html",
    "v114/images/Guitar-in-Dolomites.webp",
    "v114/images/Hero.webp",
    "v114/images/Hero_square.webp",
    "v114/images/Julia-skiing-Dolomites.webp",
    "v114/images/Stage_1.webp",
    "v114/images/Stage_2.webp",
    "v114/images/Stage_3.webp",
    "v114/images/Stage_4.webp",
    "v114/images/Stage_5.webp",
    "v114/images/Stage_6.webp",
    "v114/images/Stage_7.webp",
    "v114/images/Stage_8.webp",
    "v114/images/embeddings_music.webp",
    "v114/images/embeddings_words.webp",
    "v114/images/icons/app_icon_192.png",
    "v114/images/icons/app_icon_512.png",
    "v114/images/julia_embeddings.webp",
    "v114/images/julia_ssm_equations.webp",
    "v114/images/password_expired_live.webp",
    "v114/images/podcasts.webp",
    "v114/images/southern_belle.webp",
    "v114/images/ssm_diagram.webp",
    "v114/images/surfing_girl_wild_and_free.webp",
    "v114/images/under_the_hood.webp",
    "v114/images/witch.webp",
    "v114/impressum.html",
    "v114/index.html",
    "v114/js/DiaryService.js",
    "v114/js/Director.js",
    "v114/js/Main 20260319_1300.js",
    "v114/js/Main.js",
    "v114/js/PickerDrum.js",
    "v114/js/Placeholder.js",
    "v114/js/Player.js",
    "v114/js/SongCollection.js",
    "v114/js/SongService.js",
    "v114/js/VersionCore.js",
    "v114/js/ffmpeg.min.js",
    "v114/js/lucide.js",
    "v114/js/tailwindcss.js",
    "v114/js/tex-mml-chtml.js",
    "v114/legal_notice.html",
    "v114/manifest.json",
    "v114/placeholder/footer.html",
    "v114/placeholder/header.html",
    "v114/privacy_policy.html"
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
