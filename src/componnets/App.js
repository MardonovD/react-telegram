import { UserListContainer } from "../redux/containers/UserListContainer";
import PostList from "./PostList";

function App() {
  return (
    <div>
      <PostList />
      <UserListContainer />
    </div>
  );
}

export default App;
