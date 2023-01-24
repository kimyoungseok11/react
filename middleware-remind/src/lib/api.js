import axios from "axios";

export const fetchPost = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const fetchUser = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
};
