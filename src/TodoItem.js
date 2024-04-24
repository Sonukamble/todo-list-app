import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";


const TodoItem= ({task,toggleCompleted, deleteTodo, editTodo})=>{
    console.log(task);
    return(
        <div>
            <div className="data-list">
                <h2 onClick={()=>toggleCompleted(task.id)} className={`${task.completed ?'completed':''}`}>{task.task}</h2>
                <div className="icons-data">
                    <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
