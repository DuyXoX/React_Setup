import "./OTP.scss"
import GenerateOTP from "./GenerateOTP";
import InPutOTP from "./inputOTP";
import { useState } from "react";
import CountDownAnimation from "./CountDownAnimation";


const OTP = () => {

    const [orgOTPParent, setorgOTPParent] = useState('')
    const [userOTPParent, setuserOTPParent] = useState('')
    const [isDisableBtn, setisDisableBtn] = useState(false)


    const handleSubmitOTP = () => {
        if (!orgOTPParent) {
            alert('Làm ơn tạo OTP')
            return
        }
        if (!userOTPParent) {
            alert('Làm ơn nhập OTP')
            return
        }
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