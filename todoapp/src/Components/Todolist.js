import React from 'react'


const Todolist = ({ todos, setTodos, setEditTodo }) => {

    const Deletehandle = ({id}) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const CompleteHandle = (todo) =>{
        setTodos(todos.map((item) =>{
            if(item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    }

    const Edithandle = ({id}) =>{
        const findtodo = todos.find((todo) => todo.id === id);
        setEditTodo(findtodo);
    }
    return (
        <div>
            {todos.map((todo) => (
                <li className='list-items' key={todo.id}>
                    <input
                        type='text'
                        value={todo.title}
                        className='list'
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className='Complete' onClick={() =>{CompleteHandle(todo)}}>
                            <i className="fa fa-check-circle"></i>
                        </button>

                        <button className='Edit' onClick={() =>{Edithandle(todo)}}>
                            <i className="fa fa-edit"></i>
                        </button>

                        <button className='Delete' onClick={() => {Deletehandle(todo)}}>
                            <i className="fa fa-trash-alt"></i>
                        </button>

                    </div>
                </li>
            ))}
        </div>
    )
}

export default Todolist;
