import React, { useContext } from "react";
import { ImSpinner2 } from "react-icons/im";
import { HouseContext } from "./HouseContext";
import { Link } from "react-router-dom";
import House from "./House";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  // If loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  // If no houses are found
  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, Nothing found!
      </div>
    );
  }

  // Limit to 6 houses
  const displayedHouses = houses.slice(0, 6);

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {displayedHouses.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/properties"
            className="inline-block px-6 py-3 bg-violet-700 text-white font-medium text-lg rounded-lg hover:bg-violet-800 transition"
          >
            See All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HouseList;
