const STATIC_CACHE = 'julia-site-v115';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v115/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v115/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v115/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v115/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v115/artwork/a_slow_blossoming_rose.webp",
    "v115/artwork/alejandro.webp",
    "v115/artwork/alta_tensione.webp",
    "v115/artwork/antitoxic.webp",
    "v115/artwork/autumns_whisper.webp",
    "v115/artwork/avalanche.webp",
    "v115/artwork/betrayal.webp",
    "v115/artwork/big_dreams_shine.webp",
    "v115/artwork/big_dreams_shine_live.webp",
    "v115/artwork/bite_of_the_night.webp",
    "v115/artwork/black_cat_bones.webp",
    "v115/artwork/boring.webp",
    "v115/artwork/brainrot.webp",
    "v115/artwork/brooklyn.webp",
    "v115/artwork/buckn_the_bain.webp",
    "v115/artwork/buio_perfetto.webp",
    "v115/artwork/cheerleader.webp",
    "v115/artwork/coffee_in_amsterdam.webp",
    "v115/artwork/cool_fire.webp",
    "v115/artwork/dancing_on_your_grave.webp",
    "v115/artwork/date_disaster.webp",
    "v115/artwork/deep_blue.webp",
    "v115/artwork/deepdive_1.webp",
    "v115/artwork/deepdive_2.webp",
    "v115/artwork/default.webp",
    "v115/artwork/delta_blues.webp",
    "v115/artwork/digital_ghost.webp",
    "v115/artwork/disco_flashback.webp",
    "v115/artwork/disco_flashback_2.webp",
    "v115/artwork/disposable.webp",
    "v115/artwork/distortion.webp",
    "v115/artwork/drunk_not_dumb.webp",
    "v115/artwork/dynamite.webp",
    "v115/artwork/electric_hearts.webp",
    "v115/artwork/embers_and_sparks.webp",
    "v115/artwork/fences_down.webp",
    "v115/artwork/fine_apnea.webp",
    "v115/artwork/fire_in_my_veins.webp",
    "v115/artwork/first_steps_to_stardom.webp",
    "v115/artwork/fog_of_fear.webp",
    "v115/artwork/forever.webp",
    "v115/artwork/fornello_rosso.webp",
    "v115/artwork/four_chords_later.webp",
    "v115/artwork/friday_night.webp",
    "v115/artwork/from_first_steps_to_stardom.webp",
    "v115/artwork/frost_and_friction.webp",
    "v115/artwork/frozen_heart.webp",
    "v115/artwork/fuori_dai_piedi.webp",
    "v115/artwork/fuori_dai_piedi_live.webp",
    "v115/artwork/garage_band.webp",
    "v115/artwork/ghost_in_the_garden.webp",
    "v115/artwork/god_save_the_king.webp",
    "v115/artwork/golden_days.webp",
    "v115/artwork/good_enough.webp",
    "v115/artwork/happy_birthday_in_heaven.webp",
    "v115/artwork/haunted_haven.webp",
    "v115/artwork/heart_of_fire_and_ice.webp",
    "v115/artwork/her_first_truck.webp",
    "v115/artwork/hes_still_here.webp",
    "v115/artwork/hes_still_here_2026.webp",
    "v115/artwork/home_now.webp",
    "v115/artwork/howling_wolves.webp",
    "v115/artwork/hurricane.webp",
    "v115/artwork/hypocrites.webp",
    "v115/artwork/i_hate_you.webp",
    "v115/artwork/i_love_school.webp",
    "v115/artwork/i_scream.webp",
    "v115/artwork/i_tuoi_piccoli_disordini.webp",
    "v115/artwork/insatiable.webp",
    "v115/artwork/insult_the_ones_you_love.webp",
    "v115/artwork/introverted_girl.webp",
    "v115/artwork/jet_set.webp",
    "v115/artwork/julia_and_friends.webp",
    "v115/artwork/just_a_vibe.webp",
    "v115/artwork/just_wants_to_be_loved.webp",
    "v115/artwork/last_exit.webp",
    "v115/artwork/left_lane_legend.webp",
    "v115/artwork/little_butterflies.webp",
    "v115/artwork/luce_rossa.webp",
    "v115/artwork/luck_for_granted.webp",
    "v115/artwork/maybe_they_knew.webp",
    "v115/artwork/mind_the_gap.webp",
    "v115/artwork/my_foundation.webp",
    "v115/artwork/my_sweet_little_star.webp",
    "v115/artwork/need_for_speed.webp",
    "v115/artwork/nice_girl.webp",
    "v115/artwork/one_in_a_quarter_billion.webp",
    "v115/artwork/one_pulse.webp",
    "v115/artwork/paradox_love.webp",
    "v115/artwork/password_expired.webp",
    "v115/artwork/password_expired_live.webp",
    "v115/artwork/pathetique.webp",
    "v115/artwork/peaks_of_gold.webp",
    "v115/artwork/play_it_again.webp",
    "v115/artwork/private_lake.webp",
    "v115/artwork/radio_trash.webp",
    "v115/artwork/regina_di_niente.webp",
    "v115/artwork/resti_qui.webp",
    "v115/artwork/ride_the_groove.webp",
    "v115/artwork/rocker_songwriter.webp",
    "v115/artwork/sailing_on_open_water.webp",
    "v115/artwork/sanctified_sinner.webp",
    "v115/artwork/sanctuary_riot.webp",
    "v115/artwork/schools_out.webp",
    "v115/artwork/set_the_spirit_free.webp",
    "v115/artwork/siblings.webp",
    "v115/artwork/skeleton_dance.webp",
    "v115/artwork/slippery_road.webp",
    "v115/artwork/social_lubricant.webp",
    "v115/artwork/soulmate.webp",
    "v115/artwork/southern_belle.webp",
    "v115/artwork/southern_heat.webp",
    "v115/artwork/southerns_eve.webp",
    "v115/artwork/spooky.webp",
    "v115/artwork/spring.webp",
    "v115/artwork/storm_of_the_abyss.webp",
    "v115/artwork/summers_farewell.webp",
    "v115/artwork/surfing_girl_wild_and_free.webp",
    "v115/artwork/tabby_gonzalez.webp",
    "v115/artwork/the_city_i_long_for.webp",
    "v115/artwork/the_dive.webp",
    "v115/artwork/the_hard_way.webp",
    "v115/artwork/the_hook.webp",
    "v115/artwork/the_quiet_kind.webp",
    "v115/artwork/the_rhythm_of_the_fox.webp",
    "v115/artwork/the_rhythm_of_you.webp",
    "v115/artwork/the_sharpened_bow.webp",
    "v115/artwork/the_sirens_anchor.webp",
    "v115/artwork/the_soft_return.webp",
    "v115/artwork/the_steel_winged_swan.webp",
    "v115/artwork/this_is_fine.webp",
    "v115/artwork/tide_on_stone.webp",
    "v115/artwork/toccata.webp",
    "v115/artwork/trick_or_treat.webp",
    "v115/artwork/uncaged.webp",
    "v115/artwork/upon_a_winding_trail.webp",
    "v115/artwork/venezia.webp",
    "v115/artwork/verona.webp",
    "v115/artwork/vetro_di_genova.webp",
    "v115/artwork/weekend.webp",
    "v115/artwork/whiteout.webp",
    "v115/artwork/winterstorm.webp",
    "v115/css/style 20260815_1400.css",
    "v115/css/style.css",
    "v115/datenschutz.html",
    "v115/essays/embeddings.html",
    "v115/essays/essay1.html",
    "v115/essays/gemini-code-1782138112807.html",
    "v115/essays/ssm.html",
    "v115/essays/transformers.html",
    "v115/images/Guitar-in-Dolomites.webp",
    "v115/images/Hero.webp",
    "v115/images/Hero_square.webp",
    "v115/images/Julia-skiing-Dolomites.webp",
    "v115/images/Stage_1.webp",
    "v115/images/Stage_2.webp",
    "v115/images/Stage_3.webp",
    "v115/images/Stage_4.webp",
    "v115/images/Stage_5.webp",
    "v115/images/Stage_6.webp",
    "v115/images/Stage_7.webp",
    "v115/images/Stage_8.webp",
    "v115/images/embeddings_music.webp",
    "v115/images/embeddings_words.webp",
    "v115/images/icons/app_icon_192.png",
    "v115/images/icons/app_icon_512.png",
    "v115/images/julia_embeddings.webp",
    "v115/images/julia_ssm_equations.webp",
    "v115/images/password_expired_live.webp",
    "v115/images/podcasts.webp",
    "v115/images/southern_belle.webp",
    "v115/images/ssm_diagram.webp",
    "v115/images/surfing_girl_wild_and_free.webp",
    "v115/images/under_the_hood.webp",
    "v115/images/witch.webp",
    "v115/impressum.html",
    "v115/index.html",
    "v115/js/DiaryService.js",
    "v115/js/Director.js",
    "v115/js/Main 20260319_1300.js",
    "v115/js/Main.js",
    "v115/js/PickerDrum.js",
    "v115/js/Placeholder.js",
    "v115/js/Player.js",
    "v115/js/SongCollection.js",
    "v115/js/SongService.js",
    "v115/js/VersionCore.js",
    "v115/js/ffmpeg.min.js",
    "v115/js/lucide.js",
    "v115/js/tailwindcss.js",
    "v115/js/tex-mml-chtml.js",
    "v115/legal_notice.html",
    "v115/manifest.json",
    "v115/placeholder/footer.html",
    "v115/placeholder/header.html",
    "v115/privacy_policy.html"
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
