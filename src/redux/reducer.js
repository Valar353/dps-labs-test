import {initialState} from './store';
import {ADD_SNAPSHOT, CLEAR_HISTORY, SWITCH_RECORDER} from "./constant";

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SNAPSHOT:
            return {
                ...state,
                arrSnapshots: [...state.arrSnapshots, action.snapshot]
            };
        case SWITCH_RECORDER:
            return {
                ...state,
                isRecorded: action.val
            };
        case CLEAR_HISTORY:
            return {
                ...state,
                arrSnapshots: []
            };
        default:
            return state;
    }
}