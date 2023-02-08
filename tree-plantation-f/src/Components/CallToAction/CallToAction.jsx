import React from "react";

import "./CallToAction.css";

function CallToAction() {
  return (
    <div className="w-full text-center justify-center my-10">
      <h1 className="text-black font-extrabold text-5xl text-center leading-10">
        WATCH THE 2022 STORY
      </h1>
      <div>
        <button className="bg-red-500 max-auto my-3  py-2 px-6  text-white font-semibold border border-white rounded hover:border-transparent transition ease-in duration-200">
          PLAN A TREE
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
