import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import About from "./components/About"
import Feedback from "./components/Feedback"
import Rules from "./components/Rules"

class App extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
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

        
      ]
    }
    }
  
    render() {
        return (
        <div className = 'wrapper'>
            <Header />
            <Items items = {this.state.items}/>
            <About />
            <Rules />
            <Feedback />
            <Footer />
        </div>
        );
    };
}

export default App;
