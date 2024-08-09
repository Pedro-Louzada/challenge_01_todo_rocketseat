import { ChangeEvent, FormEvent, useState } from 'react';

import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header/Header';


import { PlusCircle } from '@phosphor-icons/react';
import { TaskInput } from './components/TaskList/TaskInput/TaskInput';
import { EmptyTaskList } from './components/TaskList/EmptyTaskList/EmptyTaskList';
import { TaskItem } from './components/TaskList/TaskItem/TaskItem';
import { HeaderTaskList } from './components/TaskList/HeaderTaskList/HeaderTaskList';

export interface ITaskList {
  id: number;
  taskName: string;
  done?: boolean;
}

export function App() {
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

  function deleteTask(id: number) {
    const removeIdIntoTaskList = taskList.filter(task => task.id !== id);

    setTaskList(removeIdIntoTaskList)
  }

  function doneTask(id: number) {
    const changeStatusTask = taskList.map(task => {
      if (task.id === id) task.done = !task.done

      return task;
    })

    setTaskList(changeStatusTask)
  }

  const emptyTaskList = !taskList.length;

  return (
    <main>
      <Header />
      <form onSubmit={handleSubmitNewTask} className={styles.formTaks}>
        <TaskInput
          value={newTask}
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

      <section className={styles.taskBox}>
        <HeaderTaskList createdTask={taskList}/>

        {emptyTaskList ?
          (<EmptyTaskList />) :
          taskList.map(task => {
            return (
              <TaskItem
                key={task.id}
                content={task}
                onDeleteTask={deleteTask}
                onDoneTask={doneTask}
              />
            )
          })
        }
      </section>
    </main>
  )
}
