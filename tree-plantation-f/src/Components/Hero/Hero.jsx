import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div
        class="relative h-screen w-full flex items-center justify-start text-left bg-cover bg-center h-700"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0326/7189/files/harli-marten-M9jrKDXOQoU-desktop_1400x.jpg?v=1675290039')",
        }}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-50"></div>

        <main class="px-10 lg:px-24 z-10">
          <div class="text-left">
            <p class="mb-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg  ">
              ONE DOLLAR. ONE TREE. ONE PLANT.
            </p>
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
              WE PLANT TREES
            </h2>
            <p class="mt-2 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg ">
              TOGETHER, PLANTING A FOREST!
            </p>
            <div class="mt-5 sm:mt-8 sm:flex justify-start">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-indigo-50 hover:bg-indigo-50 focus:outline-none focus:border-indigo-50 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-2 md:text-lg md:px-8"
                >
                  PLAN A TREE
                </a>
              </div>
              <div class=" sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-2 border-2 border-white text-base leading-6 font-medium rounded-md text-indigo-50 hover:text-black hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-50 transition duration-150 ease-in-out md:py-2 md:text-lg md:px-8 "
                >
                  START A FUNDRAISER
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div style={{ borderBottom: "20px solid #0258B5" }}></div>
      <div style={{ borderBottom: "20px solid #F6CE00 " }}></div>
    </div>
  );
}

export default Hero;
