import React from 'react';
import './CardProduct.scss';
import { Card, CardBody, CardImg, CardTitle, Row, Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import shrimp from "../../assets/img/product/shrimp/shrimp-prl.png";
import pictures_1 from "../../assets/img/pictures_1.png";
import pictures_2 from "../../assets/img/pictures_2.png";
import pictures_3 from "../../assets/img/pictures_3.png";
import pictures_4 from "../../assets/img/pictures_4.png";

const images = [
    shrimp, pictures_1, pictures_2, pictures_3, pictures_4
]

const CardProduct = () => {

    return (
        <Card>
            <CardImg className='img-product' src={shrimp} alt='Ảnh sản phẩm' />
            <CardBody>
                <Row>
                    <Col className='col-7'>
                        <div className=''>
                            <CardTitle className='text-truncate'>
                                Tên sản phẩm Tên sản phẩm
                            </CardTitle>
                            <div className='d-flex price'>
                                <span className='text-decoration-line-through'>
                                    15.000 VND
                                </span>
                                <span className=''>
                                    10.000 VND
                                </span>
                                <span className='price-off'>
                                    25%
                                </span>
                            </div>
                            <div className=''>
                                <ul className='d-flex list-unstyled'>
                                    <li><FaStar className='ic-star' /></li>
                                    <li><FaStar className='ic-star' /></li>
                                    <li><FaStar className='ic-star' /></li>
                                    <li><FaStar className='ic-star' /></li>
                                    <li><FaStar className='ic-star' /></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col className='px-0'>
                        <div className='love-cart'>
                            <div className='mb-3'>
                                <div className='card-ic'>
                                    <FaRegHeart className='ic-heart' />
                                </div>
                                <span className='text-sell'>
                                    Đã thích 99
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col className='ps-0'>
                        <div className='love-cart'>
                            <div className='mb-3'>
                                <div className='card-ic bg-success'>
                                    <HiShoppingCart className='ic-cart' />
                                </div>
                                <span className='text-sell'>
                                    Đã bán 99
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default CardProduct;