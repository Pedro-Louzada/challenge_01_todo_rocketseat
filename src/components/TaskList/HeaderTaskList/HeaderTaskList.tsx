import { ITaskList } from '../../../App';

import styles from './HeaderTaskList.module.css';

interface IHeaderTaskList {
  createdTask: ITaskList[]
}

export function HeaderTaskList({ createdTask }: IHeaderTaskList) {

  const quantityTask = createdTask.length;

  const getOnlyDoneTask = createdTask.filter(task => task.done).length;

  return (
      <header className={styles.taskList}>
        <div className={styles.createTasks}>
          <p>Tarefas criadas</p>
          <span>{quantityTask}</span>
        </div>
        <div className={styles.doneTasks}>
          <p>Concluídas</p>
          <span>{getOnlyDoneTask} de {quantityTask}</span>
        </div>
      </header>
  )
}