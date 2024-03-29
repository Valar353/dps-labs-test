import {createStore, applyMiddleware} from "redux";
import userReducer from "./reducer";
import thunk from 'redux-thunk';

const initialState = {
    isRecorded: false,
    arrSnapshots: [],

};
let store = createStore(userReducer, applyMiddleware(thunk));
export {store, initialState};