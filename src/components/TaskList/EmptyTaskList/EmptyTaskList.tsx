import ClipBoard from '../../../assets/Clipboard.svg';

import styles from './EmptyTaskList.module.css';

export function EmptyTaskList() {
    return (
        <section className={styles.taskList}>
          <div className={styles.taskContent}>
            <img src={ClipBoard} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
    )
}