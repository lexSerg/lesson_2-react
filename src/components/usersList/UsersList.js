import React, {Component} from 'react';
import users from '../../data/data';
import User from '../User/User';

class UsersList extends Component {
     render() {
         return (
             <div users-wrap>
                 {
                     users.map( user => {
                       return <User user={user} key={user.id}/>
                     }) 
                 }
             </div>
         )
     }
};
export default UsersList;