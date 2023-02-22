import { Link } from "react-router-dom";
import React from "react";


function SmallCard(props){
    return(
        <div className="p-3 md:w-1/4 w-1/2">
            <div className="image relative w-full h-auto ">
                <img className="image-img block w-full" src={props.image} alt="abc" />
                <div className="img-overlay absolute w-full h-full bg-black bg-opacity-60 top-0 left-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100 group">
                    <Link className="view-btn px-14 py-2 border-2 border-white text-white font-bold text-base transition-transform duration-500 hover:bg-white hover:text-black hover:text-lg translate-y-8 group-hover:translate-y-0" href={props.link}>VIEW ALL</Link>
                </div>
            </div>
        </div>
    );
}

export default SmallCard; 