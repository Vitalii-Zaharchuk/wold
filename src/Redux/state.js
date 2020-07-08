import React from 'react';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';


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
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this.rerenderEntireTree(this._state)

    }
  
   
    
    
}




export default store;
