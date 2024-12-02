import React from "react";
import NoteMasterAuth from "./NoteMasterAuth"; // Ensure the path matches where NoteMasterAuth.jsx is saved
import NoteApp from "./NoteApp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteDetail from "./NoteDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/notes" element={<NoteApp />} />
        <Route path="/note/:id" element={<NoteDetail />} />
        <Route
          path="/"
          element={
            <div style={styles.appContainer}>
              <NoteMasterAuth />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
    margin: "0",
  },
};

export default App;
