import React, { useState, useEffect, createContext } from "react";
import Toast from 'react-native-simple-toast';
import { getMainData } from './mainService'

const MainContext = createContext();

export const MainProvider = (props) => {
  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await getMainData(offset)

        !data ?
          setData(res) :
          setData((data) => {
            return {
              ...data,
              items: [...data.items, ...res.items]
            }
          })
      } catch(err) {
        Toast.showWithGravity("Error al cargar", Toast.SHORT, Toast.CENTER)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [offset])

  const fetchNextPage = async () => {
    if(data.moreItems) {
      setOffset(offset+1)
    }
  }

  const refreshData = async () => {
    setRefreshing(true)
    try {
      const res = await getMainData(0)
    } catch(err) {
      Toast.showWithGravity("Error al cargar", Toast.SHORT, Toast.CENTER)
    } finally {
      setRefreshing(false)
    }
    setData(res)
  }

  return (
    <MainContext.Provider
      value={{
        videos: data?.items,
        lists: data?.listasPrincipales,
        fetchNextPage,
        refreshData,
        loading,
        refreshing,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;

