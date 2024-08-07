import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './AddTask.module.css';

import { PlusCircle } from '@phosphor-icons/react';
import { TaskBox } from '../TaskBox/TaskBox';

export interface ITaskList {
    id?: number;
    taskName: string;
    done?: boolean;
}

export function AddTask() {
    const [newTask, setNewTask] = useState('');

    const [taskList, setTaskList] = useState<ITaskList[]>([]);

    function handleChangeInputTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function handleSubmitNewTask(event: FormEvent) {
        event.preventDefault();

        setTaskList([...taskList, {
            id: taskList.length,
            taskName: newTask,
            done: false
        }])
        setNewTask('');
    }

    return (
        <>
            <form onSubmit={handleSubmitNewTask} className={styles.formTaks}>
                <input
                    name='inputTask'
                    value={newTask}
                    placeholder="Adicione uma nova tarefa"
                    className={styles.inputTask}
                    onChange={handleChangeInputTask}
                />
                <button
                    className={styles.buttonTaskBox}
                    type='submit'
                >
                    Criar
                    <PlusCircle
                        size={22}
                    />
                </button>
            </form>

            <TaskBox contentTask={taskList} />
        </>
    )
}