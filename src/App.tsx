import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { InterFaceTask } from "./InterFace";
import TodoTask from "./Components/TodoTask";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<InterFaceTask[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }else{
      setDeadline(Number(event.target.value))
    }
  };
  const addTask = ():void=>{
    const newTask = {taskName:task,deadLine:deadline}
   setTodo([...todo,newTask])
   setTask('')
   setDeadline(0)

  }
  console.log(todo)
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task...."
            name="task"
            onChange={handleChange}
            value={task}
          />
          <input 
          value={deadline}
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        <TodoTask/>
      </div>
    </div>
  );
};

export default App;
