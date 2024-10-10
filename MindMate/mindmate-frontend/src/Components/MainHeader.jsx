import React from 'react';

const MainHeader = ({ onCreatePost, isLoggedIn, onLogout }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Notes App</h1>
      <nav>
        {isLoggedIn ? (
          <>
            <button style={styles.button} onClick={onCreatePost}>Create Note</button>
            <button style={styles.button} onClick={onLogout}>Logout</button>
          </>
        ) : null}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #e6ddf9',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#7f50e4',
    color: '#ffffff',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '4px',
    marginRight: '10px',
  },
};

export default MainHeader;
