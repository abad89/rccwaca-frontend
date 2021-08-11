import { useState, useEffect } from "react";
import UserSelect from "./UserSelect";
import CollectionContainer from "./CollectionContainer";

function App() {
  const [currentUser, setCurrentUser] = useState(0);
  const [userList, setUserList] = useState([]);
  const [hideUserList, setHideUserList] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9393/users")
      .then((r) => r.json())
      .then(setUserList);
  }, []);
  // console.log("current user", currentUser)

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
      {hideUserList ? (
        <UserSelect
          userList={userList}
          onChangeUser={handleChangeUser}
          onChangeHideUserList={handleChangeHideUserList}
        />
      ) : null}
      {hideUserList ? null : (<CollectionContainer user_id={currentUser}/>)}
    </div>
  );
}

export default App;
