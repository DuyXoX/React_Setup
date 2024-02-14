import { useEffect } from 'react';

const CounDownTimer = (remainingTime, isTimeUp, setisDisableBtn, setIsTimeUp) => {
    useEffect(() => {
        if (remainingTime === 0 && !isTimeUp) {
            setIsTimeUp(true)
            setisDisableBtn(true)
            console.log('Time Up!!!')
        }
    }, [remainingTime, isTimeUp, setisDisableBtn, setIsTimeUp])
};

export default CounDownTimer;