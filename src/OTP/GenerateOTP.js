import { Button } from "react-bootstrap";
import { useState } from "react";


const GenerateOTP = (props) => {
    const [orgOTP, setorgOTP] = useState('')

    const handleClickBtn = () => {
        const otp = Math.floor(100000 + Math.random() * 900000)
        setorgOTP(otp)
        props.setorgOTPParent(otp)
    }

    return (
        <div className="generate-otp">
            <Button onClick={() => handleClickBtn()}>Generate OTP</Button>
            <div>Your OTP: {orgOTP}</div>
        </div>
    )
}

export default GenerateOTP;