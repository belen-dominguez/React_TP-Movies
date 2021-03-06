import React from 'react'
import External from '../movie/External'
import { useWidth } from '../../utils/hooks/useWidth'
import { BsCardImage } from "react-icons/bs";



const InfoCharacter = ({urlImg, data, external}) => { 
    const [isMobile] = useWidth()
    
    return (
        
        <div className="character" style={isMobile ? {flexDirection: "column", marginBottom: "5rem"} : null}>
            
            { data.profile_path === null 
                ? <div className="img-null-character"><BsCardImage /></div>
                :<div className="img-container-actor">
                    <img  
                    src={`${urlImg.base_url}${urlImg.size}${data.profile_path}`} alt=""
                    style={isMobile ? {width: "100%", marginBottom: "2rem"} : null}/>
                </div> }
            <div className="character-info" style={isMobile ? {width: "100%"} : null}>
                <div >
                    <h2>{data.name}</h2>
                    <p style={isMobile ? {fontSize: "1.5rem"} : null}>{data.biography}</p>
                </div>
                {external && <External external={external} />}
            </div>
        </div>
           
        
    )
}

export default InfoCharacter
