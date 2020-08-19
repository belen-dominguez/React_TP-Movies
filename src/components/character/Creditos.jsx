import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import { Link, useParams, useRouteMatch, Redirect } from 'react-router-dom'
import NavCharacter from '../navigation/NavCharacter'
import { BsCardImage } from "react-icons/bs";
import HomeMovie from '../layout/HomeMovie'
import { useGetImg } from '../../utils/hooks/useGetImg'
import { useWidth } from '../../utils/hooks/useWidth'
import { useGet } from '../../utils/hooks/useGet'

const Creditos = ({}) => {/*urlImg, id*/
    const {URL_BASE} = require("../../const/api")
    //const myApiKey = "ea62e617867b87697a8db24515b62c23"
    //const [results, setResults] = useState([])
    const {select} = useParams()
    const [urlImg, isLoadingImg, isErrorImg] = useGetImg(3) 
    const [isMobile ] = useWidth()
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/person/${select}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`, "credits")
    
    // useEffect(() => {
    //     Axios
    //     .get(`https://api.themoviedb.org/3/person/${select}/movie_credits?api_key=${myApiKey}`)
    //     .then(resp => {
    //         setResults(resp.data)
    //     })
    // },[select])

//console.log(results)
    return (
        

        <div className="cards-container">

            {results.cast && results.cast.map((item, i) => {
                return (
                    <div key={i} className="card-container" style={isMobile ? { width: "50%"} : null}>
                         <Link to={`/movie/${item.id}/info`} >
                             {/* {item.poster_path === null 
                             ? <div className="img-null-credits"><BsCardImage /> </div> 
                             : <img  src={`${urlImg.base_url}${urlImg.size}${item.poster_path}`} alt=""/>}
                         */}
                            {isLoading || item.poster_path === null || item.poster_path === undefined
                             ? <div className="img-null-credits"><BsCardImage /> </div> 
                             : <div className="img-container"><img  src={`${urlImg.base_url}${urlImg.size}${item.poster_path}`} alt=""/></div>}
                        
                        
                            <h3>{item.title}</h3>
        
                            
                         </Link> 
                    </div>
                )
            })}
        </div>
       
    )
}

export default Creditos
