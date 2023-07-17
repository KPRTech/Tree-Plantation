import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className=" my-10">
      <h1 className="heading__text text-center ">WHERE WE PLANT</h1>
      <div
        style={{
          borderBottom: "1px solid lightgray",
          marginBottom: "30px",
          marginTop: "20px",
        }}
      ></div>
      <div>
        <div class="flex items-center justify-center ">
          <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
            <div className=" h-48 w-60 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div className="h-48 w-60">
                <img
                  className="h-full w-full object-contain transition-transform duration-500 "
                  src="https://cdn.shopify.com/s/files/1/0326/7189/collections/NORTH_AMERICA_7e760cad-7caf-467f-a412-223a9123cf99_200x.jpg?v=1636669523"
                  alt=""
                />
              </div>
              <div className="h-48 w-60 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="h-48 w-60 absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h5 class="font-dmserif text-xl font-normal tracking-wide my-2 text-white text-transform: uppercase">
                  North America
                </h5>

                <button class="rounded-md font-medium ease-in duration-500 border-2 border-white py-2 px-12 font-com text-sm text-white hover:text-black shadow shadow-black/60 text-transform: uppercase hover:bg-slate-50">
                  view all
                </button>
              </div>
            </div>
            <div class="h-48 w-60 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-48 w-60">
                <img
                  class="h-full w-full object-contain transition-transform duration-500 "
                  src="https://cdn.shopify.com/s/files/1/0326/7189/collections/9_200x.jpg?v=1636669631"
                  alt=""
                />
              </div>
              <div class="h-48 w-60 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-48 w-60 absolute inset-0 flex translate-y-[95%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h5 class="font-dmserif text-xl font-normal tracking-wide my-2 text-white text-transform: uppercase">
                  Latin America
                </h5>

                <button class="rounded-md font-medium ease-in duration-500 border-2 border-white py-2 px-12 font-com text-sm text-white hover:text-black shadow shadow-black/60 text-transform: uppercase hover:bg-slate-50">
                  view all
                </button>
              </div>
            </div>
            <div class="h-48 w-60 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-48 w-60">
                <img
                  class="h-full w-full object-contain transition-transform duration-500 "
                  src="	https://cdn.shopify.com/s/files/1/0326/7189/collections/africa2_200x.jpg?v=1637009171"
                  alt="Africa"
                />
              </div>
              <div class="h-48 w-60 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-48 w-60 absolute inset-0 flex translate-y-[95%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h5 class="font-dmserif text-xl font-normal tracking-wide my-2 text-white text-transform: uppercase">
                  Africa
                </h5>

                <button class="rounded-md font-medium ease-in duration-500 border-2 border-white py-2 px-12 font-com text-sm text-white hover:text-black shadow shadow-black/60 text-transform: uppercase hover:bg-slate-50">
                  view all
                </button>
              </div>
            </div>
            <div class="h-48 w-60 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-48 w-60">
                <img
                  class="h-full w-full object-contain transition-transform duration-500 "
                  src="	https://cdn.shopify.com/s/files/1/0326/7189/collections/4_200x.jpg?v=1637009204"
                  alt=""
                />
              </div>
              <div class="h-48 w-60 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-48 w-60 absolute inset-0 flex translate-y-[95%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h5 class="font-dmserif text-xl font-normal tracking-wide my-2 text-white text-transform: uppercase">
                  Asia
                </h5>

                <button class="rounded-md font-medium ease-in duration-500 border-2 border-white py-2 px-12 font-com text-sm text-white hover:text-black shadow shadow-black/60 text-transform: uppercase hover:bg-slate-50">
                  View All
                </button>
              </div>
            </div>
            <div class="h-48 w-60 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
              <div class="h-48 w-60">
                <img
                  class="h-full w-full object-contain transition-transform duration-500 "
                  src="https://cdn.shopify.com/s/files/1/0326/7189/collections/europe_200x.png?v=1638392041"
                  alt=""
                />
              </div>
              <div class="h-48 w-60 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-48 w-60 absolute inset-0 flex translate-y-[95%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h5 class="font-dmserif text-xl font-normal tracking-wide my-2 text-white text-transform: uppercase">
                  Europe
                </h5>

                <button class="rounded-md font-medium ease-in duration-500 border-2 border-white py-2 px-12 font-com text-sm text-white hover:text-black shadow shadow-black/60 text-transform: uppercase hover:bg-slate-50">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
