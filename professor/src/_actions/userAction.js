import { REGISTER_USER } from "./types";
import { request } from "../utils/axios";

const USER_URL = "/api/v1/members";

export function registerUser(dataToSubmit) {
    const data = request("post", USER_URL, dataToSubmit);

    return {
        type: REGISTER_USER,
        payload: data,
    }
}