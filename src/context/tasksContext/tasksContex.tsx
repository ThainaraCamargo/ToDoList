import { iTasksContext } from "interface/iTasksContext";
import { createContext, useMemo, useState } from "react";
export const TasksContext = createContext<iTasksContext>({} as iTasksContext);

interface TasksContextProps {
  children: React.ReactNode;
}

export const TaskProvider = ({children}: TasksContextProps)  => {
  const [tasks, setTasks] = useState([])

  const contextValues = useMemo(() => ({tasks, setTasks}), [tasks])

  return(
      <TasksContext.Provider value={contextValues}>
        {children}
      </TasksContext.Provider>
  )
} 