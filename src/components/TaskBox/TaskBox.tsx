import styles from './TasksBox.module.css';

import { ITaskList } from '../TaskInput/TaskInput';

import { EmptyTaskList } from '../EmptyTaskList/EmptyTaskList';
import { TaskItem } from '../TaskItem/TaskItem';

interface TaskBoxProps {
  contentTask: ITaskList[];
  onDeleteTask: (id: number) => void
}

export function TaskBox({ contentTask, onDeleteTask }: TaskBoxProps) {
  const emptyTaskList = !contentTask.length;

  const quantityTask = contentTask.length;

  return (
    <main className={styles.taskBox}>
      <header>
        <div className={styles.createTasks}>
          <p>Tarefas criadas</p>
          <span>{quantityTask}</span>
        </div>
        <div className={styles.doneTasks}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      {emptyTaskList ?
        (<EmptyTaskList />) :
        contentTask.map(task => {
          return (
            <TaskItem 
              key={task.id} 
              content={task} 
              changeStatusTask={onDeleteTask} 
          />
          )
        })
      }
    </main>
  )
}