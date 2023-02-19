import React from 'react';
import css from "./Tree.module.css";

const Tree = () => {
    return (
        <div>
            <div className={css.bg}>

                <h1 style={{
                    textAlign: "center",
                    color: "#ffff",
                    fontFamily: "Ralway",
                    fontWeight: "1000",
                    fontSize: "45px",
                    marginBottom: "0",
                    lineHeight: "1em",
                    border: "0"

                }}>
                    WE ARE</h1>

                <h1 style={{
                    textAlign: "center",
                    color: "#ffff",
                    fontFamily: "Raleway",
                    fontWeight: "900",
                    fontSize: "60px",
                    marginBottom: "0",
                    lineHeight: "1em",
                    border: "0"

                }}>ONE TREE PLANTED
                </h1>
                <p style={{
                    textAlign: "center", color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Raleway",
                    fontWeight: "60",
                    fontWeight: "600",
                    marginBottom: "0",
                    lineHeight: "2em",
                }}>A NON-PROFIT ORGANIZATION FOCUSED ON GLOBAL REFORESTATION</p>
                <div>


                    <button class="flex mx-auto bg-red-400  text-white font-bold py-2.5 px-14 border border-black text-center 
                  -700 rounded">GET IN TOUCH

                    </button>
                    

                </div>
                

            </div>
            <p>
            <div class="flex justify-center items-center p-10">
               
                
                <div class="pr-2"><img class="h-8 w-8 object-cover object-center mx-auto border-0" src="/image/facebook.svg" alt="blog"></img> </div>
              
                
                
                <div class="pr-2"><img class="h-8 w-8 object-cover object-center mx-auto border-0" src="/image/702299.png" alt="blog"></img></div>


                <div class="pr-2" ><img class="h-8 w-8 object-cover object-center mx-auto border-0" src="/image/702281.png" alt="blog"></img></div>
                <div class="pr-2" ><img class="h-8 w-8 object-cover object-center mx-auto border-0 " src="/image/images.png" alt="blog"></img></div>
                <div class="pr-2" ><img class="h-8 w-8 object-cover object-center mx-auto border-0 " src="/image/images (1).jpg" alt="blog"></img></div>
                <div class="pr-2" ><img class="h-8 w-8 object-cover object-center mx-auto border-0 " src="/image/download.png" alt="blog"></img></div>

            </div>  
            
            </p>
            <section class="text-gray-600 body-font ">

                <div class="container px-5 py-35 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 text-black font-Weight-900">OUR VISION</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-gray ">We want to make it simple for anyone to help the environment by planting trees. Together we can restore</p>
                        <p class="lg:w-2/3 mx-auto leading-rellaxed text-gray"> forests, create habitat for biodiversity, and make a positive social impact around the world </p>
                        <p className=" font-bold mb-3 text-black p-4 font-size-20px text-2xl">
                        We plant one tree with every dollar donated.
                        </p>
                    </div>
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        </div>
                    </div>
                </div>
            </section>
            
        <div>
            <div className={css.bg1}>

                <h1 style={{
                    text:"center",
                    color: "#ffff",
                    fontFamily: "Ralway",
                    fontWeight: "900",
                    fontSize: "20px",
                    marginBottom: "0",
                    lineHeight: "1em",
                    border: "0",
                    paddingLeft:"90px"
                    

                }}>WANT TO HELP MAKE A POSITIVE IMPACT FOR THE ENVIRONMENT?
                    </h1>

               
                <div>


                    <button>
                 

                    </button>
                    

                </div>
                

            </div>
            
            
        </div>   
        </div>
          
      
      
       
  

    )
    
}

export default Tree;








