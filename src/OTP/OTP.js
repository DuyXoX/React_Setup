import "./OTP.scss"
import GenerateOTP from "./GenerateOTP";
import InPutOTP from "./inputOTP";
import { useState } from "react";


const OTP = () => {

    const [orgOTPParent, setorgOTPParent] = useState('')
    const [userOTPParent, setuserOTPParent] = useState('')
    const [isDisableBtn, setisDisableBtn] = useState('')


    const handleSubmitOTP = () => {
        if (+orgOTPParent === +userOTPParent) {
            alert('Xac thuc OTP thanh cong')
        } else {
            alert('Xac thuc OTP that bai!')
        }

    }

    return (
        <div className="otp-parent">
            <GenerateOTP setorgOTPParent={setorgOTPParent} />
            <InPutOTP
                setuserOTPParent={setuserOTPParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisableBtn={isDisableBtn}
                setisDisableBtn={setisDisableBtn} />
        </div>
    )
}

export default OTP;