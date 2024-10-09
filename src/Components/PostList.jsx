import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost'
import {useState} from 'react'
import Modal from './Modal'
function PostList (props) {

    let modelContent;

    if(props.isPosting){
        modelContent = (<Modal changeModal = {props.onStopPosting}>
            <NewPost onCancel = {props.onStopPosting}/>
            </Modal>);
    }
    return (
    <>
    {modelContent};
    <ul className = {classes.posts}>
    <Post author = "Kuwar" body = "Hello welcome here!"/>
    </ul>
    </>);
}

export default PostList;