import React from 'react';
import { addMessageActionCreate, updateNewMessageTextActionCreate } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => dispatch(addMessageActionCreate()),
      onMessageChange: (text) => dispatch(updateNewMessageTextActionCreate(text))

   }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;