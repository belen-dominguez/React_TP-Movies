import Axios from "axios"
import { useState, useEffect } from "react"


export const  useGet = (url, whoIs) => {

    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])
    const [external, setExternal] = useState([])

    useEffect(() => {
        setIsLoading(true)

        Axios
        .get(`${url}`)
        .then(resp =>{
            if(whoIs == "home" ){

                setResults (resp.data.results) 
            }
            else if(whoIs == "linksExternos" || whoIs == "personExternal"){
                setExternal(resp.data)
            }
            else{
                setResults (resp.data) 
            }
            setIsLoading(false)
        })
        .catch(err => {
            setIsError(true)
            setIsLoading(false)
        })
        
    }, [url])
    

    return[results,  isLoading, isError, external] 
}


