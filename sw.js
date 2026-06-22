const STATIC_CACHE = 'julia-site-v92';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v92/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v92/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v92/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v92/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v92/artwork/a_slow_blossoming_rose.webp",
    "v92/artwork/alejandro.webp",
    "v92/artwork/antitoxic.webp",
    "v92/artwork/autumns_whisper.webp",
    "v92/artwork/avalanche.webp",
    "v92/artwork/betrayal.webp",
    "v92/artwork/big_dreams_shine.webp",
    "v92/artwork/big_dreams_shine_live.webp",
    "v92/artwork/bite_of_the_night.webp",
    "v92/artwork/boring.webp",
    "v92/artwork/brooklyn.webp",
    "v92/artwork/buckn_the_bain.webp",
    "v92/artwork/cheerleader.webp",
    "v92/artwork/coffee_in_amsterdam.webp",
    "v92/artwork/cool_fire.webp",
    "v92/artwork/date_disaster.webp",
    "v92/artwork/deep_blue.webp",
    "v92/artwork/deepdive_1.webp",
    "v92/artwork/deepdive_2.webp",
    "v92/artwork/default.webp",
    "v92/artwork/delta_blues.webp",
    "v92/artwork/digital_ghost.webp",
    "v92/artwork/disco_flashback.webp",
    "v92/artwork/disco_flashback_2.webp",
    "v92/artwork/disposable.webp",
    "v92/artwork/distortion.webp",
    "v92/artwork/drunk_not_dumb.webp",
    "v92/artwork/dynamite.webp",
    "v92/artwork/electric_hearts.webp",
    "v92/artwork/embers_and_sparks.webp",
    "v92/artwork/fences_down.webp",
    "v92/artwork/first_steps_to_stardom.webp",
    "v92/artwork/fog_of_fear.webp",
    "v92/artwork/forever.webp",
    "v92/artwork/four_chords_later.webp",
    "v92/artwork/friday_night.webp",
    "v92/artwork/from_first_steps_to_stardom.webp",
    "v92/artwork/frost_and_friction.webp",
    "v92/artwork/frozen_heart.webp",
    "v92/artwork/garage_band.webp",
    "v92/artwork/ghost_in_the_garden.webp",
    "v92/artwork/god_save_the_king.webp",
    "v92/artwork/golden_days.webp",
    "v92/artwork/good_enough.webp",
    "v92/artwork/happy_birthday_in_heaven.webp",
    "v92/artwork/haunted_haven.webp",
    "v92/artwork/heart_of_fire_and_ice.webp",
    "v92/artwork/her_first_truck.webp",
    "v92/artwork/hes_still_here.webp",
    "v92/artwork/home_now.webp",
    "v92/artwork/howling_wolves.webp",
    "v92/artwork/hypocrites.webp",
    "v92/artwork/i_hate_you.webp",
    "v92/artwork/i_love_school.webp",
    "v92/artwork/i_scream.webp",
    "v92/artwork/insatiable.webp",
    "v92/artwork/insult_the_ones_you_love.webp",
    "v92/artwork/introverted_girl.webp",
    "v92/artwork/jet_set.webp",
    "v92/artwork/julia_and_friends.webp",
    "v92/artwork/just_a_vibe.webp",
    "v92/artwork/just_wants_to_be_loved.webp",
    "v92/artwork/last_exit.webp",
    "v92/artwork/left_lane_legend.webp",
    "v92/artwork/little_butterflies.webp",
    "v92/artwork/luck_for_granted.webp",
    "v92/artwork/maybe_they_knew.webp",
    "v92/artwork/mind_the_gap.webp",
    "v92/artwork/my_foundation.webp",
    "v92/artwork/my_sweet_little_star.webp",
    "v92/artwork/need_for_speed.webp",
    "v92/artwork/nice_girl.webp",
    "v92/artwork/one_in_a_quarter_billion.webp",
    "v92/artwork/paradox_love.webp",
    "v92/artwork/password_expired.webp",
    "v92/artwork/password_expired_live.webp",
    "v92/artwork/peaks_of_gold.webp",
    "v92/artwork/private_lake.webp",
    "v92/artwork/radio_trash.webp",
    "v92/artwork/ride_the_groove.webp",
    "v92/artwork/rocker_songwriter.webp",
    "v92/artwork/sailing_on_open_water.webp",
    "v92/artwork/sanctified_sinner.webp",
    "v92/artwork/sanctuary_riot.webp",
    "v92/artwork/schools_out.webp",
    "v92/artwork/set_the_spirit_free.webp",
    "v92/artwork/siblings.webp",
    "v92/artwork/skeleton_dance.webp",
    "v92/artwork/slippery_road.webp",
    "v92/artwork/social_lubricant.webp",
    "v92/artwork/soulmate.webp",
    "v92/artwork/southern_belle.webp",
    "v92/artwork/southerns_eve.webp",
    "v92/artwork/spooky.webp",
    "v92/artwork/spring.webp",
    "v92/artwork/storm_of_the_abyss.webp",
    "v92/artwork/summers_farewell.webp",
    "v92/artwork/tabby_gonzalez.webp",
    "v92/artwork/the_city_i_long_for.webp",
    "v92/artwork/the_dive.webp",
    "v92/artwork/the_hard_way.webp",
    "v92/artwork/the_hook.webp",
    "v92/artwork/the_quiet_kind.webp",
    "v92/artwork/the_rhythm_of_the_fox.webp",
    "v92/artwork/the_rhythm_of_you.webp",
    "v92/artwork/the_sharpened_bow.webp",
    "v92/artwork/the_sirens_anchor.webp",
    "v92/artwork/the_soft_return.webp",
    "v92/artwork/the_steel_winged_swan.webp",
    "v92/artwork/this_is_fine.webp",
    "v92/artwork/tide_on_stone.webp",
    "v92/artwork/toccata.webp",
    "v92/artwork/trick_or_treat.webp",
    "v92/artwork/uncaged.webp",
    "v92/artwork/upon_a_winding_trail.webp",
    "v92/artwork/venezia.webp",
    "v92/artwork/verona.webp",
    "v92/artwork/weekend.webp",
    "v92/artwork/whiteout.webp",
    "v92/artwork/winterstorm.webp",
    "v92/css/style.css",
    "v92/datenschutz.html",
    "v92/essays/embeddings.html",
    "v92/essays/essay1.html",
    "v92/essays/ssm.html",
    "v92/images/Guitar-in-Dolomites.webp",
    "v92/images/Hero.webp",
    "v92/images/Hero_square.webp",
    "v92/images/Julia-skiing-Dolomites.webp",
    "v92/images/Stage_1.webp",
    "v92/images/Stage_2.webp",
    "v92/images/Stage_3.webp",
    "v92/images/Stage_4.webp",
    "v92/images/Stage_5.webp",
    "v92/images/Stage_6.webp",
    "v92/images/Stage_7.webp",
    "v92/images/Stage_8.webp",
    "v92/images/embeddings_music.webp",
    "v92/images/embeddings_words.webp",
    "v92/images/icons/app_icon_192.png",
    "v92/images/icons/app_icon_512.png",
    "v92/images/julia_embeddings.webp",
    "v92/images/julia_ssm_equations.webp",
    "v92/images/password_expired_live.webp",
    "v92/images/podcasts.webp",
    "v92/images/southern_belle.webp",
    "v92/images/ssm_diagram.webp",
    "v92/impressum.html",
    "v92/index.html",
    "v92/js/DiaryService.js",
    "v92/js/Director.js",
    "v92/js/Main 20260319_1300.js",
    "v92/js/Main.js",
    "v92/js/PickerDrum.js",
    "v92/js/Placeholder.js",
    "v92/js/Player 20260319_1300.js",
    "v92/js/Player.js",
    "v92/js/SongCollection 20260319_1400.js",
    "v92/js/SongCollection.js",
    "v92/js/SongService.js",
    "v92/js/VersionCore.js",
    "v92/js/ffmpeg.min.js",
    "v92/js/lucide.js",
    "v92/js/tailwindcss.js",
    "v92/legal_notice.html",
    "v92/manifest.json",
    "v92/placeholder/footer.html",
    "v92/placeholder/header.html",
    "v92/privacy_policy.html"
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
