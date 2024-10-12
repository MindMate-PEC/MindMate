import { useState } from "react";
import classes from "./NewPost.module.css";
import { createNote } from "../api";

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  const [enteredAuthor, setEnteredAuthor] = useState("");
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  async function onSubmit(event) {
    event.preventDefault();

    try {
      // Fetch the userId from localStorage
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("Kindly login or register");
        window.location.reload();
      }
      // console.log("userId", userId);
      // Call the createNote API
      console.log(userId, enteredAuthor, enteredBody);
      const data = await createNote({
        userId,
        heading: enteredAuthor,
        content: enteredBody,
      });
      window.location.reload();
      // On successful creation, close the modal
      props.onCancel();
    } catch (error) {
      console.error("Error occurred:", error); // Log the full error
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error(
          "Response error:",
          error.response.data.error || "Request failed"
        );
        throw new Error(error.response.data.error || "Request failed");
      } else if (error.request) {
        // Request was made but no response was received
        console.error("No response from server");
        throw new Error("No response from server");
      } else {
        // Other errors
        console.error("Error message:", error.message);
        throw new Error("Something went wrong");
      }
    }
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button onClick={onSubmit}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
