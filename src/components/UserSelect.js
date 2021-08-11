import UserButtons from "./UserButtons.js";

function UserSelect({ userList, onChangeUser, onChangeHideUserList, onDeleteUser }) {
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

  return (
    <div>
      Please select your username. Go ahead and click it twice until I figure out why it doesn't work the first time.
      {usersItem}
    </div>
  );
}

export default UserSelect;
