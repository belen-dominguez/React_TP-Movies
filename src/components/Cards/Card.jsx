import React, { useEffect, useState } from "react"
import { Link} from "react-router-dom";
import { BsCardImage } from "react-icons/bs";


const Card = ({show, urlMain, urlFinal,tipo}) => {

    

    return (
        <div className="card-container" >
            <Link to={`/${tipo}/${show.id}/info`}>
                 {
                 urlFinal === null || urlFinal === undefined
                 ? <div className="img-null"><BsCardImage /> </div> 
                 : <div className="img-container"> <img src={`${urlMain.base_url}${urlMain.size}${urlFinal}`} alt=""/> </div>
                 }
            
                {tipo == "tv" ? <h3>{show.name}</h3> : <h3 >{show.title}</h3>}
            </Link>
        </div>
    )
}

export default Card 