import axios from 'axios';

//axios.create(axiosConfigObject) => use .env
const instance = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(data) {
  return instance.post('/signup', data);
}

function loginUser(data) {
  return instance.post('/login', data);
}

export { registerUser, loginUser };
