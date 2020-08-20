import React from 'react'
import {     useRouteMatch, useParams} from "react-router-dom";
import NavCharacter from "../navigation/NavCharacter"
import Creditos from "../character/Creditos"
import InfoCharacter from "../character/InfoCharacter"
import { useGetImg } from '../../utils/hooks/useGetImg';
import { useGet } from '../../utils/hooks/useGet';

const Person = ({}) => {
      
    let {  url } = useRouteMatch();
    const {select} = useParams()
   
    const {URL_BASE} = require("../../const/api")
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/person/${select}?api_key=${process.env.REACT_APP_API_KEY}`, "person")
    const [,,,external] = useGet(`https://api.themoviedb.org/3/person/${select}?api_key=${process.env.REACT_APP_API_KEY}`, "personExternal")
    const [urlImg, isLoadingImg, isErrorImg] = useGetImg(6) 

    const where =  url.split("/")


    return (
        <div className="">
            
            <NavCharacter /> 

       
            {where[3] === "credits" ?  <Creditos /> : <InfoCharacter external={external} urlImg={urlImg} data={results} />}
            
           {/* <Route exact path="/person/:select/info">
                <InfoCharacter external={external} urlImg={urlImg} data={results} />
          </Route>
          <Route exact path="/person/:select/credits">
            <Creditos />
          </Route>
          */}


        </div>
        )
}

export default Person
