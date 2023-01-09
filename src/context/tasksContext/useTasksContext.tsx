import {useContext} from 'react';
import {TasksContext} from './tasksContex';

export const useTasksContext = () => useContext(TasksContext);