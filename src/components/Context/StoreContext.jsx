import React, { createContext, useEffect, useState } from "react";
import { PlacesData } from "../../assets/rental";
import { toast } from 'react-toastify';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// Create the context
export const StoreContext = createContext(null);

// Create the provider component
const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [sortedPlacesData, setSortedPlacesData] = useState([...PlacesData]);

  // Date Selector
  const [dateRange, setDateRange]= useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }])
  const handleSelect= (ranges) =>{
    setDateRange([ranges.selection])
  }
  const start= new Date(dateRange[0].startDate)
  const end= new Date(dateRange[0].endDate)
  const dayCount= Math.round(end-start)/ (1000*60*60*24)

  const addToCart = (itemId) => {
    if (!localStorage.getItem("loggedIn")) {
      toast("Please log in to add items to the cart.");
      return;
    }
    if (dayCount <= 0) {
      toast("Please select a valid date range.");
      return;
    }
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 };
      } else {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
    });
    toast("Added to Cart");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    toast("Removed from Cart");
  };

  const getTotalCartAmt = () => {
    let totalAmt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PlacesData.find((product) => product.id === item);
        if (itemInfo) {
          totalAmt += itemInfo.price * cartItems[item];
        } else {
          console.warn(`Property with id ${item} not found`);
        }
      }
    }
    return totalAmt;
  };

  // Add a function to clear the cart
  const clearCart = () => {
    setCartItems({});
  };

  const sorting = (sortType) => {
    const sortedData = [...PlacesData];
    switch (sortType) {
      case "lowest":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "highest":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "a-z":
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        setSortedPlacesData([...PlacesData]);
        return;
    }
    setSortedPlacesData(sortedData);
  };

  const contextValue = {
    PlacesData: sortedPlacesData,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmt,
    clearCart,
    sorting,
    handleSelect,dateRange,start,end,dayCount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
