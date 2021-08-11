function UserButtons({ name, id, onChangeUser }) {

        function handleClick(){
            onChangeUser(id)
        }

    return (
        <div>
        <button onClick={handleClick}>{name}</button>
        </div>
)};

export default UserButtons;