export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40949300-f150d44bfc1d9390d5c29918c';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
