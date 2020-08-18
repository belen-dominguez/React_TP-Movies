import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import DisplayAll from '../pages/DisplayAll'
import CardFull from '../Cards/CardFull'
import { useParams } from 'react-router-dom'

const Similares =({urlImg})=> {/*tipo, urlImg, id*/
    const myApiKey = "ea62e617867b87697a8db24515b62c23"
    const [results, setResults] = useState([])
    const {from, uid} = useParams()

    useEffect(() => {
        Axios
        .get(`https://api.themoviedb.org/3/${from}/${uid}/recommendations?api_key=${myApiKey}`)
        .then(resp => {
            setResults(resp.data) 
        })

       
    },[])

    console.log(results)
    return (
        <div>
           {results && <CardFull tipo={from} arrShows={results.results}/>}
        </div>
    )
}

export default Similares
