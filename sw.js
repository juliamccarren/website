const STATIC_CACHE = 'julia-site-v159';
const STATIC_CORE_CACHE = 'julia-static-core';    
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "js/VersionCore.js",
    "v159/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v159/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v159/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v159/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v159/artwork/Gemini_Generated_Image_6y6tek6y6tek6y6t.jpg",
    "v159/artwork/Gemini_Generated_Image_ab340rab340rab34.jpg",
    "v159/artwork/Gemini_Generated_Image_bs6zxsbs6zxsbs6z.jpg",
    "v159/artwork/Gemini_Generated_Image_jd1hzejd1hzejd1h.jpg",
    "v159/artwork/a_cinque_metri_dal_cielo.webp",
    "v159/artwork/a_slow_blossoming_rose.webp",
    "v159/artwork/alejandro.webp",
    "v159/artwork/alta_tensione.webp",
    "v159/artwork/antitoxic.webp",
    "v159/artwork/autumns_whisper.webp",
    "v159/artwork/avalanche.webp",
    "v159/artwork/betrayal.webp",
    "v159/artwork/big_dreams_shine.webp",
    "v159/artwork/big_dreams_shine_live.webp",
    "v159/artwork/bite_of_the_night.webp",
    "v159/artwork/black_cat_bones.webp",
    "v159/artwork/boring.webp",
    "v159/artwork/brainrot.webp",
    "v159/artwork/brooklyn.webp",
    "v159/artwork/buckn_the_bain.webp",
    "v159/artwork/buio_perfetto.webp",
    "v159/artwork/cheerleader.webp",
    "v159/artwork/christmas_oratorio.webp",
    "v159/artwork/coffee_in_amsterdam.webp",
    "v159/artwork/cool_fire.webp",
    "v159/artwork/cuore_di_lupa.webp",
    "v159/artwork/dancing_on_your_grave.webp",
    "v159/artwork/date_disaster.webp",
    "v159/artwork/deep_blue.webp",
    "v159/artwork/deepdive_1.webp",
    "v159/artwork/deepdive_2.webp",
    "v159/artwork/default.webp",
    "v159/artwork/delta_blues.webp",
    "v159/artwork/digital_ghost.webp",
    "v159/artwork/disco_flashback.webp",
    "v159/artwork/disco_flashback_2.webp",
    "v159/artwork/disposable.webp",
    "v159/artwork/distortion.webp",
    "v159/artwork/domenica_in_giardino.webp",
    "v159/artwork/drunk_not_dumb.webp",
    "v159/artwork/duecento_all_ora.webp",
    "v159/artwork/dynamite.webp",
    "v159/artwork/electric_hearts.webp",
    "v159/artwork/embers_and_sparks.webp",
    "v159/artwork/esultate_gioite.webp",
    "v159/artwork/faro_nel_temporale.webp",
    "v159/artwork/fences_down.webp",
    "v159/artwork/ferro_e_canna.webp",
    "v159/artwork/fine_apnea.webp",
    "v159/artwork/fine_apnea_2.webp",
    "v159/artwork/fire_in_my_veins.webp",
    "v159/artwork/first_steps_to_stardom.webp",
    "v159/artwork/fog_of_fear.webp",
    "v159/artwork/forever.webp",
    "v159/artwork/fornello_rosso.webp",
    "v159/artwork/four_chords_later.webp",
    "v159/artwork/friday_night.webp",
    "v159/artwork/from_first_steps_to_stardom.webp",
    "v159/artwork/frost_and_friction.webp",
    "v159/artwork/frozen_heart.webp",
    "v159/artwork/fuoco_nel_legno.webp",
    "v159/artwork/fuori_dai_piedi.webp",
    "v159/artwork/fuori_dai_piedi_live.webp",
    "v159/artwork/fuori_dai_piedi_live_v6.webp",
    "v159/artwork/garage_band.webp",
    "v159/artwork/ghost_in_the_garden.webp",
    "v159/artwork/god_save_the_king.webp",
    "v159/artwork/golden_days.webp",
    "v159/artwork/good_enough.webp",
    "v159/artwork/happy_birthday_in_heaven.webp",
    "v159/artwork/haunted_haven.webp",
    "v159/artwork/heart_of_fire_and_ice.webp",
    "v159/artwork/her_first_truck.webp",
    "v159/artwork/hes_still_here.webp",
    "v159/artwork/hes_still_here_2026.webp",
    "v159/artwork/home_now.webp",
    "v159/artwork/howling_wolves.webp",
    "v159/artwork/hurricane.webp",
    "v159/artwork/hypocrites.webp",
    "v159/artwork/i_hate_you.webp",
    "v159/artwork/i_love_school.webp",
    "v159/artwork/i_scream.webp",
    "v159/artwork/i_tuoi_piccoli_disordini.webp",
    "v159/artwork/il_passo_solitario.webp",
    "v159/artwork/il_segreto_della_notte_santa.webp",
    "v159/artwork/insatiable.webp",
    "v159/artwork/insult_the_ones_you_love.webp",
    "v159/artwork/introverted_girl.webp",
    "v159/artwork/jet_set.webp",
    "v159/artwork/julia_and_friends.webp",
    "v159/artwork/just_a_vibe.webp",
    "v159/artwork/just_wants_to_be_loved.webp",
    "v159/artwork/l_oro_di_cartone.webp",
    "v159/artwork/l_ultimo_adesso.webp",
    "v159/artwork/la_morte_di_cenerentola.webp",
    "v159/artwork/la_sposa_del_tuono.webp",
    "v159/artwork/la_sposa_del_tuono_live.webp",
    "v159/artwork/last_exit.webp",
    "v159/artwork/left_lane_legend.webp",
    "v159/artwork/little_butterflies.webp",
    "v159/artwork/luce_rossa.webp",
    "v159/artwork/luck_for_granted.webp",
    "v159/artwork/maybe_they_knew.webp",
    "v159/artwork/mind_the_gap.webp",
    "v159/artwork/moto_rossa_di_natale.webp",
    "v159/artwork/my_foundation.webp",
    "v159/artwork/my_sweet_little_star.webp",
    "v159/artwork/natale_al_nord.jpg",
    "v159/artwork/natale_al_nord.webp",
    "v159/artwork/need_for_speed.webp",
    "v159/artwork/nessun_dorma.webp",
    "v159/artwork/nice_girl.webp",
    "v159/artwork/notte_di_silenzio_2.webp",
    "v159/artwork/nuora_selvaggia.webp",
    "v159/artwork/o_sanctissima.webp",
    "v159/artwork/one_in_a_quarter_billion.webp",
    "v159/artwork/one_pulse.webp",
    "v159/artwork/paradox_love.webp",
    "v159/artwork/password_expired.webp",
    "v159/artwork/password_expired_live.webp",
    "v159/artwork/pathetique.webp",
    "v159/artwork/peaks_of_gold.webp",
    "v159/artwork/play_it_again.webp",
    "v159/artwork/private_lake.webp",
    "v159/artwork/radio_trash.webp",
    "v159/artwork/regina_di_niente.webp",
    "v159/artwork/resti_qui.webp",
    "v159/artwork/ride_the_groove.webp",
    "v159/artwork/rocker_songwriter.webp",
    "v159/artwork/rosso_panigale.webp",
    "v159/artwork/sailing_on_open_water.webp",
    "v159/artwork/sanctified_sinner.webp",
    "v159/artwork/sanctuary_riot.webp",
    "v159/artwork/scendi_dalla_sella.webp",
    "v159/artwork/schools_out.webp",
    "v159/artwork/set_the_spirit_free.webp",
    "v159/artwork/settembre_mi_guarda.jpg",
    "v159/artwork/settembre_mi_guarda.webp",
    "v159/artwork/siblings.webp",
    "v159/artwork/skeleton_dance.webp",
    "v159/artwork/slippery_road.webp",
    "v159/artwork/social_lubricant.webp",
    "v159/artwork/soulmate.webp",
    "v159/artwork/southern_belle.webp",
    "v159/artwork/southern_heat.webp",
    "v159/artwork/southerns_eve.webp",
    "v159/artwork/spacca_il_cristallo.webp",
    "v159/artwork/spooky.webp",
    "v159/artwork/spring.webp",
    "v159/artwork/storia_di_natale_I.webp",
    "v159/artwork/storia_di_natale_II.webp",
    "v159/artwork/storm_of_the_abyss.webp",
    "v159/artwork/summers_farewell.webp",
    "v159/artwork/surfing_girl_wild_and_free.webp",
    "v159/artwork/tabby_gonzalez.webp",
    "v159/artwork/the_city_i_long_for.webp",
    "v159/artwork/the_dive.webp",
    "v159/artwork/the_hard_way.webp",
    "v159/artwork/the_hook.webp",
    "v159/artwork/the_quiet_kind.webp",
    "v159/artwork/the_rhythm_of_the_fox.webp",
    "v159/artwork/the_rhythm_of_you.webp",
    "v159/artwork/the_sharpened_bow.webp",
    "v159/artwork/the_sirens_anchor.webp",
    "v159/artwork/the_soft_return.webp",
    "v159/artwork/the_steel_winged_swan.webp",
    "v159/artwork/this_is_fine.webp",
    "v159/artwork/tide_on_stone.webp",
    "v159/artwork/toccata.webp",
    "v159/artwork/trick_or_treat.webp",
    "v159/artwork/turbine_di_natale.webp",
    "v159/artwork/un_cuore_sincero.webp",
    "v159/artwork/un_docile_arco.webp",
    "v159/artwork/un_tuffo_al_cuore.webp",
    "v159/artwork/uncaged.webp",
    "v159/artwork/upon_a_winding_trail.webp",
    "v159/artwork/venezia.webp",
    "v159/artwork/verona.webp",
    "v159/artwork/vetro_di_genova.webp",
    "v159/artwork/weekend.webp",
    "v159/artwork/whiteout.webp",
    "v159/artwork/winterstorm.webp",
    "v159/css/style 20260815_1400.css",
    "v159/css/style 20261007_1800.css",
    "v159/css/style copy.css",
    "v159/css/style.css",
    "v159/datenschutz.html",
    "v159/essays/embeddings.html",
    "v159/essays/essay1.html",
    "v159/essays/gemini-code-1782138112807.html",
    "v159/essays/ssm.html",
    "v159/essays/transformers.html",
    "v159/images/Guitar-in-Dolomites.webp",
    "v159/images/Hero.webp",
    "v159/images/Hero_1.webp",
    "v159/images/Hero_1_Square.webp",
    "v159/images/Hero_2.webp",
    "v159/images/Julia-skiing-Dolomites.webp",
    "v159/images/Stage_1.webp",
    "v159/images/Stage_2.webp",
    "v159/images/Stage_3.webp",
    "v159/images/Stage_4.webp",
    "v159/images/Stage_5.webp",
    "v159/images/Stage_6.webp",
    "v159/images/Stage_7.webp",
    "v159/images/Stage_8.webp",
    "v159/images/embeddings_music.webp",
    "v159/images/embeddings_words.webp",
    "v159/images/icons/app_icon_192 copy.png",
    "v159/images/icons/app_icon_192.png",
    "v159/images/icons/app_icon_512 copy.png",
    "v159/images/icons/app_icon_512.png",
    "v159/images/julia_embeddings.webp",
    "v159/images/julia_ssm_equations.webp",
    "v159/images/password_expired_live.webp",
    "v159/images/podcasts.webp",
    "v159/images/southern_belle.webp",
    "v159/images/ssm_diagram.webp",
    "v159/images/surfing_girl_wild_and_free.webp",
    "v159/images/under_the_hood.webp",
    "v159/images/witch.webp",
    "v159/impressum.html",
    "v159/index.html",
    "v159/js/DiaryService.js",
    "v159/js/Director.js",
    "v159/js/Main 20260319_1300.js",
    "v159/js/Main.js",
    "v159/js/PickerDrum.js",
    "v159/js/Placeholder.js",
    "v159/js/Player.js",
    "v159/js/SongCollection.js",
    "v159/js/SongService.js",
    "v159/js/VersionCore.js",
    "v159/js/ffmpeg.min.js",
    "v159/js/lucide.js",
    "v159/js/tailwindcss.js",
    "v159/js/tex-mml-chtml.js",
    "v159/legal_notice.html",
    "v159/manifest.json",
    "v159/placeholder/footer.html",
    "v159/placeholder/header.html",
    "v159/privacy_policy.html"
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
