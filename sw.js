const STATIC_CACHE = 'julia-site-v122';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v122/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v122/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v122/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v122/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v122/artwork/a_slow_blossoming_rose.webp",
    "v122/artwork/alejandro.webp",
    "v122/artwork/alta_tensione.webp",
    "v122/artwork/antitoxic.webp",
    "v122/artwork/autumns_whisper.webp",
    "v122/artwork/avalanche.webp",
    "v122/artwork/betrayal.webp",
    "v122/artwork/big_dreams_shine.webp",
    "v122/artwork/big_dreams_shine_live.webp",
    "v122/artwork/bite_of_the_night.webp",
    "v122/artwork/black_cat_bones.webp",
    "v122/artwork/boring.webp",
    "v122/artwork/brainrot.webp",
    "v122/artwork/brooklyn.webp",
    "v122/artwork/buckn_the_bain.webp",
    "v122/artwork/buio_perfetto.webp",
    "v122/artwork/cheerleader.webp",
    "v122/artwork/coffee_in_amsterdam.webp",
    "v122/artwork/cool_fire.webp",
    "v122/artwork/dancing_on_your_grave.webp",
    "v122/artwork/date_disaster.webp",
    "v122/artwork/deep_blue.webp",
    "v122/artwork/deepdive_1.webp",
    "v122/artwork/deepdive_2.webp",
    "v122/artwork/default.webp",
    "v122/artwork/delta_blues.webp",
    "v122/artwork/digital_ghost.webp",
    "v122/artwork/disco_flashback.webp",
    "v122/artwork/disco_flashback_2.webp",
    "v122/artwork/disposable.webp",
    "v122/artwork/distortion.webp",
    "v122/artwork/drunk_not_dumb.webp",
    "v122/artwork/dynamite.webp",
    "v122/artwork/electric_hearts.webp",
    "v122/artwork/embers_and_sparks.webp",
    "v122/artwork/fences_down.webp",
    "v122/artwork/ferro_e_canna.webp",
    "v122/artwork/fine_apnea.webp",
    "v122/artwork/fine_apnea_2.webp",
    "v122/artwork/fire_in_my_veins.webp",
    "v122/artwork/first_steps_to_stardom.webp",
    "v122/artwork/fog_of_fear.webp",
    "v122/artwork/forever.webp",
    "v122/artwork/fornello_rosso.webp",
    "v122/artwork/four_chords_later.webp",
    "v122/artwork/friday_night.webp",
    "v122/artwork/from_first_steps_to_stardom.webp",
    "v122/artwork/frost_and_friction.webp",
    "v122/artwork/frozen_heart.webp",
    "v122/artwork/fuoco_nel_legno.webp",
    "v122/artwork/fuori_dai_piedi.webp",
    "v122/artwork/fuori_dai_piedi_live.webp",
    "v122/artwork/garage_band.webp",
    "v122/artwork/ghost_in_the_garden.webp",
    "v122/artwork/god_save_the_king.webp",
    "v122/artwork/golden_days.webp",
    "v122/artwork/good_enough.webp",
    "v122/artwork/happy_birthday_in_heaven.webp",
    "v122/artwork/haunted_haven.webp",
    "v122/artwork/heart_of_fire_and_ice.webp",
    "v122/artwork/her_first_truck.webp",
    "v122/artwork/hes_still_here.webp",
    "v122/artwork/hes_still_here_2026.webp",
    "v122/artwork/home_now.webp",
    "v122/artwork/howling_wolves.webp",
    "v122/artwork/hurricane.webp",
    "v122/artwork/hypocrites.webp",
    "v122/artwork/i_hate_you.webp",
    "v122/artwork/i_love_school.webp",
    "v122/artwork/i_scream.webp",
    "v122/artwork/i_tuoi_piccoli_disordini.webp",
    "v122/artwork/insatiable.webp",
    "v122/artwork/insult_the_ones_you_love.webp",
    "v122/artwork/introverted_girl.webp",
    "v122/artwork/jet_set.webp",
    "v122/artwork/julia_and_friends.webp",
    "v122/artwork/just_a_vibe.webp",
    "v122/artwork/just_wants_to_be_loved.webp",
    "v122/artwork/last_exit.webp",
    "v122/artwork/left_lane_legend.webp",
    "v122/artwork/little_butterflies.webp",
    "v122/artwork/luce_rossa.webp",
    "v122/artwork/luck_for_granted.webp",
    "v122/artwork/maybe_they_knew.webp",
    "v122/artwork/mind_the_gap.webp",
    "v122/artwork/my_foundation.webp",
    "v122/artwork/my_sweet_little_star.webp",
    "v122/artwork/need_for_speed.webp",
    "v122/artwork/nice_girl.webp",
    "v122/artwork/one_in_a_quarter_billion.webp",
    "v122/artwork/one_pulse.webp",
    "v122/artwork/paradox_love.webp",
    "v122/artwork/password_expired.webp",
    "v122/artwork/password_expired_live.webp",
    "v122/artwork/pathetique.webp",
    "v122/artwork/peaks_of_gold.webp",
    "v122/artwork/play_it_again.webp",
    "v122/artwork/private_lake.webp",
    "v122/artwork/radio_trash.webp",
    "v122/artwork/regina_di_niente.webp",
    "v122/artwork/resti_qui.webp",
    "v122/artwork/ride_the_groove.webp",
    "v122/artwork/rocker_songwriter.webp",
    "v122/artwork/sailing_on_open_water.webp",
    "v122/artwork/sanctified_sinner.webp",
    "v122/artwork/sanctuary_riot.webp",
    "v122/artwork/schools_out.webp",
    "v122/artwork/set_the_spirit_free.webp",
    "v122/artwork/siblings.webp",
    "v122/artwork/skeleton_dance.webp",
    "v122/artwork/slippery_road.webp",
    "v122/artwork/social_lubricant.webp",
    "v122/artwork/soulmate.webp",
    "v122/artwork/southern_belle.webp",
    "v122/artwork/southern_heat.webp",
    "v122/artwork/southerns_eve.webp",
    "v122/artwork/spooky.webp",
    "v122/artwork/spring.webp",
    "v122/artwork/storm_of_the_abyss.webp",
    "v122/artwork/summers_farewell.webp",
    "v122/artwork/surfing_girl_wild_and_free.webp",
    "v122/artwork/tabby_gonzalez.webp",
    "v122/artwork/the_city_i_long_for.webp",
    "v122/artwork/the_dive.webp",
    "v122/artwork/the_hard_way.webp",
    "v122/artwork/the_hook.webp",
    "v122/artwork/the_quiet_kind.webp",
    "v122/artwork/the_rhythm_of_the_fox.webp",
    "v122/artwork/the_rhythm_of_you.webp",
    "v122/artwork/the_sharpened_bow.webp",
    "v122/artwork/the_sirens_anchor.webp",
    "v122/artwork/the_soft_return.webp",
    "v122/artwork/the_steel_winged_swan.webp",
    "v122/artwork/this_is_fine.webp",
    "v122/artwork/tide_on_stone.webp",
    "v122/artwork/toccata.webp",
    "v122/artwork/trick_or_treat.webp",
    "v122/artwork/uncaged.webp",
    "v122/artwork/upon_a_winding_trail.webp",
    "v122/artwork/venezia.webp",
    "v122/artwork/verona.webp",
    "v122/artwork/vetro_di_genova.webp",
    "v122/artwork/weekend.webp",
    "v122/artwork/whiteout.webp",
    "v122/artwork/winterstorm.webp",
    "v122/css/style 20260815_1400.css",
    "v122/css/style copy.css",
    "v122/css/style.css",
    "v122/datenschutz.html",
    "v122/essays/embeddings.html",
    "v122/essays/essay1.html",
    "v122/essays/gemini-code-1782138112807.html",
    "v122/essays/ssm.html",
    "v122/essays/transformers.html",
    "v122/images/Guitar-in-Dolomites.webp",
    "v122/images/Hero.webp",
    "v122/images/Hero_1.webp",
    "v122/images/Hero_1_Square.webp",
    "v122/images/Hero_2.webp",
    "v122/images/Julia-skiing-Dolomites.webp",
    "v122/images/Stage_1.webp",
    "v122/images/Stage_2.webp",
    "v122/images/Stage_3.webp",
    "v122/images/Stage_4.webp",
    "v122/images/Stage_5.webp",
    "v122/images/Stage_6.webp",
    "v122/images/Stage_7.webp",
    "v122/images/Stage_8.webp",
    "v122/images/embeddings_music.webp",
    "v122/images/embeddings_words.webp",
    "v122/images/icons/app_icon_192 copy.png",
    "v122/images/icons/app_icon_192.png",
    "v122/images/icons/app_icon_512 copy.png",
    "v122/images/icons/app_icon_512.png",
    "v122/images/julia_embeddings.webp",
    "v122/images/julia_ssm_equations.webp",
    "v122/images/password_expired_live.webp",
    "v122/images/podcasts.webp",
    "v122/images/southern_belle.webp",
    "v122/images/ssm_diagram.webp",
    "v122/images/surfing_girl_wild_and_free.webp",
    "v122/images/under_the_hood.webp",
    "v122/images/witch.webp",
    "v122/impressum.html",
    "v122/index.html",
    "v122/js/DiaryService.js",
    "v122/js/Director.js",
    "v122/js/Main 20260319_1300.js",
    "v122/js/Main.js",
    "v122/js/PickerDrum.js",
    "v122/js/Placeholder.js",
    "v122/js/Player.js",
    "v122/js/SongCollection.js",
    "v122/js/SongService.js",
    "v122/js/VersionCore.js",
    "v122/js/ffmpeg.min.js",
    "v122/js/lucide.js",
    "v122/js/tailwindcss.js",
    "v122/js/tex-mml-chtml.js",
    "v122/legal_notice.html",
    "v122/manifest.json",
    "v122/placeholder/footer.html",
    "v122/placeholder/header.html",
    "v122/privacy_policy.html"
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
