import React from 'react';
import s from './MyPost.module.css'
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer';
let MyPost = (props) =>{
   
   
    let PostItem = (props) =>{
        return(
        <p>{props.post}</p>
        )
    }
   let newPostElement = React.createRef();
    let postElement = props.postData.map(p =><PostItem post={p.post} id={p.id}/>)
    let addPost = () =>{
        
        props.dispatch(addPostAC())
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextAC(text)
        props.dispatch(action)
    }
    return(
        <div className={s.myPost}>
            <p>My posts</p>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            <button onClick={addPost}>Send</button>
            <div>
                {postElement}
            </div>
        </div>
    )
} 
export default MyPost;