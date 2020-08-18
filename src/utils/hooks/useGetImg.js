import Axios from "axios"
import { useState, useEffect } from "react"


export const  useGetImg = nro => {
    const {URL_BASE} = require("../../const/api")
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [urlImg, setUrlImg] = useState({})


    useEffect(() => {
        setIsLoading(true)

        Axios
        .get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(resp =>{
            setUrlImg({
                base_url: resp.data.images.base_url,
                size:  resp.data.images.poster_sizes[`${nro}`]
            })
            setIsLoading(false)
        })
        .catch(err => {
            setIsError(true)
            setIsLoading(false)
        })
        
    }, [nro])

    return[urlImg, isLoading, isError]
}
