import React, { useState, useEffect, createContext } from "react";

import {
  homeSuccessWithMore,
} from '../mocks';


const HomeContext = createContext();

export const HomeProvider = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      setData(homeSuccessWithMore)
    }, [])

    return (
        <HomeContext.Provider
          value={{
            videos: data.items,
            lists: data.listasPrincipales,
          }}
        >
          {props.children}
        </HomeContext.Provider>
      );
}

export default HomeContext;

