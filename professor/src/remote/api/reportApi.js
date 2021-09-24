import urls from "../urls";
import httpClient from "../httpClient";

export const listAllByProf = (id) =>
  httpClient.get(`${urls.report}/${id}`);
