import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
class ProfileContainer extends React.Component {
   componentDidMount() {

      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 23380;
      }

      this.props.getUserProfile(userId);
   }
   render() {

      if (!this.props.isAuth) return <Redirect to="/login" />

      return <Profile {...this.props} profile={this.props.profile} />

   }
}

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth,
   }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);