import axios from 'axios';

export const api = axios.create({
  baseURL: "https://staging.www.o2corre.com.br/wp-json"
});
