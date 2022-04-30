import React, { useEffect } from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

// class UsersContainer extends React.Component {
//    componentDidMount() {
//       this.props.getUsers(this.props.currentPage, this.props.pageSize);

//    }
//    onPageChanged = (pageNumber) => {
//       this.props.getUsers(pageNumber, this.props.pageSize);
//    }
//    render() {
//       return <>
//          {this.props.isFetching ? <Preloader /> : null}
//          <Users users={this.props.users}
//             pageSize={this.props.pageSize}
//             totalUsersCount={this.props.totalUsersCount}
//             currentPage={this.props.currentPage}
//             followingInProgress={this.props.followingInProgress}
//             follow={this.props.follow}
//             unfollow={this.props.unfollow}
//             onPageChanged={this.onPageChanged}
//          />
//       </>
//    }
// }
const UsersContainer = (props) => {

   useEffect(() => {
      props.getUsers(props.currentPage, props.pageSize);
   }, []);

   const onPageChanged = (pageNumber) => {
      props.getUsers(pageNumber, props.pageSize);
   }
   return <>
      {props.isFetching ? <Preloader /> : null}
      <Users users={props.users}
         pageSize={props.pageSize}
         totalUsersCount={props.totalUsersCount}
         currentPage={props.currentPage}
         followingInProgress={props.followingInProgress}
         follow={props.follow}
         unfollow={props.unfollow}
         onPageChanged={onPageChanged}
      />
   </>
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      followingInProgress: state.usersPage.followingInProgress
   }
}

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersContainer);