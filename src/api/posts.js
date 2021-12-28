//학습노트 관련 api
import { posts } from './index';

function fetchPostList() {
  return posts.get('/');
}

function createPost(data) {
  return posts.post('/', data);
}

function fetchPost(_id) {
  return posts.get(_id);
}

function editPost(_id, body) {
  return posts.put(_id, body);
}

function deletePost(_id) {
  return posts.delete(_id);
}

export { fetchPostList, createPost, fetchPost, editPost, deletePost };
