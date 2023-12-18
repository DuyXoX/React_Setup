import axios from "axios";
import { useEffect, useState } from "react";
import './SanPham.scss'
import SanPhamTable from "./SanPhamTable";

const SanPham = () => {
    const [sanphamProduct, setsanphamProduct] = useState([])
    const [isLoadingData, setisLoadingData] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get('http://localhost:8000/sp/viewSP');
                setsanphamProduct(response.data)
                setisLoadingData(false);
                // console.log('check data:', response.data)

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="sanpham-parent">
            <div className="sanpham-api">
                {isLoadingData === true &&
                    <div>
                        Loading data ...!!!
                    </div>
                }

                {!isLoadingData &&
                    <SanPhamTable
                        sanphamProduct={sanphamProduct} />
                }
            </div>
        </div>
    )
}

export default SanPham;