import React from "react";

import "./Youtube.css";

function YouTube() {
  return (
    <div className=" my-20  text-center justify-center content-center">
      <iframe
        className="mx-auto w-full h-[663px]"
        src="https://www.youtube.com/embed/3ZRWJka6-1k"
        title="Planting 52 MILLION Trees: The 2022 Story | One Tree Planted"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YouTube;
