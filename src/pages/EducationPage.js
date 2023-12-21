import React from "react";
import Navbar from "../components/NavBar";
import Contactinfo from "../components/ContactInfo";
import "./EducationPage.css";

const Education = () =>{
    return (
        <>
            <Navbar />
            <h1 className="edu-title"> Education</h1>
            <University />
            <CourseWork />
            <HighSchool />
            <Contactinfo />
        </>
    );
}

export default Education;

const University = () =>{
    return (
        <div className="Outer-container" id="ua">
            <img src="./university.jpg" alt="University of Arizona" width="50%" id="image" className="edu-container"></img>
            <div className="edu-container">
                <h2 className="edu" id="edu-title">University of Arizona</h2>
                <p className="edu">Bachelor of Science in Software Engineering.</p>
                <p className="edu">Expected Graduation Date: 05/25.</p>
                <p className="edu">GPA: 3.93.</p>
            </div>
        </div>
    );
}

const CourseWork = () =>{
    return (
        <div id="courses-list">
            <h2 id="courses-title">Relevant Coursework</h2>
            <table className="table">
                <tr className="trow">
                    <th className="table-col">Courses Completed</th>
                    <th className="table-col">Grade Received</th>
                </tr>
                <tr className="trow">
                    <td>SFWE 101: Intro to Software Engineering</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>ECE 175: Computer Programming for Engineering Applications I</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>ECE 275: Computer Programming for Engineering Applications II</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>ECE 274A: Digital Logic</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>ISTA 431: Data Warehousing in the Cloud</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>ECE 207: Elements of Electrical Engineering</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>SIE 277: Object-Oriented Modeling and Design</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>MATH 243: Discrete Mathematics in Computer Science</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>ECE 369A: Fundamentals of Computer Organization</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>SFWE 301: Software Requirements Analysis</td>
                    <td className="grade">A</td>
                </tr>
                <tr>
                    <td className="current-courses">Current Courses</td>
                    <td className="current-courses">Expected Grade</td>
                </tr>
                <tr className="trow">
                    <td>CSC 355: Data Structures and Algorithms</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>ECE 479: Artificial Intelligence</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>GAME 351: Introduction to Game Development</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>CSC 355: Data Structures and Algorithms</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>SFWE 302: Software Architecture and Design</td>
                    <td className="grade">A</td>
                </tr>
                <tr className="trow">
                    <td>SFWE: Software Assurance and Security</td>
                    <td className="grade">A</td>
                </tr>
                
            </table>
        </div>
    );
}

const HighSchool = () =>{
    return (
        <div className="Outer-container" id="dhs">
            <img src="./dhs.jpeg" alt="University of Arizona" width="50%" id="image" className="edu-container"></img>
            <div className="edu-container">
                <h2 className="edu" id="edu-title">Douglas High School</h2>
                <p className="edu">Top 5% of Class.</p>
                <p className="edu">Graduation Date: 05/21.</p>
                <p className="edu">GPA: 3.98.</p>
            </div>
        </div>
    );
}
