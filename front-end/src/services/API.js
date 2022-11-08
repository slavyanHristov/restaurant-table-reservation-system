import axios from "axios";

export default (url = "http://localhost:5000/api/v1") => {
  return axios.create({
    baseURL: url,
  });
};
