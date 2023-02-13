import React from "react";
 function PlantingReport(){
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


            </div>/**end return div */


    );
 }

 export default PlantingReport;