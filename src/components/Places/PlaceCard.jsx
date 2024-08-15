import React, { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const PlaceCard = ({
  id,
  img,
  title,
  location,
  description,
  price,
  type,
}) => {

  const {addToCart}= useContext(StoreContext);
  return (
    <Link
      to={`/best-places/${id}`}
      state={{ id, img, title, location, description, price, type }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <p className="opacity-70">({type})</p>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-2 !mt-3">
            <div>              
              <p className="text-xl font-bold">&#8377;{price}</p>
            </div>
            <button onClick={()=>{addToCart(id)}}  className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-4 py-1 rounded-full">Book</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
