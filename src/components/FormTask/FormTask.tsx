import styles from './FormTask.module.css';

import { PlusCircle } from '@phosphor-icons/react';

export function FormTask() {
    return (
        <form
            className={styles.formTaks}
        >
            <input
                placeholder="Adicione uma nova tarefa"
                className={styles.inputTask}
            />
            <button
                className={styles.buttonTaskBox}
                type='submit'
            >
                Criar
                <PlusCircle
                    size={20}
                    color='white'
                />
            </button>
        </form>
    )
}