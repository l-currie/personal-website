import React from 'react'
import styles from '../Header/Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h2>Lucas Currie</h2>
      </div>
      <div className={styles.linksContainer}>
        <p>Home</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header