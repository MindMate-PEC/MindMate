// Register.jsx
import React, { useState } from "react";
import styles from "./Register.module.css";
import { registerUser } from "../api";

function Register({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      if (password != confirmPassword) {
        alert("Passwords dont match");
        window.location.reload();
        throw new Error("Passwords dont match");
      }
      const data = await registerUser(email, password);
      alert("User registered succesfully");
      onClose();
    } catch (error) {
      setErrorMessage(error.message || "Login failed. Please try again.");
    }
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          className={styles.input}
        />
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
