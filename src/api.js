import axios from 'axios';

const API_URL = "https://neonflakebackend.onrender.com/api"
export const uploadMedia = (formData) => {
  return axios.post(`${API_URL}/videos/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const fetchMediaList = () => {
  return axios.get(`${API_URL}/videos`);
};

export const fetchMediaById = (id) => {
  return axios.get(`${API_URL}/videos/${id}`);
};
