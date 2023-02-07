import React from "react";


function BigCard(props){
    return(
        <div className="image relative w-full h-auto ">
            <img className="image-img block w-full" src={props.image} alt="" />
            <div className="img-overlay absolute w-full h-full bg-black bg-opacity-60 top-0 left-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100 group">
                <a className="view-btn px-14 py-2 border-2 border-white text-white font-bold text-base transition-transform duration-500 hover:bg-white hover:text-black hover:text-lg translate-y-8 group-hover:translate-y-0" href={props.link}>VIEW ALL</a>
            </div>
        </div>
    );
}

export default BigCard; 