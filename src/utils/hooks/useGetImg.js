import Axios from "axios"
import { useState, useEffect } from "react"


export const  useGetImg = nro => {
    const {URL_BASE} = require("../../const/api")
    const [isErrorImg, setIsErrorImg] = useState(false)
    const [isLoadingImg, setIsLoadingImg] = useState(false)
    const [urlImg, setUrlImg] = useState({})


    useEffect(() => {
        setIsLoadingImg(true)

        Axios
        .get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(resp =>{
            setUrlImg({
                base_url: resp.data.images.base_url,
                size:  resp.data.images.poster_sizes[`${nro}`]
            })
            setIsLoadingImg(false)
        })
        .catch(err => {
            setIsErrorImg(true)
            setIsLoadingImg(false)
        })
        
    }, [nro])

    return[urlImg, isLoadingImg, isErrorImg]
}
