import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './Profile.css'
import { SketchPicker } from 'react-color';
import { arrayBanners, arrayIcons } from './BannerImages'
import { json, useNavigate } from 'react-router-dom';


export const Profile = () => {
    const [color, setcolor] = useState('#FFFFFF') //Color de fondo de la tarjeta de usuario
    const [bannerImg, setbannerImg] = useState(arrayBanners[0]) //Banner de la tarjeta
    const [iconImg, seticonImg] = useState(arrayIcons[0]) //icono de la tarjeta
    const [colorFontCard, setcolorFontCard] = useState('darkblue') //Color de texto de los inputs de la tarjeta (usuario,nro,edad,correo)

    //Inputs de tarjeta 

    const [usuario, setusuario] = useState('andaoro1')
    const [contacto, setcontacto] = useState('')
    const [edad, setedad] = useState('')
    const [email, setemail] = useState('')
    //Navigate
    const navigate = useNavigate()

    //LocalStorage usuario
    const usuarioData = JSON.parse(localStorage.getItem('Usuario'))

    useEffect(() => {
      if(usuarioData){
        setcontacto(usuarioData.strContacto)
        setedad(usuarioData.intEdad)
        setemail(usuarioData.strEmail)
        setbannerImg(usuarioData.bannerImg)
        seticonImg(usuarioData.iconImg)
        setcolor(usuarioData.backgroundColor)
        setcolorFontCard(usuarioData.fontColor)
      }
    }, [])
    

    

    const saveProfile = () =>{
        if(email !== ''){
            let datosTercero = {
                strUsuario:usuario,
                strContacto:contacto,
                intEdad:edad,
                strEmail:email,
                backgroundColor:color,
                fontColor:colorFontCard,
                bannerImg,
                iconImg
            }

            localStorage.setItem('Usuario',JSON.stringify(datosTercero))
            navigate('/md-front')
        }
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
                            <button className={`btnSave`}onClick={()=>saveProfile()}>
                                <span>
                                    Guardar
                                </span>
                            </button>
                            <button className={`btncancel`} >
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
                                <img src={bannerImg} />
                            </div>
                            <div className='iconImage-cardUser'>
                                <img src={iconImg} />
                            </div>
                        </div>
                        <div className='card-User-Body' >
                            <div className='inputRowCard'>
                                <input type={'text'} placeholder='Usuario' className='inputCardUser' style={{color:colorFontCard}}
                                value={usuario} onChange={(e)=>setusuario(e.target.value)} readOnly={true}
                                />
                                <input type={'text'} placeholder='Nro.Contacto' className='inputCardUser' style={{color:colorFontCard}}
                                value={contacto} onChange={(e)=>setcontacto(e.target.value)}
                                />
                            </div>
                            <div className='inputRowCard'>
                                <input type={'number'} placeholder='Edad' className='inputCardUser' style={{color:colorFontCard}}
                                value={edad} onChange={(e)=>setedad(e.target.value)}
                                />
                                <input type={'email'} placeholder='Correo' className='inputCardUser' style={{color:colorFontCard}}
                                value={email} onChange={(e)=>setemail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
