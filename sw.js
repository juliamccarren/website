const STATIC_CACHE = 'julia-site-v153';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v153/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v153/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v153/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v153/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v153/artwork/a_cinque_metri_dal_cielo.webp",
    "v153/artwork/a_slow_blossoming_rose.webp",
    "v153/artwork/alejandro.webp",
    "v153/artwork/alta_tensione.webp",
    "v153/artwork/antitoxic.webp",
    "v153/artwork/autumns_whisper.webp",
    "v153/artwork/avalanche.webp",
    "v153/artwork/betrayal.webp",
    "v153/artwork/big_dreams_shine.webp",
    "v153/artwork/big_dreams_shine_live.webp",
    "v153/artwork/bite_of_the_night.webp",
    "v153/artwork/black_cat_bones.webp",
    "v153/artwork/boring.webp",
    "v153/artwork/brainrot.webp",
    "v153/artwork/brooklyn.webp",
    "v153/artwork/buckn_the_bain.webp",
    "v153/artwork/buio_perfetto.webp",
    "v153/artwork/cheerleader.webp",
    "v153/artwork/christmas_oratorio.webp",
    "v153/artwork/coffee_in_amsterdam.webp",
    "v153/artwork/cool_fire.webp",
    "v153/artwork/cuore_di_lupa.webp",
    "v153/artwork/dancing_on_your_grave.webp",
    "v153/artwork/date_disaster.webp",
    "v153/artwork/deep_blue.webp",
    "v153/artwork/deepdive_1.webp",
    "v153/artwork/deepdive_2.webp",
    "v153/artwork/default.webp",
    "v153/artwork/delta_blues.webp",
    "v153/artwork/digital_ghost.webp",
    "v153/artwork/disco_flashback.webp",
    "v153/artwork/disco_flashback_2.webp",
    "v153/artwork/disposable.webp",
    "v153/artwork/distortion.webp",
    "v153/artwork/domenica_in_giardino.webp",
    "v153/artwork/drunk_not_dumb.webp",
    "v153/artwork/duecento_all_ora.webp",
    "v153/artwork/dynamite.webp",
    "v153/artwork/electric_hearts.webp",
    "v153/artwork/embers_and_sparks.webp",
    "v153/artwork/esultate_gioite.webp",
    "v153/artwork/faro_nel_temporale.webp",
    "v153/artwork/fences_down.webp",
    "v153/artwork/ferro_e_canna.webp",
    "v153/artwork/fine_apnea.webp",
    "v153/artwork/fine_apnea_2.webp",
    "v153/artwork/fire_in_my_veins.webp",
    "v153/artwork/first_steps_to_stardom.webp",
    "v153/artwork/fog_of_fear.webp",
    "v153/artwork/forever.webp",
    "v153/artwork/fornello_rosso.webp",
    "v153/artwork/four_chords_later.webp",
    "v153/artwork/friday_night.webp",
    "v153/artwork/from_first_steps_to_stardom.webp",
    "v153/artwork/frost_and_friction.webp",
    "v153/artwork/frozen_heart.webp",
    "v153/artwork/fuoco_nel_legno.webp",
    "v153/artwork/fuori_dai_piedi.webp",
    "v153/artwork/fuori_dai_piedi_live.webp",
    "v153/artwork/fuori_dai_piedi_live_v6.webp",
    "v153/artwork/garage_band.webp",
    "v153/artwork/ghost_in_the_garden.webp",
    "v153/artwork/god_save_the_king.webp",
    "v153/artwork/golden_days.webp",
    "v153/artwork/good_enough.webp",
    "v153/artwork/happy_birthday_in_heaven.webp",
    "v153/artwork/haunted_haven.webp",
    "v153/artwork/heart_of_fire_and_ice.webp",
    "v153/artwork/her_first_truck.webp",
    "v153/artwork/hes_still_here.webp",
    "v153/artwork/hes_still_here_2026.webp",
    "v153/artwork/home_now.webp",
    "v153/artwork/howling_wolves.webp",
    "v153/artwork/hurricane.webp",
    "v153/artwork/hypocrites.webp",
    "v153/artwork/i_hate_you.webp",
    "v153/artwork/i_love_school.webp",
    "v153/artwork/i_scream.webp",
    "v153/artwork/i_tuoi_piccoli_disordini.webp",
    "v153/artwork/il_passo_solitario.webp",
    "v153/artwork/insatiable.webp",
    "v153/artwork/insult_the_ones_you_love.webp",
    "v153/artwork/introverted_girl.webp",
    "v153/artwork/jet_set.webp",
    "v153/artwork/julia_and_friends.webp",
    "v153/artwork/just_a_vibe.webp",
    "v153/artwork/just_wants_to_be_loved.webp",
    "v153/artwork/l_oro_di_cartone.webp",
    "v153/artwork/l_ultimo_adesso.webp",
    "v153/artwork/la_morte_di_cenerentola.webp",
    "v153/artwork/la_sposa_del_tuono.webp",
    "v153/artwork/la_sposa_del_tuono_live.webp",
    "v153/artwork/last_exit.webp",
    "v153/artwork/left_lane_legend.webp",
    "v153/artwork/little_butterflies.webp",
    "v153/artwork/luce_rossa.webp",
    "v153/artwork/luck_for_granted.webp",
    "v153/artwork/maybe_they_knew.webp",
    "v153/artwork/mind_the_gap.webp",
    "v153/artwork/my_foundation.webp",
    "v153/artwork/my_sweet_little_star.webp",
    "v153/artwork/need_for_speed.webp",
    "v153/artwork/nessun_dorma.webp",
    "v153/artwork/nice_girl.webp",
    "v153/artwork/notte_di_silenzio_2.webp",
    "v153/artwork/nuora_selvaggia.webp",
    "v153/artwork/o_sanctissima.webp",
    "v153/artwork/one_in_a_quarter_billion.webp",
    "v153/artwork/one_pulse.webp",
    "v153/artwork/paradox_love.webp",
    "v153/artwork/password_expired.webp",
    "v153/artwork/password_expired_live.webp",
    "v153/artwork/pathetique.webp",
    "v153/artwork/peaks_of_gold.webp",
    "v153/artwork/play_it_again.webp",
    "v153/artwork/private_lake.webp",
    "v153/artwork/radio_trash.webp",
    "v153/artwork/regina_di_niente.webp",
    "v153/artwork/resti_qui.webp",
    "v153/artwork/ride_the_groove.webp",
    "v153/artwork/rocker_songwriter.webp",
    "v153/artwork/rosso_panigale.webp",
    "v153/artwork/sailing_on_open_water.webp",
    "v153/artwork/sanctified_sinner.webp",
    "v153/artwork/sanctuary_riot.webp",
    "v153/artwork/scendi_dalla_sella.webp",
    "v153/artwork/schools_out.webp",
    "v153/artwork/set_the_spirit_free.webp",
    "v153/artwork/settembre_mi_guarda.jpg",
    "v153/artwork/settembre_mi_guarda.webp",
    "v153/artwork/siblings.webp",
    "v153/artwork/skeleton_dance.webp",
    "v153/artwork/slippery_road.webp",
    "v153/artwork/social_lubricant.webp",
    "v153/artwork/soulmate.webp",
    "v153/artwork/southern_belle.webp",
    "v153/artwork/southern_heat.webp",
    "v153/artwork/southerns_eve.webp",
    "v153/artwork/spacca_il_cristallo.webp",
    "v153/artwork/spooky.webp",
    "v153/artwork/spring.webp",
    "v153/artwork/storia_di_natale_I.webp",
    "v153/artwork/storm_of_the_abyss.webp",
    "v153/artwork/summers_farewell.webp",
    "v153/artwork/surfing_girl_wild_and_free.webp",
    "v153/artwork/tabby_gonzalez.webp",
    "v153/artwork/the_city_i_long_for.webp",
    "v153/artwork/the_dive.webp",
    "v153/artwork/the_hard_way.webp",
    "v153/artwork/the_hook.webp",
    "v153/artwork/the_quiet_kind.webp",
    "v153/artwork/the_rhythm_of_the_fox.webp",
    "v153/artwork/the_rhythm_of_you.webp",
    "v153/artwork/the_sharpened_bow.webp",
    "v153/artwork/the_sirens_anchor.webp",
    "v153/artwork/the_soft_return.webp",
    "v153/artwork/the_steel_winged_swan.webp",
    "v153/artwork/this_is_fine.webp",
    "v153/artwork/tide_on_stone.webp",
    "v153/artwork/toccata.webp",
    "v153/artwork/trick_or_treat.webp",
    "v153/artwork/un_cuore_sincero.webp",
    "v153/artwork/un_docile_arco.webp",
    "v153/artwork/un_tuffo_al_cuore.webp",
    "v153/artwork/uncaged.webp",
    "v153/artwork/upon_a_winding_trail.webp",
    "v153/artwork/venezia.webp",
    "v153/artwork/verona.webp",
    "v153/artwork/vetro_di_genova.webp",
    "v153/artwork/weekend.webp",
    "v153/artwork/whiteout.webp",
    "v153/artwork/winterstorm.webp",
    "v153/css/style 20260815_1400.css",
    "v153/css/style 20261007_1800.css",
    "v153/css/style copy.css",
    "v153/css/style.css",
    "v153/datenschutz.html",
    "v153/essays/embeddings.html",
    "v153/essays/essay1.html",
    "v153/essays/gemini-code-1782138112807.html",
    "v153/essays/ssm.html",
    "v153/essays/transformers.html",
    "v153/images/Guitar-in-Dolomites.webp",
    "v153/images/Hero.webp",
    "v153/images/Hero_1.webp",
    "v153/images/Hero_1_Square.webp",
    "v153/images/Hero_2.webp",
    "v153/images/Julia-skiing-Dolomites.webp",
    "v153/images/Stage_1.webp",
    "v153/images/Stage_2.webp",
    "v153/images/Stage_3.webp",
    "v153/images/Stage_4.webp",
    "v153/images/Stage_5.webp",
    "v153/images/Stage_6.webp",
    "v153/images/Stage_7.webp",
    "v153/images/Stage_8.webp",
    "v153/images/embeddings_music.webp",
    "v153/images/embeddings_words.webp",
    "v153/images/icons/app_icon_192 copy.png",
    "v153/images/icons/app_icon_192.png",
    "v153/images/icons/app_icon_512 copy.png",
    "v153/images/icons/app_icon_512.png",
    "v153/images/julia_embeddings.webp",
    "v153/images/julia_ssm_equations.webp",
    "v153/images/password_expired_live.webp",
    "v153/images/podcasts.webp",
    "v153/images/southern_belle.webp",
    "v153/images/ssm_diagram.webp",
    "v153/images/surfing_girl_wild_and_free.webp",
    "v153/images/under_the_hood.webp",
    "v153/images/witch.webp",
    "v153/impressum.html",
    "v153/index.html",
    "v153/js/DiaryService.js",
    "v153/js/Director.js",
    "v153/js/Main 20260319_1300.js",
    "v153/js/Main.js",
    "v153/js/PickerDrum.js",
    "v153/js/Placeholder.js",
    "v153/js/Player.js",
    "v153/js/SongCollection.js",
    "v153/js/SongService.js",
    "v153/js/VersionCore.js",
    "v153/js/ffmpeg.min.js",
    "v153/js/lucide.js",
    "v153/js/tailwindcss.js",
    "v153/js/tex-mml-chtml.js",
    "v153/legal_notice.html",
    "v153/manifest.json",
    "v153/placeholder/footer.html",
    "v153/placeholder/header.html",
    "v153/privacy_policy.html"
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
