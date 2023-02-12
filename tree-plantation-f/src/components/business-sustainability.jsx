import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TreeElement from "./assets/treeEle";
import SocialIcons from "./assets/socialIcons";
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
                    <SocialIcons />
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
                  <div className="lg:w-1/5 md:w-2/5 sm:w-full xs:w-full md:px-0 sm:px-4 xs:m-auto m-auto text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-5501eace--treeplanting.jpg?v=1624897998" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3">SUPPORT REFORESTATION</h1>
                    <p className=" text-base font-normal mb-3">Plant one tree for <span className=" font-bold">every product or service sold with our one-for-one model</span>, donate a percentage of sales, or formulate special giving campaigns on social media.</p>
                    <button className=" w-56 rounded hover:text-white font-bold text-teal-600 border-2 border-teal-600 hover:bg-teal-600 py-1 px-2 bg-white transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>BECOME A PARTENER</span> </button>
                  </div>
                  <div className="lg:w-1/5 md:w-2/5 sm:w-full xs:w-full md:px-0 sm:px-4 xs:m-auto m-auto text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/groupofemployeeattreeplantingeventinmexico-1641504949839.jpg?v=1641504977" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3">EMPLOYEE ENGAGEMENT</h1>
                    <p className=" text-base font-normal mb-3">Our global tree planting events will help your team connect with nature, while also contributing to a <span className=" font-bold">positive environmental impact.</span></p>
                    <button className=" w-56 rounded hover:text-white font-bold text-teal-600 border-2 border-teal-600 hover:bg-teal-600 py-1 px-2 bg-white transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>PLAN AN ACTIVITY</span> </button>
                  </div>
                  <div className="lg:w-1/5 md:w-2/5 sm:w-full xs:w-full md:px-0 sm:px-4 xs:m-auto m-auto text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/one-tree-planted-urban-tree-new-york-city-1660765574971.jpg?v=1660765577" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3">URBAN REFORESTATION</h1>
                    <p className=" text-base font-normal mb-3">Support one of our urban reforestation projects by planting close to your <span className=" font-bold">headquarters</span> and improving your <span className=" font-bold">local biodiversity.</span></p>
                    <button className=" w-56 rounded hover:text-white font-bold text-teal-600 border-2 border-teal-600 hover:bg-teal-600 py-1 px-2 bg-white transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>LEARN MORE</span> </button>
                  </div>
                  <div className="lg:w-1/5 md:w-2/5 sm:w-full xs:w-full md:px-0 sm:px-4 xs:m-auto m-auto text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-d4609a08--milliontreechallenge.jpg?v=1628543783" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3">MILLION TREE CHALLENGE</h1>
                    <p className=" text-base font-normal mb-3">Join an exclusive community of only 100 environmentally conscious businesses who are <span className=" font-bold">planting 10,000 trees across US National Forests</span></p>
                    <button className=" w-56 rounded hover:text-white font-bold text-teal-600 border-2 border-teal-600 hover:bg-teal-600 py-1 px-2 bg-white transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                            <span>JOIN THE CHALLENGE</span> </button>
                  </div>
                </div>{/**end activities area */}

                <div className=" overflow-hidden h-[400px]">
                  <div id="parallex"> </div>  
                </div>{/**end animated background */}

                <div className="flex flex-col items-center pt-20 mb-10">
                  <h1 className="  sm:text-2xl xs:text-2xl md:text-4xl font-bold mb-4">HOW BUSINESSES ARE GIVING BACK</h1>
                  <p className=" xs:text-base sm:text-base md:text-xl">Check out how our awesome partners are making an impact in their communities and around the world.</p>
                  <p className=" xs:text-base sm:text-base md:text-xl font-bold mb-4">We can tailor our offerings to fit your business's needs, no matter what they may be.</p>
                  <button className=" w-72 rounded text-white font-bold bg-slate-900 py-1 px-2 ml-4 transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                        <span className=" capitalize">download case studies</span> </button>
                </div>{/**case study area */}

                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-x-14 gap-y-3 justify-center w-11/12 m-auto pb-10">
                  <div className="text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/frame-55-1660931777857.jpg?v=1660931780" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3 text-teal-600	">TOBLERONE</h1>
                    <p className=" text-base font-normal mb-3">As part of a point of sale campaign, Toblerone planted one tree for every product sold to support reforestation. Toblerone also lets their customers plant additional trees through a custom fundraising microsite.</p>
                    <p>The initiative helped to plant over 95,000 trees in the Andes Mountains of South America.</p>
                  </div>
                  <div className="text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/treesaplings-1644611819147.jpg?v=1644611877" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3 text-teal-600	">AMAZON ALEXA</h1>
                    <p className=" text-base font-normal mb-3">Amazon teamed up with One Tree Planted to enable U.S. customers to plant trees through their Alexa Device. By saying “Alexa, grow a tree” users can make hands free donations for reforestation.</p>
                    <p>In addition to this campaign, Amazon Alexa also donated one million trees to support global reforestation.</p>
                  </div>
                  <div className="text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/hendricks-gin-1660930110062.jpg?v=1660930113" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3 text-teal-600	">HENDRICK'S GIN</h1>
                    <p className=" text-base font-normal mb-3">Hendricks released their limited edition Amazonia Gin, inspired by the bright, tropical flavors of the Amazon. Every bottle purchased contributes towards planting trees in the Amazon.</p>
                    <p>The initiative has helped to plant over 200,000 trees in the rainforests of South America.</p>
                  </div>
                  <div className="text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/frame-52-1660931552263.jpg?v=1660931555" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3 text-teal-600	">VOLVO</h1>
                    <p className=" text-base font-normal mb-3">As part of their #RechargeThursday initiative, Volvo encouraged people to test drive their plug-in hybrid or electric vehicles on Thursdays at participating dealerships. Every test drive planted 5 trees through One Tree Planted.</p>
                    <p>The initiative has resulted in several hundred test drives and thousands of trees planted across Canada.</p>
                  </div>
                  <div className="text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/coffeesustainability2_ed1ba339a71f45058c228982d93a69c9prv-1660930185287.jpeg?v=1660930187" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3 text-teal-600	">DUNKIN'</h1>
                    <p className=" text-base font-normal mb-3">To celebrate the release of their limited batch 100% Guatemalan coffee, Dunkin’ supported agroforestry projects in Guatemala by donating 10 cents of every cup sold to One Tree Planted.</p>
                    <p>The initiative resulted in the planting of 250,000 trees in agroforestry projects in Guatemala.</p>
                  </div>
                  <div className="text-left mb-3">
                    <div className="aspect-square"><img className=" rounded shadow-md	shadow-slate-300 h-full w-full max-w-full" src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/hsbccasestudy-1669741041829.jpg?v=1669741043" alt=""/> </div>
                    <h1 className=" text-xl font-semibold my-3 text-teal-600	">HSBC</h1>
                    <p className=" text-base font-normal mb-3">HSBC partnered with One Tree Planted to launch a variety of campaigns, ranging from a ‘reforestation donation’ credit card reward program to incentivizing employees worldwide to complete sustainable banking programs.</p>
                    <p>By the end of 2022, HSBC donations have planted 300,000 trees across the world with many more still to come.</p>
                  </div>
                </div>{/**volunteer area */}
                
                <div className="bgOcordion w-full  border-t border-slate-300 pt-20">
                  <div className=" w-10/12 m-auto mb-8">
                    <h1 className=" text-4xl font-bold text-center mb-8">MORE PARTNERSHIP OPTIONS</h1>
                    <p className="text-center text-xl">Looking to scale your impact even further? While planting trees will always remain the core of One Tree Planted, we're always looking for new ways to drive change in the environmental landscape. Supporting the UN's 17 Sustainable Development Goals, working towards goals with science-based targets, and offering a comprehensive carbon offset program allows businesses unique ways to align their company mission with ours.</p>
                  </div>  
                  <div className="flex lg:flex-row md:flex-row xl:flex-row sm:flex-col xs:flex-col justify-center overflow-hidden max-w-full h-80 w-10/12 m-auto flex-wrap  ">
                      <div className="box flex flex-wrap justify-center items-center bg-teal-800 p-5 h-72 transition-all ease-in duration-300 flex-1 hover:flex-[4] hover:h-80 overflow-hidden shadow-md shadow-slate-400">
                        <h1 className="text-white capitalize text-xl font-semibold transition-all duration-300 ease-in block hover:hidden">the un's sustainable <br/>development goals</h1>
                      
                        <div className="text-white ">
                            <h3 className="mb-4">The UN's Sustainable Development Goals</h3>
                            <p>The 17 UN Sustainable Development Goals (SDGs) are a plan to create a better and more sustainable future for all. Established by the United Nations, the SDGs are an urgent call to action and global partnership among all countries. They represent key benchmarks for addressing poverty, inequality, climate change, and establishing peace and justice. Reforestation and land restoration helps to benefit all 17 of the UN’s Sustainable Development Goals. Planting trees is a unique opportunity to align your company’s SDG-related targets with reforestation projects of your choosing.</p>
                        </div>
                      </div>
                      <div className="box flex flex-wrap justify-center items-center bg-teal-700 p-5 h-72 transition-all ease-in duration-300 flex-1 hover:flex-[4] hover:h-80 overflow-hidden shadow-md shadow-slate-400">
                        <h1 className="text-white capitalize text-xl font-semibold transition-all duration-300 ease-in block hover:hidden">goals with <br/>science-based targets</h1>
                        
                        <div className="text-white ">
                            <h3 className="mb-4">Goals with Science-Based Targets</h3>
                            <p>Science-based targets are a set of goals unique to a business that provide it with a clear path to reduce its greenhouse gas emissions. An emissions reduction target is only deemed ‘science-based' if it is developed in line with the scale of reductions required to keep global warming below 2°C from pre-industrial levels with continued efforts to limit global warming to 1.5°C. One Tree Planted can align with your business’s science-based targets by planting trees in the area of your choosing.</p>
                        </div>
                      </div>
                      <div className="box flex flex-wrap justify-center items-center bg-teal-600 p-5 h-72 transition-all ease-in duration-300 flex-1 hover:flex-[4] hover:h-80 overflow-hidden shadow-md shadow-slate-400">
                        <h1 className="text-white capitalize text-xl font-semibold transition-all duration-300 ease-in block hover:hidden">carbon offset <br/>program</h1>
                      
                        <div className="text-white ">
                            <h3 className="mb-4">Carbon Offset Program</h3>
                            <p>Nature-based Solutions projects at One Tree Planted are responsible for planting millions of trees globally, generating multiple benefits for the climate, biodiversity, and community livelihoods. Get in touch today to learn more about our $1 for 1 tree carbon estimates, carbon offsetting through existing projects, and custom nature-based solution projects for your business.</p>
                        </div>
                      </div>
                  </div>
                  
                </div>{/**end ocordion divs */}
                
                <div className=" bg-slate-100 pt-20 pb-24">
                  <div className="bgForm">
                    <div>
                      <h1 className="md:text-4xl sm:text-2xl xs:text-2xl font-bold tracking-wider mb-4">GET STARTED TODAY</h1>
                      <p className=" md:text-xl sm:text-base xs:text-base font-bold">Fill out the form and let us know how you want to get involved!</p>
                      <p className=" md:text-xl sm:text-base xs:text-base mb-10">You can also reach out to us directly by calling now or setting up a zoom call.</p>
                    </div>
                    <div className="flex lg:flex-row md:flex-row xl:flex-row sm:flex-col xs:flex-col justify-around items-start">
                      
                      <form className="grid grid-cols-2 gap-x-2 gap-y-3 justify-items-start text-left xl:w-5/12 lg:w-5/12 md:w-full sm:w-full xs:w-full m-auto">
                        <div className="w-full">
                          <label className="block font-bold">First Name</label>
                          <input className="w-full" type="text" value="" placeholder="Type your first name"/>
                        </div>
                        
                        <div className="w-full">
                        <label className="block font-bold">Last Name</label>
                          <input className="w-full" type="text" value="" placeholder="Type your last name"/>
                        </div>

                        <div className="w-full">
                          <label className="block font-bold">Email</label>
                          <input className="w-full" type="text" value="" placeholder="Enter your email"/>
                        </div>

                        <div className="w-full">
                          <label className="block font-bold">Company Name</label>
                          <input className="w-full" type="text" value="" placeholder="Type your company name"/>
                        </div>

                        <div className="w-full">
                          <label className="block font-bold">Company Website</label>
                          <input className="w-full" type="text" value="" placeholder="Type your company URL"/>
                        </div>

                        <div className="w-full">
                          <label className="block font-bold">Phone Number</label>
                          <input className="w-full" type="text" value="" placeholder="Phone Number"/>
                        </div>

                        <div className=" col-span-2 w-full">
                          <label className="block font-bold">Message</label>
                          <input className="w-full" type="text" value="" placeholder="Type your message here"/>
                        </div>

                        <div className=" col-span-2 w-full flex items-center justify-start my-3">
                          <input type="checkbox" value=""/>
                          <label className="w-full ml-2">I would like to receive monthly updates on projects and exclusive opportunities available to business partners!</label>
                        </div>
                        <button className=" w-full col-span-2 rounded text-white font-bold bg-red-600 py-1 px-2 hover:bg-red-500 transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12" role={SubmitEvent}>
                            <span>SUBMIT</span> </button>
                      </form>
                      
                      <div className="text-left xl:w-5/12 lg:w-5/12 md:w-full sm:w-full xs:w-full m-auto sm:ml-3 xs:ml-3">
                        <h3 className=" font-semibold text-xl mt-5 mb-2">AS A BUSINESS PARTNER, YOU WILL GET ACCESS TO:</h3>
                        <ul className="list-outside border-b border-slate-300 pb-2">
                          <li className=" mb-2 text-base"> <TreeElement class=" inline text-[#417f45] mr-2"/> <span>Incredible sustainability stories for your business</span></li>
                          <li className=" mb-2 text-base"> <TreeElement class=" inline text-[#417f45] mr-2"/> <span>A dedicated account manager to help you accomplish your goals</span></li>
                          <li className=" mb-2 text-base"> <TreeElement class=" inline text-[#417f45] mr-2"/> <span>Access to a library of amazing photos, videos, and marketing assets</span></li>
                          <li className=" mb-2 text-base"> <TreeElement class=" inline text-[#417f45] mr-2"/> <span>Regular updates on all the projects you are supporting</span></li>
                          <li className=" mb-2 text-base"> <TreeElement class=" inline text-[#417f45] mr-2"/> <span>Visibility on our website and social media (after a donation milestone)</span></li>
                        </ul>
                        <div className="flex justify-start items-center pt-4">
                          <button className=" w-48 rounded text-white font-bold bg-emerald-800 py-1 px-2 mr-4 hover:bg-emerald-700 transition-all duration-300	ease-in text-sm hover:text-base max-h-16 h-12">
                          <span>SET UP A ZOOM CALL</span> </button>
                          <p className="ml-4 text-xl font-semibold tracking-wider">1.800.408.7850</p>
                        </div>

                      </div>
                    </div>
                
                  </div>
                </div>{/**end get started form */}

        </div>/**End return div */
);

}

export default Business;