import React from "react";
import "./ContactInfo.css";

const Contactinfo = () =>{
    return (
      <div className="contact-info"> 
        <p className="contact"><a href="mailto:jlujan209@gmail.com"><img src="./gmail-logo.png" alt="Gmail" height="50em"></img></a></p>
        <p className="contact"><a href="https://www.linkedin.com/in/jorge-a-lujan/" target="_blank" rel="noreferrer">
            <img src="./LinkedIn-logo.png" alt="LinkedIn" height="50em"></img></a></p>
        <p className="contact"><a href="https://github.com/jlujan209" target="_blank" rel="noreferrer">
            <img src="./github-logo.png" alt="Github" height="50em"></img>
            </a></p>
      </div>
    );
  }

  export default Contactinfo;