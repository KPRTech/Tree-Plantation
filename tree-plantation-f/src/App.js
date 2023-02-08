import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import BannerTwo from "./Components/BannerTwo/BannerTwo";
import CallToAction from "./Components/CallToAction/CallToAction";
import Cards from "./Components/Cards/Cards";
import CheckJobs from "./Components/CheckJobs/CheckJobs";

import Hero from "./Components/Hero/Hero";
import HeroFour from "./Components/HeroFour/HeroFour";
import HeroOne from "./Components/HeroOne/HeroOne";
import HeroThree from "./Components/HeroThree/HeroThree";
import HeroTwo from "./Components/HeroTwo/HeroTwo";
import Involved from "./Components/Involved/Involved";
import Social from "./Components/Social/Social";

import YouTube from "./Components/YouTube/YouTube";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
      </BrowserRouter> */}
      <Hero />
      <Cards />
      <HeroOne />
      <YouTube />
      <CallToAction />
      <HeroTwo />
      <Involved />
      <Banner />
      <HeroThree />
      <CheckJobs />
      <BannerTwo />
      <HeroFour />
      <Social />
    </div>
  );
}

export default App;
