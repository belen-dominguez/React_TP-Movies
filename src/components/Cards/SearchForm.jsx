import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from 'axios'
import Paginacion from "../navigation/Paginacion"
import { useWidth } from '../../utils/hooks/useWidth'
import { useGetImg } from '../../utils/hooks/useGetImg'
import { BsCardImage } from "react-icons/bs";

const SearchForm = ({}) => {
  let {id } = useParams()
  const myApiKey = "ea62e617867b87697a8db24515b62c23"
    const [results, setResults] = useState([])
    const [isMobile] = useWidth()
    const [urlImg, isLoadingImg, isErrorImg] = useGetImg(3) 

    /*paginacion */
    const [currentPage, setCurrentPage] = useState(1)
     const [totalPage, setTotalPage] = useState("")
    const url = `/search/${id}`; 
    const {URL_BASE} = require("../../const/api")


useEffect(() => {
    
    Axios
    .get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${id}&page=${currentPage}`)
    .then(resp => {
        setResults(resp.data)
        setTotalPage(resp.data.total_pages)/* paginacion*/
    })
}, [id, currentPage])

/*cuando cambie el ID me vuelva a setear la pagina en 1. esto es porq este componente no renderiza nuevamente cunado se cambia la busqueda*/
useEffect(() => {
    setCurrentPage(1)
},[id])



/* para paginacion*/
const changePage = (newpage) => {
    setCurrentPage(newpage) 
}

const pageAdd = (numero) => {
    setCurrentPage(prevState => prevState + numero) 
    //num = currentPage
}


    return (
        <div className="search-results">
            
            <h2>Resultados para {id}</h2>
            <div className="cards-container">
            {
              results.results &&  results.results.map((item, i) => {
                
               return   (
               <div key={i} className="card-container" style={isMobile ? {width:"50%"} : null}>
                  
                       
                          <Link to={item.media_type == "person" ? `/${item.media_type}/${item.id}/info` : `/${item.media_type}/${item.id}/info`}>
                     
                        
                        {isLoadingImg || item.poster_path === null || item.profile_path === null
                            ? <div className="img-null-credits"><BsCardImage /> </div> 
                            : <img  src={item.media_type == "person" 
                                ? `${urlImg.base_url}${urlImg.size}${item.profile_path}` 
                                :`${urlImg.base_url}${urlImg.size}${item.poster_path}`} alt=""/>
                        }

                        
                        
                        {item.media_type == "tv"||item.media_type == "person" ? <h3>{item.name}</h3> : <h3>{item.title}</h3>}
                        </Link>
                </div>
                        )
              })
            }
            </div>

            {results &&  <Paginacion url={url} total={totalPage} page={currentPage} changePage={changePage} pageAdd={pageAdd}/>}

        </div>
    )
}

export default SearchForm
