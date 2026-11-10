const STATIC_CACHE = 'julia-site-v155';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v155/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v155/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v155/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v155/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v155/artwork/a_cinque_metri_dal_cielo.webp",
    "v155/artwork/a_slow_blossoming_rose.webp",
    "v155/artwork/alejandro.webp",
    "v155/artwork/alta_tensione.webp",
    "v155/artwork/antitoxic.webp",
    "v155/artwork/autumns_whisper.webp",
    "v155/artwork/avalanche.webp",
    "v155/artwork/betrayal.webp",
    "v155/artwork/big_dreams_shine.webp",
    "v155/artwork/big_dreams_shine_live.webp",
    "v155/artwork/bite_of_the_night.webp",
    "v155/artwork/black_cat_bones.webp",
    "v155/artwork/boring.webp",
    "v155/artwork/brainrot.webp",
    "v155/artwork/brooklyn.webp",
    "v155/artwork/buckn_the_bain.webp",
    "v155/artwork/buio_perfetto.webp",
    "v155/artwork/cheerleader.webp",
    "v155/artwork/christmas_oratorio.webp",
    "v155/artwork/coffee_in_amsterdam.webp",
    "v155/artwork/cool_fire.webp",
    "v155/artwork/cuore_di_lupa.webp",
    "v155/artwork/dancing_on_your_grave.webp",
    "v155/artwork/date_disaster.webp",
    "v155/artwork/deep_blue.webp",
    "v155/artwork/deepdive_1.webp",
    "v155/artwork/deepdive_2.webp",
    "v155/artwork/default.webp",
    "v155/artwork/delta_blues.webp",
    "v155/artwork/digital_ghost.webp",
    "v155/artwork/disco_flashback.webp",
    "v155/artwork/disco_flashback_2.webp",
    "v155/artwork/disposable.webp",
    "v155/artwork/distortion.webp",
    "v155/artwork/domenica_in_giardino.webp",
    "v155/artwork/drunk_not_dumb.webp",
    "v155/artwork/duecento_all_ora.webp",
    "v155/artwork/dynamite.webp",
    "v155/artwork/electric_hearts.webp",
    "v155/artwork/embers_and_sparks.webp",
    "v155/artwork/esultate_gioite.webp",
    "v155/artwork/faro_nel_temporale.webp",
    "v155/artwork/fences_down.webp",
    "v155/artwork/ferro_e_canna.webp",
    "v155/artwork/fine_apnea.webp",
    "v155/artwork/fine_apnea_2.webp",
    "v155/artwork/fire_in_my_veins.webp",
    "v155/artwork/first_steps_to_stardom.webp",
    "v155/artwork/fog_of_fear.webp",
    "v155/artwork/forever.webp",
    "v155/artwork/fornello_rosso.webp",
    "v155/artwork/four_chords_later.webp",
    "v155/artwork/friday_night.webp",
    "v155/artwork/from_first_steps_to_stardom.webp",
    "v155/artwork/frost_and_friction.webp",
    "v155/artwork/frozen_heart.webp",
    "v155/artwork/fuoco_nel_legno.webp",
    "v155/artwork/fuori_dai_piedi.webp",
    "v155/artwork/fuori_dai_piedi_live.webp",
    "v155/artwork/fuori_dai_piedi_live_v6.webp",
    "v155/artwork/garage_band.webp",
    "v155/artwork/ghost_in_the_garden.webp",
    "v155/artwork/god_save_the_king.webp",
    "v155/artwork/golden_days.webp",
    "v155/artwork/good_enough.webp",
    "v155/artwork/happy_birthday_in_heaven.webp",
    "v155/artwork/haunted_haven.webp",
    "v155/artwork/heart_of_fire_and_ice.webp",
    "v155/artwork/her_first_truck.webp",
    "v155/artwork/hes_still_here.webp",
    "v155/artwork/hes_still_here_2026.webp",
    "v155/artwork/home_now.webp",
    "v155/artwork/howling_wolves.webp",
    "v155/artwork/hurricane.webp",
    "v155/artwork/hypocrites.webp",
    "v155/artwork/i_hate_you.webp",
    "v155/artwork/i_love_school.webp",
    "v155/artwork/i_scream.webp",
    "v155/artwork/i_tuoi_piccoli_disordini.webp",
    "v155/artwork/il_passo_solitario.webp",
    "v155/artwork/insatiable.webp",
    "v155/artwork/insult_the_ones_you_love.webp",
    "v155/artwork/introverted_girl.webp",
    "v155/artwork/jet_set.webp",
    "v155/artwork/julia_and_friends.webp",
    "v155/artwork/just_a_vibe.webp",
    "v155/artwork/just_wants_to_be_loved.webp",
    "v155/artwork/l_oro_di_cartone.webp",
    "v155/artwork/l_ultimo_adesso.webp",
    "v155/artwork/la_morte_di_cenerentola.webp",
    "v155/artwork/la_sposa_del_tuono.webp",
    "v155/artwork/la_sposa_del_tuono_live.webp",
    "v155/artwork/last_exit.webp",
    "v155/artwork/left_lane_legend.webp",
    "v155/artwork/little_butterflies.webp",
    "v155/artwork/luce_rossa.webp",
    "v155/artwork/luck_for_granted.webp",
    "v155/artwork/maybe_they_knew.webp",
    "v155/artwork/mind_the_gap.webp",
    "v155/artwork/my_foundation.webp",
    "v155/artwork/my_sweet_little_star.webp",
    "v155/artwork/need_for_speed.webp",
    "v155/artwork/nessun_dorma.webp",
    "v155/artwork/nice_girl.webp",
    "v155/artwork/notte_di_silenzio_2.webp",
    "v155/artwork/nuora_selvaggia.webp",
    "v155/artwork/o_sanctissima.webp",
    "v155/artwork/one_in_a_quarter_billion.webp",
    "v155/artwork/one_pulse.webp",
    "v155/artwork/paradox_love.webp",
    "v155/artwork/password_expired.webp",
    "v155/artwork/password_expired_live.webp",
    "v155/artwork/pathetique.webp",
    "v155/artwork/peaks_of_gold.webp",
    "v155/artwork/play_it_again.webp",
    "v155/artwork/private_lake.webp",
    "v155/artwork/radio_trash.webp",
    "v155/artwork/regina_di_niente.webp",
    "v155/artwork/resti_qui.webp",
    "v155/artwork/ride_the_groove.webp",
    "v155/artwork/rocker_songwriter.webp",
    "v155/artwork/rosso_panigale.webp",
    "v155/artwork/sailing_on_open_water.webp",
    "v155/artwork/sanctified_sinner.webp",
    "v155/artwork/sanctuary_riot.webp",
    "v155/artwork/scendi_dalla_sella.webp",
    "v155/artwork/schools_out.webp",
    "v155/artwork/set_the_spirit_free.webp",
    "v155/artwork/settembre_mi_guarda.jpg",
    "v155/artwork/settembre_mi_guarda.webp",
    "v155/artwork/siblings.webp",
    "v155/artwork/skeleton_dance.webp",
    "v155/artwork/slippery_road.webp",
    "v155/artwork/social_lubricant.webp",
    "v155/artwork/soulmate.webp",
    "v155/artwork/southern_belle.webp",
    "v155/artwork/southern_heat.webp",
    "v155/artwork/southerns_eve.webp",
    "v155/artwork/spacca_il_cristallo.webp",
    "v155/artwork/spooky.webp",
    "v155/artwork/spring.webp",
    "v155/artwork/storia_di_natale_I.webp",
    "v155/artwork/storia_di_natale_II.webp",
    "v155/artwork/storm_of_the_abyss.webp",
    "v155/artwork/summers_farewell.webp",
    "v155/artwork/surfing_girl_wild_and_free.webp",
    "v155/artwork/tabby_gonzalez.webp",
    "v155/artwork/the_city_i_long_for.webp",
    "v155/artwork/the_dive.webp",
    "v155/artwork/the_hard_way.webp",
    "v155/artwork/the_hook.webp",
    "v155/artwork/the_quiet_kind.webp",
    "v155/artwork/the_rhythm_of_the_fox.webp",
    "v155/artwork/the_rhythm_of_you.webp",
    "v155/artwork/the_sharpened_bow.webp",
    "v155/artwork/the_sirens_anchor.webp",
    "v155/artwork/the_soft_return.webp",
    "v155/artwork/the_steel_winged_swan.webp",
    "v155/artwork/this_is_fine.webp",
    "v155/artwork/tide_on_stone.webp",
    "v155/artwork/toccata.webp",
    "v155/artwork/trick_or_treat.webp",
    "v155/artwork/turbine_di_natale.webp",
    "v155/artwork/un_cuore_sincero.webp",
    "v155/artwork/un_docile_arco.webp",
    "v155/artwork/un_tuffo_al_cuore.webp",
    "v155/artwork/uncaged.webp",
    "v155/artwork/upon_a_winding_trail.webp",
    "v155/artwork/venezia.webp",
    "v155/artwork/verona.webp",
    "v155/artwork/vetro_di_genova.webp",
    "v155/artwork/weekend.webp",
    "v155/artwork/whiteout.webp",
    "v155/artwork/winterstorm.webp",
    "v155/css/style 20260815_1400.css",
    "v155/css/style 20261007_1800.css",
    "v155/css/style copy.css",
    "v155/css/style.css",
    "v155/datenschutz.html",
    "v155/essays/embeddings.html",
    "v155/essays/essay1.html",
    "v155/essays/gemini-code-1782138112807.html",
    "v155/essays/ssm.html",
    "v155/essays/transformers.html",
    "v155/images/Guitar-in-Dolomites.webp",
    "v155/images/Hero.webp",
    "v155/images/Hero_1.webp",
    "v155/images/Hero_1_Square.webp",
    "v155/images/Hero_2.webp",
    "v155/images/Julia-skiing-Dolomites.webp",
    "v155/images/Stage_1.webp",
    "v155/images/Stage_2.webp",
    "v155/images/Stage_3.webp",
    "v155/images/Stage_4.webp",
    "v155/images/Stage_5.webp",
    "v155/images/Stage_6.webp",
    "v155/images/Stage_7.webp",
    "v155/images/Stage_8.webp",
    "v155/images/embeddings_music.webp",
    "v155/images/embeddings_words.webp",
    "v155/images/icons/app_icon_192 copy.png",
    "v155/images/icons/app_icon_192.png",
    "v155/images/icons/app_icon_512 copy.png",
    "v155/images/icons/app_icon_512.png",
    "v155/images/julia_embeddings.webp",
    "v155/images/julia_ssm_equations.webp",
    "v155/images/password_expired_live.webp",
    "v155/images/podcasts.webp",
    "v155/images/southern_belle.webp",
    "v155/images/ssm_diagram.webp",
    "v155/images/surfing_girl_wild_and_free.webp",
    "v155/images/under_the_hood.webp",
    "v155/images/witch.webp",
    "v155/impressum.html",
    "v155/index.html",
    "v155/js/DiaryService.js",
    "v155/js/Director.js",
    "v155/js/Main 20260319_1300.js",
    "v155/js/Main.js",
    "v155/js/PickerDrum.js",
    "v155/js/Placeholder.js",
    "v155/js/Player.js",
    "v155/js/SongCollection.js",
    "v155/js/SongService.js",
    "v155/js/VersionCore.js",
    "v155/js/ffmpeg.min.js",
    "v155/js/lucide.js",
    "v155/js/tailwindcss.js",
    "v155/js/tex-mml-chtml.js",
    "v155/legal_notice.html",
    "v155/manifest.json",
    "v155/placeholder/footer.html",
    "v155/placeholder/header.html",
    "v155/privacy_policy.html"
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
