import React from 'react'
import './Footer.css'
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineUser,AiOutlineMail } from "react-icons/ai";


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='containerInfo'>
            <div className='info'>
                <div>
                    <GiSmartphone size={40} color={'white'}/>
                </div>
                <div className='textInfo'>
                    <span style={{textTransform:'uppercase',}}>Contáctanos</span>
                    <span style={{textDecoration:'underline', fontWeight:200,fontSize:'15px'}}>3012574242</span>
                </div>
            </div>

            <div className='info'>
                <div>
                    <AiOutlineMail size={40} color={'white'}/>
                </div>
                <div className='textInfo'>
                    <span style={{textTransform:'uppercase',}}>Email</span>
                    <span style={{textDecoration:'underline', fontWeight:200,fontSize:'15px'}}>andaoro1@gmail.com</span>
                </div>
            </div>

            <div className='info'>
                <div>
                    <AiOutlineUser size={40} color={'white'}/>
                </div>
                <div className='textInfo'>
                    <span style={{textTransform:'uppercase',}}>Andres orozco</span>
                    <span style={{textDecoration:'underline', fontWeight:200,fontSize:'15px'}}>Github</span>
                </div>
            </div>
        </div>
    </div>
  )
}
