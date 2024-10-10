import {useState} from 'react'
import PostList from './Components/PostList'
import MainHeader from './Components/MainHeader'
function App() {
  const [modalVisible, setModalVisible] = useState(false);
  function hideModalVisible (event) {
    setModalVisible(false);
  }
  function showModalVisible(event){
    setModalVisible(true);
  }
  return <>
  <MainHeader onCreatePost = {showModalVisible}/>
  <PostList onStopPosting = {hideModalVisible} isPosting = {modalVisible}/>
  </>;
}

export default App;