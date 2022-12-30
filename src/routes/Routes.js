import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../Login/Login'
import { Main } from '../Main/Main'
import { LandingPage } from '../pruebas/landingprueba/LandingPage'
import { Register } from '../Register/Register'

export const RoutesMain = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/mangas' element={<Register/>}/>
            <Route path='/comics' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}
