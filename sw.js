const STATIC_CACHE = 'julia-site-v158';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v158/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v158/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v158/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v158/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v158/artwork/a_cinque_metri_dal_cielo.webp",
    "v158/artwork/a_slow_blossoming_rose.webp",
    "v158/artwork/alejandro.webp",
    "v158/artwork/alta_tensione.webp",
    "v158/artwork/antitoxic.webp",
    "v158/artwork/autumns_whisper.webp",
    "v158/artwork/avalanche.webp",
    "v158/artwork/betrayal.webp",
    "v158/artwork/big_dreams_shine.webp",
    "v158/artwork/big_dreams_shine_live.webp",
    "v158/artwork/bite_of_the_night.webp",
    "v158/artwork/black_cat_bones.webp",
    "v158/artwork/boring.webp",
    "v158/artwork/brainrot.webp",
    "v158/artwork/brooklyn.webp",
    "v158/artwork/buckn_the_bain.webp",
    "v158/artwork/buio_perfetto.webp",
    "v158/artwork/cheerleader.webp",
    "v158/artwork/christmas_oratorio.webp",
    "v158/artwork/coffee_in_amsterdam.webp",
    "v158/artwork/cool_fire.webp",
    "v158/artwork/cuore_di_lupa.webp",
    "v158/artwork/dancing_on_your_grave.webp",
    "v158/artwork/date_disaster.webp",
    "v158/artwork/deep_blue.webp",
    "v158/artwork/deepdive_1.webp",
    "v158/artwork/deepdive_2.webp",
    "v158/artwork/default.webp",
    "v158/artwork/delta_blues.webp",
    "v158/artwork/digital_ghost.webp",
    "v158/artwork/disco_flashback.webp",
    "v158/artwork/disco_flashback_2.webp",
    "v158/artwork/disposable.webp",
    "v158/artwork/distortion.webp",
    "v158/artwork/domenica_in_giardino.webp",
    "v158/artwork/drunk_not_dumb.webp",
    "v158/artwork/duecento_all_ora.webp",
    "v158/artwork/dynamite.webp",
    "v158/artwork/electric_hearts.webp",
    "v158/artwork/embers_and_sparks.webp",
    "v158/artwork/esultate_gioite.webp",
    "v158/artwork/faro_nel_temporale.webp",
    "v158/artwork/fences_down.webp",
    "v158/artwork/ferro_e_canna.webp",
    "v158/artwork/fine_apnea.webp",
    "v158/artwork/fine_apnea_2.webp",
    "v158/artwork/fire_in_my_veins.webp",
    "v158/artwork/first_steps_to_stardom.webp",
    "v158/artwork/fog_of_fear.webp",
    "v158/artwork/forever.webp",
    "v158/artwork/fornello_rosso.webp",
    "v158/artwork/four_chords_later.webp",
    "v158/artwork/friday_night.webp",
    "v158/artwork/from_first_steps_to_stardom.webp",
    "v158/artwork/frost_and_friction.webp",
    "v158/artwork/frozen_heart.webp",
    "v158/artwork/fuoco_nel_legno.webp",
    "v158/artwork/fuori_dai_piedi.webp",
    "v158/artwork/fuori_dai_piedi_live.webp",
    "v158/artwork/fuori_dai_piedi_live_v6.webp",
    "v158/artwork/garage_band.webp",
    "v158/artwork/ghost_in_the_garden.webp",
    "v158/artwork/god_save_the_king.webp",
    "v158/artwork/golden_days.webp",
    "v158/artwork/good_enough.webp",
    "v158/artwork/happy_birthday_in_heaven.webp",
    "v158/artwork/haunted_haven.webp",
    "v158/artwork/heart_of_fire_and_ice.webp",
    "v158/artwork/her_first_truck.webp",
    "v158/artwork/hes_still_here.webp",
    "v158/artwork/hes_still_here_2026.webp",
    "v158/artwork/home_now.webp",
    "v158/artwork/howling_wolves.webp",
    "v158/artwork/hurricane.webp",
    "v158/artwork/hypocrites.webp",
    "v158/artwork/i_hate_you.webp",
    "v158/artwork/i_love_school.webp",
    "v158/artwork/i_scream.webp",
    "v158/artwork/i_tuoi_piccoli_disordini.webp",
    "v158/artwork/il_passo_solitario.webp",
    "v158/artwork/il_segreto_della_notte_santa.webp",
    "v158/artwork/insatiable.webp",
    "v158/artwork/insult_the_ones_you_love.webp",
    "v158/artwork/introverted_girl.webp",
    "v158/artwork/jet_set.webp",
    "v158/artwork/julia_and_friends.webp",
    "v158/artwork/just_a_vibe.webp",
    "v158/artwork/just_wants_to_be_loved.webp",
    "v158/artwork/l_oro_di_cartone.webp",
    "v158/artwork/l_ultimo_adesso.webp",
    "v158/artwork/la_morte_di_cenerentola.webp",
    "v158/artwork/la_sposa_del_tuono.webp",
    "v158/artwork/la_sposa_del_tuono_live.webp",
    "v158/artwork/last_exit.webp",
    "v158/artwork/left_lane_legend.webp",
    "v158/artwork/little_butterflies.webp",
    "v158/artwork/luce_rossa.webp",
    "v158/artwork/luck_for_granted.webp",
    "v158/artwork/maybe_they_knew.webp",
    "v158/artwork/mind_the_gap.webp",
    "v158/artwork/moto_rossa_di_natale.webp",
    "v158/artwork/my_foundation.webp",
    "v158/artwork/my_sweet_little_star.webp",
    "v158/artwork/need_for_speed.webp",
    "v158/artwork/nessun_dorma.webp",
    "v158/artwork/nice_girl.webp",
    "v158/artwork/notte_di_silenzio_2.webp",
    "v158/artwork/nuora_selvaggia.webp",
    "v158/artwork/o_sanctissima.webp",
    "v158/artwork/one_in_a_quarter_billion.webp",
    "v158/artwork/one_pulse.webp",
    "v158/artwork/paradox_love.webp",
    "v158/artwork/password_expired.webp",
    "v158/artwork/password_expired_live.webp",
    "v158/artwork/pathetique.webp",
    "v158/artwork/peaks_of_gold.webp",
    "v158/artwork/play_it_again.webp",
    "v158/artwork/private_lake.webp",
    "v158/artwork/radio_trash.webp",
    "v158/artwork/regina_di_niente.webp",
    "v158/artwork/resti_qui.webp",
    "v158/artwork/ride_the_groove.webp",
    "v158/artwork/rocker_songwriter.webp",
    "v158/artwork/rosso_panigale.webp",
    "v158/artwork/sailing_on_open_water.webp",
    "v158/artwork/sanctified_sinner.webp",
    "v158/artwork/sanctuary_riot.webp",
    "v158/artwork/scendi_dalla_sella.webp",
    "v158/artwork/schools_out.webp",
    "v158/artwork/set_the_spirit_free.webp",
    "v158/artwork/settembre_mi_guarda.jpg",
    "v158/artwork/settembre_mi_guarda.webp",
    "v158/artwork/siblings.webp",
    "v158/artwork/skeleton_dance.webp",
    "v158/artwork/slippery_road.webp",
    "v158/artwork/social_lubricant.webp",
    "v158/artwork/soulmate.webp",
    "v158/artwork/southern_belle.webp",
    "v158/artwork/southern_heat.webp",
    "v158/artwork/southerns_eve.webp",
    "v158/artwork/spacca_il_cristallo.webp",
    "v158/artwork/spooky.webp",
    "v158/artwork/spring.webp",
    "v158/artwork/storia_di_natale_I.webp",
    "v158/artwork/storia_di_natale_II.webp",
    "v158/artwork/storm_of_the_abyss.webp",
    "v158/artwork/summers_farewell.webp",
    "v158/artwork/surfing_girl_wild_and_free.webp",
    "v158/artwork/tabby_gonzalez.webp",
    "v158/artwork/the_city_i_long_for.webp",
    "v158/artwork/the_dive.webp",
    "v158/artwork/the_hard_way.webp",
    "v158/artwork/the_hook.webp",
    "v158/artwork/the_quiet_kind.webp",
    "v158/artwork/the_rhythm_of_the_fox.webp",
    "v158/artwork/the_rhythm_of_you.webp",
    "v158/artwork/the_sharpened_bow.webp",
    "v158/artwork/the_sirens_anchor.webp",
    "v158/artwork/the_soft_return.webp",
    "v158/artwork/the_steel_winged_swan.webp",
    "v158/artwork/this_is_fine.webp",
    "v158/artwork/tide_on_stone.webp",
    "v158/artwork/toccata.webp",
    "v158/artwork/trick_or_treat.webp",
    "v158/artwork/turbine_di_natale.webp",
    "v158/artwork/un_cuore_sincero.webp",
    "v158/artwork/un_docile_arco.webp",
    "v158/artwork/un_tuffo_al_cuore.webp",
    "v158/artwork/uncaged.webp",
    "v158/artwork/upon_a_winding_trail.webp",
    "v158/artwork/venezia.webp",
    "v158/artwork/verona.webp",
    "v158/artwork/vetro_di_genova.webp",
    "v158/artwork/weekend.webp",
    "v158/artwork/whiteout.webp",
    "v158/artwork/winterstorm.webp",
    "v158/css/style 20260815_1400.css",
    "v158/css/style 20261007_1800.css",
    "v158/css/style copy.css",
    "v158/css/style.css",
    "v158/datenschutz.html",
    "v158/essays/embeddings.html",
    "v158/essays/essay1.html",
    "v158/essays/gemini-code-1782138112807.html",
    "v158/essays/ssm.html",
    "v158/essays/transformers.html",
    "v158/images/Guitar-in-Dolomites.webp",
    "v158/images/Hero.webp",
    "v158/images/Hero_1.webp",
    "v158/images/Hero_1_Square.webp",
    "v158/images/Hero_2.webp",
    "v158/images/Julia-skiing-Dolomites.webp",
    "v158/images/Stage_1.webp",
    "v158/images/Stage_2.webp",
    "v158/images/Stage_3.webp",
    "v158/images/Stage_4.webp",
    "v158/images/Stage_5.webp",
    "v158/images/Stage_6.webp",
    "v158/images/Stage_7.webp",
    "v158/images/Stage_8.webp",
    "v158/images/embeddings_music.webp",
    "v158/images/embeddings_words.webp",
    "v158/images/icons/app_icon_192 copy.png",
    "v158/images/icons/app_icon_192.png",
    "v158/images/icons/app_icon_512 copy.png",
    "v158/images/icons/app_icon_512.png",
    "v158/images/julia_embeddings.webp",
    "v158/images/julia_ssm_equations.webp",
    "v158/images/password_expired_live.webp",
    "v158/images/podcasts.webp",
    "v158/images/southern_belle.webp",
    "v158/images/ssm_diagram.webp",
    "v158/images/surfing_girl_wild_and_free.webp",
    "v158/images/under_the_hood.webp",
    "v158/images/witch.webp",
    "v158/impressum.html",
    "v158/index.html",
    "v158/js/DiaryService.js",
    "v158/js/Director.js",
    "v158/js/Main 20260319_1300.js",
    "v158/js/Main.js",
    "v158/js/PickerDrum.js",
    "v158/js/Placeholder.js",
    "v158/js/Player.js",
    "v158/js/SongCollection.js",
    "v158/js/SongService.js",
    "v158/js/VersionCore.js",
    "v158/js/ffmpeg.min.js",
    "v158/js/lucide.js",
    "v158/js/tailwindcss.js",
    "v158/js/tex-mml-chtml.js",
    "v158/legal_notice.html",
    "v158/manifest.json",
    "v158/placeholder/footer.html",
    "v158/placeholder/header.html",
    "v158/privacy_policy.html"
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
