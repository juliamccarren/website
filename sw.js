const STATIC_CACHE = 'julia-site-v90';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v90/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v90/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v90/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v90/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v90/artwork/a_slow_blossoming_rose.webp",
    "v90/artwork/alejandro.webp",
    "v90/artwork/antitoxic.webp",
    "v90/artwork/autumns_whisper.webp",
    "v90/artwork/avalanche.webp",
    "v90/artwork/betrayal.webp",
    "v90/artwork/big_dreams_shine.webp",
    "v90/artwork/big_dreams_shine_live.webp",
    "v90/artwork/bite_of_the_night.webp",
    "v90/artwork/boring.webp",
    "v90/artwork/brooklyn.webp",
    "v90/artwork/buckn_the_bain.webp",
    "v90/artwork/cheerleader.webp",
    "v90/artwork/coffee_in_amsterdam.webp",
    "v90/artwork/cool_fire.webp",
    "v90/artwork/date_disaster.webp",
    "v90/artwork/deep_blue.webp",
    "v90/artwork/deepdive_1.webp",
    "v90/artwork/deepdive_2.webp",
    "v90/artwork/default.webp",
    "v90/artwork/digital_ghost.webp",
    "v90/artwork/disco_flashback.webp",
    "v90/artwork/disco_flashback_2.webp",
    "v90/artwork/disposable.webp",
    "v90/artwork/distortion.webp",
    "v90/artwork/drunk_not_dumb.webp",
    "v90/artwork/dynamite.webp",
    "v90/artwork/electric_hearts.webp",
    "v90/artwork/embers_and_sparks.webp",
    "v90/artwork/fences_down.webp",
    "v90/artwork/first_steps_to_stardom.webp",
    "v90/artwork/fog_of_fear.webp",
    "v90/artwork/forever.webp",
    "v90/artwork/four_chords_later.webp",
    "v90/artwork/friday_night.webp",
    "v90/artwork/from_first_steps_to_stardom.webp",
    "v90/artwork/frost_and_friction.webp",
    "v90/artwork/frozen_heart.webp",
    "v90/artwork/garage_band.webp",
    "v90/artwork/ghost_in_the_garden.webp",
    "v90/artwork/god_save_the_king.webp",
    "v90/artwork/golden_days.webp",
    "v90/artwork/good_enough.webp",
    "v90/artwork/happy_birthday_in_heaven.webp",
    "v90/artwork/haunted_haven.webp",
    "v90/artwork/heart_of_fire_and_ice.webp",
    "v90/artwork/her_first_truck.webp",
    "v90/artwork/hes_still_here.webp",
    "v90/artwork/home_now.webp",
    "v90/artwork/howling_wolves.webp",
    "v90/artwork/hypocrites.webp",
    "v90/artwork/i_hate_you.webp",
    "v90/artwork/i_love_school.webp",
    "v90/artwork/i_scream.webp",
    "v90/artwork/insatiable.webp",
    "v90/artwork/insult_the_ones_you_love.webp",
    "v90/artwork/introverted_girl.webp",
    "v90/artwork/jet_set.webp",
    "v90/artwork/julia_and_friends.webp",
    "v90/artwork/just_a_vibe.webp",
    "v90/artwork/just_wants_to_be_loved.webp",
    "v90/artwork/last_exit.webp",
    "v90/artwork/left_lane_legend.webp",
    "v90/artwork/little_butterflies.webp",
    "v90/artwork/luck_for_granted.webp",
    "v90/artwork/maybe_they_knew.webp",
    "v90/artwork/mind_the_gap.webp",
    "v90/artwork/my_foundation.webp",
    "v90/artwork/my_sweet_little_star.webp",
    "v90/artwork/need_for_speed.webp",
    "v90/artwork/nice_girl.webp",
    "v90/artwork/one_in_a_quarter_billion.webp",
    "v90/artwork/paradox_love.webp",
    "v90/artwork/password_expired.webp",
    "v90/artwork/password_expired_live.webp",
    "v90/artwork/peaks_of_gold.webp",
    "v90/artwork/private_lake.webp",
    "v90/artwork/radio_trash.webp",
    "v90/artwork/ride_the_groove.webp",
    "v90/artwork/rocker_songwriter.webp",
    "v90/artwork/sailing_on_open_water.webp",
    "v90/artwork/sanctified_sinner.webp",
    "v90/artwork/sanctuary_riot.webp",
    "v90/artwork/schools_out.webp",
    "v90/artwork/set_the_spirit_free.webp",
    "v90/artwork/siblings.webp",
    "v90/artwork/skeleton_dance.webp",
    "v90/artwork/slippery_road.webp",
    "v90/artwork/social_lubricant.webp",
    "v90/artwork/soulmate.webp",
    "v90/artwork/southern_belle.webp",
    "v90/artwork/spooky.webp",
    "v90/artwork/spring.webp",
    "v90/artwork/storm_of_the_abyss.webp",
    "v90/artwork/summers_farewell.webp",
    "v90/artwork/tabby_gonzalez.webp",
    "v90/artwork/the_city_i_long_for.webp",
    "v90/artwork/the_dive.webp",
    "v90/artwork/the_hard_way.webp",
    "v90/artwork/the_hook.webp",
    "v90/artwork/the_quiet_kind.webp",
    "v90/artwork/the_rhythm_of_the_fox.webp",
    "v90/artwork/the_rhythm_of_you.webp",
    "v90/artwork/the_sharpened_bow.webp",
    "v90/artwork/the_sirens_anchor.webp",
    "v90/artwork/the_soft_return.webp",
    "v90/artwork/the_steel_winged_swan.webp",
    "v90/artwork/this_is_fine.webp",
    "v90/artwork/tide_on_stone.webp",
    "v90/artwork/toccata.webp",
    "v90/artwork/trick_or_treat.webp",
    "v90/artwork/uncaged.webp",
    "v90/artwork/upon_a_winding_trail.webp",
    "v90/artwork/venezia.webp",
    "v90/artwork/verona.webp",
    "v90/artwork/weekend.webp",
    "v90/artwork/whiteout.webp",
    "v90/artwork/winterstorm.webp",
    "v90/css/style.css",
    "v90/datenschutz.html",
    "v90/essays/embeddings.html",
    "v90/essays/essay1.html",
    "v90/essays/ssm.html",
    "v90/images/Guitar-in-Dolomites.webp",
    "v90/images/Hero.webp",
    "v90/images/Hero_square.webp",
    "v90/images/Julia-skiing-Dolomites.webp",
    "v90/images/Stage_1.webp",
    "v90/images/Stage_2.webp",
    "v90/images/Stage_3.webp",
    "v90/images/Stage_4.webp",
    "v90/images/Stage_5.webp",
    "v90/images/Stage_6.webp",
    "v90/images/Stage_7.webp",
    "v90/images/Stage_8.webp",
    "v90/images/embeddings_music.webp",
    "v90/images/embeddings_words.webp",
    "v90/images/icons/app_icon_192.png",
    "v90/images/icons/app_icon_512.png",
    "v90/images/julia_embeddings.webp",
    "v90/images/julia_ssm_equations.webp",
    "v90/images/password_expired_live.webp",
    "v90/images/podcasts.webp",
    "v90/images/southern_belle.webp",
    "v90/images/ssm_diagram.webp",
    "v90/impressum.html",
    "v90/index.html",
    "v90/js/DiaryService.js",
    "v90/js/Director.js",
    "v90/js/Main 20260319_1300.js",
    "v90/js/Main.js",
    "v90/js/PickerDrum.js",
    "v90/js/Placeholder.js",
    "v90/js/Player 20260319_1300.js",
    "v90/js/Player.js",
    "v90/js/SongCollection 20260319_1400.js",
    "v90/js/SongCollection.js",
    "v90/js/SongService.js",
    "v90/js/VersionCore.js",
    "v90/js/ffmpeg.min.js",
    "v90/js/lucide.js",
    "v90/js/tailwindcss.js",
    "v90/legal_notice.html",
    "v90/manifest.json",
    "v90/placeholder/footer.html",
    "v90/placeholder/header.html",
    "v90/privacy_policy.html"
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
