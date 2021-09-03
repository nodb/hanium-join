import urls from "../urls";
import httpClient from "../httpClient";

export const create = (form) => httpClient.post(urls.comments, form);
export const listAll = (id) => httpClient.get(`${urls.comments}/${id}`);