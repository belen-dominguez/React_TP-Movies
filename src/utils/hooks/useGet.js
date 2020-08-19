import Axios from "axios"
import { useState, useEffect } from "react"


export const  useGet = url => {

    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        Axios
        .get(`url`)
        .then(resp =>{
            setResults (resp.data)
            setIsLoading(false)
        })
        .catch(err => {
            setIsError(true)
            setIsLoading(false)
        })
        
    }, [url])

    return[results, isLoading, isError] 
}


