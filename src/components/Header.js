import React from "react";
import Nav from "./Nav";

export default function Header(props){
    return(
        <div id="header">
            {/* img of me */}
            Cody Junier
            <div className="subhead">
                Full-Stack Developer
            </div>
            <Nav 
            setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} />
        </div>
    )
}