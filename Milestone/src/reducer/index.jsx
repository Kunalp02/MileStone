import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import eventReducer from "../slices/eventSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    events: eventReducer,
});

export default rootReducer;