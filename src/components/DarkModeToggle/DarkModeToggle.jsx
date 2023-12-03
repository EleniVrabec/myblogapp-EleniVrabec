"use client"

import React from 'react'
import styles from './darkmodetoggle.module.css'
import {useContext} from "react"
import {ThemeContext, ThemeProvider} from '../../contex/ThemeContex'


function DarkModeToggle() {
  const {toggle, mode} = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle} >
        <div className={styles.icon}>🌚</div>
        <div className={styles.icon}>🌞</div>
        <div className={styles.ball} 
        style={mode==="light" ? {left:"2px"}:{right:"2px"} }/>
    </div>
  )
}

export default DarkModeToggle