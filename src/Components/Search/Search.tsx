import React from 'react';

import plus from '/src/assets/plus.svg';
import styled from './Search.module.css';

export const Search = () => {
  return (
    <div className={styled.search}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <img src={plus} alt="" />
      </button>
    </div>
  )
}
