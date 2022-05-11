import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reduser';
import Header from './Header';

// class HeaderContainer extends React.Component {
//    componentDidMount() {
//       this.props.getAuthUserData();
//    }
//    render() {
//       return <Header {...this.props} />
//    }
// }
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
