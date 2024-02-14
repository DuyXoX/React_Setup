import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useParams } from 'react-router-dom';
import image from '../../assets/img/logo.png';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import '../../styles/Navbar.scss';
import { FaChevronDown } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Logo = image;

const NavbarLayout = () => {
    const [navlinkFocus, setnavlinkFocus] = useState('navLink_1')
    const { idSanPham } = useParams()
    // console.log("check", navlinkFocus);
    return (
        <>
            <Navbar bg="success">
                <Container>
                    <Navbar.Brand className="h1 mb-0 text-white" href="/">
                        <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Mộc Aquatic Logo"
                        />{' '}Mộc Aquatic
                    </Navbar.Brand>
                    <Nav className="">
                        <Link className={navlinkFocus === 'navLink_1' ? "active_link nav-link" : "nav-link"} to={"/trang-chu"} onClick={() => setnavlinkFocus('navLink_1')}>Trang chủ</Link>
                        <Link className={navlinkFocus === 'navLink_2' ? "active_link nav-link" : "nav-link"} to={"/ca-canh"} onClick={() => setnavlinkFocus('navLink_2')}>Cá cảnh</Link>
                        <Link className={navlinkFocus === 'navLink_3' ? "active_link nav-link" : "nav-link"} to={"/tep-canh"} onClick={() => setnavlinkFocus('navLink_3')}>Tép cảnh</Link>
                        <Link className={navlinkFocus === 'navLink_4' ? "active_link nav-link" : "nav-link"} to={"/cay-thuy-sinh"} onClick={() => setnavlinkFocus('navLink_4')}>Cây thủy sinh</Link>
                        <Link className={navlinkFocus === 'navLink_5' ? "active_link nav-link" : "nav-link"} to={"/phu-kien"} onClick={() => setnavlinkFocus('navLink_5')}>Phụ kiện</Link>
                        <Link className={navlinkFocus === 'navLink_6' ? "active_link nav-link" : "nav-link"} to={"/xem-them"} onClick={() => setnavlinkFocus('navLink_6')}>Xem Thêm<FaChevronDown className="ms-1" /></Link>
                    </Nav>
                    <Form className="d-flex border-0 bg-white p-1 rounded-3 ms-auto">
                        <Form.Control
                            type="search"
                            placeholder="Tìm kiếm sản phẩm"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button><FaSearch /></Button>
                    </Form>
                    <div className="d-flex justify-content-center align-items-center">
                        <Dropdown>
                            <div className="icon position-relative">
                                <Link to={"/goi-hang"}>
                                    <HiShoppingCart className="cart" />
                                    <div className="position-absolute top-0 start-100 translate-middle">
                                        <span className="count-product rounded-pill fw-bold">9</span>
                                    </div>
                                </Link>
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><Link className="dropdown-item" to={`/gio-hang/${idSanPham}`}>Action</Link></li>
                                <li><Link className="dropdown-item" to={`/gio-hang/${idSanPham}`}>Another action</Link></li>
                                <li><Link className="dropdown-item" to={`/gio-hang/${idSanPham}`}>Something else here</Link></li>
                            </ul>
                        </Dropdown>
                        <div className="icon">
                            <Link to={"/thong-tin-nguoi-dung"}>
                                <FaUserCircle />
                            </Link>
                        </div>

                    </div>

                </Container>

            </Navbar>
        </>
    );
};

export default NavbarLayout;