import { api } from "./api";

export const getData = () => api.get("/files/data");
