import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { EnrolmentApi } from "../../remote";

export const createEnrolApi = EnrolmentApi.create;

export default createEnrolApi;
