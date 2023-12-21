import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="navbar">
            <p className="navbar-elements"><Link to="/"><strong>Home</strong></Link></p>
            <p className="navbar-elements"><Link to="/education"><strong>Education</strong></Link></p>
            <p className="navbar-elements"><Link to="/projects"><strong>Projects</strong></Link></p>
        </div>
    );
}

export default Navbar;