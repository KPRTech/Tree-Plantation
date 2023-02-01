import React ,{ useState }from "react";
import "./style.css";
//import { Tabs } from 'flowbite';
function GiftTrees(){

    /*function to display imgs in large view and change opacity */
   const [imgSrc , setImg] = useState("https://cdn.shopify.com/s/files/1/0326/7189/products/GiftTrees-mainimage_2000x.jpg?v=1672941277");
   const [imgId , setImgId] = useState("img1")
   
   function showImage(event){
        const imgURL = event.target.src;
        setImg(imgURL);
        const getId = event.target.id;
        setImgId(getId);
       }
    /****************************************************************************************************** */
    /*function to get only the max length of input */
    /*function handleInput(e){
        const inputValLength = e.target.value.length;
        const maxLength = e.target.maxLength;
        //console.log(inputVal);
        if(inputValLength > maxLength){
            
          e.target.value.slice(0,maxLength);
            }
        }*/
    /****************************************************************************************************** */
    /**function to get input value */
    const [donateVal , setDonateVal] = useState("00");
    function handleOnChange(e){
       // const donateInput = eve.target.value;
        setDonateVal(e.target.value);
    }
    /**function to get value of button */
    function handleClickedBtn (e){
        setDonateVal(e.target.textContent);
    }
    function handleOtherBtn (e){
        setDonateVal("");
    }
    /** */
    /**for tabs */
    const [tabID , setTabID] = useState("tab1");
    function handleTabsClicked (e){
        //const clickedClasses = ["border-slate-500" , "text-gray-800"];
        //const notClicked = ["border-transparent" , "text-emerald-600"];
        setTabID(e.currentTarget.id);
        console.log(e.currentTarget.classList)
    }







   /* const tabElements = [
        {
            id: 'overview',
            triggerEl: document.querySelector('#tab1'),
            targetEl: document.querySelector('#overview')
        },
        {
            id: 'impact',
            triggerEl: document.querySelector('#tab2'),
            targetEl: document.querySelector('#impact')
        },
        {
            id: 'whatyGet',
            triggerEl: document.querySelector('#tab3'),
            targetEl: document.querySelector('#whatYGet')
        },
        {
            id: 'treespc',
            triggerEl: document.querySelector('#tab4'),
            targetEl: document.querySelector('#tree')
        }
    ];
    
    // options with default values
    const options = {
        defaultTabId: 'overview',
        activeClasses: 'border-b-2 border-gray-500 text-gray-800 hover:text-gray-800',
        inactiveClasses: 'border-transparent text-emerald-600',
        onShow: () => {
            console.log('tab is shown');
        }
    };
    const tabs = new Tabs(tabElements, options);
    tabs.show('overview');*/
    return(
        <div className="w-full  my-14">
        <div className="mx-auto w-10/6">
            <div className="flex flex-col md:flex-row justify-center lg:items-start">
                <div className="lg:w-6/12 lg:mx-0 md:w-full md:mx-5">
                    <img onClick={showImage} alt="" src={imgSrc} className="scale-100 w-full"/>
                
                <ul className="w-full flex justify-center mt-8">
                    <li className="w-1/6 mr-2 cursor-pointer"><img onClick={showImage} id="img1" alt="" className={imgId === 'img1'?'opacity-100  transition-all duration-300	ease-in':'opacity-50  transition-all duration-300	ease-in'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/GiftTrees-mainimage_2000x.jpg?v=1672941277" /> </li> 
                    <li className="w-1/6 mr-2 cursor-pointer"><img onClick={showImage} id="img2" alt="" className={imgId === 'img2'?'opacity-100  transition-all duration-300	ease-in':'opacity-50  transition-all duration-300	ease-in'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/PTWTNM-5_7643c241-ad1e-4719-ae8e-c6db2be015a6_2000x.jpg?v=1672941397" /> </li> 
                    <li className="w-1/6 mr-2 cursor-pointer"><img onClick={showImage} id="img3" alt="" className={imgId === 'img3'?'opacity-100  transition-all duration-300	ease-in':'opacity-50  transition-all duration-300	ease-in'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/GiftTreesCertificate_2000x.png?v=1672941269" /> </li> 
                    <li className="w-1/6 mr-2 cursor-pointer"><img onClick={showImage} id="img4" alt="" className={imgId === 'img4'?'opacity-100  transition-all duration-300	ease-in':'opacity-50  transition-all duration-300	ease-in'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/PTWTNM-1_09548e46-f71c-4977-9c7f-97a3bd94214c_2000x.jpg?v=1672941410" /> </li> 
                    <li className="w-1/6 mr-2 cursor-pointer"><img onClick={showImage} id="img5" alt="" className={imgId === 'img5'?'opacity-100  transition-all duration-300	ease-in':'opacity-50  transition-all duration-300	ease-in'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/PTWTNM-3_a38e2530-d987-4e94-9f0c-8f6f64a003a5_2000x.jpg?v=1672941404" /> </li> 
                </ul>
                </div>
            
            <div className="lg:w-5/12 md:w-10/12 md:ml-3 lg:pl-10 md:pl-4 text-start">
                  
                    <h3 className=" text-left text-3xl">GIFT TREES</h3>
                    <p className="text-left text-sm italic mt-2">ONE DOLLAR. ONE TREE.</p>
                    <div className="border-b border-solid border-slate-300 my-2"></div>
                    <p>Gift a tree in someone's name as a heartfelt and everlasting way to show your appreciation. These trees will support
                        <span className="font-bold"> AFR100, the African Forest Landscape Initiative! </span>Choose an image below, write your message, choose a delivery date and gift a tree.
                        <span><a href="#action">Learn more</a></span></p>
                    <p className="mt-2 mb-1">By gifting a tree, you will help to:</p>
                    <ul className="mb-3">
                        <li className="before:content-[url(https://cdn.shopify.com/s/files/1/0326/7189/files/checkmark-icon.svg?v=1621535987)] before:mr-2 before:text-emerald-400 opacity-70">Provide jobs to minimize poverty in local communities</li>
                        <li className="before:content-[url(https://cdn.shopify.com/s/files/1/0326/7189/files/checkmark-icon.svg?v=1621535987)] before:mr-2 before:text-emerald-400 opacity-70">Improve climate change resilience & mitigation</li>
                        <li className="before:content-[url(https://cdn.shopify.com/s/files/1/0326/7189/files/checkmark-icon.svg?v=1621535987)] before:mr-2 before:text-emerald-400 opacity-70">Restore forest cover to improve food security</li>
                    </ul>
                    <div className= "border border-neutral-300 rounded">
                        <p className="ml-2 my-2">NUMBER OF TREES TO BE PLANTED:</p>
                        <div className="flex justify-around my-2">
                            <button onClick={handleClickedBtn} className="w-1/6 py-1.5 rounded text-sm text-gray-600 font-bold  border border-gray-500 hover:text-white hover:bg-gray-500 hover:border-transparent focus:text-white focus:bg-gray-500 transition-all duration-300	ease-in">1</button>
                            <button onClick={handleClickedBtn} className="w-1/6 py-1.5 rounded text-sm text-gray-600 font-bold  border border-gray-500 hover:text-white hover:bg-gray-500 hover:border-transparent focus:text-white focus:bg-gray-500 transition-all duration-300	ease-in">20</button>
                            <button onClick={handleClickedBtn} className="w-1/6 py-1.5 rounded text-sm text-gray-600 font-bold  border border-gray-500 hover:text-white hover:bg-gray-500 hover:border-transparent focus:text-white focus:bg-gray-500 transition-all duration-300	ease-in">50</button>
                            <button onClick={handleClickedBtn} className="w-1/6 py-1.5 rounded text-sm text-gray-600 font-bold  border border-gray-500 hover:text-white hover:bg-gray-500 hover:border-transparent focus:text-white focus:bg-gray-500 transition-all duration-300	ease-in">100</button>
                            <button onClick={handleOtherBtn} className="w-1/6 py-1.5 rounded text-sm text-gray-600 font-bold  border border-gray-500 hover:text-white hover:bg-gray-500 hover:border-transparent focus:text-white focus:bg-gray-500 transition-all duration-300	ease-in">OTHER</button>
                        </div>
                        <div className="flex justify-start items-center my-2 border border-gray-500 text-gray-600 font-bold text-sm rounded  mx-2">
                            <span className="py-1 px-2">$</span>
                            <span className="py-1 grow border-x border-gray-500"><input  type="number"  name="numOfTrees" onChange={handleOnChange} value={donateVal.slice(0,7)} className="focus:outline-none focus:border-0 focus:ring-0 border-0 px-1 w-full"/></span>
                            <span className="py-1 px-2 ">USD</span>
                        </div>
                        
                    </div>
                    <div className="w-full flex justify-between items-center mt-3">
                            <h2 className="min-w-fit py-1 font-bold text-lg">$ {donateVal.slice(0,7)}.00 USD</h2>
                            <button className="flex justify-center items-center rounded text-white font-bold bg-red-600 py-2 w-10/12 px-2 ml-4 hover:bg-red-500 transition-all duration-300	ease-in text-xs hover:text-sm max-h-14 h-10">
                              <span className="mr-3"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift" >
  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
</svg></span> <span>GIFT TREES</span> </button>
                    </div>
                    <p className="py-8 border-b border-gray-300 text-sm text-center">Want to plant somewhere else?<span> <a href="#action" className="text-blue-400 hover:text-blue-500 decoration-solid underline-offset-1 underline">Click here</a></span> to see all our projects!</p>
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
                        
                    </ul>
                </div>    
            </div> 
         {/**Start Second Container */}
        <div className="my-10">
            <div className="flex flex-col items-center mb-4">
                <h1 className=" text-3xl font-semibold">GIVE THE GIFT OF TREES!</h1>
                <p className=" text-base">Select an image below and send your card. Need help gifting? Click here for our guide!</p>
                <p className="font-bold text-base">A Tree Certificate will be sent to the recipient with the e-card.</p>
            </div>

            <div className="flex lg:flex-row md:flex-col items-center justify-center">
                <div className="w-6/12">
                    <div className="table w-full mb-4 border-spacing-y-4	">
                    <div className="table-row">
                        <div className="table-cell text-left text-sm font-bold">To:</div>
                        <div className="table-cell text-left"><input type="text" placeholder="Type reciption's name" className="w-4/5 border-gray-300 text-sm text-gray-300" /></div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell text-left text-sm font-bold">e-mail:</div>
                        <div className="table-cell text-left"><input type="text" placeholder="Type reciption's email" className="w-4/5 border-gray-300 text-sm text-gray-300"/></div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell text-left text-sm font-bold">From:</div>
                        <div className="table-cell text-left"><input type="text" placeholder="Type your name" className="w-4/5 border-gray-300 text-sm text-gray-300"/></div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell text-left text-sm font-bold">Title:</div>
                        <div className="table-cell text-left"><input type="text" placeholder="Type a title - ex: Happy Birthday! - max 30 characters" className="w-4/5 border-gray-300 text-sm text-gray-300"/></div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell text-left text-sm font-bold">Message:</div>
                        <div className="table-cell text-left"><textarea placeholder="Type a message - ex: Enjoy Yout Gift! - max 250 characters"className="w-4/5 border-gray-300 text-sm text-gray-300 h-5"></textarea></div>
                    </div>
                    <div className="table-row mb-2">
                        <div className="table-cell text-left text-sm font-bold">Delivery Date:</div>
                        <div className="table-cell text-left"><input type="date" placeholder="01/28/2023" className="w-4/5 border-gray-300 text-sm text-gray-300"/></div>
                    </div>
                    </div>
                </div>
                <div className="w-5/12">right</div>
            </div>

            <div className="flex lg:flex-row md:flex-col sm:flex-col w-full items-center justify-center">
                <button className="rounded text-base border-2 border-red-500 text-red-500 font-bold bg-white py-2 lg:w-1/6 md:w-full sm:w-full md:mb-4 sm:mb-4 px-2 ml-4 hover:bg-red-500 hover:text-white transition-all duration-300	ease-in hover:text-lg max-h-15 h-11">
                Show Preview</button>
                <button className="rounded text-base text-white font-bold bg-red-600 py-2 lg:w-1/6 md:w-full sm:w-full md:mb-4 sm:mb-4 px-2 ml-4 hover:bg-red-500 transition-all duration-300	ease-in hover:text-lg max-h-15 h-11">
                Plant Trees</button>
                
            </div>
        </div> {/**end of second container */}
        <div className="w-100 bg-gray-50 flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-evenly">
            <div className=" lg:w-2/4 md:w-full sm:w-full xs:w-full lg:mt-12 lg:ml-12 md:m-0 sm:m-0 xs:m-0">
                <div className="border-b border-gray-200 text-sm ">
                    <ul id="tabs" className="flex flex-wrap justify-between -mb-px text-sm font-medium text-center">
                        <li><button id="tab1" onClick={handleTabsClicked} type="button" className='inline-block p-2   text-xs  rounded-t-lg text-emerald-600 hover:text-gray-800'>OVERVIEW</button></li>
                        <li><button id="tab2" onClick={handleTabsClicked} type="button" className="inline-block p-2   text-xs  rounded-t-lg text-emerald-600 hover:text-gray-800 ">iMPACT</button></li>
                        <li><button id="tab3" onClick={handleTabsClicked} type="button" className="inline-block p-2   text-xs  rounded-t-lg text-emerald-600 hover:text-gray-800 ">WHAT YOU GET</button></li>
                        <li><button id="tab4" onClick={handleTabsClicked} type="button" className="inline-block p-2   text-xs  rounded-t-lg text-emerald-600 hover:text-gray-800 ">TREE SPECIES</button></li>
                    </ul>
                </div>
                
                <ul id="myTabContent" className="mt-5 text-left">
                    <li className={tabID === "tab1"?"block":"hidden"}><p>Give the gift of trees! Trees are an environmentally-friendly option that helps to create a healthier planet. These trees will be planted to support AFR100 with TerraFund. As Africa is on a mission to reverse these trends and restore 100 million hectares of land by 2030, this country-led effort will restore 100 million hectares of land by 2030. This restoration work aims to enhance food security, increase climate change resilience and mitigation and combat rural poverty. This work will revolve around 32 participating countries in Africa, along with local communities, national governments, public and private sector partners, and international development programs.</p></li>
                    <li className={tabID === "tab2"?"block":"hidden"}><p>Planting trees in Africa reaps multiple benefits! Notably, reforestation here will help to add nutrients to the soil and control erosion, minimize poverty within local communities through the creation of jobs, and improve food security by feeding impoverished families through the planting of fruit trees. Ultimately, added forest cover in this region will diminish pressure on remaining forests, allowing biodiversity to flourish and ultimately helping with the global climate crisis.</p></li>
                    <li className={tabID === "tab3"?"block":"hidden"}><p>Both you and the giftee will receive a personalized tree certificate (see gallery) with the recipient's name to thank you for your donation. The giftee will get a custom e-card created by you on your date of choice. We will also send you updates about this project, so you can track the impact your trees are having on the community and environment.</p></li>
                    <li className={tabID === "tab4"?"block":"hidden"}><p>We will plant an array of indigenous tree species throughout Africa, such as Senegalia polyacantha, Faidherbia albida, Albizia adianthifolia, Persea americana, Calliandra calothyrsus, Macadamia spp., shea, and mahogany. Fruit trees will also be planted, which include mango, orange, tangerine, avocado, apple, guava, and Brazil nut. </p></li>
                </ul>
            </div>
            <div className="grow lg:w-1/4 md:w-full xs:w-full sm:w-full">
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/trees.svg?v=1621541883" alt="" className="lg:opacity-95 md:opacity-60 sm:opacity-60 xs:opacity-60" />
            </div>
        </div>{/**end of third container */}
        <div className="flex justify-between items-center my-14 border-solid border-b border-gray-300 pb-20 md:flex-row sm:flex-col xs:flex-col">
            <div className="flex flex-col items-center md:w-1/6 sm:w-full">
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/Quality_Projects_25fbb108-2b66-4cd9-ad53-40caa071135a.svg?v=1667567488" alt="QUALITY PROJECTS" className="md:w-24 sm:w-36 xs:w-36 mb-5" />
                <h3>QUALITY<span className="md:inline sm:hidden xs:hidden"><br/></span> PROJECTS</h3>
            </div>
            <div className="flex flex-col items-center md:w-1/6 sm:w-full">
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/Community_and_Social_Benefits_4f2e3b24-26ed-4161-bf9c-a8a5d43df26f.svg?v=1667567489" alt="COMMUNITY & SOCIAL BENEFITS" className="md:w-24 sm:w-36 xs:w-36 mb-5" />
                <h3>COMMUNITY &<span className="md:inline sm:hidden xs:hidden"><br/></span> SOCIAL BENEFITS</h3>
            </div>
            <div className="flex flex-col items-center md:w-1/6 sm:w-full">
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/Project_Reporting_13f3722b-8330-4d38-8146-fb839b97e987.svg?v=1667567489" alt="PROJECT REPORTING" className="md:w-24 sm:w-36 xs:w-36 mb-5" />
                <h3>PROJECT<span className="md:inline sm:hidden xs:hidden"><br/></span> REPORTING</h3>
            </div>
            <div className="flex flex-col items-center md:w-1/6 sm:w-full">
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/Wildlife_Protection_d6dd5e81-292b-4439-ae6b-d8ce71480f5e.svg?v=1667567488" alt="WILDLIFE PROTECTION" className="md:w-24 sm:w-36 xs:w-36 mb-5" />
                <h3>WILDLIFE<span className="md:inline sm:hidden xs:hidden"><br/></span> PROTECTION</h3>
            </div>
            <div className="flex flex-col items-center md:w-1/6 sm:w-full">
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/Climate_change_resilience_ac17e199-2fdc-413e-b796-04ca31e52e5b.svg?v=1667567488" alt="CLIMATE CHANGE RESILIENCE" className="md:w-24 sm:w-36 xs:w-36 mb-5" />
                <h3>CLIMATE CHANGE<span className="md:inline sm:hidden xs:hidden"><br/></span> RESILIENCE</h3>
            </div>

        </div>{/**end of forth container */}
        <div className="py-20">
            <h1 className="text-4xl font-bold">WHY GIFT TREES?</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-co1 xs:grid-cols-1 justify-items-center py-20 font-sans">
                <div className="lg:w-80 md:w-96 sm:w-full xs-w-full text-left">
                    <img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/image-3-1673041385159.jpg?v=1673041406" alt="TREES MAKE A GREAT LAST-MINUTE GIFT" className="drop-shadow-xl rounded-lg" />
                    <h3 className="mt-4 mb-2 text-xl font-semibold space-x-2 ">TREES MAKE A GREAT LAST-MINUTE GIFT</h3>
                    <p>As an eco-friendly alternative or complement to other presents, gifting trees makes for a great last-minute gift. Gifting trees is done digitally, so you don't have to wait on shipping and get the certificate and/or tree card immediately! </p>
                </div>
                <div className="lg:w-80 md:w-96 sm:w-full xs-w-full text-left">
                 <img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/image-2-1673041385114.jpg?v=1673041399" alt="THE BENEFITS OF TREES" className="drop-shadow-xl rounded-lg" />
                    <h3 className="mt-4 mb-2 text-xl font-semibold space-x-2">THE BENEFITS OF TREES</h3>
                    <p>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity. Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines. </p>
                </div>
                <div className="lg:w-80 md:w-96 sm:w-full xs-w-full text-left">
                 <img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/image-1-1673041385059.jpg?v=1673041388" alt="WHAT THE GIFTEE RECEIVES" className="drop-shadow-xl rounded-lg" />
                    <h3 className="mt-4 mb-2 text-xl font-semibold space-x-2">WHAT THE GIFTEE RECEIVES</h3>
                    <p>When you gift trees, both you and the giftee will receive a custom Tree Certificate or customizable card, and you'll be able to rest easy knowing that you've given a waste-free gift that will benefit, not harm, nature!</p>
                </div>
            </div>
        </div>
    </div>{/**end of wrapper div */}
    </div> /**end of page_return div */
    );
}

export default GiftTrees;