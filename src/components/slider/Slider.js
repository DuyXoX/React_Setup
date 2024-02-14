import React from "react";
import { Col, Row } from "react-bootstrap";
import SliderOne from "./component/SliderOne";
import SliderTwo from "./component/SliderTwo";
import SliderMain from "./component/SliderMain";
import './Slider.scss';

const SliderShow = () => {

    return (
        <Row className="">
            <Col className="col-lg-8">
                <div className="bg-danger h-100">
                    <SliderMain />
                </div>
            </Col>
            <Col className="col-lg-4 d-none d-lg-block ps-0">
                <div className="bg-primary">
                    <div className="bg-danger">
                        <SliderOne />
                    </div>
                    <div className="bg-danger">
                        <SliderTwo />
                    </div>
                </div>

            </Col>
        </Row>
    );
};

export default SliderShow;