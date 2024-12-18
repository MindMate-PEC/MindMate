import React from 'react';
import styles from './MainHeader.module.css'; // Import the CSS module

function MainHeader({ onLogin, onRegister, logout }) {
  const token = localStorage.getItem('token');

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>MindMate</h1>
      <div className={styles.buttonGroup}>
        {!token ? (
          <>
            <button className={styles.button} onClick={onLogin}>Login</button>
            <button className={styles.button} onClick={onRegister}>Register</button>
          </>
        ) : (
          <button className={styles.button} onClick={logout}>Logout</button>
        )}
      </div>
    </header>
  );
}

export default MainHeader;
