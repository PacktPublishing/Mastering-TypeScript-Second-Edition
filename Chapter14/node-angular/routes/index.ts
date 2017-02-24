import * as express from 'express';
import * as util from 'util';

var router = express.Router();

router.get('/', (req, res, next) => {

    res.render('index', 
        { title: 'Board Sales'
        }
    );
});

router.get('/menuitems', (req, res, next) => {
    res.json({ menuItems : [
        { ButtonName : 'About'},
        { ButtonName : 'Contact'},
        { ButtonName : 'Login'}
    ] });
});

router.post('/login', (req, res, next) => {
    console.log(`login received : 
        ${util.inspect(req.body, false, null)}`);
    res.sendStatus(200);
});

router.get('/boards', (req, res, next) => {
    res.json(
[
    {
"manufacturer": "JP Australia",
"manufacturer_logo": "jp_australia_logo.png",
"logo_class" : "",
"boards": [
    {
        "name": "Radical Quad",
        "board_types": [ { "board_type": "Wave" } ],
"manufacturer": "JP Australia",
"manufacturer_logo": "jp_australia_logo.png",

        "description": "Radical Wave Board",
        "image": "jp_windsurf_radicalquad_ov.png",
        "long_description": "There is no question that Twinsers and Quads have significant advantages in side shore conditions. All well-known riders have switched to this set-up mainly because of the unbelievable turning of these boards. Kauli, who initiated the Twinser and Quad concept made these boards popular with his own unique style. He has put a lot of effort into the development of the JP range wanting a line of Quads that he can use around the world in all different conditions, not just in pure down-the-line conditions. This range shines in areas where Quads previously did not feel so much at home: Early planing, great speed and upwind performance.",
        "sizes": [
            { "volume": 68, "length": 227, "width": 53, "sail_min": "< 5.0", "sail_max": "< 5.2" },
            { "volume": 74, "length": 227, "width": 55, "sail_min": "4.0", "sail_max": "5.2" },
            { "volume": 82, "length": 227, "width": 57, "sail_min": "4.5", "sail_max": "5.6" }
        ]
    },
            {
                "name": "Thruster Quad",
                "board_types": [ { "board_type": "Wave" } ],
                        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",

                "description": "Allround Wave Board",
                "image": "jp_windsurf_thrusterquad_ov.png",
                "long_description": "Shaper Werner Gnigler and pro riders Robby Swift and Ricardo Campello have worked on this new line to come up with boards which are incredibly versatile suiting the competitor on the PWA World Tour just as well as the active wave sailor looking for a powerful and fast wave toy. They cover a huge range of use and the popular 3 fin set up gives you lots of tuning options. Not just the choice of using it as a single or tri fin, but also the option to use bigger side fins and a smaller center fin. These tuning options can shift the focus of the board from an onshore rocket to a side shore playmate.",
                "sizes": [
                    { "volume": 73, "length": 228, "width": 55.5, "sail_min": "4.0", "sail_max": "5.2" },
                    { "volume": 83, "length": 230, "width": 57.5, "sail_min": "4.5", "sail_max": "5.6" },
                    { "volume": 93, "length": 232, "width": 60, "sail_min": "5.0", "sail_max": "6.0" }
                ]
            },
            {
                "name": "Freestyle Wave",
                "board_types": [ { "board_type": "Wave" }, { "board_type" :  "Freestyle"} ],
                        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",

                "description": "Wave Board | Small Allround",
                "image": "jp_windsurf_freestylewave_ov.png",
                "long_description": "JP was the first brand to introduce Freestyle Wave boards, the others followed. Then we brought the thruster setup for the smaller PRO Edition sizes and the others followed again. Some brands even also call their boards Freestyle Wave. If you want the original you don't need to look anywhere else.",
                "sizes": [
                    { "volume": 77, "length": 228, "width": 56, "sail_min": "4.0", "sail_max": "5.8" },
                    { "volume": 85, "length": 234, "width": 58.5, "sail_min": "4.4", "sail_max": "6.0" },
                    { "volume": 93, "length": 234, "width": 60.5, "sail_min": "4.7", "sail_max": "6.2" }
                ]
            },
            {
                "name": "Freestyle",
                "board_types": [ { "board_type" :  "Freestyle"} ],
                        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",

                "description": "Freestyle Board",
                "image": "jp_windsurf_freestyle_ov.png",
                "long_description": "Steven van Broeckhoven and shaper Werner Gnigler have developed the three sizes, 90,100 and 106. Two of the sizes were already flawless for today's powerful double moves and trick combos. These moves require fast and direct boards with explosive pop 'even a 2nd and 3rd time' and the 90 and 100 were up to that! Steven and Youp Schmit are more than happy with their feeling and performance. So we left them unchanged. Nevertheless, Steven had the intention to adapt the light air freestyle board not only to fulfill the highest standards of modern freestyle in lighter winds but also to make it feel as radical as its smaller brothers.",
                "sizes": [
                    { "volume": 90, "length": 230, "width": 60, "sail_min": "4.2", "sail_max": "5.8" },
                    { "volume": 100, "length": 228, "width": 64, "sail_min": "4.8", "sail_max": "6.2" },
                    { "volume": 106, "length": 227, "width": 65.5, "sail_min": "5.0", "sail_max": "6.5" }
                ]

            },
            {
                "name": "All Ride",
                "board_types": [ { "board_type" :  "Freestyle"} ],
                        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",

                "description": "Medium Allround FreeRider",
                "image": "jp_windsurf_allride_ov.png",
                "long_description": "The 'All in One' concept between Freestyle Wave and Super Sport. They offer great early planing, a very comfortable ride and fantastic top end speed. Easy and forgiving medium wind jibing boards which deliver an exciting, electric feeling when going fast. Plug and play windsurfing 'jump on and have fun'.",
                "sizes": [
                    { "volume": 96, "length": 237, "width": 60.5, "sail_min": "4.5", "sail_max": "6.5" },
                    { "volume": 106, "length": 240, "width": 63, "sail_min": "5.0", "sail_max": "6.7" },
                    { "volume": 116, "length": 245, "width": 65.5, "sail_min": "5.5", "sail_max": "7.5" }
                ]
            },
            {
                "name": "Magic Ride",
                "board_types": [ { "board_type" :  "Freestyle"} ],
                        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",

                "description": "Manoever Oriented FreeRider",
                "image": "jp_windsurf_magicride_ov.png",
                "long_description": "This is an all-new, thrilling and exciting concept of extra wide, short and thin freeride boards within the JP line. It features so far unseen early planing with the easiest jibing possible. The main difference to comparable boards from our competition is, that they really give you an electrifying feel which you normally only get from much smaller boards. Their early planing and top speed is also unmatched in their class.",
                "sizes": [
                    { "volume": 104, "length": 239, "width": 68, "sail_min": "5.0", "sail_max": "7.0" },
                    { "volume": 118, "length": 239, "width": 76, "sail_min": "6.0", "sail_max": "8.0" },
                    { "volume": 132, "length": 240, "width": 84, "sail_min": "> 6.0", "sail_max": "> 6.6" }
                ]
            },
            {
                "name": "X-Cite Ride Plus",
                "board_types": [ { "board_type" :  "Freestyle"} ],
                        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",

                "description": "Large Allround FreeRider",
                "image": "jp_windsurf_xciteride_ov.png",
                "long_description": "Five generations of X-Cite Ride shapes left a big footprint on the market. The name X-Cite Ride became a trademark for comfortable and sporty freeriding. Outstanding test reports have confirmed this. The new range still follows the basic concept. With the introduction of the new super easy Magic Ride boards we decided to slightly re-position the X-Cite Rides and to take them to the next level of sportiness. So the PLUS in the name stands for improved overall performance and for the fact that Generation 6 is sportier than ever whilst still being easy to handle.",
                "sizes": [
                    { "volume": 125, "length": 250, "width": 69, "sail_min": "5.7", "sail_max": "8.0" },
                    { "volume": 135, "length": 250, "width": 73, "sail_min": "6.0", "sail_max": "8.5" },
                    { "volume": 145, "length": 252, "width": 77, "sail_min": "6.5", "sail_max": "9.5" }
                ]
            }
        ]

    },
    {
        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",
        "logo_class" : "rrd_logo_class",
        "boards": [
            {
                "name": "Hardcore Wave Ltd V5",
                "board_types": [ { "board_type" :  "Wave"} ],
                        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",

                "description": "Side Shore Wave Pro",
                "image": "hardcorewave-ltd-88-2-212x349.png",
                "long_description": "After 4 years of ridng waves all over the world with the Hardcore wave shapes V4 we have been able to test lots of different new shapes or prototype boards, used with different riding styles. Today we have been able to finalize 4 new magic shapes. The HardcoreWave V5 are the most vesatile Hardcore boards ever build it since their introduction in our collection. 4 Shapes with 10lt of difference in between 98 all the way down to 68 all equipped with 4 Fins slot box system for maxium drive trough the top and bottom turns.",
                "sizes": [
                    { "volume": 68, "length": 227, "width": 53.5, "sail_min": "3.2", "sail_max": "4.7" },
                    { "volume": 78, "length": 227, "width": 55.5, "sail_min": "3.7", "sail_max": "5.3" },
                    { "volume": 88, "length": 228, "width": 58.5, "sail_min": "4.2", "sail_max": "5.6" }
                ]
            },
            {
                "name": "Wave Cult Ltd V5",
                "board_types": [ { "board_type" :  "Wave"} ],
                        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",

                "description": "Wave Onshore",
                "image": "wavecult-5-ltd-92-212x349.png",
                "long_description": "The new shapes of the wave cults V5 incorporate the latest development of our hi performance sailboards line: wider body boards that are easier to use, more stable, planing earlier. This main feature (wide body) might seem in contrast with maneuverability, but when you actually work with a thinner rail profile, increased rocker and tail V then the whole right equation for performance level is achieved again with the good additions that the extra width will bring. A magic new formula that will improve the amount of sailing days in waves and will help improving your level.",
                "sizes": [
                    { "volume": 75, "length": 229, "width": 57, "sail_min": "3.7", "sail_max": "5.2" },
                    { "volume": 83, "length": 230, "width": 59, "sail_min": "4.0", "sail_max": "5.7" },
                    { "volume": 92, "length": 231, "width": 61, "sail_min": "4.5", "sail_max": "6.2" }
                ]
            },
            {
                "name": "Firewave Ltd",
                "board_types": [ { "board_type" :  "Wave"} ],
                        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",

                "description": "Fast Wave Board",
                "image": "firewave-102-212x349.png",
                "long_description": "When you think you have tried all the possible wave boards shapes, you will wake up one day and be able to try one of our new boards in the RRD collection: THE FIREWAVE. It's really fast, quick to plane, and accelerates like a freeride board, yet it turns smoothly and precisely on the face of any waves.",
                "sizes": [
                    { "volume": 92, "length": 234, "width": 62, "sail_min": "4.0", "sail_max": "5.7" },
                    { "volume": 102, "length": 235, "width": 64, "sail_min": "4.5", "sail_max": "6.2" },
                    { "volume": 112, "length": 235, "width": 66, "sail_min": "4.7", "sail_max": "6.7" }
                ]
            },
            {
                "name": "TwinTip Ltd V4",
                "description": "Freestyle Pro",
                "board_types": [ { "board_type" :  "Freestyle"} ],
                        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",

                "image": "twintip-v4-91-212x349.png",
                "long_description": "The Twin Tip V4 is RRD's pure blooded long running and highly popular Freestyle Board line.  This year the TT is considerably wider in the mid rear section of the board and slightly narrower in the mid front section to allow a more parallel line flow: the new outline enables the board to have more leverage in this area in order to enhance the pop, and also have more surface area for easier landings. The more parallel lines of the outline also further improve the speed of the board and its upwind capacity, as we have found already in our Wave Cult Quads.",
                "sizes": [
                    { "volume": 91, "length": 230, "width": 59.5, "sail_min": "3.3", "sail_max": "5.2" },
                    { "volume": 101, "length": 227, "width": 63, "sail_min": "4.2", "sail_max": "5.7" }
                ]
            },
            {
                "name": "Freestyle Wave Ltd V3",
                "board_types": [ { "board_type" :  "Freestyle"}, { "board_type" :  "Wave"} ],
                        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",

                "description": "Freestyle Wave Pro",
                "image": "rrd-freestyle-wave-ltd-v3-100-2-212x349.png",
                "long_description": "As the trend of wave boards shapes keeps going towards multifin hulls, we have preferred to retain a 'classic', reliable and fast planing single fin board line that would be suited for those who wish for a 'do it all' type of short board. The new Freestyle Wave boards, Version 3, are four new simple, refined, retuned shapes that will cover the whole range of use of this program.",
                "sizes": [
                    { "volume": 88, "length": 234, "width": 59, "sail_min": "4.0", "sail_max": "6.2" },
                    { "volume": 94, "length": 236, "width": 61, "sail_min": "4.2", "sail_max": "6.4" },
                    { "volume": 100, "length": 237, "width": 63, "sail_min": "4.5", "sail_max": "6.7" }
                ]
            },
            {
                "name": "Firemove Ltd V2",
                "board_types": [ { "board_type" :  "Slalom"} ],
                        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",

                "description": "Wide Body Freemove",
                "image": "firemove-ltd-v2-112-212x349.png",
                "long_description": "The most contradictive design in our windsurfing collection has conquered the heart of many passionate windsurfer in last two years since its first launch on the market.The Firemove concept is based on an oversized middle width, an extra reduced volume thickness and rail shape, combined with a very long flat section scooprocker line. An impossible combination for most at first, a real innovation for all after testing this magic breed of board shapes.This year we have gone one step further and refined in the most important details of this new line of boards.",
                "sizes": [
                    { "volume": 102, "length": 238, "width": 68, "sail_min": "5.2", "sail_max": "7.2" },
                    { "volume": 112, "length": 238, "width": 74, "sail_min": "6.0", "sail_max": "8.0" },
                    { "volume": 122, "length": 238, "width": 79, "sail_min": "6.8", "sail_max": "9.0" }
                ]
            },
            {
                "name": "X-Fire Ltd V7",
                "board_types": [ { "board_type" :  "Slalom"} ],
                        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",

                "description": "Slalom / Race",
                "image": "x-fire-v7-114-212x349.png",
                "long_description": "Incredible effort and dedication in the development process was the theme behind our all new X-Fire range. Five completely new designs with a different concept has yielded the best slalom boards to ever come from the RRD think tank. Shaper Aurelio Verdi and testing partner Arnon Dagan tested many different concepts with a rigorous R&D program trying to find the smallest details to improve on the back-to-back PWA world title winning boards under the feet of Antoine Albeau. Our design mandate was to keep our renowned market reference acceleration and top-speed whilst increasing the ease of use and range. Success!",
                "sizes": [
                    { "volume": 105, "length": 235, "width": 65, "sail_min": "6.0", "sail_max": "7.8" },
                    { "volume": 114, "length": 235, "width": 70, "sail_min": "6.2", "sail_max": "8.4" },
                    { "volume": 122, "length": 228, "width": 81, "sail_min": "7.5", "sail_max": "9.5" }
                ]
            }
        ]
    },

    {
        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",
        "logo_class" : "",
        "boards": [ 
            {
                "name": "Quad Wave",
                "board_types": [ { "board_type" :  "Wave"} ],
                        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",

                "description": "Wave",
                "image": "quad_c.png",
                "long_description" :  "The Quads are Starboard's wave boards. They generate maximum speed and drive, bringing an awesome flow and power to your sailing.  With the new 2013 shapes, Quads perform in all wave & wind conditions.",
                "sizes":  [
                    { "volume": 70, "length": 223, "width": 56, "sail_min": "2.3", "sail_max": "4.7" },
                    { "volume": 74, "length": 227, "width": 57.5, "sail_min": "3.0", "sail_max": "5.0" },
                    { "volume" : 77, "length" : 228, "width" : 58, "sail_min" : "3.5", "sail_max" :  "5.5" }
                ]
            }
            ,
            {
                "name": "nuEVO Wave",
                "board_types": [ { "board_type" :  "Wave"} ],
                        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",

                "description": "Wave",
                "image": "nuevo_w.png",
                "long_description" :  "The NuEvo is a high-performance surfboard style wave board. It excels in sideshore to side-onshore conditions, from knee to logo high waves. Its specialties are tight rail turns with excellent rail-to-rail transitions and extra-tight top turns. The NuEvos still have good capabilities in larger side-offshore wave conditions.",
                "sizes":  [
                    { "volume": 73, "length": 221, "width": 55, "sail_min": "3.0", "sail_max": "5.0" },
                    { "volume": 80, "length": 224, "width": 57, "sail_min": "4.2", "sail_max": "5.3" },
                    { "volume" : 93, "length" : 227, "width" : 59.5, "sail_min" : "4.7", "sail_max" :  "6.0" }
                ]
            }
            ,
            {
                "name": "KODE Freestyle Wave",
                "board_types": [ { "board_type" :  "Wave"}, { "board_type" :  "Freestyle"} ],
                        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",

                "description": "Freestyle Wave",
                "image": "kode_freewave_w.png",
                "long_description" :  "The Kode Waves are Philip Koster's fast, aerial style 'next- generation' signature wave boards. The Kode Waves are for riders who like to blend aerials and takas with powerful wave- carving. Their straight-line speed and acceleration also make them the most ideal for big airs and double combination loops.",
                "sizes":  [
                    { "volume": 72, "length": 223, "width": 55.5, "sail_min": "3.0", "sail_max": "5.0" },
                    { "volume": 77, "length": 227, "width": 58, "sail_min": "3.3", "sail_max": "5.3" },
                    { "volume" : 82, "length" : 233, "width" : 58.5, "sail_min" : "3.5", "sail_max" :  "5.5" }
                ]
            }
            ,
            {
                "name": "Flare Freestyle",
                "board_types": [  { "board_type" :  "Freestyle"} ],
                        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",

                "description": "Freestyle",
                "image": "flare_c.png",
                "long_description" :  "The Flares are boards that pop air easily and respond to a rider's move instantaneously. They are fast in acceleration and feel compact and light in sliding and aerial maneuvers.  They are very light yet remain extremely strong. The design of the board also helps to push riders to go bigger each time while being forgiving enough to help them finish each move.",
                "sizes":  [
                    { "volume": 81, "length": 227, "width": 57.5, "sail_min": "2.5", "sail_max": "5.5" },
                    { "volume": 91, "length": 230, "width": 57.5, "sail_min": "4.5", "sail_max": "6.0" },
                    { "volume" : 101, "length" : 227, "width" : 59.5, "sail_min" : "5.0", "sail_max" :  "6.8" }
                ]
            }
             ,
            {
                "name": "Isonic Slalom",
                "board_types": [  { "board_type" :  "Slalom"} ],
                        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",

                "description": "Slalom",
                "image": "isonic_w.png",
                "long_description" :  "They are fast racing machines designed for the highest top speeds, the highest average speeds, the quickest accelerations with powerful overtaking abilities throughout a wide wind range.  The range itself is designed around the PWA's three board format: a perfect quiver covering all conditions can be achieved by selecting one board most suitable from each of the iSonic's three size-categories listed on the right.",
                "sizes":  [
                    { "volume": 80, "length": 238, "width": 58, "sail_min": "5.2", "sail_max": "7.0" },
                    { "volume": 87, "length": 238, "width": 59, "sail_min": "5.2", "sail_max": "7.0" },
                    { "volume" : 90, "length" : 231, "width" : 63, "sail_min" : "5.6", "sail_max" :  "7.8" }
                ]

            }
        ]
    }
]


    );
});


export { router } ;
