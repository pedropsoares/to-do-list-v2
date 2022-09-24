import React, { useState } from 'react';

import plus from '/src/assets/plus.svg';

import styled from './InputNewTask.module.css';

interface props {
  handleSetNewTask: Function
}

export const InputNewTask = ({ handleSetNewTask }: props) => {
  const [newTask, setNewTask] = useState('')

  const handleNewTaskChange = (e: any) => {
    setNewTask(e.target.value);
  }

  const handleCreateNewTask = () => {
    event?.preventDefault();

    handleSetNewTask(newTask)
    setNewTask('')
  }
 
  return (
    <form onSubmit={handleCreateNewTask} action="" className={styled.search}>
      <input type="text" placeholder="Adicione uma nova tarefa" value={newTask} onChange={(e) => handleNewTaskChange(e)}/>
      <button type="submit" disabled={newTask.length === 0}>
        Criar
        <img src={plus} alt="" />
      </button>
    </form>
  )
}
