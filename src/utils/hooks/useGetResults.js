import Axios from "axios"
import { useState, useEffect } from "react"


export const  useGetResults = whoIs => {
    const {URL_BASE} = require("../../const/api")
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])
    
    /* summary
    -si viene de Home (esto muestra trending) ->trendingAll
    -si viene de Person (muestra info de actores) -> person
    -si viene de HomeMovie (muestra info particular de peli o serie) -> movie
    -
    */

    const checkUrl = [
        {"trendingAll" : `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`},
      // { "movie": `https://api.themoviedb.org/3/${from}/${uid}?api_key=${process.env.REACT_APP_API_KEY}`},
        //{"person": `https://api.themoviedb.org/3/person/${select}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`}
    ]

    //https://api.themoviedb.org/3/${from}/${uid}?api_key=${process.env.REACT_APP_API_KEY}`

    let url = checkUrl.filter(item => {
        console.log(item[whoIs])
        return  item[whoIs]
    })

    console.log(url)
console.log(whoIs)


    useEffect(() => {
        setIsLoading(true)

        

        Axios
        .get(`${url}`)
        .then(resp =>{
            setResults(resp.data)
            setIsLoading(false)
        })
        .catch(err => {
            setIsError(true)
            setIsLoading(false)
        })
        
    }, [url])

    return[results, isLoading, isError]
}
