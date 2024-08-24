import React, { useContext, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { StoreContext } from "../components/Context/StoreContext";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

const PlaceDetails = () => {
  const location = useLocation();
  const { id, img, title, location: placeLocation, description, price, type } = location.state;
  const { addToCart, handleSelect, dateRange, dayCount } = useContext(StoreContext);

  const today = new Date();

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("You must be logged in to add items to the cart.");
      return;
    }
    if (dayCount <= 0) {
      alert("Please select a valid date range.");
      return;
    }
    addToCart(id);
  };

  return (
    <div className="flex flex-col mx-4 md:mx-12">
      <div className="flex flex-col md:flex-row gap-10 mt-28">
        <div>
            <img
            src={img}
            alt={title}
            className="mx-auto w-full object-cover rounded-md"
            />
        </div>

        <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="">{description}</p>
            <p className="opacity-70">Accomodation: {type}</p>
            <p className="flex items-center gap-2 opacity-70"><IoLocationSharp /> {placeLocation}</p>
            <p className="opacity-70">2 guests | 1 bedroom | 1 Kitchen | 1 bathroom</p>
            <p className="flex items-center gap-2"><FaStar /> 5.0 4 Reviews</p>
            <div className="mt-10">
                <h1 className="text-2xl font-bold">Hosted by Cathy</h1>
                <hr className="h-[1px] w-1/2 my-4" />
                <div className="">
                    <p>Self check-in</p>
                    <p className="text-sm opacity-70">&#x2605; You can check in with the building staff.</p>
                </div>
                <div className="">
                    <p>Cathy is a Superhost</p>
                    <p className="text-sm opacity-70">&#x2605; Superhosts are experienced, highly rated Hosts.</p>
                </div>
                <div className="">
                    <p>Free cancellation for 48 hours</p>
                    <p className="text-sm opacity-70">&#x2605; Get a full refund if you change your mind.</p>
                </div>
            </div>

        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-16 mt-16">
        <div className=" flex-1 flex flex-col gap-1 px-4 py-4 md:ml-20 rounded-md shadow-sm shadow-gray-400">
            <p className="text-xl font-bold">{title}</p>
            <p>{description}</p>
            <div className="">
              <p className="text-lg font-medium mt-2">Select Duration: </p>
              <div className="">
                <DateRange className="" ranges={dateRange} onChange={handleSelect} minDate={today} />
                {dayCount > 1 ? (
                  <p><b>Charges: </b>&#8377; {price} x {dayCount} nights</p>
                ) : (
                  <p><b>Charges: </b>&#8377; {price} x {dayCount} night</p>
                )}
              </div>
            </div>
            <p><b>Total Price: </b>&#8377; {price * dayCount}</p>
            <button 
              onClick= {() => {
                handleAddToCart();
                window.scrollTo(0, 0);
              }}
              disabled={dayCount === 0}
              className={`mt-2 py-2 rounded-xl ${dayCount > 0 ? 'bg-cyan-500 text-white' : 'bg-cyan-600 text-white cursor-not-allowed'}`}
            >
              Add to Cart
            </button>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4">About this place</h1>
          <p>&#x2713; Apartment in luxury residence very well located, close to the Porte de Versailles, in a very nice neighborhood  of Issy-les-Moulineaux (Corentin-Celton) and adjoining an exceptional public garden.<br></br><br></br>

              &#x2713; Bedroom with quality double bed, with desk, balcony, and TV.
              Private bathroom and toilet.<br></br><br></br>

              &#x2713; Very well connected apartment: line 12 (Corentin-Celton, 2min), line 8 (Balard, 5min), Tram T2 & T3 (5min).<br></br><br></br>

              &#x2713; 5/10 minutes walk from the Porte de Versailles Exhibition Center.<br></br><br></br>
              
              &#x2713; Apartment in luxury residence very well located, close to the Porte de Versailles, in a very nice neighborhood of Issy-les-Moulineaux (Corentin-Celton) and adjoining an exceptional public garden.<br></br><br></br>

              &#x2713; Room with quality double bed, desk, balcony, TV, very high speed internet (WiFi and Ethernet), and electric shutters.<br></br><br></br>

              &#x2713; Private bathroom and toilet.<br></br><br></br>
              
              &#x2713; Access to private room, private bathroom, and separate private toilet.<br></br><br></br>
              
              &#x2713; Possibility to use our dryer and washing machine, for a fee (contact us about this).<br></br><br></br>

              &#x2713; Possibility of parking in the basement of our building, for a fee as well (contact us about this).<br></br>
            </p>
        </div>
      </div>

    </div>
  );
};

export default PlaceDetails;
