import { InputHTMLAttributes } from 'react';

import styles from './TaskInput.module.css';

interface ITaskInput extends InputHTMLAttributes<HTMLInputElement>{
    isEmpty: boolean;
}

export function TaskInput({isEmpty, ...props}: ITaskInput) {
    return (
        <input
            name='inputTask'
            placeholder="Adicione uma nova tarefa"
            className={isEmpty ? styles.inputTaskEmpty : styles.inputTask}
            {...props}
        />
    )
}