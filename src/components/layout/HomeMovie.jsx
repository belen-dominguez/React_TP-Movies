import React from 'react'
import {   BrowserRouter as Router,  Switch,  Route,   useRouteMatch, useParams} from "react-router-dom";
import MovieNav from "../navigation/MovieNav"
import Info from "../movie/Info"
import Reparto from "../movie/Reparto"
import Episodios from "../movie/Episodios"
import Similares from "../movie/Similares"
import Videos from "../movie/Videos"
import { useGetImg } from '../../utils/hooks/useGetImg';
import { useGet } from '../../utils/hooks/useGet';


const HomeMovie = ({tipo, id}) => { 
    const {URL_BASE} = require("../../const/api")
    let { path, url } = useRouteMatch();
    const {from, uid} = useParams()
    let sectionL = url.split("/")

    const [urlImg, isLoadingImg, isErrorImg] = useGetImg(4) 
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/${from}/${uid}?api_key=${process.env.REACT_APP_API_KEY}`, "homeMovie")

   
  
    return (
        <div>
            <div className="hero" style={results && results.backdrop_path != null  ?{ backgroundImage: `url(${urlImg.base_url}/original/${results.backdrop_path})` } : {backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            </div>

                <MovieNav url={url} id={id}  tipo={tipo}/>
       
             {sectionL[3] === "info" &&   <Info tipo={tipo} id={id} urlImg={urlImg} />}
             {sectionL[3] === "reparto" &&   <Reparto   />}
             {sectionL[3] === "videos" &&   <Videos   />}
             {sectionL[3] === "episodios" &&   <Episodios  urlImg={urlImg}  />}
             {sectionL[3] === "similares" &&   <Similares urlImg={urlImg}  />} 
             



            {/* prueba nesting */}
            {/* <Switch>
                <Route exact path="/:from/:uid/info">
                    <Info tipo={tipo} id={id} urlImg={urlImg} />
                </Route>
                <Route exact path="/:from/:uid/reparto">
                    <Reparto   />
                </Route>
                <Route exact path="/:from/:uid/similares">
                    <Similares urlImg={urlImg}  />
                </Route>
                <Route exact path="/:from/:uid/videos">
                    <Videos   />
                </Route>
                <Route exact path="/:from/:uid/episodios">
                    <Episodios  urlImg={urlImg}  />
                </Route>
            </Switch>    */}
        </div>
    )
}

export default HomeMovie
