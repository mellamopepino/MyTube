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
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await getListVideos(route.params.id, offset)

        !data ?
          setData(res) :
          setData((data) => {
            return {
              ...data,
              items: [...data.items, ...res.items]
            }
          })
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
      const res = await getListVideos(route.params.id, 0)
    } finally {
      setRefreshing(false)
    }
    setData(res)
  }

  return (
    <VideoList
      videos={data?.items}
      onEndReached={fetchNextPage}
      onRefresh={refreshData}
      refreshing={refreshing}
      loading={loading}
    />
  )
}

const styles = StyleSheet.create({});

export default VideoListMenu;
