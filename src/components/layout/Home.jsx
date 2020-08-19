import React, {useState, useEffect} from "react"
import axios from "axios";
import {  Link} from "react-router-dom";
import CardContainer from "../Cards/CardContainer"
import { FiFilter } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { useGetResults } from "../../utils/hooks/useGetResults";



const Home = () => {
    const myApiKey = "ea62e617867b87697a8db24515b62c23"
    const [results, setResults ]= useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTV, setTrendingTV] = useState([])
    //const [results, isLoading, isError] = useGetResults("trendingAll")
    

    
    console.log(results)
    
    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${myApiKey}`)
        .then((resp) => {
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