const STATIC_CACHE = 'julia-site-v108';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v108/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v108/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v108/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v108/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v108/artwork/a_slow_blossoming_rose.webp",
    "v108/artwork/alejandro.webp",
    "v108/artwork/alta_tensione.webp",
    "v108/artwork/antitoxic.webp",
    "v108/artwork/autumns_whisper.webp",
    "v108/artwork/avalanche.webp",
    "v108/artwork/betrayal.webp",
    "v108/artwork/big_dreams_shine.webp",
    "v108/artwork/big_dreams_shine_live.webp",
    "v108/artwork/bite_of_the_night.webp",
    "v108/artwork/black_cat_bones.webp",
    "v108/artwork/boring.webp",
    "v108/artwork/brainrot.webp",
    "v108/artwork/brooklyn.webp",
    "v108/artwork/buckn_the_bain.webp",
    "v108/artwork/cheerleader.webp",
    "v108/artwork/coffee_in_amsterdam.webp",
    "v108/artwork/cool_fire.webp",
    "v108/artwork/dancing_on_your_grave.webp",
    "v108/artwork/date_disaster.webp",
    "v108/artwork/deep_blue.webp",
    "v108/artwork/deepdive_1.webp",
    "v108/artwork/deepdive_2.webp",
    "v108/artwork/default.webp",
    "v108/artwork/delta_blues.webp",
    "v108/artwork/digital_ghost.webp",
    "v108/artwork/disco_flashback.webp",
    "v108/artwork/disco_flashback_2.webp",
    "v108/artwork/disposable.webp",
    "v108/artwork/distortion.webp",
    "v108/artwork/drunk_not_dumb.webp",
    "v108/artwork/dynamite.webp",
    "v108/artwork/electric_hearts.webp",
    "v108/artwork/embers_and_sparks.webp",
    "v108/artwork/fences_down.webp",
    "v108/artwork/fire_in_my_veins.webp",
    "v108/artwork/first_steps_to_stardom.webp",
    "v108/artwork/fog_of_fear.webp",
    "v108/artwork/forever.webp",
    "v108/artwork/fornello_rosso.webp",
    "v108/artwork/four_chords_later.webp",
    "v108/artwork/friday_night.webp",
    "v108/artwork/from_first_steps_to_stardom.webp",
    "v108/artwork/frost_and_friction.webp",
    "v108/artwork/frozen_heart.webp",
    "v108/artwork/garage_band.webp",
    "v108/artwork/ghost_in_the_garden.webp",
    "v108/artwork/god_save_the_king.webp",
    "v108/artwork/golden_days.webp",
    "v108/artwork/good_enough.webp",
    "v108/artwork/happy_birthday_in_heaven.webp",
    "v108/artwork/haunted_haven.webp",
    "v108/artwork/heart_of_fire_and_ice.webp",
    "v108/artwork/her_first_truck.webp",
    "v108/artwork/hes_still_here.webp",
    "v108/artwork/home_now.webp",
    "v108/artwork/howling_wolves.webp",
    "v108/artwork/hurricane.webp",
    "v108/artwork/hypocrites.webp",
    "v108/artwork/i_hate_you.webp",
    "v108/artwork/i_love_school.webp",
    "v108/artwork/i_scream.webp",
    "v108/artwork/insatiable.webp",
    "v108/artwork/insult_the_ones_you_love.webp",
    "v108/artwork/introverted_girl.webp",
    "v108/artwork/jet_set.webp",
    "v108/artwork/julia_and_friends.webp",
    "v108/artwork/just_a_vibe.webp",
    "v108/artwork/just_wants_to_be_loved.webp",
    "v108/artwork/last_exit.webp",
    "v108/artwork/left_lane_legend.webp",
    "v108/artwork/little_butterflies.webp",
    "v108/artwork/luck_for_granted.webp",
    "v108/artwork/maybe_they_knew.webp",
    "v108/artwork/mind_the_gap.webp",
    "v108/artwork/my_foundation.webp",
    "v108/artwork/my_sweet_little_star.webp",
    "v108/artwork/need_for_speed.webp",
    "v108/artwork/nice_girl.webp",
    "v108/artwork/one_in_a_quarter_billion.webp",
    "v108/artwork/one_pulse.webp",
    "v108/artwork/paradox_love.webp",
    "v108/artwork/password_expired.webp",
    "v108/artwork/password_expired_live.webp",
    "v108/artwork/pathetique.webp",
    "v108/artwork/peaks_of_gold.webp",
    "v108/artwork/play_it_again.webp",
    "v108/artwork/private_lake.webp",
    "v108/artwork/radio_trash.webp",
    "v108/artwork/resti_qui.webp",
    "v108/artwork/ride_the_groove.webp",
    "v108/artwork/rocker_songwriter.webp",
    "v108/artwork/sailing_on_open_water.webp",
    "v108/artwork/sanctified_sinner.webp",
    "v108/artwork/sanctuary_riot.webp",
    "v108/artwork/schools_out.webp",
    "v108/artwork/set_the_spirit_free.webp",
    "v108/artwork/siblings.webp",
    "v108/artwork/skeleton_dance.webp",
    "v108/artwork/slippery_road.webp",
    "v108/artwork/social_lubricant.webp",
    "v108/artwork/soulmate.webp",
    "v108/artwork/southern_belle.webp",
    "v108/artwork/southern_heat.webp",
    "v108/artwork/southerns_eve.webp",
    "v108/artwork/spooky.webp",
    "v108/artwork/spring.webp",
    "v108/artwork/storm_of_the_abyss.webp",
    "v108/artwork/summers_farewell.webp",
    "v108/artwork/surfing_girl_wild_and_free.webp",
    "v108/artwork/tabby_gonzalez.webp",
    "v108/artwork/the_city_i_long_for.webp",
    "v108/artwork/the_dive.webp",
    "v108/artwork/the_hard_way.webp",
    "v108/artwork/the_hook.webp",
    "v108/artwork/the_quiet_kind.webp",
    "v108/artwork/the_rhythm_of_the_fox.webp",
    "v108/artwork/the_rhythm_of_you.webp",
    "v108/artwork/the_sharpened_bow.webp",
    "v108/artwork/the_sirens_anchor.webp",
    "v108/artwork/the_soft_return.webp",
    "v108/artwork/the_steel_winged_swan.webp",
    "v108/artwork/this_is_fine.webp",
    "v108/artwork/tide_on_stone.webp",
    "v108/artwork/toccata.webp",
    "v108/artwork/trick_or_treat.webp",
    "v108/artwork/uncaged.webp",
    "v108/artwork/upon_a_winding_trail.webp",
    "v108/artwork/venezia.webp",
    "v108/artwork/verona.webp",
    "v108/artwork/vetro_di_genova.webp",
    "v108/artwork/weekend.webp",
    "v108/artwork/whiteout.webp",
    "v108/artwork/winterstorm.webp",
    "v108/css/style 20260815_1400.css",
    "v108/css/style.css",
    "v108/datenschutz.html",
    "v108/essays/embeddings.html",
    "v108/essays/essay1.html",
    "v108/essays/gemini-code-1782138112807.html",
    "v108/essays/ssm.html",
    "v108/essays/transformers.html",
    "v108/images/Guitar-in-Dolomites.webp",
    "v108/images/Hero.webp",
    "v108/images/Hero_square.webp",
    "v108/images/Julia-skiing-Dolomites.webp",
    "v108/images/Stage_1.webp",
    "v108/images/Stage_2.webp",
    "v108/images/Stage_3.webp",
    "v108/images/Stage_4.webp",
    "v108/images/Stage_5.webp",
    "v108/images/Stage_6.webp",
    "v108/images/Stage_7.webp",
    "v108/images/Stage_8.webp",
    "v108/images/embeddings_music.webp",
    "v108/images/embeddings_words.webp",
    "v108/images/icons/app_icon_192.png",
    "v108/images/icons/app_icon_512.png",
    "v108/images/julia_embeddings.webp",
    "v108/images/julia_ssm_equations.webp",
    "v108/images/password_expired_live.webp",
    "v108/images/podcasts.webp",
    "v108/images/southern_belle.webp",
    "v108/images/ssm_diagram.webp",
    "v108/images/surfing_girl_wild_and_free.webp",
    "v108/images/under_the_hood.webp",
    "v108/images/witch.webp",
    "v108/impressum.html",
    "v108/index.html",
    "v108/js/DiaryService.js",
    "v108/js/Director.js",
    "v108/js/Main 20260319_1300.js",
    "v108/js/Main.js",
    "v108/js/PickerDrum.js",
    "v108/js/Placeholder.js",
    "v108/js/Player.js",
    "v108/js/SongCollection.js",
    "v108/js/SongService.js",
    "v108/js/VersionCore.js",
    "v108/js/ffmpeg.min.js",
    "v108/js/lucide.js",
    "v108/js/tailwindcss.js",
    "v108/js/tex-mml-chtml.js",
    "v108/legal_notice.html",
    "v108/manifest.json",
    "v108/placeholder/footer.html",
    "v108/placeholder/header.html",
    "v108/privacy_policy.html"
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
