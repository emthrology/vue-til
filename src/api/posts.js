//학습노트 관련 api
import { posts } from './index';

function fetchPostList() {
  return posts.get('/');
}

function createPost(data) {
  return posts.post('/', data);
}

function deletePost(_id) {
  return posts.delete(_id);
}

export { fetchPostList, createPost, deletePost };
