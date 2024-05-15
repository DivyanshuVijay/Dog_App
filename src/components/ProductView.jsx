import React from "react";
import { useParams } from "react-router-dom";

function ProductPage({ dogBreeds }) {
  const { breed_Id } = useParams();
  const breed = dogBreeds.find((breed) => breed.id === parseInt(breed_Id));

  if (!breed) {
    return <div>Breed not found</div>;
  }

  return (
    <div className="  product-container flex justify-center items-center h-screen">
      <div className=" product flex flex-col justify-center items-center">
        <h1 className="text-4xl text-indigo-600 font-bold mb-6">
          {breed.name}
        </h1>
        <img
          src={breed.image.url}
          alt={breed.name}
          className="mb-3 w-80 h-auto object-cover rounded-lg"
        />
        <div className="text-left px-4">
          <p>
            <span className="font-bold text-indigo-800">Breed Group: </span>
            <span className="text-indigo-600">{breed.breed_group}</span>
          </p>
          <p>
            <span className="font-bold text-indigo-800">Bred For: </span>
            <span className="text-indigo-600">{breed.bred_for}</span>
          </p>
          <p>
            <span className="font-bold text-indigo-800">Life Span: </span>
            <span className="text-indigo-600">{breed.life_span}</span>
          </p>
          <p>
            <span className="font-bold text-indigo-800">Origin: </span>
            <span className="text-indigo-600">{breed.origin || "NA"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
