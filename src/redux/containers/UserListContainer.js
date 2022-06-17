import { connect } from "react-redux/es/exports";
import getData from "../../componnets/Api";
import UserList from "../../componnets/UserList";
import { selectAction } from "../actions/actions";
import { gteData } from "../actions/actions";
export const UserListContainer = connect(null, { selectAction, gteData })(
  UserList
);
