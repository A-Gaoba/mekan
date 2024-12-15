import React from "react";
import Banner from "./../Components/Banner";
import HouseList from "../Components/HouseList";
import { Testimonials } from "../Components/Testimonials";
import { Services } from "../Components/Services";
import ContactUs from "../Components/ContactUs";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
      <Services />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
