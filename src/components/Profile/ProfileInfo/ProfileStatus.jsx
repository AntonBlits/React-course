import React, { useEffect, useRef, useState } from 'react';
import s from './ProfileInfo.module.css';


// class ProfileStatus extends React.Component {

//    state = {
//       editMode: false,
//       status: this.props.status
//    }
//    activateEditMode = () => {
//       this.setState({ editMode: true })
//    }
//    deactivateEditMode = () => {
//       this.setState({ editMode: false })
//       this.props.updateStatus(this.state.status);
//    }
//    onStatusChange = (e) => {
//       this.setState({ status: e.currentTarget.value })
//    }

//    componentDidUpdate(prevProps, prevState) {
//       if (prevProps.status !== this.props.status) {
//          this.setState({
//             status: this.props.status
//          })
//       }
//    }
//    render() {

//       return <div className={s.status}>
//          {this.state.editMode
//             ? <div>
//                <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} />
//             </div>
//             : <div>
//                <span onDoubleClick={this.activateEditMode}>{this.props.status || '___'}</span>
//             </div>}
//       </div>
//    }
// }


const ProfileStatus = (props) => {
   let statusProfile = {
      editMode: false,
      status: props.status
   }
   let [statusUser, setStatusUser] = useState(statusProfile);

   const activateEditMode = () => {
      setStatusUser({ ...statusUser, editMode: true })
   }

   const deactivateEditMode = () => {
      setStatusUser({ ...statusUser, editMode: false });
      props.updateStatus(statusUser.status);
   }

   useEffect(() => {
      setStatusUser({ ...statusUser, status: props.status });
   }, [props.status])


   const onStatusChange = (e) => {
      setStatusUser({ ...statusUser, status: e.target.value })
   }
   return <div className={s.status}>
      {statusUser.editMode
         ? <div>
            <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={statusUser.status} />
         </div>
         : <div>
            <span onDoubleClick={activateEditMode}>{props.status || '___'}</span>
         </div>}
   </div>
}


export default ProfileStatus;