import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { EnrolApi } from "../../remote";

export const ALL_STUDENTS = "enrol/STUDENTS";

export const getStudents = createAction(
    ALL_STUDENTS,
    EnrolApi.readAllStudent
);

const initialState = Map({
    list: Map({
        total: 0,
        results: List([]),
    })
})

export default handleActions(
    {
        ...pender({
            type: ALL_STUDENTS,
            onSuccess: (state, action) => {
                const data = action.payload.data;

                return state.set("list", fromJS(data));
            }
        })
    },
    initialState
)
