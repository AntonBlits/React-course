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


const ProfileStatus = ({ status, updateStatus }) => {

   let [editMode, setEditMode] = useState(false);
   let [statusUser, setStatus] = useState(status);

   const activateEditMode = () => {
      setEditMode(true);
   }

   const deactivateEditMode = () => {
      setEditMode(false);
      updateStatus(statusUser);
   }

   useEffect(() => {
      setStatus(status);
   }, [status]);


   const onStatusChange = (e) => {
      setStatus(e.target.value)
   }
   return <div className={s.status}>
      {editMode
         ? <div>
            <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={statusUser} />
         </div>
         : <div>
            <span onDoubleClick={activateEditMode}>{status || '___'}</span>
         </div>}
   </div>
}


export default ProfileStatus;