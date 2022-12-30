import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { Slider } from '../components/Slider/Slider'
import './Main.css'

export const Main = () => {
  const mangas = [
    {
      id: 1,
      title: 'CHAIN SAW MAN',
      image: 'https://m.media-amazon.com/images/I/51m9ctmcRnL._AC_SY780_.jpg',
    },
    {
      id: 2,
      title: 'BATMAN',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Batman_Comic_Book_-_NARA_-_595420.gif',
    },
    {
      id: 3,
      title: 'BOKU NO HERO',
      image: 'https://mangaplus.shueisha.co.jp/drm/title/200019/title_thumbnail_portrait_list/14341.jpg?key=76ea3d3271ad774db280d27322080619&duration=86400',

    },
    {
      id: 4,
      title: 'SUPERMAN',
      image: 'https://http2.mlstatic.com/D_NQ_NP_890675-MCO45377756967_032021-O.jpg',

    },
    {
      id: 5,
      title: 'ERASED',
      image: 'https://www.dogamanga.com/wp-content/uploads/2021/07/157606_520x520.jpg',

    },
    {
      id: 6,
      title: 'TOKYO REVENGERS',
      image: 'https://http2.mlstatic.com/D_NQ_NP_971759-MCO48896648857_012022-O.jpg',

    },
    {
      id: 7,
      title: 'SPIDER MAN',
      image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/10/633cefa06d1f4/clean.jpg',

    }
  ]
  return (
    <div className='containerprincipal'>
      <Navbar />
      <div className='containerMain'>
        <div className='banner'>
          <img src='https://cdn.shopify.com/s/files/1/0325/8128/8072/files/BANNER-ESC-2_34c44d95-f141-4557-a9a1-10c01d34e1fc_1899x382.jpg?v=1670454413' className='view' />
          <img src='https://cdn.shopify.com/s/files/1/0325/8128/8072/files/banner-mov2_786e5015-f348-4cee-85bc-52b16d00b240_878x878.jpg?v=1670454357' className='movileView' />
        </div>

        <div className='bodyMainprincipal'>
          <div className='title'>
            <span>
              Elige tu favorito
            </span>
          </div>
          <div className='cardsBody'>
            {
              mangas.map((item) => (
                <div className='card'>
                  <span>{item.title}</span>
                  <img src={item.image} />
                  <span className='comprar'>COMPRAR</span>
                </div>
              ))
            }
          </div>

          
        </div>
        
      </div>
      <div className='masVendidos'>
              <span>Mas vendidos</span>
              <div className='carousel'>
                <Slider/>
              </div>
          </div>
    </div>

  )
}
