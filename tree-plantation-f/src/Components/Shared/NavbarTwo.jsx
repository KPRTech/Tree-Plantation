import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import ButtonCard1 from "./Navbar/ButtonCard1";
import ButtonCard2 from "./Navbar/ButtonCard2";
import ButtonCard3 from "./Navbar/ButtonCard3";
import ButtonCard4 from "./Navbar/ButtonCard4";
import ButtonCard5 from "./Navbar/ButtonCard5";
import navbtn from "./Navbar/navbtn";


function NavbarTwo(){

    return(
        <nav class="py-3 px-5 bg-[#313539] md:block hidden">
            <div className="2xl:w-[1400px] mx-auto flex">
                <Link to={'/'} className="mr-5"><img className="lg:max-w-[205px] max-w-[180px] h-full" src="https://cdn.shopify.com/s/files/1/0326/7189/files/one-tree-planted-logo-white.svg?v=1619731262" alt="" /></Link>
                <div class="container flex flex-wrap items-center justify-start">
                    <ButtonCard1 item= {navbtn[0].item} itemLink= {navbtn[0].itemLink} />
                    <ButtonCard2 item= {navbtn[1].item} itemLink= {navbtn[1].itemLink} />
                    <ButtonCard3 item= {navbtn[2].item} itemLink= {navbtn[2].itemLink} />
                    <ButtonCard4 item= {navbtn[3].item} itemLink= {navbtn[3].itemLink} />
                    <ButtonCard5 item= {navbtn[4].item} itemLink= {navbtn[4].itemLink} />    
                </div>
                <div className="flex items-center">
                    <div className="flex items-center text-white border border-slate-300 rounded">
                        <input type="text" className="bg-transparent border-none w-40 text-sm" placeholder="Search" />
                        <BiSearch className="text-2xl mr-2" />
                    </div>
                </div>
            </div>
            
        </nav>
        

    );
    
}

export default NavbarTwo;