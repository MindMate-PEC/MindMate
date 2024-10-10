// import { MdPostAdd, MdMessage } from 'react-icons/md';

// import classes from './MainHeader.module.css';

// function MainHeader(props) {
//   return (
//     <header className={classes.header}>
//       <h1 className={classes.logo}>
//         <MdMessage />
//         React Poster
//       </h1>
//       <p>
//         <button className={classes.button} onClick={props.onCreatePost}>
//           <MdPostAdd size={18} />
//           New Post
//         </button>
//       </p>
//     </header>
//   );
// }

// export default MainHeader;


// import React from 'react';
// import classes from './MainHeader.module.css';
// function MainHeader({ onCreatePost, onLogin, onRegister }) {
//   return (
//     <header>
//       <h1>My Notes App</h1>
//       <button onClick={onCreatePost}>Create Note</button>
//       <button onClick={onLogin}>Login</button>
//       <button onClick={onRegister}>Register</button>
//     </header>
//   );
// }

// MainHeader.jsx
import React from 'react';
import styles from './MainHeader.module.css'; // Import the CSS module

function MainHeader({ onCreatePost, onLogin, onRegister }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Notes App</h1>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={onCreatePost}>Create Note</button>
        <button className={styles.button} onClick={onLogin}>Login</button>
        <button className={styles.button} onClick={onRegister}>Register</button>
      </div>
    </header>
  );
}

export default MainHeader;
