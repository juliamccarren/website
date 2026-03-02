const STATIC_CACHE = 'julia-site-v33';
const ASSETS = [
    "745596f4-2947-4d89-955f-f4148e07d22a/804b0424-9932-4e10-9874-0d2980fe87a6.html",
    "v33/745596f4-2947-4d89-955f-f4148e07d22a/diary.json",
    "v33/745596f4-2947-4d89-955f-f4148e07d22a/index.html",
    "v33/745596f4-2947-4d89-955f-f4148e07d22a/lyrics.html",
    "v33/745596f4-2947-4d89-955f-f4148e07d22a/songs.json",
    "v33/artwork/a_slow_blossoming_rose.webp",
    "v33/artwork/autumns_whisper.webp",
    "v33/artwork/big_dreams_shine.webp",
    "v33/artwork/bite_of_the_night.webp",
    "v33/artwork/brooklyn.webp",
    "v33/artwork/buckn_the_bain.webp",
    "v33/artwork/cheerleader.webp",
    "v33/artwork/cool_fire.webp",
    "v33/artwork/deep_blue.webp",
    "v33/artwork/disco_flashback.webp",
    "v33/artwork/first_steps_to_stardom.webp",
    "v33/artwork/fog_of_fear.webp",
    "v33/artwork/forever.webp",
    "v33/artwork/friday_night.webp",
    "v33/artwork/frozen_heart.webp",
    "v33/artwork/garage_band.webp",
    "v33/artwork/ghost_in_the_garden.webp",
    "v33/artwork/god_save_the_king.webp",
    "v33/artwork/good_enough.webp",
    "v33/artwork/haunted_haven.webp",
    "v33/artwork/heart_of_fire_and_ice.webp",
    "v33/artwork/her_first_truck.webp",
    "v33/artwork/hes_still_here.webp",
    "v33/artwork/howling_wolves.webp",
    "v33/artwork/i_love_school.webp",
    "v33/artwork/introverted_girl.webp",
    "v33/artwork/just_wants_to_be_loved.webp",
    "v33/artwork/last_exit.webp",
    "v33/artwork/maybe_they_knew.webp",
    "v33/artwork/my_foundation.webp",
    "v33/artwork/need_for_speed.webp",
    "v33/artwork/paradox_love.webp",
    "v33/artwork/password_expired.webp",
    "v33/artwork/password_expired_live.webp",
    "v33/artwork/peaks_of_gold.webp",
    "v33/artwork/radio_trash.webp",
    "v33/artwork/ride_the_groove.webp",
    "v33/artwork/sailing_on_open_water.webp",
    "v33/artwork/sanctified_sinner.webp",
    "v33/artwork/sanctuary_riot.webp",
    "v33/artwork/schools_out.webp",
    "v33/artwork/siblings.webp",
    "v33/artwork/skeleton_dance.webp",
    "v33/artwork/spooky.webp",
    "v33/artwork/storm_of_the_abyss.webp",
    "v33/artwork/summers_farewell.webp",
    "v33/artwork/tabby_gonzalez.webp",
    "v33/artwork/the_dive.webp",
    "v33/artwork/the_rhythm_of_the_fox.webp",
    "v33/artwork/the_steel_winged_swan.webp",
    "v33/artwork/toccata.webp",
    "v33/artwork/trick_or_treat.webp",
    "v33/artwork/upon_a_winding_trail.webp",
    "v33/artwork/venezia.webp",
    "v33/artwork/whiteout.webp",
    "v33/artwork/winterstorm.webp",
    "v33/datenschutz.html",
    "v33/images/Guitar-in-Dolomites.webp",
    "v33/images/Hero.webp",
    "v33/images/Hero_square.webp",
    "v33/images/Julia-skiing-Dolomites.webp",
    "v33/images/Stage_1.webp",
    "v33/images/Stage_2.webp",
    "v33/images/Stage_3.webp",
    "v33/images/Stage_4.webp",
    "v33/images/Stage_5.webp",
    "v33/images/Stage_6.webp",
    "v33/images/Stage_7.webp",
    "v33/images/Stage_8.webp",
    "v33/images/icons/app_icon_192.png",
    "v33/images/icons/app_icon_512.png",
    "v33/images/original/Guitar-in-Dolomites.png",
    "v33/images/original/Hero.jpg",
    "v33/images/original/Hero_square.jpg",
    "v33/images/original/Julia-skiing-Dolomites.png",
    "v33/images/original/Stage_1.png",
    "v33/images/original/Stage_2.png",
    "v33/images/original/Stage_3.png",
    "v33/images/original/Stage_4.png",
    "v33/images/original/Stage_5.png",
    "v33/images/original/Stage_6.png",
    "v33/images/original/Stage_7.png",
    "v33/images/original/Stage_8.png",
    "v33/images/password_expired_live.webp",
    "v33/impressum.html",
    "v33/index.html",
    "v33/js/DiaryService.js",
    "v33/js/Main.js",
    "v33/js/PickerDrum.js",
    "v33/js/Player.js",
    "v33/js/SongCollection.js",
    "v33/js/SongService.js",
    "v33/js/VersionCore.js",
    "v33/js/lucide.js",
    "v33/js/tailwindcss.js",
    "v33/legal_notice.html",
    "v33/manifest.json",
    "v33/privacy_policy.html"
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => {
            console.log('SYSTEM: Syncing Build v33...');
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
