import React, { useState } from 'react';


//data of challenge section for round pictures
const data=[
    {
        id:1,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-a01b8263--5.png?v=1625696704 ",
        title1:"CONSERVING",
        title2:"WILDLIFE"
    },
    {
        id:2,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-0edf6485--FAST-FACT-ICONS-14-SQUARE.png?v=1612290574",
        title1:"COMBATING",
        title2:"CLIMATE CHANGE"
    },
    {
        id:3,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-783c95ad--3.jpg?v=1625694752",
        title1:"RESTORING",
        title2:"WILDFIRE SITES"
    },
    {
        id:4,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-6244c0a0--2.png?v=1625696689",
        title1:"BENEFITING",
        title2:"LOCAL COMMUNITIES"
    },
]

const Challenge = () => {
  return (
    <div className="p-6">
      <div className=" w-1/1 ">        
        <p className="px-8 md:px-32 xl:px-80  2xl:px-80 lg:px-52 text-xl">This year, Million Tree Challenge members will be <span className="font-bold">contributing to iconic forests with the United States Forest Service (USFS).</span>Because of impacts like wind damage, tree diseases, and forest fires, many forests have become at risk to deforestation. By supporting the Million Tree Challenge, your business is:</p> 
</div>

<div className="flex flex-wrap justify-center M-4 space-x-4 items-centerpx-8 md:px-16 xl:px-32  py-4 place-items-center">
            {data.map((card) => (
            <div className="w-1/1 md:w-1/5 lg:w-1/5 justify-between items-center text-center" key={data.id}>
                <img src={card.imgUrl} alt="" className="w-44 h-44 flex ml-12 mx-auto rounded-full" />
                <p className='font-bold pt-4'>{card.title1}</p>
                <p className='text-teal-700 font-bold pb-4'>{card.title2}</p>
            </div>
))}</div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="p-6">
      <div className=" w-1/1 ">        
        <p className="px-8 md:px-32 xl:px-80  2xl:px-80 lg:px-52 text-xl pb-8">This year, the Million Tree Challenge will directly be benefiting <span className="font-bold">2 projects of 150 National Forests across 43 states in the US </span>that are in need of restoration. As their official reforestation partners, One Tree Planted has had the opportunity to plant thousands of trees in national forests all over the country. </p> 
</div>
    </div>
  );
};

const WhatYouGet = () => {
  return (
    <div className="p-6 px-2 md:px-32 lg:px-52 xl:px-73 justify-center  py-4">
    
      
        <div className='flex flex-wrap justify-center pb-8 '>
        
        <div className=' text-left py-1 xl:mr-4 lg:mr-4'>
        <h1 className='text-2xl '>By Joining the Million Tree Challenge, You will recieve:</h1>
        <p className='py-1'><i class="bi bi-tree-fill text-teal-700"></i> The official Million Tree Challenge badge</p>
        <p className='py-1'><i class="bi bi-tree-fill text-teal-700"></i> Visibility of your logo on our Million Tree Challenge page </p>
        <p className='py-1'><i class="bi bi-tree-fill text-teal-700"></i> Access co-branded social media content</p>
        <p className='py-1'><i class="bi bi-tree-fill text-teal-700"></i> Social media shoutout on the official One Tree Planted Instagram</p>
        <p className='py-1'><i class="bi bi-tree-fill text-teal-700"></i> Project reporting with photos for your review and usage</p>
        
        </div>
        
            
        </div>
    </div>
  );
};

const MillionThree = () => {
  const [selectedLayout, setSelectedLayout] = useState('challenge');

  return (
    <div className="">
      <div className="flex justify-center space-x-4  border-b border-gray-300">
        <div    
          className={`text-lg text-teal-700 font-medium cursor-pointer w-1/4  mt-16 ${
            selectedLayout === 'challenge' ? 'text-black underline underline-offset-8' : ''
          }`}
          onClick={() => setSelectedLayout('challenge')}
        >
          <i class="bi bi-lightning-fill  text-sm pr-1 text-teal-700"></i>The Challenge
        </div>
        <div
          className={`text-lg text-teal-700 font-medium cursor-pointer w-1/4 mt-16 ${
            selectedLayout === 'project' ? 'text-black underline underline-offset-8' : ''
          }`}
          onClick={() => setSelectedLayout('project')}
        >
          <i class="bi bi-balloon-fill pr-1  text-sm text-teal-700"></i>The Project
        </div>
        <div
          className={`text-lg text-teal-700 font-medium cursor-pointer w-1/4 mt-16  ${
            selectedLayout === 'whatYouGet' ? 'text-black underline underline-offset-8' : ''
          }`}
          onClick={() => setSelectedLayout('whatYouGet')}
        >
          <i class="bi bi-folder pr-1  text-sm text-teal-700"></i>What you get
        </div>
      </div>
      <div className="">
        {selectedLayout === 'challenge' && <Challenge />}
        {selectedLayout === 'project' && <Project />}
        {selectedLayout === 'whatYouGet' && <WhatYouGet />}
        <hr />
      </div>
    </div>
  );
};

export default MillionThree;