import React from 'react'
import { Search } from '../Search/Search'

import style from './Feed.module.css'

export const Feed = () => {
  return (

    <div className={style.feed}>
      <Search />
      <div className={style.content}>
        <header>

          <div className={style.text}>
            <p className={style.created}>Tarefas criadas</p>
            <span className={style.amount}>0</span>
          </div>

          <div className={style.text}>
            <p className={style.completed}>Concluídas</p>
            <span className={style.amount}>0</span>
          </div>

        </header>
      </div>
    </div>
  )
}
