import axios from "axios";

export const baseURL = "/df/servers/";
export const apiKey = "xBtWvgOBSAyCLVeLK714Ufn4qL1kHxh7";
export const imgURL = "https://img-api.neople.co.kr";

export const fetchApi = (url) => {
  return axios.get(url);
};
