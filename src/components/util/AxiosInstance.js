import axios from 'axios';


axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const AxiosInstance = axios.create({
  baseURL: "https://sample-nodejs-depl-2.herokuapp.com",
  timeout: 5000
});

