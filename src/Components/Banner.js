import React from "react";
import bg from "../Assets/bg.mp4";
import Search from "./Search";

const Banner = () => {
  return (
    <section className="relative w-full h-[640px] mb-8 xl:mb-24">
      {/* Video Section */}
      <div className="relative h-full">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -mt-20"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full "></div>

        {/* Centered Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 lg:px-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-violet-700">Rent</span> Your Dream House with
            us.
          </h1>
          <p className="text-lg lg:text-xl max-w-[480px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae
            libero molestiae laudantium nam odit, culpa aperiam? Culpa, quia
            aspernatur!
          </p>
        </div>
      </div>

      {/* Search Bar Below Video */}
      <div className="w-full max-w-[1200px] mx-auto mt-[-50px] px-4 relative z-10 ">
        <Search />
      </div>
    </section>
  );
};

export default Banner;
