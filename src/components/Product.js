import { Button } from "react-bootstrap";
import pictures_1 from "../assets/img/pictures_1.png";
import pictures_2 from "../assets/img/pictures_2.png";
import pictures_3 from "../assets/img/pictures_3.png";
import pictures_4 from "../assets/img/pictures_4.png";
import { useState } from "react";
import Lightbox from 'react-18-image-lightbox';

const images = [
    pictures_1,
    pictures_2,
    pictures_3,
    pictures_4

]
const Product = () => {
    const [currentUpImg, setCurrentImg] = useState(pictures_1)
    const [isOpen, setOpen] = useState(false)
    const [photoIndex, setphotoIndex] = useState(0)

    const handleclickPreViewImg = () => {
        let index = images.findIndex(item => item === currentUpImg)
        setphotoIndex(index)
        setOpen(true)
    }

    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentUpImg} onClick={() => handleclickPreViewImg()} />
                    </div>
                    <div className="img-down">
                        <div className="img-small"><img className={currentUpImg === pictures_1 ? "active" : ""} src={pictures_1} onClick={() => setCurrentImg(pictures_1)} /></div>
                        <div className="img-small"><img className={currentUpImg === pictures_2 ? "active" : ""} src={pictures_2} onClick={() => setCurrentImg(pictures_2)} /></div>
                        <div className="img-small"><img className={currentUpImg === pictures_3 ? "active" : ""} src={pictures_3} onClick={() => setCurrentImg(pictures_3)} /></div>
                        <div className="img-small"><img className={currentUpImg === pictures_4 ? "active" : ""} src={pictures_4} onClick={() => setCurrentImg(pictures_4)} /></div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">
                        Ten san pham
                    </div>
                    <div className="price">
                        5.000.000đ
                    </div>
                    <div className="size">
                        Size: 37
                    </div>
                    <label className="action">Số lượng
                        <input type="number" min={1} className="input-quatity" />
                    </label><br />
                    <Button className="button-product">Submit</Button>
                </div>

            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setphotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setphotoIndex((photoIndex + 1) % images.length)
                    }
                    animationDuration={800}//Tang chinh toc do truyen anh //Co the thao khao them tai thu vien (npm)
                />
            )}
        </div>
    )
}

export default Product;