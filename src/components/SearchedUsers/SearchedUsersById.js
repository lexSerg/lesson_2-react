import React, {Component, Fragment} from 'react';
import UserApiService from '../../services/UserApiService';
// import Loader from '../Loader/Loader';


class SearchedUsersById extends Component {
    apiService = new UserApiService();
    state = {users : []}
    async componentDidMount() { 
        this.setState({users : await this.apiService.getUsers()})
    }
    render() {
        let {id} = this.props;
        return (
            <div>
                {/* {this.state.users.length === 0 && <Loader/>} */}
                {this.state.users.map( user => {
                   return (      
                       <Fragment key={user.id}>
                        {id === user.id && <p>{user.id})&nbsp;{user.name}</p>} 
                       </Fragment>
                   )
                })}
            </div>
        )
    }
}
export default SearchedUsersById