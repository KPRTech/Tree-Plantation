import React from "react";
import BigCard from "../BigCard";
import NA from "../Data/NA";
import Heading from "../Heading";
import Links from '../Links';
import Underline from '../Underline';
import Paragraph from "../Paragraph";
import tophead from "../Data/tophead";

function createCard(plant){
    return(
        <BigCard 
            key={plant.id}
            image={plant.img} 
            link={plant.viewLink} 
        />
    );
}

function NorthAmerica(){
    return(
        <div>
            <div className="xl:w-[1200px] w-full my-5 mx-auto">
                <div className="lg:mx-5 md:mx-4 4xs:mx-4 hidden md:block"><Links pageName={tophead[1].page} /></div>
                <div className="lg:mx-5 md:mx-4 4xs:mx-4"><Heading title={tophead[1].title} /></div>
                <div className="lg:mx-5 md:mx-4 4xs:mx-4"><Underline /></div>
                <div className="lg:mx-5 md:mx-5 4xs:mx-5"><Paragraph text={tophead[1].text} /></div>
                <div className="lg:mx-5 md:mx-5 4xs:mx-5"><Paragraph text={tophead[1].text2} /></div>
            </div>
            <div className="flex flex-wrap xl:w-[1200px] w-full mx-auto lg:px-0 4xs:px-2">
                {NA.map(createCard)}
            </div>
        </div>
    );
}

export default NorthAmerica;