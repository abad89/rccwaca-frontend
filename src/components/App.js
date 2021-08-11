import { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import UserSelect from "./UserSelect";
import CollectionContainer from "./CollectionContainer";
import Footer from "./Footer";
import ManagePage from "./ManagePage"

function App() {
  const [currentUser, setCurrentUser] = useState(0);
  const [userList, setUserList] = useState([]);
  const [hideUserList, setHideUserList] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9393/users")
      .then((r) => r.json())
      .then(setUserList);
  }, []);
  console.log(userList)

  function handleChangeUser(id) {
    if (currentUser > 0) {
      handleChangeHideUserList();
    }
    setCurrentUser(id);
    console.log(currentUser);
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
          />
        ) : null}
        {hideUserList ? null : <CollectionContainer user_id={currentUser} name={currentUser.name} />}
        <NavLink to="/manage">Manage Car Database</NavLink>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
