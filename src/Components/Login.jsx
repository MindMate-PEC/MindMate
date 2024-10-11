import React, { useState } from "react";
import styles from "./Login.module.css"; // Import the CSS module
import { loginUser } from "../api"; // Import the loginUser function from the api

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous error message

    try {
      // Call the login API
      const data = await loginUser(email, password);

      // Assuming the response contains user data and token, you can store the token in local storage/session
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      window.location.reload();
      // Optionally handle successful login (e.g., redirect, update state, etc.)
      onClose(); // Close modal after successful login
    } catch (error) {
      // If an error occurs, set the error message to display it
      setErrorMessage(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleLogin}>
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

        {/* Show error message if login fails */}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Login
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

export default Login;
