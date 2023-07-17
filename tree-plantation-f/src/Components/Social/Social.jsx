import React from "react";
import "./Social.css";
import { FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <div className=" grid lg:grid-cols-3 my-5">
      <div className=" lg:col-span-2 mx-4">
        <div className="social__heading">
          <h1 className="heading__text text-center">
            FOLLOW US @ONETREEPLANTED
          </h1>
        </div>
        {/* Card Section */}
        <div class="flex  items-center justify-center ">
          <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {/* 1st Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="	https://images.pexels.com/photos/2253815/pexels-photo-2253815.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  The first month of the new y...
                </p>
              </div>
            </div>
            {/* 2st Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/2884909/pexels-photo-2884909.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  Andes Reforestation: Queuña...
                </p>
              </div>
            </div>
            {/* 3st Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/2063892/pexels-photo-2063892.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  Wherever we go, our team kno...
                </p>
              </div>
            </div>
            {/* 4st Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  It's a tree, no, it's a plant! It's BAMBOO🌱😂 .
                </p>
              </div>
            </div>
            {/* 5th Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/3581847/pexels-photo-3581847.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  Innovation Week | The Importa..
                </p>
              </div>
            </div>
            {/* 6th Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/2949825/pexels-photo-2949825.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  We are honored to help resto..
                </p>
              </div>
            </div>
            {/* 7th Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/3889927/pexels-photo-3889927.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  Did you know that there are t..
                </p>
              </div>
            </div>
            {/* 8th Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/1109907/pexels-photo-1109907.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[82%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  Winter trees offer a unique v..
                </p>
              </div>
            </div>
            {/* 9th Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1655682597128-2b10c079cf83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ODU4ODMwNTl8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  Our FREE grade school progra..
                </p>
              </div>
            </div>
            {/* 10th Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.unsplash.com/photo-1543181077-099f32f30a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzN8ODU4ODMwNTl8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  Innovation Week | We are Enha..🌲
                </p>
              </div>
            </div>
            {/* 11th Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/920038/pexels-photo-920038.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  74500 Native Tree Planted..🌲
                </p>
              </div>
            </div>
            {/* 12th Card */}
            <div class="h-40 w-50 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div class="h-40 w-50">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 "
                  src="https://images.pexels.com/photos/4200705/pexels-photo-4200705.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              <div class="h-40 w-50 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="h-40 w-50 absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <button className="rounded-md py-2 px-3.5 font-com text-sm capitalize text-white shadow ">
                  <FaInstagram size={30} />
                </button>
                <p class="font-dmserif text-sm  text-white">
                  Nature Makes us happy..🌲
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social__Rigth */}
      <div className="grid col-span-1 ">
        <h1 className="text-xl my-4 text-center">
          Tweets from @onetreeplanted
        </h1>
        <div className="social_right">
          <div>
            <div class="bg-gray-50  px-10 flex items-center justify-center">
              <div class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4  border max-w-xl">
                <div class="flex justify-between">
                  <div class="flex items-center">
                    <img
                      class="h-11 w-11 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1587414931749601283/23eojRWg_400x400.jpg"
                      alt="post_image"
                    />
                    <div class="ml-1.5 text-sm leading-tight">
                      <span class="text-black dark:text-white font-bold block ">
                        One Tree Planted
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 font-normal block">
                        @onetreeplanted
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 font-normal block">
                        14h
                      </span>
                    </div>
                  </div>
                </div>
                <p class="text-black dark:text-white block text-sm leading-snug mt-3">
                  During our Innovation #Webinar, you will... <br />
                  <p>🌱Meet three tech key</p>
                  <p>🌱Chat with them about all things tech </p>
                  <p>
                    🌱Leave with key takeaways that you can apply to your career
                  </p>
                  <p>
                    🌱Chat with them about all things tech 🌱Learn about
                    different ways you can make an impact
                  </p>
                  experts <br />
                  <p>Register here👇🌱🤗</p>
                </p>
                <img
                  class="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
                  src="https://pbs.twimg.com/media/FnrNYz6XEAIv2qA?format=jpg&name=360x360"
                  alt="post_image"
                />
                <p class="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
                  10:05 AM · Dec 19, 2020
                </p>
                <div class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
                <div class="text-gray-500 dark:text-gray-400 flex mt-3">
                  <div class="flex items-center mr-6">
                    <span className="ml-3 mb-6">615</span>
                  </div>
                  <div class="flex items-center mr-6">
                    <span class="ml-3 ">93 people are Tweeting about this</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-gray-50  px-10 flex ">
              <div class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4  border max-w-xl">
                <div class="flex ">
                  <div class="flex ">
                    <img
                      class="h-11 w-11 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1587414931749601283/23eojRWg_400x400.jpg"
                      alt="profile"
                    />
                    <div class="ml-1.5 text-sm leading-tight">
                      <span class="text-black dark:text-white font-bold block ">
                        One Tree Planted
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 font-normal block">
                        @onetreeplanted
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 font-normal block">
                        18h
                      </span>
                    </div>
                  </div>
                </div>
                <p class="text-black dark:text-white block text-sm leading-snug mt-3">
                  These are the famous "Dancing Trees" of Walakiri Beach, Sumba,
                  Indonesia 🌎 Aegialitis annulata is a less-common Asia-Pacific
                  #mangrove species that grows to 2-3 meters with a distinctive
                  #bonsai growth form
                </p>
                <img
                  class="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
                  src="https://pbs.twimg.com/media/FnqkPp_WAAAAfDI?format=jpg&name=360x360"
                  alt="post_image"
                />
                <p class="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
                  10:05 AM · Dec 19, 2020
                </p>

                <div class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
                <div class="text-gray-500 dark:text-gray-400 flex mt-3">
                  <div class="flex items-center mr-6">
                    <span class="ml-3 mb-6">615</span>
                  </div>
                  <div class="flex items-center mr-6">
                    <span class="ml-3">93 people are Tweeting about this</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-gray-50  px-10 flex items-center justify-center">
              <div class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4  border max-w-xl">
                <div class="flex justify-between">
                  <div class="flex items-center">
                    <img
                      class="h-11 w-11 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1587414931749601283/23eojRWg_400x400.jpg"
                      alt="post_image"
                    />
                    <div class="ml-1.5 text-sm leading-tight">
                      <span class="text-black dark:text-white font-bold block ">
                        One Tree Planted
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 font-normal block">
                        @onetreeplanted
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 font-normal block">
                        14h
                      </span>
                    </div>
                  </div>
                </div>
                <p class="text-black dark:text-white block text-sm leading-snug mt-3">
                  During our Innovation #Webinar, you will... <br />
                  <p>🌱Meet three tech key</p>
                  <p>🌱Chat with them about all things tech </p>
                  <p>
                    🌱Leave with key takeaways that you can apply to your career
                  </p>
                  <p>
                    🌱Chat with them about all things tech 🌱Learn about
                    different ways you can make an impact
                  </p>
                  experts <br />
                  <p>Register here👇🌱🤗</p>
                </p>
                <img
                  class="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
                  src="https://pbs.twimg.com/media/FnrNYz6XEAIv2qA?format=jpg&name=360x360"
                  alt="post_image"
                />
                <p class="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
                  10:05 AM · Dec 19, 2020
                </p>
                <div class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
                <div class="text-gray-500 dark:text-gray-400 flex mt-3">
                  <div class="flex items-center mr-6">
                    <span className="ml-3 mb-6">615</span>
                  </div>
                  <div class="flex items-center mr-6">
                    <span class="ml-3 ">93 people are Tweeting about this</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-gray-50  px-10 flex ">
              <div class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4  border max-w-xl">
                <div class="flex ">
                  <div class="flex ">
                    <img
                      class="h-11 w-11 rounded-full"
                      src="https://pbs.twimg.com/profile_images/1587414931749601283/23eojRWg_400x400.jpg"
                      alt="profile"
                    />
                    <div class="ml-1.5 text-sm leading-tight">
                      <span class="text-black dark:text-white font-bold block ">
                        One Tree Planted
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 font-normal block">
                        @onetreeplanted
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 font-normal block">
                        18h
                      </span>
                    </div>
                  </div>
                </div>
                <p class="text-black dark:text-white block text-sm leading-snug mt-3">
                  These are the famous "Dancing Trees" of Walakiri Beach, Sumba,
                  Indonesia 🌎 Aegialitis annulata is a less-common Asia-Pacific
                  #mangrove species that grows to 2-3 meters with a distinctive
                  #bonsai growth form
                </p>
                <img
                  class="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
                  src="https://pbs.twimg.com/media/FnqkPp_WAAAAfDI?format=jpg&name=360x360"
                  alt="post_image"
                />
                <p class="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
                  10:05 AM · Dec 19, 2020
                </p>

                <div class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
                <div class="text-gray-500 dark:text-gray-400 flex mt-3">
                  <div class="flex items-center mr-6">
                    <div
                      class="fill-current h-5 w-auto"
                      viewBox="0 0 24 24"
                      className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                    >
                      <g>
                        <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                      </g>
                    </div>
                    <span class="ml-3 mb-6">615</span>
                  </div>
                  <div class="flex items-center mr-6">
                    <div
                      class="fill-current h-5 w-auto"
                      viewBox="0 0 24 24"
                      className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                    >
                      <g>
                        <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                      </g>
                    </div>
                    <span class="ml-3">93 people are Tweeting about this</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
