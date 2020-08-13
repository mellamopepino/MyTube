import axios from 'axios';

const getMainData = async (offset) => {
  const res = await axios.get(`http://ap-editoriales.clarin.com/api/mobile/v2/oletv/home?offset=${offset}&limit=10`)

  await new Promise((r) => setTimeout(r, 2000))

  const mockItems = res.data.items.map((item) => {
    return {
      ...item,
      thumbnail: "https://bucket3.glanacion.com/anexos/fotos/18/2389718.jpg"
    }
  })

  return { ...res.data, items: mockItems }
}

const getListVideos = async (id, offset) => {
  const res = await axios.get(`http://ap-editoriales.clarin.com/api/mobile/v2/oletv/lists/${id}?${offset}&limit=10`)

  await new Promise((r) => setTimeout(r, 2000))

  const mockItems = res.data.items.map((item) => {
    return {
      ...item,
      thumbnail: "https://bucket3.glanacion.com/anexos/fotos/18/2389718.jpg"
    }
  })

  return { ...res.data, items: mockItems }
}

export {
  getMainData,
  getListVideos,
}
