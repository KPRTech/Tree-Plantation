import React from "react";
import { Link } from "react-router-dom";

function Button(props){
    return(
        <Link to={props.link} className="float-none hover:text-white px-5 py-3 no-underline block text-left">{props.subItem}</Link>
    );
}

export default Button;