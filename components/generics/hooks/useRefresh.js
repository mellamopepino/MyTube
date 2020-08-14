import {useState, useCallback} from 'react';

const useRefresh = (fetch, errorHandler) => {
  const [refreshing, setRefreshing] = useState(false);

  const refreshData = useCallback(async () => {
    if (!fetch) {
      return;
    }

    setRefreshing(true);
    try {
      const res = await fetch();
      return res;
    } catch (err) {
      errorHandler && errorHandler(err);
    } finally {
      setRefreshing(false);
    }
  }, [fetch, errorHandler]);

  return [refreshing, refreshData];
};

export default useRefresh;
