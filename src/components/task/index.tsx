import { DeleteIcon, TaskAltIcon } from "@stylesComponents/icons"
import { useTasksContext } from "context/tasksContext"
import { iTasks } from "interface/iTasks"
import { VehicleBus } from "styled-icons/fluentui-system-filled"
import { TaskCardStyle } from "./style"

const TaskCard = ({id, value, complete}: iTasks) => {
    const { tasks,setTasks} = useTasksContext()
    function deleteTask(id: string){
       const dataFiltred = tasks.filter(value => value.id !== id)
       setTasks(dataFiltred)
    }

    function completeTask(e: any, id: string){
        if(e.target.checked){
            setTasks(tasks.map(task => {
            if(task.id === id){
                return {...task, complete: true}
              }
              else{
                return task
              }
            }))
        }else{
            setTasks(tasks.map(task => {
                if(task.id === id){
                    return {...task, complete: false}
                  }
                  else{
                    return task
                  }
                }))
        }
    }

    return(
        <TaskCardStyle complete={complete}>  
            <div className="initial">
                {value}
            </div> 
            <div className="buttons">
           
            <div className="center">
                <label className="label">
                    <input  className="label__checkbox" onChange={(e) => completeTask(e, id)} type="checkbox" />
                    <span className="label__text">
                    <span className="label__check">
                        <i className="fa fa-check icon"></i>
                    </span>
                    </span>
                </label>
            </div>
                <button type="button" onClick={() => deleteTask(id)}><DeleteIcon/></button>
            </div>
        </TaskCardStyle>
    )
}

export default TaskCard