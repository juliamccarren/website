const STATIC_CACHE = 'julia-site-v151';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v151/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v151/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v151/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v151/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v151/artwork/a_cinque_metri_dal_cielo.webp",
    "v151/artwork/a_slow_blossoming_rose.webp",
    "v151/artwork/alejandro.webp",
    "v151/artwork/alta_tensione.webp",
    "v151/artwork/antitoxic.webp",
    "v151/artwork/autumns_whisper.webp",
    "v151/artwork/avalanche.webp",
    "v151/artwork/betrayal.webp",
    "v151/artwork/big_dreams_shine.webp",
    "v151/artwork/big_dreams_shine_live.webp",
    "v151/artwork/bite_of_the_night.webp",
    "v151/artwork/black_cat_bones.webp",
    "v151/artwork/boring.webp",
    "v151/artwork/brainrot.webp",
    "v151/artwork/brooklyn.webp",
    "v151/artwork/buckn_the_bain.webp",
    "v151/artwork/buio_perfetto.webp",
    "v151/artwork/cheerleader.webp",
    "v151/artwork/christmas_oratorio.webp",
    "v151/artwork/coffee_in_amsterdam.webp",
    "v151/artwork/cool_fire.webp",
    "v151/artwork/cuore_di_lupa.webp",
    "v151/artwork/dancing_on_your_grave.webp",
    "v151/artwork/date_disaster.webp",
    "v151/artwork/deep_blue.webp",
    "v151/artwork/deepdive_1.webp",
    "v151/artwork/deepdive_2.webp",
    "v151/artwork/default.webp",
    "v151/artwork/delta_blues.webp",
    "v151/artwork/digital_ghost.webp",
    "v151/artwork/disco_flashback.webp",
    "v151/artwork/disco_flashback_2.webp",
    "v151/artwork/disposable.webp",
    "v151/artwork/distortion.webp",
    "v151/artwork/domenica_in_giardino.webp",
    "v151/artwork/drunk_not_dumb.webp",
    "v151/artwork/duecento_all_ora.webp",
    "v151/artwork/dynamite.webp",
    "v151/artwork/electric_hearts.webp",
    "v151/artwork/embers_and_sparks.webp",
    "v151/artwork/esultate_gioite.webp",
    "v151/artwork/faro_nel_temporale.webp",
    "v151/artwork/fences_down.webp",
    "v151/artwork/ferro_e_canna.webp",
    "v151/artwork/fine_apnea.webp",
    "v151/artwork/fine_apnea_2.webp",
    "v151/artwork/fire_in_my_veins.webp",
    "v151/artwork/first_steps_to_stardom.webp",
    "v151/artwork/fog_of_fear.webp",
    "v151/artwork/forever.webp",
    "v151/artwork/fornello_rosso.webp",
    "v151/artwork/four_chords_later.webp",
    "v151/artwork/friday_night.webp",
    "v151/artwork/from_first_steps_to_stardom.webp",
    "v151/artwork/frost_and_friction.webp",
    "v151/artwork/frozen_heart.webp",
    "v151/artwork/fuoco_nel_legno.webp",
    "v151/artwork/fuori_dai_piedi.webp",
    "v151/artwork/fuori_dai_piedi_live.webp",
    "v151/artwork/fuori_dai_piedi_live_v6.webp",
    "v151/artwork/garage_band.webp",
    "v151/artwork/ghost_in_the_garden.webp",
    "v151/artwork/god_save_the_king.webp",
    "v151/artwork/golden_days.webp",
    "v151/artwork/good_enough.webp",
    "v151/artwork/happy_birthday_in_heaven.webp",
    "v151/artwork/haunted_haven.webp",
    "v151/artwork/heart_of_fire_and_ice.webp",
    "v151/artwork/her_first_truck.webp",
    "v151/artwork/hes_still_here.webp",
    "v151/artwork/hes_still_here_2026.webp",
    "v151/artwork/home_now.webp",
    "v151/artwork/howling_wolves.webp",
    "v151/artwork/hurricane.webp",
    "v151/artwork/hypocrites.webp",
    "v151/artwork/i_hate_you.webp",
    "v151/artwork/i_love_school.webp",
    "v151/artwork/i_scream.webp",
    "v151/artwork/i_tuoi_piccoli_disordini.webp",
    "v151/artwork/il_passo_solitario.webp",
    "v151/artwork/insatiable.webp",
    "v151/artwork/insult_the_ones_you_love.webp",
    "v151/artwork/introverted_girl.webp",
    "v151/artwork/jet_set.webp",
    "v151/artwork/julia_and_friends.webp",
    "v151/artwork/just_a_vibe.webp",
    "v151/artwork/just_wants_to_be_loved.webp",
    "v151/artwork/l_oro_di_cartone.webp",
    "v151/artwork/l_ultimo_adesso.webp",
    "v151/artwork/la_morte_di_cenerentola.webp",
    "v151/artwork/la_sposa_del_tuono.webp",
    "v151/artwork/la_sposa_del_tuono_live.webp",
    "v151/artwork/last_exit.webp",
    "v151/artwork/left_lane_legend.webp",
    "v151/artwork/little_butterflies.webp",
    "v151/artwork/luce_rossa.webp",
    "v151/artwork/luck_for_granted.webp",
    "v151/artwork/maybe_they_knew.webp",
    "v151/artwork/mind_the_gap.webp",
    "v151/artwork/my_foundation.webp",
    "v151/artwork/my_sweet_little_star.webp",
    "v151/artwork/need_for_speed.webp",
    "v151/artwork/nessun_dorma.webp",
    "v151/artwork/nice_girl.webp",
    "v151/artwork/nuora_selvaggia.webp",
    "v151/artwork/one_in_a_quarter_billion.webp",
    "v151/artwork/one_pulse.webp",
    "v151/artwork/paradox_love.webp",
    "v151/artwork/password_expired.webp",
    "v151/artwork/password_expired_live.webp",
    "v151/artwork/pathetique.webp",
    "v151/artwork/peaks_of_gold.webp",
    "v151/artwork/play_it_again.webp",
    "v151/artwork/private_lake.webp",
    "v151/artwork/radio_trash.webp",
    "v151/artwork/regina_di_niente.webp",
    "v151/artwork/resti_qui.webp",
    "v151/artwork/ride_the_groove.webp",
    "v151/artwork/rocker_songwriter.webp",
    "v151/artwork/rosso_panigale.webp",
    "v151/artwork/sailing_on_open_water.webp",
    "v151/artwork/sanctified_sinner.webp",
    "v151/artwork/sanctuary_riot.webp",
    "v151/artwork/scendi_dalla_sella.webp",
    "v151/artwork/schools_out.webp",
    "v151/artwork/set_the_spirit_free.webp",
    "v151/artwork/settembre_mi_guarda.jpg",
    "v151/artwork/settembre_mi_guarda.webp",
    "v151/artwork/siblings.webp",
    "v151/artwork/skeleton_dance.webp",
    "v151/artwork/slippery_road.webp",
    "v151/artwork/social_lubricant.webp",
    "v151/artwork/soulmate.webp",
    "v151/artwork/southern_belle.webp",
    "v151/artwork/southern_heat.webp",
    "v151/artwork/southerns_eve.webp",
    "v151/artwork/spacca_il_cristallo.webp",
    "v151/artwork/spooky.webp",
    "v151/artwork/spring.webp",
    "v151/artwork/storia_di_natale_I.webp",
    "v151/artwork/storm_of_the_abyss.webp",
    "v151/artwork/summers_farewell.webp",
    "v151/artwork/surfing_girl_wild_and_free.webp",
    "v151/artwork/tabby_gonzalez.webp",
    "v151/artwork/the_city_i_long_for.webp",
    "v151/artwork/the_dive.webp",
    "v151/artwork/the_hard_way.webp",
    "v151/artwork/the_hook.webp",
    "v151/artwork/the_quiet_kind.webp",
    "v151/artwork/the_rhythm_of_the_fox.webp",
    "v151/artwork/the_rhythm_of_you.webp",
    "v151/artwork/the_sharpened_bow.webp",
    "v151/artwork/the_sirens_anchor.webp",
    "v151/artwork/the_soft_return.webp",
    "v151/artwork/the_steel_winged_swan.webp",
    "v151/artwork/this_is_fine.webp",
    "v151/artwork/tide_on_stone.webp",
    "v151/artwork/toccata.webp",
    "v151/artwork/trick_or_treat.webp",
    "v151/artwork/un_cuore_sincero.webp",
    "v151/artwork/un_docile_arco.webp",
    "v151/artwork/un_tuffo_al_cuore.webp",
    "v151/artwork/uncaged.webp",
    "v151/artwork/upon_a_winding_trail.webp",
    "v151/artwork/venezia.webp",
    "v151/artwork/verona.webp",
    "v151/artwork/vetro_di_genova.webp",
    "v151/artwork/weekend.webp",
    "v151/artwork/whiteout.webp",
    "v151/artwork/winterstorm.webp",
    "v151/css/style 20260815_1400.css",
    "v151/css/style 20261007_1800.css",
    "v151/css/style copy.css",
    "v151/css/style.css",
    "v151/datenschutz.html",
    "v151/essays/embeddings.html",
    "v151/essays/essay1.html",
    "v151/essays/gemini-code-1782138112807.html",
    "v151/essays/ssm.html",
    "v151/essays/transformers.html",
    "v151/images/Guitar-in-Dolomites.webp",
    "v151/images/Hero.webp",
    "v151/images/Hero_1.webp",
    "v151/images/Hero_1_Square.webp",
    "v151/images/Hero_2.webp",
    "v151/images/Julia-skiing-Dolomites.webp",
    "v151/images/Stage_1.webp",
    "v151/images/Stage_2.webp",
    "v151/images/Stage_3.webp",
    "v151/images/Stage_4.webp",
    "v151/images/Stage_5.webp",
    "v151/images/Stage_6.webp",
    "v151/images/Stage_7.webp",
    "v151/images/Stage_8.webp",
    "v151/images/embeddings_music.webp",
    "v151/images/embeddings_words.webp",
    "v151/images/icons/app_icon_192 copy.png",
    "v151/images/icons/app_icon_192.png",
    "v151/images/icons/app_icon_512 copy.png",
    "v151/images/icons/app_icon_512.png",
    "v151/images/julia_embeddings.webp",
    "v151/images/julia_ssm_equations.webp",
    "v151/images/password_expired_live.webp",
    "v151/images/podcasts.webp",
    "v151/images/southern_belle.webp",
    "v151/images/ssm_diagram.webp",
    "v151/images/surfing_girl_wild_and_free.webp",
    "v151/images/under_the_hood.webp",
    "v151/images/witch.webp",
    "v151/impressum.html",
    "v151/index.html",
    "v151/js/DiaryService.js",
    "v151/js/Director.js",
    "v151/js/Main 20260319_1300.js",
    "v151/js/Main.js",
    "v151/js/PickerDrum.js",
    "v151/js/Placeholder.js",
    "v151/js/Player.js",
    "v151/js/SongCollection.js",
    "v151/js/SongService.js",
    "v151/js/VersionCore.js",
    "v151/js/ffmpeg.min.js",
    "v151/js/lucide.js",
    "v151/js/tailwindcss.js",
    "v151/js/tex-mml-chtml.js",
    "v151/legal_notice.html",
    "v151/manifest.json",
    "v151/placeholder/footer.html",
    "v151/placeholder/header.html",
    "v151/privacy_policy.html"
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
