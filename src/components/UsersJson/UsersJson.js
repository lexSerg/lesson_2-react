import React, {Component} from 'react';
import UserApiService from '../../services/UserApiService';
import Loader from '../Loader/Loader';
import RadioSearch from '../RadioSerch/RadioSearch';
import UserFromJson from '../UserFromJson/UserFromJson';

class UsersJson extends Component {
    apiService = new UserApiService();
    state = {users : []}
    async componentDidMount() { 
        this.setState({users : await this.apiService.getUsers()})
    }
    render() {
        
        return (
            <div>
                {this.state.users.length === 0 && <Loader/>}
                {this.state.users.length !== 0 && <RadioSearch/>}
                {this.state.users.map( user => {
                   return (<UserFromJson user={user} key={user.id}/>)
                })}
            </div>
        )
    }
}
export default UsersJson