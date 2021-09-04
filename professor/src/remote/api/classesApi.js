import urls from "../urls";
import httpClient from "../httpClient";

export const create = (form) => httpClient.post(`${urls.classes}`, form);
export const listAll = (id, qs = "") =>
  httpClient.get(`${urls.classes}/professor/${id}?${qs}`);
export const get = (id) => httpClient.get(`${urls.classes}/professor/${id}`);
export const put = (id, form) =>
  httpClient.put(`${urls.classes}/professor/${id}`, form);
export const remove = (id) =>
  httpClient.remove(`${urls.classes}/professor/${id}`);
