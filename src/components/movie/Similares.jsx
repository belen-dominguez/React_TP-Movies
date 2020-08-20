import React from 'react'
import CardFull from '../Cards/CardFull'
import { useParams } from 'react-router-dom'
import { useGet } from '../../utils/hooks/useGet'

const Similares =({urlImg})=> {
    const {URL_BASE} = require("../../const/api")
    
    const {from, uid} = useParams()
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/${from}/${uid}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`, "similares")


    return (
        <div>
           {results && <CardFull tipo={from} arrShows={results.results}/>}
        </div>
    )
}

export default Similares
