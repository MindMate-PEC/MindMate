import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
    function bodyChangeHandler (event) {
        setEnteredBody(event.target.value);
    }
    const [enteredAuthor, setEnteredAuthor] = useState("");
    function authorChangeHandler (event) {
        setEnteredAuthor(event.target.value);
    }
    function onSubmit(event){
      event.preventDefault();
      const PostData = {
        body: enteredBody,
        author: enteredAuthor
      }
      console.log(PostData);
      props.onCancel();
    }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange = {bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className = {classes.actions}>
      <button type = "button" onClick = {props.onCancel}>Cancel</button>
      <button onClick = {onSubmit}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;