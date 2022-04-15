import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";
class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
         });
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
         });
   }
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            isFeatching={this.isFeatching}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingProgress={this.toggleFollowingProgress}
         />
      </>
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
   }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress })(UsersContainer);