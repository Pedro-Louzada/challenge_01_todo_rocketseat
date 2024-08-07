import styles from './TasksBox.module.css';


import ClipBoard from '../../assets/Clipboard.svg';
import { ITaskList } from '../AddTask/AddTask';

interface TaskBoxProps {
  contentTask: ITaskList[];
}

export function TaskBox({ contentTask }: TaskBoxProps) {
    // const emptyTaskList = !contentTask.length;

    console.log(contentTask);

    return (
        <main className={styles.taskBox}>
        <header>
          <div className={styles.createTasks}>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>
          <div className={styles.doneTasks}>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </header>
        <section className={styles.taskList}>
          <div className={styles.taskContent}>
            <img src={ClipBoard} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      </main>
    )
}