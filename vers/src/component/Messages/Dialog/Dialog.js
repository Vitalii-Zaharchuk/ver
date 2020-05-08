import React from 'react';
import s from './Dialog.module.css'
import {addDialogActionCreator, updateNewDialogTextActionCreator} from '../../../Redux/messages-reducer' 
import Names from '../Names/Names';
let Dialog = (props) =>{

   
    let onDialogChange= () =>{
        let text = newDialogElement.current.value;
        
        props.updateNewDialogTextActionCreator(text);
    }
    let addDialog = () =>{
       
        props.addDialog();
    }
    let newDialogElement = React.createRef();

    
    let DialogItem = (props) =>{
        return(
        <div to={'/dialog/' + props.id}>{props.dialog}</div>
        )
    }
    let dialogElement = props.messagePage.dialogData.
    map(dialog =><DialogItem dialog={dialog.dialog} id={dialog.id}/>)
    return(
        
        <div className={s.dialog}>
            <Names messagePage={props.messagePage}/>
               {dialogElement}
            <textarea ref={newDialogElement} onChange={onDialogChange} value={props.messagePage.newDialogText}></textarea>
            <button onClick={addDialog}>Send</button>
                

         </div>
    )
}
export default Dialog;