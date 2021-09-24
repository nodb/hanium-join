import urls from "../urls";
import httpClient from "../httpClient";

export const create = (form) => httpClient.post(urls.assignments, form);
export const listAll = (qs) => httpClient.get(`${urls.assignments}?${qs}`);
export const listAllByMember = (id) =>
  httpClient.get(`${urls.assignments}/byMember/${id}`);
export const listAllByTeam = (id) =>
  httpClient.get(`${urls.assignments}/byTeam/${id}`);
export const assignmentById = (id) =>
  httpClient.get(`${urls.assignments}/${id}`);
export const put = (id, form) =>
  httpClient.put(`${urls.assignments}/${id}`, form);
export const remove = (id) => httpClient.delete(`${urls.assignments}/${id}`);
export const assignmentTeamByTeamId = (assignmentId, teamId) => 
  httpClient.get(`${urls.assignments}/assignmentTeam/${assignmentId}/${teamId}`);
export const submit = (id, memberId, form) => httpClient.post(`${urls.assignments}/submit/${id}/${memberId}`, form,
    {
      headers: {
        "Content-Type": "multipart/form-data; ",
      }
    });
