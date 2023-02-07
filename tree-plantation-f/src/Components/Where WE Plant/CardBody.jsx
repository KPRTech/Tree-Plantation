import React from "react";
import BigCard from "./BigCard";
import card from "./card";


function CardBody(){
    return(
        <div className="flex flex-wrap 2xl:w-2/3 xl:w-full mx-auto 2xl:px-14 xl:px-10 lg:px-6 md:px-7 4xs:px-4">
            <div className="p-3 md:w-1/3 w-1/2"><BigCard image={card[0].img} link={card[0].viewLink} /></div>
            <div className="p-3 md:w-1/3 w-1/2"><BigCard image={card[1].img} link={card[1].viewLink} /></div>
            <div className="p-3 md:w-1/3 w-1/2"><BigCard image={card[2].img} link={card[2].viewLink} /></div>
            <div className="p-3 md:w-1/3 w-1/2"><BigCard image={card[3].img} link={card[3].viewLink} /></div>
            <div className="p-3 md:w-1/3 w-1/2"><BigCard image={card[4].img} link={card[4].viewLink} /></div>
            <div className="p-3 md:w-1/3 w-1/2"><BigCard image={card[5].img} link={card[5].viewLink} /></div>
        </div>
    );
}

export default CardBody;