import React from 'react';

let rerenderEntireTree = () =>{
    console.log('dd')
}
export let subscribe = (observer) =>{
    rerenderEntireTree = observer
}
let state = {
    profilePage:{
        postData: [
            {id: 1, post: 'I am bad'},
            {id: 2, post: 'I will be to Ukrain'}
        ],
        newPostText:'fd'

    },
    messagePage:{
        nameData:[
            
                {id: 1,name: 'Misha'},
                {id: 2,name: 'Sasha'},
                {id: 3,name: 'Igor'},
                {id: 4,name: 'oleg'}
            
        ],
        dialogData:[
            {id: 1,dialog: 'Hi'},
            {id: 2,dialog: 'Fine'},
            {id: 3,dialog: 'Bad'},
            {id: 4,dialog: 'Good'}
        ],
        newDialogText: 'Greate'
    }
}
export let addPost = () =>{
    let newPost={
        id:3,
        post:state.profilePage.newPostText
    }
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}
export let addDialog = () =>{
    let newDialog = {
        id: 5,
        dialog:state.messagePage.newDialogText
    }
    state.messagePage.dialogData.push(newDialog)
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export let updateNewDialogText = (newText) =>{
    state.messagePage.newDialogText = newText;
    rerenderEntireTree(state)
}
export default state;
