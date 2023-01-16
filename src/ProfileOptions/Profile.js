import React, { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './Profile.css'
import { ChromePicker } from 'react-color';

export const Profile = () => {
    const [color, setcolor] = useState('#FFFFFF')

    const arrprueba =[]

    for (let index = 0; index < 150; index++) {
        arrprueba.push(1) 
    }

    console.log(arrprueba)


  return (
    <div>
        <Navbar/>
        <div className='container-Profile'>
            <div className='profile-personalization'>
                <div className='Profile-BannerSelected'>
                    <span className='profile-title'>Seleccione Banner de usuario</span>
                    <div className='Profile-BannerGrid'>
                        {
                            arrprueba.map((banner)=>(
                                <div className='bannerImages'>

                                </div>
                            ))
                        }
                    </div>
                </div>
                <hr className='salto-linea'/>
                <div className='Profile-BannerSelected'>
                    <span className='profile-title'>Seleccione icono de usuario</span>
                    <div className='Profile-BannerGrid'>
                        {
                            arrprueba.map((banner)=>(
                                <div className='bannerImages'>

                                </div>
                            ))
                        }
                    </div>
                </div>
                <hr className='salto-linea'/>
                <div className='profile-ColorCard'>
                    <span>Color opciones de perfil</span>
                    <ChromePicker
                    color={color}
                    onChange={updateColor => setcolor(updateColor.hex)}
                    />
                </div>

            </div>
            <div className='Profile-card-user'>

            </div>
        </div>
    </div>
  )
}
