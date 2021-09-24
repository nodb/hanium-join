import urls from "../urls";
import httpClient from "../httpClient";

export const create = (form) => httpClient.post(urls.discuss, form);
export const listAll = (id, asId) =>
  httpClient.get(`${urls.discuss}/${id}/${asId}`);
export const get = (id) => httpClient.get(`${urls.discuss}/${id}`);
export const remove = (id) => httpClient.delete(`${urls.discuss}/${id}`);
