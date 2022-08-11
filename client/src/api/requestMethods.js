import axios from 'axios';

const BASE_URL = 'http://192.168.1.66:9999/api';

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
