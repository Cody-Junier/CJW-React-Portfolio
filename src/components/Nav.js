import React from "react";
export default function Nav(props){
    return(
        <div id="nav">
            <a href="About_Me" id="about" className={props.currentCategory === "About" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("About")}>About</a>
            <a href="Contact_Me" id="contact" className={props.currentCategory === "Contact" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Contact")}>Contact</a>
            <a href="Portfolio" id="projects" className={props.currentCategory === "Projects" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Projects")}>Projects</a>
            <a href="./Resume.pdf" id="resume" className={props.currentCategory === "Resume" ? 'navActive' : 'navInactive'}target="_blank" >Resume</a>
        </div>
    )
}