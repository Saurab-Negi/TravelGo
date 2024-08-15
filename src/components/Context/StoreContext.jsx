import React, { createContext, useEffect, useState } from "react";
import { PlacesData } from "../../assets/rental";
import { toast } from 'react-toastify';

// Create the context
export const StoreContext = createContext(null);

// Create the provider component
const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [sortedPlacesData, setSortedPlacesData] = useState([...PlacesData]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      toast("Added to Cart");
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      toast("Added to Cart");
    }
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
    sorting,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
