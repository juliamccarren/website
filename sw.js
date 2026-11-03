const STATIC_CACHE = 'julia-site-v152';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v152/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v152/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v152/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v152/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v152/artwork/a_cinque_metri_dal_cielo.webp",
    "v152/artwork/a_slow_blossoming_rose.webp",
    "v152/artwork/alejandro.webp",
    "v152/artwork/alta_tensione.webp",
    "v152/artwork/antitoxic.webp",
    "v152/artwork/autumns_whisper.webp",
    "v152/artwork/avalanche.webp",
    "v152/artwork/betrayal.webp",
    "v152/artwork/big_dreams_shine.webp",
    "v152/artwork/big_dreams_shine_live.webp",
    "v152/artwork/bite_of_the_night.webp",
    "v152/artwork/black_cat_bones.webp",
    "v152/artwork/boring.webp",
    "v152/artwork/brainrot.webp",
    "v152/artwork/brooklyn.webp",
    "v152/artwork/buckn_the_bain.webp",
    "v152/artwork/buio_perfetto.webp",
    "v152/artwork/cheerleader.webp",
    "v152/artwork/christmas_oratorio.webp",
    "v152/artwork/coffee_in_amsterdam.webp",
    "v152/artwork/cool_fire.webp",
    "v152/artwork/cuore_di_lupa.webp",
    "v152/artwork/dancing_on_your_grave.webp",
    "v152/artwork/date_disaster.webp",
    "v152/artwork/deep_blue.webp",
    "v152/artwork/deepdive_1.webp",
    "v152/artwork/deepdive_2.webp",
    "v152/artwork/default.webp",
    "v152/artwork/delta_blues.webp",
    "v152/artwork/digital_ghost.webp",
    "v152/artwork/disco_flashback.webp",
    "v152/artwork/disco_flashback_2.webp",
    "v152/artwork/disposable.webp",
    "v152/artwork/distortion.webp",
    "v152/artwork/domenica_in_giardino.webp",
    "v152/artwork/drunk_not_dumb.webp",
    "v152/artwork/duecento_all_ora.webp",
    "v152/artwork/dynamite.webp",
    "v152/artwork/electric_hearts.webp",
    "v152/artwork/embers_and_sparks.webp",
    "v152/artwork/esultate_gioite.webp",
    "v152/artwork/faro_nel_temporale.webp",
    "v152/artwork/fences_down.webp",
    "v152/artwork/ferro_e_canna.webp",
    "v152/artwork/fine_apnea.webp",
    "v152/artwork/fine_apnea_2.webp",
    "v152/artwork/fire_in_my_veins.webp",
    "v152/artwork/first_steps_to_stardom.webp",
    "v152/artwork/fog_of_fear.webp",
    "v152/artwork/forever.webp",
    "v152/artwork/fornello_rosso.webp",
    "v152/artwork/four_chords_later.webp",
    "v152/artwork/friday_night.webp",
    "v152/artwork/from_first_steps_to_stardom.webp",
    "v152/artwork/frost_and_friction.webp",
    "v152/artwork/frozen_heart.webp",
    "v152/artwork/fuoco_nel_legno.webp",
    "v152/artwork/fuori_dai_piedi.webp",
    "v152/artwork/fuori_dai_piedi_live.webp",
    "v152/artwork/fuori_dai_piedi_live_v6.webp",
    "v152/artwork/garage_band.webp",
    "v152/artwork/ghost_in_the_garden.webp",
    "v152/artwork/god_save_the_king.webp",
    "v152/artwork/golden_days.webp",
    "v152/artwork/good_enough.webp",
    "v152/artwork/happy_birthday_in_heaven.webp",
    "v152/artwork/haunted_haven.webp",
    "v152/artwork/heart_of_fire_and_ice.webp",
    "v152/artwork/her_first_truck.webp",
    "v152/artwork/hes_still_here.webp",
    "v152/artwork/hes_still_here_2026.webp",
    "v152/artwork/home_now.webp",
    "v152/artwork/howling_wolves.webp",
    "v152/artwork/hurricane.webp",
    "v152/artwork/hypocrites.webp",
    "v152/artwork/i_hate_you.webp",
    "v152/artwork/i_love_school.webp",
    "v152/artwork/i_scream.webp",
    "v152/artwork/i_tuoi_piccoli_disordini.webp",
    "v152/artwork/il_passo_solitario.webp",
    "v152/artwork/insatiable.webp",
    "v152/artwork/insult_the_ones_you_love.webp",
    "v152/artwork/introverted_girl.webp",
    "v152/artwork/jet_set.webp",
    "v152/artwork/julia_and_friends.webp",
    "v152/artwork/just_a_vibe.webp",
    "v152/artwork/just_wants_to_be_loved.webp",
    "v152/artwork/l_oro_di_cartone.webp",
    "v152/artwork/l_ultimo_adesso.webp",
    "v152/artwork/la_morte_di_cenerentola.webp",
    "v152/artwork/la_sposa_del_tuono.webp",
    "v152/artwork/la_sposa_del_tuono_live.webp",
    "v152/artwork/last_exit.webp",
    "v152/artwork/left_lane_legend.webp",
    "v152/artwork/little_butterflies.webp",
    "v152/artwork/luce_rossa.webp",
    "v152/artwork/luck_for_granted.webp",
    "v152/artwork/maybe_they_knew.webp",
    "v152/artwork/mind_the_gap.webp",
    "v152/artwork/my_foundation.webp",
    "v152/artwork/my_sweet_little_star.webp",
    "v152/artwork/need_for_speed.webp",
    "v152/artwork/nessun_dorma.webp",
    "v152/artwork/nice_girl.webp",
    "v152/artwork/notte_di_silenzio.webp",
    "v152/artwork/nuora_selvaggia.webp",
    "v152/artwork/one_in_a_quarter_billion.webp",
    "v152/artwork/one_pulse.webp",
    "v152/artwork/paradox_love.webp",
    "v152/artwork/password_expired.webp",
    "v152/artwork/password_expired_live.webp",
    "v152/artwork/pathetique.webp",
    "v152/artwork/peaks_of_gold.webp",
    "v152/artwork/play_it_again.webp",
    "v152/artwork/private_lake.webp",
    "v152/artwork/radio_trash.webp",
    "v152/artwork/regina_di_niente.webp",
    "v152/artwork/resti_qui.webp",
    "v152/artwork/ride_the_groove.webp",
    "v152/artwork/rocker_songwriter.webp",
    "v152/artwork/rosso_panigale.webp",
    "v152/artwork/sailing_on_open_water.webp",
    "v152/artwork/sanctified_sinner.webp",
    "v152/artwork/sanctuary_riot.webp",
    "v152/artwork/scendi_dalla_sella.webp",
    "v152/artwork/schools_out.webp",
    "v152/artwork/set_the_spirit_free.webp",
    "v152/artwork/settembre_mi_guarda.jpg",
    "v152/artwork/settembre_mi_guarda.webp",
    "v152/artwork/siblings.webp",
    "v152/artwork/skeleton_dance.webp",
    "v152/artwork/slippery_road.webp",
    "v152/artwork/social_lubricant.webp",
    "v152/artwork/soulmate.webp",
    "v152/artwork/southern_belle.webp",
    "v152/artwork/southern_heat.webp",
    "v152/artwork/southerns_eve.webp",
    "v152/artwork/spacca_il_cristallo.webp",
    "v152/artwork/spooky.webp",
    "v152/artwork/spring.webp",
    "v152/artwork/storia_di_natale_I.webp",
    "v152/artwork/storm_of_the_abyss.webp",
    "v152/artwork/summers_farewell.webp",
    "v152/artwork/surfing_girl_wild_and_free.webp",
    "v152/artwork/tabby_gonzalez.webp",
    "v152/artwork/the_city_i_long_for.webp",
    "v152/artwork/the_dive.webp",
    "v152/artwork/the_hard_way.webp",
    "v152/artwork/the_hook.webp",
    "v152/artwork/the_quiet_kind.webp",
    "v152/artwork/the_rhythm_of_the_fox.webp",
    "v152/artwork/the_rhythm_of_you.webp",
    "v152/artwork/the_sharpened_bow.webp",
    "v152/artwork/the_sirens_anchor.webp",
    "v152/artwork/the_soft_return.webp",
    "v152/artwork/the_steel_winged_swan.webp",
    "v152/artwork/this_is_fine.webp",
    "v152/artwork/tide_on_stone.webp",
    "v152/artwork/toccata.webp",
    "v152/artwork/trick_or_treat.webp",
    "v152/artwork/un_cuore_sincero.webp",
    "v152/artwork/un_docile_arco.webp",
    "v152/artwork/un_tuffo_al_cuore.webp",
    "v152/artwork/uncaged.webp",
    "v152/artwork/upon_a_winding_trail.webp",
    "v152/artwork/venezia.webp",
    "v152/artwork/verona.webp",
    "v152/artwork/vetro_di_genova.webp",
    "v152/artwork/weekend.webp",
    "v152/artwork/whiteout.webp",
    "v152/artwork/winterstorm.webp",
    "v152/css/style 20260815_1400.css",
    "v152/css/style 20261007_1800.css",
    "v152/css/style copy.css",
    "v152/css/style.css",
    "v152/datenschutz.html",
    "v152/essays/embeddings.html",
    "v152/essays/essay1.html",
    "v152/essays/gemini-code-1782138112807.html",
    "v152/essays/ssm.html",
    "v152/essays/transformers.html",
    "v152/images/Guitar-in-Dolomites.webp",
    "v152/images/Hero.webp",
    "v152/images/Hero_1.webp",
    "v152/images/Hero_1_Square.webp",
    "v152/images/Hero_2.webp",
    "v152/images/Julia-skiing-Dolomites.webp",
    "v152/images/Stage_1.webp",
    "v152/images/Stage_2.webp",
    "v152/images/Stage_3.webp",
    "v152/images/Stage_4.webp",
    "v152/images/Stage_5.webp",
    "v152/images/Stage_6.webp",
    "v152/images/Stage_7.webp",
    "v152/images/Stage_8.webp",
    "v152/images/embeddings_music.webp",
    "v152/images/embeddings_words.webp",
    "v152/images/icons/app_icon_192 copy.png",
    "v152/images/icons/app_icon_192.png",
    "v152/images/icons/app_icon_512 copy.png",
    "v152/images/icons/app_icon_512.png",
    "v152/images/julia_embeddings.webp",
    "v152/images/julia_ssm_equations.webp",
    "v152/images/password_expired_live.webp",
    "v152/images/podcasts.webp",
    "v152/images/southern_belle.webp",
    "v152/images/ssm_diagram.webp",
    "v152/images/surfing_girl_wild_and_free.webp",
    "v152/images/under_the_hood.webp",
    "v152/images/witch.webp",
    "v152/impressum.html",
    "v152/index.html",
    "v152/js/DiaryService.js",
    "v152/js/Director.js",
    "v152/js/Main 20260319_1300.js",
    "v152/js/Main.js",
    "v152/js/PickerDrum.js",
    "v152/js/Placeholder.js",
    "v152/js/Player.js",
    "v152/js/SongCollection.js",
    "v152/js/SongService.js",
    "v152/js/VersionCore.js",
    "v152/js/ffmpeg.min.js",
    "v152/js/lucide.js",
    "v152/js/tailwindcss.js",
    "v152/js/tex-mml-chtml.js",
    "v152/legal_notice.html",
    "v152/manifest.json",
    "v152/placeholder/footer.html",
    "v152/placeholder/header.html",
    "v152/privacy_policy.html"
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
