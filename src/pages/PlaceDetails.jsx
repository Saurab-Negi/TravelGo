import React, { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { StoreContext } from "../components/Context/StoreContext";

const PlaceDetails = () => {
  const location = useLocation();
  const { id, img, title, location: placeLocation, description, price, type } = location.state;
  const {addToCart}= useContext(StoreContext);

  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-col md:flex-row gap-10 mt-16">
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
            <p className="opacity-70">4 guests | 2 bedrooms | 4 beds | 2 bathrooms</p>
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
      <div className="flex flex-col md:flex-row items-center gap-16 mt-16">
        <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col gap-5 px-4 py-12 mx-10 rounded-md shadow-sm shadow-gray-400">
            <p className="text-xl font-bold">{title}</p>
            <p>{description}</p>
            <p className="text-xl font-bold">Total Charges :</p>
            <p>GST: &#8377; 500</p>
            <p>Total Price: &#8377;{price+500}</p>
            <button onClick={()=>{addToCart(id)}} className="bg-blue-500 text-white py-2 rounded-xl">Add to Cart</button>
        </div>

        <div className="flex flex-1 flex-col">
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
