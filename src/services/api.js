import axios from "axios";
const baseURL = "http://localhost:5005/api";

export const api = axios.create({
  baseURL,
  timeout: 10000,
});
