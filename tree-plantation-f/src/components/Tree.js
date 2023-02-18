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
        </div>
      
      
       
  

    )
}
export default Tree;








