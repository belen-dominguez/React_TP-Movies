import React, { useState, useEffect}  from "react"
import CardFull from "../Cards/CardFull"
import Paginacion from "../navigation/Paginacion"
import {    useParams } from "react-router-dom";
import Axios from "axios";




const DisplayAll = ({}) => {

    let {from,category,genre} = useParams() ;
   
   
    const url = `/${from}/${category}`
    const urlGenre = `/genre/${from}/${genre}`

    const {URL_BASE} = require("../../const/api")
     const [results, setResults] = useState([])
     const [genreList, setGenreLis] = useState([])
     let selectedId;

     const [currentPage, setCurrentPage] = useState(1)
     const [totalPage, setTotalPage] = useState("")
    
 
 /*custom hooks*/
// const [data, isLoading, isError] = useGet(`https://api.themoviedb.org/3/trending/${from}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`)

/* aca en display all entran todas la categorias de movie y series. lo que es search primero va a searchForm y tanto displayall como search form al pie dirigen a "paginacion" el componente*/
   
    useEffect(() => {

        if(category  == "trending"){ 
            Axios
            .get(`https://api.themoviedb.org/3/trending/${from}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`)
            .then((resp) => {
                //console.log(resp)
                setResults(resp.data.results)
                setTotalPage(resp.data.total_pages)
            })
        }
        else if(genre){
            Axios
            .get(`https://api.themoviedb.org/3/genre/${from}/list?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((resp) => {
                setGenreLis(resp.data.genres)
            })

        }
        else{
            
            Axios
            .get(`https://api.themoviedb.org/3/${from}/${category}?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`)
            .then((resp) => {
                //console.log(resp.data)
                setResults(resp.data.results)
                setTotalPage(resp.data.total_pages)
            })
           
        }
    }, [currentPage ])

    useEffect(() => {

       let genreResult = genreList.filter(item => {
           
            return item.name == genre
            
        })

       
       selectedId = genreResult[0]

       if(selectedId){
           
           Axios
           .get(`https://api.themoviedb.org/3/discover/${from}?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${selectedId.id}&page=${currentPage}`)
           .then((resp) => {
               //console.log(resp.data)
               setResults(resp.data.results)
               setTotalPage(resp.data.total_pages)
           })
       }
      


     },[genreList])

 /* esta parte es para redirigir a la pagina de ID, que tiene info de cada peli/serie en particular*/
    // if(!isNaN(category)) { 

       
    //     return (
    //         <HomeMovie tipo={from} id={category}/>
    //     )
    // } 


/* para paginacion*/
    const changePage = ( newpage) => {
    
        setCurrentPage(newpage) 
    }
    
    const pageAdd = ( numero) => {
        setCurrentPage(prevState => prevState + numero) 
       
    }

    return (
        <div >
            <div>
                {results && <CardFull category={category} tipo={from} arrShows={results} genre={genre}/> }

            </div>
            

              {results &&  <Paginacion url={url} urlGenre={urlGenre} total={totalPage} page={currentPage} changePage={changePage} pageAdd={pageAdd}/>}
            
        
        </div>
    )
}

export default DisplayAll