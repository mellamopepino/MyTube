import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';

import VideoList from '../../generics/VideoList'
import { getListVideos } from '../mainService'

const VideoListMenu = (props) => {
  const { route } = props
  const [ data, setData ] = useState(null)
  const [offset, setOffset] = useState(0);
  const [ refreshing, setRefreshing ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListVideos(route.params.id, offset)

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
    const res = await getListVideos(route.params.id, 0)
    setData(res)
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await refreshData()
    setRefreshing(false)
  }

  return (
    <VideoList
      videos={data?.items}
      onEndReached={fetchNextPage}
      onRefresh={handleRefresh}
      refreshing={refreshing}
    />
  )
}

const styles = StyleSheet.create({});

export default VideoListMenu;
