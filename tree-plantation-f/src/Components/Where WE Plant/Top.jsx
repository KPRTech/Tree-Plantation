import React from "react";
import Heading from "./Heading";
import Links from './Links';
import Underline from './Underline';
import Paragraph from "./Paragraph";
import tophead from "./tophead";


function Top(){
    return(
        <div className="2xl:w-2/3 xl:w-full my-5 mx-auto 2xl:px-12 xl:px-8 lg:px-4 md:px-4">
            <div className="lg:mx-5 md:mx-6 4xs:mx-7 hidden md:block"><Links pageName={tophead[0].page} /></div>
            <div className="lg:mx-5 md:mx-6 4xs:mx-7"><Heading title={tophead[0].title} /></div>
            <div className="lg:mx-5 md:mx-6 4xs:mx-7"><Underline /></div>
            <div className="lg:mx-5 md:mx-6 4xs:mx-7"><Paragraph text={tophead[0].text} /></div>
            <div className="lg:mx-5 md:mx-6 4xs:mx-7"><Paragraph text={tophead[0].text2} /></div>
        </div>
    );
}

export default Top;