import { Trash } from "@phosphor-icons/react";

import styles from './TaskItem.module.css';

import { ITaskList } from '../TaskInput/TaskInput';
import { useState } from "react";

interface ITaskItem {
    content: ITaskList;
    changeStatusTask: (id: number) => void
}

export function TaskItem({ content, changeStatusTask }: ITaskItem) {
    const [doneTask, setDoneTask] = useState(false);

    function handleBecomeDoneTask() {
        setDoneTask(!doneTask);
    }

    function handleDeleteTask() {
        changeStatusTask(content.id)
    }

    return (
        <article className={styles.item}>
            <input 
                type="checkbox"
                onClick={handleBecomeDoneTask}
            />

            <p>
                {content.taskName}
            </p>
            <button onClick={handleDeleteTask}>
                <Trash
                    size={18}
                    color="#808080"
                />
            </button>
        </article>
    )
}