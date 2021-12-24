import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

//axios.create(axiosConfigObject) => use .env

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(data) {
  return instance.post('/signup', data);
}

function loginUser(data) {
  return instance.post('/login', data);
}

function fetchPostList() {
  return instance.get('/posts');
}

export { registerUser, loginUser, fetchPostList };
