import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

//axios.create(axiosConfigObject) => use .env

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

//createInstance 분리하는 이유
//interceptors 에서 토큰을 발급받는데 signup 부분과 post 부분이 충돌? 가능성있음
//정확히는, signup 이전의 api 에서는 Authorization 헤더가 없어야함
function createInstanceWidhAuth(url) {
  const instance = axios.create({
    // baseURL: process.env.VUE_APP_API_URL,
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

//instance 분리하여 모듈로 사출
export const instance = createInstance();
export const posts = createInstanceWidhAuth('/posts');
