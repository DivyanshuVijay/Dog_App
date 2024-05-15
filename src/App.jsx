import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListView from "./components/ListView";
import ProductView from "./components/ProductView";
import { fetchDogBreeds } from "./api";
import SideNavbar from "./components/SideNavbar";

function App() {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDogBreeds()
      .then((data) => {
        setDogBreeds(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="flex">
        <div className="w-48 p-4 bg-indigo-600 text-white fixed left-0 top-0 bottom-0">
          <SideNavbar />
        </div>

        <div className="flex-1 p-4 ml-48">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : dogBreeds.length === 0 ? (
            <div>No dog breeds found.</div>
          ) : (
            <Routes>
              <Route path="/" element={<ListView dogBreeds={dogBreeds} />} />
              <Route
                path="/breeds"
                element={<ListView dogBreeds={dogBreeds} />}
              />
              <Route
                path="/breed/:breed_Id"
                element={<ProductView dogBreeds={dogBreeds} />}
              />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
