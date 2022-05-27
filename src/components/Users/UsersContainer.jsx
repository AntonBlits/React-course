import React, { useEffect } from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { getUsers, getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount } from "../../redux/users-selectors";

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
const UsersContainer = ({ requestUsers, currentPage, pageSize,
   users, totalUsersCount, followingInProgress,
   follow, unfollow, isFetching }) => {

   useEffect(() => {
      requestUsers(currentPage, pageSize);
   }, []);

   const onPageChanged = (pageNumber) => {
      requestUsers(pageNumber, pageSize);
   }
   return <>
      {isFetching ? <Preloader /> : null}
      <Users users={users}
         pageSize={pageSize}
         totalUsersCount={totalUsersCount}
         currentPage={currentPage}
         followingInProgress={followingInProgress}
         follow={follow}
         unfollow={unfollow}
         onPageChanged={onPageChanged}
      />
   </>
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      followingInProgress: getFollowingInProgress(state),
   }
}

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })(UsersContainer);