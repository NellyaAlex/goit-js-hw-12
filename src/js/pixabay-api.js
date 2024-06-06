import axios from 'axios';

export async function getImages(searcher, page) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: '44209803-f0da8dc8c73898f30e4ecbc0b',
    q: searcher,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page,
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
