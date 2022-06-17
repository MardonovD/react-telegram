import getData from "../../componnets/Api";
export const GET_DATA = "GET_DATA";
export const SELECT = "SELECT";

export const gteData = () => {
  const data = getData("users");
  return {
    type: GET_DATA,
    payload: data,
  };
};

export const selectAction = (id) => {
  return {
    type: SELECT,
    payload: id,
  };
};
