import React from "react";
import Nav from "./Nav";

export default function Header(props){
    return(
        <div>
            {/* img of me */}
            Cody Junier, MERN Developer
            <Nav setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} />
        </div>
    )
}