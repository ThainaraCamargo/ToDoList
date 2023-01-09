import InputTasks from '@components/input'
import TaskCard from '@components/task'
import { ContainerTasks } from '@stylesComponents/containerTasks'
import { useTasksContext } from 'context/tasksContext'
import { iTasks } from 'interface/iTasks'
import {ContainerHome} from '../styles/components/containerHome'
export default function Home() {

  const { tasks, setTasks } = useTasksContext()

  function addTodoList(e: any) {
    e.preventDefault()
    const value = e.target.inputText.value;
    const id = Math.floor(Date.now() * Math.random()).toString(36);
    const data: iTasks = {
      value: value,
      id: id,
      complete: false
    }
    setTasks([data, ...tasks])
    e.target.inputText.value = ''
  }

  return (
    <ContainerHome>
      <h1>To do List</h1>
      <div className="contentTodo">
        <form onSubmit={(e) => addTodoList(e) }>
          <InputTasks />
        </form>
        <ContainerTasks>
          {tasks.map((task: any) => (
            <TaskCard key={task?.id} id={task.id} value={task.value} complete={task.complete}/>
          ))}
        </ContainerTasks>
      </div>
    </ContainerHome>
  )
}
