import React from "react";
import { Link } from "react-router-dom";

function Links(props){
    return(
        <div className="text-left w-full text-sm uppercase my-2 text-emerald-700 font-sans">
            <Link to={""}>Home</Link><span> / </span><Link to={""}>{props.pageName}</Link>
        </div>
    );
}

export default Links; 