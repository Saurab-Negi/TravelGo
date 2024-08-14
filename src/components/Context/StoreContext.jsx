import React, { createContext } from "react";
import { PlacesData } from "../../assets/rental";

// Create the context
export const StoreContext = createContext(null);

// Create the provider component
const StoreProvider = (props) => {
  const contextValue = {
    PlacesData,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;