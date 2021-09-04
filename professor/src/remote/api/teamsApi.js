import urls from "../urls";
import httpClient from "../httpClient";

export const create = (form) => httpClient.post(urls.teams, form);
export const listAllTeams = (code) => httpClient.get(`${urls.teams}/${code}`);
