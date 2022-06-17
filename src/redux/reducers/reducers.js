import { GET_DATA, SELECT } from "../actions/actions";
export const initialState = [];
export const reducerss = (state = initialState, action) => {
  if (action.type === GET_DATA) {
    return [...state, action.payload];
  } else if (action.type === SELECT) {
    return action.payload;
  }
  return state;
};
