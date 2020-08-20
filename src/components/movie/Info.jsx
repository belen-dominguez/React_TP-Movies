import React from 'react'
import VoteStars from './VoteStars'
import External from "./External"
import { Link, useParams } from 'react-router-dom'
import { useWidth } from '../../utils/hooks/useWidth'
import { useGet } from '../../utils/hooks/useGet'



const Info =({tipo, urlImg, id}) => { 
    const {from, uid} = useParams()
    const [isMobile] = useWidth()
    


    const {URL_BASE} = require("../../const/api")
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/${from}/${uid}?api_key=${process.env.REACT_APP_API_KEY}`, "info")
    const [,,,external] = useGet(`https://api.themoviedb.org/3/${from}/${uid}/external_ids?api_key=${process.env.REACT_APP_API_KEY}`, "linksExternos")

    


    return (
        <div>
        <div className="info-container" 
        style={isMobile ?{flexDirection:"column", width: "90%", marginTop: "4rem"} : null}>
            
            {results && (
                <>
            <img className="info-img" 
            src={`${urlImg.base_url}${urlImg.size}${results.poster_path}`} alt=""
            style={isMobile ?{ maxWidth: "100%", marginBottom: "2rem"} : null}/>
            <div className="item-info"
            style={isMobile ?{ width: "100%", fontSize: "1.5rem"} : null}>
                
                {from == "tv" ? <h4>{results.name}</h4> :<h4> {results.title} </h4> }
               
               {results.vote_average && <VoteStars  numero={results.vote_average} icon="star"  />}
                <p>{results.overview}</p>

                {from == "tv" ?
                    <>
                    <p>Temporadas: {results.number_of_seasons}</p>
                    <p>Episodios: {results.number_of_episodes}</p>
                    </>
                    :
                    <>
                    <p>Presupuesto: {results.budget}</p>
                    <p>Recaudación: {results.revenue}</p>
                    </>
                }
                <p>Generos: {results.genres && results.genres.map((item, i) =>{
                    // return  <span>{item.name} </span>
                    return (
                        <Link key={i} to={`/genre/${from}/${item.name}`}>
                            <span>{item.name} </span>
                        </Link>
                    )
                })}</p>
                <p>Produccion: {results.production_companies && results.production_companies.map((item,i) => {
                   return  <span key={i}>{item.name} </span>
                })}</p>
                <div>
                    {external && <External external={external} />}
                </div>
            </div>
            
            </>)}
        </div>
      
        </div>
    )
}

export default Info
