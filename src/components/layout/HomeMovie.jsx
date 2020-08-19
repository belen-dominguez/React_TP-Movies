import React from 'react'
import {   BrowserRouter as Router,  Switch,  Route,  Link, useRouteMatch, useParams} from "react-router-dom";
import { useEffect, useState  } from 'react';
import Axios from 'axios';
import MovieNav from "../navigation/MovieNav"
import Info from "../movie/Info"
import Reparto from "../movie/Reparto"
import Episodios from "../movie/Episodios"
import Similares from "../movie/Similares"
import Videos from "../movie/Videos"
import { useGetImg } from '../../utils/hooks/useGetImg';


const HomeMovie = ({tipo, id}) => { /* tipo es movie o tv*/
    const myApiKey = "ea62e617867b87697a8db24515b62c23"
    const [results, setResults] = useState([])

    let { path, url } = useRouteMatch();

    const {from, uid} = useParams()
   

    let sectionL = url.split("/")

    const [urlImg, isLoading, isError] = useGetImg(4) 
    

  

    useEffect(() => { 
        Axios
        .get(`https://api.themoviedb.org/3/${from}/${uid}?api_key=${myApiKey}`)
        .then(resp => {
            setResults(resp.data)
        })

    
    },[]) 
    
    return (
        <div>
            <div className="hero" style={results && results.backdrop_path != null  ?{ backgroundImage: `url(${urlImg.base_url}/original/${results.backdrop_path})` } : {backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            </div>

                <MovieNav url={url} id={id}  tipo={tipo}/>

                {/* <Info tipo={tipo} id={id} urlImg={urlImg} /> */}
             {sectionL[3] === "info" &&   <Info tipo={tipo} id={id} urlImg={urlImg} />}
             {sectionL[3] === "reparto" &&   <Reparto   />}
             {sectionL[3] === "videos" &&   <Videos   />}
             {sectionL[3] === "episodios" &&   <Episodios  urlImg={urlImg}  />}
             {sectionL[3] === "similares" &&   <Similares urlImg={urlImg}  />} 
             

           
        </div>
    )
}

export default HomeMovie
