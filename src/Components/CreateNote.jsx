// CreateNote.jsx
import React, { useState } from 'react';
import styles from './CreateNote.module.css'; // Import the CSS module
import {createNote} from "../api";
function CreateNote({ onStopPosting }) {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear previous error message

    try {
      // Call the login API
      const userId = localStorage.getItem(userId);
      if (!userId) {
        throw new Error("User ID is missing. Please log in again.");
      }
      const data = await createNote(userId, heading, content);
      onStopPosting(); // Close modal after successful login
    } catch (error) {
      // If an error occurs, set the error message to display it
      setErrorMessage(error.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={heading} 
          onChange={(e) => setHeading(e.target.value)} 
          placeholder="Heading" 
          required 
          className={styles.input}
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Content" 
          required 
          className={styles.textarea}
        />
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>Add Note</button>
          <button type="button" className={styles.cancelButton} onClick={onStopPosting}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
