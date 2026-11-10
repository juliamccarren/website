const STATIC_CACHE = 'julia-site-v156';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v156/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v156/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v156/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v156/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v156/artwork/a_cinque_metri_dal_cielo.webp",
    "v156/artwork/a_slow_blossoming_rose.webp",
    "v156/artwork/alejandro.webp",
    "v156/artwork/alta_tensione.webp",
    "v156/artwork/antitoxic.webp",
    "v156/artwork/autumns_whisper.webp",
    "v156/artwork/avalanche.webp",
    "v156/artwork/betrayal.webp",
    "v156/artwork/big_dreams_shine.webp",
    "v156/artwork/big_dreams_shine_live.webp",
    "v156/artwork/bite_of_the_night.webp",
    "v156/artwork/black_cat_bones.webp",
    "v156/artwork/boring.webp",
    "v156/artwork/brainrot.webp",
    "v156/artwork/brooklyn.webp",
    "v156/artwork/buckn_the_bain.webp",
    "v156/artwork/buio_perfetto.webp",
    "v156/artwork/cheerleader.webp",
    "v156/artwork/christmas_oratorio.webp",
    "v156/artwork/coffee_in_amsterdam.webp",
    "v156/artwork/cool_fire.webp",
    "v156/artwork/cuore_di_lupa.webp",
    "v156/artwork/dancing_on_your_grave.webp",
    "v156/artwork/date_disaster.webp",
    "v156/artwork/deep_blue.webp",
    "v156/artwork/deepdive_1.webp",
    "v156/artwork/deepdive_2.webp",
    "v156/artwork/default.webp",
    "v156/artwork/delta_blues.webp",
    "v156/artwork/digital_ghost.webp",
    "v156/artwork/disco_flashback.webp",
    "v156/artwork/disco_flashback_2.webp",
    "v156/artwork/disposable.webp",
    "v156/artwork/distortion.webp",
    "v156/artwork/domenica_in_giardino.webp",
    "v156/artwork/drunk_not_dumb.webp",
    "v156/artwork/duecento_all_ora.webp",
    "v156/artwork/dynamite.webp",
    "v156/artwork/electric_hearts.webp",
    "v156/artwork/embers_and_sparks.webp",
    "v156/artwork/esultate_gioite.webp",
    "v156/artwork/faro_nel_temporale.webp",
    "v156/artwork/fences_down.webp",
    "v156/artwork/ferro_e_canna.webp",
    "v156/artwork/fine_apnea.webp",
    "v156/artwork/fine_apnea_2.webp",
    "v156/artwork/fire_in_my_veins.webp",
    "v156/artwork/first_steps_to_stardom.webp",
    "v156/artwork/fog_of_fear.webp",
    "v156/artwork/forever.webp",
    "v156/artwork/fornello_rosso.webp",
    "v156/artwork/four_chords_later.webp",
    "v156/artwork/friday_night.webp",
    "v156/artwork/from_first_steps_to_stardom.webp",
    "v156/artwork/frost_and_friction.webp",
    "v156/artwork/frozen_heart.webp",
    "v156/artwork/fuoco_nel_legno.webp",
    "v156/artwork/fuori_dai_piedi.webp",
    "v156/artwork/fuori_dai_piedi_live.webp",
    "v156/artwork/fuori_dai_piedi_live_v6.webp",
    "v156/artwork/garage_band.webp",
    "v156/artwork/ghost_in_the_garden.webp",
    "v156/artwork/god_save_the_king.webp",
    "v156/artwork/golden_days.webp",
    "v156/artwork/good_enough.webp",
    "v156/artwork/happy_birthday_in_heaven.webp",
    "v156/artwork/haunted_haven.webp",
    "v156/artwork/heart_of_fire_and_ice.webp",
    "v156/artwork/her_first_truck.webp",
    "v156/artwork/hes_still_here.webp",
    "v156/artwork/hes_still_here_2026.webp",
    "v156/artwork/home_now.webp",
    "v156/artwork/howling_wolves.webp",
    "v156/artwork/hurricane.webp",
    "v156/artwork/hypocrites.webp",
    "v156/artwork/i_hate_you.webp",
    "v156/artwork/i_love_school.webp",
    "v156/artwork/i_scream.webp",
    "v156/artwork/i_tuoi_piccoli_disordini.webp",
    "v156/artwork/il_passo_solitario.webp",
    "v156/artwork/insatiable.webp",
    "v156/artwork/insult_the_ones_you_love.webp",
    "v156/artwork/introverted_girl.webp",
    "v156/artwork/jet_set.webp",
    "v156/artwork/julia_and_friends.webp",
    "v156/artwork/just_a_vibe.webp",
    "v156/artwork/just_wants_to_be_loved.webp",
    "v156/artwork/l_oro_di_cartone.webp",
    "v156/artwork/l_ultimo_adesso.webp",
    "v156/artwork/la_morte_di_cenerentola.webp",
    "v156/artwork/la_sposa_del_tuono.webp",
    "v156/artwork/la_sposa_del_tuono_live.webp",
    "v156/artwork/last_exit.webp",
    "v156/artwork/left_lane_legend.webp",
    "v156/artwork/little_butterflies.webp",
    "v156/artwork/luce_rossa.webp",
    "v156/artwork/luck_for_granted.webp",
    "v156/artwork/maybe_they_knew.webp",
    "v156/artwork/mind_the_gap.webp",
    "v156/artwork/my_foundation.webp",
    "v156/artwork/my_sweet_little_star.webp",
    "v156/artwork/need_for_speed.webp",
    "v156/artwork/nessun_dorma.webp",
    "v156/artwork/nice_girl.webp",
    "v156/artwork/notte_di_silenzio_2.webp",
    "v156/artwork/nuora_selvaggia.webp",
    "v156/artwork/o_sanctissima.webp",
    "v156/artwork/one_in_a_quarter_billion.webp",
    "v156/artwork/one_pulse.webp",
    "v156/artwork/paradox_love.webp",
    "v156/artwork/password_expired.webp",
    "v156/artwork/password_expired_live.webp",
    "v156/artwork/pathetique.webp",
    "v156/artwork/peaks_of_gold.webp",
    "v156/artwork/play_it_again.webp",
    "v156/artwork/private_lake.webp",
    "v156/artwork/radio_trash.webp",
    "v156/artwork/regina_di_niente.webp",
    "v156/artwork/resti_qui.webp",
    "v156/artwork/ride_the_groove.webp",
    "v156/artwork/rocker_songwriter.webp",
    "v156/artwork/rosso_panigale.webp",
    "v156/artwork/sailing_on_open_water.webp",
    "v156/artwork/sanctified_sinner.webp",
    "v156/artwork/sanctuary_riot.webp",
    "v156/artwork/scendi_dalla_sella.webp",
    "v156/artwork/schools_out.webp",
    "v156/artwork/set_the_spirit_free.webp",
    "v156/artwork/settembre_mi_guarda.jpg",
    "v156/artwork/settembre_mi_guarda.webp",
    "v156/artwork/siblings.webp",
    "v156/artwork/skeleton_dance.webp",
    "v156/artwork/slippery_road.webp",
    "v156/artwork/social_lubricant.webp",
    "v156/artwork/soulmate.webp",
    "v156/artwork/southern_belle.webp",
    "v156/artwork/southern_heat.webp",
    "v156/artwork/southerns_eve.webp",
    "v156/artwork/spacca_il_cristallo.webp",
    "v156/artwork/spooky.webp",
    "v156/artwork/spring.webp",
    "v156/artwork/storia_di_natale_I.webp",
    "v156/artwork/storia_di_natale_II.webp",
    "v156/artwork/storm_of_the_abyss.webp",
    "v156/artwork/summers_farewell.webp",
    "v156/artwork/surfing_girl_wild_and_free.webp",
    "v156/artwork/tabby_gonzalez.webp",
    "v156/artwork/the_city_i_long_for.webp",
    "v156/artwork/the_dive.webp",
    "v156/artwork/the_hard_way.webp",
    "v156/artwork/the_hook.webp",
    "v156/artwork/the_quiet_kind.webp",
    "v156/artwork/the_rhythm_of_the_fox.webp",
    "v156/artwork/the_rhythm_of_you.webp",
    "v156/artwork/the_sharpened_bow.webp",
    "v156/artwork/the_sirens_anchor.webp",
    "v156/artwork/the_soft_return.webp",
    "v156/artwork/the_steel_winged_swan.webp",
    "v156/artwork/this_is_fine.webp",
    "v156/artwork/tide_on_stone.webp",
    "v156/artwork/toccata.webp",
    "v156/artwork/trick_or_treat.webp",
    "v156/artwork/turbine_di_natale.webp",
    "v156/artwork/un_cuore_sincero.webp",
    "v156/artwork/un_docile_arco.webp",
    "v156/artwork/un_tuffo_al_cuore.webp",
    "v156/artwork/uncaged.webp",
    "v156/artwork/upon_a_winding_trail.webp",
    "v156/artwork/venezia.webp",
    "v156/artwork/verona.webp",
    "v156/artwork/vetro_di_genova.webp",
    "v156/artwork/weekend.webp",
    "v156/artwork/whiteout.webp",
    "v156/artwork/winterstorm.webp",
    "v156/css/style 20260815_1400.css",
    "v156/css/style 20261007_1800.css",
    "v156/css/style copy.css",
    "v156/css/style.css",
    "v156/datenschutz.html",
    "v156/essays/embeddings.html",
    "v156/essays/essay1.html",
    "v156/essays/gemini-code-1782138112807.html",
    "v156/essays/ssm.html",
    "v156/essays/transformers.html",
    "v156/images/Guitar-in-Dolomites.webp",
    "v156/images/Hero.webp",
    "v156/images/Hero_1.webp",
    "v156/images/Hero_1_Square.webp",
    "v156/images/Hero_2.webp",
    "v156/images/Julia-skiing-Dolomites.webp",
    "v156/images/Stage_1.webp",
    "v156/images/Stage_2.webp",
    "v156/images/Stage_3.webp",
    "v156/images/Stage_4.webp",
    "v156/images/Stage_5.webp",
    "v156/images/Stage_6.webp",
    "v156/images/Stage_7.webp",
    "v156/images/Stage_8.webp",
    "v156/images/embeddings_music.webp",
    "v156/images/embeddings_words.webp",
    "v156/images/icons/app_icon_192 copy.png",
    "v156/images/icons/app_icon_192.png",
    "v156/images/icons/app_icon_512 copy.png",
    "v156/images/icons/app_icon_512.png",
    "v156/images/julia_embeddings.webp",
    "v156/images/julia_ssm_equations.webp",
    "v156/images/password_expired_live.webp",
    "v156/images/podcasts.webp",
    "v156/images/southern_belle.webp",
    "v156/images/ssm_diagram.webp",
    "v156/images/surfing_girl_wild_and_free.webp",
    "v156/images/under_the_hood.webp",
    "v156/images/witch.webp",
    "v156/impressum.html",
    "v156/index.html",
    "v156/js/DiaryService.js",
    "v156/js/Director.js",
    "v156/js/Main 20260319_1300.js",
    "v156/js/Main.js",
    "v156/js/PickerDrum.js",
    "v156/js/Placeholder.js",
    "v156/js/Player.js",
    "v156/js/SongCollection.js",
    "v156/js/SongService.js",
    "v156/js/VersionCore.js",
    "v156/js/ffmpeg.min.js",
    "v156/js/lucide.js",
    "v156/js/tailwindcss.js",
    "v156/js/tex-mml-chtml.js",
    "v156/legal_notice.html",
    "v156/manifest.json",
    "v156/placeholder/footer.html",
    "v156/placeholder/header.html",
    "v156/privacy_policy.html"
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
