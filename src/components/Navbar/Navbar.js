import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

import './Navbar.css'

export const Navbar = () => {
  const [movileTogle, setmovileTogle] = useState(false)
  const [userOptionesToggle, setuserOptionesToggle] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='containerNavbar'>
      <div className={`bodyNavbar visible-${movileTogle}`}>
        <div>
          <img src='https://i.pinimg.com/564x/65/d6/f6/65d6f6e017cca30c13310f44ab1ea560.jpg' alt='a' className='imageBodyNavbar' onClick={()=>{navigate('/')}}/>
        </div>

        <div className={`optionsbanner `}>
          <span onClick={() => { navigate('/') }}>HOME</span>
          <span onClick={() => { navigate('/mangas') }}>MANGAS</span>
          <span onClick={() => { navigate('/comics') }}>COMICS</span>
        </div>

      </div>
      <div className='optionsMenuMovile'>

        <GiHamburgerMenu color='white' size={25} className='movileMenuTogle' cursor={'pointer'}
          onClick={() => {
            setmovileTogle(!movileTogle)
          }} />

        <div className='actionsNavbar'>
          <AiOutlineShoppingCart size={25} color={'white'} cursor={'pointer'} />
          <div className='userCircle'
            onClick={() => {
              setuserOptionesToggle(true)
            }}
          >
            <div>
              <img src='https://i.pinimg.com/736x/6d/96/7b/6d967b7a967812eca7323ecbc50994ba.jpg' style={{
                borderRadius: '100%'
              }} />

            </div>

            <div className={`userOptions-cardModal userOptions-visibility-${userOptionesToggle}`}>
              <div className='userOptions-cardModal-Body'>
                {/*IMAGENES DE USUARIO  */}
                <div className='cardModal-ImagesUser'>
                  <div className='cardModal-ImagesUser-Banner'>
                    <img src='https://i.pinimg.com/564x/15/5e/f9/155ef994a52e5569e6f2ea2fe818de54.jpg' />
                    <div className='cardModal-ImagesUser-Icon'>
                      <img src='https://i.pinimg.com/736x/6d/96/7b/6d967b7a967812eca7323ecbc50994ba.jpg' style={{
                        borderRadius: '100%',
                      }} />
                    </div>
                  </div>
                </div>

                <div className='cardModal-Username'>
                      {/*aqui deberia ir el username */}
                      <span>andaoro1</span>
                </div>

                <div className='Actions-cardModal-Loged'>
                      <div>
                        <span>Configuracion</span>
                      </div>
                      <div>
                        <span 
                        onClick={()=>{
                          navigate('/profile')
                        }}
                        >Mi perfil</span>
                      </div>
                </div>

                <div className='Actions-cardModal-Loged-closed'>
                      <div>
                        <span>Salir</span>
                      </div>
                </div>
              </div>
            </div>
          </div>


        </div>


      </div>


      <div
        className={`userOptions-Background userOptions-visibility-${userOptionesToggle}`}
        onClick={() => {
          setuserOptionesToggle(false)
        }}
      >

      </div>



    </div>
  )
}
