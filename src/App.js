
import { Route, Routes, BrowserRouter } from "react-router-dom"
import React, { Component } from 'react'
import MovingHead from "./Pages/MovingHead"
import Main from "./Pages/Main"

import ScrollToTop from "./components/ScrollToTop"
import Other from "./Pages/Other"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        items: [
            {
                id: 1,
                title: 'Anzhee PRO PHOENIX B-EYE 760z',
                img: 'Anzhee PRO PHOENIX B-EYE 760z_LENS_WM.png',
                desc: 'Профессиональная театральная вращающаяся голова гибридная WASH BEAM B-EYE / Светодиод OSRAM 60 Вт х 7 шт / RGBW / 4°-60° / эффект B-EYE / Pixel control / режимы системы охлаждения: автоматический и тихий',
                category: '/moving_head',
                price: '230 800'
            },
            {
                id: 2,
                title: 'Anzhee PRO PHOENIX BSW 350 CMY',
                img: 'Anzhee PRO PHOENIX BSW 350 CMY.jpg',
                desc: 'LED 350 Вт. / 5°-45° / 11 цветов / 20 гобо-рисунок / 1 призма / зум / ирис / фрост / CMY-синтез цветов. / режимы системы охлаждения: автоматический и бесшумный',
                category: '/moving_head',
                price: '343 100'
            },
            {
                id: 3,
                title: 'Anzhee PRO PHOENIX SPOT 585 FS',
                img: 'Anzhee PRO PHOENIX SPOT 585 FS_LENS 1_WM.png',
                desc: 'BEAM SPOT WASH PROFILE / LED 580 Вт. / 6,5°-42° / 6 цветов + CMY + CTO фильтр / 14 гобо-рисунков + анимационное колесо с непрерывным вращением / 1 призма / зум / ирис / фрост / DMX-512, RDM, Wireless и Art-Net / профилирование луча',
                category: '/moving_head',
                price: '633 200'
            },
            {
                id: 4,
                title: 'Anzhee PRO PHOENIX WASH 760z',
                img: 'Anzhee PRO PHOENIX WASH 760z.jpg',
                desc: 'WASH BEAM / 7 шт. светодиодов по 60 Вт. (OSRAM) / RGBW + CTO / 3,5°-60°',
                category: '/moving_head',
                price: '166 500'
            },
            {
                id: 5,
                title: 'Anzhee PRO PHOENIX BSW 200',
                img: 'Anzhee PRO PHOENIX BSW 200.jpg',
                desc: 'BEAM SPOT WASH / LED 200 Вт. / 2°-40° / 12 цветов / 22 гобо-рисунка / 1 призма / зум / фрост',
                category: '/moving_head',
                price: '219 500'
            },
            {
                id: 6,
                title: 'Anzhee PRO PHOENIX SPOT 330',
                img: 'Anzhee PRO PHOENIX SPOT 330.jpg',
                desc: 'SPOT WASH / LED 330 Вт. / 10°-40° / 15 цветов / 15 гобо-рисунков / 1 призма / зум / iris / фрост / режимы системы охлаждения: автоматический и бесшумный',
                category: '/moving_head',
                price: '244 300'
            },
            {
                id: 7,
                title: 'Anzhee PRO PHOENIX SPOT 585 CMY',
                img: 'Anzhee PRO PHOENIX SPOT 585 CMY.jpg',
                desc: 'BEAM SPOT WASH / LED 580 Вт. / 6,5°-42° / 7 цветов + CMY + CTO фильтр / 14 гобо-рисунков + анимационное колесо с непрерывным вращением / 1 призма / зум / ирис / фрост / DMX-512, RDM, Wireless и Art-Net',
                category: '/moving_head',
                price: '514 400'
            },
            {
                id: 8,
                title: 'Anzhee PRO PHOENIX BSW 1000 FS',
                img: 'Anzhee PRO PHOENIX BSW 1000 FS.jpg',
                desc: 'BEAM SPOT WASH PROFILE / LED 1000 Вт. / 5°-55° / 6 цветов + CMY + CTO фильтр / 12 гобо-рисунков + анимационное колесо / 2 призмы / зум / ирис / 2 фростфильтра / DMX-512, RDM, Wireless и Art-Net / профилирование луча',
                category: '/moving_head',
                price: '945 200'
            },
            {
                id: 9,
                title: 'Anzhee RS500 dual HH',
                img: 'Anzhee RS500_dual(round head).png',
                desc: 'Двухканальная радиосистема с двумя ручными передатчиками. 3000 каналов, 654-714 МГц, сканер частот, ИК синхронизация, динамический диапазон 100 дБ, питание 2хАА, PilotTone, настраеваемый Squelch, сменные головы, True Diversity',
                category: '/radio_systems',
                price: '45 500'
            },
            {
                id: 10,
                title: 'Easysound Digital Mixer 12',
                img: 'Easysound Digital Mixer 12_3-4.png',
                desc: 'Easysound Digital Mixer 12, Цифровой микшерный пульт, 8 входных канала, 2 stereo, 6 AUX',
                category: '/mixer_consoles',
                price: '67 600'  
            },
            {
                id: 11,
                title: "Anzhee Tetta 24",
                img: 'Anzhee Tetta 24.png',
                desc: 'Аналоговый микшерный пульт, 24 входных канала, 4 AUX, 1 FX. 2 SUB GROUP',
                category: '/mixer_consoles',
                price: '79 300 ₽'
            },
            {
                id: 12,
                title: "Anzhee Tetta 16",
                img: 'Anzhee Tetta 16.png',
                desc: 'Аналоговый микшерный пульт, 16 входных канала, 4 AUX, 1 FX. 2 SUB GROUP',
                category: '/mixer_consoles',
                price: '59 600 ₽'
            },
            {
                id: 13,
                title: "Anzhee Tetta 12",
                img: 'Anzhee Tetta 12.png',
                desc: 'Аналоговый микшерный пульт, 12 входных канала, 4 AUX, 1 FX. 2 SUB GROUP',
                category: '/mixer_consoles',
                price: '59 600 ₽'
            },
            {
                id: 14,
                title: "Anzhee Tetta 8",
                img: 'Anzhee Tetta 8.png',
                desc: 'Аналоговый микшерный пульт, 8 входных канала, 4 AUX, 1 FX. 2 SUB GROUP',
                category: '/mixer_consoles',
                price: '44 200 ₽'
            },
            {
                id: 15,
                title: "Anzhee Vauriella 16",
                img: 'Anzhee Vauriella 16.png',
                desc: 'Anzhee Vauriella 16, Цифровой микшерный пульт, 12 входных каналов, 2 stereo, 4 AUX, 2 SUB GROUP',
                category: '/mixer_consoles',
                price: '181 200 ₽'
            },
            {
                id: 16,
                title: "Anzhee Vauriella 20",
                img: 'Anzhee Vauriella 20.png',
                desc: 'Anzhee Vauriella 20, Цифровой микшерный пульт, 16 входных каналов, 2 stereo, 8 AUX, 4 SUB GROUP',
                category: '/mixer_consoles',
                price: '264 000 ₽'
            },
            {
                id: 17,
                title: "Anzhee Vauriella 24",
                img: 'Anzhee Vauriella 24.png',
                desc: 'Anzhee Vauriella 24, Цифровой микшерный пульт, 24 входных канала, 2 stereo, 14 AUX',
                category: '/mixer_consoles',
                price: '331 400 ₽'
            },
            {
                id: 18,
                title: "Anzhee Vauriella 32",
                img: 'Anzhee Vauriella 32.png',
                desc: 'Anzhee Vauriella 32, Цифровой микшерный пульт, 32 входных канала, 2 stereo, 10 AUX, 4 SUB GROUP',
                category: '/mixer_consoles',
                price: '412 100 ₽'
            },
            {
                id: 19,
                title: "Anzhee Eventure Run",
                img: 'Anzhee Eventure Run.png',
                desc: '2 x 512 каналов DMX / выход ArtNet 1024 канала / Wi-Fi (ArtNet) / IPS дисплей с сенсорным управлением 10" (мультитач) / 10 фейдеров x 60 страниц / Аудио выход / 2 оптических энкодера.',
                category: '/controlling_DMX',
                price: '144 900 ₽'
            },
            {
                id: 20,
                title: "Anzhee Eventure Base",
                img: 'Anzhee Eventure Base.png',
                desc: '5 x 512 каналов DMX / выход ArtNet 4096 канала / Wi-Fi (ArtNet) / IPS дисплей с сенсорным управлением 10.1" (резистивный) / 16 фейдеров x 60 страниц / 4 энкодера / Аккумуляторная батарея / Аудио выход',
                category: '/controlling_DMX',
                price: '222 100 ₽'
            },
            {
                id: 21,
                title: "Anzhee Eventure Master",
                img: 'Anzhee Eventure Master.png',
                desc: '6 x 512 каналов DMX / выход ArtNet 8192 канала / Wi-Fi (ArtNet) / IPS дисплей с сенсорным управлением 15,6" (мультитач) / 12 фейдеров +12 кнопок воспроизведения x 60 страниц/ 4 энкодера / Аккумуляторная батарея / Аудио выход',
                category: '/controlling_DMX',
                price: '333 400 ₽'
            },
            {
                id: 22,
                title: "Anzhee Eventure PRO",
                img: 'Anzhee Eventure Master.png',
                desc: '8 x 512 каналов DMX / выход ArtNet 12288 (24x512) каналов / Wi-Fi (ArtNet) / IPS дисплей с сенсорным управлением 2x15.6" / 22 фейдера x 60 страниц / 4 энкодера / Аккумуляторная батарея / Аудио выход',
                category: '/controlling_DMX',
                price: '718 100 ₽'
            },
            {
                id: 23,
                title: "Anzhee RS600 dual HH",
                img: 'Anzhee RS600 dual HH.png',
                desc: 'Профессиональная 2 канальная радиосистема с двумя ручными передатчиками.',
                category: '/radio_systems',
                price: '76 400 ₽'
            },
            {
                id: 24,
                title: "Anzhee RS400 dual HH",
                img: 'Anzhee RS400 dual HH.png',
                desc: 'Профессиональная 2 канальная вокальная радиосистема с двумя ручными передатчиками. 200 каналов, UHF 640-690 мГц, шаг 250 кГц, сканер частот, динамический диапазон 100 дБ, питание 2хАА',
                category: '/radio_systems',
                price: '48 500 ₽'
            },
            {
                id: 25,
                title: 'Anzhee Fresnel 40 RGBW ZOOM',
                img: 'Anzhee Fresnel 40 RGBW ZOOM.jpg',
                desc: 'Fresnel / 40 Вт / RGBW / ручной зум / 25°-90° / RDM',
                category: '/theater_lighting',
                price: '52 700'
            },
            {
                id: 26,
                title: 'Anzhee Fresnel 50 ZOOM',
                img: 'Anzhee Fresnel 50 ZOOM.jpg',
                desc: 'Белый светодиод / 50 Вт / ручной зум / от 2700К до 7000К / >95RA /25°-90°',
                category: '/theater_lighting',
                price: '46 100'
            },
            {
                id: 27,
                title: 'PROCBET Fresnel 100 RGBW ZOOM F',
                img: 'PROCBET Fresnel 100 RGBW ZOOM F.png',
                desc: '100 Вт / RGBW / ручной зум / 37°~51° / Пассивная система охлаждения / Кашетирующие шторки',
                category: '/theater_lighting',
                price: '62 200'
            },
            {
                id: 28,
                title: 'PROCBET Fresnel 200 ZOOM F',
                img: 'PROCBET Fresnel 200 ZOOM F.png',
                desc: '200 Вт / WW / CW / WW+CW / RGBW (Зависит от модификации) / CRI / WW >95 / CW >95 / WW+CW >95 / Моторизи́рованный зум / 10°~60° / Пассивная система охлаждения / Кашетирующие шторки',
                category: '/theater_lighting',
                price: '106 000'
            },
            {
                id: 29,
                title: 'PROCBET Fresnel 300 ZOOM F',
                img: 'PROCBET Fresnel 300 ZOOM F.png',
                desc: '300 Вт / WW / CW / WW+CW / RGBW (Зависит от модификации)/ CRI / WW >95 / CW >95 / WW+CW >95 / Моторизи́рованный зум / 10°~60° / Пассивная система охлаждения / Кашетирующие шторки',
                category: '/theater_lighting',
                price: '121 100'
            },
            {
                id: 30,
                title: 'Anzhee Fresnel 60 Q ZOOM',
                img: 'Anzhee Fresnel 60 Q ZOOM.jpg',
                desc: 'Четыре варианта светодиода в зависимости от модификации: RGBW (60Вт) 2700~10000K CRI: 85 или WW+CW (60 Вт) 3200~5600K CRI: ≥93 или WW (60 Вт) 3200K CRI: ≥95 или CW (200 Вт) 5600K CRI: ≥95 / DMX512 / 20~50° регулируемый угол / Активная малошумная система охлаждения / сменный объектив',
                category: '/theater_lighting',
                price: '47 400'
            },
            {
                id: 31,
                title: 'Anzhee Fresnel 100 Q ZOOM',
                img: 'Anzhee Fresnel 100 Q ZOOM.jpg',
                desc: 'Четыре варианта светодиода в зависимости от модификации: RGBALC 2700~10000K CRI: 90 или WW+CW 3200~5600K CRI: ≥93 или WW 3200K CRI: ≥95 или CW 5600K CRI: ≥95 / DMX512 / RDM / 20~50° регулируемый угол / Активная малошумная система охлаждения / сменный объектив',
                category: '/theater_lighting',
                price: '70 000'
            },
            {
                id: 32,
                title: 'Anzhee Fresnel 400 Q ZOOM',
                img: 'Anzhee Fresnel 400 Q ZOOM.jpg',
                desc: 'Четыре варианта светодиода в зависимости от модификации: RGBALC 2700~10000K CRI: ⩽96 или WW+CW 3200~5600K CRI ⩽98 или WW 3200K CRI ⩽98 или CW 5600K CRI: ⩽98 / DMX512 / RDM / 20~50° регулируемый угол / Активная малошумная система охлаждения / сменный объектив',
                category: '/theater_lighting',
                price: '134 700'
            },
            {
                id: 33,
                title: 'Anzhee PRO Spectrum Fresnel A 200',
                img: 'Anzhee PRO Spectrum Fresnel A 200.jpg',
                desc: 'Четыре варианта светодиода в зависимости от модификации: RGBW 2700~10000K CRI: ≥93 или WW+CW 2700~6200K CRI: ≥95 или WW 3200K CRI: ≥95 или CW 5600K CRI: ≥95 / DMX512 / RDM / RGBW 16~60° / W 12~60° / регулируемый угол / Активная малошумная система охлаждения',
                category: '/theater_lighting',
                price: '172 800'
            },
            
        ],


        group: [
            {
                id: 1,
                title: 'Moving Head',
                img: 'moving_head.jpeg',
                link: '/moving_head'
            },
            {
                id: 2,
                title: 'LED Spotlights',
                img: 'led_spotlights.jpeg',
                link: '/led_spotlights'
            },
            {
                id: 3,
                title: 'Theater lighting and studio equipment',
                img: 'theater_lighting.jpeg',
                link: '/theater_lighting'
            },
            {
                id: 4,
                title: 'Controlling DMX devices',
                img: 'controlling_DMX.jpeg',
                link: '/controlling_DMX'
            },
            {
                id: 5,
                title: 'Accessories',
                img: 'accessories.jpeg',
                link: '/accessories'
            },
            {
                id: 6,
                title: 'Loudspeakers',
                img: 'loudspeakers.png',
                link: '/loudspeakers'
            },
            {
                id: 7,
                title: 'Radio systems',
                img: 'radio_systems.jpeg',
                link: '/radio_systems'
            },
            {
                id: 8,
                title: 'Mixer consoles',
                img: 'mixer_consoles.jpeg',
                link: '/mixer_consoles'
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
                        <Route path="/moving_head" element={<MovingHead items={this.state.items} category={this.state.category}/>}/>
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
