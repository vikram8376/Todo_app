import  {useEffect} from 'react';
import './front.css';
import Todolist from './Todolist';
import { v4 as uuidv4 } from "uuid";

const Front = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updatetodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => {
            return todo.id === id ? { title, id, completed } : todo;
        });
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(()=>{
       if (editTodo){
        setInput(editTodo.title);
       }else{
        setInput("");
       }
    }, [setInput, editTodo]);

    const OninputChange = (event) => {
        setInput(event.target.value);
    };

    const OnformSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updatetodo(input, editTodo.id, editTodo.completed);
        }
    };

    return (
        <div className='Whole_conatiner'>
            <div className="container">
                <h1>Multiuser Todo App</h1>
                <div className="todo-list">
                    <h2>My Todo List</h2>
                    <ul id="todo-items">
                    </ul>
                    <form id="add-todo-form" onSubmit={OnformSubmit}>
                        <input
                            type="text"
                            id="todo-input"
                            placeholder="Enter a new task"
                            value={input}
                            required
                            onChange={OninputChange}
                        />
                        <button type="submit">{editTodo ? "OK": "ADD"}</button>
                    </form>
                    <Todolist
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />
                </div>
            </div>
        </div>
    );
};

export default Front;
