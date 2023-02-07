import React from "react";


function Paragraph(props){
    return(
        <div className="font-sans text-base text-left">
            <div className="capitalize" style={{color:"#333333"}}>{props.text}</div>
        </div>
    );
}

export default Paragraph;