import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import { fetchNotes } from '../api'; // Import the fetchNotes function

function PostList(props) {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  // Use useEffect to check for token and userId on component mount
  useEffect(() => {
    // Fetch token and userId from localStorage
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    // If no token or userId found, do nothing
    if (!storedToken || !storedUserId) {
      return;
    }

    setToken(storedToken);
    setUserId(storedUserId);

    // Fetch notes if token and userId are available
    async function loadNotes() {
      try {
        const data = await fetchNotes(storedToken, storedUserId);
        setNotes(data); // Assuming `data` contains the list of notes
      } catch (err) {
        console.error('Failed to fetch notes:', err);
      }
    }

    loadNotes(); // Call the function to load notes
  }, []); // Empty dependency array to run only on component mount

  let modalContent;

  if (props.isPosting) {
    modalContent = (
      <Modal changeModal={props.onStopPosting}>
        <NewPost onCancel={props.onStopPosting} />
      </Modal>
    );
  }

  // If no token/userId found or no notes, show nothing
  if (!token || !userId) {
    return null; // Render nothing
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <Post key={note.id} author={note.heading} body={note.content} />
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </>
  );
}

export default PostList;
