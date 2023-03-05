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
      <nav class="" style={bgColor}>
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

        <div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
          <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Right drawer</h5>
          <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close menu</span>
          </button>
          <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <Link to={'/'} class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</Link> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
          <div class="grid grid-cols-2 gap-4">
            <Link to={'/'} class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</Link>
            <Link to={'/'} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Link>
          </div>
        </div>
      </nav>
      
    );
}

export default Navbar;