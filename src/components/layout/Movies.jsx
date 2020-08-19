import React, { useState, useEffect } from "react"
import Axios from "axios"
import {  Link} from "react-router-dom";
import CardContainer from "../Cards/CardContainer"
import { BsArrowRightShort } from "react-icons/bs";


const Movies = () => {
    const myApiKey = "ea62e617867b87697a8db24515b62c23"

    const categorias = [
        {name: "popular", title: "Peliculas populares",media_type: "movie", resultados: []}, 
        {name: "top_rated", title: "Peliculas con mejores criticas",media_type: "movie", resultados: []}, 
        {name:"upcoming",title: "Peliculas a estrenarse",media_type: "movie", resultados: [] }, 
        {name:"now_playing",title: "Peliculas en cines",media_type: "movie", resultados: []}
    ]
    const [listado, setListado] = useState(categorias)
    


    useEffect(() => {

        listado.forEach((categoria) => {
            
            Axios
            .get(`https://api.themoviedb.org/3/movie/${categoria.name}?api_key=${myApiKey}`)
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
        <div className="show-results">
            {listado && listado.map((item, i) => {
               return ( <div key={i}>
                            <Link to={`/movie/${item.name}`}>
                             <h4 className="title-category"> {item.title} <BsArrowRightShort className="title-arrow" /></h4>
                            </Link> 
                            <CardContainer  tipo={item.media_type} arrShows={item.resultados} />
                        </div>
                        )
            })}

            
        
        </div> 
    )
}

export default Movies