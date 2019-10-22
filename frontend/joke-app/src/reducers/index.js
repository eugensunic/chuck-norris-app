import { combineReducers } from "redux";
import { mail } from "./mail.reducer";
import { notifier } from "./notifier.reducer";

const rootReducer = combineReducers({ mail, notifier });

export default rootReducer;
