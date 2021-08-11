import UseState from "react"
import UserList from "./UserList";

function App() {

  const currentUser, setCurrentUser = useState(0)

  return (
    <div className="App">
      Hello world!
      <UserList />
    </div>
  );
}

export default App;
