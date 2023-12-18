import React, { useState, useEffect } from 'react';
import axios from "axios";
import cheerio from 'cheerio';
import Search from "./Search";
import "./User.scss"
import { Button } from "react-bootstrap";

// class User extends React.Component {//Su dung Class

//     // state = {
//     //     maspList: []
//     // }

//     constructor(props) {
//         super(props);
//         this.state = {
//             maspList: []
//         }
//     }

//     async componentDidMount() {

//         try {//Ket noi den API bang axios den URL server backend
//             let response = await axios.get("https://jsonplaceholder.typicode.com/users");

//             // Giả sử 'masp' là thuộc tính cần lấy từ mỗi đối tượng
//             const maspArray = response.data.map(item => item.name);

//             // Cập nhật state và in giá trị mới của state
//             this.setState({ maspList: maspArray }, () => {
//                 console.log('check data:', this.state.maspList);
//             });
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }

//         // let response = await axios({
//         //     method: 'post',
//         //     url: "http://localhost:8000/sp/viewSP",
//         //     data: { url: 'https://jsonplaceholder.typicode.com/users' },
//         // })

//         // console.log('check data:', this.state.title);

//     }
//     render() {
//         return (
//             <div>
//                 MASP List: {this.state.maspList.join(", ")}
//             </div>
//         )
//     }
// }

const User = () => {
    const [maspList, setMaspList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ket noi den API bang axios den URL server backend
                let response = await axios.get('https://jsonplaceholder.typicode.com/users/');

                //Lấy API dạng json
                // Cập nhật state và in giá trị mới của state
                setMaspList(response.data);
                console.log('check data:', response.data);

                //Lấy API từ Website HTML Dom ... khuyến cáo phần Cheeri nên làm ở backend để tăng tính bảo mật
                // const $ = cheerio.load(response.data);
                // // Lọc dữ liệu từ HTML bằng cách chọn các phần tử cụ thể
                // const productData = [];
                // $('.productSanPham').each((index, element) => {
                //     const productInfo = $(element).text().trim();
                //     productData.push(productInfo);
                // });
                // setMaspList(productData);
                // console.log('check productData:', productData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // [] để đảm bảo useEffect chỉ chạy một lần sau khi mount
    // console.log("Run render");

    return (
        <div className="user-parent">
            <div className="user-api">
                MASP List: {maspList.map(item => item.name).join(", ")}
                {/* {maspList.map((item, index) => (
                    <div key={index}>
                        <p>Mã sản phẩm: {item.masp}</p>
                        <p>Tên sản phẩm: {item.ten}</p>
                        <p>Giá: {item.gia}</p>
                        <p>Loại: {item.loai}</p>
                        <p>Hạn sử dụng: {item.hansd}</p>
                    </div>
                ))} */}
            </div>
            {/* {maspList.map((item, index) => (
                <p key={index}>{item}</p>
            ))} */}
            <Search />
        </div>

    );
}

export default User;