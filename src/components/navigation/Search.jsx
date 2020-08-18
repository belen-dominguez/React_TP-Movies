import React from "react"
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import SearchForm from "../Cards/SearchForm";
import { Redirect, Route } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState()
    const [results, setResults] = useState([])
    const [algo, setAlgo] = useState(false)
   
    const handleChange = (e) => {
        setSearch(e.target.value)
        setAlgo(false)
    }
    const handleKeyPress = (e) => {

        if (e.keyCode == 13 ){
           
            setAlgo(true)
           
           
        }
       
    }
    
   
    
    return (
        <div className="search">
            <FiSearch />
            <input type="search" placeholder="Búsqueda..." value={search} onChange={handleChange} onKeyDown={handleKeyPress}/>

             {algo &&     <Redirect to={`/search/${search}`} />  } 

        </div>
    )
}

export default Search