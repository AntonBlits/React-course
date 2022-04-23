import React, { useEffect } from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { compose } from 'redux';
class ProfileContainer extends React.Component {
   componentDidMount() {

      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 23380;
      }

      this.props.getUserProfile(userId);
   }
   render() {
      return <Profile {...this.props} profile={this.props.profile} />
   }
}

// const ProfileContainer = (props) => {

//    let params = useParams();

//    if (!params.userId) {
//       params.userId = 23380;
//    }

//    useEffect(() => props.getUserProfile(params.userId));


//    return <Profile {...props} profile={props.profile} />

// }

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth,
   }
}

export default compose(
   connect(mapStateToProps, { getUserProfile }),
   withRouter,
   // withAuthRedirect
)(ProfileContainer);