import React ,{ useState }from "react";

function GiftTrees(){

   const [imgSrc , setImg] = useState("https://cdn.shopify.com/s/files/1/0326/7189/products/GiftTrees-mainimage_2000x.jpg?v=1672941277");
   const [imgId , setImgId] = useState("img1")
    function showImage(event){
        const imgURL = event.target.src;
        setImg(imgURL);
        const getId = event.target.id;
        setImgId(getId);
       }

    return(
        <div className="md:container mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="lg:w-1/2  md:w-screen">
                    <img onClick={showImage} src={imgSrc} className="scale-100"/>
                    <ul className="w-full flex justify-center mt-8">
                       <li className="w-1/6 mr-2"><img onClick={showImage} id="img1" className={imgId === 'img1'?'opacity-100':'opacity-50'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/GiftTrees-mainimage_2000x.jpg?v=1672941277" /> </li> 
                       <li className="w-1/6 mr-2"><img onClick={showImage} id="img2" className={imgId === 'img2'?'opacity-100':'opacity-50'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/PTWTNM-5_7643c241-ad1e-4719-ae8e-c6db2be015a6_2000x.jpg?v=1672941397" /> </li> 
                       <li className="w-1/6 mr-2"><img onClick={showImage} id="img3" className={imgId === 'img3'?'opacity-100':'opacity-50'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/GiftTreesCertificate_2000x.png?v=1672941269" /> </li> 
                       <li className="w-1/6 mr-2"><img onClick={showImage} id="img4" className={imgId === 'img4'?'opacity-100':'opacity-50'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/PTWTNM-1_09548e46-f71c-4977-9c7f-97a3bd94214c_2000x.jpg?v=1672941410" /> </li> 
                       <li className="w-1/6 mr-2"><img onClick={showImage} id="img5" className={imgId === 'img5'?'opacity-100':'opacity-50'} src="https://cdn.shopify.com/s/files/1/0326/7189/products/PTWTNM-3_a38e2530-d987-4e94-9f0c-8f6f64a003a5_2000x.jpg?v=1672941404" /> </li> 
                    </ul>
                </div>
                <div className=" bg-red-800 lg:w-1/2  md:w-screen">
                    words heree here               </div>
            </div>
        </div>
    );
}

export default GiftTrees;