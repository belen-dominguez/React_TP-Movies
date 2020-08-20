import React, { useState, useEffect } from "react"
import Axios from "axios"
import {  Link} from "react-router-dom";
import CardContainer from "../Cards/CardContainer"
import { BsArrowRightShort } from "react-icons/bs";


const Movies = () => {
    const {URL_BASE} = require("../../const/api")
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
            .get(`https://api.themoviedb.org/3/movie/${categoria.name}?api_key=${process.env.REACT_APP_API_KEY}`)
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