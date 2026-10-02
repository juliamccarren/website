const STATIC_CACHE = 'julia-site-v145';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v145/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v145/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v145/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v145/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v145/artwork/a_cinque_metri_dal_cielo.webp",
    "v145/artwork/a_slow_blossoming_rose.webp",
    "v145/artwork/alejandro.webp",
    "v145/artwork/alta_tensione.webp",
    "v145/artwork/antitoxic.webp",
    "v145/artwork/autumns_whisper.webp",
    "v145/artwork/avalanche.webp",
    "v145/artwork/betrayal.webp",
    "v145/artwork/big_dreams_shine.webp",
    "v145/artwork/big_dreams_shine_live.webp",
    "v145/artwork/bite_of_the_night.webp",
    "v145/artwork/black_cat_bones.webp",
    "v145/artwork/boring.webp",
    "v145/artwork/brainrot.webp",
    "v145/artwork/brooklyn.webp",
    "v145/artwork/buckn_the_bain.webp",
    "v145/artwork/buio_perfetto.webp",
    "v145/artwork/cheerleader.webp",
    "v145/artwork/coffee_in_amsterdam.webp",
    "v145/artwork/cool_fire.webp",
    "v145/artwork/cuore_di_lupa.webp",
    "v145/artwork/dancing_on_your_grave.webp",
    "v145/artwork/date_disaster.webp",
    "v145/artwork/deep_blue.webp",
    "v145/artwork/deepdive_1.webp",
    "v145/artwork/deepdive_2.webp",
    "v145/artwork/default.webp",
    "v145/artwork/delta_blues.webp",
    "v145/artwork/digital_ghost.webp",
    "v145/artwork/disco_flashback.webp",
    "v145/artwork/disco_flashback_2.webp",
    "v145/artwork/disposable.webp",
    "v145/artwork/distortion.webp",
    "v145/artwork/drunk_not_dumb.webp",
    "v145/artwork/duecento_all_ora.webp",
    "v145/artwork/dynamite.webp",
    "v145/artwork/electric_hearts.webp",
    "v145/artwork/embers_and_sparks.webp",
    "v145/artwork/faro_nel_temporale.webp",
    "v145/artwork/fences_down.webp",
    "v145/artwork/ferro_e_canna.webp",
    "v145/artwork/fine_apnea.webp",
    "v145/artwork/fine_apnea_2.webp",
    "v145/artwork/fire_in_my_veins.webp",
    "v145/artwork/first_steps_to_stardom.webp",
    "v145/artwork/fog_of_fear.webp",
    "v145/artwork/forever.webp",
    "v145/artwork/fornello_rosso.webp",
    "v145/artwork/four_chords_later.webp",
    "v145/artwork/friday_night.webp",
    "v145/artwork/from_first_steps_to_stardom.webp",
    "v145/artwork/frost_and_friction.webp",
    "v145/artwork/frozen_heart.webp",
    "v145/artwork/fuoco_nel_legno.webp",
    "v145/artwork/fuori_dai_piedi.webp",
    "v145/artwork/fuori_dai_piedi_live.webp",
    "v145/artwork/fuori_dai_piedi_live_v6.webp",
    "v145/artwork/garage_band.webp",
    "v145/artwork/ghost_in_the_garden.webp",
    "v145/artwork/god_save_the_king.webp",
    "v145/artwork/golden_days.webp",
    "v145/artwork/good_enough.webp",
    "v145/artwork/happy_birthday_in_heaven.webp",
    "v145/artwork/haunted_haven.webp",
    "v145/artwork/heart_of_fire_and_ice.webp",
    "v145/artwork/her_first_truck.webp",
    "v145/artwork/hes_still_here.webp",
    "v145/artwork/hes_still_here_2026.webp",
    "v145/artwork/home_now.webp",
    "v145/artwork/howling_wolves.webp",
    "v145/artwork/hurricane.webp",
    "v145/artwork/hypocrites.webp",
    "v145/artwork/i_hate_you.webp",
    "v145/artwork/i_love_school.webp",
    "v145/artwork/i_scream.webp",
    "v145/artwork/i_tuoi_piccoli_disordini.webp",
    "v145/artwork/il_passo_solitario.webp",
    "v145/artwork/insatiable.webp",
    "v145/artwork/insult_the_ones_you_love.webp",
    "v145/artwork/introverted_girl.webp",
    "v145/artwork/jet_set.webp",
    "v145/artwork/julia_and_friends.webp",
    "v145/artwork/just_a_vibe.webp",
    "v145/artwork/just_wants_to_be_loved.webp",
    "v145/artwork/l_ultimo_adesso.webp",
    "v145/artwork/la_morte_di_cenerentola.webp",
    "v145/artwork/la_sposa_del_tuono.webp",
    "v145/artwork/la_sposa_del_tuono_live.webp",
    "v145/artwork/last_exit.webp",
    "v145/artwork/left_lane_legend.webp",
    "v145/artwork/little_butterflies.webp",
    "v145/artwork/luce_rossa.webp",
    "v145/artwork/luck_for_granted.webp",
    "v145/artwork/maybe_they_knew.webp",
    "v145/artwork/mind_the_gap.webp",
    "v145/artwork/my_foundation.webp",
    "v145/artwork/my_sweet_little_star.webp",
    "v145/artwork/need_for_speed.webp",
    "v145/artwork/nessun_dorma.webp",
    "v145/artwork/nice_girl.webp",
    "v145/artwork/nuora_selvaggia.webp",
    "v145/artwork/one_in_a_quarter_billion.webp",
    "v145/artwork/one_pulse.webp",
    "v145/artwork/paradox_love.webp",
    "v145/artwork/password_expired.webp",
    "v145/artwork/password_expired_live.webp",
    "v145/artwork/pathetique.webp",
    "v145/artwork/peaks_of_gold.webp",
    "v145/artwork/play_it_again.webp",
    "v145/artwork/private_lake.webp",
    "v145/artwork/radio_trash.webp",
    "v145/artwork/regina_di_niente.webp",
    "v145/artwork/resti_qui.webp",
    "v145/artwork/ride_the_groove.webp",
    "v145/artwork/rocker_songwriter.webp",
    "v145/artwork/rosso_panigale.webp",
    "v145/artwork/sailing_on_open_water.webp",
    "v145/artwork/sanctified_sinner.webp",
    "v145/artwork/sanctuary_riot.webp",
    "v145/artwork/scendi_dalla_sella.webp",
    "v145/artwork/schools_out.webp",
    "v145/artwork/set_the_spirit_free.webp",
    "v145/artwork/settembre_mi_guarda.jpg",
    "v145/artwork/settembre_mi_guarda.webp",
    "v145/artwork/siblings.webp",
    "v145/artwork/skeleton_dance.webp",
    "v145/artwork/slippery_road.webp",
    "v145/artwork/social_lubricant.webp",
    "v145/artwork/soulmate.webp",
    "v145/artwork/southern_belle.webp",
    "v145/artwork/southern_heat.webp",
    "v145/artwork/southerns_eve.webp",
    "v145/artwork/spacca_il_cristallo.webp",
    "v145/artwork/spooky.webp",
    "v145/artwork/spring.webp",
    "v145/artwork/storm_of_the_abyss.webp",
    "v145/artwork/summers_farewell.webp",
    "v145/artwork/surfing_girl_wild_and_free.webp",
    "v145/artwork/tabby_gonzalez.webp",
    "v145/artwork/the_city_i_long_for.webp",
    "v145/artwork/the_dive.webp",
    "v145/artwork/the_hard_way.webp",
    "v145/artwork/the_hook.webp",
    "v145/artwork/the_quiet_kind.webp",
    "v145/artwork/the_rhythm_of_the_fox.webp",
    "v145/artwork/the_rhythm_of_you.webp",
    "v145/artwork/the_sharpened_bow.webp",
    "v145/artwork/the_sirens_anchor.webp",
    "v145/artwork/the_soft_return.webp",
    "v145/artwork/the_steel_winged_swan.webp",
    "v145/artwork/this_is_fine.webp",
    "v145/artwork/tide_on_stone.webp",
    "v145/artwork/toccata.webp",
    "v145/artwork/trick_or_treat.webp",
    "v145/artwork/un_docile_arco.webp",
    "v145/artwork/un_tuffo_al_cuore.webp",
    "v145/artwork/uncaged.webp",
    "v145/artwork/upon_a_winding_trail.webp",
    "v145/artwork/venezia.webp",
    "v145/artwork/verona.webp",
    "v145/artwork/vetro_di_genova.webp",
    "v145/artwork/weekend.webp",
    "v145/artwork/whiteout.webp",
    "v145/artwork/winterstorm.webp",
    "v145/css/style 20260815_1400.css",
    "v145/css/style copy.css",
    "v145/css/style.css",
    "v145/datenschutz.html",
    "v145/essays/embeddings.html",
    "v145/essays/essay1.html",
    "v145/essays/gemini-code-1782138112807.html",
    "v145/essays/ssm.html",
    "v145/essays/transformers.html",
    "v145/images/Guitar-in-Dolomites.webp",
    "v145/images/Hero.webp",
    "v145/images/Hero_1.webp",
    "v145/images/Hero_1_Square.webp",
    "v145/images/Hero_2.webp",
    "v145/images/Julia-skiing-Dolomites.webp",
    "v145/images/Stage_1.webp",
    "v145/images/Stage_2.webp",
    "v145/images/Stage_3.webp",
    "v145/images/Stage_4.webp",
    "v145/images/Stage_5.webp",
    "v145/images/Stage_6.webp",
    "v145/images/Stage_7.webp",
    "v145/images/Stage_8.webp",
    "v145/images/embeddings_music.webp",
    "v145/images/embeddings_words.webp",
    "v145/images/icons/app_icon_192 copy.png",
    "v145/images/icons/app_icon_192.png",
    "v145/images/icons/app_icon_512 copy.png",
    "v145/images/icons/app_icon_512.png",
    "v145/images/julia_embeddings.webp",
    "v145/images/julia_ssm_equations.webp",
    "v145/images/password_expired_live.webp",
    "v145/images/podcasts.webp",
    "v145/images/southern_belle.webp",
    "v145/images/ssm_diagram.webp",
    "v145/images/surfing_girl_wild_and_free.webp",
    "v145/images/under_the_hood.webp",
    "v145/images/witch.webp",
    "v145/impressum.html",
    "v145/index.html",
    "v145/js/DiaryService.js",
    "v145/js/Director.js",
    "v145/js/Main 20260319_1300.js",
    "v145/js/Main.js",
    "v145/js/PickerDrum.js",
    "v145/js/Placeholder.js",
    "v145/js/Player.js",
    "v145/js/SongCollection.js",
    "v145/js/SongService.js",
    "v145/js/VersionCore.js",
    "v145/js/ffmpeg.min.js",
    "v145/js/lucide.js",
    "v145/js/tailwindcss.js",
    "v145/js/tex-mml-chtml.js",
    "v145/legal_notice.html",
    "v145/manifest.json",
    "v145/placeholder/footer.html",
    "v145/placeholder/header.html",
    "v145/privacy_policy.html"
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
