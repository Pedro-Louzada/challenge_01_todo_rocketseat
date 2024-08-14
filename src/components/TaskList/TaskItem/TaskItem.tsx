import { Check, Trash } from "@phosphor-icons/react";

import styles from './TaskItem.module.css';

import { ITaskList } from '../../../App';


interface ITaskItem {
    content: ITaskList;
    onDeleteTask: (id: number) => void
    onDoneTask: (id: number) => void
}

export function TaskItem({ content, onDeleteTask, onDoneTask }: ITaskItem) {
    function handleBecomeDoneTask() {
        onDoneTask(content.id);
    }

    function handleDeleteTask() {
        onDeleteTask(content.id)
    }

    const isDoneTask = content.done;

    return (
        <li className={styles.item}>
            <div>
                <button
                    className={isDoneTask ? styles.closedTask : styles.openedTask}
                    onClick={handleBecomeDoneTask}
                >
                    {isDoneTask ? <Check weight="bold" color="white" size={10}/> : ''}
                </button>

                <p className={!isDoneTask ? styles.taskOpenedName : styles.taskClosedName}>
                    {content.taskName}
                </p>
            </div>
            <button className={styles.buttonTrash} onClick={handleDeleteTask}>
                <Trash
                    className={styles.trash}
                    size={18}
                />
            </button>
        </li>
    )
}