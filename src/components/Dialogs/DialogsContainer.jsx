import { addMessageActionCreate, updateNewMessageTextActionCreate } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirecr';

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onAddMessage: () => dispatch(addMessageActionCreate()),
      updateMessageChange: (text) => dispatch(updateNewMessageTextActionCreate(text))

   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs)