import axios from 'axios';

const BASE_URL = 'http://localhost:9999/api';

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
