import React from 'react';

const PostList = ({ notes }) => {
  return (
    <div style={styles.container}>
      {notes.map((note) => (
        <div key={note.noteId} style={styles.note}>
          <h3 style={styles.title}>{note.heading}</h3>
          <p style={styles.content}>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '50px auto',
  },
  note: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '20px',
    marginBottom: '10px',
    borderRadius: '8px',
    color: '#ffffff',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  content: {
    fontSize: '16px',
  },
};

export default PostList;
