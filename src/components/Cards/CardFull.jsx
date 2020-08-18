import React, { useEffect, useState } from "react"
import Card from "./Card"
import Axios from "axios"
import { useTitle } from "../../utils/hooks/useTitle";

import CardMobile from "./CardMobile";
import { useWidth } from "../../utils/hooks/useWidth";
import { useGetImg } from "../../utils/hooks/useGetImg";

const CardFull = ({category, tipo, arrShows, genre}) => {
 
    /* esto es un cuastom hook*/
    const title = useTitle(tipo, category)
    const [isMobile] = useWidth()
    const [urlImg, isLoading, isError] = useGetImg(3)

    
    
    return ( 
        <div>
            
            {genre ? <h4>Género: {genre}</h4> : <h4>{title}</h4>}
            <div className="cards-container" >
    
                {arrShows && arrShows.map( (item, i) => {
                    
                    return ( 
                        <>
                        {
                            isMobile 
                            ? <CardMobile key={i} show={item} tipo={tipo} urlMain={urlImg} urlFinal={item.poster_path}/> 
                            : <Card key={i} show={item} tipo={tipo} urlMain={urlImg} urlFinal={item.poster_path}/>
                        }
                        </>
                        )
                    })}
                
               
                
            </div>
        </div>
    )
}

export default CardFull