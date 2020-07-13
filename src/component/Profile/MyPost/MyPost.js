import React from 'react';
import s from './MyPost.module.css'

let MyPost = (props) =>{
   
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostTextAC(text)
        
    }
    let addPost = () =>{
        props.addPost()
    }
    let newPostElement = React.createRef();
    let PostItem = (props) =>{
        return(
        <p>{props.post}</p>
        )
    }
   
    let postElement = props.profilePage.postData.map(p =><PostItem post={p.post} id={p.id}/>)
   
   
    
    return(
        <div className={s.myPost}>
            <p>My posts</p>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
            <button onClick={addPost}>Send</button>
            <div>
                {postElement}
            </div>
        </div>
    )
} 
export default MyPost;