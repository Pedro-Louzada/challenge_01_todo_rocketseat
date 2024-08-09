import { InputHTMLAttributes } from 'react';

import styles from './TaskInput.module.css';


export function TaskInput({...props}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            name='inputTask'
            placeholder="Adicione uma nova tarefa"
            className={styles.inputTask}
            {...props}
        />
    )
}