function UserButtons({ user, name, id, onChangeUser, onDeleteUser }) {
  function handleSelectClick() {
    onChangeUser(user);
  }
  function handleDeleteClick() {
    fetch(`http://localhost:9393/users/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteUser(user);
      });
    console.log("deleted user", user);
  }

  return (
    <div>
      <button onClick={handleSelectClick}>{name}</button> -&gt;
      <button onClick={handleDeleteClick}> Delete User</button>
    </div>
  );
}

export default UserButtons;
