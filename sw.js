const STATIC_CACHE = 'julia-site-v39';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v39/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v39/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v39/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v39/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v39/artwork/a_slow_blossoming_rose.webp",
    "v39/artwork/antitoxic.webp",
    "v39/artwork/autumns_whisper.webp",
    "v39/artwork/big_dreams_shine.webp",
    "v39/artwork/bite_of_the_night.webp",
    "v39/artwork/brooklyn.webp",
    "v39/artwork/buckn_the_bain.webp",
    "v39/artwork/cheerleader.webp",
    "v39/artwork/cool_fire.webp",
    "v39/artwork/deep_blue.webp",
    "v39/artwork/digital_ghost.webp",
    "v39/artwork/disco_flashback.webp",
    "v39/artwork/disco_flashback_2.webp",
    "v39/artwork/first_steps_to_stardom.webp",
    "v39/artwork/fog_of_fear.webp",
    "v39/artwork/forever.webp",
    "v39/artwork/friday_night.webp",
    "v39/artwork/frozen_heart.webp",
    "v39/artwork/garage_band.webp",
    "v39/artwork/ghost_in_the_garden.webp",
    "v39/artwork/god_save_the_king.webp",
    "v39/artwork/good_enough.webp",
    "v39/artwork/haunted_haven.webp",
    "v39/artwork/heart_of_fire_and_ice.webp",
    "v39/artwork/her_first_truck.webp",
    "v39/artwork/hes_still_here.webp",
    "v39/artwork/howling_wolves.webp",
    "v39/artwork/i_love_school.webp",
    "v39/artwork/introverted_girl.webp",
    "v39/artwork/just_wants_to_be_loved.webp",
    "v39/artwork/last_exit.webp",
    "v39/artwork/left_lane_legend.webp",
    "v39/artwork/maybe_they_knew.webp",
    "v39/artwork/my_foundation.webp",
    "v39/artwork/need_for_speed.webp",
    "v39/artwork/paradox_love.webp",
    "v39/artwork/password_expired.webp",
    "v39/artwork/password_expired_live.webp",
    "v39/artwork/peaks_of_gold.webp",
    "v39/artwork/private_lake.webp",
    "v39/artwork/radio_trash.webp",
    "v39/artwork/ride_the_groove.webp",
    "v39/artwork/sailing_on_open_water.webp",
    "v39/artwork/sanctified_sinner.webp",
    "v39/artwork/sanctuary_riot.webp",
    "v39/artwork/schools_out.webp",
    "v39/artwork/siblings.webp",
    "v39/artwork/skeleton_dance.webp",
    "v39/artwork/spooky.webp",
    "v39/artwork/storm_of_the_abyss.webp",
    "v39/artwork/summers_farewell.webp",
    "v39/artwork/tabby_gonzalez.webp",
    "v39/artwork/the_dive.webp",
    "v39/artwork/the_rhythm_of_the_fox.webp",
    "v39/artwork/the_steel_winged_swan.webp",
    "v39/artwork/toccata.webp",
    "v39/artwork/trick_or_treat.webp",
    "v39/artwork/uncaged.webp",
    "v39/artwork/upon_a_winding_trail.webp",
    "v39/artwork/venezia.webp",
    "v39/artwork/whiteout.webp",
    "v39/artwork/winterstorm.webp",
    "v39/datenschutz.html",
    "v39/images/Guitar-in-Dolomites.webp",
    "v39/images/Hero.webp",
    "v39/images/Hero_square.webp",
    "v39/images/Julia-skiing-Dolomites.webp",
    "v39/images/Stage_1.webp",
    "v39/images/Stage_2.webp",
    "v39/images/Stage_3.webp",
    "v39/images/Stage_4.webp",
    "v39/images/Stage_5.webp",
    "v39/images/Stage_6.webp",
    "v39/images/Stage_7.webp",
    "v39/images/Stage_8.webp",
    "v39/images/icons/app_icon_192.png",
    "v39/images/icons/app_icon_512.png",
    "v39/images/original/Guitar-in-Dolomites.png",
    "v39/images/original/Hero.jpg",
    "v39/images/original/Hero_square.jpg",
    "v39/images/original/Julia-skiing-Dolomites.png",
    "v39/images/original/Stage_1.png",
    "v39/images/original/Stage_2.png",
    "v39/images/original/Stage_3.png",
    "v39/images/original/Stage_4.png",
    "v39/images/original/Stage_5.png",
    "v39/images/original/Stage_6.png",
    "v39/images/original/Stage_7.png",
    "v39/images/original/Stage_8.png",
    "v39/images/password_expired_live.webp",
    "v39/impressum.html",
    "v39/index.html",
    "v39/js/DiaryService.js",
    "v39/js/Main.js",
    "v39/js/PickerDrum.js",
    "v39/js/Player.js",
    "v39/js/SongCollection.js",
    "v39/js/SongService.js",
    "v39/js/VersionCore.js",
    "v39/js/lucide.js",
    "v39/js/tailwindcss.js",
    "v39/legal_notice.html",
    "v39/manifest.json",
    "v39/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v39...');
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
