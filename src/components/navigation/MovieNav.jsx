import React from 'react'
import {   Link, useParams, NavLink} from "react-router-dom";
import { useWidth } from '../../utils/hooks/useWidth';

const MovieNav =({url, tipo, id}) => {
   
   
    const [isMobile] = useWidth()
    
    const {from, uid, section} = useParams()
    
    const prueba = (e) => {
        console.log(e.target)
        
    }

    return (
        <div className="navDetail" style={isMobile ? {width: "80%", fontSize:"1.5rem", marginTop:"3rem" }: null}>
            <NavLink to={`/${from}/${uid}/info`} activeStyle={{borderBottom: "2px solid #fff", paddingBottom: "1rem"}} >
                INFO
            </NavLink>
            <NavLink to={`/${from}/${uid}/reparto`} activeStyle={{borderBottom: "2px solid #fff", paddingBottom: "1rem"}}>
                REPARTO
            </NavLink>
            {from == "movie" && (

                <NavLink to={`/${from}/${uid}/videos`} activeStyle={{borderBottom: "2px solid #fff", paddingBottom: "1rem"}}>
                    VIDEOS 
                </NavLink>
            )}
            {from == "tv" && (

                <NavLink to={`/${from}/${uid}/episodios`} activeStyle={{borderBottom: "2px solid #fff", paddingBottom: "1rem"}}>
                    EPISODIOS
                </NavLink>
            
            )}
            <NavLink to={`/${from}/${uid}/similares`} activeStyle={{borderBottom: "2px solid #fff", paddingBottom: "1rem"}}>
                SIMILARES 
            </NavLink>
        </div>
    )
}

export default MovieNav
