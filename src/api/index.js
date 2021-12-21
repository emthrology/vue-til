import axios from 'axios';

function registerUser(data) {
  const url = 'http://localhost:3000/signup';
  return axios.post(url, data);
}

export { registerUser };
