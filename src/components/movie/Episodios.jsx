import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { useWidth } from '../../utils/hooks/useWidth'

const Episodios = ({urlImg}) => {
    const {from, uid} = useParams()
    const myApiKey = "ea62e617867b87697a8db24515b62c23" 
    const [results, setResults] = useState([])
    const [totalSeason, setTotalSeason] = useState({})
    const [season, setSeason] = useState(1)
    const [temporadasAll, setTemporadasAll] = useState([])
    const [isMobile] = useWidth()

    useEffect(() => {
        /*can de temporadas*/
        Axios
        .get(`https://api.themoviedb.org/3/${from}/${uid}?api_key=${myApiKey}`)
        .then(resp => {
            
            setTotalSeason(resp.data.number_of_seasons)
        })
        /*info po temporada*/
        Axios
        .get(`https://api.themoviedb.org/3/${from}/${uid}/season/${season}?api_key=${myApiKey}`)
        .then(resp => {
            
            setResults(resp.data)
        })

    },[season])

   
   
    
   useEffect(() => {
    for(let i = 0; i < totalSeason; i++){
        
        let temporadas = `Temporada ${i+1}`
        temporadasAll.push(temporadas)
    }
   },[totalSeason])

   const handleClick = (e) => {
    setSeason(e.target.value)
   }

//console.log(results)

    return (
        <div >
            <div className="seasons">
                <select className="season-select" name="season" id="">
                    {temporadasAll.map((item, i) => {
                      return  <option onClick={handleClick} key={i} value={i+1}>{item}</option>
                    })}
                </select>
            </div>
            <div className="episodes">
                 {results.episodes && results.episodes.map((item,i) => {
                     return (<div className="episodes-results" style={isMobile ? {width: "100%"} : null} key={i}>
                                <img src={`${urlImg.base_url}${urlImg.size}${item.still_path}`} alt=""/>
                                <div className="episodes-details">
                                    <p> <span>EP{item.episode_number}</span> {item.name}</p>
                                    <p className="episode-overview">{item.overview}</p>
                                </div>
                            </div>)
                 })} 
            </div>
        </div>
    )
}

export default Episodios
