import React, { useState, useEffect, createContext } from "react";
import Toast from 'react-native-simple-toast';
import { getMainData } from './mainService'
import useFetch from '../generics/hooks/useFetch'
import useRefresh from '../generics/hooks/useRefresh'

const showErrorToast = () => {
  Toast.showWithGravity("Error al cargar", Toast.SHORT, Toast.CENTER)
}

const MainContext = createContext();

export const MainProvider = (props) => {
  const [data, setData] = useState(null);
  const [fetch, page, nextPage, loading] = useFetch(
    getMainData,
    showErrorToast
  )
  const [ refreshing, refresh ] = useRefresh(
    () => getMainData(0),
    showErrorToast
  )

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch()
      if(!res) return

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
  }, [page])

  const fetchNextPage = async () => {
    if(data.moreItems) {
      nextPage()
    }
  }

  const refreshData = async () => {
    const res = await refresh()
    if(!res) return
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

