import React, { useState } from 'react';
import './School.css';

const images = [  
    { 
        id: 1,
        src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/lessonplans-1658427678742.png?v=1658427680", 
        alt: "Image 1", 
        text: "We provide educational materials to help you plan fun lessons about the importance of forests. Teach students how trees affect the 6 pillars: air, water, biodiversity, social impact, health, and climate",
        title:"LESSON PLAN",
        backImg: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/lessonplansback-1658428266867.svg?v=1658428268"
    },  
    { 
        id: 2, 
        src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/modules-1658428749753.png?v=1658428763", 
        alt: "Image 2", 
        text: "Our modules cover the 6 pillars of Why Trees Matter, Global Forest Watch, Green Innovation, Carbon Footprint and more. Mix and match components that can be introduced depending on your individual classroom interests and needs.",
        title: "MODULES",
        backImg: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/modulesback-1658772710737.svg?v=1658772712"
    }, 
    { 
        id: 3, 
        src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/activities-1658428749727.png?v=1658428751", 
        alt: "Image 3", 
        text: "Gain access to different resources including infographics, e-books, videos, activities, and more! Make learning about the environment and climate fun and interactive!",
        title:"RESOURCES",
        backImg: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/activitiesback-1658428711831.svg?v=1658428713"
    },  
    { 
        id: 4, 
        src: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/fundraising-1658428749737.png?v=1658428757", 
        alt: "Image 4", 
        text: "When you sign your class, club, group of friends or school up to fundraise with One Tree Planted, you have the ability to make a big impact. Every dollar donated plants one tree, and collectively, schools can drive environmental change!",
        title:"FUNDRAISING",
        backImg: "https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/fundraisingback-1658428711835.svg?v=1658428718"
    },
];

const SchoolThird = () => {
  const [isHovered, setIsHovered] = useState({});

  const handleMouseEnter = (id) => {
    setIsHovered({ ...isHovered, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setIsHovered({ ...isHovered, [id]: false });
  };

  return (
    <div className="flex justify-center md:py-12 py-8 xl:py-44 lg:py-24">
      <div className="flex-wrap flex">
        {images.map(({ id, src, alt, text, title, backImg }) => (
          <div
            key={id}
            className="relative  w-1/1 md:w-1/5 lg:w-1/5 mx-4 mb-8"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}>
            <div
              className={`h-full w-full mx-4  absolute top-0 left-0 flex items-center justify-center text-black-900 ${
                isHovered[id] ? '' : 'hidden'
              }`}
              style={{
                backgroundImage: `url(${backImg})`,
                backgroundSize: "contain",
                padding: "2px"
              }}>
              <p className="text-center mt-4 mx-4 text-black">{text}</p>
            </div>
            <div
              className={`transition-all  duration-500 ease-in-out transform mx-4   h-72 w-72 ${
                isHovered[id] ? 'flip-back' : ''
              }`}>
              <img
                className="h-full w-full space-x-4"
                src={src}
                alt={alt}
              />
            </div>
            <h1 className="font-bold">{title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolThird;