import React, { useState, useEffect } from 'react';
import './Million.css';

function SchoolFirst() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    return (
        <>
        <div className="container-fluid">
        
        <div className="responsive-background mb-4  pb-none flex flex-wrap ">
        <div className="row">
        <div className="col-md-5 col-sm-12 justify-end">
        <img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-85eb9659--MTCbadge.png?v=1623774463" alt="" class="h-[360px] w-[360px] md:float-right lg:float-right xl:float-right -mt-10 mb-2" />
        </div>
            <div className="content w-1/1 text-left col-md-7 col-sm-12 ml-2 md:ml-0  lg:ml-0 xl:ml-0 2xl:ml-0">
                <h1 className="text-white font-bold sm:text-xl md:text-2xl lg:text-6xl mb-8 text-left" >MILLION TREE CHALLENGE</h1>
                <p className="text-white mb-10 text-left text-medium md:text-2xl">JOIN THE CHALLENGE BY PLANTING 10,000 TREES WITH YOUR BUSINESS IN NATIONAL FORESTS ACROSS THE U.S.</p>
                <button className="btn btn-danger w-52 font-bold rounded-none mr-2 float-left mb-2">JOIN THE PROGRAM</button>
                <button className="btn btn-danger w-52 font-bold rounded-none float-left" >JOIN THE PROGRAM</button>
            </div>
        </div>
        </div>
        <div className="flex justify-center space-x-4 sm:px-10 mb-2  ">
        <i class="bi bi-facebook text-blue-700 text-4xl hover:-mt-2"></i>
        <i class="bi bi-twitter text-blue-500 text-4xl hover:-mt-2"></i>
        <i class="bi bi-pinterest text-red-600 text-4xl hover:-mt-2"></i>
        <i class="bi bi-envelope-fill text-neutral-600 text-4xl hover:-mt-2"></i>
        <i class="bi bi-envelope-fill text-yellow-400 text-4xl hover:-mt-2"></i>
        <i class="bi bi-share-fill text-lime-500  text-4xl hover:-mt-2"></i>
        </div>
        </div>
        </>
    );
}

export default SchoolFirst ;