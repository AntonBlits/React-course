import React, { useState } from 'react';
import s from './ProfileInfo.module.css';



// class ProfileStatus extends React.Component {

//    state = {
//       editMode: false
//    }

//    render() {
//       debugger;
//       return <div className={s.status}>
//          {this.state.editMode
//             ? <div>
//                <input autoFocus onBlur={() => this.setState({ editMode: false })} value={this.props.status} />
//             </div>
//             : <div>
//                <span onDoubleClick={() => this.setState({ editMode: true })}>{this.props.status}</span>
//             </div>}
//       </div>
//    }
// }

let stateMode = {
   editMode: false
}
const ProfileStatus = (props) => {

   const [state, setState] = useState(stateMode)


   return <div className={s.status}>
      {state.editMode
         ? <div>
            <input autoFocus onBlur={() => setState({ editMode: false })} value={props.status} />
         </div>
         : <div>
            <span onDoubleClick={() => setState({ editMode: true })}>{props.status}</span>
         </div>}
   </div>
}

export default ProfileStatus;