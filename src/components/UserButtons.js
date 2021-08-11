function UserButtons({ name, id, onChangeUser, onChangeHideUserList }) {

        function handleClick(){
            onChangeUser(id)
            // if (id >50) {onChangeHideUserList()}
        }

    return (
        <div>
        <button onClick={handleClick}>{name}</button>
        </div>
)};

export default UserButtons;