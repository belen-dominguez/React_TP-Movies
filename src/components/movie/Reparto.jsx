import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useWidth } from '../../utils/hooks/useWidth'
import { useGetImg } from '../../utils/hooks/useGetImg'
import { BsCardImage } from "react-icons/bs";
import { useGet } from '../../utils/hooks/useGet'

const Reparto = ({}) => { /*tipo, urlImg, id*/
    const {URL_BASE} = require("../../const/api")
   
    const {from, uid} = useParams()
    
    const [isMobile] = useWidth()
    const [urlImg, isLoadingImg, isErrorImg] = useGetImg(4) 
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/${from}/${uid}/credits?api_key=${process.env.REACT_APP_API_KEY}`, "reparto")

    

    return (
        <div className="cards-container">
           {results.cast && results.cast.map((item,i) =>{
              
               return (
                   <div className="card-container"  style={isMobile ? {maxWidth: "50%"} : null} key={i}>
                       <Link to={`/person/${item.id}/info`}>
                         {isLoading || item.profile_path == null
                             ? <div className="img-null"><BsCardImage /> </div> 
                            : <div className="img-container"> < img src={`${urlImg.base_url}${urlImg.size}${item.profile_path}`} alt=""/></div>
                            }
                       
                        <h3>{item.character}</h3>
                        </Link>
                   </div>
               )
           })}
        </div> 
    )
}

export default Reparto
