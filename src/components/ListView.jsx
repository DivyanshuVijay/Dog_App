import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListView({ dogBreeds }) {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // here we are setting limit of 9 items per page

  const fetchMoreItems = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      fetchMoreItems();
    }
  };

  const paginatedBreeds = dogBreeds.slice(0, page * limit);

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-indigo-600 font-bold mb-8 text-center">
        Dog Breeds
      </h1>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {paginatedBreeds.map((breed) => (
          <div
            key={breed.id}
            className="border rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{ width: "60%", height: "auto" }}
          >
            <Link to={`/breed/${breed.id}`}>
              <img
                src={breed.image.url}
                alt={breed.name}
                className="w-full h-auto object-cover"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold mb-2 text-indigo-600 hover:text-indigo-800">
                  {breed.name}
                </h2>
                <p className="text-sm text-indigo-600 hover:text-indigo-800">
                  {breed.bred_for}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListView;
