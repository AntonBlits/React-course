import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reduser';
import Header from './Header';

class HeaderContainer extends React.Component {
   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
         {
            withCredentials: true,
            headers: {
               'API-KEY': '5400d653-6750-4332-9550-92553efe8c85',
            },
         })
         .then(response => {
            if (response.data.resultCode === 0) {
               this.props.setAuthUserData(response.data.data);
            }
         })
   }
   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = (state) => {
   return {
      login: state.auth.login,
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
