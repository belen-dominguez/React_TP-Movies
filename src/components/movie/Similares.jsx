import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import DisplayAll from '../pages/DisplayAll'
import CardFull from '../Cards/CardFull'
import { useParams } from 'react-router-dom'
import { useGet } from '../../utils/hooks/useGet'

const Similares =({urlImg})=> {/*tipo, urlImg, id*/
    const {URL_BASE} = require("../../const/api")
    // const myApiKey = "ea62e617867b87697a8db24515b62c23"
    // const [results, setResults] = useState([])
    const {from, uid} = useParams()
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/${from}/${uid}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`, "similares")


    // useEffect(() => {
    //     Axios
    //     .get(`https://api.themoviedb.org/3/${from}/${uid}/recommendations?api_key=${myApiKey}`)
    //     .then(resp => {
    //         setResults(resp.data) 
    //     })

       
    // },[])

   
    return (
        <div>
           {results && <CardFull tipo={from} arrShows={results.results}/>}
        </div>
    )
}

export default Similares
