import urls from "../urls";
import httpClient from "../httpClient";

export const create = (form) =>
  httpClient.post(`http://localhost:3000/api/v1/classes`, form);
export const listAll = (id, qs = "") =>
  httpClient.get(`${urls.classes}/${id}?${qs}`);
export const get = (id) => httpClient.get(`${urls.classes}/${id}`);
export const put = (id, form) => httpClient.put(`${urls.classes}/${id}`, form);
export const remove = (id) => httpClient.remove(`${urls.classes}/${id}`);
