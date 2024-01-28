import axios from "axios";

export const BaseAxios = axios.create({
  baseURL: "http://localhost:3000",
});
