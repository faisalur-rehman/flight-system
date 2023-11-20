import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const userData = await AsyncStorage.getItem('userData');
  const parsedData = JSON.parse(userData);
  console.log({parsedData});
  if (parsedData) {
    config.headers.Authorization = `Bearer ${parsedData?.token}`;
  }

  return config;
});
export {api};
