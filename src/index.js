import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './Login/Login';
import { Gifs } from './pruebas/gifsCurs/Gifs';
import { GridPage } from './pruebas/GridPage/GridPage';
import { LandingPage } from './pruebas/landingprueba/LandingPage';
import { Succeful } from './pruebas/Succeful';
import { RoutesMain } from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RoutesMain />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
