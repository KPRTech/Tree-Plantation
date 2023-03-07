import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import NavbarSm from '../Shared/NavbarSm';
import NavbarTwo from '../Shared/NavbarTwo';
import WhereWePlant from '../Where WE Plant/Pages/WhereWePlant';

const Home = () => {
  return (
    <div>
      <NavbarSm />
      <Navbar />
      <NavbarTwo />
      <WhereWePlant />
      <Footer />
    </div>
  )
}

export default Home;
