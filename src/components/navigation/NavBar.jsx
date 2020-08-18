import React from "react"
import {   BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import { AiOutlineHome, AiOutlineVideoCamera,  } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";


const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/">
                <AiOutlineHome />
            </Link>
            <Link to="/movie">
                <AiOutlineVideoCamera />
            </Link>
            <Link to="/tv">
                <FiMonitor />
            </Link>
        </div>
    )
}

export default NavBar