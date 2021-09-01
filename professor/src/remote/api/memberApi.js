import urls from "../urls";
import httpClient from "../httpClient";



// 서버와 통신하는 객체들 짜기
 export const create = (form) => httpClient.post(urls.member, form); //(데이터를 던지는 곳, 던질 데이터)
 export const listAll = (qs) => httpClient.get(`${urls.member}?${qs}`); //쿼리스트링까지 전송해서 보내주겠다. 계속 변경가능하는 것들은 쿼리 스트링으로 넘겨줌
 export const get = (id) => httpClient.get(`${urls.member}/${id}`);  // 변하지 않는 id 같은 것은 url로 만들어서 보내줌
 export const put = (id, form) => httpClient.put(`${urls.member}/${id}`, form);  
 export const remove = (id) => httpClient.remove(`${urls.member}/${id}`);

 export const signup = (form) => httpClient.post(`${urls.member}/register`, form)

 export const login = (form) => httpClient.post(`${urls.member}/professor/login`,form)
