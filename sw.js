const STATIC_CACHE = 'julia-site-v143';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v143/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v143/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v143/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v143/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v143/artwork/a_cinque_metri_dal_cielo.webp",
    "v143/artwork/a_slow_blossoming_rose.webp",
    "v143/artwork/alejandro.webp",
    "v143/artwork/alta_tensione.webp",
    "v143/artwork/antitoxic.webp",
    "v143/artwork/autumns_whisper.webp",
    "v143/artwork/avalanche.webp",
    "v143/artwork/betrayal.webp",
    "v143/artwork/big_dreams_shine.webp",
    "v143/artwork/big_dreams_shine_live.webp",
    "v143/artwork/bite_of_the_night.webp",
    "v143/artwork/black_cat_bones.webp",
    "v143/artwork/boring.webp",
    "v143/artwork/brainrot.webp",
    "v143/artwork/brooklyn.webp",
    "v143/artwork/buckn_the_bain.webp",
    "v143/artwork/buio_perfetto.webp",
    "v143/artwork/cheerleader.webp",
    "v143/artwork/coffee_in_amsterdam.webp",
    "v143/artwork/cool_fire.webp",
    "v143/artwork/cuore_di_lupa.webp",
    "v143/artwork/dancing_on_your_grave.webp",
    "v143/artwork/date_disaster.webp",
    "v143/artwork/deep_blue.webp",
    "v143/artwork/deepdive_1.webp",
    "v143/artwork/deepdive_2.webp",
    "v143/artwork/default.webp",
    "v143/artwork/delta_blues.webp",
    "v143/artwork/digital_ghost.webp",
    "v143/artwork/disco_flashback.webp",
    "v143/artwork/disco_flashback_2.webp",
    "v143/artwork/disposable.webp",
    "v143/artwork/distortion.webp",
    "v143/artwork/drunk_not_dumb.webp",
    "v143/artwork/duecento_all_ora.webp",
    "v143/artwork/dynamite.webp",
    "v143/artwork/electric_hearts.webp",
    "v143/artwork/embers_and_sparks.webp",
    "v143/artwork/faro_nel_temporale.webp",
    "v143/artwork/fences_down.webp",
    "v143/artwork/ferro_e_canna.webp",
    "v143/artwork/fine_apnea.webp",
    "v143/artwork/fine_apnea_2.webp",
    "v143/artwork/fire_in_my_veins.webp",
    "v143/artwork/first_steps_to_stardom.webp",
    "v143/artwork/fog_of_fear.webp",
    "v143/artwork/forever.webp",
    "v143/artwork/fornello_rosso.webp",
    "v143/artwork/four_chords_later.webp",
    "v143/artwork/friday_night.webp",
    "v143/artwork/from_first_steps_to_stardom.webp",
    "v143/artwork/frost_and_friction.webp",
    "v143/artwork/frozen_heart.webp",
    "v143/artwork/fuoco_nel_legno.webp",
    "v143/artwork/fuori_dai_piedi.webp",
    "v143/artwork/fuori_dai_piedi_live.webp",
    "v143/artwork/fuori_dai_piedi_live_v6.webp",
    "v143/artwork/garage_band.webp",
    "v143/artwork/ghost_in_the_garden.webp",
    "v143/artwork/god_save_the_king.webp",
    "v143/artwork/golden_days.webp",
    "v143/artwork/good_enough.webp",
    "v143/artwork/happy_birthday_in_heaven.webp",
    "v143/artwork/haunted_haven.webp",
    "v143/artwork/heart_of_fire_and_ice.webp",
    "v143/artwork/her_first_truck.webp",
    "v143/artwork/hes_still_here.webp",
    "v143/artwork/hes_still_here_2026.webp",
    "v143/artwork/home_now.webp",
    "v143/artwork/howling_wolves.webp",
    "v143/artwork/hurricane.webp",
    "v143/artwork/hypocrites.webp",
    "v143/artwork/i_hate_you.webp",
    "v143/artwork/i_love_school.webp",
    "v143/artwork/i_scream.webp",
    "v143/artwork/i_tuoi_piccoli_disordini.webp",
    "v143/artwork/insatiable.webp",
    "v143/artwork/insult_the_ones_you_love.webp",
    "v143/artwork/introverted_girl.webp",
    "v143/artwork/jet_set.webp",
    "v143/artwork/julia_and_friends.webp",
    "v143/artwork/just_a_vibe.webp",
    "v143/artwork/just_wants_to_be_loved.webp",
    "v143/artwork/l_ultimo_adesso.webp",
    "v143/artwork/la_morte_di_cenerentola.webp",
    "v143/artwork/la_sposa_del_tuono.webp",
    "v143/artwork/la_sposa_del_tuono_live.webp",
    "v143/artwork/last_exit.webp",
    "v143/artwork/left_lane_legend.webp",
    "v143/artwork/little_butterflies.webp",
    "v143/artwork/luce_rossa.webp",
    "v143/artwork/luck_for_granted.webp",
    "v143/artwork/maybe_they_knew.webp",
    "v143/artwork/mind_the_gap.webp",
    "v143/artwork/my_foundation.webp",
    "v143/artwork/my_sweet_little_star.webp",
    "v143/artwork/need_for_speed.webp",
    "v143/artwork/nessun_dorma.webp",
    "v143/artwork/nice_girl.webp",
    "v143/artwork/nuora_selvaggia.webp",
    "v143/artwork/one_in_a_quarter_billion.webp",
    "v143/artwork/one_pulse.webp",
    "v143/artwork/paradox_love.webp",
    "v143/artwork/password_expired.webp",
    "v143/artwork/password_expired_live.webp",
    "v143/artwork/pathetique.webp",
    "v143/artwork/peaks_of_gold.webp",
    "v143/artwork/play_it_again.webp",
    "v143/artwork/private_lake.webp",
    "v143/artwork/radio_trash.webp",
    "v143/artwork/regina_di_niente.webp",
    "v143/artwork/resti_qui.webp",
    "v143/artwork/ride_the_groove.webp",
    "v143/artwork/rocker_songwriter.webp",
    "v143/artwork/sailing_on_open_water.webp",
    "v143/artwork/sanctified_sinner.webp",
    "v143/artwork/sanctuary_riot.webp",
    "v143/artwork/scendi_dalla_sella.webp",
    "v143/artwork/schools_out.webp",
    "v143/artwork/set_the_spirit_free.webp",
    "v143/artwork/settembre_mi_guarda.jpg",
    "v143/artwork/settembre_mi_guarda.webp",
    "v143/artwork/siblings.webp",
    "v143/artwork/skeleton_dance.webp",
    "v143/artwork/slippery_road.webp",
    "v143/artwork/social_lubricant.webp",
    "v143/artwork/soulmate.webp",
    "v143/artwork/southern_belle.webp",
    "v143/artwork/southern_heat.webp",
    "v143/artwork/southerns_eve.webp",
    "v143/artwork/spacca_il_cristallo.webp",
    "v143/artwork/spooky.webp",
    "v143/artwork/spring.webp",
    "v143/artwork/storm_of_the_abyss.webp",
    "v143/artwork/summers_farewell.webp",
    "v143/artwork/surfing_girl_wild_and_free.webp",
    "v143/artwork/tabby_gonzalez.webp",
    "v143/artwork/the_city_i_long_for.webp",
    "v143/artwork/the_dive.webp",
    "v143/artwork/the_hard_way.webp",
    "v143/artwork/the_hook.webp",
    "v143/artwork/the_quiet_kind.webp",
    "v143/artwork/the_rhythm_of_the_fox.webp",
    "v143/artwork/the_rhythm_of_you.webp",
    "v143/artwork/the_sharpened_bow.webp",
    "v143/artwork/the_sirens_anchor.webp",
    "v143/artwork/the_soft_return.webp",
    "v143/artwork/the_steel_winged_swan.webp",
    "v143/artwork/this_is_fine.webp",
    "v143/artwork/tide_on_stone.webp",
    "v143/artwork/toccata.webp",
    "v143/artwork/trick_or_treat.webp",
    "v143/artwork/un_docile_arco.webp",
    "v143/artwork/un_tuffo_al_cuore.webp",
    "v143/artwork/uncaged.webp",
    "v143/artwork/upon_a_winding_trail.webp",
    "v143/artwork/venezia.webp",
    "v143/artwork/verona.webp",
    "v143/artwork/vetro_di_genova.webp",
    "v143/artwork/weekend.webp",
    "v143/artwork/whiteout.webp",
    "v143/artwork/winterstorm.webp",
    "v143/css/style 20260815_1400.css",
    "v143/css/style copy.css",
    "v143/css/style.css",
    "v143/datenschutz.html",
    "v143/essays/embeddings.html",
    "v143/essays/essay1.html",
    "v143/essays/gemini-code-1782138112807.html",
    "v143/essays/ssm.html",
    "v143/essays/transformers.html",
    "v143/images/Guitar-in-Dolomites.webp",
    "v143/images/Hero.webp",
    "v143/images/Hero_1.webp",
    "v143/images/Hero_1_Square.webp",
    "v143/images/Hero_2.webp",
    "v143/images/Julia-skiing-Dolomites.webp",
    "v143/images/Stage_1.webp",
    "v143/images/Stage_2.webp",
    "v143/images/Stage_3.webp",
    "v143/images/Stage_4.webp",
    "v143/images/Stage_5.webp",
    "v143/images/Stage_6.webp",
    "v143/images/Stage_7.webp",
    "v143/images/Stage_8.webp",
    "v143/images/embeddings_music.webp",
    "v143/images/embeddings_words.webp",
    "v143/images/icons/app_icon_192 copy.png",
    "v143/images/icons/app_icon_192.png",
    "v143/images/icons/app_icon_512 copy.png",
    "v143/images/icons/app_icon_512.png",
    "v143/images/julia_embeddings.webp",
    "v143/images/julia_ssm_equations.webp",
    "v143/images/password_expired_live.webp",
    "v143/images/podcasts.webp",
    "v143/images/southern_belle.webp",
    "v143/images/ssm_diagram.webp",
    "v143/images/surfing_girl_wild_and_free.webp",
    "v143/images/under_the_hood.webp",
    "v143/images/witch.webp",
    "v143/impressum.html",
    "v143/index.html",
    "v143/js/DiaryService.js",
    "v143/js/Director.js",
    "v143/js/Main 20260319_1300.js",
    "v143/js/Main.js",
    "v143/js/PickerDrum.js",
    "v143/js/Placeholder.js",
    "v143/js/Player.js",
    "v143/js/SongCollection.js",
    "v143/js/SongService.js",
    "v143/js/VersionCore.js",
    "v143/js/ffmpeg.min.js",
    "v143/js/lucide.js",
    "v143/js/tailwindcss.js",
    "v143/js/tex-mml-chtml.js",
    "v143/legal_notice.html",
    "v143/manifest.json",
    "v143/placeholder/footer.html",
    "v143/placeholder/header.html",
    "v143/privacy_policy.html"
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
