import React from "react";


function Heading(props){
    return(
        <div className="font-sans mxs:text-2xl text-lg mxs:font-normal my-5 text-left">
            <div className="uppercase">{props.title}</div>
        </div>
    );
}

export default Heading;