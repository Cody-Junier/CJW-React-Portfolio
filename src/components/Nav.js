import React from "react";
export default function Nav(props){
    return(
        <div id="nav">
            <button id="about" className={props.currentCategory === "About" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("About")}>About</button>
            <button id="contact" className={props.currentCategory === "Contact" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Contact")}>Contact</button>
            <button id="projects" className={props.currentCategory === "Projects" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Projects")}>Projects</button>
            <a href="https://docs.google.com/document/d/1m2RdfcJLGUrOZspzBHurynDzNhvc3Zda/edit?usp=sharing&ouid=111590962741767700385&rtpof=true&sd=true" id="resume" className={props.currentCategory === "Resume" ? 'navActive' : 'navInactive'}target="_blank" >Resume</a>
        </div>
    )
}