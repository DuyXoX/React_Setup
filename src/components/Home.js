import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import DisplayTodo from './DisplayTodo';
import AddTodo from './AddTodo';
// class Home extends React.Component { //Su dung Class
//     state = {
//         name: 'XoX',
//         addres: 'Ha Huy Tap'
//     }
//     render() {
//         return (
//             <div>
//                 Hello in Home: {this.state.name} and {this.state.addres}
//                 <input type='text' onChange={(event) => this.setState({ name: event.target.value })} />
//             </div>)
//     }
// }

const Home = () => { // Su dung Hook
    // const [name, setName] = useState('')
    // const [count, setCount] = useState(0)
    const [todo, setTodo] = useState('')
    const [listTodo, setHome] = useState([
        { id: 1, name: 'Hina' },
        { id: 2, name: 'Supper' },
        { id: 3, name: 'Hero' }
    ])


    // const onClickHeadBtn = (event, name) => {
    //     console.log('Running onClickHeadBtn', name)
    // }
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleclickBtn = () => {
        let todoId = randomIntFromInterval(4, 9999)
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }
        let currentHome = _.clone(listTodo) // su dung lodash ton code hon so voi ...
        currentHome.push(todoItem)
        console.log('currentHome', currentHome);
        setHome(currentHome)
        //setHome([...listTodo, todoItem]) // Cu phap ... tenHam se copy lai toan bo value cua tenHam do
        // console.log('Event: ', event);
    }
    const deleteHome = (id) => {
        alert('click me' + id)
        let currentHome = _.clone(listTodo)
        currentHome = currentHome.filter(item => item.id !== id)
        setHome(currentHome)
    }
    return (
        <div className=''>
            {/* <div>
                Hello in Home: {name}
                <input type='text' onChange={(event) => setName(event.target.value)} />
            </div>
            <p>Name: {name}</p>
            <Button type='button' onClick={(event) => onClickHeadBtn(event, name)}>Submit</Button>
            <p>Count: {count}</p>
            <Button onClick={() => setCount(count + 1)}>
                Click vào tôi
            </Button>
            <br /> */}

            <AddTodo
                todo={todo} //Truyen du lieu tu cha sang con Home -> AddTodo
                setTodo={setTodo}
                handleclickBtn={handleclickBtn}
            />
            <DisplayTodo
                childData={listTodo} //Truyen du lieu tu cha sang con Home -> DisplayTodo
                setHome={setHome}
                name={"XoX"}
                deleteTodoIntParent={deleteHome} />  {/*deleteHome ko can () vi ko su dung no trong doan code nay ma tham chieu no den mot noi khac*/}

            {/* <label>----Todo List----</label>
            <input type='text' value={todo} onChange={(event) => setTodo(event.target.value)} />
            <Button type='submit' onClick={() => handleclickBtn()}>Set Name</Button> */}

            {/* {listTodo.map(item => (
                <p key={item.id} onClick={() => deleteHome(item.id)}>Data: {item.name}</p>
            ))} */}
            {/* {console.log('check Data: ', listTodo)} */}

        </div>
    )
}

export default Home;