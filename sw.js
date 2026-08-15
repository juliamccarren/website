const STATIC_CACHE = 'julia-site-v106';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v106/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v106/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v106/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v106/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v106/artwork/a_slow_blossoming_rose.webp",
    "v106/artwork/alejandro.webp",
    "v106/artwork/antitoxic.webp",
    "v106/artwork/autumns_whisper.webp",
    "v106/artwork/avalanche.webp",
    "v106/artwork/betrayal.webp",
    "v106/artwork/big_dreams_shine.webp",
    "v106/artwork/big_dreams_shine_live.webp",
    "v106/artwork/bite_of_the_night.webp",
    "v106/artwork/black_cat_bones.webp",
    "v106/artwork/boring.webp",
    "v106/artwork/brainrot.webp",
    "v106/artwork/brooklyn.webp",
    "v106/artwork/buckn_the_bain.webp",
    "v106/artwork/cheerleader.webp",
    "v106/artwork/coffee_in_amsterdam.webp",
    "v106/artwork/cool_fire.webp",
    "v106/artwork/dancing_on_your_grave.webp",
    "v106/artwork/date_disaster.webp",
    "v106/artwork/deep_blue.webp",
    "v106/artwork/deepdive_1.webp",
    "v106/artwork/deepdive_2.webp",
    "v106/artwork/default.webp",
    "v106/artwork/delta_blues.webp",
    "v106/artwork/digital_ghost.webp",
    "v106/artwork/disco_flashback.webp",
    "v106/artwork/disco_flashback_2.webp",
    "v106/artwork/disposable.webp",
    "v106/artwork/distortion.webp",
    "v106/artwork/drunk_not_dumb.webp",
    "v106/artwork/dynamite.webp",
    "v106/artwork/electric_hearts.webp",
    "v106/artwork/embers_and_sparks.webp",
    "v106/artwork/fences_down.webp",
    "v106/artwork/fire_in_my_veins.webp",
    "v106/artwork/first_steps_to_stardom.webp",
    "v106/artwork/fog_of_fear.webp",
    "v106/artwork/forever.webp",
    "v106/artwork/fornello_rosso.webp",
    "v106/artwork/four_chords_later.webp",
    "v106/artwork/friday_night.webp",
    "v106/artwork/from_first_steps_to_stardom.webp",
    "v106/artwork/frost_and_friction.webp",
    "v106/artwork/frozen_heart.webp",
    "v106/artwork/garage_band.webp",
    "v106/artwork/ghost_in_the_garden.webp",
    "v106/artwork/god_save_the_king.webp",
    "v106/artwork/golden_days.webp",
    "v106/artwork/good_enough.webp",
    "v106/artwork/happy_birthday_in_heaven.webp",
    "v106/artwork/haunted_haven.webp",
    "v106/artwork/heart_of_fire_and_ice.webp",
    "v106/artwork/her_first_truck.webp",
    "v106/artwork/hes_still_here.webp",
    "v106/artwork/home_now.webp",
    "v106/artwork/howling_wolves.webp",
    "v106/artwork/hurricane.webp",
    "v106/artwork/hypocrites.webp",
    "v106/artwork/i_hate_you.webp",
    "v106/artwork/i_love_school.webp",
    "v106/artwork/i_scream.webp",
    "v106/artwork/insatiable.webp",
    "v106/artwork/insult_the_ones_you_love.webp",
    "v106/artwork/introverted_girl.webp",
    "v106/artwork/jet_set.webp",
    "v106/artwork/julia_and_friends.webp",
    "v106/artwork/just_a_vibe.webp",
    "v106/artwork/just_wants_to_be_loved.webp",
    "v106/artwork/last_exit.webp",
    "v106/artwork/left_lane_legend.webp",
    "v106/artwork/little_butterflies.webp",
    "v106/artwork/luck_for_granted.webp",
    "v106/artwork/maybe_they_knew.webp",
    "v106/artwork/mind_the_gap.webp",
    "v106/artwork/my_foundation.webp",
    "v106/artwork/my_sweet_little_star.webp",
    "v106/artwork/need_for_speed.webp",
    "v106/artwork/nice_girl.webp",
    "v106/artwork/one_in_a_quarter_billion.webp",
    "v106/artwork/one_pulse.webp",
    "v106/artwork/paradox_love.webp",
    "v106/artwork/password_expired.webp",
    "v106/artwork/password_expired_live.webp",
    "v106/artwork/pathetique.webp",
    "v106/artwork/peaks_of_gold.webp",
    "v106/artwork/play_it_again.webp",
    "v106/artwork/private_lake.webp",
    "v106/artwork/radio_trash.webp",
    "v106/artwork/resti_qui.webp",
    "v106/artwork/ride_the_groove.webp",
    "v106/artwork/rocker_songwriter.webp",
    "v106/artwork/sailing_on_open_water.webp",
    "v106/artwork/sanctified_sinner.webp",
    "v106/artwork/sanctuary_riot.webp",
    "v106/artwork/schools_out.webp",
    "v106/artwork/set_the_spirit_free.webp",
    "v106/artwork/siblings.webp",
    "v106/artwork/skeleton_dance.webp",
    "v106/artwork/slippery_road.webp",
    "v106/artwork/social_lubricant.webp",
    "v106/artwork/soulmate.webp",
    "v106/artwork/southern_belle.webp",
    "v106/artwork/southern_heat.webp",
    "v106/artwork/southerns_eve.webp",
    "v106/artwork/spooky.webp",
    "v106/artwork/spring.webp",
    "v106/artwork/storm_of_the_abyss.webp",
    "v106/artwork/summers_farewell.webp",
    "v106/artwork/surfing_girl_wild_and_free.webp",
    "v106/artwork/tabby_gonzalez.webp",
    "v106/artwork/the_city_i_long_for.webp",
    "v106/artwork/the_dive.webp",
    "v106/artwork/the_hard_way.webp",
    "v106/artwork/the_hook.webp",
    "v106/artwork/the_quiet_kind.webp",
    "v106/artwork/the_rhythm_of_the_fox.webp",
    "v106/artwork/the_rhythm_of_you.webp",
    "v106/artwork/the_sharpened_bow.webp",
    "v106/artwork/the_sirens_anchor.webp",
    "v106/artwork/the_soft_return.webp",
    "v106/artwork/the_steel_winged_swan.webp",
    "v106/artwork/this_is_fine.webp",
    "v106/artwork/tide_on_stone.webp",
    "v106/artwork/toccata.webp",
    "v106/artwork/trick_or_treat.webp",
    "v106/artwork/uncaged.webp",
    "v106/artwork/upon_a_winding_trail.webp",
    "v106/artwork/venezia.webp",
    "v106/artwork/verona.webp",
    "v106/artwork/weekend.webp",
    "v106/artwork/whiteout.webp",
    "v106/artwork/winterstorm.webp",
    "v106/css/style 20260815_1400.css",
    "v106/css/style.css",
    "v106/datenschutz.html",
    "v106/essays/embeddings.html",
    "v106/essays/essay1.html",
    "v106/essays/gemini-code-1782138112807.html",
    "v106/essays/ssm.html",
    "v106/essays/transformers.html",
    "v106/images/Guitar-in-Dolomites.webp",
    "v106/images/Hero.webp",
    "v106/images/Hero_square.webp",
    "v106/images/Julia-skiing-Dolomites.webp",
    "v106/images/Stage_1.webp",
    "v106/images/Stage_2.webp",
    "v106/images/Stage_3.webp",
    "v106/images/Stage_4.webp",
    "v106/images/Stage_5.webp",
    "v106/images/Stage_6.webp",
    "v106/images/Stage_7.webp",
    "v106/images/Stage_8.webp",
    "v106/images/embeddings_music.webp",
    "v106/images/embeddings_words.webp",
    "v106/images/icons/app_icon_192.png",
    "v106/images/icons/app_icon_512.png",
    "v106/images/julia_embeddings.webp",
    "v106/images/julia_ssm_equations.webp",
    "v106/images/password_expired_live.webp",
    "v106/images/podcasts.webp",
    "v106/images/southern_belle.webp",
    "v106/images/ssm_diagram.webp",
    "v106/images/surfing_girl_wild_and_free.webp",
    "v106/images/under_the_hood.webp",
    "v106/images/witch.webp",
    "v106/impressum.html",
    "v106/index.html",
    "v106/js/DiaryService.js",
    "v106/js/Director.js",
    "v106/js/Main 20260319_1300.js",
    "v106/js/Main.js",
    "v106/js/PickerDrum.js",
    "v106/js/Placeholder.js",
    "v106/js/Player.js",
    "v106/js/SongCollection.js",
    "v106/js/SongService.js",
    "v106/js/VersionCore.js",
    "v106/js/ffmpeg.min.js",
    "v106/js/lucide.js",
    "v106/js/tailwindcss.js",
    "v106/js/tex-mml-chtml.js",
    "v106/legal_notice.html",
    "v106/manifest.json",
    "v106/placeholder/footer.html",
    "v106/placeholder/header.html",
    "v106/privacy_policy.html"
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
