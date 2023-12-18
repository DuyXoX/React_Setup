import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import SanPhamTable from "./SanPhamTable";
import { values } from "lodash";

const SanPhamDelete = () => {
    const { id } = useParams()
    const [sanphamProduct, setsanphamProduct] = useState([])
    const [isLoadingData, setisLoadingData] = useState(true)

    useEffect(() => {
        const getSanPham = async () => {
            try {
                let response = await axios.get(`http://localhost:8000/sp/delete/${id}`);

                setsanphamProduct(response.data)
                setisLoadingData(false);
                console.log("Check response san pham: ", response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }

        }
        getSanPham();
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
                    Array.isArray(sanphamProduct) && sanphamProduct.length > 0 ? (
                    <SanPhamTable sanphamProduct={sanphamProduct} />
                ) : (
                    <div>Không có sản phẩm.</div>
                )
                }
            </div>
        </div>
    )
}

export default SanPhamDelete;