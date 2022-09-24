import React from 'react'

import style from './Task.module.css'

interface taskProps {
  text: string,
}

export const Task = ({ text }: taskProps) => {
  return (
    <div className={style.content}>
      <input type="checkbox" />
      <p>{text}</p>
    </div>
  )
}
