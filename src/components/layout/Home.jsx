import React, {useState, useEffect} from "react"
import axios from "axios";
import {  Link} from "react-router-dom";
import CardContainer from "../Cards/CardContainer"
import { FiFilter } from "react-icons/fi";


const Home = () => {
    const myApiKey = "ea62e617867b87697a8db24515b62c23"
    const [results, setResults ]= useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTV, setTrendingTV] = useState([])
    

    
    
    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${myApiKey}`)
        .then((resp) => {
            console.log(resp)
            setResults(resp.data.results)
        })
    }, [ ])


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
               <h4>Peliculas que son Tendencia</h4>
           </Link>
           <CardContainer tipo="movie" arrShows={trendingMovies} />

            <Link to="/tv/trending">
              <h4>  Series que son Tendencia</h4>
            </Link>
            <CardContainer tipo="tv" arrShows={trendingTV} />


        </div>
    )
}

export default Home