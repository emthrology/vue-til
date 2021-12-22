import axios from 'axios';

//axios.create(axiosConfigObject)
const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

function registerUser(data) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, data);
  return instance.post('/signup', data);
}

export { registerUser };
