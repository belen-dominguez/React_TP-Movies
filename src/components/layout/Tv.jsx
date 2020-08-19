import React, { useEffect, useState } from "react"
import Axios from "axios"
import CardContainer from "../Cards/CardContainer"
import {  Link} from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Tv = () => {
    const myApiKey = "ea62e617867b87697a8db24515b62c23"

    const categorias = [
        {name: "popular", title: "Series populares", media_type: "tv",  resultados: []}, 
        {name: "top_rated", title: "Series con mejores criticas", media_type: "tv", resultados: []}, 
        {name:"on_the_air",title: "Series al aire", media_type: "tv", resultados: [] } 
    ]
    const [listado, setListado] = useState(categorias)
    


    useEffect(() => {

        listado.forEach((categoria) => {
            
            Axios
            .get(`https://api.themoviedb.org/3/tv/${categoria.name}?api_key=${myApiKey}`)
            .then(resp => {
                
                categoria.resultados = resp.data.results

                setListado([
                    ...listado,
                    {...categoria} 
                ])

                
            })
        })
        
    },[])

    

    return (
        <div>
            {listado && listado.map((item, i) => {
               
               return ( <div key={i}>
                            <Link to={`/tv/${item.name}`}>
                              <h4 className="title-category"> {item.title} <BsArrowRightShort className="title-arrow" /></h4>
                            </Link> 
                            <CardContainer tipo={item.media_type} arrShows={item.resultados} />
                        </div>
                        )
            })}

         </div>
    )
}

export default Tv 