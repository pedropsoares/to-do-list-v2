import React from 'react'

import logo from '/src/assets/Logo.svg'
import styled from './Header.module.css'

export const Header = () => {
  return (
    <header className={styled.header}>
      <div className={styled.logo}>
        <img src={logo} alt="" />
      </div>
    </header>
  )
}
