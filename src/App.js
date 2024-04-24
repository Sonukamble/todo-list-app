import React, { useState }  from "react";
import './App.css'
import TodoItem from "./TodoItem";
import EditTodoForm from './EditTodoForm';
import {v4 as uuidv4} from 'uuid';
uuidv4();

const App=()=>{
    const [value,setValue] = useState("")
    const [todos, setTodos] = useState([])

    
    const addTodo = todo => {
        setTodos([...todos,{id: uuidv4(),task:todo,completed:false, isEditing:false}])
        console.log(todos);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(value);
        console.log(value);
        setValue('');
    }

    const checkcomplete = id=>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed}: todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo=> todo.id !== id ))
    }

    const editTodo = id =>{
        setTodos(todos.map(todo=> todo.id === id ? {...todo,isEditing : !todo.isEditing}: todo))
    }

    const editTask = (task,id) =>{
        setTodos(todos.map(todo=> todo.id === id ? {...todo, task, isEditing : !todo.isEditing}: todo))

    }
    return(
        <div className="conatiner">
            <div className="custom-wrapper">
                <h1>ToDo List</h1>
                <div className="list-data">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={value} placeholder="Entered list here" onChange={(e)=> setValue(e.target.value)}></input>
                        <button type="submit" value="submit">Click me</button>
                    </form>
                    <div></div>
                </div>
               
            </div>
            <div className="list">
                {todos.map((todo,index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo}/>
                    ):(
                    <TodoItem  key={todo.id} task={todo} value={index} toggleCompleted={checkcomplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                ))}

            </div>
        </div>
    );
}

export default App;