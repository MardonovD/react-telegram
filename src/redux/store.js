import { createStore } from "redux";
import { initialState } from "./reducers/reducers";
import { reducerss } from "./reducers/reducers";
const store = createStore(reducerss, initialState);
export default store;
