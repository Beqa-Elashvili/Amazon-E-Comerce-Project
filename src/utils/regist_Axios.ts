import axios from "axios";

export const registAxios = axios.create({
  baseURL: "http://localhost:3000",
});
