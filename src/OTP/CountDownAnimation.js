import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CounDownTimer from './CounDownTimer';



const CountDownAnimation = forwardRef((props, ref) => { // forwardRef dung ke lien ket Con va Cha
    const { setisDisableBtn } = props
    const duration = 10
    const [isTimeUp, setIsTimeUp] = useState(false)

    const renderTime = ({ remainingTime }) => {
        CounDownTimer(remainingTime, isTimeUp, setisDisableBtn, setIsTimeUp)

        return (
            <div className="timer">
                <div className="value">{remainingTime}</div>
            </div>
        )

    }

    useImperativeHandle(ref, () => {
        return {
            resTimer() {
                setIsTimeUp(false)
                setisDisableBtn(false)
            }
        }
    }, [setIsTimeUp, setisDisableBtn]);

    return (
        <div>
            {isTimeUp ?
                <h5>Hết thời gian rồi!</h5>
                :
                <div>
                    <CountdownCircleTimer
                        isPlaying
                        duration={duration}//Thoi gian vong tron
                        colors={['#008000', '#F7B801', '#A30000', '#ff0000']} //Chuyen doi theo mau sac
                        colorsTime={[10, 5, 3, 0]} //Thoi gian chuyen doi
                        size={50} //Kich thuoc cua vong tron
                        strokeWidth={5} //Chieu rong vong tron
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                    <div className="text">Giây</div>
                </div>

            }
        </div>
    )
})


export default React.memo(CountDownAnimation);//React.meno chi rerender khi gia tri thay doi, han che rerender nhieu lan