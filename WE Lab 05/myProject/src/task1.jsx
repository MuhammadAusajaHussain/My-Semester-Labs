import React, {useState} from "react";

function task1(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function addTask(){
        if(task.trim() != ""){
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    return(
        <div>
            <h2>Task 1 - To do List</h2>
            <input 
                type="text" value={task} 
                onChange={(e)=>{
                    setTask(e.target.value)
                }}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index)=>(
                    <li key={index}>
                        {task}
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
};

export default task1;