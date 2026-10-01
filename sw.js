const STATIC_CACHE = 'julia-site-v144';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v144/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v144/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v144/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v144/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v144/artwork/a_cinque_metri_dal_cielo.webp",
    "v144/artwork/a_slow_blossoming_rose.webp",
    "v144/artwork/alejandro.webp",
    "v144/artwork/alta_tensione.webp",
    "v144/artwork/antitoxic.webp",
    "v144/artwork/autumns_whisper.webp",
    "v144/artwork/avalanche.webp",
    "v144/artwork/betrayal.webp",
    "v144/artwork/big_dreams_shine.webp",
    "v144/artwork/big_dreams_shine_live.webp",
    "v144/artwork/bite_of_the_night.webp",
    "v144/artwork/black_cat_bones.webp",
    "v144/artwork/boring.webp",
    "v144/artwork/brainrot.webp",
    "v144/artwork/brooklyn.webp",
    "v144/artwork/buckn_the_bain.webp",
    "v144/artwork/buio_perfetto.webp",
    "v144/artwork/cheerleader.webp",
    "v144/artwork/coffee_in_amsterdam.webp",
    "v144/artwork/cool_fire.webp",
    "v144/artwork/cuore_di_lupa.webp",
    "v144/artwork/dancing_on_your_grave.webp",
    "v144/artwork/date_disaster.webp",
    "v144/artwork/deep_blue.webp",
    "v144/artwork/deepdive_1.webp",
    "v144/artwork/deepdive_2.webp",
    "v144/artwork/default.webp",
    "v144/artwork/delta_blues.webp",
    "v144/artwork/digital_ghost.webp",
    "v144/artwork/disco_flashback.webp",
    "v144/artwork/disco_flashback_2.webp",
    "v144/artwork/disposable.webp",
    "v144/artwork/distortion.webp",
    "v144/artwork/drunk_not_dumb.webp",
    "v144/artwork/duecento_all_ora.webp",
    "v144/artwork/dynamite.webp",
    "v144/artwork/electric_hearts.webp",
    "v144/artwork/embers_and_sparks.webp",
    "v144/artwork/faro_nel_temporale.webp",
    "v144/artwork/fences_down.webp",
    "v144/artwork/ferro_e_canna.webp",
    "v144/artwork/fine_apnea.webp",
    "v144/artwork/fine_apnea_2.webp",
    "v144/artwork/fire_in_my_veins.webp",
    "v144/artwork/first_steps_to_stardom.webp",
    "v144/artwork/fog_of_fear.webp",
    "v144/artwork/forever.webp",
    "v144/artwork/fornello_rosso.webp",
    "v144/artwork/four_chords_later.webp",
    "v144/artwork/friday_night.webp",
    "v144/artwork/from_first_steps_to_stardom.webp",
    "v144/artwork/frost_and_friction.webp",
    "v144/artwork/frozen_heart.webp",
    "v144/artwork/fuoco_nel_legno.webp",
    "v144/artwork/fuori_dai_piedi.webp",
    "v144/artwork/fuori_dai_piedi_live.webp",
    "v144/artwork/fuori_dai_piedi_live_v6.webp",
    "v144/artwork/garage_band.webp",
    "v144/artwork/ghost_in_the_garden.webp",
    "v144/artwork/god_save_the_king.webp",
    "v144/artwork/golden_days.webp",
    "v144/artwork/good_enough.webp",
    "v144/artwork/happy_birthday_in_heaven.webp",
    "v144/artwork/haunted_haven.webp",
    "v144/artwork/heart_of_fire_and_ice.webp",
    "v144/artwork/her_first_truck.webp",
    "v144/artwork/hes_still_here.webp",
    "v144/artwork/hes_still_here_2026.webp",
    "v144/artwork/home_now.webp",
    "v144/artwork/howling_wolves.webp",
    "v144/artwork/hurricane.webp",
    "v144/artwork/hypocrites.webp",
    "v144/artwork/i_hate_you.webp",
    "v144/artwork/i_love_school.webp",
    "v144/artwork/i_scream.webp",
    "v144/artwork/i_tuoi_piccoli_disordini.webp",
    "v144/artwork/il_passo_solitario.webp",
    "v144/artwork/insatiable.webp",
    "v144/artwork/insult_the_ones_you_love.webp",
    "v144/artwork/introverted_girl.webp",
    "v144/artwork/jet_set.webp",
    "v144/artwork/julia_and_friends.webp",
    "v144/artwork/just_a_vibe.webp",
    "v144/artwork/just_wants_to_be_loved.webp",
    "v144/artwork/l_ultimo_adesso.webp",
    "v144/artwork/la_morte_di_cenerentola.webp",
    "v144/artwork/la_sposa_del_tuono.webp",
    "v144/artwork/la_sposa_del_tuono_live.webp",
    "v144/artwork/last_exit.webp",
    "v144/artwork/left_lane_legend.webp",
    "v144/artwork/little_butterflies.webp",
    "v144/artwork/luce_rossa.webp",
    "v144/artwork/luck_for_granted.webp",
    "v144/artwork/maybe_they_knew.webp",
    "v144/artwork/mind_the_gap.webp",
    "v144/artwork/my_foundation.webp",
    "v144/artwork/my_sweet_little_star.webp",
    "v144/artwork/need_for_speed.webp",
    "v144/artwork/nessun_dorma.webp",
    "v144/artwork/nice_girl.webp",
    "v144/artwork/nuora_selvaggia.webp",
    "v144/artwork/one_in_a_quarter_billion.webp",
    "v144/artwork/one_pulse.webp",
    "v144/artwork/paradox_love.webp",
    "v144/artwork/password_expired.webp",
    "v144/artwork/password_expired_live.webp",
    "v144/artwork/pathetique.webp",
    "v144/artwork/peaks_of_gold.webp",
    "v144/artwork/play_it_again.webp",
    "v144/artwork/private_lake.webp",
    "v144/artwork/radio_trash.webp",
    "v144/artwork/regina_di_niente.webp",
    "v144/artwork/resti_qui.webp",
    "v144/artwork/ride_the_groove.webp",
    "v144/artwork/rocker_songwriter.webp",
    "v144/artwork/sailing_on_open_water.webp",
    "v144/artwork/sanctified_sinner.webp",
    "v144/artwork/sanctuary_riot.webp",
    "v144/artwork/scendi_dalla_sella.webp",
    "v144/artwork/schools_out.webp",
    "v144/artwork/set_the_spirit_free.webp",
    "v144/artwork/settembre_mi_guarda.jpg",
    "v144/artwork/settembre_mi_guarda.webp",
    "v144/artwork/siblings.webp",
    "v144/artwork/skeleton_dance.webp",
    "v144/artwork/slippery_road.webp",
    "v144/artwork/social_lubricant.webp",
    "v144/artwork/soulmate.webp",
    "v144/artwork/southern_belle.webp",
    "v144/artwork/southern_heat.webp",
    "v144/artwork/southerns_eve.webp",
    "v144/artwork/spacca_il_cristallo.webp",
    "v144/artwork/spooky.webp",
    "v144/artwork/spring.webp",
    "v144/artwork/storm_of_the_abyss.webp",
    "v144/artwork/summers_farewell.webp",
    "v144/artwork/surfing_girl_wild_and_free.webp",
    "v144/artwork/tabby_gonzalez.webp",
    "v144/artwork/the_city_i_long_for.webp",
    "v144/artwork/the_dive.webp",
    "v144/artwork/the_hard_way.webp",
    "v144/artwork/the_hook.webp",
    "v144/artwork/the_quiet_kind.webp",
    "v144/artwork/the_rhythm_of_the_fox.webp",
    "v144/artwork/the_rhythm_of_you.webp",
    "v144/artwork/the_sharpened_bow.webp",
    "v144/artwork/the_sirens_anchor.webp",
    "v144/artwork/the_soft_return.webp",
    "v144/artwork/the_steel_winged_swan.webp",
    "v144/artwork/this_is_fine.webp",
    "v144/artwork/tide_on_stone.webp",
    "v144/artwork/toccata.webp",
    "v144/artwork/trick_or_treat.webp",
    "v144/artwork/un_docile_arco.webp",
    "v144/artwork/un_tuffo_al_cuore.webp",
    "v144/artwork/uncaged.webp",
    "v144/artwork/upon_a_winding_trail.webp",
    "v144/artwork/venezia.webp",
    "v144/artwork/verona.webp",
    "v144/artwork/vetro_di_genova.webp",
    "v144/artwork/weekend.webp",
    "v144/artwork/whiteout.webp",
    "v144/artwork/winterstorm.webp",
    "v144/css/style 20260815_1400.css",
    "v144/css/style copy.css",
    "v144/css/style.css",
    "v144/datenschutz.html",
    "v144/essays/embeddings.html",
    "v144/essays/essay1.html",
    "v144/essays/gemini-code-1782138112807.html",
    "v144/essays/ssm.html",
    "v144/essays/transformers.html",
    "v144/images/Guitar-in-Dolomites.webp",
    "v144/images/Hero.webp",
    "v144/images/Hero_1.webp",
    "v144/images/Hero_1_Square.webp",
    "v144/images/Hero_2.webp",
    "v144/images/Julia-skiing-Dolomites.webp",
    "v144/images/Stage_1.webp",
    "v144/images/Stage_2.webp",
    "v144/images/Stage_3.webp",
    "v144/images/Stage_4.webp",
    "v144/images/Stage_5.webp",
    "v144/images/Stage_6.webp",
    "v144/images/Stage_7.webp",
    "v144/images/Stage_8.webp",
    "v144/images/embeddings_music.webp",
    "v144/images/embeddings_words.webp",
    "v144/images/icons/app_icon_192 copy.png",
    "v144/images/icons/app_icon_192.png",
    "v144/images/icons/app_icon_512 copy.png",
    "v144/images/icons/app_icon_512.png",
    "v144/images/julia_embeddings.webp",
    "v144/images/julia_ssm_equations.webp",
    "v144/images/password_expired_live.webp",
    "v144/images/podcasts.webp",
    "v144/images/southern_belle.webp",
    "v144/images/ssm_diagram.webp",
    "v144/images/surfing_girl_wild_and_free.webp",
    "v144/images/under_the_hood.webp",
    "v144/images/witch.webp",
    "v144/impressum.html",
    "v144/index.html",
    "v144/js/DiaryService.js",
    "v144/js/Director.js",
    "v144/js/Main 20260319_1300.js",
    "v144/js/Main.js",
    "v144/js/PickerDrum.js",
    "v144/js/Placeholder.js",
    "v144/js/Player.js",
    "v144/js/SongCollection.js",
    "v144/js/SongService.js",
    "v144/js/VersionCore.js",
    "v144/js/ffmpeg.min.js",
    "v144/js/lucide.js",
    "v144/js/tailwindcss.js",
    "v144/js/tex-mml-chtml.js",
    "v144/legal_notice.html",
    "v144/manifest.json",
    "v144/placeholder/footer.html",
    "v144/placeholder/header.html",
    "v144/privacy_policy.html"
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
