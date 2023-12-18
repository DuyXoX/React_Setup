import { useState } from "react";
import "./UserInfo.scss";

const UserInfo = (props) => {
    const infoUser = props.infoUser
    const alluserState = {
        "abc": "css"
    }
    // const getuserState = (infoUser) => {
    //     const fetchState = alluserState[infoUser]
    //     return "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
    // }
    // console.log('check infoUser', infoUser);

    return (
        <div className="user-info">
            {/* <div className="icon-user">
                <img src={getuserState(infoUser)} />
            </div> */}
            <div>
                <p>{infoUser.id}</p>
                <p>{infoUser.name + infoUser.username}</p>
                <p>{infoUser.email}</p>
                <p>{infoUser.website}</p>
                {infoUser.address && (
                    <div className="address-info">
                        <h3>Address:</h3>
                        <p>Street: {infoUser.address.street}</p>
                        <p>Suite: {infoUser.address.suite}</p>
                        <p>City: {infoUser.address.city}</p>
                        <p>Zipcode: {infoUser.address.zipcode}</p>
                        <p>Latitude: {infoUser.address.geo && infoUser.address.geo.lat}</p>
                        <p>Longitude: {infoUser.address.geo && infoUser.address.geo.lng}</p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default UserInfo;