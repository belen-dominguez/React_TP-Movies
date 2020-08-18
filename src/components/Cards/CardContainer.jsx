import React, { useEffect, useState } from "react"
import Card from "./Card"
import Axios from "axios"
import { useWidth } from "../../utils/hooks/useWidth"
import { useGetImg } from "../../utils/hooks/useGetImg"


const CardContainer = ({arrShows, tipo}) => {
   
  const isMobile = useWidth()
  
  const [urlImg, isLoading, isError] = useGetImg(3) 
  

    
    return (
        <div className="cards-container">

          { isMobile[0] == true 
          
          ? arrShows.map( (item, i) => {
               
               return (
                 <Card key={i} show={item} tipo={tipo} urlMain={urlImg} urlFinal={item.poster_path}/>
               )
            }).slice(0,1) 
            
          : arrShows.map( (item, i) => {
               
              return (
                <Card key={i} show={item} tipo={tipo} urlMain={urlImg} urlFinal={item.poster_path}/>
              )
           }).slice(0,5)
          
          
          }
{/* 
         {arrShows && arrShows.map( (item, i) => {
               
               return (
                 <Card key={i} show={item} tipo={tipo} urlMain={urlImg} urlFinal={item.poster_path}/>
               )
            }).slice(0,5)}  */}
        
          
        </div>
    )
}

export default CardContainer

