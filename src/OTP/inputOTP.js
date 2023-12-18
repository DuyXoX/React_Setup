import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import OtpInput from 'react18-input-otp';
import CountDown from './CountDown';
import CountDownAnimation from './CountDownAnimation';

const InPutOTP = (props) => {
    const childRef = useRef() //Ref la ham khai bao su dung de lien ket tu Con sang Cha
    const [otp, setOtp] = useState('')
    const handleChange = (otp) => {
        setOtp(otp)
        props.setuserOTPParent(otp)
    }

    const handleSubmitOTP = () => {
        props.handleSubmitOTP()
    }
    const handleClear = () => {
        setOtp('')
        childRef.current.resTimer()
        // console.log('check handleClear', childRef.current.resTimer())
    }
    // console.log('check otp ', otp);

    return (
        <div className='input-otp'>
            <h3>Ma OTP cua ban da duoc gui!</h3>
            <OtpInput value={otp} inputStyle={'otp-value'} onChange={handleChange} numInputs={6} />
            <CountDown className='timer' setisDisableBtn={props.setisDisableBtn} />
            <CountDownAnimation className='timer'
                setisDisableBtn={props.setisDisableBtn}
                ref={childRef}
            />

            <div className='action'>
                <Button className='clear' disabled={!props.isDisableBtn} onClick={() => handleClear()}>Clear</Button>
                <Button className='confirm' disabled={props.isDisableBtn} onClick={() => handleSubmitOTP()}>Confirm</Button>
            </div>
        </div>
    )
}

export default InPutOTP;