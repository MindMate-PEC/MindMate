import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { fetchNotes } from "../api"; // Import the fetchNotes function

function PostList(props) {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    if (!storedToken || !storedUserId) {
      return;
    }

    setToken(storedToken);
    setUserId(storedUserId);

    // Fetch notes if token and userId are available
    async function loadNotes() {
      try {
        const data = await fetchNotes(storedToken, storedUserId);
        setNotes(data);
      } catch (err) {
        console.error("Failed to fetch notes:", err);
      }
    }

    loadNotes();
  }, []);

  let modalContent;

  if (props.isPosting) {
    modalContent = (
      <Modal changeModal={props.onStopPosting}>
        <NewPost onCancel={props.onStopPosting} />
      </Modal>
    );
  }

  if (!token || !userId) {
    return null;
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        {notes.length &&
          notes.map((note) => (
            <Post key={note.id} author={note.heading} body={note.content} />
          ))}
        <li className={classes.buttonContainer}>
          {/* <button className={classes.button} onClick={props.showModalVisible}>
            Create Note
          </button> */}
        </li>
      </ul>
    </>
  );
}

export default PostList;
