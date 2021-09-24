import urls from "../urls";
import httpClient from "../httpClient";

export const readAllStudent = (code, qs = "") =>
  httpClient.get(`${urls.enrol}/students/${code}?${qs}`);
