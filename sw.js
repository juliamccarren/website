const STATIC_CACHE = 'julia-site-v147';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v147/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v147/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v147/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v147/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v147/artwork/a_cinque_metri_dal_cielo.webp",
    "v147/artwork/a_slow_blossoming_rose.webp",
    "v147/artwork/alejandro.webp",
    "v147/artwork/alta_tensione.webp",
    "v147/artwork/antitoxic.webp",
    "v147/artwork/autumns_whisper.webp",
    "v147/artwork/avalanche.webp",
    "v147/artwork/betrayal.webp",
    "v147/artwork/big_dreams_shine.webp",
    "v147/artwork/big_dreams_shine_live.webp",
    "v147/artwork/bite_of_the_night.webp",
    "v147/artwork/black_cat_bones.webp",
    "v147/artwork/boring.webp",
    "v147/artwork/brainrot.webp",
    "v147/artwork/brooklyn.webp",
    "v147/artwork/buckn_the_bain.webp",
    "v147/artwork/buio_perfetto.webp",
    "v147/artwork/cheerleader.webp",
    "v147/artwork/coffee_in_amsterdam.webp",
    "v147/artwork/cool_fire.webp",
    "v147/artwork/cuore_di_lupa.webp",
    "v147/artwork/dancing_on_your_grave.webp",
    "v147/artwork/date_disaster.webp",
    "v147/artwork/deep_blue.webp",
    "v147/artwork/deepdive_1.webp",
    "v147/artwork/deepdive_2.webp",
    "v147/artwork/default.webp",
    "v147/artwork/delta_blues.webp",
    "v147/artwork/digital_ghost.webp",
    "v147/artwork/disco_flashback.webp",
    "v147/artwork/disco_flashback_2.webp",
    "v147/artwork/disposable.webp",
    "v147/artwork/distortion.webp",
    "v147/artwork/domenica_in_giardino.webp",
    "v147/artwork/drunk_not_dumb.webp",
    "v147/artwork/duecento_all_ora.webp",
    "v147/artwork/dynamite.webp",
    "v147/artwork/electric_hearts.webp",
    "v147/artwork/embers_and_sparks.webp",
    "v147/artwork/faro_nel_temporale.webp",
    "v147/artwork/fences_down.webp",
    "v147/artwork/ferro_e_canna.webp",
    "v147/artwork/fine_apnea.webp",
    "v147/artwork/fine_apnea_2.webp",
    "v147/artwork/fire_in_my_veins.webp",
    "v147/artwork/first_steps_to_stardom.webp",
    "v147/artwork/fog_of_fear.webp",
    "v147/artwork/forever.webp",
    "v147/artwork/fornello_rosso.webp",
    "v147/artwork/four_chords_later.webp",
    "v147/artwork/friday_night.webp",
    "v147/artwork/from_first_steps_to_stardom.webp",
    "v147/artwork/frost_and_friction.webp",
    "v147/artwork/frozen_heart.webp",
    "v147/artwork/fuoco_nel_legno.webp",
    "v147/artwork/fuori_dai_piedi.webp",
    "v147/artwork/fuori_dai_piedi_live.webp",
    "v147/artwork/fuori_dai_piedi_live_v6.webp",
    "v147/artwork/garage_band.webp",
    "v147/artwork/ghost_in_the_garden.webp",
    "v147/artwork/god_save_the_king.webp",
    "v147/artwork/golden_days.webp",
    "v147/artwork/good_enough.webp",
    "v147/artwork/happy_birthday_in_heaven.webp",
    "v147/artwork/haunted_haven.webp",
    "v147/artwork/heart_of_fire_and_ice.webp",
    "v147/artwork/her_first_truck.webp",
    "v147/artwork/hes_still_here.webp",
    "v147/artwork/hes_still_here_2026.webp",
    "v147/artwork/home_now.webp",
    "v147/artwork/howling_wolves.webp",
    "v147/artwork/hurricane.webp",
    "v147/artwork/hypocrites.webp",
    "v147/artwork/i_hate_you.webp",
    "v147/artwork/i_love_school.webp",
    "v147/artwork/i_scream.webp",
    "v147/artwork/i_tuoi_piccoli_disordini.webp",
    "v147/artwork/il_passo_solitario.webp",
    "v147/artwork/insatiable.webp",
    "v147/artwork/insult_the_ones_you_love.webp",
    "v147/artwork/introverted_girl.webp",
    "v147/artwork/jet_set.webp",
    "v147/artwork/julia_and_friends.webp",
    "v147/artwork/just_a_vibe.webp",
    "v147/artwork/just_wants_to_be_loved.webp",
    "v147/artwork/l_oro_di_cartone.webp",
    "v147/artwork/l_ultimo_adesso.webp",
    "v147/artwork/la_morte_di_cenerentola.webp",
    "v147/artwork/la_sposa_del_tuono.webp",
    "v147/artwork/la_sposa_del_tuono_live.webp",
    "v147/artwork/last_exit.webp",
    "v147/artwork/left_lane_legend.webp",
    "v147/artwork/little_butterflies.webp",
    "v147/artwork/luce_rossa.webp",
    "v147/artwork/luck_for_granted.webp",
    "v147/artwork/maybe_they_knew.webp",
    "v147/artwork/mind_the_gap.webp",
    "v147/artwork/my_foundation.webp",
    "v147/artwork/my_sweet_little_star.webp",
    "v147/artwork/need_for_speed.webp",
    "v147/artwork/nessun_dorma.webp",
    "v147/artwork/nice_girl.webp",
    "v147/artwork/nuora_selvaggia.webp",
    "v147/artwork/one_in_a_quarter_billion.webp",
    "v147/artwork/one_pulse.webp",
    "v147/artwork/paradox_love.webp",
    "v147/artwork/password_expired.webp",
    "v147/artwork/password_expired_live.webp",
    "v147/artwork/pathetique.webp",
    "v147/artwork/peaks_of_gold.webp",
    "v147/artwork/play_it_again.webp",
    "v147/artwork/private_lake.webp",
    "v147/artwork/radio_trash.webp",
    "v147/artwork/regina_di_niente.webp",
    "v147/artwork/resti_qui.webp",
    "v147/artwork/ride_the_groove.webp",
    "v147/artwork/rocker_songwriter.webp",
    "v147/artwork/rosso_panigale.webp",
    "v147/artwork/sailing_on_open_water.webp",
    "v147/artwork/sanctified_sinner.webp",
    "v147/artwork/sanctuary_riot.webp",
    "v147/artwork/scendi_dalla_sella.webp",
    "v147/artwork/schools_out.webp",
    "v147/artwork/set_the_spirit_free.webp",
    "v147/artwork/settembre_mi_guarda.jpg",
    "v147/artwork/settembre_mi_guarda.webp",
    "v147/artwork/siblings.webp",
    "v147/artwork/skeleton_dance.webp",
    "v147/artwork/slippery_road.webp",
    "v147/artwork/social_lubricant.webp",
    "v147/artwork/soulmate.webp",
    "v147/artwork/southern_belle.webp",
    "v147/artwork/southern_heat.webp",
    "v147/artwork/southerns_eve.webp",
    "v147/artwork/spacca_il_cristallo.webp",
    "v147/artwork/spooky.webp",
    "v147/artwork/spring.webp",
    "v147/artwork/storm_of_the_abyss.webp",
    "v147/artwork/summers_farewell.webp",
    "v147/artwork/surfing_girl_wild_and_free.webp",
    "v147/artwork/tabby_gonzalez.webp",
    "v147/artwork/the_city_i_long_for.webp",
    "v147/artwork/the_dive.webp",
    "v147/artwork/the_hard_way.webp",
    "v147/artwork/the_hook.webp",
    "v147/artwork/the_quiet_kind.webp",
    "v147/artwork/the_rhythm_of_the_fox.webp",
    "v147/artwork/the_rhythm_of_you.webp",
    "v147/artwork/the_sharpened_bow.webp",
    "v147/artwork/the_sirens_anchor.webp",
    "v147/artwork/the_soft_return.webp",
    "v147/artwork/the_steel_winged_swan.webp",
    "v147/artwork/this_is_fine.webp",
    "v147/artwork/tide_on_stone.webp",
    "v147/artwork/toccata.webp",
    "v147/artwork/trick_or_treat.webp",
    "v147/artwork/un_docile_arco.webp",
    "v147/artwork/un_tuffo_al_cuore.webp",
    "v147/artwork/uncaged.webp",
    "v147/artwork/upon_a_winding_trail.webp",
    "v147/artwork/venezia.webp",
    "v147/artwork/verona.webp",
    "v147/artwork/vetro_di_genova.webp",
    "v147/artwork/weekend.webp",
    "v147/artwork/whiteout.webp",
    "v147/artwork/winterstorm.webp",
    "v147/css/style 20260815_1400.css",
    "v147/css/style 20261007_1800.css",
    "v147/css/style copy.css",
    "v147/css/style.css",
    "v147/datenschutz.html",
    "v147/essays/embeddings.html",
    "v147/essays/essay1.html",
    "v147/essays/gemini-code-1782138112807.html",
    "v147/essays/ssm.html",
    "v147/essays/transformers.html",
    "v147/images/Guitar-in-Dolomites.webp",
    "v147/images/Hero.webp",
    "v147/images/Hero_1.webp",
    "v147/images/Hero_1_Square.webp",
    "v147/images/Hero_2.webp",
    "v147/images/Julia-skiing-Dolomites.webp",
    "v147/images/Stage_1.webp",
    "v147/images/Stage_2.webp",
    "v147/images/Stage_3.webp",
    "v147/images/Stage_4.webp",
    "v147/images/Stage_5.webp",
    "v147/images/Stage_6.webp",
    "v147/images/Stage_7.webp",
    "v147/images/Stage_8.webp",
    "v147/images/embeddings_music.webp",
    "v147/images/embeddings_words.webp",
    "v147/images/icons/app_icon_192 copy.png",
    "v147/images/icons/app_icon_192.png",
    "v147/images/icons/app_icon_512 copy.png",
    "v147/images/icons/app_icon_512.png",
    "v147/images/julia_embeddings.webp",
    "v147/images/julia_ssm_equations.webp",
    "v147/images/password_expired_live.webp",
    "v147/images/podcasts.webp",
    "v147/images/southern_belle.webp",
    "v147/images/ssm_diagram.webp",
    "v147/images/surfing_girl_wild_and_free.webp",
    "v147/images/under_the_hood.webp",
    "v147/images/witch.webp",
    "v147/impressum.html",
    "v147/index.html",
    "v147/js/DiaryService.js",
    "v147/js/Director.js",
    "v147/js/Main 20260319_1300.js",
    "v147/js/Main.js",
    "v147/js/PickerDrum.js",
    "v147/js/Placeholder.js",
    "v147/js/Player.js",
    "v147/js/SongCollection.js",
    "v147/js/SongService.js",
    "v147/js/VersionCore.js",
    "v147/js/ffmpeg.min.js",
    "v147/js/lucide.js",
    "v147/js/tailwindcss.js",
    "v147/js/tex-mml-chtml.js",
    "v147/legal_notice.html",
    "v147/manifest.json",
    "v147/placeholder/footer.html",
    "v147/placeholder/header.html",
    "v147/privacy_policy.html"
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
