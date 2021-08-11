import { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import UserSelect from "./UserSelect";
import CollectionContainer from "./CollectionContainer";
import Footer from "./Footer";
import ManagePage from "./ManagePage"

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [userList, setUserList] = useState([]);
  const [hideUserList, setHideUserList] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9393/users")
      .then((r) => r.json())
      .then(setUserList);
  }, []);
  console.log(userList)

  function handleChangeUser(user) {
    if (currentUser) {
      handleChangeHideUserList();
    }
    setCurrentUser(user);
    console.log(currentUser);
  }
  function handleDeleteUser(userToDelete) {
    const updatedUserList = userList.filter((user) => user.id !== userToDelete.id);
    setUserList(updatedUserList)
  }

  function handleChangeHideUserList() {
    setHideUserList((hideUserList) => !hideUserList);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/manage">
          <ManagePage />
        </Route>
        <Route exact path="/">
        {hideUserList ? (
          <UserSelect
            userList={userList}
            onChangeUser={handleChangeUser}
            onChangeHideUserList={handleChangeHideUserList}
            onDeleteUser={handleDeleteUser}
          />
        ) : null}
        {hideUserList ? null : <CollectionContainer user={currentUser} />}
        <NavLink to="/manage">Manage Car Database</NavLink>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
