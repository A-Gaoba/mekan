import React, { useContext, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { HouseContext } from "../Components/HouseContext";
import { Link } from "react-router-dom";
import House from "../Components/House";
import Search from "../Components/Search";
import Pagination from "../Components/Pagination";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  const [currentPage, setCurrentPage] = useState(1);
  const housesPerPage = 6;

  // Calculate the index range for the houses to display
  const startIndex = (currentPage - 1) * housesPerPage;
  const endIndex = startIndex + housesPerPage;
  const displayedHouses = houses.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // If loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, Nothing found!
      </div>
    );
  }

  return (
    <section className="mb-20">
      <Search />

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {displayedHouses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
        <Pagination
          totalItems={houses.length}
          itemsPerPage={housesPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default HouseList;
