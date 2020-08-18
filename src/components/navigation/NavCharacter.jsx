import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useWidth } from '../../utils/hooks/useWidth'

const NavCharacter = ({}) => {
    const [isMobile] = useWidth()
    let {select} = useParams() ;
    const url = `/person/${select}`

    return (
        <div className="navCharacter" style={isMobile ? {width: "60%"} : null}>
            <Link to={`${url}`}>
                INFORMACION
            </Link>
            <Link to={`${url}/credits`}>
                CREDITOS
            </Link>
            
        </div>
    )
}

export default NavCharacter
