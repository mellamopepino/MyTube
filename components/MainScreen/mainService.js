import axios from 'axios';

const getMainData = async (offset) => {
  const res = await axios.get(`home?offset=${offset}&limit=10`);

  const mockItems = res.data.items.map((item) => {
    return {
      ...item,
      thumbnail: 'https://bucket3.glanacion.com/anexos/fotos/18/2389718.jpg',
    };
  });

  return {...res.data, items: mockItems};
};

const getListVideos = async (id, offset) => {
  const res = await axios.get(`lists/${id}?${offset}&limit=10`);

  const mockItems = res.data.items.map((item) => {
    return {
      ...item,
      thumbnail: 'https://bucket3.glanacion.com/anexos/fotos/18/2389718.jpg',
    };
  });

  return {...res.data, items: mockItems};
};

export {getMainData, getListVideos};
