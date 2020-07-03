import React from 'react';
import s from './MyPost.module.css'
let MyPost = (props) =>{
    let PostItem = (props) =>{
        return(
        <p>{props.post}</p>
        )
    }
  
    let postElement = props.postData.map(p =><PostItem post={p.post} id={p.id}/>)
    return(
        <div className={s.myPost}>
            <p>My posts</p>
            <textarea></textarea>
            <button>Send</button>
            <div>
                {postElement}
            </div>
        </div>
    )
} 
export default MyPost;