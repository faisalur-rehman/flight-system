import axios from 'axios';
//Purpose: function  for setUp api calling structure
const api = axios.create({
  baseURL: 'http://3.141.119.46:81/api/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  validateStatus: () => true,
});

//Purpose: attache authorized token with apis
api.interceptors.request.use(async function (config) {
  // const token = await getData('token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});
export {api};
