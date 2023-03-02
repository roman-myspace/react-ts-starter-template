import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ContextTypes, ContextProviderPropTypes } from "../@types/types";




// ********************************************
// Creating Global Context State
// ********************************************
const AppContext = createContext<ContextTypes | {}>({});
export const AppCtx = () => useContext<ContextTypes | {}>(AppContext);

// **********************************
// Serving Context Provider
// **********************************
const AppContextProvider = ({ children }: ContextProviderPropTypes) => {

    const [data, setData] = useState("");

    return (
        <AppContext.Provider
            value={{
                data
            }}
        >
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;