import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const GET_SINGLE_POST = 'get_single_post';
export const DELETE_POST = 'delete_post';

const ROOT = 'http://reduxblog.herokuapp.com/api'
const KEY = '?key=ricoh77410';

export function fetchPosts() {
  const request = axios.get(`${ROOT}/posts${KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}


export function createPost(values, callback) {
  const request = axios.post(`${ROOT}/posts${KEY}`,values)
    .then(() => callback());
  return {
    type:CREATE_POST,
    payload: request
  }
}

export function fetchSinglePost(id) {
  const request = axios.get(`${ROOT}/posts/${id}${KEY}`);

  return {
    type: GET_SINGLE_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT}/posts/${id}${KEY}`)
      .then(() => callback());

  return {
    type: DELETE_POST,
    payload: request
  }
}
