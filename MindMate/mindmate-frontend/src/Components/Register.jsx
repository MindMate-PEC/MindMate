import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={styles.title}>Register</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Register</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '20px',
    color: '#ffffff',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4c05d0',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '4px',
  },
};

export default Register;
