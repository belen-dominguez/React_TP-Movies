import React from 'react'
import {   Link, useParams} from "react-router-dom";
import { useWidth } from '../../utils/hooks/useWidth';

const MovieNav =({url, tipo, id}) => {
   

    const [isMobile] = useWidth()
    
    const {from, uid, section} = useParams()
    
    

    return (
        <div className="navDetail" style={isMobile ? {width: "80%", fontSize:"1.5rem", marginTop:"3rem" }: null}>
            <Link to={`/${from}/${uid}/info`}>
                INFO
            </Link>
            <Link to={`/${from}/${uid}/reparto`}>
                REPARTO
            </Link>
            {from == "movie" && (

                <Link to={`/${from}/${uid}/videos`}>
                    VIDEOS 
                </Link>
            )}
            {from == "tv" && (

                <Link to={`/${from}/${uid}/episodios`}>
                    EPISODIOS
                </Link>
            
            )}
            <Link to={`/${from}/${uid}/similares`}>
                SIMILARES 
            </Link>
        </div>
    )
}

export default MovieNav
