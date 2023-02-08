import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Business (){
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      };

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
            
                <div className="bg-sky-900 py-4">
                    <div className="h-24 w-11/12 mx-auto">
                    <Slider {...settings}>
                        <div className="w-40 text-white mt-6 ml-1"> 
                          <a href="#action" className=" break-words w-40 block font-bold">WORKING WITH BRANDS LIKE:</a>
                        </div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/visa-1660771686400.png?v=1660771708" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/reebok-1660772238380.png?v=1660772251" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/astrazeneca-1660772895863.png?v=1660772897" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/hyundai-1660772238379.png?v=1660772246" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/hsbclogo-1666193410806.png?v=1666193412" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/caterpillar-1660771686396.png?v=1660771692" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/hendricksgin-1667223640529.png?v=1667223641" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/nikinwhitelogoo-1662485362188.png?v=1662485363" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/tobleronelogowhite-1662483221526.png?v=1662483222" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/originswhitelogoo-1662485362189.png?v=1662485372" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/acerwhitelogo-1662484754661.png?v=1662484756" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/amazonalexalogo-1662480957764.png?v=1662480959" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/flordecanalogowhite-1662482457527.png?v=1662482458" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/whitepelicanproductslogo-1662485212621.png?v=1662485213" alt="" /></a></div>
                        <div className=""> <a href="#action"><img className=" w-40" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/kyndryllogo-1666193498258.png?v=1666193499" alt="" /></a></div>
                    </Slider>
                    </div>
                </div>{/**end sponser area */}
                <div>
                    <ul className="flex justify-center my-5">
                        <li className="mr-1"><a href="#action" className="flex justify-center items-center w-8 h-8 border rounded-full text-white bg-sky-400 transition-all duration-300 ease-in transform hover:opacity-60 hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter inline" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg> </a></li>
                        <li className="mr-1"><a href="#action" className="flex justify-center items-center w-8 h-8 border rounded-full text-white bg-blue-900 transition-all duration-300 ease-in transform hover:opacity-60 hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook inline" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg></a></li>
                        <li className="mr-1"><a href="#action" className="flex justify-center items-center w-8 h-8 border rounded-full text-white bg-red-700 transition-all duration-300 ease-in transform hover:opacity-60 hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest inline" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                        </svg> </a></li>
                        <li className="mr-1"><a href="#action" className="flex justify-center items-center w-8 h-8 border rounded-full text-white bg-gray-400 transition-all duration-300 ease-in transform hover:opacity-60 hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope inline" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg> </a></li>
                        <li className="mr-1"><a href="#action" className="flex justify-center items-center w-8 h-8 border rounded-full text-white bg-yellow-300 transition-all duration-300 ease-in transform hover:opacity-60 hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg></a></li>
                        <li className="mr-1"><a href="#action" className="flex justify-center items-center w-8 h-8 border rounded-full text-white bg-lime-500 transition-all duration-300 ease-in transform hover:opacity-60 hover:-translate-y-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                        </svg></a></li>
                        
                    </ul>
                </div>{/**end social area */}

                <div className="bgTree bg-gray-50 sm:pt-24 xs:pt-16">
                    <div className=" sm:w-7/12 xs:w-full sm:text-xl xs:text-base m-auto text-center">
                        <p className=" mb-2">Now, more than ever, businesses need to think about their effects on the planet and how they can start giving back to the environment. We're on a mission to <span className=" font-bold">make it simple for businesses to give back</span> in a way that has both immediate and long-term impact and a model that can be tailored to work for your business.</p>
                        <p>With hundreds of projects with great stories, locations, and impact areas, we're destined to <span className=" font-bold">find the planting project that best fits your brand, mission, and goals.</span></p>
                    </div>
                </div>{/**end trees background area */}

                <div className="py-5 text-center m-auto sm:px-0 xs:px-4">
                    <h1 className="sm:px-0 xs:px-2 sm:text-4xl xs:text-2xl font-bold sm:py-10 xs:py-6">ACHIEVE YOUR SUSTAINABILITY GOALS</h1>
                    <p className=" sm:text-xl xs:text-base mb-1">By being flexible and understanding your needs, <span className=" font-bold">we find the best way for your business to make a difference.</span></p>
                    <p className=" sm:text-xl xs:text-base">Whether it's by organizing employee events, or donating to our global planting projects, <span className=" font-bold">our business partners are making a positive impact.</span></p>
                </div>{/**end title div */}
                <div className="my-10 flex justify-around items-stretch flex-wrap">
                  <div className="lg:w-1/5 md:w-2/5 sm:w-full xs:w-full md:px-0 sm:px-4 xs:px-4 text-left m-0 p-0">
                    <div className="  h-[454.75px]"><img className="shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-5501eace--treeplanting.jpg?v=1624897998" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3">SUPPORT REFORESTATION</h1>
                    <p className=" text-base font-normal mb-3">Plant one tree for <span className=" font-bold">every product or service sold with our one-for-one model</span>, donate a percentage of sales, or formulate special giving campaigns on social media.</p>
                    <button className=" w-56 rounded hover:text-white font-bold text-teal-600 border-2 border-teal-600 hover:bg-teal-600 py-1 px-2 bg-white transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>BECOME A PARTENER</span> </button>
                  </div>
                  <div className="lg:w-1/5 md:w-2/5 sm:w-full xs:w-full md:px-0 sm:px-4 xs:px-4 text-left m-0 p-0">
                    <div className=" h-[454.75px]"><img className="shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/groupofemployeeattreeplantingeventinmexico-1641504949839.jpg?v=1641504977" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3">EMPLOYEE ENGAGEMENT</h1>
                    <p className=" text-base font-normal mb-3">Our global tree planting events will help your team connect with nature, while also contributing to a <span className=" font-bold">positive environmental impact.</span></p>
                    <button className=" w-56 rounded hover:text-white font-bold text-teal-600 border-2 border-teal-600 hover:bg-teal-600 py-1 px-2 bg-white transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>PLAN AN ACTIVITY</span> </button>
                  </div>
                  <div className="lg:w-1/5 md:w-2/5 sm:w-full xs:w-full md:px-0 sm:px-4 xs:px-4 text-left m-0 p-0">
                    <div className=" h-[454.75px]"><img className="shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/one-tree-planted-urban-tree-new-york-city-1660765574971.jpg?v=1660765577" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3">URBAN REFORESTATION</h1>
                    <p className=" text-base font-normal mb-3">Support one of our urban reforestation projects by planting close to your <span className=" font-bold">headquarters</span> and improving your <span className=" font-bold">local biodiversity.</span></p>
                    <button className=" w-56 rounded hover:text-white font-bold text-teal-600 border-2 border-teal-600 hover:bg-teal-600 py-1 px-2 bg-white transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>LEARN MORE</span> </button>
                  </div>
                  <div className="lg:w-1/5 md:w-2/5 sm:w-full xs:w-full md:px-0 sm:px-4 xs:px-4 text-left m-0 p-0">
                    <div className="  h-[454.75px]"><img className="shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-d4609a08--milliontreechallenge.jpg?v=1628543783" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3">MILLION TREE CHALLENGE</h1>
                    <p className=" text-base font-normal mb-3">Join an exclusive community of only 100 environmentally conscious businesses who are <span className=" font-bold">planting 10,000 trees across US National Forests</span></p>
                    <button className=" w-56 rounded hover:text-white font-bold text-teal-600 border-2 border-teal-600 hover:bg-teal-600 py-1 px-2 bg-white transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>JOIN THE CHALLENGE</span> </button>
                  </div>
                </div>{/**end activities area */}

                <div className="bgOcordion w-full">
                  <div className=" w-10/12 m-auto">
                    <h1 className=" text-4xl font-bold text-center">MORE PARTNERSHIP OPTIONS</h1>
                    <p className="text-center text-xl">Looking to scale your impact even further? While planting trees will always remain the core of One Tree Planted, we're always looking for new ways to drive change in the environmental landscape. Supporting the UN's 17 Sustainable Development Goals, working towards goals with science-based targets, and offering a comprehensive carbon offset program allows businesses unique ways to align their company mission with ours.</p>
                  </div>  
                  <div className="flex justify-center overflow-hidden max-w-full h-80 w-10/12 m-auto flex-wrap ">
                      <div className="box-1 flex flex-wrap justify-center items-center bg-teal-800 p-5 h-72 transition-all ease-in duration-300 flex-1 hover:flex-[4] hover:h-80 overflow-hidden">
                        <h1 className="text-white capitalize text-xl font-semibold transition-all duration-200 ease-in">the un's sustainable <br/>development goals</h1>
                        <div className="hidden">
                            <h3>The UN's Sustainable Development Goals</h3>
                            <p>The 17 UN Sustainable Development Goals (SDGs) are a plan to create a better and more sustainable future for all. Established by the United Nations, the SDGs are an urgent call to action and global partnership among all countries. They represent key benchmarks for addressing poverty, inequality, climate change, and establishing peace and justice. Reforestation and land restoration helps to benefit all 17 of the UN’s Sustainable Development Goals. Planting trees is a unique opportunity to align your company’s SDG-related targets with reforestation projects of your choosing.</p>
                        </div>
                      </div>
                      <div className="box-2 flex flex-wrap justify-center items-center bg-teal-700 p-5 h-72 transition-all ease-in duration-300 flex-1 hover:flex-[4] hover:h-80 overflow-hidden">
                        <h1 className="text-white capitalize text-xl font-semibold transition-all duration-200 ease-in">goals with <br/>science-based targets</h1>
                        <div className="hidden">
                            <h3>Goals with Science-Based Targets</h3>
                            <p>Science-based targets are a set of goals unique to a business that provide it with a clear path to reduce its greenhouse gas emissions. An emissions reduction target is only deemed ‘science-based' if it is developed in line with the scale of reductions required to keep global warming below 2°C from pre-industrial levels with continued efforts to limit global warming to 1.5°C. One Tree Planted can align with your business’s science-based targets by planting trees in the area of your choosing.</p>
                        </div>
                      </div>
                      <div className="box-3 flex flex-wrap justify-center items-center bg-teal-600 p-5 h-72 transition-all ease-in duration-300 flex-1 hover:flex-[4] hover:h-80 overflow-hidden">
                        <h1 className="text-white capitalize text-xl font-semibold transition-all duration-200 ease-in">carbon offset <br/>program</h1>
                        <div className="hidden">
                            <h3>Carbon Offset Program</h3>
                            <p>Nature-based Solutions projects at One Tree Planted are responsible for planting millions of trees globally, generating multiple benefits for the climate, biodiversity, and community livelihoods. Get in touch today to learn more about our $1 for 1 tree carbon estimates, carbon offsetting through existing projects, and custom nature-based solution projects for your business.</p>
                        </div>
                      </div>
                      
                    
                  </div>
                </div>{/**end ocordion divs */}
        </div>/**End return div */
);

}

export default Business;