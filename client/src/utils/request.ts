import axios from "axios";

const token = JSON.parse(localStorage.getItem("token")!) || null;
const request = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    auth: token,
  },
});

export default request;
