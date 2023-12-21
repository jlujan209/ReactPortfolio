import React from "react";
import Navbar from "../components/NavBar";
import Contactinfo from "../components/ContactInfo";
import "./ProjectsPage.css";

const Projects = () =>{
    return (
        <>
            <Navbar />
            <h1 className="pro-title">Projects</h1>
            <ProjectCards />
            <Contactinfo />
        </>
    );
}

export default Projects;

const ProjectCards = () =>{
    return (
        <div className="projects-container">
            <a className="projects" href="https://github.com/jlujan209/369Projects" target="_blank" rel="noreferrer">
                <div className="card">
                    <h3 className="card-title">VBSME on MIPS Datapath</h3>
                    <p className="card-description">
                    Implemented a video processing algorithm in MIPS ISA and executed on the
                     FPGA based emulation of the pipelined processor on the Xilinx Artix-7 FPGA.
                    </p>
                    <p className="card-instruct">Click On Card For Project</p>
                </div>
            </a>
            <a className="projects" href="https://github.com/jlujan209/EIS-SCRD" target="_blank" rel="noreferrer">
                <div className="card">
                    <h3 className="card-title">Environmental Information System SCRD</h3>
                    <p className="card-description">Created a Systems Combined Requirements Document based on a case study
                    on an Environmental Information System.</p>
                    <p className="card-instruct">Click On Card For Project</p>
                </div>
            </a>
            <a className="projects" href="https://github.com/jlujan209/Game-of-UNO" target="_blank" rel="noreferrer">
                <div className="card">
                    <h3 className="card-title">Game of UNO</h3>
                    <p className="card-description">Implemented a Game of UNO using the C Programming Language</p>
                    <p className="card-instruct">Click On Card For Project</p>
                </div>
            </a>
            <a className="projects" href="https://github.com/jlujan209/Shopping-Cart" target="_blank" rel="noreferrer">
                <div className="card">
                    <h3 className="card-title">Shopping Cart</h3>
                    <p className="card-description">Simulated an Online Shopping Cart using the C++ Programming Language</p>
                    <p className="card-instruct">Click On Card For Project</p>
                </div>
            </a>
            <a className="projects" href="https://github.com/jlujan209/CHESS-UI" target="_blank" rel="noreferrer">
                <div className="card">
                    <h3 className="card-title">Chess Opening UI</h3>
                    <p className="card-description">Created a simple User Interface for a Chess Openings App using the Python Programming Language</p>
                    <p className="card-instruct">Click On Card For Project</p>
                </div>
            </a>
            <a className="projects" href="https://jlujan.net" target="_blank" rel="noreferrer">
                <div className="card">
                    <h3 className="card-title">Personal Website</h3>
                    <p className="card-description"> Created a personal website using the React framework and NodeJS Environment</p>
                    <p className="card-instruct">Click On Card For Project</p>
                </div>
            </a>
        </div>
    );
}