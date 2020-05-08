import React from 'react';
import s from './Messages.module.css'

import DialogContainer from './Dialog/DialogContainer';
let Messages = (props) =>{
    
    return(
        <div className={s.messages}>
           
            <DialogContainer
            store={props.store}
            />

        </div>
    )
}
export default Messages;