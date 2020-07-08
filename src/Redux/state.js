import React from 'react';


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, post: 'I am bad' },
                { id: 2, post: 'I will be to Ukrain' }
            ],
            newPostText: 'fd'

        },
        messagePage: {
            nameData: [

                { id: 1, name: 'Misha' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Igor' },
                { id: 4, name: 'oleg' }

            ],
            dialogData: [
                { id: 1, dialog: 'Hi' },
                { id: 2, dialog: 'Fine' },
                { id: 3, dialog: 'Bad' },
                { id: 4, dialog: 'Good' }
            ],
            newDialogText: 'Greate'
        }
    },
    getState(){
        return this._state
    },
    rerenderEntireTree  () {
        console.log('dd')
    },
    subscribe  (observer) {
        this.rerenderEntireTree = observer
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost={
                id:3,
                post: this.getState().profilePage.newPostText
            }
            this.getState().profilePage.postData.push(newPost);
            this.rerenderEntireTree(this.getState());
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this.getState().profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this.getState())
        }else if(action.type === 'ADD-DIALOG'){
            let newDialog = {
                id: 5,
                dialog: this.getState().messagePage.newDialogText
            }
            this.getState().messagePage.dialogData.push(newDialog)
            this.rerenderEntireTree(this.getState())
        }else if (action.type === 'UPDATE-NEW-DIALOG-TEXT'){
            this.getState().messagePage.newDialogText = action.newText;
        this.rerenderEntireTree(this.getState())
        } 

    }
  
   
    
    
}


export default store;
