const STATIC_CACHE = 'julia-site-v141';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v141/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v141/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v141/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v141/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v141/artwork/a_cinque_metri_dal_cielo.webp",
    "v141/artwork/a_slow_blossoming_rose.webp",
    "v141/artwork/alejandro.webp",
    "v141/artwork/alta_tensione.webp",
    "v141/artwork/antitoxic.webp",
    "v141/artwork/autumns_whisper.webp",
    "v141/artwork/avalanche.webp",
    "v141/artwork/betrayal.webp",
    "v141/artwork/big_dreams_shine.webp",
    "v141/artwork/big_dreams_shine_live.webp",
    "v141/artwork/bite_of_the_night.webp",
    "v141/artwork/black_cat_bones.webp",
    "v141/artwork/boring.webp",
    "v141/artwork/brainrot.webp",
    "v141/artwork/brooklyn.webp",
    "v141/artwork/buckn_the_bain.webp",
    "v141/artwork/buio_perfetto.webp",
    "v141/artwork/cheerleader.webp",
    "v141/artwork/coffee_in_amsterdam.webp",
    "v141/artwork/cool_fire.webp",
    "v141/artwork/cuore_di_lupa.webp",
    "v141/artwork/dancing_on_your_grave.webp",
    "v141/artwork/date_disaster.webp",
    "v141/artwork/deep_blue.webp",
    "v141/artwork/deepdive_1.webp",
    "v141/artwork/deepdive_2.webp",
    "v141/artwork/default.webp",
    "v141/artwork/delta_blues.webp",
    "v141/artwork/digital_ghost.webp",
    "v141/artwork/disco_flashback.webp",
    "v141/artwork/disco_flashback_2.webp",
    "v141/artwork/disposable.webp",
    "v141/artwork/distortion.webp",
    "v141/artwork/drunk_not_dumb.webp",
    "v141/artwork/duecento_all_ora.webp",
    "v141/artwork/dynamite.webp",
    "v141/artwork/electric_hearts.webp",
    "v141/artwork/embers_and_sparks.webp",
    "v141/artwork/fences_down.webp",
    "v141/artwork/ferro_e_canna.webp",
    "v141/artwork/fine_apnea.webp",
    "v141/artwork/fine_apnea_2.webp",
    "v141/artwork/fire_in_my_veins.webp",
    "v141/artwork/first_steps_to_stardom.webp",
    "v141/artwork/fog_of_fear.webp",
    "v141/artwork/forever.webp",
    "v141/artwork/fornello_rosso.webp",
    "v141/artwork/four_chords_later.webp",
    "v141/artwork/friday_night.webp",
    "v141/artwork/from_first_steps_to_stardom.webp",
    "v141/artwork/frost_and_friction.webp",
    "v141/artwork/frozen_heart.webp",
    "v141/artwork/fuoco_nel_legno.webp",
    "v141/artwork/fuori_dai_piedi.webp",
    "v141/artwork/fuori_dai_piedi_live.webp",
    "v141/artwork/fuori_dai_piedi_live_v6.webp",
    "v141/artwork/garage_band.webp",
    "v141/artwork/ghost_in_the_garden.webp",
    "v141/artwork/god_save_the_king.webp",
    "v141/artwork/golden_days.webp",
    "v141/artwork/good_enough.webp",
    "v141/artwork/happy_birthday_in_heaven.webp",
    "v141/artwork/haunted_haven.webp",
    "v141/artwork/heart_of_fire_and_ice.webp",
    "v141/artwork/her_first_truck.webp",
    "v141/artwork/hes_still_here.webp",
    "v141/artwork/hes_still_here_2026.webp",
    "v141/artwork/home_now.webp",
    "v141/artwork/howling_wolves.webp",
    "v141/artwork/hurricane.webp",
    "v141/artwork/hypocrites.webp",
    "v141/artwork/i_hate_you.webp",
    "v141/artwork/i_love_school.webp",
    "v141/artwork/i_scream.webp",
    "v141/artwork/i_tuoi_piccoli_disordini.webp",
    "v141/artwork/insatiable.webp",
    "v141/artwork/insult_the_ones_you_love.webp",
    "v141/artwork/introverted_girl.webp",
    "v141/artwork/jet_set.webp",
    "v141/artwork/julia_and_friends.webp",
    "v141/artwork/just_a_vibe.webp",
    "v141/artwork/just_wants_to_be_loved.webp",
    "v141/artwork/l_ultimo_adesso.webp",
    "v141/artwork/la_sposa_del_tuono.webp",
    "v141/artwork/la_sposa_del_tuono_live.webp",
    "v141/artwork/last_exit.webp",
    "v141/artwork/left_lane_legend.webp",
    "v141/artwork/little_butterflies.webp",
    "v141/artwork/luce_rossa.webp",
    "v141/artwork/luck_for_granted.webp",
    "v141/artwork/maybe_they_knew.webp",
    "v141/artwork/mind_the_gap.webp",
    "v141/artwork/my_foundation.webp",
    "v141/artwork/my_sweet_little_star.webp",
    "v141/artwork/need_for_speed.webp",
    "v141/artwork/nessun_dorma.webp",
    "v141/artwork/nice_girl.webp",
    "v141/artwork/nuora_selvaggia.webp",
    "v141/artwork/one_in_a_quarter_billion.webp",
    "v141/artwork/one_pulse.webp",
    "v141/artwork/paradox_love.webp",
    "v141/artwork/password_expired.webp",
    "v141/artwork/password_expired_live.webp",
    "v141/artwork/pathetique.webp",
    "v141/artwork/peaks_of_gold.webp",
    "v141/artwork/play_it_again.webp",
    "v141/artwork/private_lake.webp",
    "v141/artwork/radio_trash.webp",
    "v141/artwork/regina_di_niente.webp",
    "v141/artwork/resti_qui.webp",
    "v141/artwork/ride_the_groove.webp",
    "v141/artwork/rocker_songwriter.webp",
    "v141/artwork/sailing_on_open_water.webp",
    "v141/artwork/sanctified_sinner.webp",
    "v141/artwork/sanctuary_riot.webp",
    "v141/artwork/scendi_dalla_sella.webp",
    "v141/artwork/schools_out.webp",
    "v141/artwork/set_the_spirit_free.webp",
    "v141/artwork/settembre_mi_guarda.jpg",
    "v141/artwork/settembre_mi_guarda.webp",
    "v141/artwork/siblings.webp",
    "v141/artwork/skeleton_dance.webp",
    "v141/artwork/slippery_road.webp",
    "v141/artwork/social_lubricant.webp",
    "v141/artwork/soulmate.webp",
    "v141/artwork/southern_belle.webp",
    "v141/artwork/southern_heat.webp",
    "v141/artwork/southerns_eve.webp",
    "v141/artwork/spacca_il_cristallo.webp",
    "v141/artwork/spooky.webp",
    "v141/artwork/spring.webp",
    "v141/artwork/storm_of_the_abyss.webp",
    "v141/artwork/summers_farewell.webp",
    "v141/artwork/surfing_girl_wild_and_free.webp",
    "v141/artwork/tabby_gonzalez.webp",
    "v141/artwork/the_city_i_long_for.webp",
    "v141/artwork/the_dive.webp",
    "v141/artwork/the_hard_way.webp",
    "v141/artwork/the_hook.webp",
    "v141/artwork/the_quiet_kind.webp",
    "v141/artwork/the_rhythm_of_the_fox.webp",
    "v141/artwork/the_rhythm_of_you.webp",
    "v141/artwork/the_sharpened_bow.webp",
    "v141/artwork/the_sirens_anchor.webp",
    "v141/artwork/the_soft_return.webp",
    "v141/artwork/the_steel_winged_swan.webp",
    "v141/artwork/this_is_fine.webp",
    "v141/artwork/tide_on_stone.webp",
    "v141/artwork/toccata.webp",
    "v141/artwork/trick_or_treat.webp",
    "v141/artwork/un_docile_arco.webp",
    "v141/artwork/un_tuffo_al_cuore.webp",
    "v141/artwork/uncaged.webp",
    "v141/artwork/upon_a_winding_trail.webp",
    "v141/artwork/venezia.webp",
    "v141/artwork/verona.webp",
    "v141/artwork/vetro_di_genova.webp",
    "v141/artwork/weekend.webp",
    "v141/artwork/whiteout.webp",
    "v141/artwork/winterstorm.webp",
    "v141/css/style 20260815_1400.css",
    "v141/css/style copy.css",
    "v141/css/style.css",
    "v141/datenschutz.html",
    "v141/essays/embeddings.html",
    "v141/essays/essay1.html",
    "v141/essays/gemini-code-1782138112807.html",
    "v141/essays/ssm.html",
    "v141/essays/transformers.html",
    "v141/images/Guitar-in-Dolomites.webp",
    "v141/images/Hero.webp",
    "v141/images/Hero_1.webp",
    "v141/images/Hero_1_Square.webp",
    "v141/images/Hero_2.webp",
    "v141/images/Julia-skiing-Dolomites.webp",
    "v141/images/Stage_1.webp",
    "v141/images/Stage_2.webp",
    "v141/images/Stage_3.webp",
    "v141/images/Stage_4.webp",
    "v141/images/Stage_5.webp",
    "v141/images/Stage_6.webp",
    "v141/images/Stage_7.webp",
    "v141/images/Stage_8.webp",
    "v141/images/embeddings_music.webp",
    "v141/images/embeddings_words.webp",
    "v141/images/icons/app_icon_192 copy.png",
    "v141/images/icons/app_icon_192.png",
    "v141/images/icons/app_icon_512 copy.png",
    "v141/images/icons/app_icon_512.png",
    "v141/images/julia_embeddings.webp",
    "v141/images/julia_ssm_equations.webp",
    "v141/images/password_expired_live.webp",
    "v141/images/podcasts.webp",
    "v141/images/southern_belle.webp",
    "v141/images/ssm_diagram.webp",
    "v141/images/surfing_girl_wild_and_free.webp",
    "v141/images/under_the_hood.webp",
    "v141/images/witch.webp",
    "v141/impressum.html",
    "v141/index.html",
    "v141/js/DiaryService.js",
    "v141/js/Director.js",
    "v141/js/Main 20260319_1300.js",
    "v141/js/Main.js",
    "v141/js/PickerDrum.js",
    "v141/js/Placeholder.js",
    "v141/js/Player.js",
    "v141/js/SongCollection.js",
    "v141/js/SongService.js",
    "v141/js/VersionCore.js",
    "v141/js/ffmpeg.min.js",
    "v141/js/lucide.js",
    "v141/js/tailwindcss.js",
    "v141/js/tex-mml-chtml.js",
    "v141/legal_notice.html",
    "v141/manifest.json",
    "v141/placeholder/footer.html",
    "v141/placeholder/header.html",
    "v141/privacy_policy.html"
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

    // 2. Special treatment: MP3-Audio (Cache-First mit Range-Support für mobiles Spulen)
    if (url.pathname.endsWith('.mp3')) {
        event.respondWith(
            caches.match(event.request, { ignoreSearch: true })
                .then(response => {
                    if (response) {
                        console.log(`%c[SW] CACHE-HIT (Audio): Serving ${fileName} from local storage`, 'color: #d946ef');
                        return handleAudioRangeRequest(event.request, response);
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

/**
 * Schneidet für Range-Requests die passenden Bytes aus dem Cache-Objekt heraus
 * und gibt Status 206 Partial Content zurück (wichtig für Android & iOS Seek).
 */
async function handleAudioRangeRequest(request, cachedResponse) {
    const rangeHeader = request.headers.get('range');

    // Wenn der Browser ganz normal abspielt (ohne Spulen), die gecachte Datei wie gewohnt liefern
    if (!rangeHeader) {
        return cachedResponse;
    }

    try {
        const arrayBuffer = await cachedResponse.arrayBuffer();
        const totalLength = arrayBuffer.byteLength;

        // Byte-Range parsen, z.B. "bytes=1048576-"
        const bytesMatch = rangeHeader.match(/bytes=(\d+)-(\d+)?/);
        if (!bytesMatch) {
            return cachedResponse;
        }

        const start = parseInt(bytesMatch[1], 10);
        const end = bytesMatch[2] ? parseInt(bytesMatch[2], 10) : totalLength - 1;

        // Teilbereich ausschneiden
        const slicedBuffer = arrayBuffer.slice(start, end + 1);

        return new Response(slicedBuffer, {
            status: 206,
            statusText: 'Partial Content',
            headers: {
                'Content-Type': cachedResponse.headers.get('Content-Type') || 'audio/mpeg',
                'Content-Range': `bytes ${start}-${end}/${totalLength}`,
                'Content-Length': slicedBuffer.byteLength,
                'Accept-Ranges': 'bytes'
            }
        });
    } catch (err) {
        console.error('[SW] Range processing failed, fallback to full response', err);
        return cachedResponse;
    }
}

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
