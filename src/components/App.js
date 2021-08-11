import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import UserSelect from "./UserSelect";
import CollectionContainer from "./CollectionContainer";
import Footer from "./Footer";
import ManagePage from "./ManagePage";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [userList, setUserList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9393/users")
      .then((r) => r.json())
      .then(setUserList);
  }, []);
  console.log(userList);

  function handleChangeUser(user) {
    if (currentUser) {
      handleLogIn();
    }
    setCurrentUser(user);
    console.log(currentUser);
  }
  function handleDeleteUser(userToDelete) {
    const updatedUserList = userList.filter(
      (user) => user.id !== userToDelete.id
    );
    setUserList(updatedUserList);
  }

  function handleLogIn() {
    setLoggedIn((loggedIn) => !loggedIn);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/manage">
          <ManagePage />
        </Route>
        <Route exact path="/">
          {loggedIn ? (
            <UserSelect
              userList={userList}
              onChangeUser={handleChangeUser}
              onChangeHideUserList={handleLogIn}
              onDeleteUser={handleDeleteUser}
            />
          ) : null}
          {loggedIn ? null : <CollectionContainer user={currentUser} />}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
