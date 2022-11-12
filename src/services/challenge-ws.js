import { api } from "./api";

export const getData = () => api.get("/files/data");

export const getDataParams = (params) =>api.get(`/files/data${params}`);
