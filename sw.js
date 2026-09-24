const STATIC_CACHE = 'julia-site-v140';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v140/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v140/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v140/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v140/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v140/artwork/a_cinque_metri_dal_cielo.webp",
    "v140/artwork/a_slow_blossoming_rose.webp",
    "v140/artwork/alejandro.webp",
    "v140/artwork/alta_tensione.webp",
    "v140/artwork/antitoxic.webp",
    "v140/artwork/autumns_whisper.webp",
    "v140/artwork/avalanche.webp",
    "v140/artwork/betrayal.webp",
    "v140/artwork/big_dreams_shine.webp",
    "v140/artwork/big_dreams_shine_live.webp",
    "v140/artwork/bite_of_the_night.webp",
    "v140/artwork/black_cat_bones.webp",
    "v140/artwork/boring.webp",
    "v140/artwork/brainrot.webp",
    "v140/artwork/brooklyn.webp",
    "v140/artwork/buckn_the_bain.webp",
    "v140/artwork/buio_perfetto.webp",
    "v140/artwork/cheerleader.webp",
    "v140/artwork/coffee_in_amsterdam.webp",
    "v140/artwork/cool_fire.webp",
    "v140/artwork/dancing_on_your_grave.webp",
    "v140/artwork/date_disaster.webp",
    "v140/artwork/deep_blue.webp",
    "v140/artwork/deepdive_1.webp",
    "v140/artwork/deepdive_2.webp",
    "v140/artwork/default.webp",
    "v140/artwork/delta_blues.webp",
    "v140/artwork/digital_ghost.webp",
    "v140/artwork/disco_flashback.webp",
    "v140/artwork/disco_flashback_2.webp",
    "v140/artwork/disposable.webp",
    "v140/artwork/distortion.webp",
    "v140/artwork/drunk_not_dumb.webp",
    "v140/artwork/duecento_all_ora.webp",
    "v140/artwork/dynamite.webp",
    "v140/artwork/electric_hearts.webp",
    "v140/artwork/embers_and_sparks.webp",
    "v140/artwork/fences_down.webp",
    "v140/artwork/ferro_e_canna.webp",
    "v140/artwork/fine_apnea.webp",
    "v140/artwork/fine_apnea_2.webp",
    "v140/artwork/fire_in_my_veins.webp",
    "v140/artwork/first_steps_to_stardom.webp",
    "v140/artwork/fog_of_fear.webp",
    "v140/artwork/forever.webp",
    "v140/artwork/fornello_rosso.webp",
    "v140/artwork/four_chords_later.webp",
    "v140/artwork/friday_night.webp",
    "v140/artwork/from_first_steps_to_stardom.webp",
    "v140/artwork/frost_and_friction.webp",
    "v140/artwork/frozen_heart.webp",
    "v140/artwork/fuoco_nel_legno.webp",
    "v140/artwork/fuori_dai_piedi.webp",
    "v140/artwork/fuori_dai_piedi_live.webp",
    "v140/artwork/fuori_dai_piedi_live_v6.webp",
    "v140/artwork/garage_band.webp",
    "v140/artwork/ghost_in_the_garden.webp",
    "v140/artwork/god_save_the_king.webp",
    "v140/artwork/golden_days.webp",
    "v140/artwork/good_enough.webp",
    "v140/artwork/happy_birthday_in_heaven.webp",
    "v140/artwork/haunted_haven.webp",
    "v140/artwork/heart_of_fire_and_ice.webp",
    "v140/artwork/her_first_truck.webp",
    "v140/artwork/hes_still_here.webp",
    "v140/artwork/hes_still_here_2026.webp",
    "v140/artwork/home_now.webp",
    "v140/artwork/howling_wolves.webp",
    "v140/artwork/hurricane.webp",
    "v140/artwork/hypocrites.webp",
    "v140/artwork/i_hate_you.webp",
    "v140/artwork/i_love_school.webp",
    "v140/artwork/i_scream.webp",
    "v140/artwork/i_tuoi_piccoli_disordini.webp",
    "v140/artwork/insatiable.webp",
    "v140/artwork/insult_the_ones_you_love.webp",
    "v140/artwork/introverted_girl.webp",
    "v140/artwork/jet_set.webp",
    "v140/artwork/julia_and_friends.webp",
    "v140/artwork/just_a_vibe.webp",
    "v140/artwork/just_wants_to_be_loved.webp",
    "v140/artwork/l_ultimo_adesso.webp",
    "v140/artwork/la_sposa_del_tuono.webp",
    "v140/artwork/la_sposa_del_tuono_live.webp",
    "v140/artwork/last_exit.webp",
    "v140/artwork/left_lane_legend.webp",
    "v140/artwork/little_butterflies.webp",
    "v140/artwork/luce_rossa.webp",
    "v140/artwork/luck_for_granted.webp",
    "v140/artwork/maybe_they_knew.webp",
    "v140/artwork/mind_the_gap.webp",
    "v140/artwork/my_foundation.webp",
    "v140/artwork/my_sweet_little_star.webp",
    "v140/artwork/need_for_speed.webp",
    "v140/artwork/nessun_dorma.webp",
    "v140/artwork/nice_girl.webp",
    "v140/artwork/nuora_selvaggia.webp",
    "v140/artwork/one_in_a_quarter_billion.webp",
    "v140/artwork/one_pulse.webp",
    "v140/artwork/paradox_love.webp",
    "v140/artwork/password_expired.webp",
    "v140/artwork/password_expired_live.webp",
    "v140/artwork/pathetique.webp",
    "v140/artwork/peaks_of_gold.webp",
    "v140/artwork/play_it_again.webp",
    "v140/artwork/private_lake.webp",
    "v140/artwork/radio_trash.webp",
    "v140/artwork/regina_di_niente.webp",
    "v140/artwork/resti_qui.webp",
    "v140/artwork/ride_the_groove.webp",
    "v140/artwork/rocker_songwriter.webp",
    "v140/artwork/sailing_on_open_water.webp",
    "v140/artwork/sanctified_sinner.webp",
    "v140/artwork/sanctuary_riot.webp",
    "v140/artwork/scendi_dalla_sella.webp",
    "v140/artwork/schools_out.webp",
    "v140/artwork/set_the_spirit_free.webp",
    "v140/artwork/settembre_mi_guarda.jpg",
    "v140/artwork/settembre_mi_guarda.webp",
    "v140/artwork/siblings.webp",
    "v140/artwork/skeleton_dance.webp",
    "v140/artwork/slippery_road.webp",
    "v140/artwork/social_lubricant.webp",
    "v140/artwork/soulmate.webp",
    "v140/artwork/southern_belle.webp",
    "v140/artwork/southern_heat.webp",
    "v140/artwork/southerns_eve.webp",
    "v140/artwork/spacca_il_cristallo.webp",
    "v140/artwork/spooky.webp",
    "v140/artwork/spring.webp",
    "v140/artwork/storm_of_the_abyss.webp",
    "v140/artwork/summers_farewell.webp",
    "v140/artwork/surfing_girl_wild_and_free.webp",
    "v140/artwork/tabby_gonzalez.webp",
    "v140/artwork/the_city_i_long_for.webp",
    "v140/artwork/the_dive.webp",
    "v140/artwork/the_hard_way.webp",
    "v140/artwork/the_hook.webp",
    "v140/artwork/the_quiet_kind.webp",
    "v140/artwork/the_rhythm_of_the_fox.webp",
    "v140/artwork/the_rhythm_of_you.webp",
    "v140/artwork/the_sharpened_bow.webp",
    "v140/artwork/the_sirens_anchor.webp",
    "v140/artwork/the_soft_return.webp",
    "v140/artwork/the_steel_winged_swan.webp",
    "v140/artwork/this_is_fine.webp",
    "v140/artwork/tide_on_stone.webp",
    "v140/artwork/toccata.webp",
    "v140/artwork/trick_or_treat.webp",
    "v140/artwork/un_docile_arco.webp",
    "v140/artwork/un_tuffo_al_cuore.webp",
    "v140/artwork/uncaged.webp",
    "v140/artwork/upon_a_winding_trail.webp",
    "v140/artwork/venezia.webp",
    "v140/artwork/verona.webp",
    "v140/artwork/vetro_di_genova.webp",
    "v140/artwork/weekend.webp",
    "v140/artwork/whiteout.webp",
    "v140/artwork/winterstorm.webp",
    "v140/css/style 20260815_1400.css",
    "v140/css/style copy.css",
    "v140/css/style.css",
    "v140/datenschutz.html",
    "v140/essays/embeddings.html",
    "v140/essays/essay1.html",
    "v140/essays/gemini-code-1782138112807.html",
    "v140/essays/ssm.html",
    "v140/essays/transformers.html",
    "v140/images/Guitar-in-Dolomites.webp",
    "v140/images/Hero.webp",
    "v140/images/Hero_1.webp",
    "v140/images/Hero_1_Square.webp",
    "v140/images/Hero_2.webp",
    "v140/images/Julia-skiing-Dolomites.webp",
    "v140/images/Stage_1.webp",
    "v140/images/Stage_2.webp",
    "v140/images/Stage_3.webp",
    "v140/images/Stage_4.webp",
    "v140/images/Stage_5.webp",
    "v140/images/Stage_6.webp",
    "v140/images/Stage_7.webp",
    "v140/images/Stage_8.webp",
    "v140/images/embeddings_music.webp",
    "v140/images/embeddings_words.webp",
    "v140/images/icons/app_icon_192 copy.png",
    "v140/images/icons/app_icon_192.png",
    "v140/images/icons/app_icon_512 copy.png",
    "v140/images/icons/app_icon_512.png",
    "v140/images/julia_embeddings.webp",
    "v140/images/julia_ssm_equations.webp",
    "v140/images/password_expired_live.webp",
    "v140/images/podcasts.webp",
    "v140/images/southern_belle.webp",
    "v140/images/ssm_diagram.webp",
    "v140/images/surfing_girl_wild_and_free.webp",
    "v140/images/under_the_hood.webp",
    "v140/images/witch.webp",
    "v140/impressum.html",
    "v140/index.html",
    "v140/js/DiaryService.js",
    "v140/js/Director.js",
    "v140/js/Main 20260319_1300.js",
    "v140/js/Main.js",
    "v140/js/PickerDrum.js",
    "v140/js/Placeholder.js",
    "v140/js/Player.js",
    "v140/js/SongCollection.js",
    "v140/js/SongService.js",
    "v140/js/VersionCore.js",
    "v140/js/ffmpeg.min.js",
    "v140/js/lucide.js",
    "v140/js/tailwindcss.js",
    "v140/js/tex-mml-chtml.js",
    "v140/legal_notice.html",
    "v140/manifest.json",
    "v140/placeholder/footer.html",
    "v140/placeholder/header.html",
    "v140/privacy_policy.html"
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
