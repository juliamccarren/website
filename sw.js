const STATIC_CACHE = 'julia-site-v149';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v149/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v149/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v149/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v149/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v149/artwork/a_cinque_metri_dal_cielo.webp",
    "v149/artwork/a_slow_blossoming_rose.webp",
    "v149/artwork/alejandro.webp",
    "v149/artwork/alta_tensione.webp",
    "v149/artwork/antitoxic.webp",
    "v149/artwork/autumns_whisper.webp",
    "v149/artwork/avalanche.webp",
    "v149/artwork/betrayal.webp",
    "v149/artwork/big_dreams_shine.webp",
    "v149/artwork/big_dreams_shine_live.webp",
    "v149/artwork/bite_of_the_night.webp",
    "v149/artwork/black_cat_bones.webp",
    "v149/artwork/boring.webp",
    "v149/artwork/brainrot.webp",
    "v149/artwork/brooklyn.webp",
    "v149/artwork/buckn_the_bain.webp",
    "v149/artwork/buio_perfetto.webp",
    "v149/artwork/cheerleader.webp",
    "v149/artwork/christmas_oratorio.webp",
    "v149/artwork/coffee_in_amsterdam.webp",
    "v149/artwork/cool_fire.webp",
    "v149/artwork/cuore_di_lupa.webp",
    "v149/artwork/dancing_on_your_grave.webp",
    "v149/artwork/date_disaster.webp",
    "v149/artwork/deep_blue.webp",
    "v149/artwork/deepdive_1.webp",
    "v149/artwork/deepdive_2.webp",
    "v149/artwork/default.webp",
    "v149/artwork/delta_blues.webp",
    "v149/artwork/digital_ghost.webp",
    "v149/artwork/disco_flashback.webp",
    "v149/artwork/disco_flashback_2.webp",
    "v149/artwork/disposable.webp",
    "v149/artwork/distortion.webp",
    "v149/artwork/domenica_in_giardino.webp",
    "v149/artwork/drunk_not_dumb.webp",
    "v149/artwork/duecento_all_ora.webp",
    "v149/artwork/dynamite.webp",
    "v149/artwork/electric_hearts.webp",
    "v149/artwork/embers_and_sparks.webp",
    "v149/artwork/esultate_gioite.webp",
    "v149/artwork/faro_nel_temporale.webp",
    "v149/artwork/fences_down.webp",
    "v149/artwork/ferro_e_canna.webp",
    "v149/artwork/fine_apnea.webp",
    "v149/artwork/fine_apnea_2.webp",
    "v149/artwork/fire_in_my_veins.webp",
    "v149/artwork/first_steps_to_stardom.webp",
    "v149/artwork/fog_of_fear.webp",
    "v149/artwork/forever.webp",
    "v149/artwork/fornello_rosso.webp",
    "v149/artwork/four_chords_later.webp",
    "v149/artwork/friday_night.webp",
    "v149/artwork/from_first_steps_to_stardom.webp",
    "v149/artwork/frost_and_friction.webp",
    "v149/artwork/frozen_heart.webp",
    "v149/artwork/fuoco_nel_legno.webp",
    "v149/artwork/fuori_dai_piedi.webp",
    "v149/artwork/fuori_dai_piedi_live.webp",
    "v149/artwork/fuori_dai_piedi_live_v6.webp",
    "v149/artwork/garage_band.webp",
    "v149/artwork/ghost_in_the_garden.webp",
    "v149/artwork/god_save_the_king.webp",
    "v149/artwork/golden_days.webp",
    "v149/artwork/good_enough.webp",
    "v149/artwork/happy_birthday_in_heaven.webp",
    "v149/artwork/haunted_haven.webp",
    "v149/artwork/heart_of_fire_and_ice.webp",
    "v149/artwork/her_first_truck.webp",
    "v149/artwork/hes_still_here.webp",
    "v149/artwork/hes_still_here_2026.webp",
    "v149/artwork/home_now.webp",
    "v149/artwork/howling_wolves.webp",
    "v149/artwork/hurricane.webp",
    "v149/artwork/hypocrites.webp",
    "v149/artwork/i_hate_you.webp",
    "v149/artwork/i_love_school.webp",
    "v149/artwork/i_scream.webp",
    "v149/artwork/i_tuoi_piccoli_disordini.webp",
    "v149/artwork/il_passo_solitario.webp",
    "v149/artwork/insatiable.webp",
    "v149/artwork/insult_the_ones_you_love.webp",
    "v149/artwork/introverted_girl.webp",
    "v149/artwork/jet_set.webp",
    "v149/artwork/julia_and_friends.webp",
    "v149/artwork/just_a_vibe.webp",
    "v149/artwork/just_wants_to_be_loved.webp",
    "v149/artwork/l_oro_di_cartone.webp",
    "v149/artwork/l_ultimo_adesso.webp",
    "v149/artwork/la_morte_di_cenerentola.webp",
    "v149/artwork/la_sposa_del_tuono.webp",
    "v149/artwork/la_sposa_del_tuono_live.webp",
    "v149/artwork/last_exit.webp",
    "v149/artwork/left_lane_legend.webp",
    "v149/artwork/little_butterflies.webp",
    "v149/artwork/luce_rossa.webp",
    "v149/artwork/luck_for_granted.webp",
    "v149/artwork/maybe_they_knew.webp",
    "v149/artwork/mind_the_gap.webp",
    "v149/artwork/my_foundation.webp",
    "v149/artwork/my_sweet_little_star.webp",
    "v149/artwork/need_for_speed.webp",
    "v149/artwork/nessun_dorma.webp",
    "v149/artwork/nice_girl.webp",
    "v149/artwork/nuora_selvaggia.webp",
    "v149/artwork/one_in_a_quarter_billion.webp",
    "v149/artwork/one_pulse.webp",
    "v149/artwork/paradox_love.webp",
    "v149/artwork/password_expired.webp",
    "v149/artwork/password_expired_live.webp",
    "v149/artwork/pathetique.webp",
    "v149/artwork/peaks_of_gold.webp",
    "v149/artwork/play_it_again.webp",
    "v149/artwork/private_lake.webp",
    "v149/artwork/radio_trash.webp",
    "v149/artwork/regina_di_niente.webp",
    "v149/artwork/resti_qui.webp",
    "v149/artwork/ride_the_groove.webp",
    "v149/artwork/rocker_songwriter.webp",
    "v149/artwork/rosso_panigale.webp",
    "v149/artwork/sailing_on_open_water.webp",
    "v149/artwork/sanctified_sinner.webp",
    "v149/artwork/sanctuary_riot.webp",
    "v149/artwork/scendi_dalla_sella.webp",
    "v149/artwork/schools_out.webp",
    "v149/artwork/set_the_spirit_free.webp",
    "v149/artwork/settembre_mi_guarda.jpg",
    "v149/artwork/settembre_mi_guarda.webp",
    "v149/artwork/siblings.webp",
    "v149/artwork/skeleton_dance.webp",
    "v149/artwork/slippery_road.webp",
    "v149/artwork/social_lubricant.webp",
    "v149/artwork/soulmate.webp",
    "v149/artwork/southern_belle.webp",
    "v149/artwork/southern_heat.webp",
    "v149/artwork/southerns_eve.webp",
    "v149/artwork/spacca_il_cristallo.webp",
    "v149/artwork/spooky.webp",
    "v149/artwork/spring.webp",
    "v149/artwork/storm_of_the_abyss.webp",
    "v149/artwork/summers_farewell.webp",
    "v149/artwork/surfing_girl_wild_and_free.webp",
    "v149/artwork/tabby_gonzalez.webp",
    "v149/artwork/the_city_i_long_for.webp",
    "v149/artwork/the_dive.webp",
    "v149/artwork/the_hard_way.webp",
    "v149/artwork/the_hook.webp",
    "v149/artwork/the_quiet_kind.webp",
    "v149/artwork/the_rhythm_of_the_fox.webp",
    "v149/artwork/the_rhythm_of_you.webp",
    "v149/artwork/the_sharpened_bow.webp",
    "v149/artwork/the_sirens_anchor.webp",
    "v149/artwork/the_soft_return.webp",
    "v149/artwork/the_steel_winged_swan.webp",
    "v149/artwork/this_is_fine.webp",
    "v149/artwork/tide_on_stone.webp",
    "v149/artwork/toccata.webp",
    "v149/artwork/trick_or_treat.webp",
    "v149/artwork/un_cuore_sincero.webp",
    "v149/artwork/un_docile_arco.webp",
    "v149/artwork/un_tuffo_al_cuore.webp",
    "v149/artwork/uncaged.webp",
    "v149/artwork/upon_a_winding_trail.webp",
    "v149/artwork/venezia.webp",
    "v149/artwork/verona.webp",
    "v149/artwork/vetro_di_genova.webp",
    "v149/artwork/weekend.webp",
    "v149/artwork/whiteout.webp",
    "v149/artwork/winterstorm.webp",
    "v149/css/style 20260815_1400.css",
    "v149/css/style 20261007_1800.css",
    "v149/css/style copy.css",
    "v149/css/style.css",
    "v149/datenschutz.html",
    "v149/essays/embeddings.html",
    "v149/essays/essay1.html",
    "v149/essays/gemini-code-1782138112807.html",
    "v149/essays/ssm.html",
    "v149/essays/transformers.html",
    "v149/images/Guitar-in-Dolomites.webp",
    "v149/images/Hero.webp",
    "v149/images/Hero_1.webp",
    "v149/images/Hero_1_Square.webp",
    "v149/images/Hero_2.webp",
    "v149/images/Julia-skiing-Dolomites.webp",
    "v149/images/Stage_1.webp",
    "v149/images/Stage_2.webp",
    "v149/images/Stage_3.webp",
    "v149/images/Stage_4.webp",
    "v149/images/Stage_5.webp",
    "v149/images/Stage_6.webp",
    "v149/images/Stage_7.webp",
    "v149/images/Stage_8.webp",
    "v149/images/embeddings_music.webp",
    "v149/images/embeddings_words.webp",
    "v149/images/icons/app_icon_192 copy.png",
    "v149/images/icons/app_icon_192.png",
    "v149/images/icons/app_icon_512 copy.png",
    "v149/images/icons/app_icon_512.png",
    "v149/images/julia_embeddings.webp",
    "v149/images/julia_ssm_equations.webp",
    "v149/images/password_expired_live.webp",
    "v149/images/podcasts.webp",
    "v149/images/southern_belle.webp",
    "v149/images/ssm_diagram.webp",
    "v149/images/surfing_girl_wild_and_free.webp",
    "v149/images/under_the_hood.webp",
    "v149/images/witch.webp",
    "v149/impressum.html",
    "v149/index.html",
    "v149/js/DiaryService.js",
    "v149/js/Director.js",
    "v149/js/Main 20260319_1300.js",
    "v149/js/Main.js",
    "v149/js/PickerDrum.js",
    "v149/js/Placeholder.js",
    "v149/js/Player.js",
    "v149/js/SongCollection.js",
    "v149/js/SongService.js",
    "v149/js/VersionCore.js",
    "v149/js/ffmpeg.min.js",
    "v149/js/lucide.js",
    "v149/js/tailwindcss.js",
    "v149/js/tex-mml-chtml.js",
    "v149/legal_notice.html",
    "v149/manifest.json",
    "v149/placeholder/footer.html",
    "v149/placeholder/header.html",
    "v149/privacy_policy.html"
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
