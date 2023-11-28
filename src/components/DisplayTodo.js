import _ from 'lodash';


const DisplayTodo = (props) => {
    const listTodo = props.childData
    const deleteTodoFromChild = (id) => {
        // alert('click me' + id)
        // let currentTodolist = _.clone(props.childData)
        // currentTodolist = currentTodolist.filter(item => item.id !== id)
        // props.setHome(currentTodolist)
        props.deleteTodoIntParent(id)
    }

    console.log("Check data!", props);
    return (
        <div>
            <div>----Display Todo----</div>
            {listTodo.map((item, index) => {
                return (
                    <p key={item.id} onClick={() => deleteTodoFromChild(item.id)}>Data: {item.name}</p>

                )
            })}
        </div>
    )
}

export default DisplayTodo;