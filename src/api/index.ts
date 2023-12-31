import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    // connect to newsapi
    'X-Api-key': 'process.env.NEWSAPI-Key',
  },
});


