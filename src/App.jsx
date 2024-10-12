import { useState } from "react";
import PostList from "./Components/PostList";
import MainHeader from "./Components/MainHeader";
import Modal from "./Components/Modal"; // Import Modal component
import Login from "./Components/Login"; // Import Login component
import Register from "./Components/Register"; // Import Register component
import styles from "./App.module.css";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  function hideModalVisible(event) {
    setModalVisible(false);
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
  }

  function showModalVisible(event) {
    if (localStorage.getItem("userId")) {
      setModalVisible(true);
    }
  }

  function showLoginModal(event) {
    setIsLoginVisible(true);
  }

  function showRegisterModal(event) {
    setIsRegisterVisible(true);
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.reload();
    alert("User logout succesfull");
  }
  return (
    <>
      <MainHeader
        onLogin={showLoginModal}
        onRegister={showRegisterModal}
        logout={logout}
      />
      <button className={styles.headerButton} onClick={showModalVisible}>Create Note</button>
      <PostList onStopPosting={hideModalVisible} showModalVisible = {showModalVisible} isPosting={modalVisible} />

      {modalVisible && <Modal onStopPosting={hideModalVisible} />}
      {isLoginVisible && <Login onClose={hideModalVisible} />}
      {isRegisterVisible && <Register onClose={hideModalVisible} />}
    </>
  );
}

export default App;
