import React, { useState, useEffect, createContext } from "react";
import { getMainData } from './mainService'

const MainContext = createContext();

export const MainProvider = (props) => {
  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMainData(offset)

      !data ?
        setData(res) :
        setData((data) => {
          return {
            ...data,
            items: [...data.items, ...res.items]
          }
        })
    }

    fetchData()
  }, [offset])

  const fetchNextPage = async () => {
    if(data.moreItems) {
      setOffset(offset+1)
    }
  }

  const refreshData = async () => {
    const res = await getMainData(0)
    setData(res)
  }

  return (
    <MainContext.Provider
      value={{
        videos: data?.items,
        lists: data?.listasPrincipales,
        fetchNextPage,
        refreshData,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;

