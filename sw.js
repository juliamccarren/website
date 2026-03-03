const STATIC_CACHE = 'julia-site-v35';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v35/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v35/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v35/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v35/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v35/artwork/a_slow_blossoming_rose.webp",
    "v35/artwork/antitoxic.webp",
    "v35/artwork/autumns_whisper.webp",
    "v35/artwork/big_dreams_shine.webp",
    "v35/artwork/bite_of_the_night.webp",
    "v35/artwork/brooklyn.webp",
    "v35/artwork/buckn_the_bain.webp",
    "v35/artwork/cheerleader.webp",
    "v35/artwork/cool_fire.webp",
    "v35/artwork/deep_blue.webp",
    "v35/artwork/digital_ghost.webp",
    "v35/artwork/disco_flashback.webp",
    "v35/artwork/disco_flashback_2.webp",
    "v35/artwork/first_steps_to_stardom.webp",
    "v35/artwork/fog_of_fear.webp",
    "v35/artwork/forever.webp",
    "v35/artwork/friday_night.webp",
    "v35/artwork/frozen_heart.webp",
    "v35/artwork/garage_band.webp",
    "v35/artwork/ghost_in_the_garden.webp",
    "v35/artwork/god_save_the_king.webp",
    "v35/artwork/good_enough.webp",
    "v35/artwork/haunted_haven.webp",
    "v35/artwork/heart_of_fire_and_ice.webp",
    "v35/artwork/her_first_truck.webp",
    "v35/artwork/hes_still_here.webp",
    "v35/artwork/howling_wolves.webp",
    "v35/artwork/i_love_school.webp",
    "v35/artwork/introverted_girl.webp",
    "v35/artwork/just_wants_to_be_loved.webp",
    "v35/artwork/last_exit.webp",
    "v35/artwork/left_lane_legend.webp",
    "v35/artwork/maybe_they_knew.webp",
    "v35/artwork/my_foundation.webp",
    "v35/artwork/need_for_speed.webp",
    "v35/artwork/paradox_love.webp",
    "v35/artwork/password_expired.webp",
    "v35/artwork/password_expired_live.webp",
    "v35/artwork/peaks_of_gold.webp",
    "v35/artwork/private_lake.webp",
    "v35/artwork/radio_trash.webp",
    "v35/artwork/ride_the_groove.webp",
    "v35/artwork/sailing_on_open_water.webp",
    "v35/artwork/sanctified_sinner.webp",
    "v35/artwork/sanctuary_riot.webp",
    "v35/artwork/schools_out.webp",
    "v35/artwork/siblings.webp",
    "v35/artwork/skeleton_dance.webp",
    "v35/artwork/spooky.webp",
    "v35/artwork/storm_of_the_abyss.webp",
    "v35/artwork/summers_farewell.webp",
    "v35/artwork/tabby_gonzalez.webp",
    "v35/artwork/the_dive.webp",
    "v35/artwork/the_rhythm_of_the_fox.webp",
    "v35/artwork/the_steel_winged_swan.webp",
    "v35/artwork/toccata.webp",
    "v35/artwork/trick_or_treat.webp",
    "v35/artwork/uncaged.webp",
    "v35/artwork/upon_a_winding_trail.webp",
    "v35/artwork/venezia.webp",
    "v35/artwork/whiteout.webp",
    "v35/artwork/winterstorm.webp",
    "v35/datenschutz.html",
    "v35/images/Guitar-in-Dolomites.webp",
    "v35/images/Hero.webp",
    "v35/images/Hero_square.webp",
    "v35/images/Julia-skiing-Dolomites.webp",
    "v35/images/Stage_1.webp",
    "v35/images/Stage_2.webp",
    "v35/images/Stage_3.webp",
    "v35/images/Stage_4.webp",
    "v35/images/Stage_5.webp",
    "v35/images/Stage_6.webp",
    "v35/images/Stage_7.webp",
    "v35/images/Stage_8.webp",
    "v35/images/icons/app_icon_192.png",
    "v35/images/icons/app_icon_512.png",
    "v35/images/original/Guitar-in-Dolomites.png",
    "v35/images/original/Hero.jpg",
    "v35/images/original/Hero_square.jpg",
    "v35/images/original/Julia-skiing-Dolomites.png",
    "v35/images/original/Stage_1.png",
    "v35/images/original/Stage_2.png",
    "v35/images/original/Stage_3.png",
    "v35/images/original/Stage_4.png",
    "v35/images/original/Stage_5.png",
    "v35/images/original/Stage_6.png",
    "v35/images/original/Stage_7.png",
    "v35/images/original/Stage_8.png",
    "v35/images/password_expired_live.webp",
    "v35/impressum.html",
    "v35/index.html",
    "v35/js/DiaryService.js",
    "v35/js/Main.js",
    "v35/js/PickerDrum.js",
    "v35/js/Player.js",
    "v35/js/SongCollection.js",
    "v35/js/SongService.js",
    "v35/js/VersionCore.js",
    "v35/js/lucide.js",
    "v35/js/tailwindcss.js",
    "v35/legal_notice.html",
    "v35/manifest.json",
    "v35/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v35...');
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
