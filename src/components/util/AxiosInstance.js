import axios from 'axios';


axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const AxiosInstance = axios.create({
  baseURL: "https://sample-nodejs-deploy.herokuapp.com",
  timeout: 5000
});

