import React from 'react';
import s from './MyPost.module.css'
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let MyPost = (props) =>{
   
   
    let addPostFormRedux = (value) =>{
        props.addPost(value.addNewPost)
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
            <MyPostReduxForm onSubmit={addPostFormRedux}/>
            <div>
                {postElement}
            </div>
        </div>
    )
} 
const maxLength10 = maxLengthCreator(10)
let MyPostForm = (props) =>{
    return(
        <form onSubmit = {props.handleSubmit}>
            <Field name={"addNewPost"} component={Textarea} validate={[required,maxLength10]}/>
            
            <button >Send</button>
        </form>
    )
}
const MyPostReduxForm = reduxForm({form:'myPostForm'})(MyPostForm)
export default MyPost;