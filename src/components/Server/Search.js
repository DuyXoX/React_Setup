import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [keyWord, setkeyWord] = useState('')
    const [locationArr, setlocationArr] = useState('')
    const [isLoadingData, setisLoadingData] = useState(false)
    const [inputKeyWord, setinputKeyWord] = useState(false)

    let history = useHistory()

    const handleSearchBtn = async () => {
        setisLoadingData(true)
        setlocationArr([])

        let response
        try {
            // Ket noi den API bang axios den URL server backend
            let data = await axios.get(`https://jsonplaceholder.typicode.com/${keyWord}`);
            response = data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        // console.log("Check User: ", response);

        if (response && response.data) {
            let result = response.data
            let _locationArr = [] //Truyen dung gia tri cho ham co ten _locationArr

            if (!_.isEmpty(result)) {
                for (let key in result) {
                    // console.log("Key: ", result[key]);
                    _locationArr.push(result[key])
                }
                setlocationArr(_locationArr) //Set gia tri cho locationArr
            } else {
                setlocationArr([]) //Set gia tri [] tuc la khong co gia tri 
            }
            setisLoadingData(false)
            setinputKeyWord(false)
            // console.log("Check Data: ", result);
        } else {
            setlocationArr([]) //Set gia tri [] tuc la khong co gia tri 
            setisLoadingData(false)
            setinputKeyWord(false)
        }
    }

    const handleView = (website) => {
        history.push(`/users/${website}`)
    }

    return (
        <div className="search-container">
            <div>Điền vào users posts ...</div>
            <div className="search-input">
                <input type="text" value={keyWord} placeholder="Search user" onFocus={() => setinputKeyWord(true)} onChange={(event) => setkeyWord(event.target.value)} />
                <Button onClick={() => handleSearchBtn()}>Submit</Button>
            </div>

            {isLoadingData === true &&
                <div>
                    Loading data ...!!!
                </div>
            }

            <div className="result-container">
                {locationArr && locationArr.length > 0 && locationArr.map((item, index) => {
                    return (
                        <div className="result" key={`info-${index}`}>
                            <div className="id"><span onClick={() => handleView(item.id)}>website: {item.id}</span></div>
                            <div className="name">Name: {item.name}</div>
                            <div className="phone">Phone: {item.phone}</div>
                            <div className="email">Email: {item.email}</div>
                            <div className="address">Address: {item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}</div>
                            <div className="website"><span onClick={() => handleView(item.website)}>website: {item.website}</span></div>
                        </div>
                    )
                })
                }

                {
                    !inputKeyWord && keyWord && locationArr && locationArr.length === 0 &&
                    <div>
                        Không tìm thấy dữ liệu từ khóa = {keyWord}
                    </div>
                }
            </div>
        </div>
    )
}

export default Search;