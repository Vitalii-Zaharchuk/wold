import React from 'react';
import s from './MyPost.module.css'
let MyPost = () =>{
    let PostItem = (props) =>{
        return(
        <p>{props.post}</p>
        )
    }
    let postData = [
        {id: 1, post: 'I am bad'},
        {id: 2, post: 'I will be to Ukrain'}
        
    ]
    let postElement = postData.map(p =><PostItem post={p.post} id={p.id}/>)
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