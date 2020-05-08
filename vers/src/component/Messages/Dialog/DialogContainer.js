import React from 'react';

import {addDialogActionCreator, updateNewDialogTextActionCreator} from '../../../Redux/messages-reducer' 
import Dialog from './Dialog';
let DialogContainer = (props) =>{
    let state = props.store.getState();
   
    let onDialogChange= (text) =>{
        let action = updateNewDialogTextActionCreator(text)
        props.store.dispatch(action);
    }
    let addDialog = () =>{
       
        props.store.dispatch(addDialogActionCreator());
    }
    let newDialogElement = React.createRef();

     return(
         <Dialog
         newDialogText={state.messagePage.newDialogText} 
         dialogData={state.messagePage.dialogData}
         addDialog={addDialog}
         updateNewDialogTextActionCreator={onDialogChange}
         />
        
    )
}
export default DialogContainer;