import { useState } from "react";
import UserButtons from "./UserButtons.js";

function UserSelect({
  userList,
  onChangeUser,
  onChangeHideUserList,
  onDeleteUser,
}) {
  // console.log(userList)

  const usersItem = userList.map((user) => (
    <UserButtons
      onChangeUser={onChangeUser}
      onDeleteUser={onDeleteUser}
      onChangeHideUserList={onChangeHideUserList}
      key={user.id}
      name={user.name}
      id={user.id}
      user={user}
    />
  ));

  const [formData, setFormData] = useState({
    name: "",
  });
  
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  } 

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
        name: formData.name
    };
    fetch("http://localhost:9393/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
    .then((r) => r.json())
    console.log("New user added!");
  }

  return (
    <div>
      Please select your username. Go ahead and click it twice until I figure
      out why it doesn't work the first time.
      <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" name="name" value={formData.name} onChange={handleChange}></input>
        <input type="submit" value="Add User"></input>
      </form>
      </div>
      {usersItem}
      
    </div>
  );
}

export default UserSelect;
