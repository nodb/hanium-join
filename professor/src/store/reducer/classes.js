import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { ClassesApi } from "../../remote";

export const LISTALL_CLASSES = "classes/LISTALL";
export const GET_CLASSES = "classes/GET";

export const listAllClasses = createAction(LISTALL_CLASSES, ClassesApi.listAll);

export const getClasses = createAction(GET_CLASSES, ClassesApi.get);

export const createClassesApi = ClassesApi.create;
export const updateClassesApi = ClassesApi.put;
export const removeClassesApi = ClassesApi.remove;

// reducer의 초깃값, store 내의 정보를 immutable하게 변경
const initialState = Map({ 
    list: Map({
        count: 0,
        results: List([])
    }),
    class: Map({
        name: "",
        code: "",
    })
});


// reducer
export default handleActions({
    //LISTALL_CLASSES 요청 관리하기
    ...pender({
        type: LISTALL_CLASSES, 
        onSuccess: (state, action) => { 
            const data = action.payload.data;

            // set("[변경할 것]", [변경할 내용])
            return state.set("list", fromJS(data));
        }
    }),
    ...pender({
        //GET_CLASSES 요청 관리하기
        type: GET_CLASSES, 
        onSuccess: (state, action) => { 
            const data = action.payload.data;

            return state.set("class", fromJS(data));
        }
    })

}, initialState)
