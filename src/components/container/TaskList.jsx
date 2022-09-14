import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/Task'

const TaskListComponent = () => {

    const defaultTask = new Task('example', 'default descritions', true, LEVELS.NORMAL)

 
  return (
    <div>
        <div>
            Your Task:
        </div>
        {/* TODO Aplicar un map para renderizar una Lista */}

        <TaskComponent task={defaultTask} />
    </div>
  )
}

export default TaskListComponent