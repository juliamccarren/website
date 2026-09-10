const STATIC_CACHE = 'julia-site-v124';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v124/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v124/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v124/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v124/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v124/artwork/a_slow_blossoming_rose.webp",
    "v124/artwork/alejandro.webp",
    "v124/artwork/alta_tensione.webp",
    "v124/artwork/antitoxic.webp",
    "v124/artwork/autumns_whisper.webp",
    "v124/artwork/avalanche.webp",
    "v124/artwork/betrayal.webp",
    "v124/artwork/big_dreams_shine.webp",
    "v124/artwork/big_dreams_shine_live.webp",
    "v124/artwork/bite_of_the_night.webp",
    "v124/artwork/black_cat_bones.webp",
    "v124/artwork/boring.webp",
    "v124/artwork/brainrot.webp",
    "v124/artwork/brooklyn.webp",
    "v124/artwork/buckn_the_bain.webp",
    "v124/artwork/buio_perfetto.webp",
    "v124/artwork/cheerleader.webp",
    "v124/artwork/coffee_in_amsterdam.webp",
    "v124/artwork/cool_fire.webp",
    "v124/artwork/dancing_on_your_grave.webp",
    "v124/artwork/date_disaster.webp",
    "v124/artwork/deep_blue.webp",
    "v124/artwork/deepdive_1.webp",
    "v124/artwork/deepdive_2.webp",
    "v124/artwork/default.webp",
    "v124/artwork/delta_blues.webp",
    "v124/artwork/digital_ghost.webp",
    "v124/artwork/disco_flashback.webp",
    "v124/artwork/disco_flashback_2.webp",
    "v124/artwork/disposable.webp",
    "v124/artwork/distortion.webp",
    "v124/artwork/drunk_not_dumb.webp",
    "v124/artwork/dynamite.webp",
    "v124/artwork/electric_hearts.webp",
    "v124/artwork/embers_and_sparks.webp",
    "v124/artwork/fences_down.webp",
    "v124/artwork/ferro_e_canna.webp",
    "v124/artwork/fine_apnea.webp",
    "v124/artwork/fine_apnea_2.webp",
    "v124/artwork/fire_in_my_veins.webp",
    "v124/artwork/first_steps_to_stardom.webp",
    "v124/artwork/fog_of_fear.webp",
    "v124/artwork/forever.webp",
    "v124/artwork/fornello_rosso.webp",
    "v124/artwork/four_chords_later.webp",
    "v124/artwork/friday_night.webp",
    "v124/artwork/from_first_steps_to_stardom.webp",
    "v124/artwork/frost_and_friction.webp",
    "v124/artwork/frozen_heart.webp",
    "v124/artwork/fuoco_nel_legno.webp",
    "v124/artwork/fuori_dai_piedi.webp",
    "v124/artwork/fuori_dai_piedi_live.webp",
    "v124/artwork/fuori_dai_piedi_live_v6.webp",
    "v124/artwork/garage_band.webp",
    "v124/artwork/ghost_in_the_garden.webp",
    "v124/artwork/god_save_the_king.webp",
    "v124/artwork/golden_days.webp",
    "v124/artwork/good_enough.webp",
    "v124/artwork/happy_birthday_in_heaven.webp",
    "v124/artwork/haunted_haven.webp",
    "v124/artwork/heart_of_fire_and_ice.webp",
    "v124/artwork/her_first_truck.webp",
    "v124/artwork/hes_still_here.webp",
    "v124/artwork/hes_still_here_2026.webp",
    "v124/artwork/home_now.webp",
    "v124/artwork/howling_wolves.webp",
    "v124/artwork/hurricane.webp",
    "v124/artwork/hypocrites.webp",
    "v124/artwork/i_hate_you.webp",
    "v124/artwork/i_love_school.webp",
    "v124/artwork/i_scream.webp",
    "v124/artwork/i_tuoi_piccoli_disordini.webp",
    "v124/artwork/insatiable.webp",
    "v124/artwork/insult_the_ones_you_love.webp",
    "v124/artwork/introverted_girl.webp",
    "v124/artwork/jet_set.webp",
    "v124/artwork/julia_and_friends.webp",
    "v124/artwork/just_a_vibe.webp",
    "v124/artwork/just_wants_to_be_loved.webp",
    "v124/artwork/last_exit.webp",
    "v124/artwork/left_lane_legend.webp",
    "v124/artwork/little_butterflies.webp",
    "v124/artwork/luce_rossa.webp",
    "v124/artwork/luck_for_granted.webp",
    "v124/artwork/maybe_they_knew.webp",
    "v124/artwork/mind_the_gap.webp",
    "v124/artwork/my_foundation.webp",
    "v124/artwork/my_sweet_little_star.webp",
    "v124/artwork/need_for_speed.webp",
    "v124/artwork/nice_girl.webp",
    "v124/artwork/nuora_selvaggia.webp",
    "v124/artwork/one_in_a_quarter_billion.webp",
    "v124/artwork/one_pulse.webp",
    "v124/artwork/paradox_love.webp",
    "v124/artwork/password_expired.webp",
    "v124/artwork/password_expired_live.webp",
    "v124/artwork/pathetique.webp",
    "v124/artwork/peaks_of_gold.webp",
    "v124/artwork/play_it_again.webp",
    "v124/artwork/private_lake.webp",
    "v124/artwork/radio_trash.webp",
    "v124/artwork/regina_di_niente.webp",
    "v124/artwork/resti_qui.webp",
    "v124/artwork/ride_the_groove.webp",
    "v124/artwork/rocker_songwriter.webp",
    "v124/artwork/sailing_on_open_water.webp",
    "v124/artwork/sanctified_sinner.webp",
    "v124/artwork/sanctuary_riot.webp",
    "v124/artwork/schools_out.webp",
    "v124/artwork/set_the_spirit_free.webp",
    "v124/artwork/siblings.webp",
    "v124/artwork/skeleton_dance.webp",
    "v124/artwork/slippery_road.webp",
    "v124/artwork/social_lubricant.webp",
    "v124/artwork/soulmate.webp",
    "v124/artwork/southern_belle.webp",
    "v124/artwork/southern_heat.webp",
    "v124/artwork/southerns_eve.webp",
    "v124/artwork/spooky.webp",
    "v124/artwork/spring.webp",
    "v124/artwork/storm_of_the_abyss.webp",
    "v124/artwork/summers_farewell.webp",
    "v124/artwork/surfing_girl_wild_and_free.webp",
    "v124/artwork/tabby_gonzalez.webp",
    "v124/artwork/the_city_i_long_for.webp",
    "v124/artwork/the_dive.webp",
    "v124/artwork/the_hard_way.webp",
    "v124/artwork/the_hook.webp",
    "v124/artwork/the_quiet_kind.webp",
    "v124/artwork/the_rhythm_of_the_fox.webp",
    "v124/artwork/the_rhythm_of_you.webp",
    "v124/artwork/the_sharpened_bow.webp",
    "v124/artwork/the_sirens_anchor.webp",
    "v124/artwork/the_soft_return.webp",
    "v124/artwork/the_steel_winged_swan.webp",
    "v124/artwork/this_is_fine.webp",
    "v124/artwork/tide_on_stone.webp",
    "v124/artwork/toccata.webp",
    "v124/artwork/trick_or_treat.webp",
    "v124/artwork/uncaged.webp",
    "v124/artwork/upon_a_winding_trail.webp",
    "v124/artwork/venezia.webp",
    "v124/artwork/verona.webp",
    "v124/artwork/vetro_di_genova.webp",
    "v124/artwork/weekend.webp",
    "v124/artwork/whiteout.webp",
    "v124/artwork/winterstorm.webp",
    "v124/css/style 20260815_1400.css",
    "v124/css/style copy.css",
    "v124/css/style.css",
    "v124/datenschutz.html",
    "v124/essays/embeddings.html",
    "v124/essays/essay1.html",
    "v124/essays/gemini-code-1782138112807.html",
    "v124/essays/ssm.html",
    "v124/essays/transformers.html",
    "v124/images/Guitar-in-Dolomites.webp",
    "v124/images/Hero.webp",
    "v124/images/Hero_1.webp",
    "v124/images/Hero_1_Square.webp",
    "v124/images/Hero_2.webp",
    "v124/images/Julia-skiing-Dolomites.webp",
    "v124/images/Stage_1.webp",
    "v124/images/Stage_2.webp",
    "v124/images/Stage_3.webp",
    "v124/images/Stage_4.webp",
    "v124/images/Stage_5.webp",
    "v124/images/Stage_6.webp",
    "v124/images/Stage_7.webp",
    "v124/images/Stage_8.webp",
    "v124/images/embeddings_music.webp",
    "v124/images/embeddings_words.webp",
    "v124/images/icons/app_icon_192 copy.png",
    "v124/images/icons/app_icon_192.png",
    "v124/images/icons/app_icon_512 copy.png",
    "v124/images/icons/app_icon_512.png",
    "v124/images/julia_embeddings.webp",
    "v124/images/julia_ssm_equations.webp",
    "v124/images/password_expired_live.webp",
    "v124/images/podcasts.webp",
    "v124/images/southern_belle.webp",
    "v124/images/ssm_diagram.webp",
    "v124/images/surfing_girl_wild_and_free.webp",
    "v124/images/under_the_hood.webp",
    "v124/images/witch.webp",
    "v124/impressum.html",
    "v124/index.html",
    "v124/js/DiaryService.js",
    "v124/js/Director.js",
    "v124/js/Main 20260319_1300.js",
    "v124/js/Main.js",
    "v124/js/PickerDrum.js",
    "v124/js/Placeholder.js",
    "v124/js/Player.js",
    "v124/js/SongCollection.js",
    "v124/js/SongService.js",
    "v124/js/VersionCore.js",
    "v124/js/ffmpeg.min.js",
    "v124/js/lucide.js",
    "v124/js/tailwindcss.js",
    "v124/js/tex-mml-chtml.js",
    "v124/legal_notice.html",
    "v124/manifest.json",
    "v124/placeholder/footer.html",
    "v124/placeholder/header.html",
    "v124/privacy_policy.html"
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
