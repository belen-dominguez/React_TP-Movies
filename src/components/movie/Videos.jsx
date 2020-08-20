import React from 'react'
import { useParams } from 'react-router-dom'
import { useWidth } from '../../utils/hooks/useWidth'
import { useGet } from '../../utils/hooks/useGet'

const  Videos = ({})=> { 
    const {URL_BASE} = require("../../const/api")
    const {from, uid} = useParams()
    const [isMobile] = useWidth()
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/${from}/${uid}/videos?api_key=${process.env.REACT_APP_API_KEY}`, "videos")

    

    
    return ( 
        <div  className="video-container" >
            {results.results && ( 
            results.results.map((item, i) => {

               return <iframe style={isMobile ? {margin: "1rem auto"} : null} className="video" key={i} width="100%" height="315"  src={`https://www.youtube.com/embed/${item.key}`}> </iframe> 
                })

            )}
        </div>
    )
}

export default Videos
