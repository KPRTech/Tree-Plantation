import React from "react";
import { Link } from "react-router-dom";
import ButtonCard1 from "./Navbar/ButtonCard1";
import ButtonCard2 from "./Navbar/ButtonCard2";
import ButtonCard3 from "./Navbar/ButtonCard3";
import ButtonCard4 from "./Navbar/ButtonCard4";
import ButtonCard5 from "./Navbar/ButtonCard5";
import navbtn from "./Navbar/navbtn";


function NavbarTwo(){

    return(
        <nav class="py-3.5 px-5 bg-[#313539] flex">
            <a href={'/'} className="mr-5"><img className="w-48 h-full" src="https://cdn.shopify.com/s/files/1/0326/7189/files/one-tree-planted-logo-white.svg?v=1619731262" alt="" /></a>
            <div class="container flex flex-wrap items-center justify-start">
                <ButtonCard1 item= {navbtn[0].item} itemLink= {navbtn[0].itemLink} />
                <ButtonCard2 item= {navbtn[1].item} itemLink= {navbtn[1].itemLink} />
                <ButtonCard3 item= {navbtn[2].item} itemLink= {navbtn[2].itemLink} />
                <ButtonCard4 item= {navbtn[3].item} itemLink= {navbtn[3].itemLink} />
                <ButtonCard5 item= {navbtn[4].item} itemLink= {navbtn[4].itemLink} />    
            </div>
            <div>
                <input type="text" className="" />
            </div>
            
        </nav>
        

    );
    
}

export default NavbarTwo;