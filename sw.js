const STATIC_CACHE = 'julia-site-v142';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v142/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v142/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v142/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v142/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v142/artwork/a_cinque_metri_dal_cielo.webp",
    "v142/artwork/a_slow_blossoming_rose.webp",
    "v142/artwork/alejandro.webp",
    "v142/artwork/alta_tensione.webp",
    "v142/artwork/antitoxic.webp",
    "v142/artwork/autumns_whisper.webp",
    "v142/artwork/avalanche.webp",
    "v142/artwork/betrayal.webp",
    "v142/artwork/big_dreams_shine.webp",
    "v142/artwork/big_dreams_shine_live.webp",
    "v142/artwork/bite_of_the_night.webp",
    "v142/artwork/black_cat_bones.webp",
    "v142/artwork/boring.webp",
    "v142/artwork/brainrot.webp",
    "v142/artwork/brooklyn.webp",
    "v142/artwork/buckn_the_bain.webp",
    "v142/artwork/buio_perfetto.webp",
    "v142/artwork/cheerleader.webp",
    "v142/artwork/coffee_in_amsterdam.webp",
    "v142/artwork/cool_fire.webp",
    "v142/artwork/cuore_di_lupa.webp",
    "v142/artwork/dancing_on_your_grave.webp",
    "v142/artwork/date_disaster.webp",
    "v142/artwork/deep_blue.webp",
    "v142/artwork/deepdive_1.webp",
    "v142/artwork/deepdive_2.webp",
    "v142/artwork/default.webp",
    "v142/artwork/delta_blues.webp",
    "v142/artwork/digital_ghost.webp",
    "v142/artwork/disco_flashback.webp",
    "v142/artwork/disco_flashback_2.webp",
    "v142/artwork/disposable.webp",
    "v142/artwork/distortion.webp",
    "v142/artwork/drunk_not_dumb.webp",
    "v142/artwork/duecento_all_ora.webp",
    "v142/artwork/dynamite.webp",
    "v142/artwork/electric_hearts.webp",
    "v142/artwork/embers_and_sparks.webp",
    "v142/artwork/fences_down.webp",
    "v142/artwork/ferro_e_canna.webp",
    "v142/artwork/fine_apnea.webp",
    "v142/artwork/fine_apnea_2.webp",
    "v142/artwork/fire_in_my_veins.webp",
    "v142/artwork/first_steps_to_stardom.webp",
    "v142/artwork/fog_of_fear.webp",
    "v142/artwork/forever.webp",
    "v142/artwork/fornello_rosso.webp",
    "v142/artwork/four_chords_later.webp",
    "v142/artwork/friday_night.webp",
    "v142/artwork/from_first_steps_to_stardom.webp",
    "v142/artwork/frost_and_friction.webp",
    "v142/artwork/frozen_heart.webp",
    "v142/artwork/fuoco_nel_legno.webp",
    "v142/artwork/fuori_dai_piedi.webp",
    "v142/artwork/fuori_dai_piedi_live.webp",
    "v142/artwork/fuori_dai_piedi_live_v6.webp",
    "v142/artwork/garage_band.webp",
    "v142/artwork/ghost_in_the_garden.webp",
    "v142/artwork/god_save_the_king.webp",
    "v142/artwork/golden_days.webp",
    "v142/artwork/good_enough.webp",
    "v142/artwork/happy_birthday_in_heaven.webp",
    "v142/artwork/haunted_haven.webp",
    "v142/artwork/heart_of_fire_and_ice.webp",
    "v142/artwork/her_first_truck.webp",
    "v142/artwork/hes_still_here.webp",
    "v142/artwork/hes_still_here_2026.webp",
    "v142/artwork/home_now.webp",
    "v142/artwork/howling_wolves.webp",
    "v142/artwork/hurricane.webp",
    "v142/artwork/hypocrites.webp",
    "v142/artwork/i_hate_you.webp",
    "v142/artwork/i_love_school.webp",
    "v142/artwork/i_scream.webp",
    "v142/artwork/i_tuoi_piccoli_disordini.webp",
    "v142/artwork/insatiable.webp",
    "v142/artwork/insult_the_ones_you_love.webp",
    "v142/artwork/introverted_girl.webp",
    "v142/artwork/jet_set.webp",
    "v142/artwork/julia_and_friends.webp",
    "v142/artwork/just_a_vibe.webp",
    "v142/artwork/just_wants_to_be_loved.webp",
    "v142/artwork/l_ultimo_adesso.webp",
    "v142/artwork/la_morte_di_cenerentola.webp",
    "v142/artwork/la_sposa_del_tuono.webp",
    "v142/artwork/la_sposa_del_tuono_live.webp",
    "v142/artwork/last_exit.webp",
    "v142/artwork/left_lane_legend.webp",
    "v142/artwork/little_butterflies.webp",
    "v142/artwork/luce_rossa.webp",
    "v142/artwork/luck_for_granted.webp",
    "v142/artwork/maybe_they_knew.webp",
    "v142/artwork/mind_the_gap.webp",
    "v142/artwork/my_foundation.webp",
    "v142/artwork/my_sweet_little_star.webp",
    "v142/artwork/need_for_speed.webp",
    "v142/artwork/nessun_dorma.webp",
    "v142/artwork/nice_girl.webp",
    "v142/artwork/nuora_selvaggia.webp",
    "v142/artwork/one_in_a_quarter_billion.webp",
    "v142/artwork/one_pulse.webp",
    "v142/artwork/paradox_love.webp",
    "v142/artwork/password_expired.webp",
    "v142/artwork/password_expired_live.webp",
    "v142/artwork/pathetique.webp",
    "v142/artwork/peaks_of_gold.webp",
    "v142/artwork/play_it_again.webp",
    "v142/artwork/private_lake.webp",
    "v142/artwork/radio_trash.webp",
    "v142/artwork/regina_di_niente.webp",
    "v142/artwork/resti_qui.webp",
    "v142/artwork/ride_the_groove.webp",
    "v142/artwork/rocker_songwriter.webp",
    "v142/artwork/sailing_on_open_water.webp",
    "v142/artwork/sanctified_sinner.webp",
    "v142/artwork/sanctuary_riot.webp",
    "v142/artwork/scendi_dalla_sella.webp",
    "v142/artwork/schools_out.webp",
    "v142/artwork/set_the_spirit_free.webp",
    "v142/artwork/settembre_mi_guarda.jpg",
    "v142/artwork/settembre_mi_guarda.webp",
    "v142/artwork/siblings.webp",
    "v142/artwork/skeleton_dance.webp",
    "v142/artwork/slippery_road.webp",
    "v142/artwork/social_lubricant.webp",
    "v142/artwork/soulmate.webp",
    "v142/artwork/southern_belle.webp",
    "v142/artwork/southern_heat.webp",
    "v142/artwork/southerns_eve.webp",
    "v142/artwork/spacca_il_cristallo.webp",
    "v142/artwork/spooky.webp",
    "v142/artwork/spring.webp",
    "v142/artwork/storm_of_the_abyss.webp",
    "v142/artwork/summers_farewell.webp",
    "v142/artwork/surfing_girl_wild_and_free.webp",
    "v142/artwork/tabby_gonzalez.webp",
    "v142/artwork/the_city_i_long_for.webp",
    "v142/artwork/the_dive.webp",
    "v142/artwork/the_hard_way.webp",
    "v142/artwork/the_hook.webp",
    "v142/artwork/the_quiet_kind.webp",
    "v142/artwork/the_rhythm_of_the_fox.webp",
    "v142/artwork/the_rhythm_of_you.webp",
    "v142/artwork/the_sharpened_bow.webp",
    "v142/artwork/the_sirens_anchor.webp",
    "v142/artwork/the_soft_return.webp",
    "v142/artwork/the_steel_winged_swan.webp",
    "v142/artwork/this_is_fine.webp",
    "v142/artwork/tide_on_stone.webp",
    "v142/artwork/toccata.webp",
    "v142/artwork/trick_or_treat.webp",
    "v142/artwork/un_docile_arco.webp",
    "v142/artwork/un_tuffo_al_cuore.webp",
    "v142/artwork/uncaged.webp",
    "v142/artwork/upon_a_winding_trail.webp",
    "v142/artwork/venezia.webp",
    "v142/artwork/verona.webp",
    "v142/artwork/vetro_di_genova.webp",
    "v142/artwork/weekend.webp",
    "v142/artwork/whiteout.webp",
    "v142/artwork/winterstorm.webp",
    "v142/css/style 20260815_1400.css",
    "v142/css/style copy.css",
    "v142/css/style.css",
    "v142/datenschutz.html",
    "v142/essays/embeddings.html",
    "v142/essays/essay1.html",
    "v142/essays/gemini-code-1782138112807.html",
    "v142/essays/ssm.html",
    "v142/essays/transformers.html",
    "v142/images/Guitar-in-Dolomites.webp",
    "v142/images/Hero.webp",
    "v142/images/Hero_1.webp",
    "v142/images/Hero_1_Square.webp",
    "v142/images/Hero_2.webp",
    "v142/images/Julia-skiing-Dolomites.webp",
    "v142/images/Stage_1.webp",
    "v142/images/Stage_2.webp",
    "v142/images/Stage_3.webp",
    "v142/images/Stage_4.webp",
    "v142/images/Stage_5.webp",
    "v142/images/Stage_6.webp",
    "v142/images/Stage_7.webp",
    "v142/images/Stage_8.webp",
    "v142/images/embeddings_music.webp",
    "v142/images/embeddings_words.webp",
    "v142/images/icons/app_icon_192 copy.png",
    "v142/images/icons/app_icon_192.png",
    "v142/images/icons/app_icon_512 copy.png",
    "v142/images/icons/app_icon_512.png",
    "v142/images/julia_embeddings.webp",
    "v142/images/julia_ssm_equations.webp",
    "v142/images/password_expired_live.webp",
    "v142/images/podcasts.webp",
    "v142/images/southern_belle.webp",
    "v142/images/ssm_diagram.webp",
    "v142/images/surfing_girl_wild_and_free.webp",
    "v142/images/under_the_hood.webp",
    "v142/images/witch.webp",
    "v142/impressum.html",
    "v142/index.html",
    "v142/js/DiaryService.js",
    "v142/js/Director.js",
    "v142/js/Main 20260319_1300.js",
    "v142/js/Main.js",
    "v142/js/PickerDrum.js",
    "v142/js/Placeholder.js",
    "v142/js/Player.js",
    "v142/js/SongCollection.js",
    "v142/js/SongService.js",
    "v142/js/VersionCore.js",
    "v142/js/ffmpeg.min.js",
    "v142/js/lucide.js",
    "v142/js/tailwindcss.js",
    "v142/js/tex-mml-chtml.js",
    "v142/legal_notice.html",
    "v142/manifest.json",
    "v142/placeholder/footer.html",
    "v142/placeholder/header.html",
    "v142/privacy_policy.html"
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
