import React, { useEffect } from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { compose } from 'redux';

// class ProfileContainer extends React.Component {
//    componentDidMount() {

//       let userId = this.props.match.params.userId;
//       if (!userId) {
//          userId = 23380;
//       }

//       this.props.getUserProfile(userId);
//       this.props.getStatus(userId);
//    }
//    render() {
//       return <Profile {...this.props} profile={this.props.profile} />
//    }
// }

const ProfileContainer = (props) => {
   let userId = useParams().userId;
   if (!userId) {
      userId = props.authorizedUserId;
   }
   useEffect(() => {
      props.getUserProfile(userId);
      props.getStatus(userId)
   }, []);

   return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

}

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      isAuth: state.auth.isAuth,
      authorizedUserId: state.auth.userId
   }
}

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   // withRouter,
   // withAuthRedirect
)(ProfileContainer);