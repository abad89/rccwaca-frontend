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
    <div className="">
      <div className={"p-1 col-6"}>
        <button className={"btn btn-outline-primary"} onClick={handleSelectClick}>{name}</button> -&gt;
        <button className={"btn btn-sm btn-outline-danger"} onClick={handleDeleteClick}> Delete User</button>
      </div>
    </div>
  );
}

export default UserButtons;
