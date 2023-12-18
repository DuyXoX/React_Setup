import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UserInfo from "./component/UserInfo";
import { map } from "lodash";


const UserByID = () => {
    const { id } = useParams()
    const [infoUser, setinfoUser] = useState([])
    // console.log("Check User ID: ", id);
    // console.log("Check userParams: ", useParams());

    useEffect(() => {
        const getUserByID = async () => {
            try {
                // Ket noi den API bang axios den URL server backend
                let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

                setinfoUser(response.data)
                console.log("Check response: ", response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }

        }
        getUserByID()
    }, [])


    return (
        <div>
            {/* {JSON.stringify(infoUser)} */}
            <UserInfo infoUser={infoUser} />
        </div>
    )
}

export default UserByID;