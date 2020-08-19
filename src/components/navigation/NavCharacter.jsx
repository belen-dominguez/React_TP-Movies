import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useWidth } from '../../utils/hooks/useWidth'

const NavCharacter = ({}) => {
    const [isMobile] = useWidth()
    let {select} = useParams() ;
    const url = `/person/${select}`

    return (
        <div className="navCharacter"  style={isMobile ? {width: "60%"} : null}>
            <NavLink to={`${url}`} activeStyle={{borderBottom: "2px solid #fff", paddingBottom: "1rem"}}>
                INFORMACION
            </NavLink>
            <NavLink to={`${url}/credits`} activeStyle={{borderBottom: "2px solid #fff", paddingBottom: "1rem"}}>
                CREDITOS
            </NavLink>
            
        </div>
    )
}

export default NavCharacter
