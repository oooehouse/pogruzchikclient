import axios from 'axios';

export const API_URL = 'http://localhost:5002';

export const callApi = (contentType = 'application/json') => {
  return axios.create({
    baseURL: API_URL + '/',
    headers: {
      'Content-Type': contentType,
      'x-auth-token': localStorage.token
    }
  });
};
