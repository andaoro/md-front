import React, { useEffect, useRef } from 'react'
import imgprueba from '../../img/1126211.jpg'
import './Slider.css'
export const Slider = () => {

    const slideShow = useRef(null)
    const slideshowtime = useRef(null)
    const controls = useRef(null)

    const sliderImages = [
        {
            id: 1,
            image: imgprueba,
            text: 'Capitulo 122'
        },
        {
            id: 2,
            image: imgprueba,
            text: 'Next'
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
                <div className='slide'>

                    {
                        sliderImages.map((slideimg)=>(
                            
                        ))
                    }
                    <a>
                        <img src={imgprueba} />
                    </a>
                    <div className='textoSlide'>
                        More Popular
                    </div>
                </div>
                <div className='slide'>
                    <a>
                        <img src='https://www.dogamanga.com/wp-content/uploads/2021/07/157606_520x520.jpg' style={{ objectFit: 'cover' }} />
                    </a>
                    <div className='textoSlide'>
                        More Popular
                    </div>
                </div>
                <div className='slide'>
                    <a>
                        <img src={imgprueba} />
                    </a>
                    <div className='textoSlide'>
                        More Popular
                    </div>
                </div>
                <div className='slide'>
                    <a>
                        <img src={'https://m.media-amazon.com/images/I/51m9ctmcRnL._AC_SY780_.jpg'} />
                    </a>
                    <div className='textoSlide'>
                        More Popular
                    </div>
                </div>


            </div>
            <div className='controles' ref={controls}>
                <button onClick={() => {
                    siguiente()
                }}>
                    derecha
                </button>
                <button onClick={() => {
                    anterior()
                }}>
                    izquierda
                </button>
            </div>
        </div>
    )
}
