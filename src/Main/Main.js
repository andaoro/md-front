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

  const arraySlider = [
    {
      id: 1,
      image: 'https://i.pinimg.com/564x/e2/4e/3d/e24e3d3942b877afa472fd23deeba335.jpg',
      text: 'Capitulo 122',
      title: '1. Chainsaw-man'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/564x/28/6e/2d/286e2d434609cbd4f8efd9cffc7f1a4d.jpg',
      text: 'Next',
      title: '2. Code geass'

    },
    {
      id: 3,
      image: 'https://i.pinimg.com/564x/32/3b/5c/323b5cbdc4b70d6a4048bdce378f392c.jpg',
      text: 'Next',
      title: '3. One Piece'

    },
    {
      id: 4,
      image: 'https://i.pinimg.com/564x/dd/c8/ce/ddc8ce189e74efdcb3b02cf0d43ba470.jpg',
      text: 'Next',
      title: '4. Spider-man'

    },
  ]

  const novedades = [
    {
      id: Math.random(1,100),
      title:'Boku no hero academia',
      image:'https://i.pinimg.com/564x/ee/b2/fa/eeb2fa00a242d2948ed588454d4466a7.jpg',
      price: 25000
    },
    {
      id: Math.random(1,100),
      title:'Spy family',
      image:'https://i.pinimg.com/564x/0b/d1/76/0bd17654c978fdbc12c71d2c00c5dcc6.jpg',
      price: 28000
    },
    {
      id: Math.random(1,100),
      title:'hunter x hunter',
      image:'https://i.pinimg.com/564x/5d/00/06/5d00061255e3b30a32f1bd3020b9835d.jpg',
      price: 45000
    },
    {
      id: Math.random(1,100),
      title:'Naruto Shippuden',
      image:'https://i.pinimg.com/564x/18/37/a5/1837a583e33afddd15722d24a63e5553.jpg',
      price: 32000
    },
    {
      id: Math.random(1,100),
      title:'Blue lock',
      image:'https://i.pinimg.com/564x/f7/22/2d/f7222d050256d6e7f7f089b6b4181f73.jpg',
      price: 28000
    },
    {
      id: Math.random(1,100),
      title:'Tengen toppa gurren lagann',
      image:'https://i.pinimg.com/564x/40/32/12/4032120f3939a544f3bd1c4dbab8be1d.jpg',
      price: 35000
    },
    {
      id: Math.random(1,100),
      title:'One Piece',
      image:'https://i.pinimg.com/564x/71/fa/77/71fa7797a69ef379730b64e72d3b2d9f.jpg',
      price: 35000
    },
    {
      id: Math.random(1,100),
      title:'Jojos bizarre adventures',
      image:'https://i.pinimg.com/564x/8c/b3/29/8cb32937d0359a9e161108395f251765.jpg',
      price: 35000
    },
    

    

  ]


  return (
    <div className='containerprincipal'>
      <Navbar />
      <div className='containerMain'>
        <div className='banner'>
          <img src='https://www.industriaanimacion.com/wp-content/uploads/2022/02/Mangas_Mas_Leidos_2021-copia.jpg' className='view' />
        </div>

        <div className='bodyMainprincipal'>
          <div className='title'>
            <span className='title'>
              Elige tu favorito
            </span>
          </div>
          <div className='cardsBody'>
            {
              mangas.map((item, key) => (
                <div className='card' key={item.id}>
                  <span>{key + 1}.{item.title}</span>
                  <img src={item.image} />
                  <span className='comprar'>COMPRAR</span>
                </div>
              ))
            }
          </div>


        </div>

      </div>
      <div className='masVendidos'>
        <span className='title'>Mas vendidos</span>
        <div className='carousel'>
          <Slider arraySlider={arraySlider} />
        </div>
      </div>

      <div className='NovedadesContainer'>
        <span className='title'>NOVEDADES</span>
        <div className='sliderNovedades'>
          {
            novedades.map((manga) => (
              <div className='cardNovedades'>
                <div className='bodyCardNovedades'>
                  <div className='imageNovedades'>
                    <img src={manga.image} />
                  </div>
                  <div className='infoNovedades'>
                    <span>{manga.title}</span>
                    <span>$ {manga.price}</span>
                  </div>
                  <div className='actionsNovedades'>
                  </div>

                  <div className='comprarNovedades'>
                    <span>COMPRAR AHORA</span>
                  </div>


                </div>

              </div>
            ))
          }
        </div>
        <span className='comprarMas'>
          Ver Mas
        </span>
      </div>
    </div>

  )
}
