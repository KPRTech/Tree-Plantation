import React from "react";
import US from "../Data/US";
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

function UnitedStates(){
    return(
        <div>
            <div className="xl:w-[1200px] w-full my-5 mx-auto">
                <div className="lg:mx-4 md:mx-4 4xs:mx-4 hidden md:block"><Links pageName={tophead[2].page} /></div>
                <div className="lg:mx-4 md:mx-4 4xs:mx-4"><Heading title={tophead[2].title} /></div>
                <div className="lg:mx-4 md:mx-4 4xs:mx-4"><Underline /></div>
                <div className="lg:mx-4 md:mx-5 4xs:mx-5"><Paragraph text={tophead[2].text} /></div>
                <div className="lg:mx-4 md:mx-5 4xs:mx-5"><Paragraph text={tophead[2].text2} /></div>
            </div>
            <div className="flex flex-wrap xl:w-[1200px] w-full mx-auto lg:px-0 4xs:px-2">
                {US.map(createCard)}
            </div>
        </div>
    );
}

export default UnitedStates;