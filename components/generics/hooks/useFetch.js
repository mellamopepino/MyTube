import {useState, useCallback} from 'react';

const useFetch = (fetch, errorHandler) => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (!fetch) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(offset);
      return res;
    } catch (err) {
      errorHandler && errorHandler(err);
    } finally {
      setLoading(false);
    }
  }, [offset, fetch, errorHandler]);

  const nextPage = useCallback(async () => {
    setOffset(offset + 1);
  }, [offset]);

  return [fetchData, offset, nextPage, loading];
};

export default useFetch;
