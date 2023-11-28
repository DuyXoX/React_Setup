import { Button } from 'react-bootstrap';


const AddTodo = (props) => {
    const { todo, setTodo, handleclickBtn } = props

    return (
        <div>
            <label>----Add Todo List----</label>
            <input className='input-addTodo' type='text' value={todo} onChange={(event) => setTodo(event.target.value)} />
            <Button type='submit' onClick={() => handleclickBtn()}>Set Name</Button>
        </div>
    )
}
export default AddTodo;