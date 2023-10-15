import axios from 'axios';

const baseURL = 'https://jcibackend-jci.koyeb.app/';

const api = axios.create({
  baseURL,
});

export const fetchFAQ = async () => {
  const response = await api.get('main-page/faq');
  return response.data;
};
