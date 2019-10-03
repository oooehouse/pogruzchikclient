import axios from 'axios';
//https://git.heroku.com/vehicle-bpi-server.git

export const API_URL = 'http://localhost:5002';
// export const API_URL = 'https://vehicle-bpi-server.herokuapp.com';

export const callApi = (contentType = 'application/json') => {
  return axios.create({
    baseURL: API_URL + '/',
    headers: {
      'Content-Type': contentType,
      'x-auth-token': localStorage.token
    }
  });
};
