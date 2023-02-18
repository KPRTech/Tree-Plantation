import React, { useEffect, useState} from "react";
import SocialIcons from "./assets/socialIcons";
 function PlantingReport(){

    const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [trees , setTrees] = useState(1005600);
  const [hectares , setHectares] = useState(60000);
  const [projs , setProjs] = useState(9);
  const [countries , setCountries] = useState(2);
  const [regions , setRegions] = useState(0);
    
    useEffect (()=>{ 
        const treesInterval = setInterval(()=>(trees<52793657?setTrees(trees + 1007800):null), 50);
        return () => {
            clearInterval(treesInterval);
        };
    });

   useEffect (()=>{ 
    const hectaresInterval = setInterval(()=>(hectares<97769?setHectares(hectares + 1050):null), 50);
    return () => {
        clearInterval(hectaresInterval);
    };
});


useEffect (()=>{ 
    const projInterval = setInterval(()=>(projs<327?setProjs(projs + 8):null),50);
    return () => {
        clearInterval(projInterval);
    };
});


useEffect (()=>{ 
    const countriesInterval = setInterval(()=>(countries<74?setCountries(countries + 1):null), 50);
    return () => {
        clearInterval(countriesInterval);
    };
});


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
            <div className=" bg-slate-400 pb-8 backImg3 bg-cover">
                <div>{scrollTop}</div>  
            <div className="w-10/12 m-auto"> 
                <div className=" flex justify-center md:flex-row sm:flex-col xs:flex-col pt-16">
                    <div className=" md:pr-20 sm:pr-0 xs:pr-0 mb-3">
                        <img className=" w-32 h-32 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/files/trees-white_3db850cb-9729-439d-8067-42a886367891.svg?v=1642440296" alt=""/>
                        <p id="treesPlanted" className=" text-4xl text-[#f9c316] font-bold">{trees}</p>
                        <p className=" text-xl text-white">TREES PLANTED</p>
                    </div>
                    <div className=" md:pl-28 sm:pl-0 xs:pl-0 mb-3">
                        <img className=" w-32 h-32 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/files/hectares-white_9a36a75c-54d3-4835-a5fc-bcd516d0d135.svg?v=1642440401" alt=""/>
                        <p id="hectares" className=" text-4xl text-[#f9c316] font-bold">{hectares}</p>
                        <p className=" text-xl text-white">HECTARES RESTORED</p>
                    </div>
                </div>

                <div className=" flex justify-center mt-5 md:flex-row sm:flex-col xs:flex-col">
                    <div className=" md:mr-32 sm:mr-0 xs:mr-0 mb-3">
                        <img className=" w-24 h-24 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/files/projects-white.svg?v=1642195877" alt=""/>
                        <p id="projects" className=" text-4xl text-[#f9c316] font-bold">{projs}</p>
                        <p className=" text-xl text-white">PROJECTS</p>
                    </div>
                    <div className=" md:mr-32 sm:mr-0 xs:mr-0 mb-3">
                        <img className=" w-24 h-24 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/files/countries-white.svg?v=1642195877" alt=""/>
                        <p id="countries" className=" text-4xl text-[#f9c316] font-bold">{countries}</p>
                        <p className=" text-xl text-white">COUNTRIES</p>
                    </div>
                    <div className=" mb-3">
                        <img className=" w-24 h-24 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/files/regions-white.svg?v=1642195877" alt=""/>
                        <p id="regions" className=" text-4xl text-[#f9c316] font-bold">{regions}</p>
                        <p className=" text-xl text-white">REGIONS</p>
                    </div>
                    
                    
                    
                </div>
                </div>
            </div>{/**Statistic area */}
            <div>
                <div className=" text-center w-11/12 pt-16 pb-20 m-auto text-base">
                    <p className=" mb-4">This year was one of growth and resilience in the face of challenging social, political, economic and environmental forces. Through it all, One Tree Planted persevered and focused on what we do best: <span className=" font-bold">planting trees.</span></p>
                    <p className=" mb-4">As an action-driven organization, we like to celebrate positive accomplishments and inspire our collective motivation.</p>
                    <p className=" mb-4">That's why we are proud to have participated in the <span className=" font-bold">COP27 Climate Summit</span> and the <span className=" font-bold">COP15 Biodiversity Conference</span>, hosted our inaugural <span className=" font-bold">ForestFest Conference</span>, secured an additional <span className=" font-bold">20 million in restoration funding</span> from the <span className=" font-bold">Bezos Earth Fund</span>, and more than doubled the amount of trees we were able to get in the ground.</p>
                    <p className=" mb-4">Planting trees is just one piece within the larger mosaic of action needed, but from <span className=" font-bold">restoring old-growth forests</span> to empowering rural smallholder farmers with <span className=" font-bold">life-changing sustainable agroforestry trees</span>, we have seen the incredible things that we can accomplish when we are working together towards a shared cause. </p>
                </div>
            </div>{/*end in between paragraph */}
            <div className="bgForm md:pt-16 sm:pt-8 xs:pt-8 md:pb-20 sm:pb-10 xs:pb-10 bg-slate-100">
                <div className="w-11/12 m-auto">
                    <div className=" md:mb-10 sm:mb-5 xs:mb-5"><p className=" capitalize text-center md:text-4xl sm:text-2xl xs:text-2xl font-bold">PLANTING 52 MILLION TREES</p></div>
                    <div className="">
                        <iframe className="w-11/12 m-auto aspect-video drop-shadow-xl" src="https://www.youtube.com/embed/3ZRWJka6-1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>{/**end video area */}
            <div className="w-full">
                <div className="w-11/12 m-auto md:pt-16 sm:pt-8 xs:pt-8 md:pb-20 sm:pb-10 xs:pb-10 text-center">
                    <h1 className=" md:text-4xl sm:text-2xl xs:text-2xl font-bold md:mb-10 sm:mb-5 xs:mb-5 ">A YEAR IN REVIEW</h1>
                    <p className=" text-base">Before One Tree Planted has even reached a decade of planting, we have been able to get more than <span className=" font-bold">91,543,657 trees</span> in the ground! <span className=" font-bold">This year alone, 52,793,657 trees were planted through 327 projects in 74 countries around the world.</span></p>
                    <p className=" text-base md:mt-4 sm:mt-2 xs:mt-2">But as we often say, reforestation is about more than planting trees. It’s about growing healthy forests, and communities. From supporting over  <span className=" font-bold">50,582 farming families to employing/involving over 26,254 women</span>, we are so proud of the lasting social and economic impact that we’ve made, together.</p>
                    <p className=" text-base md:mt-4 sm:mt-2 xs:mt-2">As the proverb goes, it takes a village. And we couldn’t have done any of this without our incredible global village of supporters, volunteers, partners and tree ambassadors. You inspire us every day with your unwavering dedication to protecting the environment, one tree at a time.</p>
                </div>
            </div>{/**year in review */}
            <div>
                <embed width="200" height="200" data="https://issuu.com/onetreeplanted/docs/one_tree_planted_2022_annual_report_ee456a89706f73" alt="done"></embed>
            </div>{/**end magazine area */}
           <div className="w-full bg-gray-100 md:pt-16 sm:pt-8 xs:pt-8 md:pb-20 sm:pb-10 xs:pb-10">
                <div><h1 className="md:text-4xl sm:text-2xl xs:text-2xl font-bold md:mb-10 sm:mb-5 xs:mb-5 ">CONTINUED COLLABORATION</h1></div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-2 justify-center">
                    <div className=" mb-4">
                        <img className="lg:w-full md:w-full sm:w-2/4 xs:w-2/4 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/_0001_wri_logo_4c-1673648397517.png?v=1673648403" alt="" />
                        <p className=" text-center capitalize font-bold text-xl md:mt-5 sm:mt-2 xs:mt-2 md:mb-3 sm:mb-2 xs:mb-2">WRI</p>
                        <p className=" text-center">Our partnership with WRI continues to grow. This year, we were honored to collaborate with them on the implementation of TerraFund for AFR100 Phase 1, allowing us to design and manage a first-of-its-kind continent-wide restoration program!</p>
                    </div>
                    <div className=" mb-4">
                        <img className="lg:w-full md:w-full sm:w-2/4 xs:w-2/4 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/_0000_bezosearthfund-1673648397515.png?v=1673648399" alt="" />
                        <p className=" text-center capitalize font-bold text-xl md:mt-5 sm:mt-2 xs:mt-2 md:mb-3 sm:mb-2 xs:mb-2">BEZOS EARTH FUND</p>
                        <p className=" text-center">Thanks to generous support from Bezos Earth Fund, we, together with WRI, secured an additional $20M to supporta second phase of TerraFund for AFR100. Bezos Earth Fund's trust in One Tree Planted allows us to play a leading role in unlocking the full restoration potential in Africa.</p>
                    </div>
                    <div className=" mb-4">
                        <img className="lg:w-full md:w-full sm:w-2/4 xs:w-2/4 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/nfwflogo-1673992430078.png?v=1673992431" alt="" />
                        <p className=" text-center capitalize font-bold text-xl md:mt-5 sm:mt-2 xs:mt-2 md:mb-3 sm:mb-2 xs:mb-2">NFWF</p>
                        <p className=" text-center">Thanks to our partnership with the National Fish and Wildlife Foundation, we're planting 4.1 million trees through 15 projects in 9 Southeast US states over the next 3 years to restore historic Longleaf Pine ecosystems. We're excited to see where this partnership grows!</p>
                    </div>
                    <div className=" mb-4">
                        <img className="lg:w-full md:w-full sm:w-2/4 xs:w-2/4 m-auto" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/planet-women-logo-1673992471758.png?v=1673992473" alt="" />
                        <p className=" text-center capitalize font-bold text-xl md:mt-5 sm:mt-2 xs:mt-2 md:mb-3 sm:mb-2 xs:mb-2">PLANET WOMEN</p>
                        <p className=" text-center">From co-hosting a webinar on International Women'sDay to enriching our Terrafund for AFR100 projects with a powerful fellowship program, working together with Planet Women allows us to provide opportunities for women, and promote gender equality — which so often goes hand in hand with restoration work.</p>
                    </div>
                </div>
           </div>
            </div>/**end return div */


    );
 }

 export default PlantingReport;