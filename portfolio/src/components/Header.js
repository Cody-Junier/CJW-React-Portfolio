import React from "react";
import Nav from "./Nav";

export default function Header(props){
    return(
        <div>Header
            <Nav setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} />
        </div>
    )
}