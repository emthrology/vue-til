//로그인, 회원가입, 탈퇴 등 계정 관련 api
import { instance } from './index';

function registerUser(data) {
  return instance.post('/signup', data);
}

function loginUser(data) {
  return instance.post('/login', data);
}

export { registerUser, loginUser };
