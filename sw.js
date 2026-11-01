const STATIC_CACHE = 'julia-site-v150';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v150/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v150/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v150/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v150/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v150/artwork/a_cinque_metri_dal_cielo.webp",
    "v150/artwork/a_slow_blossoming_rose.webp",
    "v150/artwork/alejandro.webp",
    "v150/artwork/alta_tensione.webp",
    "v150/artwork/antitoxic.webp",
    "v150/artwork/autumns_whisper.webp",
    "v150/artwork/avalanche.webp",
    "v150/artwork/betrayal.webp",
    "v150/artwork/big_dreams_shine.webp",
    "v150/artwork/big_dreams_shine_live.webp",
    "v150/artwork/bite_of_the_night.webp",
    "v150/artwork/black_cat_bones.webp",
    "v150/artwork/boring.webp",
    "v150/artwork/brainrot.webp",
    "v150/artwork/brooklyn.webp",
    "v150/artwork/buckn_the_bain.webp",
    "v150/artwork/buio_perfetto.webp",
    "v150/artwork/cheerleader.webp",
    "v150/artwork/christmas_oratorio.webp",
    "v150/artwork/coffee_in_amsterdam.webp",
    "v150/artwork/cool_fire.webp",
    "v150/artwork/cuore_di_lupa.webp",
    "v150/artwork/dancing_on_your_grave.webp",
    "v150/artwork/date_disaster.webp",
    "v150/artwork/deep_blue.webp",
    "v150/artwork/deepdive_1.webp",
    "v150/artwork/deepdive_2.webp",
    "v150/artwork/default.webp",
    "v150/artwork/delta_blues.webp",
    "v150/artwork/digital_ghost.webp",
    "v150/artwork/disco_flashback.webp",
    "v150/artwork/disco_flashback_2.webp",
    "v150/artwork/disposable.webp",
    "v150/artwork/distortion.webp",
    "v150/artwork/domenica_in_giardino.webp",
    "v150/artwork/drunk_not_dumb.webp",
    "v150/artwork/duecento_all_ora.webp",
    "v150/artwork/dynamite.webp",
    "v150/artwork/electric_hearts.webp",
    "v150/artwork/embers_and_sparks.webp",
    "v150/artwork/esultate_gioite.webp",
    "v150/artwork/faro_nel_temporale.webp",
    "v150/artwork/fences_down.webp",
    "v150/artwork/ferro_e_canna.webp",
    "v150/artwork/fine_apnea.webp",
    "v150/artwork/fine_apnea_2.webp",
    "v150/artwork/fire_in_my_veins.webp",
    "v150/artwork/first_steps_to_stardom.webp",
    "v150/artwork/fog_of_fear.webp",
    "v150/artwork/forever.webp",
    "v150/artwork/fornello_rosso.webp",
    "v150/artwork/four_chords_later.webp",
    "v150/artwork/friday_night.webp",
    "v150/artwork/from_first_steps_to_stardom.webp",
    "v150/artwork/frost_and_friction.webp",
    "v150/artwork/frozen_heart.webp",
    "v150/artwork/fuoco_nel_legno.webp",
    "v150/artwork/fuori_dai_piedi.webp",
    "v150/artwork/fuori_dai_piedi_live.webp",
    "v150/artwork/fuori_dai_piedi_live_v6.webp",
    "v150/artwork/garage_band.webp",
    "v150/artwork/ghost_in_the_garden.webp",
    "v150/artwork/god_save_the_king.webp",
    "v150/artwork/golden_days.webp",
    "v150/artwork/good_enough.webp",
    "v150/artwork/happy_birthday_in_heaven.webp",
    "v150/artwork/haunted_haven.webp",
    "v150/artwork/heart_of_fire_and_ice.webp",
    "v150/artwork/her_first_truck.webp",
    "v150/artwork/hes_still_here.webp",
    "v150/artwork/hes_still_here_2026.webp",
    "v150/artwork/home_now.webp",
    "v150/artwork/howling_wolves.webp",
    "v150/artwork/hurricane.webp",
    "v150/artwork/hypocrites.webp",
    "v150/artwork/i_hate_you.webp",
    "v150/artwork/i_love_school.webp",
    "v150/artwork/i_scream.webp",
    "v150/artwork/i_tuoi_piccoli_disordini.webp",
    "v150/artwork/il_passo_solitario.webp",
    "v150/artwork/insatiable.webp",
    "v150/artwork/insult_the_ones_you_love.webp",
    "v150/artwork/introverted_girl.webp",
    "v150/artwork/jet_set.webp",
    "v150/artwork/julia_and_friends.webp",
    "v150/artwork/just_a_vibe.webp",
    "v150/artwork/just_wants_to_be_loved.webp",
    "v150/artwork/l_oro_di_cartone.webp",
    "v150/artwork/l_ultimo_adesso.webp",
    "v150/artwork/la_morte_di_cenerentola.webp",
    "v150/artwork/la_sposa_del_tuono.webp",
    "v150/artwork/la_sposa_del_tuono_live.webp",
    "v150/artwork/last_exit.webp",
    "v150/artwork/left_lane_legend.webp",
    "v150/artwork/little_butterflies.webp",
    "v150/artwork/luce_rossa.webp",
    "v150/artwork/luck_for_granted.webp",
    "v150/artwork/maybe_they_knew.webp",
    "v150/artwork/mind_the_gap.webp",
    "v150/artwork/my_foundation.webp",
    "v150/artwork/my_sweet_little_star.webp",
    "v150/artwork/need_for_speed.webp",
    "v150/artwork/nessun_dorma.webp",
    "v150/artwork/nice_girl.webp",
    "v150/artwork/nuora_selvaggia.webp",
    "v150/artwork/one_in_a_quarter_billion.webp",
    "v150/artwork/one_pulse.webp",
    "v150/artwork/paradox_love.webp",
    "v150/artwork/password_expired.webp",
    "v150/artwork/password_expired_live.webp",
    "v150/artwork/pathetique.webp",
    "v150/artwork/peaks_of_gold.webp",
    "v150/artwork/play_it_again.webp",
    "v150/artwork/private_lake.webp",
    "v150/artwork/radio_trash.webp",
    "v150/artwork/regina_di_niente.webp",
    "v150/artwork/resti_qui.webp",
    "v150/artwork/ride_the_groove.webp",
    "v150/artwork/rocker_songwriter.webp",
    "v150/artwork/rosso_panigale.webp",
    "v150/artwork/sailing_on_open_water.webp",
    "v150/artwork/sanctified_sinner.webp",
    "v150/artwork/sanctuary_riot.webp",
    "v150/artwork/scendi_dalla_sella.webp",
    "v150/artwork/schools_out.webp",
    "v150/artwork/set_the_spirit_free.webp",
    "v150/artwork/settembre_mi_guarda.jpg",
    "v150/artwork/settembre_mi_guarda.webp",
    "v150/artwork/siblings.webp",
    "v150/artwork/skeleton_dance.webp",
    "v150/artwork/slippery_road.webp",
    "v150/artwork/social_lubricant.webp",
    "v150/artwork/soulmate.webp",
    "v150/artwork/southern_belle.webp",
    "v150/artwork/southern_heat.webp",
    "v150/artwork/southerns_eve.webp",
    "v150/artwork/spacca_il_cristallo.webp",
    "v150/artwork/spooky.webp",
    "v150/artwork/spring.webp",
    "v150/artwork/storia_di_natale_I.webp",
    "v150/artwork/storm_of_the_abyss.webp",
    "v150/artwork/summers_farewell.webp",
    "v150/artwork/surfing_girl_wild_and_free.webp",
    "v150/artwork/tabby_gonzalez.webp",
    "v150/artwork/the_city_i_long_for.webp",
    "v150/artwork/the_dive.webp",
    "v150/artwork/the_hard_way.webp",
    "v150/artwork/the_hook.webp",
    "v150/artwork/the_quiet_kind.webp",
    "v150/artwork/the_rhythm_of_the_fox.webp",
    "v150/artwork/the_rhythm_of_you.webp",
    "v150/artwork/the_sharpened_bow.webp",
    "v150/artwork/the_sirens_anchor.webp",
    "v150/artwork/the_soft_return.webp",
    "v150/artwork/the_steel_winged_swan.webp",
    "v150/artwork/this_is_fine.webp",
    "v150/artwork/tide_on_stone.webp",
    "v150/artwork/toccata.webp",
    "v150/artwork/trick_or_treat.webp",
    "v150/artwork/un_cuore_sincero.webp",
    "v150/artwork/un_docile_arco.webp",
    "v150/artwork/un_tuffo_al_cuore.webp",
    "v150/artwork/uncaged.webp",
    "v150/artwork/upon_a_winding_trail.webp",
    "v150/artwork/venezia.webp",
    "v150/artwork/verona.webp",
    "v150/artwork/vetro_di_genova.webp",
    "v150/artwork/weekend.webp",
    "v150/artwork/whiteout.webp",
    "v150/artwork/winterstorm.webp",
    "v150/css/style 20260815_1400.css",
    "v150/css/style 20261007_1800.css",
    "v150/css/style copy.css",
    "v150/css/style.css",
    "v150/datenschutz.html",
    "v150/essays/embeddings.html",
    "v150/essays/essay1.html",
    "v150/essays/gemini-code-1782138112807.html",
    "v150/essays/ssm.html",
    "v150/essays/transformers.html",
    "v150/images/Guitar-in-Dolomites.webp",
    "v150/images/Hero.webp",
    "v150/images/Hero_1.webp",
    "v150/images/Hero_1_Square.webp",
    "v150/images/Hero_2.webp",
    "v150/images/Julia-skiing-Dolomites.webp",
    "v150/images/Stage_1.webp",
    "v150/images/Stage_2.webp",
    "v150/images/Stage_3.webp",
    "v150/images/Stage_4.webp",
    "v150/images/Stage_5.webp",
    "v150/images/Stage_6.webp",
    "v150/images/Stage_7.webp",
    "v150/images/Stage_8.webp",
    "v150/images/embeddings_music.webp",
    "v150/images/embeddings_words.webp",
    "v150/images/icons/app_icon_192 copy.png",
    "v150/images/icons/app_icon_192.png",
    "v150/images/icons/app_icon_512 copy.png",
    "v150/images/icons/app_icon_512.png",
    "v150/images/julia_embeddings.webp",
    "v150/images/julia_ssm_equations.webp",
    "v150/images/password_expired_live.webp",
    "v150/images/podcasts.webp",
    "v150/images/southern_belle.webp",
    "v150/images/ssm_diagram.webp",
    "v150/images/surfing_girl_wild_and_free.webp",
    "v150/images/under_the_hood.webp",
    "v150/images/witch.webp",
    "v150/impressum.html",
    "v150/index.html",
    "v150/js/DiaryService.js",
    "v150/js/Director.js",
    "v150/js/Main 20260319_1300.js",
    "v150/js/Main.js",
    "v150/js/PickerDrum.js",
    "v150/js/Placeholder.js",
    "v150/js/Player.js",
    "v150/js/SongCollection.js",
    "v150/js/SongService.js",
    "v150/js/VersionCore.js",
    "v150/js/ffmpeg.min.js",
    "v150/js/lucide.js",
    "v150/js/tailwindcss.js",
    "v150/js/tex-mml-chtml.js",
    "v150/legal_notice.html",
    "v150/manifest.json",
    "v150/placeholder/footer.html",
    "v150/placeholder/header.html",
    "v150/privacy_policy.html"
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
