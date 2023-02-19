import React from "react";
import BigCard from "./BigCard";
import Plants from "./Data/Plants";

function createCard(Plant){
    return(
        <BigCard 
            key={Plant.id}
            image={Plant.img} 
            link={Plant.viewLink} 
        />
    );
}

function CardBody(props){
    return(
        <div className="flex flex-wrap 2xl:w-2/3 xl:w-full mx-auto 2xl:px-14 xl:px-10 lg:px-6 md:px-7 4xs:px-4">
            {Plants.map(createCard)}
        </div>
    );
}

export default CardBody;