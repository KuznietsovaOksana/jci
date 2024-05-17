import axios from 'axios';
import { IJoinUs } from './types.api';

// const baseURL = 'https://jcibackend-jci.koyeb.app/';
const baseURL = 'https://jci-maracasabat.koyeb.app/';

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

export const fetchNews = async (limit?: number, singleNewsId?: string) => {
  const newsPath = 'news-cards/';
  const queryParams: { [key: string]: unknown } = {};

  if (limit) {
    queryParams.limit = limit;
  }

  if (singleNewsId) {
    queryParams.id = singleNewsId;
  }

  try {
    const response = await api.get(newsPath, { params: queryParams });
    return response.data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return [];
  }
};

export const fetchProjects = async (id = '') => {
  const idProject = id ? `${id}/` : '';
  const projectPath = `page_project/${idProject}`;

  try {
    const response = await api.get(projectPath);
    return response.data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return [];
  }
};

export const fetchEvents = async () => {
  const eventPath = `events_page/`;

  try {
    const response = await api.get(eventPath);
    return response.data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    return [];
  }
};

// For form

export const fetchJoinUs = async (bodyData: IJoinUs) => {
  const joinUsPath = 'member-application/';

  try {
    const response = await api.post(joinUsPath, bodyData);
    return response.data;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};

// For form
