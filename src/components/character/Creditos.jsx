import React from 'react'
import { Link, useParams} from 'react-router-dom'
import { BsCardImage } from "react-icons/bs";
import { useGetImg } from '../../utils/hooks/useGetImg'
import { useWidth } from '../../utils/hooks/useWidth'
import { useGet } from '../../utils/hooks/useGet'

const Creditos = ({}) => {
    const {URL_BASE} = require("../../const/api")
    const {select} = useParams()
    const [urlImg, isLoadingImg, isErrorImg] = useGetImg(3) 
    const [isMobile ] = useWidth()
    const [results, isLoading, isError] = useGet(`https://api.themoviedb.org/3/person/${select}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`, "credits")
    
    
    return (
        <div className="cards-container">

            {results.cast && results.cast.map((item, i) => {
                return (
                    <div key={i} className="card-container" style={isMobile ? { width: "50%"} : null}>
                         <Link to={`/movie/${item.id}/info`} >
                            
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
