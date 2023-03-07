import React from "react";
import LA from "../Data/latinAmerica";
import Heading from "../Heading";
import Links from '../Links';
import Underline from '../Underline';
import Paragraph from "../Paragraph";
import tophead from "../Data/tophead";
import SmallCard from "../SmallCard";

function createCard(plant){
    return(
        <SmallCard 
            key={plant.id}
            image={plant.img} 
            link={plant.viewLink} 
        />
    );
}

function LatinAmerica(){
    return(
        <div className="mb-5">
            <div className="xl:w-[1200px] w-full my-5 mx-auto">
                <div className="lg:mx-4 md:mx-4 4xs:mx-4 hidden md:block"><Links pageName={tophead[4].page} /></div>
                <div className="lg:mx-4 md:mx-4 4xs:mx-4"><Heading title={tophead[4].title} /></div>
                <div className="lg:mx-4 md:mx-4 4xs:mx-4"><Underline /></div>
                <div className="lg:mx-4 md:mx-5 4xs:mx-5"><Paragraph text={tophead[4].text} /></div>
                <div className="lg:mx-4 md:mx-5 4xs:mx-5"><Paragraph text={tophead[4].text2} /></div>
            </div>
            <div className="flex flex-wrap xl:w-[1200px] w-full mx-auto lg:px-0 4xs:px-2">
                {LA.map(createCard)}
            </div>
        </div>
    );
}

export default LatinAmerica;