import React, { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './Profile.css'
import { SketchPicker } from 'react-color';
import { arrayBanners, arrayIcons } from './BannerImages'

export const Profile = () => {
    const [color, setcolor] = useState('#FFFFFF')
    const [bannerImg, setbannerImg] = useState('')
    const [iconImg, seticonImg] = useState('')
    const [colorFontCard, setcolorFontCard] = useState('#000000')

    const saveProfile = () =>{
        
    }


    return (
        <div>
            <Navbar />
            <div className='container-Profile'>
                <div className='profile-personalization'>
                    <div className='Profile-BannerSelected banners'>
                        <span className='profile-title'>Seleccione Banner de usuario</span>
                        <div className='Profile-BannerGrid'>
                            {
                                arrayBanners.map((banner, index) => (
                                    <div className='bannerImages' key={index} onClick={() => setbannerImg(banner)}>
                                        <img src={banner} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <hr className='salto-linea' />
                    <div className='Profile-BannerSelected icons'>
                        <span className='profile-title'>Seleccione icono de usuario</span>
                        <div className='Profile-BannerGrid'>
                            {
                                arrayIcons.map((banner, index) => (
                                    <div className='bannerImages' key={index} onClick={() => seticonImg(banner)}>
                                        <img src={banner} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <hr className='salto-linea' />
                    <div className='profile-ColorCard'>
                        <div>
                            <span>Color opciones de perfil</span>
                            <SketchPicker
                                color={color}
                                onChange={updateColor => setcolor(updateColor.hex)}
                                width='30%'
                                height='50%'
                            />
                        </div>
                        <div>
                            <span>Color opciones de perfil</span>
                            <SketchPicker
                                color={colorFontCard}
                                onChange={updateColor => setcolorFontCard(updateColor.hex)}
                                width='30%'
                                height='50%'
                            />
                        </div>

                    </div>
                    <hr className='salto-linea' />
                    <div className='Actions-UserProfile'>
                        <div className='buttons-Actions'>
                            <button className={`btnSave`}>
                                <span>
                                    Guardar
                                </span>
                            </button>
                            <button className={`btncancel`}>
                                <span>
                                    Cancelar
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Profile-card-user'>
                    <div className='card-User' style={{ backgroundColor: color }}>
                        <div className='card-User-Images'>
                            <div className='bannerImage-cardUser'>
                                <img src={bannerImg || arrayBanners[0]} />
                            </div>
                            <div className='iconImage-cardUser'>
                                <img src={iconImg || arrayIcons[0]} />
                            </div>
                        </div>
                        <div className='card-User-Body' >
                            <div className='inputRowCard'>
                                <input type={'text'} placeholder='Usuario' className='inputCardUser' style={{color:colorFontCard}}/>
                                <input type={'text'} placeholder='Nro.Contacto' className='inputCardUser' style={{color:colorFontCard}}/>
                            </div>
                            <div className='inputRowCard'>
                                <input type={'number'} placeholder='Edad' className='inputCardUser' style={{color:colorFontCard}}/>
                                <input type={'email'} placeholder='Correo' className='inputCardUser' style={{color:colorFontCard}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
