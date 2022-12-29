import axios from 'axios';
import React, { useState } from 'react'
import './Gifs.css'

export const Gifs = () => {

    const [arrImgs, setarrImgs] = useState([])
    
    const url = "https://api.giphy.com/v1/gifs/";
    const api_key = "1TNWElO17FIeYM1cJ5zbGV8uH3Y2tzSp"


    const search = (textSearch) =>{
        axios.get(url+'search?api_key='+api_key+`&q=${textSearch}`).then((response)=>{setarrImgs(response.data.data)}).catch((err)=>{console.log(err)})
    }


    return (
        <div>
            <input type={'text'} onKeyDown={(e)=>{
                if(e.key =='Enter'){
                    setarrImgs([])
                    search(e.target.value)
                }
            }}/>
            {
                arrImgs.length !== 0?
                (
                    arrImgs.map((gif)=>(
                        <img src={gif.images.original.url}/>
                    ))
                )
                :
                
                    <span>hola</span>
                
            }
            
        </div>
    )
}
