import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";

let store = {
    rerenderEntireTree  ()  {
        console.log('sd')
    },
    subscribe  (observer)  {
        this._rerenderEntireTree = observer;
    },
    _state: {
        profilePage: {
            postData: [
                { id: 1, post: 'Good' },
                { id: 2, post: 'Fine' },
                { id: 3, post: 'Bad' }
            ],
            newPostText: '123'
        },
        messagePage: {
            nameData: [
                { id: 1, name: 'Igor' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Misha' },
                { id: 4, name: 'Roma' }
            ],
            dialogData: [
                { id: 1, dialog: 'Hello' },
                { id: 2, dialog: 'Bad' },
                { id: 3, dialog: 'Good' },
                { id: 4, dialog: 'Nice' }
            ],
            newDialogText: 'Fan'
        },
    },
    getState(){
        return this._state;

    },
    
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagePage = messageReducer(this._state.messagePage,action);
    }
}



export default store;