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
    return [];
  }
};

export const fetchMemberCard = async () => {
  const memberCardPath = 'member-card/';
  try {
    const response = await api.get(memberCardPath);
    return response.data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return [];
  }
};

export const fetchPhotoGallery = async (path: string) => {
  const photoPath = 'photo_gallery/' + path;

  try {
    const response = await api.get(photoPath);
    return response.data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return [];
  }
};
