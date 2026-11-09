const STATIC_CACHE = 'julia-site-v154';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v154/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v154/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v154/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v154/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v154/artwork/a_cinque_metri_dal_cielo.webp",
    "v154/artwork/a_slow_blossoming_rose.webp",
    "v154/artwork/alejandro.webp",
    "v154/artwork/alta_tensione.webp",
    "v154/artwork/antitoxic.webp",
    "v154/artwork/autumns_whisper.webp",
    "v154/artwork/avalanche.webp",
    "v154/artwork/betrayal.webp",
    "v154/artwork/big_dreams_shine.webp",
    "v154/artwork/big_dreams_shine_live.webp",
    "v154/artwork/bite_of_the_night.webp",
    "v154/artwork/black_cat_bones.webp",
    "v154/artwork/boring.webp",
    "v154/artwork/brainrot.webp",
    "v154/artwork/brooklyn.webp",
    "v154/artwork/buckn_the_bain.webp",
    "v154/artwork/buio_perfetto.webp",
    "v154/artwork/cheerleader.webp",
    "v154/artwork/christmas_oratorio.webp",
    "v154/artwork/coffee_in_amsterdam.webp",
    "v154/artwork/cool_fire.webp",
    "v154/artwork/cuore_di_lupa.webp",
    "v154/artwork/dancing_on_your_grave.webp",
    "v154/artwork/date_disaster.webp",
    "v154/artwork/deep_blue.webp",
    "v154/artwork/deepdive_1.webp",
    "v154/artwork/deepdive_2.webp",
    "v154/artwork/default.webp",
    "v154/artwork/delta_blues.webp",
    "v154/artwork/digital_ghost.webp",
    "v154/artwork/disco_flashback.webp",
    "v154/artwork/disco_flashback_2.webp",
    "v154/artwork/disposable.webp",
    "v154/artwork/distortion.webp",
    "v154/artwork/domenica_in_giardino.webp",
    "v154/artwork/drunk_not_dumb.webp",
    "v154/artwork/duecento_all_ora.webp",
    "v154/artwork/dynamite.webp",
    "v154/artwork/electric_hearts.webp",
    "v154/artwork/embers_and_sparks.webp",
    "v154/artwork/esultate_gioite.webp",
    "v154/artwork/faro_nel_temporale.webp",
    "v154/artwork/fences_down.webp",
    "v154/artwork/ferro_e_canna.webp",
    "v154/artwork/fine_apnea.webp",
    "v154/artwork/fine_apnea_2.webp",
    "v154/artwork/fire_in_my_veins.webp",
    "v154/artwork/first_steps_to_stardom.webp",
    "v154/artwork/fog_of_fear.webp",
    "v154/artwork/forever.webp",
    "v154/artwork/fornello_rosso.webp",
    "v154/artwork/four_chords_later.webp",
    "v154/artwork/friday_night.webp",
    "v154/artwork/from_first_steps_to_stardom.webp",
    "v154/artwork/frost_and_friction.webp",
    "v154/artwork/frozen_heart.webp",
    "v154/artwork/fuoco_nel_legno.webp",
    "v154/artwork/fuori_dai_piedi.webp",
    "v154/artwork/fuori_dai_piedi_live.webp",
    "v154/artwork/fuori_dai_piedi_live_v6.webp",
    "v154/artwork/garage_band.webp",
    "v154/artwork/ghost_in_the_garden.webp",
    "v154/artwork/god_save_the_king.webp",
    "v154/artwork/golden_days.webp",
    "v154/artwork/good_enough.webp",
    "v154/artwork/happy_birthday_in_heaven.webp",
    "v154/artwork/haunted_haven.webp",
    "v154/artwork/heart_of_fire_and_ice.webp",
    "v154/artwork/her_first_truck.webp",
    "v154/artwork/hes_still_here.webp",
    "v154/artwork/hes_still_here_2026.webp",
    "v154/artwork/home_now.webp",
    "v154/artwork/howling_wolves.webp",
    "v154/artwork/hurricane.webp",
    "v154/artwork/hypocrites.webp",
    "v154/artwork/i_hate_you.webp",
    "v154/artwork/i_love_school.webp",
    "v154/artwork/i_scream.webp",
    "v154/artwork/i_tuoi_piccoli_disordini.webp",
    "v154/artwork/il_passo_solitario.webp",
    "v154/artwork/insatiable.webp",
    "v154/artwork/insult_the_ones_you_love.webp",
    "v154/artwork/introverted_girl.webp",
    "v154/artwork/jet_set.webp",
    "v154/artwork/julia_and_friends.webp",
    "v154/artwork/just_a_vibe.webp",
    "v154/artwork/just_wants_to_be_loved.webp",
    "v154/artwork/l_oro_di_cartone.webp",
    "v154/artwork/l_ultimo_adesso.webp",
    "v154/artwork/la_morte_di_cenerentola.webp",
    "v154/artwork/la_sposa_del_tuono.webp",
    "v154/artwork/la_sposa_del_tuono_live.webp",
    "v154/artwork/last_exit.webp",
    "v154/artwork/left_lane_legend.webp",
    "v154/artwork/little_butterflies.webp",
    "v154/artwork/luce_rossa.webp",
    "v154/artwork/luck_for_granted.webp",
    "v154/artwork/maybe_they_knew.webp",
    "v154/artwork/mind_the_gap.webp",
    "v154/artwork/my_foundation.webp",
    "v154/artwork/my_sweet_little_star.webp",
    "v154/artwork/need_for_speed.webp",
    "v154/artwork/nessun_dorma.webp",
    "v154/artwork/nice_girl.webp",
    "v154/artwork/notte_di_silenzio_2.webp",
    "v154/artwork/nuora_selvaggia.webp",
    "v154/artwork/o_sanctissima.webp",
    "v154/artwork/one_in_a_quarter_billion.webp",
    "v154/artwork/one_pulse.webp",
    "v154/artwork/paradox_love.webp",
    "v154/artwork/password_expired.webp",
    "v154/artwork/password_expired_live.webp",
    "v154/artwork/pathetique.webp",
    "v154/artwork/peaks_of_gold.webp",
    "v154/artwork/play_it_again.webp",
    "v154/artwork/private_lake.webp",
    "v154/artwork/radio_trash.webp",
    "v154/artwork/regina_di_niente.webp",
    "v154/artwork/resti_qui.webp",
    "v154/artwork/ride_the_groove.webp",
    "v154/artwork/rocker_songwriter.webp",
    "v154/artwork/rosso_panigale.webp",
    "v154/artwork/sailing_on_open_water.webp",
    "v154/artwork/sanctified_sinner.webp",
    "v154/artwork/sanctuary_riot.webp",
    "v154/artwork/scendi_dalla_sella.webp",
    "v154/artwork/schools_out.webp",
    "v154/artwork/set_the_spirit_free.webp",
    "v154/artwork/settembre_mi_guarda.jpg",
    "v154/artwork/settembre_mi_guarda.webp",
    "v154/artwork/siblings.webp",
    "v154/artwork/skeleton_dance.webp",
    "v154/artwork/slippery_road.webp",
    "v154/artwork/social_lubricant.webp",
    "v154/artwork/soulmate.webp",
    "v154/artwork/southern_belle.webp",
    "v154/artwork/southern_heat.webp",
    "v154/artwork/southerns_eve.webp",
    "v154/artwork/spacca_il_cristallo.webp",
    "v154/artwork/spooky.webp",
    "v154/artwork/spring.webp",
    "v154/artwork/storia_di_natale_I.webp",
    "v154/artwork/storm_of_the_abyss.webp",
    "v154/artwork/summers_farewell.webp",
    "v154/artwork/surfing_girl_wild_and_free.webp",
    "v154/artwork/tabby_gonzalez.webp",
    "v154/artwork/the_city_i_long_for.webp",
    "v154/artwork/the_dive.webp",
    "v154/artwork/the_hard_way.webp",
    "v154/artwork/the_hook.webp",
    "v154/artwork/the_quiet_kind.webp",
    "v154/artwork/the_rhythm_of_the_fox.webp",
    "v154/artwork/the_rhythm_of_you.webp",
    "v154/artwork/the_sharpened_bow.webp",
    "v154/artwork/the_sirens_anchor.webp",
    "v154/artwork/the_soft_return.webp",
    "v154/artwork/the_steel_winged_swan.webp",
    "v154/artwork/this_is_fine.webp",
    "v154/artwork/tide_on_stone.webp",
    "v154/artwork/toccata.webp",
    "v154/artwork/trick_or_treat.webp",
    "v154/artwork/turbine_di_natale.webp",
    "v154/artwork/un_cuore_sincero.webp",
    "v154/artwork/un_docile_arco.webp",
    "v154/artwork/un_tuffo_al_cuore.webp",
    "v154/artwork/uncaged.webp",
    "v154/artwork/upon_a_winding_trail.webp",
    "v154/artwork/venezia.webp",
    "v154/artwork/verona.webp",
    "v154/artwork/vetro_di_genova.webp",
    "v154/artwork/weekend.webp",
    "v154/artwork/whiteout.webp",
    "v154/artwork/winterstorm.webp",
    "v154/css/style 20260815_1400.css",
    "v154/css/style 20261007_1800.css",
    "v154/css/style copy.css",
    "v154/css/style.css",
    "v154/datenschutz.html",
    "v154/essays/embeddings.html",
    "v154/essays/essay1.html",
    "v154/essays/gemini-code-1782138112807.html",
    "v154/essays/ssm.html",
    "v154/essays/transformers.html",
    "v154/images/Guitar-in-Dolomites.webp",
    "v154/images/Hero.webp",
    "v154/images/Hero_1.webp",
    "v154/images/Hero_1_Square.webp",
    "v154/images/Hero_2.webp",
    "v154/images/Julia-skiing-Dolomites.webp",
    "v154/images/Stage_1.webp",
    "v154/images/Stage_2.webp",
    "v154/images/Stage_3.webp",
    "v154/images/Stage_4.webp",
    "v154/images/Stage_5.webp",
    "v154/images/Stage_6.webp",
    "v154/images/Stage_7.webp",
    "v154/images/Stage_8.webp",
    "v154/images/embeddings_music.webp",
    "v154/images/embeddings_words.webp",
    "v154/images/icons/app_icon_192 copy.png",
    "v154/images/icons/app_icon_192.png",
    "v154/images/icons/app_icon_512 copy.png",
    "v154/images/icons/app_icon_512.png",
    "v154/images/julia_embeddings.webp",
    "v154/images/julia_ssm_equations.webp",
    "v154/images/password_expired_live.webp",
    "v154/images/podcasts.webp",
    "v154/images/southern_belle.webp",
    "v154/images/ssm_diagram.webp",
    "v154/images/surfing_girl_wild_and_free.webp",
    "v154/images/under_the_hood.webp",
    "v154/images/witch.webp",
    "v154/impressum.html",
    "v154/index.html",
    "v154/js/DiaryService.js",
    "v154/js/Director.js",
    "v154/js/Main 20260319_1300.js",
    "v154/js/Main.js",
    "v154/js/PickerDrum.js",
    "v154/js/Placeholder.js",
    "v154/js/Player.js",
    "v154/js/SongCollection.js",
    "v154/js/SongService.js",
    "v154/js/VersionCore.js",
    "v154/js/ffmpeg.min.js",
    "v154/js/lucide.js",
    "v154/js/tailwindcss.js",
    "v154/js/tex-mml-chtml.js",
    "v154/legal_notice.html",
    "v154/manifest.json",
    "v154/placeholder/footer.html",
    "v154/placeholder/header.html",
    "v154/privacy_policy.html"
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
