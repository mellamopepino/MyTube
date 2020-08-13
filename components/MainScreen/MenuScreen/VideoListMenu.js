import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  StyleSheet,
} from 'react-native';

import VideoList from '../../generics/VideoList'

const VideoListMenu = (props) => {
  const { route } = props
  const [ data, setData ] = useState(null)
  const [offset, setOffset] = useState(0);
  const [ refreshing, setRefreshing ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://api-editoriales.clarin.com/api/mobile/v2/oletv/lists/${route.params.id}?${offset}&limit=3`)

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
