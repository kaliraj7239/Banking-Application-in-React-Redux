import { combineReducers } from "redux";
import {AccountReducer, AccountReducer2 }from "./accountReducer";

const reducers = combineReducers({
    account: AccountReducer,
    account2: AccountReducer2
});

export default reducers;