import React, { useEffect, useState } from 'react'
import './Register.css'
import { bannerimages } from './images'
export const Register = () => {
    const [registerView, setregisterView] = useState(true)

    const [dni, setdni] = useState('')
    const [name, setname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const [bannerimg, setbannerimg] = useState('')
    const [iconimg, seticonimg] = useState('')

    
    

    return (
        <div className='registerContainer'>
            <div className='registerData'>
                <div className='registerOptions'>
                    <span
                        className={`${registerView ? 'registerSelectOption' : 'wait'}`}
                        onClick={() => setregisterView(true)}
                    >
                        Data
                    </span>
                    <span
                        className={`${!registerView ? 'registerSelectOption' : 'wait'}`}
                        onClick={() => setregisterView(false)}
                    >
                        Profile
                    </span>
                </div>
                {
                    registerView && (
                        <div className='registerForm'>
                            <div className='registerRowForm'>
                                <input 
                                type={'number'} 
                                placeholder='DNI' 
                                value={dni} 
                                onChange={(e)=>setdni(e.target.value)}
                                className={`registerInput`}
                                />
                                 <input 
                                type={'text'} 
                                placeholder='Name' 
                                value={name} 
                                onChange={(e)=>setname(e.target.value)}
                                className={`registerInput`}
                                />
                            </div>
                            <div className='registerRowForm'>
                                <input 
                                type={'text'} 
                                placeholder='Lastname' 
                                value={lastname} 
                                onChange={(e)=>setlastname(e.target.value)}
                                className={`registerInput`}
                                />
                                 <input 
                                type={'text'} 
                                placeholder='Email' 
                                value={email} 
                                onChange={(e)=>setemail(e.target.value)}
                                className={`registerInput`}
                                />
                            </div>
                            <div className='registerRowForm'>
                                <input 
                                type={'text'} 
                                placeholder='Username' 
                                value={username} 
                                onChange={(e)=>setusername(e.target.value)}
                                className={`registerInput`}
                                />
                                 <input 
                                type={'password'} 
                                placeholder='Password' 
                                value={password} 
                                onChange={(e)=>setpassword(e.target.value)}
                                className={`registerInput`}
                                />
                            </div>
                        </div>
                    )
                }
                {
                    !registerView && (
                        <div className='registerIcons'>
                            {
                                bannerimages.map((item)=>(
                                    <div className='cardIcons'
                                    onClick={()=>{
                                        setbannerimg(item.banner)
                                        seticonimg(item.icon)
                                    }}
                                    >
                                        <img src={item.icon}  className='registerBannerProfile'/>
                                        <img src={item.banner} style={{width:'100px'}} className='registerIconProfile'/>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }

                <div className='btnsregisterlogin'>
                    <span>Register</span>
                    <span>Login</span>
                </div>

            </div>

            <div className='registerbanner'>
                <div className='registerCard'>
                    <div className='registerbannerimgs'>
                        <img src={bannerimg} className='registerBanner'/>
                        <img src={iconimg} className='registerIcon'/>
                    </div>
                    <div className='registerbannerbody'>
                        <span>{username}<span style={{color:'gray',fontWeight:200}}>  #{dni}</span></span>
                        <div style={{marginTop:'20px', color:'#E5BA73'}}>
                            <span>{email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
