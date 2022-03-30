import React from 'react';
import { addMessageActionCreate, updateNewMessageTextActionCreate } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let DialogsContainer = (props) => {

   let state = props.store.getState();

   let addMessage = () => {
      props.store.dispatch(addMessageActionCreate());
   }

   let onMessageChange = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreate(text));
   }

   return <Dialogs addMessageActionCreate={addMessage} updateNewMessageTextActionCreate={onMessageChange} dialogsPage={state.dialogsPage} />
}


export default DialogsContainer;