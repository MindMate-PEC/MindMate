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
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  function hideModalVisible(event) {
    setModalVisible(false);
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
    setIsLogoutVisible(false);
  }

  function showModalVisible(event) {
    setModalVisible(true);
  }

  function showLogoutVisible(event) {
    setLogoutVisible(true);
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
        onCreatePost={showModalVisible}
        onLogin={showLoginModal}
        onRegister={showRegisterModal}
        logout={logout}
      />
      <PostList onStopPosting={hideModalVisible} isPosting={modalVisible} />

      {modalVisible && <Modal onStopPosting={hideModalVisible} />}
      {isLoginVisible && <Login onClose={hideModalVisible} />}
      {isRegisterVisible && <Register onClose={hideModalVisible} />}
    </>
  );
}

export default App;
