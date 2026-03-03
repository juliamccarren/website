const STATIC_CACHE = 'julia-site-v36';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v36/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v36/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v36/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v36/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v36/artwork/a_slow_blossoming_rose.webp",
    "v36/artwork/antitoxic.webp",
    "v36/artwork/autumns_whisper.webp",
    "v36/artwork/big_dreams_shine.webp",
    "v36/artwork/bite_of_the_night.webp",
    "v36/artwork/brooklyn.webp",
    "v36/artwork/buckn_the_bain.webp",
    "v36/artwork/cheerleader.webp",
    "v36/artwork/cool_fire.webp",
    "v36/artwork/deep_blue.webp",
    "v36/artwork/digital_ghost.webp",
    "v36/artwork/disco_flashback.webp",
    "v36/artwork/disco_flashback_2.webp",
    "v36/artwork/first_steps_to_stardom.webp",
    "v36/artwork/fog_of_fear.webp",
    "v36/artwork/forever.webp",
    "v36/artwork/friday_night.webp",
    "v36/artwork/frozen_heart.webp",
    "v36/artwork/garage_band.webp",
    "v36/artwork/ghost_in_the_garden.webp",
    "v36/artwork/god_save_the_king.webp",
    "v36/artwork/good_enough.webp",
    "v36/artwork/haunted_haven.webp",
    "v36/artwork/heart_of_fire_and_ice.webp",
    "v36/artwork/her_first_truck.webp",
    "v36/artwork/hes_still_here.webp",
    "v36/artwork/howling_wolves.webp",
    "v36/artwork/i_love_school.webp",
    "v36/artwork/introverted_girl.webp",
    "v36/artwork/just_wants_to_be_loved.webp",
    "v36/artwork/last_exit.webp",
    "v36/artwork/left_lane_legend.webp",
    "v36/artwork/maybe_they_knew.webp",
    "v36/artwork/my_foundation.webp",
    "v36/artwork/need_for_speed.webp",
    "v36/artwork/paradox_love.webp",
    "v36/artwork/password_expired.webp",
    "v36/artwork/password_expired_live.webp",
    "v36/artwork/peaks_of_gold.webp",
    "v36/artwork/private_lake.webp",
    "v36/artwork/radio_trash.webp",
    "v36/artwork/ride_the_groove.webp",
    "v36/artwork/sailing_on_open_water.webp",
    "v36/artwork/sanctified_sinner.webp",
    "v36/artwork/sanctuary_riot.webp",
    "v36/artwork/schools_out.webp",
    "v36/artwork/siblings.webp",
    "v36/artwork/skeleton_dance.webp",
    "v36/artwork/spooky.webp",
    "v36/artwork/storm_of_the_abyss.webp",
    "v36/artwork/summers_farewell.webp",
    "v36/artwork/tabby_gonzalez.webp",
    "v36/artwork/the_dive.webp",
    "v36/artwork/the_rhythm_of_the_fox.webp",
    "v36/artwork/the_steel_winged_swan.webp",
    "v36/artwork/toccata.webp",
    "v36/artwork/trick_or_treat.webp",
    "v36/artwork/uncaged.webp",
    "v36/artwork/upon_a_winding_trail.webp",
    "v36/artwork/venezia.webp",
    "v36/artwork/whiteout.webp",
    "v36/artwork/winterstorm.webp",
    "v36/datenschutz.html",
    "v36/images/Guitar-in-Dolomites.webp",
    "v36/images/Hero.webp",
    "v36/images/Hero_square.webp",
    "v36/images/Julia-skiing-Dolomites.webp",
    "v36/images/Stage_1.webp",
    "v36/images/Stage_2.webp",
    "v36/images/Stage_3.webp",
    "v36/images/Stage_4.webp",
    "v36/images/Stage_5.webp",
    "v36/images/Stage_6.webp",
    "v36/images/Stage_7.webp",
    "v36/images/Stage_8.webp",
    "v36/images/icons/app_icon_192.png",
    "v36/images/icons/app_icon_512.png",
    "v36/images/original/Guitar-in-Dolomites.png",
    "v36/images/original/Hero.jpg",
    "v36/images/original/Hero_square.jpg",
    "v36/images/original/Julia-skiing-Dolomites.png",
    "v36/images/original/Stage_1.png",
    "v36/images/original/Stage_2.png",
    "v36/images/original/Stage_3.png",
    "v36/images/original/Stage_4.png",
    "v36/images/original/Stage_5.png",
    "v36/images/original/Stage_6.png",
    "v36/images/original/Stage_7.png",
    "v36/images/original/Stage_8.png",
    "v36/images/password_expired_live.webp",
    "v36/impressum.html",
    "v36/index.html",
    "v36/js/DiaryService.js",
    "v36/js/Main.js",
    "v36/js/PickerDrum.js",
    "v36/js/Player.js",
    "v36/js/SongCollection.js",
    "v36/js/SongService.js",
    "v36/js/VersionCore.js",
    "v36/js/lucide.js",
    "v36/js/tailwindcss.js",
    "v36/legal_notice.html",
    "v36/manifest.json",
    "v36/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v36...');
            return cache.addAll(ASSETS);
        })
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

self.addEventListener('fetch', event => {
    if (event.request.url.includes('music.juliamccarren.com')) return;
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
