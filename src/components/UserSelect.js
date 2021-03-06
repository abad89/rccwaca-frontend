import { useState } from "react";
import UserButtons from "./UserButtons.js";

function UserSelect({
  userList,
  onChangeUser,
  onChangeHideUserList,
  onDeleteUser,
  onAddUser,
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

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: formData.name,
    };
    fetch("http://localhost:9393/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then(onAddUser(newUser));
  }

  return (
    <div className={"user-select"}>
      <p>
        Please select your username. Go ahead and click it twice until I figure out why it doesn't work the first time.
      </p>
      <div className={"p-1"}>
        <form onSubmit={handleSubmit}>
          <input
            className={""}
            placeholder="Username"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
          <input
            className={""}
            type="submit"
            value="Add User"
          ></input>
        </form>
      </div>
      {usersItem}
    </div>
  );
}

export default UserSelect;
