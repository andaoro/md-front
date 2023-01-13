import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { Slider } from '../components/Slider/Slider'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

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
      id: Math.random(1, 100),
      title: 'Boku no hero academia',
      image: 'https://i.pinimg.com/564x/ee/b2/fa/eeb2fa00a242d2948ed588454d4466a7.jpg',
      price: 25000
    },
    {
      id: Math.random(1, 100),
      title: 'Spy family',
      image: 'https://i.pinimg.com/564x/0b/d1/76/0bd17654c978fdbc12c71d2c00c5dcc6.jpg',
      price: 28000
    },
    {
      id: Math.random(1, 100),
      title: 'hunter x hunter',
      image: 'https://i.pinimg.com/564x/5d/00/06/5d00061255e3b30a32f1bd3020b9835d.jpg',
      price: 45000
    },
    {
      id: Math.random(1, 100),
      title: 'Naruto Shippuden',
      image: 'https://i.pinimg.com/564x/18/37/a5/1837a583e33afddd15722d24a63e5553.jpg',
      price: 32000
    },
    {
      id: Math.random(1, 100),
      title: 'Blue lock',
      image: 'https://i.pinimg.com/564x/f7/22/2d/f7222d050256d6e7f7f089b6b4181f73.jpg',
      price: 28000
    },
    {
      id: Math.random(1, 100),
      title: 'Tengen toppa gurren lagann',
      image: 'https://i.pinimg.com/564x/40/32/12/4032120f3939a544f3bd1c4dbab8be1d.jpg',
      price: 35000
    },
    {
      id: Math.random(1, 100),
      title: 'One Piece',
      image: 'https://i.pinimg.com/564x/71/fa/77/71fa7797a69ef379730b64e72d3b2d9f.jpg',
      price: 35000
    },
    {
      id: Math.random(1, 100),
      title: 'Jojos bizarre adventures',
      image: 'https://i.pinimg.com/564x/8c/b3/29/8cb32937d0359a9e161108395f251765.jpg',
      price: 35000
    },




  ]



  //----------ARRAYS GENEROS----------------------------------------

  /*ARRAY ROMCOM */
  const romcomArr = [
    {
      title: 'Kaguya-sama: Love Is War',
      img: 'https://i.pinimg.com/564x/1c/58/4c/1c584c6ea57839c5df837fae7b62ab4b.jpg',
      n_caps: 281,
      tomos: 28,
    },
    {
      title: 'Lovely Complex',
      img: 'https://i.pinimg.com/564x/ab/6e/4d/ab6e4dcf47868e6ca01467d37bbf9551.jpg',
      n_caps: '?',
      tomos: 17

    },
    {
      title: 'Hori-san to Miyamura-kun',
      img: 'https://i.pinimg.com/564x/91/f1/62/91f162d9ea3b95d601f55cc7c6dd69d8.jpg',
      n_caps: '?',
      tomos: 16
    },
  ]

  /*ARRAY SEINEN */

  const seinenArr = [
    {
      title: 'Berserk',
      img: 'https://i.pinimg.com/564x/8b/17/4b/8b174ba1c0efbdaeeeaf634de75666d6.jpg',
      n_caps: 364,
      tomos: 41,
    },
    {
      title: 'Vagabond',
      img: 'https://i.pinimg.com/564x/b0/16/27/b016270100d78ba834f9c33be7662532.jpg',
      n_caps: '?',
      tomos: 37

    },
    {
      title: 'Vinland Saga',
      img: 'https://i.pinimg.com/564x/f0/a9/5b/f0a95be675b103b99ad15ae470bbea38.jpg',
      n_caps: 175,
      tomos: 24
    },
  ]

  /*Array Shonen */

  const ShonenArr = [
    {
      title: 'One piece',
      img: 'https://i.pinimg.com/564x/93/94/74/9394748d58e086d83ab1f55abaaff5c9.jpg',
      n_caps: 1071,
      tomos: 104,
    },
    {
      title: 'Naruto',
      img: 'https://i.pinimg.com/564x/00/a7/b9/00a7b9795e9315cf37a302719c5f6266.jpg',
      n_caps: '?',
      tomos: 72

    },
    {
      title: 'Bleach',
      img: 'https://i.pinimg.com/564x/d9/fc/fe/d9fcfecd292a81ec3fc7101f7737a34e.jpg',
      n_caps: 686,
      tomos: 74
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

      {/*NOVEDADES */}
      
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

      {/*IMAGEN*/}

      <div style={{
        display:'flex',
        width:'100%',
        marginBottom:'2rem',
        maxHeight:'500px'
        
      }}>
        <img src='https://i.pinimg.com/564x/5e/d8/48/5ed848c61204f2283a8f30064f6ef796.jpg' 
        style={{
        objectFit:'cover',
        width:'100%',

        }}/>
      </div>
      <div className='generesContainer'>
        <div className='titleGeneres'>
          <span style={{ color: 'gray', fontWeight: 500 }}>Lo mejor de cada mundo</span>
          <span className='title'>Generos</span>
        </div>

        <div className='generes-Body'>
          <div className='genereSlide'>
            <div className='generecard romcomCard'>
              <div>
                <span>Romcom</span>
                <MdNavigateNext />
              </div>
              <div style={{opacity:0}}>
                <span>Lorem ipsum bla bla bla blablabla</span>
              </div>
            </div>
            <div className='genereList '>
              {
                romcomArr.map((romcom) => (
                  <div className='genereListCard'>
                    <div className='generelistImage'>
                      <img src={romcom.img} />

                    </div>
                    <div className='infogenerelist'>
                      <div>
                        <span className='titleCardgeneres'>{romcom.title}</span>
                      </div>
                      <div style={{
                        position:'absolute',
                        bottom:'10px',
                        left:'10px',
                        display:'flex',
                        flexDirection:'column'
                        }}>
                        <span>Tomos: {romcom.tomos}</span>
                        <span>Capitulos: {romcom.n_caps}</span>
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
          <div className='genereSlide'>
            <div className='generecard seinenCard'>
              <div>
                <span>Seinen</span>
                <MdNavigateNext />
              </div>
              <div style={{opacity:0}}>
                <span>Lorem ipsum bla bla bla blablabla</span>
              </div>
            </div>
            <div className='genereList '>
              {
                seinenArr.map((romcom) => (
                  <div className='genereListCard'>
                    <div className='generelistImage'>
                      <img src={romcom.img} />

                    </div>
                    <div className='infogenerelist'>
                      <div>
                        <span className='titleCardgeneres'>{romcom.title}</span>
                      </div>
                      <div style={{
                        position:'absolute',
                        bottom:'10px',
                        left:'10px',
                        display:'flex',
                        flexDirection:'column'
                        }}>
                        <span>Tomos: {romcom.tomos}</span>
                        <span>Capitulos: {romcom.n_caps}</span>
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
          <div className='genereSlide'>
            <div className='generecard shonenCard'>
              <div>
                <span>Shonen</span>
                <MdNavigateNext />
              </div>
              <div style={{opacity:0}}>
                <span>Lorem ipsum bla bla bla blablabla</span>
              </div>
            </div>
            <div className='genereList '>
              {
                ShonenArr.map((romcom) => (
                  <div className='genereListCard'>
                    <div className='generelistImage'>
                      <img src={romcom.img} />

                    </div>
                    <div className='infogenerelist'>
                      <div>
                        <span className='titleCardgeneres'>{romcom.title}</span>
                      </div>
                      <div style={{
                        position:'absolute',
                        bottom:'10px',
                        left:'10px',
                        display:'flex',
                        flexDirection:'column'
                        }}>
                        <span>Tomos: {romcom.tomos}</span>
                        <span>Capitulos: {romcom.n_caps}</span>
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  )
}
