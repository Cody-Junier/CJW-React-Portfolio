import React from "react";
export default function Nav(props){
    return(
        <div id="nav">
            <button id="about" className={props.currentCategory === "About" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("About")}>About</button>
            <button id="contact" className={props.currentCategory === "Contact" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Contact")}>Contact</button>
            <button id="projects" className={props.currentCategory === "Projects" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Projects")}>Projects</button>
            <a href="./Resume.pdf" id="resume" className={props.currentCategory === "Resume" ? 'navActive' : 'navInactive'}target="_blank" >Resume</a>
        </div>
    )
}