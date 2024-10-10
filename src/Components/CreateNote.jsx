// CreateNote.jsx
import React, { useState } from 'react';
import styles from './CreateNote.module.css'; // Import the CSS module

function CreateNote({ onStopPosting }) {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call your API to create a new note here
    // Example: await api.createNote({ heading, content });
    onStopPosting(); // Close modal after submission
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
