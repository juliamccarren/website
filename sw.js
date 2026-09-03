const STATIC_CACHE = 'julia-site-v113';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v113/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v113/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v113/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v113/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v113/artwork/a_slow_blossoming_rose.webp",
    "v113/artwork/alejandro.webp",
    "v113/artwork/alta_tensione.webp",
    "v113/artwork/antitoxic.webp",
    "v113/artwork/autumns_whisper.webp",
    "v113/artwork/avalanche.webp",
    "v113/artwork/betrayal.webp",
    "v113/artwork/big_dreams_shine.webp",
    "v113/artwork/big_dreams_shine_live.webp",
    "v113/artwork/bite_of_the_night.webp",
    "v113/artwork/black_cat_bones.webp",
    "v113/artwork/boring.webp",
    "v113/artwork/brainrot.webp",
    "v113/artwork/brooklyn.webp",
    "v113/artwork/buckn_the_bain.webp",
    "v113/artwork/buio_perfetto.webp",
    "v113/artwork/cheerleader.webp",
    "v113/artwork/coffee_in_amsterdam.webp",
    "v113/artwork/cool_fire.webp",
    "v113/artwork/dancing_on_your_grave.webp",
    "v113/artwork/date_disaster.webp",
    "v113/artwork/deep_blue.webp",
    "v113/artwork/deepdive_1.webp",
    "v113/artwork/deepdive_2.webp",
    "v113/artwork/default.webp",
    "v113/artwork/delta_blues.webp",
    "v113/artwork/digital_ghost.webp",
    "v113/artwork/disco_flashback.webp",
    "v113/artwork/disco_flashback_2.webp",
    "v113/artwork/disposable.webp",
    "v113/artwork/distortion.webp",
    "v113/artwork/drunk_not_dumb.webp",
    "v113/artwork/dynamite.webp",
    "v113/artwork/electric_hearts.webp",
    "v113/artwork/embers_and_sparks.webp",
    "v113/artwork/fences_down.webp",
    "v113/artwork/fire_in_my_veins.webp",
    "v113/artwork/first_steps_to_stardom.webp",
    "v113/artwork/fog_of_fear.webp",
    "v113/artwork/forever.webp",
    "v113/artwork/fornello_rosso.webp",
    "v113/artwork/four_chords_later.webp",
    "v113/artwork/friday_night.webp",
    "v113/artwork/from_first_steps_to_stardom.webp",
    "v113/artwork/frost_and_friction.webp",
    "v113/artwork/frozen_heart.webp",
    "v113/artwork/fuori_dai_piedi.webp",
    "v113/artwork/garage_band.webp",
    "v113/artwork/ghost_in_the_garden.webp",
    "v113/artwork/god_save_the_king.webp",
    "v113/artwork/golden_days.webp",
    "v113/artwork/good_enough.webp",
    "v113/artwork/happy_birthday_in_heaven.webp",
    "v113/artwork/haunted_haven.webp",
    "v113/artwork/heart_of_fire_and_ice.webp",
    "v113/artwork/her_first_truck.webp",
    "v113/artwork/hes_still_here.webp",
    "v113/artwork/hes_still_here_2026.webp",
    "v113/artwork/home_now.webp",
    "v113/artwork/howling_wolves.webp",
    "v113/artwork/hurricane.webp",
    "v113/artwork/hypocrites.webp",
    "v113/artwork/i_hate_you.webp",
    "v113/artwork/i_love_school.webp",
    "v113/artwork/i_scream.webp",
    "v113/artwork/i_tuoi_piccoli_disordini.webp",
    "v113/artwork/insatiable.webp",
    "v113/artwork/insult_the_ones_you_love.webp",
    "v113/artwork/introverted_girl.webp",
    "v113/artwork/jet_set.webp",
    "v113/artwork/julia_and_friends.webp",
    "v113/artwork/just_a_vibe.webp",
    "v113/artwork/just_wants_to_be_loved.webp",
    "v113/artwork/last_exit.webp",
    "v113/artwork/left_lane_legend.webp",
    "v113/artwork/little_butterflies.webp",
    "v113/artwork/luce_rossa.webp",
    "v113/artwork/luck_for_granted.webp",
    "v113/artwork/maybe_they_knew.webp",
    "v113/artwork/mind_the_gap.webp",
    "v113/artwork/my_foundation.webp",
    "v113/artwork/my_sweet_little_star.webp",
    "v113/artwork/need_for_speed.webp",
    "v113/artwork/nice_girl.webp",
    "v113/artwork/one_in_a_quarter_billion.webp",
    "v113/artwork/one_pulse.webp",
    "v113/artwork/paradox_love.webp",
    "v113/artwork/password_expired.webp",
    "v113/artwork/password_expired_live.webp",
    "v113/artwork/pathetique.webp",
    "v113/artwork/peaks_of_gold.webp",
    "v113/artwork/play_it_again.webp",
    "v113/artwork/private_lake.webp",
    "v113/artwork/radio_trash.webp",
    "v113/artwork/regina_di_niente.webp",
    "v113/artwork/resti_qui.webp",
    "v113/artwork/ride_the_groove.webp",
    "v113/artwork/rocker_songwriter.webp",
    "v113/artwork/sailing_on_open_water.webp",
    "v113/artwork/sanctified_sinner.webp",
    "v113/artwork/sanctuary_riot.webp",
    "v113/artwork/schools_out.webp",
    "v113/artwork/set_the_spirit_free.webp",
    "v113/artwork/siblings.webp",
    "v113/artwork/skeleton_dance.webp",
    "v113/artwork/slippery_road.webp",
    "v113/artwork/social_lubricant.webp",
    "v113/artwork/soulmate.webp",
    "v113/artwork/southern_belle.webp",
    "v113/artwork/southern_heat.webp",
    "v113/artwork/southerns_eve.webp",
    "v113/artwork/spooky.webp",
    "v113/artwork/spring.webp",
    "v113/artwork/storm_of_the_abyss.webp",
    "v113/artwork/summers_farewell.webp",
    "v113/artwork/surfing_girl_wild_and_free.webp",
    "v113/artwork/tabby_gonzalez.webp",
    "v113/artwork/the_city_i_long_for.webp",
    "v113/artwork/the_dive.webp",
    "v113/artwork/the_hard_way.webp",
    "v113/artwork/the_hook.webp",
    "v113/artwork/the_quiet_kind.webp",
    "v113/artwork/the_rhythm_of_the_fox.webp",
    "v113/artwork/the_rhythm_of_you.webp",
    "v113/artwork/the_sharpened_bow.webp",
    "v113/artwork/the_sirens_anchor.webp",
    "v113/artwork/the_soft_return.webp",
    "v113/artwork/the_steel_winged_swan.webp",
    "v113/artwork/this_is_fine.webp",
    "v113/artwork/tide_on_stone.webp",
    "v113/artwork/toccata.webp",
    "v113/artwork/trick_or_treat.webp",
    "v113/artwork/uncaged.webp",
    "v113/artwork/upon_a_winding_trail.webp",
    "v113/artwork/venezia.webp",
    "v113/artwork/verona.webp",
    "v113/artwork/vetro_di_genova.webp",
    "v113/artwork/weekend.webp",
    "v113/artwork/whiteout.webp",
    "v113/artwork/winterstorm.webp",
    "v113/css/style 20260815_1400.css",
    "v113/css/style.css",
    "v113/datenschutz.html",
    "v113/essays/embeddings.html",
    "v113/essays/essay1.html",
    "v113/essays/gemini-code-1782138112807.html",
    "v113/essays/ssm.html",
    "v113/essays/transformers.html",
    "v113/images/Guitar-in-Dolomites.webp",
    "v113/images/Hero.webp",
    "v113/images/Hero_square.webp",
    "v113/images/Julia-skiing-Dolomites.webp",
    "v113/images/Stage_1.webp",
    "v113/images/Stage_2.webp",
    "v113/images/Stage_3.webp",
    "v113/images/Stage_4.webp",
    "v113/images/Stage_5.webp",
    "v113/images/Stage_6.webp",
    "v113/images/Stage_7.webp",
    "v113/images/Stage_8.webp",
    "v113/images/embeddings_music.webp",
    "v113/images/embeddings_words.webp",
    "v113/images/icons/app_icon_192.png",
    "v113/images/icons/app_icon_512.png",
    "v113/images/julia_embeddings.webp",
    "v113/images/julia_ssm_equations.webp",
    "v113/images/password_expired_live.webp",
    "v113/images/podcasts.webp",
    "v113/images/southern_belle.webp",
    "v113/images/ssm_diagram.webp",
    "v113/images/surfing_girl_wild_and_free.webp",
    "v113/images/under_the_hood.webp",
    "v113/images/witch.webp",
    "v113/impressum.html",
    "v113/index.html",
    "v113/js/DiaryService.js",
    "v113/js/Director.js",
    "v113/js/Main 20260319_1300.js",
    "v113/js/Main.js",
    "v113/js/PickerDrum.js",
    "v113/js/Placeholder.js",
    "v113/js/Player.js",
    "v113/js/SongCollection.js",
    "v113/js/SongService.js",
    "v113/js/VersionCore.js",
    "v113/js/ffmpeg.min.js",
    "v113/js/lucide.js",
    "v113/js/tailwindcss.js",
    "v113/js/tex-mml-chtml.js",
    "v113/legal_notice.html",
    "v113/manifest.json",
    "v113/placeholder/footer.html",
    "v113/placeholder/header.html",
    "v113/privacy_policy.html"
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
