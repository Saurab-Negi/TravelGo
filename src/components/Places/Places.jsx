import React, { useContext } from "react";
import PlaceCard from "./PlaceCard";
import { StoreContext } from "../Context/StoreContext";

const Places = ({ handleOrderPopup }) => {
  const { sorting, PlacesData } = useContext(StoreContext);

  const handleSortChange = (e) => {
    sorting(e.target.value);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <h1 className="border-l-8 border-primary/50 my-6 pl-2 text-3xl font-bold">Top Rentals in India</h1>
          <form>
            <label htmlFor="sort">Sort: </label>
            <select onChange={handleSortChange} className="bg-gray-50 px-1 my-6 ml-2 text-sm border-2 border-gray-400 outline-none rounded-3xl" name="sort" id="sort">
              <option value="default">Default</option>
              <option value="lowest">Price: Low to High</option>
              <option value="highest">Price: High to Low</option>
              <option value="a-z">Name: A-Z</option>
              <option value="z-a">Name: Z-A</option>
            </select>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PlacesData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;
