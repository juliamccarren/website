const STATIC_CACHE = 'julia-site-v112';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v112/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v112/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v112/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v112/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v112/artwork/a_slow_blossoming_rose.webp",
    "v112/artwork/alejandro.webp",
    "v112/artwork/alta_tensione.webp",
    "v112/artwork/antitoxic.webp",
    "v112/artwork/autumns_whisper.webp",
    "v112/artwork/avalanche.webp",
    "v112/artwork/betrayal.webp",
    "v112/artwork/big_dreams_shine.webp",
    "v112/artwork/big_dreams_shine_live.webp",
    "v112/artwork/bite_of_the_night.webp",
    "v112/artwork/black_cat_bones.webp",
    "v112/artwork/boring.webp",
    "v112/artwork/brainrot.webp",
    "v112/artwork/brooklyn.webp",
    "v112/artwork/buckn_the_bain.webp",
    "v112/artwork/buio_perfetto.webp",
    "v112/artwork/cheerleader.webp",
    "v112/artwork/coffee_in_amsterdam.webp",
    "v112/artwork/cool_fire.webp",
    "v112/artwork/dancing_on_your_grave.webp",
    "v112/artwork/date_disaster.webp",
    "v112/artwork/deep_blue.webp",
    "v112/artwork/deepdive_1.webp",
    "v112/artwork/deepdive_2.webp",
    "v112/artwork/default.webp",
    "v112/artwork/delta_blues.webp",
    "v112/artwork/digital_ghost.webp",
    "v112/artwork/disco_flashback.webp",
    "v112/artwork/disco_flashback_2.webp",
    "v112/artwork/disposable.webp",
    "v112/artwork/distortion.webp",
    "v112/artwork/drunk_not_dumb.webp",
    "v112/artwork/dynamite.webp",
    "v112/artwork/electric_hearts.webp",
    "v112/artwork/embers_and_sparks.webp",
    "v112/artwork/fences_down.webp",
    "v112/artwork/fire_in_my_veins.webp",
    "v112/artwork/first_steps_to_stardom.webp",
    "v112/artwork/fog_of_fear.webp",
    "v112/artwork/forever.webp",
    "v112/artwork/fornello_rosso.webp",
    "v112/artwork/four_chords_later.webp",
    "v112/artwork/friday_night.webp",
    "v112/artwork/from_first_steps_to_stardom.webp",
    "v112/artwork/frost_and_friction.webp",
    "v112/artwork/frozen_heart.webp",
    "v112/artwork/garage_band.webp",
    "v112/artwork/ghost_in_the_garden.webp",
    "v112/artwork/god_save_the_king.webp",
    "v112/artwork/golden_days.webp",
    "v112/artwork/good_enough.webp",
    "v112/artwork/happy_birthday_in_heaven.webp",
    "v112/artwork/haunted_haven.webp",
    "v112/artwork/heart_of_fire_and_ice.webp",
    "v112/artwork/her_first_truck.webp",
    "v112/artwork/hes_still_here.webp",
    "v112/artwork/hes_still_here_2026.webp",
    "v112/artwork/home_now.webp",
    "v112/artwork/howling_wolves.webp",
    "v112/artwork/hurricane.webp",
    "v112/artwork/hypocrites.webp",
    "v112/artwork/i_hate_you.webp",
    "v112/artwork/i_love_school.webp",
    "v112/artwork/i_scream.webp",
    "v112/artwork/insatiable.webp",
    "v112/artwork/insult_the_ones_you_love.webp",
    "v112/artwork/introverted_girl.webp",
    "v112/artwork/jet_set.webp",
    "v112/artwork/julia_and_friends.webp",
    "v112/artwork/just_a_vibe.webp",
    "v112/artwork/just_wants_to_be_loved.webp",
    "v112/artwork/last_exit.webp",
    "v112/artwork/left_lane_legend.webp",
    "v112/artwork/little_butterflies.webp",
    "v112/artwork/luce_rossa.webp",
    "v112/artwork/luck_for_granted.webp",
    "v112/artwork/maybe_they_knew.webp",
    "v112/artwork/mind_the_gap.webp",
    "v112/artwork/my_foundation.webp",
    "v112/artwork/my_sweet_little_star.webp",
    "v112/artwork/need_for_speed.webp",
    "v112/artwork/nice_girl.webp",
    "v112/artwork/one_in_a_quarter_billion.webp",
    "v112/artwork/one_pulse.webp",
    "v112/artwork/paradox_love.webp",
    "v112/artwork/password_expired.webp",
    "v112/artwork/password_expired_live.webp",
    "v112/artwork/pathetique.webp",
    "v112/artwork/peaks_of_gold.webp",
    "v112/artwork/play_it_again.webp",
    "v112/artwork/private_lake.webp",
    "v112/artwork/radio_trash.webp",
    "v112/artwork/regina_di_niente.webp",
    "v112/artwork/resti_qui.webp",
    "v112/artwork/ride_the_groove.webp",
    "v112/artwork/rocker_songwriter.webp",
    "v112/artwork/sailing_on_open_water.webp",
    "v112/artwork/sanctified_sinner.webp",
    "v112/artwork/sanctuary_riot.webp",
    "v112/artwork/schools_out.webp",
    "v112/artwork/set_the_spirit_free.webp",
    "v112/artwork/siblings.webp",
    "v112/artwork/skeleton_dance.webp",
    "v112/artwork/slippery_road.webp",
    "v112/artwork/social_lubricant.webp",
    "v112/artwork/soulmate.webp",
    "v112/artwork/southern_belle.webp",
    "v112/artwork/southern_heat.webp",
    "v112/artwork/southerns_eve.webp",
    "v112/artwork/spooky.webp",
    "v112/artwork/spring.webp",
    "v112/artwork/storm_of_the_abyss.webp",
    "v112/artwork/summers_farewell.webp",
    "v112/artwork/surfing_girl_wild_and_free.webp",
    "v112/artwork/tabby_gonzalez.webp",
    "v112/artwork/the_city_i_long_for.webp",
    "v112/artwork/the_dive.webp",
    "v112/artwork/the_hard_way.webp",
    "v112/artwork/the_hook.webp",
    "v112/artwork/the_quiet_kind.webp",
    "v112/artwork/the_rhythm_of_the_fox.webp",
    "v112/artwork/the_rhythm_of_you.webp",
    "v112/artwork/the_sharpened_bow.webp",
    "v112/artwork/the_sirens_anchor.webp",
    "v112/artwork/the_soft_return.webp",
    "v112/artwork/the_steel_winged_swan.webp",
    "v112/artwork/this_is_fine.webp",
    "v112/artwork/tide_on_stone.webp",
    "v112/artwork/toccata.webp",
    "v112/artwork/trick_or_treat.webp",
    "v112/artwork/uncaged.webp",
    "v112/artwork/upon_a_winding_trail.webp",
    "v112/artwork/venezia.webp",
    "v112/artwork/verona.webp",
    "v112/artwork/vetro_di_genova.webp",
    "v112/artwork/weekend.webp",
    "v112/artwork/whiteout.webp",
    "v112/artwork/winterstorm.webp",
    "v112/css/style 20260815_1400.css",
    "v112/css/style.css",
    "v112/datenschutz.html",
    "v112/essays/embeddings.html",
    "v112/essays/essay1.html",
    "v112/essays/gemini-code-1782138112807.html",
    "v112/essays/ssm.html",
    "v112/essays/transformers.html",
    "v112/images/Guitar-in-Dolomites.webp",
    "v112/images/Hero.webp",
    "v112/images/Hero_square.webp",
    "v112/images/Julia-skiing-Dolomites.webp",
    "v112/images/Stage_1.webp",
    "v112/images/Stage_2.webp",
    "v112/images/Stage_3.webp",
    "v112/images/Stage_4.webp",
    "v112/images/Stage_5.webp",
    "v112/images/Stage_6.webp",
    "v112/images/Stage_7.webp",
    "v112/images/Stage_8.webp",
    "v112/images/embeddings_music.webp",
    "v112/images/embeddings_words.webp",
    "v112/images/icons/app_icon_192.png",
    "v112/images/icons/app_icon_512.png",
    "v112/images/julia_embeddings.webp",
    "v112/images/julia_ssm_equations.webp",
    "v112/images/password_expired_live.webp",
    "v112/images/podcasts.webp",
    "v112/images/southern_belle.webp",
    "v112/images/ssm_diagram.webp",
    "v112/images/surfing_girl_wild_and_free.webp",
    "v112/images/under_the_hood.webp",
    "v112/images/witch.webp",
    "v112/impressum.html",
    "v112/index.html",
    "v112/js/DiaryService.js",
    "v112/js/Director.js",
    "v112/js/Main 20260319_1300.js",
    "v112/js/Main.js",
    "v112/js/PickerDrum.js",
    "v112/js/Placeholder.js",
    "v112/js/Player.js",
    "v112/js/SongCollection.js",
    "v112/js/SongService.js",
    "v112/js/VersionCore.js",
    "v112/js/ffmpeg.min.js",
    "v112/js/lucide.js",
    "v112/js/tailwindcss.js",
    "v112/js/tex-mml-chtml.js",
    "v112/legal_notice.html",
    "v112/manifest.json",
    "v112/placeholder/footer.html",
    "v112/placeholder/header.html",
    "v112/privacy_policy.html"
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
