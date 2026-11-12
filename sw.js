const STATIC_CACHE = 'julia-site-v157';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v157/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v157/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v157/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v157/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v157/artwork/a_cinque_metri_dal_cielo.webp",
    "v157/artwork/a_slow_blossoming_rose.webp",
    "v157/artwork/alejandro.webp",
    "v157/artwork/alta_tensione.webp",
    "v157/artwork/antitoxic.webp",
    "v157/artwork/autumns_whisper.webp",
    "v157/artwork/avalanche.webp",
    "v157/artwork/betrayal.webp",
    "v157/artwork/big_dreams_shine.webp",
    "v157/artwork/big_dreams_shine_live.webp",
    "v157/artwork/bite_of_the_night.webp",
    "v157/artwork/black_cat_bones.webp",
    "v157/artwork/boring.webp",
    "v157/artwork/brainrot.webp",
    "v157/artwork/brooklyn.webp",
    "v157/artwork/buckn_the_bain.webp",
    "v157/artwork/buio_perfetto.webp",
    "v157/artwork/cheerleader.webp",
    "v157/artwork/christmas_oratorio.webp",
    "v157/artwork/coffee_in_amsterdam.webp",
    "v157/artwork/cool_fire.webp",
    "v157/artwork/cuore_di_lupa.webp",
    "v157/artwork/dancing_on_your_grave.webp",
    "v157/artwork/date_disaster.webp",
    "v157/artwork/deep_blue.webp",
    "v157/artwork/deepdive_1.webp",
    "v157/artwork/deepdive_2.webp",
    "v157/artwork/default.webp",
    "v157/artwork/delta_blues.webp",
    "v157/artwork/digital_ghost.webp",
    "v157/artwork/disco_flashback.webp",
    "v157/artwork/disco_flashback_2.webp",
    "v157/artwork/disposable.webp",
    "v157/artwork/distortion.webp",
    "v157/artwork/domenica_in_giardino.webp",
    "v157/artwork/drunk_not_dumb.webp",
    "v157/artwork/duecento_all_ora.webp",
    "v157/artwork/dynamite.webp",
    "v157/artwork/electric_hearts.webp",
    "v157/artwork/embers_and_sparks.webp",
    "v157/artwork/esultate_gioite.webp",
    "v157/artwork/faro_nel_temporale.webp",
    "v157/artwork/fences_down.webp",
    "v157/artwork/ferro_e_canna.webp",
    "v157/artwork/fine_apnea.webp",
    "v157/artwork/fine_apnea_2.webp",
    "v157/artwork/fire_in_my_veins.webp",
    "v157/artwork/first_steps_to_stardom.webp",
    "v157/artwork/fog_of_fear.webp",
    "v157/artwork/forever.webp",
    "v157/artwork/fornello_rosso.webp",
    "v157/artwork/four_chords_later.webp",
    "v157/artwork/friday_night.webp",
    "v157/artwork/from_first_steps_to_stardom.webp",
    "v157/artwork/frost_and_friction.webp",
    "v157/artwork/frozen_heart.webp",
    "v157/artwork/fuoco_nel_legno.webp",
    "v157/artwork/fuori_dai_piedi.webp",
    "v157/artwork/fuori_dai_piedi_live.webp",
    "v157/artwork/fuori_dai_piedi_live_v6.webp",
    "v157/artwork/garage_band.webp",
    "v157/artwork/ghost_in_the_garden.webp",
    "v157/artwork/god_save_the_king.webp",
    "v157/artwork/golden_days.webp",
    "v157/artwork/good_enough.webp",
    "v157/artwork/happy_birthday_in_heaven.webp",
    "v157/artwork/haunted_haven.webp",
    "v157/artwork/heart_of_fire_and_ice.webp",
    "v157/artwork/her_first_truck.webp",
    "v157/artwork/hes_still_here.webp",
    "v157/artwork/hes_still_here_2026.webp",
    "v157/artwork/home_now.webp",
    "v157/artwork/howling_wolves.webp",
    "v157/artwork/hurricane.webp",
    "v157/artwork/hypocrites.webp",
    "v157/artwork/i_hate_you.webp",
    "v157/artwork/i_love_school.webp",
    "v157/artwork/i_scream.webp",
    "v157/artwork/i_tuoi_piccoli_disordini.webp",
    "v157/artwork/il_passo_solitario.webp",
    "v157/artwork/insatiable.webp",
    "v157/artwork/insult_the_ones_you_love.webp",
    "v157/artwork/introverted_girl.webp",
    "v157/artwork/jet_set.webp",
    "v157/artwork/julia_and_friends.webp",
    "v157/artwork/just_a_vibe.webp",
    "v157/artwork/just_wants_to_be_loved.webp",
    "v157/artwork/l_oro_di_cartone.webp",
    "v157/artwork/l_ultimo_adesso.webp",
    "v157/artwork/la_morte_di_cenerentola.webp",
    "v157/artwork/la_sposa_del_tuono.webp",
    "v157/artwork/la_sposa_del_tuono_live.webp",
    "v157/artwork/last_exit.webp",
    "v157/artwork/left_lane_legend.webp",
    "v157/artwork/little_butterflies.webp",
    "v157/artwork/luce_rossa.webp",
    "v157/artwork/luck_for_granted.webp",
    "v157/artwork/maybe_they_knew.webp",
    "v157/artwork/mind_the_gap.webp",
    "v157/artwork/moto_rossa_di_natale.webp",
    "v157/artwork/my_foundation.webp",
    "v157/artwork/my_sweet_little_star.webp",
    "v157/artwork/need_for_speed.webp",
    "v157/artwork/nessun_dorma.webp",
    "v157/artwork/nice_girl.webp",
    "v157/artwork/notte_di_silenzio_2.webp",
    "v157/artwork/nuora_selvaggia.webp",
    "v157/artwork/o_sanctissima.webp",
    "v157/artwork/one_in_a_quarter_billion.webp",
    "v157/artwork/one_pulse.webp",
    "v157/artwork/paradox_love.webp",
    "v157/artwork/password_expired.webp",
    "v157/artwork/password_expired_live.webp",
    "v157/artwork/pathetique.webp",
    "v157/artwork/peaks_of_gold.webp",
    "v157/artwork/play_it_again.webp",
    "v157/artwork/private_lake.webp",
    "v157/artwork/radio_trash.webp",
    "v157/artwork/regina_di_niente.webp",
    "v157/artwork/resti_qui.webp",
    "v157/artwork/ride_the_groove.webp",
    "v157/artwork/rocker_songwriter.webp",
    "v157/artwork/rosso_panigale.webp",
    "v157/artwork/sailing_on_open_water.webp",
    "v157/artwork/sanctified_sinner.webp",
    "v157/artwork/sanctuary_riot.webp",
    "v157/artwork/scendi_dalla_sella.webp",
    "v157/artwork/schools_out.webp",
    "v157/artwork/set_the_spirit_free.webp",
    "v157/artwork/settembre_mi_guarda.jpg",
    "v157/artwork/settembre_mi_guarda.webp",
    "v157/artwork/siblings.webp",
    "v157/artwork/skeleton_dance.webp",
    "v157/artwork/slippery_road.webp",
    "v157/artwork/social_lubricant.webp",
    "v157/artwork/soulmate.webp",
    "v157/artwork/southern_belle.webp",
    "v157/artwork/southern_heat.webp",
    "v157/artwork/southerns_eve.webp",
    "v157/artwork/spacca_il_cristallo.webp",
    "v157/artwork/spooky.webp",
    "v157/artwork/spring.webp",
    "v157/artwork/storia_di_natale_I.webp",
    "v157/artwork/storia_di_natale_II.webp",
    "v157/artwork/storm_of_the_abyss.webp",
    "v157/artwork/summers_farewell.webp",
    "v157/artwork/surfing_girl_wild_and_free.webp",
    "v157/artwork/tabby_gonzalez.webp",
    "v157/artwork/the_city_i_long_for.webp",
    "v157/artwork/the_dive.webp",
    "v157/artwork/the_hard_way.webp",
    "v157/artwork/the_hook.webp",
    "v157/artwork/the_quiet_kind.webp",
    "v157/artwork/the_rhythm_of_the_fox.webp",
    "v157/artwork/the_rhythm_of_you.webp",
    "v157/artwork/the_sharpened_bow.webp",
    "v157/artwork/the_sirens_anchor.webp",
    "v157/artwork/the_soft_return.webp",
    "v157/artwork/the_steel_winged_swan.webp",
    "v157/artwork/this_is_fine.webp",
    "v157/artwork/tide_on_stone.webp",
    "v157/artwork/toccata.webp",
    "v157/artwork/trick_or_treat.webp",
    "v157/artwork/turbine_di_natale.webp",
    "v157/artwork/un_cuore_sincero.webp",
    "v157/artwork/un_docile_arco.webp",
    "v157/artwork/un_tuffo_al_cuore.webp",
    "v157/artwork/uncaged.webp",
    "v157/artwork/upon_a_winding_trail.webp",
    "v157/artwork/venezia.webp",
    "v157/artwork/verona.webp",
    "v157/artwork/vetro_di_genova.webp",
    "v157/artwork/weekend.webp",
    "v157/artwork/whiteout.webp",
    "v157/artwork/winterstorm.webp",
    "v157/css/style 20260815_1400.css",
    "v157/css/style 20261007_1800.css",
    "v157/css/style copy.css",
    "v157/css/style.css",
    "v157/datenschutz.html",
    "v157/essays/embeddings.html",
    "v157/essays/essay1.html",
    "v157/essays/gemini-code-1782138112807.html",
    "v157/essays/ssm.html",
    "v157/essays/transformers.html",
    "v157/images/Guitar-in-Dolomites.webp",
    "v157/images/Hero.webp",
    "v157/images/Hero_1.webp",
    "v157/images/Hero_1_Square.webp",
    "v157/images/Hero_2.webp",
    "v157/images/Julia-skiing-Dolomites.webp",
    "v157/images/Stage_1.webp",
    "v157/images/Stage_2.webp",
    "v157/images/Stage_3.webp",
    "v157/images/Stage_4.webp",
    "v157/images/Stage_5.webp",
    "v157/images/Stage_6.webp",
    "v157/images/Stage_7.webp",
    "v157/images/Stage_8.webp",
    "v157/images/embeddings_music.webp",
    "v157/images/embeddings_words.webp",
    "v157/images/icons/app_icon_192 copy.png",
    "v157/images/icons/app_icon_192.png",
    "v157/images/icons/app_icon_512 copy.png",
    "v157/images/icons/app_icon_512.png",
    "v157/images/julia_embeddings.webp",
    "v157/images/julia_ssm_equations.webp",
    "v157/images/password_expired_live.webp",
    "v157/images/podcasts.webp",
    "v157/images/southern_belle.webp",
    "v157/images/ssm_diagram.webp",
    "v157/images/surfing_girl_wild_and_free.webp",
    "v157/images/under_the_hood.webp",
    "v157/images/witch.webp",
    "v157/impressum.html",
    "v157/index.html",
    "v157/js/DiaryService.js",
    "v157/js/Director.js",
    "v157/js/Main 20260319_1300.js",
    "v157/js/Main.js",
    "v157/js/PickerDrum.js",
    "v157/js/Placeholder.js",
    "v157/js/Player.js",
    "v157/js/SongCollection.js",
    "v157/js/SongService.js",
    "v157/js/VersionCore.js",
    "v157/js/ffmpeg.min.js",
    "v157/js/lucide.js",
    "v157/js/tailwindcss.js",
    "v157/js/tex-mml-chtml.js",
    "v157/legal_notice.html",
    "v157/manifest.json",
    "v157/placeholder/footer.html",
    "v157/placeholder/header.html",
    "v157/privacy_policy.html"
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
