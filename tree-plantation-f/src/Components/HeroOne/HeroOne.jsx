import React from "react";
import "./HeroOne.css";

function HeroOne() {
  return (
    <div
      class="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.shopify.com/s/files/1/0326/7189/files/tree-planting-event_1400x.jpg?v=1674589042')",
      }}
    >
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-50"></div>

      <main class="px-4 sm:px-6 lg:px-8 z-10">
        <div class="text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
            <span class="text-white font-bold">
              SUSTAINABILITY FOR BUSINESSES
            </span>
          </h2>
          <p class="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            MAKE A REAL IMPACT AND IMPROVE YOUR COMPANY'S SUSTAINABILITY
            INITIATIVES IN 2023
          </p>
          <div class="mt-5 sm:mt-8 sm:flex justify-center">
            <div class="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-10 py-3 border-2  text-base hover:text-xl leading-6 font-medium rounded-md text-indigo-50 hover:text-black hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-50 transition duration-500 ease-in-out md:py-3 md:text-lg md:px-10 border-white"
              >
                BECOME BUSINESS PARTNER
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroOne;
