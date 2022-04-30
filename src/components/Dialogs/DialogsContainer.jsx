import { addMessageActionCreate } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onAddMessage: (newMessageText) => dispatch(addMessageActionCreate(newMessageText)),

   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs)