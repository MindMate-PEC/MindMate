// Register.jsx
import React, { useState } from 'react';
import styles from './Register.module.css'; // Import the CSS module

function Register({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    // Call your register API here
    // Example: await api.register({ email, password });
    onClose(); // Close modal after successful registration
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleRegister}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
          className={styles.input}
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
          className={styles.input}
        />
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>Register</button>
          <button type="button" className={styles.cancelButton} onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
