import { useEffect, useState } from "react";
import moment from "moment";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "react-bootstrap";

const SanPhamTable = (props) => {
    const { sanphamProduct } = props
    let history = useHistory()
    const handleUpdate = (id) => {
        history.push(`/sp/updateSP/${id}`)
    }
    const handleDelete = (id) => {
        history.push(`/sp/delete/${id}`)
    }

    console.log("check sanphamProduct", sanphamProduct);
    return (
        < div class="table-responsive">

            <Table class="table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">masp</th>
                        <th scope="col">ten</th>
                        <th scope="col">gia</th>
                        <th scope="col">loai</th>
                        <th scope="col">hansd</th>
                        <th scope="col">hinh</th>
                        <th scope="col">tuy chon</th>
                    </tr>
                </thead>
                <tbody>
                    {sanphamProduct.map((item, sanpham) => {
                        return (
                            <tr class="productSanPham" key={sanpham}>
                                <td scope="col">#</td>
                                <td scope="col">{item.masp}</td>
                                <td scope="col">{item.ten}</td>
                                <td scope="col">{item.gia}</td>
                                <td scope="col">{item.loai}</td>
                                <td scope="col">{moment(item.hansd).format('HH:mm:ss DD/MM/YYYY')}</td>
                                <td><img src={item.hinh} /></td>
                                <td>
                                    <button class="btn btn-primary btn-sm" onClick={() => handleUpdate(item._id)}>
                                        Sửa</button>
                                    <button class="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>
                                        Xóa</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </ div>
    )
}

export default SanPhamTable;