
import { Route, Routes, BrowserRouter } from "react-router-dom"
import React, { Component } from 'react'
import MovingHead from "./Pages/MovingHead"
import Main from "./Pages/Main"

import ScrollToTop from "./components/ScrollToTop"
import Other from "./Pages/Other"
import LEDSpotlights from "./Pages/LEDSpotlights"
import TheaterLighting from "./Pages/TheaterLighting"
import SpecialEffect from "./Pages/SpecialEffect"
import FogHaze from "./Pages/FogHaze"
import AdmarkAmplifiers from "./Pages/AdmarkAmplifiers"
import Loudspeakers from "./Pages/Loudspeakers"
import Controlling from "./Pages/Controlling"
import LinearArrays from "./Pages/LinearArrays"
import Amplifiers from "./Pages/Amplifiers"
import AudioProcessors from "./Pages/AudioProcessors"
import RadioSystems from "./Pages/RadioSystems"
import FollowSpot from "./Pages/FollowSpot"
import SplittersAntennas from "./Pages/SplittersAntennas"
import BarSpotlights from "./Pages/BarSpotlights"
import MovingTiltBar from "./Pages/MovingTiltBar"
import Wpip from "./Pages/Wpip"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {


            wpip: [
                {
                    id: 1,
                    title: 'Anzhee H700 WP-BSWF',
                    img: 'Anzhee H700 WP-BSWF.png',
                    desc: 'BEAM SPOT WASH PROFILE / LED 700 W. / 6°~45° / color wheel 7 colors+CMY+CTO / 12 gobos / prism / zoom / frost / focus / IP65',
                    category: '/moving_head',
                    price: '1 187,6'
                },
                {
                    id: 3,
                    title: 'Anzhee H19x60Z WP B-EYE',
                    img: 'Anzhee H19x60Z WP B-EYE.jpeg',
                    desc: 'WASH BEAM B-EYE / IP65 / 7 LEDs 60 W / RGBL / CRI > 80 / B-EYE effect / Pixel control / 4.5° - 60° / zoom / 72 additional RGB LEDs for aura effect / DMX-512, RDM, Art-Net (optional) / touch setup control',
                    category: '/moving_head',
                    price: '114,4'
                },
                {
                    id: 4,
                    title: 'Anzhee H7x60Z WP B-EYE',
                    img: 'Anzhee H7x60Z WP B-EYE.png',
                    desc: 'WASH BEAM B-EYE / IP65 / 7 LEDs 60 W / RGBL / CRI > 80 / B-EYE effect / Pixel control / 3,1°-45° / zoom / 28 additional RGB LEDs for aura effect / DMX-512, RDM, Art-Net (optional) / touch setup control',
                    category: '/moving_head',
                    price: '1 187,6'
                },
                {
                    id: 2,
                    title: 'Anzhee H10X40Z-BAR WP',
                    img: 'Anzhee H10X40Z-BAR WP.png',
                    desc: 'WASH / IP65 / 10 LEDs 40 W. / 5,5°-60° / motorised zoom / Pixel control / Tilt rotation / DMX 512',
                    category: '/moving_tilt_bar',
                    price: '1 486,4'
                },
                {
                    id: 6,
                    title: 'Anzhee P7x40Z WP',
                    img: 'Anzhee P7x40Z WP.jpg',
                    desc: 'PAR / IP65 / 7 LEDs 40 W / RGBW / 5-45° / motorized zoom',
                    category: '/led_spotlights',
                    price: '1 187,6'
                },
                {
                    id: 7,
                    title: 'PROCBET 7x15 WP',
                    img: 'PROCBET 7x15 WP.png',
                    desc: 'PAR / 7 LEDs 15 W / RGBWA / IP65 / Passive Cooling System / 15°',
                    category: '/led_spotlights',
                    price: '114,4'
                },
                {
                    id: 5,
                    title: 'Anzhee H60 WP Laser Beam',
                    img: 'Anzhee H60 WP Laser Beam.jpeg',
                    desc: 'BEAM / IP65 / RGB LASER 60W / 0.4° /  Beam Size: 80~120  / DMX, Art-Net, RDM',
                    category: '/moving_head',
                    price: '1 187,6'
                },
                {
                    id: 8,
                    title: 'PROCBET 60 COB WP',
                    img: 'PROCBET 60 COB WP.png',
                    desc: 'PAR / LED 60 W. / RGBWA / IP65 / Passive Cooling System / 65°',
                    category: '/led_spotlights',
                    price: '112,5'
                },
                {
                    id: 9,
                    title: 'Anzhee P50 WP mini spot',
                    img: 'Anzhee P50 WP mini spot.png',
                    desc: 'PAR / IP65 / 1*50W COB (2700K) + 24 RGB5050 / 12° / DMX512, Art-Net (For special controller) / Module system',
                    category: '/led_spotlights',
                    price: '1 187,6'
                },
                {
                    id: 10,
                    title: 'Anzhee P60Z WP mini spot',
                    img: 'Anzhee P60Z WP mini spot.png',
                    desc: 'PAR / IP65 / 1*50W COB (2700K) + 24 RGB5050 / Zoom / 4.2°-42° / DMX512, Art-Net (For special controller) / Module system',
                    category: '/led_spotlights',
                    price: '1 187,6'
                },
                {
                    id: 11,
                    title: 'Anzhee mini spot controller WP',
                    img: 'Anzhee mini spot controller WP.png',
                    desc: 'Special controller for: "mini spot" and "strip" series / IP65',
                    category: '/controlling_DMX',
                    price: '1 187,6'
                }
                
            ],

            movinghead: [
                {
                    id: 1,
                    title: 'Anzhee PRO PHOENIX BSW 1000 FS',
                    img: 'Anzhee PRO PHOENIX BSW 1000 FS.png',
                    desc: 'BEAM SPOT WASH PROFILE / LED 1000 W. /  5°-55° / 6 Colors + CMY + CTO Filter / 12 Gobo + Animation Wheel / 2 Prisms / ZOOM / Iris / 2 Frostfilters / DMX-512, RDM, Wireless and Art-Net / Beam Profiling',
                    category: '/moving_head',
                    price: '9 410,3'
                },
                {
                    id: 2,
                    title: 'Anzhee PRO PHOENIX SPOT 585 FS',
                    img: 'Anzhee PRO PHOENIX SPOT 585 FS.png',
                    desc: 'BEAM SPOT WASH PROFILE / LED 580 W. / 6,5°-42° / 6 Colors + CMY + CTO Filter / 14 Gobo + Animation Wheel with Infinite Rotation / 1 Prism / ZOOM / Iris / Frost / DMX-512, RDM, Wireless and Art-Net / Beam Profiling',
                    category: '/moving_head',
                    price: '6 082,4'
                },
                {
                    id: 3,
                    title: 'Anzhee PRO PHOENIX BSW 350 CMY',
                    img: 'Anzhee PRO PHOENIX BSW 350 CMY.png',
                    desc: 'LED 350 W. / 5°-45° / 11 Colors / 20 Gobo / 1 Prism / ZOOM / Iris / Frost / CMY Color Synthesis. Innovative principle of CMY color mixing, which ensures the most uniform color shade over the entire spot area / Cooling System Modes: Automatic and  Silent',
                    category: '/moving_head',
                    price: '3 291,2'
                },
                {
                    id: 4,
                    title: 'Anzhee PRO PHOENIX WASH 760z',
                    img: 'Anzhee PRO PHOENIX WASH 760z.png',
                    desc: 'BEAM / LED 100 W. / 2,5° / 14 Colors / 11 Gobo / 2 Prisms / Frost / Multi-color Beam Effect / RDM',
                    category: '/moving_head',
                    price: '1 600,1'
                },
                {
                    id: 5,
                    title: 'Anzhee PRO VULTURE BSW 480 FS',
                    img: 'Anzhee PRO VULTURE BSW 480 FS.png',
                    desc: 'BSW  / LED 480 W. /  4.5°-55° / 7 Colors + CMY + CTO Filter / 15 Gobo + Animation Wheel / Prism / ZOOM / Iris / Frost / DMX-512, RDM, Wireless and Art-Net (optional) / Beam Profiling System',
                    category: '/moving_head',
                    price: '4 651,9'
                },
                {
                    id: 6,
                    title: 'Anzhee PRO VULTURE BSW 300',
                    img: 'Anzhee PRO VULTURE BSW 300.png',
                    desc: 'BSW / LED 300 W / 3°-45° / 8 Colors / 16 Gobo / 1 Prism / Zoom / DMX-512, RDM, Art-Net (optional)',
                    category: '/moving_head',
                    price: '1 583,3'
                },
                {
                    id: 7,
                    title: 'PROCBET H230Z-SPOT MKII',
                    img: 'PROCBET H230Z-SPOT MKII.png',
                    desc: 'SPOT / LED 230 W. / 11°-25° / 8 Colors / 15 Gobo (14 + open) / 2 Prisms / Motorized ZOOM',
                    category: '/moving_head',
                    price: '964,8'
                },
                {
                    id: 8,
                    title: 'PROCBET H6x40Z B-EYE MKII',
                    img: 'PROCBET H6x40Z B-EYE MKII.png',
                    desc: 'WASH BEAM B-EYE / 6 LEDs 40 W / RGBW or RGBA / 4°-50° / B-EYE effect',
                    category: '/moving_head',
                    price: '835,1'
                },
                {
                    id: 9,
                    title: 'PROCBET H7x15BW-ZOOM',
                    img: 'PROCBET H7x15BW-ZOOM.png',
                    desc: 'WASH BEAM / 7 LEDs 15 W. / RGBW / 7°-60° / Compact Housing',
                    category: '/moving_head',
                    price: '424,1'
                },
                {
                    id: 10,
                    title: 'PROCBET H90P-SPOT',
                    img: 'PROCBET H90P-SPOT.png',
                    desc: 'SPOT / LED 90 W. / 14° / 8 Colors / 14 Gobo / 1 Prism / Compact Housing / Title before Rebranding - Anzhee H90P-SPOT',
                    category: '/moving_head',
                    price: '566,8'
                },
                {
                    id: 11,
                    title: 'PROCBET H60P-SPOT',
                    img: 'PROCBET H60P-SPOT.png',
                    desc: 'SPOT / LED 60 W. / 13° / 8 Colors / 5 Gobo / 1 Prism / Compact Housing / Title before Rebranding - Anzhee H60P-SPOT',
                    category: '/moving_head',
                    price: '465,4'
                },
                {
                    id: 12,
                    title: 'Anzhee H19x60Z WP B-EYE',
                    img: 'Anzhee H19x60Z WP B-EYE.jpeg',
                    desc: 'WASH BEAM B-EYE / IP65 / 7 LEDs 60 W / RGBL / CRI > 80 / B-EYE effect / Pixel control / 4.5° - 60° / zoom / 72 additional RGB LEDs for aura effect / DMX-512, RDM, Art-Net (optional) / touch setup control',
                    category: '/moving_head',
                    price: '114,4'
                },
                {
                    id: 13,
                    title: 'Anzhee H7x60Z WP B-EYE',
                    img: 'Anzhee H7x60Z WP B-EYE.png',
                    desc: 'WASH BEAM B-EYE / IP65 / 7 LEDs 60 W / RGBL / CRI > 80 / B-EYE effect / Pixel control / 3,1°-45° / zoom / 28 additional RGB LEDs for aura effect / DMX-512, RDM, Art-Net (optional) / touch setup control',
                    category: '/moving_head',
                    price: '1 187,6'
                },
                {
                    id: 14,
                    title: 'Anzhee H60 WP Laser Beam',
                    img: 'Anzhee H60 WP Laser Beam.jpeg',
                    desc: 'BEAM / IP65 / RGB LASER 60W / 0.4° /  Beam Size: 80~120  / DMX, Art-Net, RDM',
                    category: '/moving_head',
                    price: '1 187,6'
                },
                {
                    id: 15,
                    title: 'Anzhee H700 WP-BSWF',
                    img: 'Anzhee H700 WP-BSWF.png',
                    desc: 'BEAM SPOT WASH PROFILE / LED 700 W. / 6°~45° / color wheel 7 colors+CMY+CTO / 12 gobos / prism / zoom / frost / focus / IP65',
                    category: '/moving_head',
                    price: '1 187,6'
                }
            ],

            movingtiltbar: [
                {
                    id: 12,
                    title: 'Anzhee H10x60Z-PIXEL BAR',
                    img: 'Anzhee H10x60Z-PIXEL BAR.png',
                    desc: 'BEAM WASH / 10 LEDs 60 W. / RGBW / 3,5°-35° / motorised individual zoom for each LED / Pixel control / Tilt rotation',
                    category: '/moving_tilt_bar',
                    price: '2 712,7'
                },
                {
                    id: 13,
                    title: 'Anzhee H10X40Z-BAR WP',
                    img: 'Anzhee H10X40Z-BAR WP.png',
                    desc: 'WASH / IP65 / 10 LEDs 40 W. / 5,5°-60° / motorised zoom / Pixel control / Tilt rotation / DMX 512',
                    category: '/moving_tilt_bar',
                    price: '1 486,4'
                },
                {
                    id: 14,
                    title: 'Anzhee BEAM BAR FX',
                    img: 'Anzhee BEAM BAR FX.png',
                    desc: '4 colors with color mixing/ RGBW / 0,5° / LEDs 60 W / DMX512, sound activation, automatic programmes, Master-Slave',
                    category: '/moving_tilt_bar',
                    price: '1 469,3'
                }
            ],

            ledpar: [
                {//324
                    id: 19,
                    title: 'Anzhee P18x18-ZOOM',
                    img: 'Anzhee P18x18-ZOOM.png',
                    desc: 'PAR / 18 LEDs 18 W / RGBWA+UV/ 10°-60° / motorised zoom',
                    category: '/led_spotlights',
                    price: '436,6'
                },
                {//280
                    id: 18,
                    title: 'PROCBET P7x40 RGBW ZOOM',
                    img: 'PROCBET P7x40 RGBW ZOOM.png',
                    desc: 'PAR / 7 LEDs 40 W / RGBW / 5°-40° / barndoors included/ motorized zoom',
                    category: '/led_spotlights',
                    price: '436,1'
                },
                {//280
                    id: 24,
                    title: 'Anzhee P7x40Z WP',
                    img: 'Anzhee P7x40Z WP.jpg',
                    desc: 'PAR / IP65 / 7 LEDs 40 W / RGBW / 5-45° / motorized zoom',
                    category: '/led_spotlights',
                    price: '1 187,6'
                },
                { //270
                    id: 16,
                    title: 'PROCBET PAR LED 18-15 RGBWA+UV',
                    img: 'PROCBET PAR LED 18-15 RGBWA+UV.png',
                    desc: 'PAR / 18 LEDs 15 W / RGBWA+UV / 30°',
                    category: '/led_spotlights',
                    price: '170,2'
                },
                { //210
                    id: 17,
                    title: 'Anzhee P14x15 SLIM',
                    img: 'Anzhee P14x15 SLIM.png',
                    desc: 'LED PAR / 14 LEDs 15 W / RGBWA+UV / 30° / SLIM Housing / Passive Cooling System, Silent',
                    category: '/led_spotlights',
                    price: '229,4'
                },
                {//180
                    id: 15,
                    title: 'PROCBET PAR LED 18-10 RGBW',
                    img: 'PROCBET PAR LED 18-10 RGBW.png',
                    desc: 'PAR / 18 LEDs 10 W / RGBW / 30°',
                    category: '/led_spotlights',
                    price: '184,5'
                },
                {//105
                    id: 20,
                    title: 'PROCBET 7x15 WP',
                    img: 'PROCBET 7x15 WP.png',
                    desc: 'PAR / 7 LEDs 15 W / RGBWA / IP65 / Passive Cooling System / 15°',
                    category: '/led_spotlights',
                    price: '114,4'
                },
                {//60
                    id: 21,
                    title: 'PROCBET 60 COB WP',
                    img: 'PROCBET 60 COB WP.png',
                    desc: 'PAR / LED 60 W. / RGBWA / IP65 / Passive Cooling System / 65°',
                    category: '/led_spotlights',
                    price: '112,5'
                },
                {//50
                    id: 22,
                    title: 'Anzhee P50 WP mini spot',
                    img: 'Anzhee P50 WP mini spot.png',
                    desc: 'PAR / IP65 / 1*50W COB (2700K) + 24 RGB5050 / 12° / DMX512, Art-Net (For special controller) / Module system',
                    category: '/led_spotlights',
                    price: '1 187,6'
                },
                {//50
                    id: 23,
                    title: 'Anzhee P60Z WP mini spot',
                    img: 'Anzhee P60Z WP mini spot.png',
                    desc: 'PAR / IP65 / 1*50W COB (2700K) + 24 RGB5050 / Zoom / 4.2°-42° / DMX512, Art-Net (For special controller) / Module system',
                    category: '/led_spotlights',
                    price: '1 187,6'
                },
                
            ],
            
            ledbar: [
                {//216
                    id: 22,
                    title: 'Anzhee BAR27x18',
                    img: 'Anzhee BAR27x18.png',
                    desc: 'LED BAR / 27 LEDs 18 W / RGBWA+UV / 45° / passive cooling / silent',
                    category: '/bar_spotlights',
                    price: '544,4'
                },
                {//336
                    id: 23,
                    title: 'Anzhee BAR42x6',
                    img: 'Anzhee BAR42x6.png',
                    desc: 'LED BAR / 42 LEDs 8 W / RGBWA+UV / 60°/Silent Cooling System',
                    category: '/bar_spotlights',
                    price: '433,1'
                },
                {//336
                    id: 24,
                    title: 'Anzhee BAR42x5',
                    img: 'Anzhee BAR42x5.png',
                    desc: 'LED BAR / 42 LEDs 8 W / RGBWA / 60°/Silent Cooling System',
                    category: '/bar_spotlights',
                    price: '415,5'
                },
                {//336
                    id: 25,
                    title: 'Anzhee BAR42x5 Barndoor+Frost',
                    img: 'Anzhee BAR42x5 Barndoor+Frost.png',
                    desc: 'LED BAR / 42 LEDs 8 W / RGBWA / 60°/Silent Cooling System',
                    category: '/bar_spotlights',
                    price: '462,0'
                },
                {//336
                    id: 26,
                    title: 'Anzhee BAR42x4',
                    img: 'Anzhee BAR42x4.png',
                    desc: 'BAR / 42 LEDs 8 W / RGBW / 60°/Silent Cooling System',
                    category: '/bar_spotlights',
                    price: '341,7'
                },
                {//336
                    id: 27,
                    title: 'Anzhee BAR42x4 Barndoor+Frost',
                    img: 'Anzhee BAR42x4 Barndoor+Frost.png',
                    desc: 'BAR / 42 LEDs 8 W / RGBW / 60°/Silent Cooling System',
                    category: '/bar_spotlights',
                    price: '390,0'
                },
                {//144
                    id: 20,
                    title: 'PROCBET BAR LED 24-6 RGBWA+UV',
                    img: 'PROCBET BAR LED 24-6 RGBWA+UV.png',
                    desc: 'BAR / 24 LEDs 6 W / RGBWA+UV / Segment control (8 units of 3 LEDs)',
                    category: '/bar_spotlights',
                    price: '248,1'
                },
                {//108
                    id: 28,
                    title: 'Anzhee BAR36x3-W MK II',
                    img: 'Anzhee BAR36x3-W MK II.png',
                    desc: 'BAR / 36 LEDs 3 W / white / angle 60°/silent cooling system / 3200 K, 5600 K, 3200 K+5600 K+Amber (optional)',
                    category: '/bar_spotlights',
                    price: '366,3'
                },
                {//108
                    id: 29,
                    title: 'Anzhee BAR36x3-W MK II Barndoor+Frost',
                    img: 'Anzhee BAR36x3-W MK II Barndoor+Frost.png',
                    desc: 'BAR / 36 LEDs 3 W / WWA / warm white+ cold white + amber / barndoor adjustable angle 60°/ barndoors + frost / silent cooling system',
                    category: '/bar_spotlights',
                    price: '366,3'
                }
            ],

            theater: [
                {
                    id: 30,
                    title: 'Anzhee PRO Spectrum Fresnel P 200',
                    img: 'Anzhee PRO Spectrum Fresnel P 200.png',
                    desc: '4 types depending on the modification: RGBW 2700~10000K CRI: ≥93 or WW+CW 2700~6200K CRI: ≥95 or WW 3200K CRI: ≥95 or CW 5600K CRI: ≥95 / DMX512 / RDM / RGBW 16~60° / W 12~60° / adjustable angle / passive cooling system',
                    category: '/theater_lighting',
                    price: '2 564,5'
                },
                {
                    id: 31,
                    title: 'Anzhee PRO Spectrum Fresnel A 200',
                    img: 'Anzhee PRO Spectrum Fresnel A 200.png',
                    desc: '4 types depending on the modification: RGBW 2700~10000K CRI: ≥93 or WW+CW 2700~6200K CRI: ≥95 or WW 3200K CRI: ≥95 or CW 5600K CRI: ≥95 / DMX512 / RDM / RGBW 16~60° / W 12~60° / adjustable angle / active silent cooling system',
                    category: '/theater_lighting',
                    price: '2 288,2'
                },
                {
                    id: 32,
                    title: 'Anzhee PRO Spectrum Fresnel A 300',
                    img: 'Anzhee PRO Spectrum Fresnel A 300.png',
                    desc: 'Three LED options depending on the modification:  WW+CW 2700~6200K CRI: ≥95 or WW 3200K CRI: ≥95 or CW 5600K CRI: ≥95 / DMX512 / RDM / W 12~60° / adjustable angle / active silent cooling system',
                    category: '/theater_lighting',
                    price: '1 867,6'
                },
                {
                    id: 33,
                    title: 'Anzhee PRO Spectrum Profile P 200 FL5',
                    img: 'Anzhee PRO Spectrum Profile P 200 FL5.png',
                    desc: '4 types depending on the modification: RGBW (220W) 2700~10000K or WW+CW (200 W) 2700~6200K CRI: ≥95 or WW (200 W) 3200K CRI: ≥95 or CW (200 W) 5600K CRI: ≥95 / DMX512 / RDM / 5° fixed angle / passive cooling system',
                    category: '/theater_lighting',
                    price: '2 996,3'
                },
                {
                    id: 34,
                    title: 'Anzhee PRO Spectrum Profile P 200 FL10',
                    img: 'Anzhee PRO Spectrum Profile P 200 FL10.png',
                    desc: '4 types depending on the modification: RGBW (220W) 2700~10000K or WW+CW (200 W) 2700~6200K CRI: ≥95 or WW (200 W) 3200K CRI: ≥95 or CW (200 W) 5600K CRI: ≥95 / DMX512 / RDM / 5° fixed angle / passive cooling system',
                    category: '/theater_lighting',
                    price: '2 639,3'
                },
                {
                    id: 35,
                    title: 'Anzhee PRO Spectrum Profile P 200 FLX',
                    img: 'Anzhee PRO Spectrum Profile P 200 FLX.png',
                    desc: '4 types depending on the modification: RGBW (220W) 2700~10000K or WW+CW (200 W) 2700~6200K CRI: ≥95 or WW (200 W) 3200K CRI: ≥95 or CW (200 W) 5600K CRI: ≥95 / DMX512 / RDM / 14°, 19°, 26°, 36°, 50° fixed angle (depending on the modification) / passive cooling system',
                    category: '/theater_lighting',
                    price: '2 588,8'
                },
                {
                    id: 36,
                    title: 'Anzhee PRO Spectrum Profile P 200 ZL10-20',
                    img: 'Anzhee PRO Spectrum Profile P 200 ZL10-20.png',
                    desc: '4 types depending on the modification: RGBW (220W) 2700~10000K or WW+CW (200 W) 2700~6200K CRI: ≥95 or WW (200 W) 3200K CRI: ≥95 or CW (200 W) 5600K CRI: ≥95 / DMX512 / RDM / 10~20° adjustable angle / passive cooling system',
                    category: '/theater_lighting',
                    price: '2 645,5'
                },
                {
                    id: 37,
                    title: 'Anzhee PRO Spectrum Profile P 200 ZL15-30',
                    img: 'Anzhee PRO Spectrum Profile P 200 ZL15-30.png',
                    desc: '4 types depending on the modification: RGBW (220W) 2700~10000K or WW+CW (200 W) 2700~6200K CRI: ≥95 or WW (200 W) 3200K CRI: ≥95 or CW (200 W) 5600K CRI: ≥95 / DMX512 / RDM / 15~30° adjustable angle / passive cooling system',
                    category: '/theater_lighting',
                    price: '2 647,5'
                },
                {
                    id: 38,
                    title: 'Anzhee PRO Spectrum Profile P 200 ZL25-50',
                    img: 'Anzhee PRO Spectrum Profile P 200 ZL25-50.png',
                    desc: '4 types depending on the modification: RGBW (220W) 2700~10000K or WW+CW (200 W) 2700~6200K CRI: ≥95 or WW (200 W) 3200K CRI: ≥95 or CW (200 W) 5600K CRI: ≥95 / DMX512 / RDM / 25~50° adjustable angle / passive cooling system',
                    category: '/theater_lighting',
                    price: '2 642,0'
                },
                {
                    id: 39,
                    title: 'Anzhee PRO Spectrum Profile A 300 FL5',
                    img: 'Anzhee PRO Spectrum Profile A 300 FL5.png',
                    desc: 'Three LED options depending on the modification: WW+CW (300 W) 2700~6200K CRI: ≥95 or WW (300 W) 3200K CRI: ≥95 or CW (300 W) 5600K CRI: ≥95 / DMX512 / RDM / 5° fixed angle / active silent cooling system',
                    category: '/theater_lighting',
                    price: '2 474,4'
                },
                {
                    id: 40,
                    title: 'Anzhee PRO Spectrum Profile A 300 FL10',
                    img: 'Anzhee PRO Spectrum Profile A 300 FL10.png',
                    desc: 'Three LED options depending on the modification: WW+CW (300 W) 2700~6200K CRI: ≥95 or WW (300 W) 3200K CRI: ≥95 or CW (300 W) 5600K CRI: ≥95 / DMX512 / RDM / 10° fixed angle / active silent cooling system',
                    category: '/theater_lighting',
                    price: '1 950,6'
                },
                {
                    id: 41,
                    title: 'Anzhee PRO Spectrum Profile A 300 FLX',
                    img: 'Anzhee PRO Spectrum Profile A 300 FLX.png',
                    desc: 'Three LED options depending on the modification: WW+CW (300 W) 2700~6200K CRI: ≥95 or WW (300 W) 3200K CRI: ≥95 or CW (300 W) 5600K CRI: ≥95 / DMX512 / RDM / depending on the modification 14°, 19°, 26°, 36°, 50° fixed angle / active silent cooling system',
                    category: '/theater_lighting',
                    price: '1 900,6'
                },
                {
                    id: 42,
                    title: 'Anzhee PRO Spectrum Profile A 300 ZL10-20',
                    img: 'Anzhee PRO Spectrum Profile A 300 ZL10-20.png',
                    desc: 'Three LED options depending on the modification: WW+CW (300 W) 2700~6200K CRI: ≥95 or WW (300 W) 3200K CRI: ≥95 or CW (300 W) 5600K CRI: ≥95 / DMX512 / RDM / 10~20° adjustable angle / active cooling system',
                    category: '/theater_lighting',
                    price: '1 954,0'
                },
                {
                    id: 43,
                    title: 'Anzhee PRO Spectrum Profile A 300 ZL15-30',
                    img: 'Anzhee PRO Spectrum Profile A 300 ZL15-30.png',
                    desc: 'Three LED options depending on the modification: WW+CW (300 W) 2700~6200K CRI: ≥95 or WW (300 W) 3200K CRI: ≥95 or CW (300 W) 5600K CRI: ≥95 / DMX512 / RDM / 15~30° adjustable angle  / active silent cooling system',
                    category: '/theater_lighting',
                    price: '1 956,1'
                },
                {
                    id: 44,
                    title: 'Anzhee PRO Spectrum Profile A 300 ZL25-50',
                    img: 'Anzhee PRO Spectrum Profile A 300 ZL25-50.png',
                    desc: 'Three LED options depending on the modification: WW+CW (300 W) 2700~6200K CRI: ≥95 or WW (300 W) 3200K CRI: ≥95 or CW (300 W) 5600K CRI: ≥95 / DMX512 / RDM / 25~50° adjustable angle / active cooling system',
                    category: '/theater_lighting',
                    price: '1 950,6'
                },
                {
                    id: 45,
                    title: 'Anzhee PRO Spectrum Led Panel P 200',
                    img: 'Anzhee PRO Spectrum Led Panel P 200.png',
                    desc: 'Led Panel / 200 W / RGBW 14400 lm 2700-10000K CRI ≥94 or WW+CW 21100 lm 2700-6200K CRI ≥95 / 105° / DMX512',
                    category: '/theater_lighting',
                    price: '2 126,8'
                },
                {
                    id: 46,
                    title: 'Anzhee Fresnel 60 Q ZOOM',
                    img: 'Anzhee Fresnel 60 Q ZOOM.png',
                    desc: '4 types depending on the modification: 60 W RGBW 2700~10000K CRI: 85 or WW+CW (60 W) 3200~5600K CRI: ≥93 or WW 3200K CRI: ≥95 or CW 5600K CRI: ≥95 / DMX512 / 20~50° adjustable angle / Active low-noise cooling system / interchangeable lens',
                    category: '/theater_lighting',
                    price: '524,2'
                },
                {
                    id: 47,
                    title: 'Anzhee Fresnel 100 Q ZOOM',
                    img: 'Anzhee Fresnel 100 Q ZOOM.png',
                    desc: '4 types depending on the modification: 100W RGBALC 2700~10000K CRI: 90 or WW+CW 3200~5600K CRI: ≥93 or WW 3200K CRI: ≥95 or CW 5600K CRI: ≥95 / DMX512 / RDM / 15~50° adjustable angle / Active low-noise cooling system / interchangeable lens',
                    category: '/theater_lighting',
                    price: '932,2'
                },
                {
                    id: 48,
                    title: 'Anzhee Fresnel 400 Q ZOOM',
                    img: 'Anzhee Fresnel 400 Q ZOOM.png',
                    desc: '4 types depending on the modification: 400W RGBALC 2700~10000K CRI: ⩽96 or WW+CW 3200~5600K CRI ⩽98 or WW 3200K CRI ⩽98 or CW 5600K CRI: ⩽98 / DMX512 / RDM / 15~50° adjustable angle / Active low-noise cooling system / interchangeable lens',
                    category: '/theater_lighting',
                    price: '1 834,1'
                },
                {
                    id: 49,
                    title: 'Anzhee Profile 60 Q ZOOM',
                    img: 'Anzhee Profile 60 Q ZOOM.png',
                    desc: '4 types depending on the modification: 60w RGBW 2700~10000K CRI: 85 or WW+CW  3200~5600K CRI: ≥93 or WW 3200K CRI: ≥95 or CW 5600K CRI: ≥95 / DMX512 / 9~25° или 25~50° adjustable angle / Active low-noise cooling system / interchangeable lens',
                    category: '/theater_lighting',
                    price: '576,7'
                },
                {
                    id: 50,
                    title: 'Anzhee Profile 100 Q ZOOM',
                    img: 'Anzhee Profile 100 Q ZOOM.png',
                    desc: '4 types depending on the modification: 100W RGBALC 2700~10000K CRI: 90 или WW+CW 3200~5600K CRI: ≥93 или WW  3200K CRI: ≥95 или CW  5600K CRI: ≥95 / DMX512 / RDM / 19~42° adjustable angle / Active low-noise cooling system / iris / interchangeable lens',
                    category: '/theater_lighting',
                    price: '1 100,4'
                },
                {
                    id: 51,
                    title: 'Anzhee Profile 400 Q ZOOM',
                    img: 'Anzhee Profile 400 Q ZOOM.png',
                    desc: '4 types depending on the modification: 400W RGBALC 2700~10000K CRI: ⩽96 или WW+CW 3200~5600K CRI ⩽98 или WW 3200K CRI ⩽98 или CW  5600K CRI: ⩽98 / DMX512 / RDM / 19~42° adjustable angle / Active low-noise cooling system / iris / interchangeable lens',
                    category: '/theater_lighting',
                    price: '2 067,7'
                },
                {
                    id: 52,
                    title: 'Anzhee CYC 200',
                    img: 'Anzhee CYC 200.png',
                    desc: 'CYC / RGBLI / 210W / CTC 2700K~6500K / 75~100° / barndoor for adjusting the light dispersion',
                    category: '/theater_lighting',
                    price: '778,3'
                }
            ],

            speceffect: [
                {
                    id: 62,
                    title: 'PROCBET PARTY DANCE 1',
                    img: 'PROCBET PARTY DANCE 1.png',
                    desc: 'Combined lighting effect / LASER + DERBY + STROBE/',
                    category: '/special_effect',
                    price: '152,7'
                },
                {
                    id: 63,
                    title: 'PROCBET Partybar 2',
                    img: 'PROCBET Partybar 2.png',
                    desc: 'Mobile lighting equipment set. 5 Lighting Fixtures. Stand. Carrying Bag. Remote Control.',
                    category: '/special_effect',
                    price: '289,8'
                },
                {
                    id: 64,
                    title: 'PROCBET STRIP LED 124 FLAT',
                    img: 'PROCBET STRIP LED 124 FLAT.png',
                    desc: 'BAR  / 124 RGB LEDs SMD5050 0,3W. / HSV / Flat Front Panel',
                    category: '/special_effect',
                    price: '82,0'
                },
                {
                    id: 65,
                    title: 'PROCBET STRIP LED 124 ROUND',
                    img: 'PROCBET STRIP LED 124 ROUND.png',
                    desc: 'BAR  / 124 RGB LEDs SMD5050 0,3W. / HSV / Half Round Front Panel',
                    category: '/special_effect',
                    price: '83,6'
                },
                {
                    id: 66,
                    title: 'Anzhee PRO H-STROBE 1000',
                    img: 'Anzhee PRO H-STROBE 1000.png',
                    desc: 'LED Strobe, 144 White LEDs 5 W. (Strobe) + 480 RGB LEDs 0.5 W (Backlighting), Tilt - 185°',
                    category: '/special_effect',
                    price: '1 623,1'
                },
                {
                    id: 67,
                    title: 'Anzhee Retro Blinder 3x300',
                    img: 'Anzhee Retro Blinder 3x300.png',
                    desc: 'Blinder type Lamp Light, Retro-style, Hexagonal shape, 3 Halogen Lamps (Philips) 300W., 1900K-2300K',
                    category: '/special_effect',
                    price: '456,8'
                },
                {
                    id: 68,
                    title: 'Anzhee Lamp FLower 7',
                    img: 'Anzhee Lamp FLower 7.png',
                    desc: 'Blinder LED Light, Retro-style, "Flower" shape, 7 . Warm White 60W. + 168 RGB LEDs',
                    category: '/special_effect',
                    price: '1 279,2'
                },
                {
                    id: 69,
                    title: 'Anzhee Lamp Line 6',
                    img: 'Anzhee Lamp Line 6.png',
                    desc: 'Blinder type Lamp Light, Retro-style, "Line" shape, 6 Halogen Lamps (Philips) 300W., 1900K-2300K',
                    category: '/special_effect',
                    price: '863,9'
                },
                {
                    id: 70,
                    title: 'Anzhee Lamp FLower 7 RGB',
                    img: 'Anzhee Lamp FLower 7 RGB.png',
                    desc: 'Blinder LED Light, Retro-style, "Flower" shape, 7 . Warm White 60W. + 168 RGB LEDs',
                    category: '/special_effect',
                    price: '1 658,3'
                },
                {
                    id: 71,
                    title: 'Anzhee Lamp Line 6 RGB',
                    img: 'Anzhee Lamp Line 6 RGB.png',
                    desc: 'Blinder LED Light, Retro-style, "Line" shape, 6 . Warm White 60W. + 144 RGB LEDs',
                    category: '/special_effect',
                    price: '1 106,5'
                },
                {
                    id: 72,
                    title: 'Anzhee P50 WP mini spot',
                    img: 'Anzhee P50 WP mini spot.png',
                    desc: 'PAR / IP65 / 1*50W COB (2700K) + 24 RGB5050 / 12° / DMX512, Art-Net (For special controller) / Module system',
                    category: '/special_effect',
                    price: ''
                },
                {
                    id: 73,
                    title: 'Anzhee P60Z WP mini spot',
                    img: 'Anzhee P60Z WP mini spot.png',
                    desc: 'PAR / IP65 / 1*60W RGBW / Zoom / 4.2°-42° / DMX512, Art-Net (For special controller) / Module system',
                    category: '/special_effect',
                    price: ''
                },
                {
                    id: 77,
                    title: 'Anzhee mini spot controller',
                    img: 'Anzhee mini spot controller WP.png',
                    desc: 'Special controller for: "mini spot" and "strip" series',
                    category: '/special_effect',
                    price: ''
                },
                {
                    id: 76,
                    title: 'Anzhee mini spot controller WP',
                    img: 'Anzhee mini spot controller WP.png',
                    desc: 'Special controller for: "mini spot" and "strip" series / IP65',
                    category: '/special_effect',
                    price: ''
                }
                // {
                //     id: 74,
                //     title: 'Anzhee Rotating Tube 1',
                //     img: 'Anzhee Rotating Tube 1.png',
                //     desc: '',
                //     category: '/special_effect',
                //     price: ''
                // },
                // {
                //     id: 75,
                //     title: 'Anzhee Strip 80',
                //     img: 'Anzhee Strip 80.png',
                //     desc: '',
                //     category: '/special_effect',
                //     price: '1 106,5'
                // },
                // {
                //     id: 76,
                //     title: 'Anzhee Strip 80 WP',
                //     img: 'Anzhee Strip 80 WP.png',
                //     desc: '',
                //     category: '/special_effect',
                //     price: ''
                // }
                
            ],

            foghaze: [
                {
                    id: 77,
                    title: 'Anzhee Fog 1000',
                    img: 'Anzhee Fog 1000.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '246,2'
                },
                {
                    id: 78,
                    title: 'Anzhee Fog 1500',
                    img: 'Anzhee Fog 1500.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '388,0'
                },
                {
                    id: 79,
                    title: 'Anzhee Fog 1500 A',
                    img: 'Anzhee Fog 1500 A.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '562,5'
                },
                {
                    id: 80,
                    title: 'Anzhee Fog 2000',
                    img: 'Anzhee Fog 2000.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '662,5'
                },
                {
                    id: 81,
                    title: 'Anzhee Fog 3000 D',
                    img: 'Anzhee Fog 3000 D.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '1 247,4'
                },
                {
                    id: 82,
                    title: 'Anzhee Fog 750V',
                    img: 'Anzhee Fog 750V.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '408,2'
                },
                {
                    id: 83,
                    title: 'Anzhee Fog 1500V',
                    img: 'Anzhee Fog 1500V.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '538,8'
                },
                {
                    id: 84,
                    title: 'Anzhee Fog 2000V',
                    img: 'Anzhee Fog 2000V.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '1 276,2'
                },
                {
                    id: 85,
                    title: 'Anzhee Fog 3000V',
                    img: 'Anzhee Fog 3000V.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '1 675,5'
                },
                {
                    id: 86,
                    title: 'Anzhee Haze 600',
                    img: 'Anzhee Haze 600.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '320,9'
                },
                {
                    id: 87,
                    title: 'Anzhee Haze 900',
                    img: 'Anzhee Haze 900.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '630,9'
                },
                {
                    id: 88,
                    title: 'Anzhee Haze 1200',
                    img: 'Anzhee Haze 1200.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '796,5'
                },
                {
                    id: 89,
                    title: 'Anzhee Haze 1500',
                    img: 'Anzhee Haze 1500.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '986,9'
                },
                {
                    id: 90,
                    title: 'Anzhee Hazer 1500FC',
                    img: 'Anzhee Hazer 1500FC.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '1 296,8'
                },
                {
                    id: 91,
                    title: 'Anzhee Haze 80 BAT',
                    img: 'Anzhee Haze 80 BAT.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '497,5'
                },
                {
                    id: 92,
                    title: 'Anzhee Fog 80 BAT',
                    img: 'Anzhee Fog 80 BAT.png',
                    desc: '',
                    category: '/fog_haze',
                    price: '446,8'
                }
            ],

            followspot: [
                {
                    id: 93,
                    title: 'PROCBET Follow SPOT 150 ZOOM',
                    img: 'PROCBET Follow SPOT 150 ZOOM.png',
                    desc: 'Follow Spotlight, 150 W LED, ZOOM 9-12°',
                    category: '/follow_spot',
                    price: '1 033,7'
                },
                {
                    id: 94,
                    title: 'Anzhee PRO Follow SPOT 350 ZOOM-M',
                    img: 'Anzhee PRO Follow SPOT 350 ZOOM-M.png',
                    desc: '350 W LED / 7-13° / 7 colors + white / 3200K, 4500K, 5600K / DMX-512 / Motorized Focus, ZOOM and Iris.',
                    category: '/follow_spot',
                    price: '2 742,1'
                },
                {
                    id: 95,
                    title: 'Anzhee PRO Follow SPOT 600 ZOOM-M',
                    img: 'Anzhee PRO Follow SPOT 600 ZOOM-M.png',
                    desc: '600 W LED / 7-12° / 7 colors + white / 3200K, 4500K, 5600K / DMX-512 / Motorized Focus, ZOOM and Iris.',
                    category: '/follow_spot',
                    price: '4 128,8'
                },
                {
                    id: 96,
                    title: 'Anzhee Follow SPOT 1000',
                    img: 'Anzhee Follow SPOT 1000.png',
                    desc: '1000 W LED / CRI>90/ 6-10° / 5 colors + white / 3200K/5600/8500K / DMX-512',
                    category: '/follow_spot',
                    price: '5 156,9'
                }
            ],

            control: [
                {
                    id: 97,
                    title: 'Anzhee Eventure Run',
                    img: 'Anzhee Eventure Run.png',
                    desc: '2 x 512 DMX Channels / Output ArtNet 1024 Channels/ Wi-Fi (ArtNet) / IPS Touchscreen Display 10" (Multi-touch) / 10 Faders x 60 Pages / Audio Output / 2 Optical Encoders / 336 x 254 x 75 mm ( 378x190x302mm in Case) / 3,6kg (8kg in Case).',
                    category: '/controlling_DMX',
                    price: '1 391,6'
                },
                {
                    id: 98,
                    title: 'Anzhee Eventure Base 2',
                    img: 'Anzhee Eventure Base 2.png',
                    desc: '5 x 512 DMX Channels / Output ArtNet 4096 Channels/ Wi-Fi (ArtNet) / IPS Touchscreen Display 10.1" (Resistive) / 16 Faders x 60 Pages / 4 Encoders/ Battery Pack / Audio Output',
                    category: '/controlling_DMX',
                    price: '3 032,8'
                }
            ],

            lineararr: [
                {
                    id: 99,
                    title: 'Admark AD-L5A',
                    img: 'Admark AD-L5A.png',
                    desc: '3-way active line array element with DSP. 2x10", LF: 2x10" (Celestion neo), MF: 6x4" (Celestion neo), HF:3x1,4" (Celestion neo), SPL142 dB peak',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 100,
                    title: 'Admark AD-L5BA',
                    img: 'Admark AD-L5BA.png',
                    desc: 'Active subwoofer 2x18"  with a class D amplifier and built-in DSP, Sensitivity 108 dB, SPL138 dB peak, Power 1600 W / 3200 W peak',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 101,
                    title: 'Admark AD-L3A',
                    img: 'Admark AD-L3A.png',
                    desc: '3-way active line array element with Class D amplifier and DSP. 2x8", LF: 2x8" (Celestion neo), MF: 4x4" (Celestion neo), HF:2x1,4" (Celestion neo), SPL135 dB peak',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 102,
                    title: 'Admark AD-L3BA',
                    img: 'Admark AD-L3BA.jpg',
                    desc: 'Active subwoofer 2x15"  with a class D amplifier and built-in DSP, Sensitivity 108 dB, SPL138 dB peak, Power 2400 W',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 103,
                    title: 'Admark AD-L8',
                    img: 'Admark AD-L8.png',
                    desc: '4-way passive line array element. 2x12", LF: 2x10" (Celestion neo), LMF: 2x10", MF: 4x6,5" (Celestion neo), HF:2x3" (Celestion neo), SPL146 dB peak',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 104,
                    title: 'Admark AD-L8A',
                    img: 'Admark AD-L8A.png',
                    desc: '4-way active line array element with DSP. 2x12", LF: 2x10" (Celestion neo), LMF: 2x10", MF: 4x6,5" (Celestion neo), HF:2x3" (Celestion neo), SPL146 dB peak',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 105,
                    title: 'Admark AD-L9',
                    img: 'Admark AD-L9.png',
                    desc: '3-way passive line array element. 2x15", LF: 2x15" (Celestion neo), MF: 6x5,5" (Celestion neo), HF: 2x2.5" (Celestion neo), SPL152 dB peak',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 106,
                    title: 'Admark AD-L9A',
                    img: 'Admark AD-L9A.png',
                    desc: '3-way active line array element with DSP. 2x15", LF: 2x15" (Celestion neo), MF: 6x5,5" (Celestion neo), HF: 2x2.5" (Celestion neo), SPL152 dB peak',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 107,
                    title: 'Admark AD221A',
                    img: 'Admark AD221A.png',
                    desc: 'Active subwoofer 2x21” with a class D amplifier 2x3800 W and built-in DSP. RMS - 4000 W, Sensitivity 119 dB',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 108,
                    title: 'Admark AD-728',
                    img: 'Admark AD-728.png',
                    desc: 'Passive subwoofer, 2x18", frequency range - 40 Hz ~ 130 Hz ,  Sensitivity 113 dB, SPL143 dB',
                    category: '/linear_arrays',
                    price: ''
                },
                {
                    id: 109,
                    title: 'Admark AD-728A',
                    img: 'Admark AD-728A.png',
                    desc: 'Active subwoofer 2x18” with a class D amplifier 2x2000 W  and built-in DSP. RMS - 3000 W, 113 dB, SPL143 dB, 40 Hz~130 Hz (±3 dB)',
                    category: '/linear_arrays',
                    price: ''
                }
            ],

            admarkamp: [
                {
                    id: 110,
                    title: 'Admark AD442',
                    img: 'Admark AD442.png',
                    desc: 'Power amplifier 4x4200 W 8 Ohm, 4x7200 W 4 Ohm, 4x7400 2 Ohm,  signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 112,
                    title: 'Admark AD406',
                    img: 'Admark AD406.png',
                    desc: 'Power amplifier Class D 4x650 W 8 Ohm, 4x1100 W 4 Ohm, 4x3740 2 Ohm,  signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 113,
                    title: 'Admark AD42',
                    img: 'Admark AD42.png',
                    desc: 'Power amplifier Class D 2x4200 W 8 Ohm, 2x7800 W 4 Ohm, 2x8500 2 Ohm,  signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 114,
                    title: 'Admark AD430',
                    img: 'Admark AD430.png',
                    desc: 'Power amplifier Class D 4x3000 W 8 Ohm, 4x5100 W 4 Ohm, 4x7140 2 Ohm,  signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 115,
                    title: 'Admark GP-1',
                    img: 'Admark GP-1.png',
                    desc: 'Power amplifier Class D 2x450 W 8 Ohm, 2x780 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 116,
                    title: 'Admark GP-2',
                    img: 'Admark GP-2.png',
                    desc: 'Power amplifier Class D 2x700W 8 Ohm, 2x1250 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 117,
                    title: 'Admark GP-3',
                    img: 'Admark GP-3.png',
                    desc: 'Power amplifier Class D 2x1000W 8 Ohm, 2x1650 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 118,
                    title: 'Admark GP-4',
                    img: 'Admark GP-4.png',
                    desc: 'Power amplifier Class D 2x1300W 8 Ohm, 2x2350 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 119,
                    title: 'Admark GP-5',
                    img: 'Admark GP-5.png',
                    desc: 'Power amplifier Class D 2x1500W 8 Ohm, 2x2750 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 120,
                    title: 'Admark GP-6',
                    img: 'Admark GP-6.png',
                    desc: 'Power amplifier Class D 2x2400W 8 Ohm, 2x3600 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 121,
                    title: 'Admark GP-2Q',
                    img: 'Admark GP-2Q.png',
                    desc: 'Power amplifier Class D 4x700W 8 Ohm, 4x1150 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 122,
                    title: 'Admark GP-3Q',
                    img: 'Admark GP-3Q.png',
                    desc: 'Power amplifier Class D 4x1000W 8 Ohm, 4x1550 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                },
                {
                    id: 123,
                    title: 'Admark GP-4Q',
                    img: 'Admark GP-4Q.png',
                    desc: 'Power amplifier Class D 4x1300W 8 Ohm, 4x1950 W 4 Ohm, signal-to-noize ratio >115 dB',
                    category: '/admark_amplifiers',
                    price: ''
                }
            ],

            loudspeakers: [
                {
                    id: 124,
                    title: 'Anzhee APEX 15 PM-I',
                    img: 'Anzhee APEX 15 PM-I.png',
                    desc: 'Active acoustic system with built-in amplifier (Class D) and DSP. 15" loudspeaker and twitter 1,75", 120°x60°, 40-18000 Hz, built-in 3-band equalizer, Bluetooth',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 125,
                    title: 'EASYSOUND TOWER M',
                    img: 'EASYSOUND TOWER M.png',
                    desc: 'Active acoustic column with build-in amlifier and  DSP (Class D) and DSP (96 kHz, 24 Bit). 12" Subwoofer, 8x3" twitter, 120°x16°, 45-20000 Hz, SPL125 dB, FX, Bluetooth',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 126,
                    title: 'EASYSOUND FUSION 112',
                    img: 'EASYSOUND FUSION 112.png',
                    desc: 'Active acoustic system with DSP, LF: 1x12", voice coil 2,5"; HF: 1x1,75", 350 W, 700 W peak, 50-20000 Hz , 96 dB',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 127,
                    title: 'EASYSOUND FUSION 115',
                    img: 'EASYSOUND FUSION 115.png',
                    desc: 'Active acoustic system with DSP, LF: 1x15", voice coil 2,5"; HF: 1x1,75", 500 W, 1000 W peak, 45-20000 Hz , 97 dB',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 128,
                    title: 'EASYSOUND FUSION 115B',
                    img: 'EASYSOUND FUSION 115B.png',
                    desc: 'Active subwoofer, 1x15", 1000 W, 2000 W peak, 45-150 Hz , 96 dB',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 129,
                    title: 'EASYSOUND FUSION 118B',
                    img: 'EASYSOUND FUSION 118B.png',
                    desc: 'Active subwoofer, 1x18", 1000 W, 2000 W peak, 40-150 Hz , 97 dB',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 130,
                    title: 'EASYSOUND HARMONY 112',
                    img: 'EASYSOUND HARMONY 112.png',
                    desc: 'Active acoustic system with DSP in MDF housing, LF: 1x12", HF: 1x1,35", 700 W, 50-20000 Hz , 96 dB',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 131,
                    title: 'EASYSOUND HARMONY 115',
                    img: 'EASYSOUND HARMONY 115.png',
                    desc: 'Active acoustic system with DSP in MDF housing, LF: 1x15", HF: 1x1,75", 900 W, 45-20000 Hz , 97 dB',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 132,
                    title: 'EASYSOUND HARMONY 115B',
                    img: 'EASYSOUND HARMONY 115B.png',
                    desc: 'Active subwoofer in MDF housing, 1x15", 1200 W, 45-150 Hz , 96 dB',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 133,
                    title: 'EASYSOUND HARMONY 118B',
                    img: 'EASYSOUND HARMONY 118B.png',
                    desc: 'Active subwoofer in MDF housing, 1x18", 1600 W, 40-150 Hz , 97 dB',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 134,
                    title: 'EASYSOUND SIREN SET 2EQ',
                    img: 'EASYSOUND SIREN SET 2EQ.png',
                    desc: 'Acoustic system',
                    category: '/loudspeakers',
                    price: ''
                },
                {
                    id: 135,
                    title: 'EASYSOUND HORIZON PRO 12M',
                    img: 'EASYSOUND HORIZON PRO 12M.png',
                    desc: '12" Active stage monitor with a class D amplifier, 4 Ohm, 50-20kHz, 800 W, SPL136 dB',
                    category: '/loudspeakers',
                    price: ''
                }
            ],

            amplifiers: [
                {
                    id: 136,
                    title: 'Anzhee KX1000 HQ',
                    img: 'Anzhee KX1000 HQ.png',
                    desc: 'Power amplifier 4x1000 W 8 Ohm, 4x1200 W 4 Ohm, 2x2000 W 8 Ohm bridge, THD 0,5%, signal-to-noize ratio 99 dBA, Crossover',
                    category: '/amplifiers',
                    price: ''
                },
                {
                    id: 137,
                    title: 'Anzhee KX1000 H',
                    img: 'Anzhee KX1000 H.png',
                    desc: 'Power amplifier 2x1000 W 8 Ohm, 2x1200 W 4 Ohm, 1x2000 W 8 Ohm bridge, THD 0,5%, signal-to-noize ratio 99 dBA',
                    category: '/amplifiers',
                    price: ''
                },
                {
                    id: 138,
                    title: 'Anzhee KX600 H',
                    img: 'Anzhee KX600 H.png',
                    desc: 'Power amplifier 2x600 W 8 Ohm, 2x700 W 4 Ohm, 1x1200 W 8 Ohm bridge, THD 0,5%, signal-to-noize ratio 99 dBA',
                    category: '/amplifiers',
                    price: ''
                },
                {
                    id: 139,
                    title: 'Anzhee PFC1300 DQ',
                    img: 'Anzhee PFC1300 DQ.png',
                    desc: 'Digital power amplifier 4x1300 W 8 Ohm, 4x2000 W 4 Ohm, 4x3300 W 2 Ohm, 2x4000 W 4 Ohm bridge, THD 0,01%, signal-to-noize ratio 99 dBA',
                    category: '/amplifiers',
                    price: ''
                }
            ],

            audio_processors: [
                {
                    id: 140,
                    title: 'Anzhee DSP480 MKII',
                    img: 'Anzhee DSP480 MKII.png',
                    desc: 'Digital sound processor 4x8, DAC/ADC 24 bit 96 kHz. USB, WiFi',
                    category: '/audio_processors',
                    price: ''
                },
                {
                    id: 141,
                    title: 'Anzhee DSP480',
                    img: 'Anzhee DSP480.png',
                    desc: 'Digital sound processor 4x8, DAC/ADC 24/48 bit 48 kHz. USB',
                    category: '/audio_processors',
                    price: ''
                }
            ],
            
            radio_systems: [
                {
                    id: 142,
                    title: 'Anzhee RS100 dual HH',
                    img: 'Anzhee RS100 dual HH.png',
                    desc: 'Professional  2-channel radio system with 2 hand transmitters. 650-700 mHz, step 250 kHz, frequency scanner, Dynamic range 100 dB, power supply 2xAA',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 143,
                    title: 'Anzhee RS100 dual BB',
                    img: 'Anzhee RS100 dual BB.png',
                    desc: 'Professional  2-channel radio system with 2 bodypacks. 200 channels, 650-679.70 mHz, frequency scanner, Dynamic range 100 dB, power supply 2xAA',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 144,
                    title: 'Anzhee HT100',
                    img: 'Anzhee HT100.png',
                    desc: 'ANZHEE HT100 Handheld transmitter',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 145,
                    title: 'Anzhee BP100',
                    img: 'Anzhee BP100.png',
                    desc: 'ANZHEE BP100 bodypack',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 146,
                    title: 'Anzhee ML30',
                    img: 'Anzhee ML30.png',
                    desc: 'lavalier condenser microphone',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 147,
                    title: 'Anzhee MH50',
                    img: 'Anzhee MH50.png',
                    desc: 'Headset condenser microphone',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 148,
                    title: 'Anzhee RS400 dual HH',
                    img: 'Anzhee RS400 dual HH.png',
                    desc: 'Professional  2-channel vocal radio system with two hand transmitters . 200 channels, UHF 640-690 mHz, step 250 kHz, frequency scanner, Dynamic range 100 dB, power supply 2xAA',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 149,
                    title: 'Anzhee RS400 dual BB',
                    img: 'Anzhee RS400 dual BB.png',
                    desc: 'Professional  2-channel radio systemwith 2 bodypacks. 200 channels, 650-700 mHz, step 250 kHz, frequency scanner, Dynamic range 100 dB, power supply 2xAA',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 150,
                    title: 'Anzhee ML40 black',
                    img: 'Anzhee ML40 black.png',
                    desc: 'lavalier condenser microphone',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 151,
                    title: 'Anzhee MH60',
                    img: 'Anzhee MH60.png',
                    desc: 'Headset condenser microphone',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 152,
                    title: 'Anzhee HT400',
                    img: 'Anzhee HT400.png',
                    desc: 'ANZHEE HT400 Handheld transmitter',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 153,
                    title: 'Anzhee BP400',
                    img: 'Anzhee BP400.png',
                    desc: 'ANZHEE BP400 bodypack',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 154,
                    title: 'Anzhee RS500 dual HH',
                    img: 'Anzhee RS500 dual HH.png',
                    desc: '2-channel radio system with two hand transmitters. 3000 channels, 654-714 MHz, frequency scanner, IR Synchronization, Dynamic range 100 dB, power supply 2xAA, PilotTone, adjustable Squelch, interchangeable heads, True Diversity',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 155,
                    title: 'Anzhee RS500 dual BB',
                    img: 'Anzhee RS500 dual BB.png',
                    desc: '2-channel radio system with two bodypacks. 3000 channels, 654-714 MHz, frequency scanner, IR Synchronization, Dynamic range 100 dB, power supply 2xAA, PilotTone, adjustable Squelch, True Diversity',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 156,
                    title: 'Anzhee HT500',
                    img: 'Anzhee HT500.png',
                    desc: 'Handheld transmitter for Radio systems RS500, UHF 654-714 MHz. frequency adjustment, gain, RF signal level (Hi/Low), settings lock',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 157,
                    title: 'Anzhee BP500',
                    img: 'Anzhee BP500.png',
                    desc: 'Bodypack for Radio systems RS500, UHF 654-714 MHz, frequency adjustment, gain, RF signal level (Hi/Low), settings lock',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 158,
                    title: 'Anzhee MH500',
                    img: 'Anzhee MH500.png',
                    desc: 'Headset condenser microphone, 60-15000 kHz, 4 pin mini-XLR',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 159,
                    title: 'Anzhee ML500',
                    img: 'Anzhee ML500.png',
                    desc: 'lavalier condenser microphone, 60-15000 kHz, 4 pin mini-XLR',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 160,
                    title: 'Anzhee RS600 dual HH',
                    img: 'Anzhee RS600 dual HH.png',
                    desc: 'Professional  2-channel radio system with two hand transmitters.',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 161,
                    title: 'Anzhee RS600 dual BB',
                    img: 'Anzhee RS600 dual BB.png',
                    desc: 'Professional  2-channel radio system with bodypack.',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 162,
                    title: 'Anzhee HT600',
                    img: 'Anzhee HT600.png',
                    desc: 'ANZHEE HT600 Handheld transmitter',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 163,
                    title: 'Anzhee BP600',
                    img: 'Anzhee BP600.png',
                    desc: 'ANZHEE BP600 bodypack',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 164,
                    title: 'Anzhee MH600',
                    img: 'Anzhee MH600.png',
                    desc: 'Headset condenser microphone, 60-15000 kHz, 4 pin mini-XLR',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 165,
                    title: 'Anzhee ML600',
                    img: 'Anzhee ML600.png',
                    desc: 'lavalier condenser microphone, 60-15000 kHz, 4 pin mini-XLR',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 166,
                    title: 'Anzhee Mic Head 1',
                    img: 'Anzhee Mic Head 1.png',
                    desc: 'Interchangeable microphone head',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 167,
                    title: 'Anzhee Mic Head 2',
                    img: 'Anzhee Mic Head 2.png',
                    desc: 'Interchangeable microphone head',
                    category: '/radio_systems',
                    price: ''
                },
                {
                    id: 168,
                    title: 'Anzhee Mic Head 3',
                    img: 'Anzhee Mic Head 3.png',
                    desc: 'Interchangeable microphone head',
                    category: '/radio_systems',
                    price: ''
                }
            ],
            
            splitters_antennas: [
                {
                    id: 169,
                    title: 'Anzhee SD44',
                    img: 'Anzhee SD44.png',
                    desc: 'ANZHEE SD44 Antenna Splitter, Signal Distributor. 4 channels.',
                    category: '/splitters_antennas',
                    price: ''
                },
                {
                    id: 170,
                    title: 'Anzhee SD48',
                    img: 'Anzhee SD48.png',
                    desc: 'ANZHEE SD48 Antenna Splitter, Signal Distributor. 8 channels.',
                    category: '/splitters_antennas',
                    price: ''
                },
                {
                    id: 171,
                    title: 'Anzhee AD12',
                    img: 'Anzhee AD12.png',
                    desc: 'ANZHEE AD12 passive omnidirectional wall mounted Antenna',
                    category: '/splitters_antennas',
                    price: ''
                },
                {
                    id: 172,
                    title: 'Anzhee AC10',
                    img: 'Anzhee AC10.png',
                    desc: 'ANZHEE AC10 active direct Antenna',
                    category: '/splitters_antennas',
                    price: ''
                }
            ],
            
            
            
    
            group: [
                {
                    id: 2,
                    title: 'Moving Head',
                    img: 'moving_head.png',
                    link: '/moving_head'
                },
                {
                    id: 1,
                    title: 'WP/IP Series',
                    img: 'wpip.jpeg',
                    link: '/wpipseries'
                },
                {
                    id: 3,
                    title: 'Moving Tilt Bar',
                    img: 'moving_tilt_bar.png',
                    link: '/moving_tilt_bar'
                },
                {
                    id: 4,
                    title: 'LED PAR Lights',
                    img: 'led_spotlights.jpeg',
                    link: '/led_spotlights'
                },
                {
                    id: 5,
                    title: 'LED BAR Lights',
                    img: 'bar_spotlights.png',
                    link: '/bar_spotlights'
                },
                {
                    id: 6,
                    title: 'Theater Lighting and Studio Equipment',
                    img: 'theater_lighting.jpeg',
                    link: '/theater_lighting'
                },
                {
                    id: 7,
                    title: 'Special Effect',
                    img: 'Special Effect.png',
                    link: '/special_effect'
                },
                // {
                //     id: 8,
                //     title: 'Fog/Haze',
                //     img: 'fog_haze.jpeg',
                //     link: '/fog_haze'
                // },
                {
                    id: 9,
                    title: 'Follow Spotlights',
                    img: 'Follow Spot.jpeg',
                    link: '/follow_spot'
                },
                {
                    id: 10,
                    title: 'DMX Consoles & Controllers',
                    img: 'controlling_DMX.png',
                    link: '/controlling_DMX'
                },
                {
                    id: 11,
                    title: 'Line Arrays',
                    img: 'Linear arrays.png',
                    link: '/linear_arrays'
                },
                {
                    id: 13,
                    title: 'Loudspeakers',
                    img: 'loudspeakers.png',
                    link: '/loudspeakers'
                },
                {
                    id: 12,
                    title: 'Admark Amplifiers',
                    img: 'Admark Amplifiers.png',
                    link: '/admark_amplifiers'
                },
                {
                    id: 14,
                    title: 'Amplifiers',
                    img: 'Amplifiers.png',
                    link: '/amplifiers'
                },
                {
                    id: 15,
                    title: 'Audio Processors',
                    img: 'Audio processors.png',
                    link: '/audio_processors'
                },
                {
                    id: 16,
                    title: 'Radio Systems',
                    img: 'radio_systems.jpeg',
                    link: '/radio_systems'
                },
                {
                    id: 17,
                    title: 'Splitters and Antennas',
                    img: 'Splitters and antennas.png',
                    link: '/splitters_antennas'
                }
            ],
    
        category: ''
        }
        this.addCategory = this.addCategory.bind(this)
    }
    
    render() {
        
        return (
            <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Main group={this.state.group} onAdd={this.addCategory}/>}/>
                        <Route path="/wpipseries" element={<Wpip items={this.state.wpip}/>}/>
                        <Route path="/moving_head" element={<MovingHead items={this.state.movinghead}/>}/>
                        <Route path="/moving_tilt_bar" element={<MovingTiltBar items={this.state.movingtiltbar}/>}/>
                        <Route path="/led_spotlights" element={<LEDSpotlights items={this.state.ledpar}/>}/>
                        <Route path="/bar_spotlights" element={<BarSpotlights items={this.state.ledbar}/>}/>
                        <Route path="/theater_lighting" element={<TheaterLighting items={this.state.theater}/>}/>
                        <Route path="/special_effect" element={<SpecialEffect items={this.state.speceffect}/>}/>
                        <Route path="/fog_haze" element={<FogHaze items={this.state.foghaze}/>}/>
                        <Route path="/follow_spot" element={<FollowSpot items={this.state.followspot}/>}/>
                        <Route path="/controlling_DMX" element={<Controlling items={this.state.control}/>}/>
                        <Route path="/linear_arrays" element={<LinearArrays items={this.state.lineararr}/>}/>
                        <Route path="/admark_amplifiers" element={<AdmarkAmplifiers items={this.state.admarkamp}/>}/>
                        <Route path="/loudspeakers" element={<Loudspeakers items={this.state.loudspeakers}/>}/>
                        <Route path="/amplifiers" element={<Amplifiers items={this.state.amplifiers}/>}/>
                        <Route path="/audio_processors" element={<AudioProcessors items={this.state.audio_processors}/>}/>
                        <Route path="/radio_systems" element={<RadioSystems items={this.state.radio_systems}/>}/>
                        <Route path="/splitters_antennas" element={<SplittersAntennas items={this.state.splitters_antennas}/>}/>
                        <Route path="/other" element={<Other/>}/>
                    </Routes>
                    <ScrollToTop />
            </BrowserRouter>
          )

    }

    addCategory(category) {
        this.setState({ category: [category] }, () => {
            console.log(this.state.category)
        })
    }
    
}
