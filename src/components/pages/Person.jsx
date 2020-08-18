import React, { useEffect, useState } from 'react'
import {   BrowserRouter as Router,  Switch,  Route,  Link, useRouteMatch, useParams, Redirect} from "react-router-dom";
import Axios from 'axios'
import NavCharacter from "../navigation/NavCharacter"
import Creditos from "../character/Creditos"
import InfoCharacter from "../character/InfoCharacter"
import { useGetImg } from '../../utils/hooks/useGetImg';

const Person = ({}) => {
    let {  url } = useRouteMatch();
    const {select} = useParams()
    const myApiKey = "ea62e617867b87697a8db24515b62c23"
    const [results, setResults] = useState([])
   
    const [external, setExternal] = useState([])
    const [urlImg, isLoading, isError] = useGetImg(6) 

   const where =  url.split("/")


    useEffect(() => {
        Axios
        .get(`https://api.themoviedb.org/3/person/${select}?api_key=${myApiKey}`)
        .then(resp => {
            setResults(resp.data)
        })

        

        Axios
        .get(`https://api.themoviedb.org/3/person/${select}/external_ids?api_key=${myApiKey}`)
        .then(resp => {
            console.log(resp.data)
            setExternal(resp.data)
        })

    }, [select])


    return (
        <div className="">
            
            <NavCharacter url={url}/> 

           {/* { <InfoCharacter external={external} urlImg={urlImg} data={results} />} */}
            {where[3] === "credits" ?  <Creditos /> : <InfoCharacter external={external} urlImg={urlImg} data={results} />}
             
            

           
        </div>
    )
}

export default Person
