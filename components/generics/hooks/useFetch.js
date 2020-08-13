import React, { useState, useEffect } from 'react';
import Toast from 'react-native-simple-toast';

const useFetch = (fetch, errorHandler) => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if(!fetch) return

    setLoading(true)
    try {
      const res = await fetch(offset)
      return res
    } catch(err) {
      errorHandler && errorHandler(err)
    } finally {
      setLoading(false)
    }
  }

  const nextPage = async () => {
    setOffset(offset+1)
  }

  return [
    fetchData,
    offset,
    nextPage,
    loading,
  ]
}

export default useFetch
