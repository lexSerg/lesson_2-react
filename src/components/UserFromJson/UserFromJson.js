import React, {Component} from 'react';
import './UserFromJson.css'

class UserFromJson extends Component {
     render() {
         let {name, id, username} = this.props.user
         return (
             <div className='item-data'>
                 <p className='item-id'>{id}</p>
                 <p><strong>Name:</strong> {name}&nbsp;</p>
                 <p><strong>Username:</strong> {username}&nbsp;</p>
             </div>
         )
     }
};
export default UserFromJson;