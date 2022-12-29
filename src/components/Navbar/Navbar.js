import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import './Navbar.css'

export const Navbar = () => {
  const [movileTogle, setmovileTogle] = useState(false)
  return (
    <div className='containerNavbar'>
      <div className={`bodyNavbar visible-${movileTogle}`}>
        <div>
          <img src='https://i.pinimg.com/564x/65/d6/f6/65d6f6e017cca30c13310f44ab1ea560.jpg' alt='a' className='imageBodyNavbar' />
        </div>

        <div className={`optionsbanner `}>
          <span >HOME</span>
          <span>item1</span>
          <span>item2</span>
          <span>item3</span>
        </div>

      </div>
      <div className='optionsMenuMovile'>
        
          <GiHamburgerMenu color='white' size={25} className='movileMenuTogle' cursor={'pointer'} 
          onClick={()=>{
            setmovileTogle(!movileTogle)
          }}/>
        
        
          <AiOutlineShoppingCart size={25} color={'white'} cursor={'pointer'} />
        
      </div>



    </div>
  )
}
