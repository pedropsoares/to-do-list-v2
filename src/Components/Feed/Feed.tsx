import React, { useEffect, useState } from 'react'
import { Search } from '../Search/Search'

import clipboard from '/src/assets/Clipboard.svg'
import style from './Feed.module.css'
import { Task } from '../Task/Task'

interface Task {
  id: number,
  text: string,
}

const taksList: Task[] = [
  {
    id: 1,
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 2,
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 3,
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 4,
    text: 'asdasd',
  },
]


export const Feed = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(taksList)

  }, [])


  return (

    <div className={style.container}>
      <Search />
      <div className={style.content}>

        <header>
          <div className={style.text}>
            <p className={style.created}>Tarefas criadas</p>
            <span className={style.amount}>{tasks.length}</span>
          </div>

          <div className={style.text}>
            <p className={style.completed}>Concluídas</p>
            <span className={style.amount}>0</span>
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
            {tasks.map(task => {

              return (
                <Task text={task.text} />
              )
            })}
          </div>
        )}

      </div>
    </div>
  )
}
