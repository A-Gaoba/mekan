import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        className={`px-4 py-2 text-white bg-violet-700 rounded-md ${
          currentPage === 1 && "opacity-50 cursor-not-allowed"
        }`}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`px-4 py-2 ${
            currentPage === index + 1
              ? "bg-violet-800 text-white"
              : "bg-gray-200 text-black"
          } rounded-md hover:bg-violet-700 hover:text-white transition`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        className={`px-4 py-2 text-white bg-violet-700 rounded-md ${
          currentPage === totalPages && "opacity-50 cursor-not-allowed"
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
