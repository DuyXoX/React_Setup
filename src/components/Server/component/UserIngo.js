import "./UserInfo.scss";

const UserInfo = (props) => {
    const userState = props.userState
    const alluserState = {
        "abc": "css"
    }
    const getuserState = (userState) => {
        const fetchState = alluserState[userState]
        return "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
    }

    return (
        <div className="user-info">
            <div className="icon-user">
                <img src={getuserState(userState)} />
            </div>
            <div className="user-state">{userState}</div>
        </div>
    )
}

export default UserInfo;