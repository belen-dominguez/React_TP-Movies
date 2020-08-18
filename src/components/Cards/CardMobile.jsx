import React, { useEffect, useState } from "react"
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import { BsCardImage } from "react-icons/bs";


const CardMobile = ({show, urlMain, urlFinal,tipo}) => {

    

    return (
        <div className="card-container" style={{maxWidth:  "50%"}}>
            <Link to={`/${tipo}/${show.id}/info`}>
                 {urlFinal === null ? <div className="img-null"><BsCardImage /> </div> : <img src={`${urlMain.base_url}${urlMain.size}${urlFinal}`} alt=""/>  }
            
            {tipo == "tv" ? <h3>{show.name}</h3> : <h3>{show.title}</h3>}
            </Link>
        </div>
    )
}

export default CardMobile 