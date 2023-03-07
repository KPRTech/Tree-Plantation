import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Dropdown from './Dropdown';
import { Link } from "react-router-dom";


const bgColor = {
  backgroundColor: "#2D4762"
}
const btnColor = {
  backgroundColor: "#d54d4d"
}

function NavbarSm(){
    return (
      <nav class="md:hidden block" style={bgColor}>
        <div class="flex flex-wrap justify-between items-center 2xl:pl-0">
            <div className="min-[360]:w-28 flex items-center justify-start"><Dropdown /></div>
            <div className="min-[360]:w-28 flex items-center justify-center text-white uppercase font-sans">
              <Link to={'/'} className=""><img className="sm:w-28 w-24 h-full" src="https://cdn.shopify.com/s/files/1/0326/7189/files/one-tree-planted-logo-white.svg?v=1619731262" alt="" /></Link>
            </div>
            
            <div class="flex items-center min-[360]:w-28 justify-end">
              <BiSearch className="text-white sm:text-2xl text-lg mr-2" />
              <button className="uppercase text-xs text-white px-6 py-3 font-bold hover:bg-red-300 flex" style={btnColor}  data-drawer-show="drawer-right-example" type="button" data-drawer-placement="right" aria-controls="drawer-right-example"><HiOutlineShoppingBag className="text-base" />0</button>
            </div>
        </div>
      </nav>
      
    );
}

export default NavbarSm;