const STATIC_CACHE = 'julia-site-v38';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v38/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v38/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v38/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v38/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v38/artwork/a_slow_blossoming_rose.webp",
    "v38/artwork/antitoxic.webp",
    "v38/artwork/autumns_whisper.webp",
    "v38/artwork/big_dreams_shine.webp",
    "v38/artwork/bite_of_the_night.webp",
    "v38/artwork/brooklyn.webp",
    "v38/artwork/buckn_the_bain.webp",
    "v38/artwork/cheerleader.webp",
    "v38/artwork/cool_fire.webp",
    "v38/artwork/deep_blue.webp",
    "v38/artwork/digital_ghost.webp",
    "v38/artwork/disco_flashback.webp",
    "v38/artwork/disco_flashback_2.webp",
    "v38/artwork/first_steps_to_stardom.webp",
    "v38/artwork/fog_of_fear.webp",
    "v38/artwork/forever.webp",
    "v38/artwork/friday_night.webp",
    "v38/artwork/frozen_heart.webp",
    "v38/artwork/garage_band.webp",
    "v38/artwork/ghost_in_the_garden.webp",
    "v38/artwork/god_save_the_king.webp",
    "v38/artwork/good_enough.webp",
    "v38/artwork/haunted_haven.webp",
    "v38/artwork/heart_of_fire_and_ice.webp",
    "v38/artwork/her_first_truck.webp",
    "v38/artwork/hes_still_here.webp",
    "v38/artwork/howling_wolves.webp",
    "v38/artwork/i_love_school.webp",
    "v38/artwork/introverted_girl.webp",
    "v38/artwork/just_wants_to_be_loved.webp",
    "v38/artwork/last_exit.webp",
    "v38/artwork/left_lane_legend.webp",
    "v38/artwork/maybe_they_knew.webp",
    "v38/artwork/my_foundation.webp",
    "v38/artwork/need_for_speed.webp",
    "v38/artwork/paradox_love.webp",
    "v38/artwork/password_expired.webp",
    "v38/artwork/password_expired_live.webp",
    "v38/artwork/peaks_of_gold.webp",
    "v38/artwork/private_lake.webp",
    "v38/artwork/radio_trash.webp",
    "v38/artwork/ride_the_groove.webp",
    "v38/artwork/sailing_on_open_water.webp",
    "v38/artwork/sanctified_sinner.webp",
    "v38/artwork/sanctuary_riot.webp",
    "v38/artwork/schools_out.webp",
    "v38/artwork/siblings.webp",
    "v38/artwork/skeleton_dance.webp",
    "v38/artwork/spooky.webp",
    "v38/artwork/storm_of_the_abyss.webp",
    "v38/artwork/summers_farewell.webp",
    "v38/artwork/tabby_gonzalez.webp",
    "v38/artwork/the_dive.webp",
    "v38/artwork/the_rhythm_of_the_fox.webp",
    "v38/artwork/the_steel_winged_swan.webp",
    "v38/artwork/toccata.webp",
    "v38/artwork/trick_or_treat.webp",
    "v38/artwork/uncaged.webp",
    "v38/artwork/upon_a_winding_trail.webp",
    "v38/artwork/venezia.webp",
    "v38/artwork/whiteout.webp",
    "v38/artwork/winterstorm.webp",
    "v38/datenschutz.html",
    "v38/images/Guitar-in-Dolomites.webp",
    "v38/images/Hero.webp",
    "v38/images/Hero_square.webp",
    "v38/images/Julia-skiing-Dolomites.webp",
    "v38/images/Stage_1.webp",
    "v38/images/Stage_2.webp",
    "v38/images/Stage_3.webp",
    "v38/images/Stage_4.webp",
    "v38/images/Stage_5.webp",
    "v38/images/Stage_6.webp",
    "v38/images/Stage_7.webp",
    "v38/images/Stage_8.webp",
    "v38/images/icons/app_icon_192.png",
    "v38/images/icons/app_icon_512.png",
    "v38/images/original/Guitar-in-Dolomites.png",
    "v38/images/original/Hero.jpg",
    "v38/images/original/Hero_square.jpg",
    "v38/images/original/Julia-skiing-Dolomites.png",
    "v38/images/original/Stage_1.png",
    "v38/images/original/Stage_2.png",
    "v38/images/original/Stage_3.png",
    "v38/images/original/Stage_4.png",
    "v38/images/original/Stage_5.png",
    "v38/images/original/Stage_6.png",
    "v38/images/original/Stage_7.png",
    "v38/images/original/Stage_8.png",
    "v38/images/password_expired_live.webp",
    "v38/impressum.html",
    "v38/index.html",
    "v38/js/DiaryService.js",
    "v38/js/Main.js",
    "v38/js/PickerDrum.js",
    "v38/js/Player.js",
    "v38/js/SongCollection.js",
    "v38/js/SongService.js",
    "v38/js/VersionCore.js",
    "v38/js/lucide.js",
    "v38/js/tailwindcss.js",
    "v38/legal_notice.html",
    "v38/manifest.json",
    "v38/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v38...');
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
