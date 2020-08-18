import { useState, useEffect } from "react";




export const useWidth = (tipo, category) => {
    const [isMobile, setIsMobile] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
        
    };
    useEffect(() => {
        if(width <= 500){
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }

    },[width])
     
     useEffect(() => {
        
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    })

     return [isMobile]
    
}