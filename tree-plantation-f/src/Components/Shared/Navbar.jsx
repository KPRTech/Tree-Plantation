import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube, FaRegUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';


const bgColor = {
  backgroundColor: "#2D4762"
}
const btnColor = {
  backgroundColor: "#d54d4d"
}

function Navbar(){
    return (
      <nav class="md:block hidden" style={bgColor}>
        <div class="2xl:w-[1400px] mx-auto flex flex-wrap justify-between items-center 2xl:pl-0 pl-6">
            <div className="flex items-center text-white uppercase font-sans">
              <Link to={'/'} className="px-2 hover:text-cyan-600">
                <FiMail />
              </Link>
              <Link to={'/'} className="px-2 hover:text-cyan-600">
                  <FaFacebookF />
              </Link>
              <Link to={'/'} className="px-2 hover:text-cyan-600">
                <FaInstagram />
              </Link>
              <Link to={'/'} className="px-2 hover:text-cyan-600">
                <FaLinkedinIn />
              </Link>
              <Link to={'/'} className="px-2 hover:text-cyan-600">
                <FaPinterestP />
              </Link>
              <Link to={'/'} className="px-2 hover:text-cyan-600">
                <FaTwitter />
              </Link>
              <Link to={'/'} className="px-2 hover:text-cyan-600">
                <FaYoutube />
              </Link>
              <Link to={'/'} className="lg:px-2 px-1.5 hover:text-cyan-600 lg:text-sm text-xs">1-800-408-7850</Link>
              <Link to={'/'} className="lg:px-2 px-1.5 hover:text-cyan-600 lg:text-sm text-xs">contact us</Link>
              <Link to={'/'} className="lg:px-2 px-1.5 hover:text-cyan-600 lg:text-sm text-xs">newsletter</Link>
            </div>
            
            <div class="flex items-center">
              <Link to={'/'} className="uppercase text-xs text-white px-6 py-3 font-bold hover:bg-red-300" style={btnColor}>donate</Link>
              <Link to={'/'} className="uppercase text-xs text-white px-6 py-3 font-bold hover:text-cyan-600 flex"><FaRegUser className="text-base" />login</Link>
              <button className="uppercase text-xs text-white px-6 py-3 font-bold hover:bg-red-300 flex" style={btnColor}  data-drawer-show="drawer-right-example" type="button" data-drawer-placement="right" aria-controls="drawer-right-example"><HiOutlineShoppingBag className="text-base" />0</button>
            </div>
        </div>
      </nav>
      
    );
}

export default Navbar;