import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp523.herokuapp.com",
});
