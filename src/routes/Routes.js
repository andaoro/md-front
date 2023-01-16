import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../Login/Login'
import { Main } from '../Main/Main'
import { Profile } from '../ProfileOptions/Profile'
import { LandingPage } from '../pruebas/landingprueba/LandingPage'
import { Register } from '../Register/Register'

export const RoutesMain = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/comics' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}
