import React from "react";
import "./style.css";
function Business (){

    return(
        <div>
            <div className="backImg bg-local bg-center bg-no-repeat bg-cover sm:h-96 xs:h-96">
                <h1 className="text-5xl text-white text-center font-bold pt-28 sm:block xs:hidden">SUSTAINABILITY FOR </h1>
                <h1 className="text-7xl text-white text-center font-bold sm:block xs:hidden">BUSINESSES</h1>
                <h1 className="text-5xl text-white text-center font-bold pt-28 sm:hidden xs:block">SUSTAINABILITY FOR BUSINESSES</h1>
                <p className=" text-xl text-white text-center mt-10 sm:block xs:hidden">WE WORK WITH BUSINESSES THAT WANT TO MAKE AN IMPACT AND </p>
                <p className=" text-xl text-white text-center sm:block xs:hidden mb-16">HELP IMPROVE THEIR SUSTAINABILITY INITIATIVES</p>
                <div className="flex justify-center items-center sm:flex-row xs:flex-col mt-5">
                    <button className=" w-72 rounded text-white font-bold bg-red-600 py-1 px-2 ml-4 hover:bg-red-500 transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>SETUP A ZOOM CALL</span> </button>
                    <button className=" w-72 rounded text-white font-bold bg-teal-600 py-1 px-2 ml-4 hover:bg-teal-500 transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                        <span>BECOME A BUSINESS PARTENER</span> </button>
                </div>
            </div>{/**end first conatiner */}
                <div>
                    <ul className="bg-gray-400 flex">
                        <li><a href="#acition"> WORKING WITH BRANDS LIKE:</a></li>
                        <li><a href="#acition"><img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/visa-1660771686400.png?v=1660771708" alt="" /></a></li>
                        <li><a href="#acition"><img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/reebok-1660772238380.png?v=1660772251" alt="" /></a></li>
                        <li><a href="#acition"><img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/astrazeneca-1660772895863.png?v=1660772897" alt="" /></a></li>
                        <li><a href="#acition"><img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/hyundai-1660772238379.png?v=1660772246" alt="" /></a></li>
                        <li><a href="#acition"><img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/hsbclogo-1666193410806.png?v=1666193412" alt="" /></a></li>
                    </ul>
                </div>{/**end sponser area */}
                <div>
                    <ul className="flex justify-center my-10">
                        <li className="w-1/12 mr-2"><a href="#action" className="flex justify-center items-center w-12 h-12 border rounded-full text-sky-400 hover:text-white hover:bg-sky-400 transition-all duration-300	ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter inline" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg> </a></li>
                        <li className="w-1/12 mr-2"><a href="#action" className="flex justify-center items-center w-12 h-12 border rounded-full text-blue-900 hover:text-white hover:bg-blue-900 transition-all duration-300	ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook inline" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg></a></li>
                        <li className="w-1/12 mr-2"><a href="#action" className="flex justify-center items-center w-12 h-12 border rounded-full text-red-700 hover:text-white hover:bg-red-700 transition-all duration-300	ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest inline" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                        </svg> </a></li>
                        <li className="w-1/12 mr-2"><a href="#action" className="flex justify-center items-center w-12 h-12 border rounded-full text-gray-400 hover:text-white hover:bg-gray-400 transition-all duration-300	ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope inline" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg> </a></li>
                        <li className="w-1/12 mr-2"><a href="#action" className="flex justify-center items-center w-12 h-12 border rounded-full text-gray-400 hover:text-white hover:bg-gray-400 transition-all duration-300	ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg></a></li>
                        <li className="w-1/12 mr-2"><a href="#action" className="flex justify-center items-center w-12 h-12 border rounded-full text-gray-400 hover:text-white hover:bg-gray-400 transition-all duration-300	ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                        </svg></a></li>
                        
                    </ul>
                </div>{/**end social area */}

                <div>
                    <div>
                        <p>Now, more than ever, businesses need to think about their effects on the planet and how they can start giving back to the environment. We're on a mission to <span className=" font-bold">make it simple for businesses to give back</span> in a way that has both immediate and long-term impact and a model that can be tailored to work for your business.</p>
                        <p>With hundreds of projects with great stories, locations, and impact areas, we're destined to <span className=" font-bold">find the planting project that best fits your brand, mission, and goals.</span></p>
                    </div>
                </div>{/**end trees background area */}

                <div>
                    <h1>ACHIEVE YOUR SUSTAINABILITY GOALS</h1>
                    <p>By being flexible and understanding your needs, we find the best way for your business to make a difference.
                    Whether it's by organizing employee events, or donating to our global planting projects, our business partners are making a positive impact.</p>
                </div>{/**end title div */}
            
        </div>/**End return div */
);

}

export default Business;