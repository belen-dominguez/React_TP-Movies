import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { useWidth } from '../../utils/hooks/useWidth'
const  Videos = ({})=> { /*tipo, id*/
    const myApiKey = "ea62e617867b87697a8db24515b62c23"
    const [results, setResults] = useState([])
    const {from, uid} = useParams()
    const [isMobile] = useWidth()

    useEffect(() => {
        Axios
        .get(`https://api.themoviedb.org/3/${from}/${uid}/videos?api_key=${myApiKey}`)
        .then(resp => {
            setResults(resp.data)
        })

    },[])

    console.log(results)
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
