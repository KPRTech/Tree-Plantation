import React from "react";

function Button(props){
    return(
        <a href={props.link} className="float-none hover:text-white px-5 py-3 no-underline block text-left">{props.subItem}</a>
    );
}

export default Button;