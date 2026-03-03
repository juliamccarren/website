const STATIC_CACHE = 'julia-site-v37';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v37/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v37/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v37/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v37/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v37/artwork/a_slow_blossoming_rose.webp",
    "v37/artwork/antitoxic.webp",
    "v37/artwork/autumns_whisper.webp",
    "v37/artwork/big_dreams_shine.webp",
    "v37/artwork/bite_of_the_night.webp",
    "v37/artwork/brooklyn.webp",
    "v37/artwork/buckn_the_bain.webp",
    "v37/artwork/cheerleader.webp",
    "v37/artwork/cool_fire.webp",
    "v37/artwork/deep_blue.webp",
    "v37/artwork/digital_ghost.webp",
    "v37/artwork/disco_flashback.webp",
    "v37/artwork/disco_flashback_2.webp",
    "v37/artwork/first_steps_to_stardom.webp",
    "v37/artwork/fog_of_fear.webp",
    "v37/artwork/forever.webp",
    "v37/artwork/friday_night.webp",
    "v37/artwork/frozen_heart.webp",
    "v37/artwork/garage_band.webp",
    "v37/artwork/ghost_in_the_garden.webp",
    "v37/artwork/god_save_the_king.webp",
    "v37/artwork/good_enough.webp",
    "v37/artwork/haunted_haven.webp",
    "v37/artwork/heart_of_fire_and_ice.webp",
    "v37/artwork/her_first_truck.webp",
    "v37/artwork/hes_still_here.webp",
    "v37/artwork/howling_wolves.webp",
    "v37/artwork/i_love_school.webp",
    "v37/artwork/introverted_girl.webp",
    "v37/artwork/just_wants_to_be_loved.webp",
    "v37/artwork/last_exit.webp",
    "v37/artwork/left_lane_legend.webp",
    "v37/artwork/maybe_they_knew.webp",
    "v37/artwork/my_foundation.webp",
    "v37/artwork/need_for_speed.webp",
    "v37/artwork/paradox_love.webp",
    "v37/artwork/password_expired.webp",
    "v37/artwork/password_expired_live.webp",
    "v37/artwork/peaks_of_gold.webp",
    "v37/artwork/private_lake.webp",
    "v37/artwork/radio_trash.webp",
    "v37/artwork/ride_the_groove.webp",
    "v37/artwork/sailing_on_open_water.webp",
    "v37/artwork/sanctified_sinner.webp",
    "v37/artwork/sanctuary_riot.webp",
    "v37/artwork/schools_out.webp",
    "v37/artwork/siblings.webp",
    "v37/artwork/skeleton_dance.webp",
    "v37/artwork/spooky.webp",
    "v37/artwork/storm_of_the_abyss.webp",
    "v37/artwork/summers_farewell.webp",
    "v37/artwork/tabby_gonzalez.webp",
    "v37/artwork/the_dive.webp",
    "v37/artwork/the_rhythm_of_the_fox.webp",
    "v37/artwork/the_steel_winged_swan.webp",
    "v37/artwork/toccata.webp",
    "v37/artwork/trick_or_treat.webp",
    "v37/artwork/uncaged.webp",
    "v37/artwork/upon_a_winding_trail.webp",
    "v37/artwork/venezia.webp",
    "v37/artwork/whiteout.webp",
    "v37/artwork/winterstorm.webp",
    "v37/datenschutz.html",
    "v37/images/Guitar-in-Dolomites.webp",
    "v37/images/Hero.webp",
    "v37/images/Hero_square.webp",
    "v37/images/Julia-skiing-Dolomites.webp",
    "v37/images/Stage_1.webp",
    "v37/images/Stage_2.webp",
    "v37/images/Stage_3.webp",
    "v37/images/Stage_4.webp",
    "v37/images/Stage_5.webp",
    "v37/images/Stage_6.webp",
    "v37/images/Stage_7.webp",
    "v37/images/Stage_8.webp",
    "v37/images/icons/app_icon_192.png",
    "v37/images/icons/app_icon_512.png",
    "v37/images/original/Guitar-in-Dolomites.png",
    "v37/images/original/Hero.jpg",
    "v37/images/original/Hero_square.jpg",
    "v37/images/original/Julia-skiing-Dolomites.png",
    "v37/images/original/Stage_1.png",
    "v37/images/original/Stage_2.png",
    "v37/images/original/Stage_3.png",
    "v37/images/original/Stage_4.png",
    "v37/images/original/Stage_5.png",
    "v37/images/original/Stage_6.png",
    "v37/images/original/Stage_7.png",
    "v37/images/original/Stage_8.png",
    "v37/images/password_expired_live.webp",
    "v37/impressum.html",
    "v37/index.html",
    "v37/js/DiaryService.js",
    "v37/js/Main.js",
    "v37/js/PickerDrum.js",
    "v37/js/Player.js",
    "v37/js/SongCollection.js",
    "v37/js/SongService.js",
    "v37/js/VersionCore.js",
    "v37/js/lucide.js",
    "v37/js/tailwindcss.js",
    "v37/legal_notice.html",
    "v37/manifest.json",
    "v37/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v37...');
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
