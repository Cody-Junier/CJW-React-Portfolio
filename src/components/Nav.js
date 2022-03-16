import React from "react";
export default function Nav(props){
    return(
        <div id="nav">
            <a href="#" id="about" className={props.currentCategory === "About" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("About")}>About</a>
            <a href="#" id="contact" className={props.currentCategory === "Contact" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Contact")}>Contact</a>
            <a href="#" id="projects" className={props.currentCategory === "Projects" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Projects")}>Projects</a>
            <a href="./CodyJunierResume.pdf" id="resume" className={props.currentCategory === "Resume" ? 'navActive' : 'navInactive'}target="_blank" >Resume</a>
        </div>
    )
}