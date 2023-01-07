import React, { useEffect, useRef } from 'react'
import imgprueba from '../../img/1126211.jpg'
import { GrFormNext, GrFormPrevious,GrNext } from "react-icons/gr";
import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";
import './Slider.css'
export const Slider = ({arraySlider}) => {

    const slideShow = useRef(null)
    const slideshowtime = useRef(null)
    const controls = useRef(null)

    console.log(arraySlider)

    const sliderImages = [
        {
            id: 1,
            image: imgprueba,
            text: 'Capitulo 122',
            title:'Chainsaw'
        },
        {
            id: 2,
            image: imgprueba,
            text: 'Next',
            title:'Prueba'

        },
    ]


    const siguiente = () => {
        if (slideShow.current.children.length > 0) {
            const primerElemento = slideShow.current.children[0];

            slideShow.current.style.transition = `500ms ease-in-out all`;

            const tamanoSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transform = `translateX(-${tamanoSlide}px)`
            const transicion = () => {
                slideShow.current.style.transition = 'none';
                slideShow.current.style.transform = `translateX(0)`;

                slideShow.current.appendChild(primerElemento)

                slideShow.current.removeEventListener('transitionend', transicion)
            }

            slideShow.current.addEventListener('transitionend', transicion);
        } else {
            console.log(slideShow.current.children.length)
        }
    }

    const anterior = () => {
        if (slideShow.current.children.length > 0) {
            const ultimoElemento = slideShow.current.children[slideShow.current.children.length - 1]
            slideShow.current.insertBefore(ultimoElemento, slideShow.current.firstChild)
            const tamanoSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transition = 'none';
            slideShow.current.style.transform = `translateX(-${tamanoSlide}px)`;

            setTimeout(() => {
                slideShow.current.style.transition = '500ms ease-in-out all';
                slideShow.current.style.transform = `translateX(0)`

            }, 30);
        }
    }

    useEffect(() => {
        /* slideshowtime.current = setInterval(() => {
            siguiente()
        }, 1000); */

        slideshowtime.current = setInterval(() => {
            siguiente()
        }, 5000)


        controls.current.addEventListener('mouseenter', () => {
            clearInterval(slideshowtime.current)
        })

        controls.current.addEventListener('mouseleave', () => {
            slideshowtime.current = setInterval(() => {
                siguiente()
            }, 5000)
        })

    }, [])





    return (
        <div className='contenedorPrincipal'>
            <div className='contenedorSlideShow' ref={slideShow}>
                {
                    arraySlider.map((slideimg) => (
                        <div className='slide' key={slideimg.id}>
                            <div className='slideImages'>
                                <img src={slideimg.image}/>
                            </div>
                            <div className='textoSlide'>
                                <span>{slideimg.title}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='controles' ref={controls}>
                <span onClick={() => {
                    siguiente()
                }}>
                    <MdNavigateNext size={50} color='white'/>
                </span>
                <span onClick={() => {
                    anterior()
                }}>
                    <MdNavigateBefore size={50} color='white' />
                </span>
            </div>
        </div>
    )
}
