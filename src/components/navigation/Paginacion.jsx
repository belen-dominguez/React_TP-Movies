import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useWidth } from '../../utils/hooks/useWidth';


const Paginacion =({url, urlGenre, total, page, changePage, pageAdd}) => {
    let finalUrl;
    let splitGenre
    let splitUrl
    let items = []
    let prueba = []
    
   const {from, category, num, uid} = useParams() 

   const [isMobile] = useWidth()
   

    /*crear array con el total de elementos a imprimir*/
    for(let i = 2; i< total; i++){
         items.push(i) 
    }
    
    
/* para resolver la paginacion de Generos, donde la url es diferente al de las categorias*/
    
    if(urlGenre){
        splitGenre = urlGenre.split("/")
        if(splitGenre[3] == "undefined"){ 
            finalUrl = url
        }
    }
    if(url){
        splitUrl = url.split("/")
        if(splitUrl[2] == "undefined"){
            finalUrl =  urlGenre;
        }
        if(splitUrl[1] == "search"){
            finalUrl =  url;
        }

    }

    const pagMenorDiez = () => {
        if(total < 10 && !isMobile && page < 5 ){
           return (items.map(item => {
                let active = page == item ? "active" : "";
                return (
                    <Link key={item}  className="pagina" to={`${finalUrl}/${item}`}>
                        <button  className={`${active}`} onClick={() =>{changePage(item)}}> {item}</button>
                    </Link>
                )
            }).slice(0,4))
        }
        else if(total < 10 && !isMobile && page >= 5){
            return (
                items.map(item => {
                    let active = page == item ? "active" : "";
                    return (
                        <Link key={item} className="pagina" to={`${finalUrl}/${item}`}>
                            <button className={`${active}`}   onClick={(e) =>{changePage(item)}}> {item}</button>
                        </Link>
                    )
                }).slice((total - 6),(total-1))
            )
        }
    }
    

   
    return (
        <div className="paginacion" style={isMobile ? {marginBottom: "8rem" } :null }>
             <Link className="pagina" to={`${finalUrl}/${page-1}`}>
                <button onClick={() =>pageAdd(-1)} disabled={page == 1}>   
                       <MdNavigateBefore /> 
                </button>
            </Link>

            <Link className="pagina" to={`${finalUrl}/1`}>
                    <button  onClick={() =>changePage(1)}> 1</button>
            </Link>
        
            {total > 10 && !isMobile && page <= 5 &&
                items.map(item => {
                    let active = page == item ? "active" : "";
                    return (
                        <Link key={item}  className="pagina" to={`${finalUrl}/${item}`}>
                            <button  className={`${active}`} onClick={() =>{changePage(item)}}> {item}</button>
                        </Link>
                    )
                }).slice(0,4)
            }


            {/* opcion para cuando son menos de 10 paginas */}
            {total < 10 && !isMobile && page >= 5 && <button>...</button>} 
            {total < 10 && pagMenorDiez()}   
            
          
            {total > 10 && !isMobile && page > 5 && <button>...</button>} {/*puntitos a la derecha + 5 primeros nros*/}
        
             {/* opcion para cuando es mobile  */}
            {isMobile && page > 1 && 
            
            
            items.map(item => {
                let active = page == item ? "active" : "";
                return (
                    <Link key={item} className="pagina" to={`${finalUrl}/${item}`}>
                        <button className={`${active}`}   onClick={(e) =>{changePage(item)}}> {item}</button>
                    </Link>
                )
            }).slice((page-2),(page-1))
            }


            {total > 10 && !isMobile &&
            
                page > 5 && page < (total - 4) &&
                items.map(item => {
                    let active = page == item ? "active" : "";
                    return (
                        <Link key={item} className="pagina" to={`${finalUrl}/${item}`}>
                            <button className={`${active}`}   onClick={(e) =>{changePage(item)}}> {item}</button>
                        </Link>
                    )
                }).slice((page-3),((page-3) +3))
            }

           
            
            
            {total > 10 && !isMobile && page >= (total -4) && 
                            
                items.map(item => {
                    let active = page == item ? "active" : "";
                    return (
                        <Link key={item} className="pagina" to={`${finalUrl}/${item}`}>
                            <button className={`${active}`}   onClick={(e) =>{changePage(item)}}> {item}</button>
                        </Link>
                    )
                }).slice((total - 6),(total-1))

                
                
            }

             { !isMobile && page < (total -4) && <button>...</button>} 

            <Link className="pagina" to={`${finalUrl}/${total}`}>
                     <button  onClick={() =>changePage(total)}> {total}</button> 
                     
            </Link>
            
            <Link className="pagina" to={`${finalUrl}/${page+1}`}> 
                <button onClick={() =>pageAdd(1)} disabled={page == total}> 
                    <MdNavigateNext />
                </button>
            </Link>
         
           
        </div>
    )
}

export default Paginacion
