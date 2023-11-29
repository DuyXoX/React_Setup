import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UserInfo from "./component/UserIngo";
import { map } from "lodash";


const UserByID = () => {
    const { id } = useParams()
    const [infoUser, setinfoUser] = useState({})
    // console.log("Check User ID: ", id);
    // console.log("Check userParams: ", useParams());

    useEffect(() => {
        getUserByID()
    }, [])

    const getUserByID = async () => {
        let response
        try {
            // Ket noi den API bang axios den URL server backend
            let data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            response = data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        if (response && response.data) {
            setinfoUser(response.data)
        }
        // console.log("Check response: ", response);
    }
    return (
        <div>
            {/* {JSON.stringify(infoUser)} */}
            <UserInfo userState={"Form User By ID"} />
        </div>
    )
}

export default UserByID;