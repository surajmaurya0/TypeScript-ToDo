import React from 'react'
import { InterFaceTask } from '../InterFace'
interface Props{
    todo:InterFaceTask;
    completeTask(taskNameToDelete:string):void
}
const TodoTask = ({todo,completeTask}:Props)=> {
  return (
    <div className="task">
        <div className="content">
            <span>{todo.taskName}</span>
            <span>{todo.deadLine}</span>
        </div>
        <button onClick={() => completeTask(todo.taskName)}>x</button>
    </div>
  )
}

export default TodoTask