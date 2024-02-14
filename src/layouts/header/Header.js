import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../styles/Header.scss';
import { FaChevronDown } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='d-none d-md-block' style={{ background: '#4E4E4E' }}>
            <Container>
                <Row className='d-flex flex-row justify-content-between align-items-center'>
                    <Col className='col-5'>
                        <div className=''>
                            <h1 className='contain-header my-auto text-white' style={{ fontSize: '13px' }}>Miễn phí ship trong TP Buôn Ma Thuột</h1>
                        </div>
                    </Col>
                    <Col className='col-5'>
                        <div className='header-option'>
                            <ul className='list-unstyled d-flex justify-content-end m-auto'>
                                <li className='me-3'>
                                    <span>Tiếng Việt<FaChevronDown className='ms-1' /></span>
                                </li>
                                <li className='me-3'>
                                    <Link className='nav-link' to={"/chinh-sach"}>
                                        <span>Chính Sách</span>
                                    </Link>
                                </li>
                                <li className='me-3'>
                                    <Link className='nav-link' to={"/ho-tro"}>
                                        <BsExclamationCircle className='me-1 my-1' />Hổ Trợ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                </Row>
            </Container>
        </header>
    );
};

export default Header;