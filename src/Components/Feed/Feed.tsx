import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { TaskInterface } from '../../Interfaces/Task.Interface'

import clipboard from '/src/assets/Clipboard.svg'
import style from './Feed.module.css'

import { InputNewTask } from '../InputNewTask/InputNewTask'
import { Task } from '../Task/Task'
import usePersistedState from '../../Hooks/usePersistedState';

export const Feed = () => {
  const [tasks, setTasks] = usePersistedState<TaskInterface[]>('tasks', [])

  const handleSetNewTask = (text: string) => {
    const task: TaskInterface = {
      id: uuidv4(),
      text,
      checked: false
    }
    
    setTasks([...tasks, task])
  }

  const filterCompleted = () => {
    return tasks.filter(t => t.checked === true).length
  }

  return (

    <div className={style.container}>
      <InputNewTask handleSetNewTask={handleSetNewTask} />

      <div className={style.content}>

        <header>
          <div className={style.text}>
            <p className={style.created}>Tarefas criadas</p>
            <span className={style.amount}>{tasks?.length}</span>
          </div>

          <div className={style.text}>
            <p className={style.completed}>Concluídas</p>
            {tasks?.length === 0 ? (
              <span className={style.amount}>0</span>
            ) : (
              <span className={`${style.amount} ${style.amountCompleted}`}>
                {`${filterCompleted()} de ${tasks?.length}`}
              </span>
            )}
          </div>

        </header>


        {tasks?.length === 0 ? (
          <div className={style.feedEmpty}>
            <div className={style.content}>

              <div className={style.contentEmpty}>
                <img src={clipboard} alt="" />
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong><br />
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>

            </div>
          </div>
        ) : (
          <div className={style.feed}>
            {tasks?.map(task => {
              return (
                <Task key={task.id} id={task.id} text={task.text} checked={task.checked} tasks={tasks} setTasks={setTasks} />
              )
            })}
          </div>
        )}

      </div>
    </div>
  )
}
