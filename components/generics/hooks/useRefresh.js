import React, { useState, useEffect } from 'react';
import Toast from 'react-native-simple-toast';

const useRefresh = (fetch, errorHandler) => {
  const [refreshing, setRefreshing] = useState(false);

  const refreshData = async () => {
    if(!fetch) return

    setRefreshing(true)
    try {
      const res = await fetch()
      return res
    } catch(err) {
      errorHandler && errorHandler(err)
    } finally {
      setRefreshing(false)
    }
  }

  return [
    refreshing,
    refreshData,
  ]
}

export default useRefresh
