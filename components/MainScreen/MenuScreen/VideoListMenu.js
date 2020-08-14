import React, {useState, useEffect, useCallback} from 'react';
import Toast from 'react-native-simple-toast';

import VideoList from '../../generics/VideoList';
import {getListVideos} from '../mainService';
import useFetch from '../../generics/hooks/useFetch';
import useRefresh from '../../generics/hooks/useRefresh';

const showErrorToast = () => {
  Toast.showWithGravity('Error al cargar', Toast.SHORT, Toast.CENTER);
};

const VideoListMenu = (props) => {
  const {route} = props;
  const [data, setData] = useState(null);
  const [fetch, page, nextPage, loading] = useFetch(
    getListVideosWithOffset,
    showErrorToast,
  );
  const [refreshing, refresh] = useRefresh(
    () => getListVideos(route.params.id, 0),
    showErrorToast,
  );

  const getListVideosWithOffset = useCallback(
    (offset) => {
      getListVideos(route.params.id, offset);
    },
    [route.params.id],
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch();
      if (!res) {
        return;
      }

      setData((currentData) => {
        return !currentData
          ? res
          : {
              ...currentData,
              items: [...currentData.items, ...res.items],
            };
      });
    };

    fetchData();
  }, [page, fetch]);

  const fetchNextPage = async () => {
    if (data.moreItems) {
      nextPage();
    }
  };

  const refreshData = async () => {
    const res = await refresh();
    if (!res) {
      return;
    }
    setData(res);
  };

  return (
    <VideoList
      videos={data?.items}
      onEndReached={fetchNextPage}
      onRefresh={refreshData}
      refreshing={refreshing}
      loading={loading}
    />
  );
};

export default VideoListMenu;
