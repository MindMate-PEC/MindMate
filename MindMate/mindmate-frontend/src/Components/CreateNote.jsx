import React, { useState } from 'react';

const CreateNote = ({ onNoteCreated }) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNoteCreated({ heading, content });
    setHeading('');
    setContent('');
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={styles.title}>Create a Note</h2>
      <input
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        placeholder="Note Title"
        style={styles.input}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>Save Note</button>
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
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    height: '100px',
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

export default CreateNote;
