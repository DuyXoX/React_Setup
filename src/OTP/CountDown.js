import React, { useEffect, useState } from "react";

// class CountDown extends React.Component { //Su dung Class

//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 5
//         }
//     }

//     componentDidMount() {   //Tao ra dong ho dep nguoc
//         this.timer = setInterval(() => {
//             let currentCount = this.state.count
//             this.setState({
//                 count: currentCount - 1
//             })
//         }, 1000)
//     }
//     componentDidUpdate(prevProps, prevState) {  //Dung de truy vet qua khu cua props
//         if (this.state.count !== prevState.count && this.state.count === 1) {
//             if (this.timer) {
//                 clearInterval(this.timer)

//             }
//         }
//     }

//     render() {

//         if (this.state.count === 1) {
//             console.log('Time Up')
//             return (
//                 <div>
//                     Het Thoi Gian Roi!
//                 </div>
//             )
//         }


//         return (
//             <div>
//                 {this.state.count}
//             </div>
//         )

//     }
// }

const CountDown = (props) => {
    const [count, setCount] = useState(60)

    useEffect(() => {
        if (count === 0) {
            props.setisDisableBtn(true)
            return console.log('Time Up!!!')
        }

        const timer = setInterval(() => {
            setCount((count - 1))
        }, 1000)

        return () => {  //Khong tao ra setCount moi lam giat lag tung Dit
            clearInterval(timer)
        }
    }, [count])

    return (
        <div className="count-down">
            {count === 0 ?

                <h5>
                    Het Thoi Gian Roi!
                </h5>
                :
                <div>
                    {count}
                </div>}
        </div>
    )
}

export default CountDown;