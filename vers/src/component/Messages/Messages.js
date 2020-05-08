import React from 'react';
import s from './Messages.module.css'
import Names from './Names/Names';
import Dialog from './Dialog/Dialog';
let Messages = (props) =>{
    
    return(
        <div className={s.messages}>
           <Names nameData={props.messagePage.nameData}/>
            <Dialog 
            addDialogActionCreator={props.addDialogActionCreator}
            updateNewDialogTextActionCreator={props.updateNewDialogTextActionCreator}
            dispatch={props.dispatch}
            newDialogText={props.messagePage.newDialogText}
            dialogData={props.messagePage.dialogData}/>

        </div>
    )
}
export default Messages;