import React, { useEffect, useState } from 'react'
import './suceful.css'
import image from '../img/1126211.jpg'

export const Succeful = () => {
    const [modalview, setmodalview] = useState(false)
    const [btndisabled, setbtndisabled] = useState(false)


    useEffect(() => {
      if(modalview == true){
        setTimeout(() => {
            setmodalview(false)
            setbtndisabled(false)
        }, 2000);
      }
    }, [modalview])
    
  return (
    <div className='container'>
        <div className='btnClick'
        onClick={()=>{
            if(btndisabled == false){
                setmodalview(!modalview)
                setbtndisabled(true)
            }
            
        }}
        >
            <span >CLICK</span>
        </div>
        <div className={`successModal  s-${modalview}`}>
            <div className='card'>
                <img src={image} className='cardImage'/>
                <div className='infocard'>
                    <div className='infoPrincipal'>
                        <span>ABC123</span>
                        <span>lorem ipsum</span>
                    </div>
                    <span>Carrito</span>
                </div>
            </div>
        </div>
    </div>
  )
}
