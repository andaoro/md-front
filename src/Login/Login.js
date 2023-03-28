import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export const Login = () => {
    //useState for Login
    const [username, setusername] = useState('')
    const [errorUsername, seterrorUsername] = useState(false)
    const [password, setpassword] = useState('')
    const [errorPassword, seterrorPassword] = useState(false)
    const [erros, seterros] = useState('')
    //UseState for users
    const [Users, setUsers] = useState([])

    //Navegar entre rutas
    const navigate = useNavigate()



    const login = () =>{
        if(username === 'admin'){
            if(password == '1234'){
                navigate('/profile')
            }else{
                seterros('wrong username or password ')
            }
        }else{
            seterros('User not find')
        }
    }



    return (
        <div className='loginContainer'>
            <div className='loginCard'>
                <div className='loginform'>
                    <div className='formBody'>
                        <span className='logintext'>Username</span>
                        <input
                            type={'text'}
                            className={`formInput userError-${errorUsername}`}
                            value={username}
                            onChange={(e) => {
                                setusername(e.target.value)
                            }}
                            onBlur={() => {
                                if (username !== '') {
                                    seterrorUsername(false)
                                } else {
                                    seterrorUsername(true)
                                }
                            }}
                        />
                        {
                            errorUsername&&(
                                <span style={{color:'red',fontSize:'10px'}}>Username is required</span>
                            )
                        }
                    </div>
                    <div className='formBody'>
                        <span className='logintext'>Password</span>
                        <input
                            type={'password'}
                            className={`formInput usepassword-${errorPassword}`}
                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }}
                            onBlur={() => {
                                if (password !== '') {
                                    seterrorPassword(false)
                                } else {
                                    seterrorPassword(true)
                                }
                            }}
                        />
                        {
                            errorPassword&&(
                                <span style={{color:'red',fontSize:'10px'}}>Password is required</span>
                            )
                        }
                    </div>
                    {/* <div className='loginOtherOptions'>
                        <span onClick={()=>navigate('/register')}>Register</span>
                        <span onClick={()=>navigate('/remeberpassw')}>Forgot Password?</span>
                    </div> */}
                    <div 
                        className='btnlogin'
                        onClick={()=>login()}
                    >
                        <span>Login</span>
                    </div>
                    {
                        erros !== ''&&(
                            <span>{erros}</span>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
