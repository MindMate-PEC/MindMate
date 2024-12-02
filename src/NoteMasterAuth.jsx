import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const NoteMasterAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(""); // Clear error when switching modes
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(""); // Clear previous errors

      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Save the token in localStorage (or any secure method)
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);

      // Redirect to /notes
      navigate("/notes");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to NoteMaster</h1>

      {isLogin ? (
        // Login Section
        <div style={styles.section}>
          <h2 style={styles.heading}>Login</h2>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button
            style={styles.button}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p style={styles.link}>Forgot Password?</p>
          <p style={styles.switchText}>
            Don't have an account?{" "}
            <span onClick={toggleAuthMode} style={styles.switchLink}>
              Register here
            </span>
          </p>
        </div>
      ) : (
        // Register Section
        <div style={styles.section}>
          <h2 style={styles.heading}>Register</h2>
          <input
            type="text"
            placeholder="Enter your full name"
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create a password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={styles.button}>Register</button>
          <p style={styles.terms}>
            By registering, you agree to our{" "}
            <a href="#">Terms and Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
          <p style={styles.switchText}>
            Already have an account?{" "}
            <span onClick={toggleAuthMode} style={styles.switchLink}>
              Login here
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAFEE",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  link: {
    fontSize: "14px",
    color: "#4CAFEE",
    cursor: "pointer",
  },
  terms: {
    fontSize: "12px",
    color: "#777",
    marginTop: "10px",
  },
  switchText: {
    fontSize: "14px",
    marginTop: "15px",
    color: "#333",
  },
  switchLink: {
    color: "#4CAFEE",
    cursor: "pointer",
    textDecoration: "underline",
  },
  error: {
    color: "red",
    fontSize: "14px",
    margin: "10px 0",
  },
};

export default NoteMasterAuth;
