import urls from "../urls";
import httpClient from "../httpClient";

export const create = (form) => httpClient.post(urls.teams, form);
export const listAllTeams = (code) => httpClient.get(`${urls.teams}/${code}`);
export const remove = (id) => httpClient.delete(`${urls.teams}/${id}`);
export const insertStudentTeam = (code, form) =>
  httpClient.post(`${urls.teams}/students/${code}`, form);
export const deleteStudentTeam = (qs) =>
  httpClient.delete(`${urls.teams}/students?${qs}`);
