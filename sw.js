const STATIC_CACHE = 'julia-site-v148';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v148/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v148/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v148/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v148/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v148/artwork/a_cinque_metri_dal_cielo.webp",
    "v148/artwork/a_slow_blossoming_rose.webp",
    "v148/artwork/alejandro.webp",
    "v148/artwork/alta_tensione.webp",
    "v148/artwork/antitoxic.webp",
    "v148/artwork/autumns_whisper.webp",
    "v148/artwork/avalanche.webp",
    "v148/artwork/betrayal.webp",
    "v148/artwork/big_dreams_shine.webp",
    "v148/artwork/big_dreams_shine_live.webp",
    "v148/artwork/bite_of_the_night.webp",
    "v148/artwork/black_cat_bones.webp",
    "v148/artwork/boring.webp",
    "v148/artwork/brainrot.webp",
    "v148/artwork/brooklyn.webp",
    "v148/artwork/buckn_the_bain.webp",
    "v148/artwork/buio_perfetto.webp",
    "v148/artwork/cheerleader.webp",
    "v148/artwork/coffee_in_amsterdam.webp",
    "v148/artwork/cool_fire.webp",
    "v148/artwork/cuore_di_lupa.webp",
    "v148/artwork/dancing_on_your_grave.webp",
    "v148/artwork/date_disaster.webp",
    "v148/artwork/deep_blue.webp",
    "v148/artwork/deepdive_1.webp",
    "v148/artwork/deepdive_2.webp",
    "v148/artwork/default.webp",
    "v148/artwork/delta_blues.webp",
    "v148/artwork/digital_ghost.webp",
    "v148/artwork/disco_flashback.webp",
    "v148/artwork/disco_flashback_2.webp",
    "v148/artwork/disposable.webp",
    "v148/artwork/distortion.webp",
    "v148/artwork/domenica_in_giardino.webp",
    "v148/artwork/drunk_not_dumb.webp",
    "v148/artwork/duecento_all_ora.webp",
    "v148/artwork/dynamite.webp",
    "v148/artwork/electric_hearts.webp",
    "v148/artwork/embers_and_sparks.webp",
    "v148/artwork/faro_nel_temporale.webp",
    "v148/artwork/fences_down.webp",
    "v148/artwork/ferro_e_canna.webp",
    "v148/artwork/fine_apnea.webp",
    "v148/artwork/fine_apnea_2.webp",
    "v148/artwork/fire_in_my_veins.webp",
    "v148/artwork/first_steps_to_stardom.webp",
    "v148/artwork/fog_of_fear.webp",
    "v148/artwork/forever.webp",
    "v148/artwork/fornello_rosso.webp",
    "v148/artwork/four_chords_later.webp",
    "v148/artwork/friday_night.webp",
    "v148/artwork/from_first_steps_to_stardom.webp",
    "v148/artwork/frost_and_friction.webp",
    "v148/artwork/frozen_heart.webp",
    "v148/artwork/fuoco_nel_legno.webp",
    "v148/artwork/fuori_dai_piedi.webp",
    "v148/artwork/fuori_dai_piedi_live.webp",
    "v148/artwork/fuori_dai_piedi_live_v6.webp",
    "v148/artwork/garage_band.webp",
    "v148/artwork/ghost_in_the_garden.webp",
    "v148/artwork/god_save_the_king.webp",
    "v148/artwork/golden_days.webp",
    "v148/artwork/good_enough.webp",
    "v148/artwork/happy_birthday_in_heaven.webp",
    "v148/artwork/haunted_haven.webp",
    "v148/artwork/heart_of_fire_and_ice.webp",
    "v148/artwork/her_first_truck.webp",
    "v148/artwork/hes_still_here.webp",
    "v148/artwork/hes_still_here_2026.webp",
    "v148/artwork/home_now.webp",
    "v148/artwork/howling_wolves.webp",
    "v148/artwork/hurricane.webp",
    "v148/artwork/hypocrites.webp",
    "v148/artwork/i_hate_you.webp",
    "v148/artwork/i_love_school.webp",
    "v148/artwork/i_scream.webp",
    "v148/artwork/i_tuoi_piccoli_disordini.webp",
    "v148/artwork/il_passo_solitario.webp",
    "v148/artwork/insatiable.webp",
    "v148/artwork/insult_the_ones_you_love.webp",
    "v148/artwork/introverted_girl.webp",
    "v148/artwork/jet_set.webp",
    "v148/artwork/julia_and_friends.webp",
    "v148/artwork/just_a_vibe.webp",
    "v148/artwork/just_wants_to_be_loved.webp",
    "v148/artwork/l_oro_di_cartone.webp",
    "v148/artwork/l_ultimo_adesso.webp",
    "v148/artwork/la_morte_di_cenerentola.webp",
    "v148/artwork/la_sposa_del_tuono.webp",
    "v148/artwork/la_sposa_del_tuono_live.webp",
    "v148/artwork/last_exit.webp",
    "v148/artwork/left_lane_legend.webp",
    "v148/artwork/little_butterflies.webp",
    "v148/artwork/luce_rossa.webp",
    "v148/artwork/luck_for_granted.webp",
    "v148/artwork/maybe_they_knew.webp",
    "v148/artwork/mind_the_gap.webp",
    "v148/artwork/my_foundation.webp",
    "v148/artwork/my_sweet_little_star.webp",
    "v148/artwork/need_for_speed.webp",
    "v148/artwork/nessun_dorma.webp",
    "v148/artwork/nice_girl.webp",
    "v148/artwork/nuora_selvaggia.webp",
    "v148/artwork/one_in_a_quarter_billion.webp",
    "v148/artwork/one_pulse.webp",
    "v148/artwork/paradox_love.webp",
    "v148/artwork/password_expired.webp",
    "v148/artwork/password_expired_live.webp",
    "v148/artwork/pathetique.webp",
    "v148/artwork/peaks_of_gold.webp",
    "v148/artwork/play_it_again.webp",
    "v148/artwork/private_lake.webp",
    "v148/artwork/radio_trash.webp",
    "v148/artwork/regina_di_niente.webp",
    "v148/artwork/resti_qui.webp",
    "v148/artwork/ride_the_groove.webp",
    "v148/artwork/rocker_songwriter.webp",
    "v148/artwork/rosso_panigale.webp",
    "v148/artwork/sailing_on_open_water.webp",
    "v148/artwork/sanctified_sinner.webp",
    "v148/artwork/sanctuary_riot.webp",
    "v148/artwork/scendi_dalla_sella.webp",
    "v148/artwork/schools_out.webp",
    "v148/artwork/set_the_spirit_free.webp",
    "v148/artwork/settembre_mi_guarda.jpg",
    "v148/artwork/settembre_mi_guarda.webp",
    "v148/artwork/siblings.webp",
    "v148/artwork/skeleton_dance.webp",
    "v148/artwork/slippery_road.webp",
    "v148/artwork/social_lubricant.webp",
    "v148/artwork/soulmate.webp",
    "v148/artwork/southern_belle.webp",
    "v148/artwork/southern_heat.webp",
    "v148/artwork/southerns_eve.webp",
    "v148/artwork/spacca_il_cristallo.webp",
    "v148/artwork/spooky.webp",
    "v148/artwork/spring.webp",
    "v148/artwork/storm_of_the_abyss.webp",
    "v148/artwork/summers_farewell.webp",
    "v148/artwork/surfing_girl_wild_and_free.webp",
    "v148/artwork/tabby_gonzalez.webp",
    "v148/artwork/the_city_i_long_for.webp",
    "v148/artwork/the_dive.webp",
    "v148/artwork/the_hard_way.webp",
    "v148/artwork/the_hook.webp",
    "v148/artwork/the_quiet_kind.webp",
    "v148/artwork/the_rhythm_of_the_fox.webp",
    "v148/artwork/the_rhythm_of_you.webp",
    "v148/artwork/the_sharpened_bow.webp",
    "v148/artwork/the_sirens_anchor.webp",
    "v148/artwork/the_soft_return.webp",
    "v148/artwork/the_steel_winged_swan.webp",
    "v148/artwork/this_is_fine.webp",
    "v148/artwork/tide_on_stone.webp",
    "v148/artwork/toccata.webp",
    "v148/artwork/trick_or_treat.webp",
    "v148/artwork/un_cuore_sincero.webp",
    "v148/artwork/un_docile_arco.webp",
    "v148/artwork/un_tuffo_al_cuore.webp",
    "v148/artwork/uncaged.webp",
    "v148/artwork/upon_a_winding_trail.webp",
    "v148/artwork/venezia.webp",
    "v148/artwork/verona.webp",
    "v148/artwork/vetro_di_genova.webp",
    "v148/artwork/weekend.webp",
    "v148/artwork/whiteout.webp",
    "v148/artwork/winterstorm.webp",
    "v148/css/style 20260815_1400.css",
    "v148/css/style 20261007_1800.css",
    "v148/css/style copy.css",
    "v148/css/style.css",
    "v148/datenschutz.html",
    "v148/essays/embeddings.html",
    "v148/essays/essay1.html",
    "v148/essays/gemini-code-1782138112807.html",
    "v148/essays/ssm.html",
    "v148/essays/transformers.html",
    "v148/images/Guitar-in-Dolomites.webp",
    "v148/images/Hero.webp",
    "v148/images/Hero_1.webp",
    "v148/images/Hero_1_Square.webp",
    "v148/images/Hero_2.webp",
    "v148/images/Julia-skiing-Dolomites.webp",
    "v148/images/Stage_1.webp",
    "v148/images/Stage_2.webp",
    "v148/images/Stage_3.webp",
    "v148/images/Stage_4.webp",
    "v148/images/Stage_5.webp",
    "v148/images/Stage_6.webp",
    "v148/images/Stage_7.webp",
    "v148/images/Stage_8.webp",
    "v148/images/embeddings_music.webp",
    "v148/images/embeddings_words.webp",
    "v148/images/icons/app_icon_192 copy.png",
    "v148/images/icons/app_icon_192.png",
    "v148/images/icons/app_icon_512 copy.png",
    "v148/images/icons/app_icon_512.png",
    "v148/images/julia_embeddings.webp",
    "v148/images/julia_ssm_equations.webp",
    "v148/images/password_expired_live.webp",
    "v148/images/podcasts.webp",
    "v148/images/southern_belle.webp",
    "v148/images/ssm_diagram.webp",
    "v148/images/surfing_girl_wild_and_free.webp",
    "v148/images/under_the_hood.webp",
    "v148/images/witch.webp",
    "v148/impressum.html",
    "v148/index.html",
    "v148/js/DiaryService.js",
    "v148/js/Director.js",
    "v148/js/Main 20260319_1300.js",
    "v148/js/Main.js",
    "v148/js/PickerDrum.js",
    "v148/js/Placeholder.js",
    "v148/js/Player.js",
    "v148/js/SongCollection.js",
    "v148/js/SongService.js",
    "v148/js/VersionCore.js",
    "v148/js/ffmpeg.min.js",
    "v148/js/lucide.js",
    "v148/js/tailwindcss.js",
    "v148/js/tex-mml-chtml.js",
    "v148/legal_notice.html",
    "v148/manifest.json",
    "v148/placeholder/footer.html",
    "v148/placeholder/header.html",
    "v148/privacy_policy.html"
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
