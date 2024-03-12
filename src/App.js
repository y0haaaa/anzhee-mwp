import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Description from "./components/Description"
import Product from "./components/Product"
import Features from "./components/Features"
import Projects from "./components/Projects"
import CarouselBox from "./components/CarouselBox"
import Items from "./components/Items"
import Categories from "./components/Сategories"




class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
        
        orders: [],
        
        items: [
            {
            id: 1,
            title: 'Anzhee PRO PHOENIX B-EYE 760z',
            img: '001_Anzhee PRO PHOENIX B-EYE 760z_LENS_WM.png',
            desc: 'Профессиональная театральная вращающаяся голова гибридная WASH BEAM B-EYE / Светодиод OSRAM 60 Вт х 7 шт / RGBW / 4°-60° / эффект B-EYE / Pixel control / режимы системы охлаждения: автоматический и тихий',
            category: 'Anzhee Pro Phoenix',
            price: '230 800'
            },
            {
            id: 2,
            title: 'Anzhee PRO PHOENIX BSW 350 CMY',
            img: '001_Anzhee PRO PHOENIX BSW 350 CMY.jpg',
            desc: 'LED 350 Вт. / 5°-45° / 11 цветов / 20 гобо-рисунок / 1 призма / зум / ирис / фрост / CMY-синтез цветов. / режимы системы охлаждения: автоматический и бесшумный',
            category: 'Anzhee Pro Phoenix',
            price: '343 100'
            },
            {
            id: 3,
            title: 'Anzhee PRO PHOENIX SPOT 585 FS',
            img: '001_Anzhee PRO PHOENIX SPOT 585 FS_LENS 1_WM.png',
            desc: 'BEAM SPOT WASH PROFILE / LED 580 Вт. / 6,5°-42° / 6 цветов + CMY + CTO фильтр / 14 гобо-рисунков + анимационное колесо с непрерывным вращением / 1 призма / зум / ирис / фрост / DMX-512, RDM, Wireless и Art-Net / профилирование луча',
            category: 'Anzhee Pro Phoenix',
            price: '633 200'
            },
            {
            id: 4,
            title: 'Anzhee RS500 dual HH',
            img: '001_Anzhee RS500_dual(round head).png',
            desc: 'Двухканальная радиосистема с двумя ручными передатчиками. 3000 каналов, 654-714 МГц, сканер частот, ИК синхронизация, динамический диапазон 100 дБ, питание 2хАА, PilotTone, настраеваемый Squelch, сменные головы, True Diversity',
            category: 'Радиосистемы и микрофоны',
            price: '45 500'
            },
            {
            id: 5,
            title: 'Easysound Digital Mixer 12',
            img: 'Easysound Digital Mixer 12_3-4.png',
            desc: 'Easysound Digital Mixer 12, Цифровой микшерный пульт, 8 входных канала, 2 stereo, 6 AUX',
            category: 'Микшерные пульты',
            price: '67 600'
            },
        ],
        group: [
            {
                id: 1,
                title: 'Moving Head',
                img: 'moving_head.jpeg',
                link: 'moving_head'
            },
            {
                id: 2,
                title: 'LED Spotlights',
                img: 'led_spotlights.jpeg',
                link: 'led_spotlights'
            },
            {
                id: 3,
                title: 'Theater lighting and studio equipment',
                img: 'theater_lighting.jpeg',
                link: 'theater_lighting'
            },
            {
                id: 4,
                title: 'Controlling DMX devices',
                img: 'controlling_DMX.jpeg',
                link: 'controlling_DMX'
            },
            {
                id: 5,
                title: 'Loudspeakers',
                img: 'loudspeakers.png',
                link: 'loudspeakers'
            },
            {
                id: 6,
                title: 'Radio systems',
                img: 'radio_systems.jpeg',
                link: 'radio_systems'
            },
            {
                id: 7,
                title: 'Mixer consoles',
                img: 'mixer_consoles.jpeg',
                link: 'mixer_consoles'
            }
        ]
        }
    }


    render() {
        return (
        <div className = 'wrapper'>
            <div className = 'container'>
            
                <Header />
                <CarouselBox />
                <Description />
                <About />
                <Product />
                <Features />
                <Categories group = {this.state.group}/>
                <Items items = {this.state.items} onAdd={this.addToOrder}/>
                <Projects />

                <Footer />
                
            </div>
        </div>
        );
    };

}

export default App;
