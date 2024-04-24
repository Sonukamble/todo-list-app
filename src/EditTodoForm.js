import React, { useState }  from "react";


const EditTodoForm=({editTodo,task})=>{
    const [value,setValue] = useState("")


    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Entered Task here" onChange={(e)=> setValue(e.target.value)}></input>
            <button type="submit" value="submit">Update Task</button>
        </form>
    )
}

export default EditTodoForm;