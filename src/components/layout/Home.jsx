import React, {useState, useEffect} from "react"
import {  Link} from "react-router-dom";
import CardContainer from "../Cards/CardContainer"
import { BsArrowRightShort } from "react-icons/bs";
import { useGet } from "../../utils/hooks/useGet";



const Home = () => {
    const {URL_BASE} = require("../../const/api")
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTV, setTrendingTV] = useState([])
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`, "home")
    
    
    useEffect(() => {
      
      
              let tv =  results.filter(item => {
                    return item.media_type == "tv"
                })
               let movies = results.filter(item => {
                    return item.media_type == "movie"
                })
        
                setTrendingMovies(movies)
                setTrendingTV(tv)
        
    },[results])

    
    
    
    return (
        <div>
           
           <Link to="/movie/trending">
               <h4 className="title-category">Peliculas que son Tendencia <BsArrowRightShort className="title-arrow" /></h4>
           </Link>
           <CardContainer tipo="movie" arrShows={trendingMovies} />

            <Link to="/tv/trending">
              <h4 className="title-category">  Series que son Tendencia <BsArrowRightShort className="title-arrow" /></h4>
            </Link>
            <CardContainer tipo="tv" arrShows={trendingTV} />


        </div>
    )
}

export default Home