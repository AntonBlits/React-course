import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reduser';
import Header from './Header';

const HeaderContainer = (props) => {

   return <Header {...props} />
}

const mapStateToProps = (state) => {
   return {
      login: state.auth.login,
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, { logout })(HeaderContainer)
