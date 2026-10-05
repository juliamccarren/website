const STATIC_CACHE = 'julia-site-v146';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v146/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v146/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v146/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v146/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v146/artwork/a_cinque_metri_dal_cielo.webp",
    "v146/artwork/a_slow_blossoming_rose.webp",
    "v146/artwork/alejandro.webp",
    "v146/artwork/alta_tensione.webp",
    "v146/artwork/antitoxic.webp",
    "v146/artwork/autumns_whisper.webp",
    "v146/artwork/avalanche.webp",
    "v146/artwork/betrayal.webp",
    "v146/artwork/big_dreams_shine.webp",
    "v146/artwork/big_dreams_shine_live.webp",
    "v146/artwork/bite_of_the_night.webp",
    "v146/artwork/black_cat_bones.webp",
    "v146/artwork/boring.webp",
    "v146/artwork/brainrot.webp",
    "v146/artwork/brooklyn.webp",
    "v146/artwork/buckn_the_bain.webp",
    "v146/artwork/buio_perfetto.webp",
    "v146/artwork/cheerleader.webp",
    "v146/artwork/coffee_in_amsterdam.webp",
    "v146/artwork/cool_fire.webp",
    "v146/artwork/cuore_di_lupa.webp",
    "v146/artwork/dancing_on_your_grave.webp",
    "v146/artwork/date_disaster.webp",
    "v146/artwork/deep_blue.webp",
    "v146/artwork/deepdive_1.webp",
    "v146/artwork/deepdive_2.webp",
    "v146/artwork/default.webp",
    "v146/artwork/delta_blues.webp",
    "v146/artwork/digital_ghost.webp",
    "v146/artwork/disco_flashback.webp",
    "v146/artwork/disco_flashback_2.webp",
    "v146/artwork/disposable.webp",
    "v146/artwork/distortion.webp",
    "v146/artwork/domenica_in_giardino.webp",
    "v146/artwork/drunk_not_dumb.webp",
    "v146/artwork/duecento_all_ora.webp",
    "v146/artwork/dynamite.webp",
    "v146/artwork/electric_hearts.webp",
    "v146/artwork/embers_and_sparks.webp",
    "v146/artwork/faro_nel_temporale.webp",
    "v146/artwork/fences_down.webp",
    "v146/artwork/ferro_e_canna.webp",
    "v146/artwork/fine_apnea.webp",
    "v146/artwork/fine_apnea_2.webp",
    "v146/artwork/fire_in_my_veins.webp",
    "v146/artwork/first_steps_to_stardom.webp",
    "v146/artwork/fog_of_fear.webp",
    "v146/artwork/forever.webp",
    "v146/artwork/fornello_rosso.webp",
    "v146/artwork/four_chords_later.webp",
    "v146/artwork/friday_night.webp",
    "v146/artwork/from_first_steps_to_stardom.webp",
    "v146/artwork/frost_and_friction.webp",
    "v146/artwork/frozen_heart.webp",
    "v146/artwork/fuoco_nel_legno.webp",
    "v146/artwork/fuori_dai_piedi.webp",
    "v146/artwork/fuori_dai_piedi_live.webp",
    "v146/artwork/fuori_dai_piedi_live_v6.webp",
    "v146/artwork/garage_band.webp",
    "v146/artwork/ghost_in_the_garden.webp",
    "v146/artwork/god_save_the_king.webp",
    "v146/artwork/golden_days.webp",
    "v146/artwork/good_enough.webp",
    "v146/artwork/happy_birthday_in_heaven.webp",
    "v146/artwork/haunted_haven.webp",
    "v146/artwork/heart_of_fire_and_ice.webp",
    "v146/artwork/her_first_truck.webp",
    "v146/artwork/hes_still_here.webp",
    "v146/artwork/hes_still_here_2026.webp",
    "v146/artwork/home_now.webp",
    "v146/artwork/howling_wolves.webp",
    "v146/artwork/hurricane.webp",
    "v146/artwork/hypocrites.webp",
    "v146/artwork/i_hate_you.webp",
    "v146/artwork/i_love_school.webp",
    "v146/artwork/i_scream.webp",
    "v146/artwork/i_tuoi_piccoli_disordini.webp",
    "v146/artwork/il_passo_solitario.webp",
    "v146/artwork/insatiable.webp",
    "v146/artwork/insult_the_ones_you_love.webp",
    "v146/artwork/introverted_girl.webp",
    "v146/artwork/jet_set.webp",
    "v146/artwork/julia_and_friends.webp",
    "v146/artwork/just_a_vibe.webp",
    "v146/artwork/just_wants_to_be_loved.webp",
    "v146/artwork/l_ultimo_adesso.webp",
    "v146/artwork/la_morte_di_cenerentola.webp",
    "v146/artwork/la_sposa_del_tuono.webp",
    "v146/artwork/la_sposa_del_tuono_live.webp",
    "v146/artwork/last_exit.webp",
    "v146/artwork/left_lane_legend.webp",
    "v146/artwork/little_butterflies.webp",
    "v146/artwork/luce_rossa.webp",
    "v146/artwork/luck_for_granted.webp",
    "v146/artwork/maybe_they_knew.webp",
    "v146/artwork/mind_the_gap.webp",
    "v146/artwork/my_foundation.webp",
    "v146/artwork/my_sweet_little_star.webp",
    "v146/artwork/need_for_speed.webp",
    "v146/artwork/nessun_dorma.webp",
    "v146/artwork/nice_girl.webp",
    "v146/artwork/nuora_selvaggia.webp",
    "v146/artwork/one_in_a_quarter_billion.webp",
    "v146/artwork/one_pulse.webp",
    "v146/artwork/paradox_love.webp",
    "v146/artwork/password_expired.webp",
    "v146/artwork/password_expired_live.webp",
    "v146/artwork/pathetique.webp",
    "v146/artwork/peaks_of_gold.webp",
    "v146/artwork/play_it_again.webp",
    "v146/artwork/private_lake.webp",
    "v146/artwork/radio_trash.webp",
    "v146/artwork/regina_di_niente.webp",
    "v146/artwork/resti_qui.webp",
    "v146/artwork/ride_the_groove.webp",
    "v146/artwork/rocker_songwriter.webp",
    "v146/artwork/rosso_panigale.webp",
    "v146/artwork/sailing_on_open_water.webp",
    "v146/artwork/sanctified_sinner.webp",
    "v146/artwork/sanctuary_riot.webp",
    "v146/artwork/scendi_dalla_sella.webp",
    "v146/artwork/schools_out.webp",
    "v146/artwork/set_the_spirit_free.webp",
    "v146/artwork/settembre_mi_guarda.jpg",
    "v146/artwork/settembre_mi_guarda.webp",
    "v146/artwork/siblings.webp",
    "v146/artwork/skeleton_dance.webp",
    "v146/artwork/slippery_road.webp",
    "v146/artwork/social_lubricant.webp",
    "v146/artwork/soulmate.webp",
    "v146/artwork/southern_belle.webp",
    "v146/artwork/southern_heat.webp",
    "v146/artwork/southerns_eve.webp",
    "v146/artwork/spacca_il_cristallo.webp",
    "v146/artwork/spooky.webp",
    "v146/artwork/spring.webp",
    "v146/artwork/storm_of_the_abyss.webp",
    "v146/artwork/summers_farewell.webp",
    "v146/artwork/surfing_girl_wild_and_free.webp",
    "v146/artwork/tabby_gonzalez.webp",
    "v146/artwork/the_city_i_long_for.webp",
    "v146/artwork/the_dive.webp",
    "v146/artwork/the_hard_way.webp",
    "v146/artwork/the_hook.webp",
    "v146/artwork/the_quiet_kind.webp",
    "v146/artwork/the_rhythm_of_the_fox.webp",
    "v146/artwork/the_rhythm_of_you.webp",
    "v146/artwork/the_sharpened_bow.webp",
    "v146/artwork/the_sirens_anchor.webp",
    "v146/artwork/the_soft_return.webp",
    "v146/artwork/the_steel_winged_swan.webp",
    "v146/artwork/this_is_fine.webp",
    "v146/artwork/tide_on_stone.webp",
    "v146/artwork/toccata.webp",
    "v146/artwork/trick_or_treat.webp",
    "v146/artwork/un_docile_arco.webp",
    "v146/artwork/un_tuffo_al_cuore.webp",
    "v146/artwork/uncaged.webp",
    "v146/artwork/upon_a_winding_trail.webp",
    "v146/artwork/venezia.webp",
    "v146/artwork/verona.webp",
    "v146/artwork/vetro_di_genova.webp",
    "v146/artwork/weekend.webp",
    "v146/artwork/whiteout.webp",
    "v146/artwork/winterstorm.webp",
    "v146/css/style 20260815_1400.css",
    "v146/css/style copy.css",
    "v146/css/style.css",
    "v146/datenschutz.html",
    "v146/essays/embeddings.html",
    "v146/essays/essay1.html",
    "v146/essays/gemini-code-1782138112807.html",
    "v146/essays/ssm.html",
    "v146/essays/transformers.html",
    "v146/images/Guitar-in-Dolomites.webp",
    "v146/images/Hero.webp",
    "v146/images/Hero_1.webp",
    "v146/images/Hero_1_Square.webp",
    "v146/images/Hero_2.webp",
    "v146/images/Julia-skiing-Dolomites.webp",
    "v146/images/Stage_1.webp",
    "v146/images/Stage_2.webp",
    "v146/images/Stage_3.webp",
    "v146/images/Stage_4.webp",
    "v146/images/Stage_5.webp",
    "v146/images/Stage_6.webp",
    "v146/images/Stage_7.webp",
    "v146/images/Stage_8.webp",
    "v146/images/embeddings_music.webp",
    "v146/images/embeddings_words.webp",
    "v146/images/icons/app_icon_192 copy.png",
    "v146/images/icons/app_icon_192.png",
    "v146/images/icons/app_icon_512 copy.png",
    "v146/images/icons/app_icon_512.png",
    "v146/images/julia_embeddings.webp",
    "v146/images/julia_ssm_equations.webp",
    "v146/images/password_expired_live.webp",
    "v146/images/podcasts.webp",
    "v146/images/southern_belle.webp",
    "v146/images/ssm_diagram.webp",
    "v146/images/surfing_girl_wild_and_free.webp",
    "v146/images/under_the_hood.webp",
    "v146/images/witch.webp",
    "v146/impressum.html",
    "v146/index.html",
    "v146/js/DiaryService.js",
    "v146/js/Director.js",
    "v146/js/Main 20260319_1300.js",
    "v146/js/Main.js",
    "v146/js/PickerDrum.js",
    "v146/js/Placeholder.js",
    "v146/js/Player.js",
    "v146/js/SongCollection.js",
    "v146/js/SongService.js",
    "v146/js/VersionCore.js",
    "v146/js/ffmpeg.min.js",
    "v146/js/lucide.js",
    "v146/js/tailwindcss.js",
    "v146/js/tex-mml-chtml.js",
    "v146/legal_notice.html",
    "v146/manifest.json",
    "v146/placeholder/footer.html",
    "v146/placeholder/header.html",
    "v146/privacy_policy.html"
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
