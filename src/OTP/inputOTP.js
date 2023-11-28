import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import OtpInput from 'react18-input-otp';
import CountDown from './CountDown';

const InPutOTP = (props) => {
    const [otp, setOtp] = useState('')
    const handleChange = (otp) => {
        setOtp(otp)
        props.setuserOTPParent(otp)
    }

    const handleSubmitOTP = () => {
        props.handleSubmitOTP()
    }
    // console.log('check otp ', otp);

    return (
        <div className='input-otp'>
            <h3>Ma OTP cua ban da duoc gui!</h3>
            <OtpInput value={otp} inputStyle={'otp-value'} onChange={handleChange} numInputs={6} />
            <CountDown className='timer' setisDisableBtn={props.setisDisableBtn} />

            <div className='action'>
                <Button className='clear'>Clear</Button>
                <Button className='confirm' disabled={props.isDisableBtn} onClick={() => handleSubmitOTP()}>Confirm</Button>
            </div>
        </div>
    )
}

export default InPutOTP;