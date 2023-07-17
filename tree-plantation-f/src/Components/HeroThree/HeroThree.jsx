import React from "react";
import "./HeroThree.css";

function HeroThree() {
  return (
    <div>
      <div
        class="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0326/7189/files/7_1_5be8ed09-0347-4d36-ac12-e11863fe25f9_1400x.jpg?v=1614322671')",
        }}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-50"></div>

        <main class="px-4 sm:px-6 lg:px-8 z-10">
          <div class="text-center">
            <h2 class="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
              <span class="text-indigo-50 font-bold">REFORESTATION</span>
            </h2>
            <p class="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              PLANTING TREES AROUND THE WORLD
            </p>
            <div class="mt-5 sm:mt-8 sm:flex justify-center">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-2 border-2 text-base leading-6 font-regular rounded-md font-semibold text-white border-white  hover:bg-indigo-50 focus:outline-none hover:text-black focus:border-indigo-50  focus:shadow-outline-indigo transition duration-500 ease-in-out md:py-2 md:px-10"
                >
                  WHY TREES?
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-2 border-2 text-base leading-6 font-regular rounded-md font-semibold text-sm  text-white hover:text-black hover:bg-indigo-50 focus:outline-none border-white focus:shadow-outline-indigo focus:border-indigo-50 transition duration-500 ease-in-out md:py-2 md:px-10"
                >
                  PLANTS A TREE
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HeroThree;
