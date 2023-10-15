import axios from 'axios';

const baseURL = 'https://jcibackend-jci.koyeb.app/';

const api = axios.create({
  baseURL,
});

export const fetchMain = async (path: string) => {
  const mainPath = 'main-page/' + path;
  try {
    const response = await api.get(mainPath);
    return response.data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};
