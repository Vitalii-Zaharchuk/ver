const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT'
let initialState ={
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
}
const messageReducer = (state= initialState,action) =>{
    switch (action.type){
        case ADD_DIALOG:{
            let newDialog = {
                id: 5,
                dialog: state.newDialogText,
            };
            let stateCopy = {...state}
            stateCopy.dialogData=[...state.dialogData]
            stateCopy.dialogData.push(newDialog)
            stateCopy.newDialogText = '';
            return stateCopy;}
        case UPDATE_NEW_DIALOG_TEXT:{
            let stateCopy ={...state}
            stateCopy.newDialogText = action.newText;
            return stateCopy;}
        default:
            return state;  
    }
}
export let addDialogActionCreator = () =>{
    return{
        type: 'ADD-DIALOG'
    }
}
export let updateNewDialogTextActionCreator = (text) =>{
    return{
        type: 'UPDATE-NEW-DIALOG-TEXT',
        newText:text
    }
}
export default messageReducer;