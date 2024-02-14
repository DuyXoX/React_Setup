import React from 'react';
import SliderShow from '../../components/slider/Slider';
import { Col, Container, Row } from 'react-bootstrap';
import '../../styles/Home.scss'
import CardProduct from '../../components/cardproduct/CardProduct';


const HomePage = () => {
    return (
        <>
            <section>
                <Container>
                    <SliderShow />
                </Container>
            </section>
            <section>
                <Container>
                    <h2 className='text-center'>Danh Mục</h2>
                    <Row className='d-flex justify-content-center align-items-center py-5'>
                        <Col className='col-lg-3'>
                            <div className='p-3 bg-fish rounded-3'>
                                <h3 className='text-center text-white'>Cá cảnh</h3>
                            </div>
                        </Col>
                        <Col className='col-lg-3'>
                            <div className='p-3 bg-shrimp rounded-3'>
                                <h3 className='text-center text-white'>Tép cảnh</h3>
                            </div>
                        </Col>
                        <Col className='col-lg-3'>
                            <div className='p-3 bg-plant rounded-3'>
                                <h3 className='text-center text-white'>Cây thủy sinh</h3>
                            </div>
                        </Col>
                        <Col className='col-lg-3'>
                            <div className='p-3 bg-accessory rounded-3'>
                                <h3 className='text-center text-white'>Phụ kiện</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className='row-cols-2 row-cols-md-4 row-cols-md-3">
'>
                        <Col>
                            <div className=''>
                                <CardProduct />
                            </div>
                        </Col>
                        <Col >
                            <div className=''>
                                <CardProduct />
                            </div>
                        </Col>
                        <Col >
                            <div className=''>
                                <CardProduct />
                            </div>
                        </Col>
                        <Col >
                            <div className=''>
                                <CardProduct />
                            </div>
                        </Col>
                        <Col >
                            <div className=''>
                                <CardProduct />
                            </div>
                        </Col>
                        <Col >
                            <div className=''>
                                <CardProduct />
                            </div>
                        </Col>
                        <Col >
                            <div className=''>
                                <CardProduct />
                            </div>
                        </Col>
                        <Col >
                            <div className=''>
                                <CardProduct />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};
//col-6 col-sm-4 col-lg-3 
export default HomePage;