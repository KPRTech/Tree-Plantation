import React, { useEffect, useState} from "react";
import SocialIcons from "./assets/socialIcons";
 function PlantingReport(){

    const [trees , setTrees] = useState(1000000);
    useEffect (()=>{ 
        const treesInterval = setInterval(()=>(trees<6?setTrees(trees + 1):null), 50);
        return () => {
            clearInterval(treesInterval);
        };
    });

    const [hectares , setHectares] = useState(2000);
    useEffect (()=>{ 
        const hectaresInterval = setInterval(()=>(hectares<6?setHectares(hectares + 1):null), 50);
        return () => {
            clearInterval(hectaresInterval);
        };
    });

    const [projs , setProjs] = useState(9);
    useEffect (()=>{ 
        const projInterval = setInterval(()=>(projs<6?setProjs(projs + 1):null), 50);
        return () => {
            clearInterval(projInterval);
        };
    });

    const [countries , setCountries] = useState(2);
    useEffect (()=>{ 
        const countriesInterval = setInterval(()=>(countries<6?setCountries(countries + 1):null), 50);
        return () => {
            clearInterval(countriesInterval);
        };
    });

    const [regions , setRegions] = useState(0);
    useEffect (()=>{ 
        const regionsInterval = setInterval(()=>(regions<6?setRegions(regions + 1):null), 50);
        return () => {
            clearInterval(regionsInterval);
        };
    });

    

    return(
            <div>
                <div className="backImg2 md:h-[600px] bg-local bg-center bg-no-repeat bg-cover sm:h-96 xs:h-96 m-auto flex flex-col items-center justify-center">
                    <h1 className="text-5xl text-white text-center font-bold">OUR 2022 </h1>
                    <h1 className="text-7xl text-white text-center font-bold ">PLANTING REPORT</h1>
                    <p className=" text-xl text-white text-center mt-10">BEHIND THE SCENES OF PLANTING 52 MILLION TREES ACROSS THE GLOBE</p>
                    <div className="flex justify-center items-center sm:flex-row xs:flex-col mt-5">
                        <button className=" w-60 rounded capitalize text-white font-bold bg-red-600 py-1 px-2 hover:bg-red-500 transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                                <span>get the 2022 report</span></button>
                    </div>
                </div>{/**end first conatiner */}
            <div>
                <SocialIcons />
            </div>{/**end social area */}
            <div className=" border-b border-slate-300 w-10/12 m-auto"></div>{/**horizontal line */}
            <div className=" py-20 text-center w-10/12 m-auto">
                <h1 className="md:text-4xl sm:text-2xl xs:text-2xl font-bold mb-10">OUR IMPACT IN 2022</h1>
                <p className=" text-base mb-4">One Tree Planted made an incredible impact for the environment and local communities in 2022, all thanks to you! We expanded into new regions, forged strategic partnerships, grew our team of forestry experts, and planted more trees than ever before. </p>
                <p className=" text-base">Thanks to our amazing donors, we planted <span className=" font-bold">52,793,657</span> trees in <span className=" font-bold">2022</span>, with over <span className=" font-bold">44 million</span> already committed to be planted in 2023!</p>
            </div>{/**our impact */}
            <div className=" bg-slate-400">  
                <div>
                    <div>
                        <img className=" w-32 h-32" src="https://cdn.shopify.com/s/files/1/0326/7189/files/trees-white_3db850cb-9729-439d-8067-42a886367891.svg?v=1642440296" alt=""/>
                        <p id="treesPlanted">{trees}</p>
                        <p>TREES PLANTED</p>
                    </div>
                    <div>
                        <img className=" w-32 h-32" src="https://cdn.shopify.com/s/files/1/0326/7189/files/hectares-white_9a36a75c-54d3-4835-a5fc-bcd516d0d135.svg?v=1642440401" alt=""/>
                        <p id="hectares">{hectares}</p>
                        <p>HECTARES RESTORED</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img className=" w-32 h-32" src="https://cdn.shopify.com/s/files/1/0326/7189/files/projects-white.svg?v=1642195877" alt=""/>
                        <p id="projects">{projs}</p>
                        <p>PROJECTS</p>
                    </div>
                    <div>
                        <img className=" w-32 h-32" src="https://cdn.shopify.com/s/files/1/0326/7189/files/countries-white.svg?v=1642195877" alt=""/>
                        <p id="countries">{countries}</p>
                        <p>COUNTRIES</p>
                    </div>
                    <div>
                        <img className=" w-32 h-32" src="https://cdn.shopify.com/s/files/1/0326/7189/files/regions-white.svg?v=1642195877" alt=""/>
                        <p id="regions">{regions}</p>
                        <p>REGIONS</p>
                    </div>
                    
                    
                    
                </div>
            
            </div>{/**Statistic area */}

            </div>/**end return div */


    );
 }

 export default PlantingReport;