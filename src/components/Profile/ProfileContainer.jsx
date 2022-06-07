import React, { useEffect } from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
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
//       return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
//    }
// }

const ProfileContainer = ({ getUserProfile, getStatus, profile, status, updateStatus, savePhoto, saveProfile, ...props }) => {

   let userId = useParams().userId;
   if (!userId) {
      userId = props.authorizedUserId;
   }


   useEffect(() => {
      getUserProfile(userId);
      getStatus(userId)
   }, [userId]);

   return <Profile {...props} profile={profile} status={status}
      updateStatus={updateStatus} isOwner={!useParams().userId} savePhoto={savePhoto} saveProfile={saveProfile} />

}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      isAuth: state.auth.isAuth,
      authorizedUserId: state.auth.userId
   }
}

export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
   // withRouter,
   // withAuthRedirect
)(ProfileContainer);