import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Redirect } from 'react-router-dom';


let mapStateToPropsRedirect = (state) => ({
   isAuth: state.auth.isAuth
});


export const withAuthRedirect = (Component) => {

   const RedirectComponent = (props) => {
      if (!props.isAuth) return <Navigate replase to='/login' />
      return <Component {...props} />

   }

   // class RedirectComponent extends React.Component {
   //    render() {
   //       // if (!this.props.isAuth) return <Redirect to='/login' />
   //       if (!this.props.isAuth) return <Navigate replase to='/login' />
   //       return <Component {...this.props} />
   //    }
   // }
   let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
   return ConnectedAuthRedirectComponent;
}
