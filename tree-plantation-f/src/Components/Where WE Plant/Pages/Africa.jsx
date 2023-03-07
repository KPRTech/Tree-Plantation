import React from 'react';
import africa from '../Data/africa';
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

const Africa = () => {
  return (
        <div className='mb-5'>
            <div className="xl:w-[1200px] w-full my-5 mx-auto">
                <div className="lg:mx-4 md:mx-4 4xs:mx-4 hidden md:block"><Links pageName={tophead[6].page} /></div>
                <div className="lg:mx-4 md:mx-4 4xs:mx-4"><Heading title={tophead[6].title} /></div>
                <div className="lg:mx-4 md:mx-4 4xs:mx-4"><Underline /></div>
                <div className="lg:mx-4 md:mx-5 4xs:mx-5"><Paragraph text={tophead[6].text} /></div>
                <div className="lg:mx-4 md:mx-5 4xs:mx-5"><Paragraph text={tophead[6].text2} /></div>
            </div>
            <div className="flex flex-wrap xl:w-[1200px] w-full mx-auto lg:px-0 4xs:px-2">
                {africa.map(createCard)}
            </div>
        </div>
  )
}

export default Africa;
