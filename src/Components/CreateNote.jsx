import React, { useState } from 'react';
import styles from './CreateNote.module.css'; 
import { createNote } from "../api";

function CreateNote({ onStopPosting }) {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  console.log("heading",heading);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear previous error message

    try {
      // Fetch the userId from localStorage
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User ID is missing. Please log in again.");
      }
      console.log("userId", userId);
      // Call the createNote API
      const data = await createNote(userId, heading, content);

      // On successful creation, close the modal
      onStopPosting();
    } catch (error) {
      // If an error occurs, set the error message to display it
      if (error.response) {
        // Server responded with a status other than 2xx
        throw new Error(error.response.data.error || "Request failed");
      } else if (error.request) {
        // Request was made but no response was received
        throw new Error("No response from server");
      } else {
        // Other errors
        throw new Error("Something went wrong");
      }
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
        {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Display error message */}
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton} onClick={handleSubmit}>Add Note</button>
          <button type="button" className={styles.cancelButton} onClick={onStopPosting}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
