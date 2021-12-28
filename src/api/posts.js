//학습노트 관련 api
import { posts } from './index';

function fetchPostList() {
  return posts.get('/');
}

function createPost(data) {
  return posts.post('/', data);
}

export { fetchPostList, createPost };
