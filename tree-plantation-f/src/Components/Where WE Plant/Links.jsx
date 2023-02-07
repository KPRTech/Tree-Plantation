import React from "react";
// import { Link } from "react-router-dom";

function Links(props){
    return(
        <div className="text-left w-full text-sm uppercase my-2 text-emerald-700 font-sans">
            <a to={""}>Home</a><span> / </span><a to={""}>{props.pageName}</a>
        </div>
    );
}

export default Links; 