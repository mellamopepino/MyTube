import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

const MainContext = createContext();

export const MainProvider = (props) => {
  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://api-editoriales.clarin.com/api/mobile/v2/oletv/home?offset=${offset}&limit=3`)

      const mockItems = res.data.items.map((item) => {
        return {
          ...item,
          thumbnail: "https://bucket3.glanacion.com/anexos/fotos/18/2389718.jpg"
        }
      })

      res.data = { ...res.data, items: mockItems }

      !data ?
        setData(res.data) :
        setData((data) => {
          return {
            ...data,
            items: [...data.items, ...res.data.items]
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
    const res = await axios.get(`http://api-editoriales.clarin.com/api/mobile/v2/oletv/home?offset=0&limit=3`)

    setData(res.data)
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

