import React from "react";
export default function Nav(props){
    return(
        <div>
            <a href="#" onClick={() =>props.setCurrentCategory("About")}>About</a>
            <a href="#" onClick={() =>props.setCurrentCategory("Contact")}>Contact</a>
            <a href="#" onClick={() =>props.setCurrentCategory("Projects")}>Projects</a>
        </div>
    )
}