const STATIC_CACHE = 'julia-site-v107';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v107/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v107/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v107/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v107/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v107/artwork/a_slow_blossoming_rose.webp",
    "v107/artwork/alejandro.webp",
    "v107/artwork/antitoxic.webp",
    "v107/artwork/autumns_whisper.webp",
    "v107/artwork/avalanche.webp",
    "v107/artwork/betrayal.webp",
    "v107/artwork/big_dreams_shine.webp",
    "v107/artwork/big_dreams_shine_live.webp",
    "v107/artwork/bite_of_the_night.webp",
    "v107/artwork/black_cat_bones.webp",
    "v107/artwork/boring.webp",
    "v107/artwork/brainrot.webp",
    "v107/artwork/brooklyn.webp",
    "v107/artwork/buckn_the_bain.webp",
    "v107/artwork/cheerleader.webp",
    "v107/artwork/coffee_in_amsterdam.webp",
    "v107/artwork/cool_fire.webp",
    "v107/artwork/dancing_on_your_grave.webp",
    "v107/artwork/date_disaster.webp",
    "v107/artwork/deep_blue.webp",
    "v107/artwork/deepdive_1.webp",
    "v107/artwork/deepdive_2.webp",
    "v107/artwork/default.webp",
    "v107/artwork/delta_blues.webp",
    "v107/artwork/digital_ghost.webp",
    "v107/artwork/disco_flashback.webp",
    "v107/artwork/disco_flashback_2.webp",
    "v107/artwork/disposable.webp",
    "v107/artwork/distortion.webp",
    "v107/artwork/drunk_not_dumb.webp",
    "v107/artwork/dynamite.webp",
    "v107/artwork/electric_hearts.webp",
    "v107/artwork/embers_and_sparks.webp",
    "v107/artwork/fences_down.webp",
    "v107/artwork/fire_in_my_veins.webp",
    "v107/artwork/first_steps_to_stardom.webp",
    "v107/artwork/fog_of_fear.webp",
    "v107/artwork/forever.webp",
    "v107/artwork/fornello_rosso.webp",
    "v107/artwork/four_chords_later.webp",
    "v107/artwork/friday_night.webp",
    "v107/artwork/from_first_steps_to_stardom.webp",
    "v107/artwork/frost_and_friction.webp",
    "v107/artwork/frozen_heart.webp",
    "v107/artwork/garage_band.webp",
    "v107/artwork/ghost_in_the_garden.webp",
    "v107/artwork/god_save_the_king.webp",
    "v107/artwork/golden_days.webp",
    "v107/artwork/good_enough.webp",
    "v107/artwork/happy_birthday_in_heaven.webp",
    "v107/artwork/haunted_haven.webp",
    "v107/artwork/heart_of_fire_and_ice.webp",
    "v107/artwork/her_first_truck.webp",
    "v107/artwork/hes_still_here.webp",
    "v107/artwork/home_now.webp",
    "v107/artwork/howling_wolves.webp",
    "v107/artwork/hurricane.webp",
    "v107/artwork/hypocrites.webp",
    "v107/artwork/i_hate_you.webp",
    "v107/artwork/i_love_school.webp",
    "v107/artwork/i_scream.webp",
    "v107/artwork/insatiable.webp",
    "v107/artwork/insult_the_ones_you_love.webp",
    "v107/artwork/introverted_girl.webp",
    "v107/artwork/jet_set.webp",
    "v107/artwork/julia_and_friends.webp",
    "v107/artwork/just_a_vibe.webp",
    "v107/artwork/just_wants_to_be_loved.webp",
    "v107/artwork/last_exit.webp",
    "v107/artwork/left_lane_legend.webp",
    "v107/artwork/little_butterflies.webp",
    "v107/artwork/luck_for_granted.webp",
    "v107/artwork/maybe_they_knew.webp",
    "v107/artwork/mind_the_gap.webp",
    "v107/artwork/my_foundation.webp",
    "v107/artwork/my_sweet_little_star.webp",
    "v107/artwork/need_for_speed.webp",
    "v107/artwork/nice_girl.webp",
    "v107/artwork/one_in_a_quarter_billion.webp",
    "v107/artwork/one_pulse.webp",
    "v107/artwork/paradox_love.webp",
    "v107/artwork/password_expired.webp",
    "v107/artwork/password_expired_live.webp",
    "v107/artwork/pathetique.webp",
    "v107/artwork/peaks_of_gold.webp",
    "v107/artwork/play_it_again.webp",
    "v107/artwork/private_lake.webp",
    "v107/artwork/radio_trash.webp",
    "v107/artwork/resti_qui.webp",
    "v107/artwork/ride_the_groove.webp",
    "v107/artwork/rocker_songwriter.webp",
    "v107/artwork/sailing_on_open_water.webp",
    "v107/artwork/sanctified_sinner.webp",
    "v107/artwork/sanctuary_riot.webp",
    "v107/artwork/schools_out.webp",
    "v107/artwork/set_the_spirit_free.webp",
    "v107/artwork/siblings.webp",
    "v107/artwork/skeleton_dance.webp",
    "v107/artwork/slippery_road.webp",
    "v107/artwork/social_lubricant.webp",
    "v107/artwork/soulmate.webp",
    "v107/artwork/southern_belle.webp",
    "v107/artwork/southern_heat.webp",
    "v107/artwork/southerns_eve.webp",
    "v107/artwork/spooky.webp",
    "v107/artwork/spring.webp",
    "v107/artwork/storm_of_the_abyss.webp",
    "v107/artwork/summers_farewell.webp",
    "v107/artwork/surfing_girl_wild_and_free.webp",
    "v107/artwork/tabby_gonzalez.webp",
    "v107/artwork/the_city_i_long_for.webp",
    "v107/artwork/the_dive.webp",
    "v107/artwork/the_hard_way.webp",
    "v107/artwork/the_hook.webp",
    "v107/artwork/the_quiet_kind.webp",
    "v107/artwork/the_rhythm_of_the_fox.webp",
    "v107/artwork/the_rhythm_of_you.webp",
    "v107/artwork/the_sharpened_bow.webp",
    "v107/artwork/the_sirens_anchor.webp",
    "v107/artwork/the_soft_return.webp",
    "v107/artwork/the_steel_winged_swan.webp",
    "v107/artwork/this_is_fine.webp",
    "v107/artwork/tide_on_stone.webp",
    "v107/artwork/toccata.webp",
    "v107/artwork/trick_or_treat.webp",
    "v107/artwork/uncaged.webp",
    "v107/artwork/upon_a_winding_trail.webp",
    "v107/artwork/venezia.webp",
    "v107/artwork/verona.webp",
    "v107/artwork/vetro_di_genova.webp",
    "v107/artwork/weekend.webp",
    "v107/artwork/whiteout.webp",
    "v107/artwork/winterstorm.webp",
    "v107/css/style 20260815_1400.css",
    "v107/css/style.css",
    "v107/datenschutz.html",
    "v107/essays/embeddings.html",
    "v107/essays/essay1.html",
    "v107/essays/gemini-code-1782138112807.html",
    "v107/essays/ssm.html",
    "v107/essays/transformers.html",
    "v107/images/Guitar-in-Dolomites.webp",
    "v107/images/Hero.webp",
    "v107/images/Hero_square.webp",
    "v107/images/Julia-skiing-Dolomites.webp",
    "v107/images/Stage_1.webp",
    "v107/images/Stage_2.webp",
    "v107/images/Stage_3.webp",
    "v107/images/Stage_4.webp",
    "v107/images/Stage_5.webp",
    "v107/images/Stage_6.webp",
    "v107/images/Stage_7.webp",
    "v107/images/Stage_8.webp",
    "v107/images/embeddings_music.webp",
    "v107/images/embeddings_words.webp",
    "v107/images/icons/app_icon_192.png",
    "v107/images/icons/app_icon_512.png",
    "v107/images/julia_embeddings.webp",
    "v107/images/julia_ssm_equations.webp",
    "v107/images/password_expired_live.webp",
    "v107/images/podcasts.webp",
    "v107/images/southern_belle.webp",
    "v107/images/ssm_diagram.webp",
    "v107/images/surfing_girl_wild_and_free.webp",
    "v107/images/under_the_hood.webp",
    "v107/images/witch.webp",
    "v107/impressum.html",
    "v107/index.html",
    "v107/js/DiaryService.js",
    "v107/js/Director.js",
    "v107/js/Main 20260319_1300.js",
    "v107/js/Main.js",
    "v107/js/PickerDrum.js",
    "v107/js/Placeholder.js",
    "v107/js/Player.js",
    "v107/js/SongCollection.js",
    "v107/js/SongService.js",
    "v107/js/VersionCore.js",
    "v107/js/ffmpeg.min.js",
    "v107/js/lucide.js",
    "v107/js/tailwindcss.js",
    "v107/js/tex-mml-chtml.js",
    "v107/legal_notice.html",
    "v107/manifest.json",
    "v107/placeholder/footer.html",
    "v107/placeholder/header.html",
    "v107/privacy_policy.html"
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
