import React, {Component, Fragment} from 'react';
import UserApiService from '../../services/UserApiService';

class SearchedUsersByName extends Component {
    apiService = new UserApiService();
    state = {users : []}
    async componentDidMount() { 
        this.setState({users : await this.apiService.getUsers()})
    }
    render() {
        let {name} = this.props;
        console.log(name);
        return (
            <div>
                {/* {this.state.users.length === 0 && <Loader/>} */}
                {this.state.users.map( user => {
                   return (      
                    //    <Fragment key={user.id}>
                    //     {name === user.name && <p>{user.id})&nbsp;{user.name}</p>} 
                    //    </Fragment>
                       <Fragment key={user.id}>
                        {user.name.toLowerCase().includes(name.toLowerCase()) && <p>{user.id})&nbsp;{user.name}</p>} 
                       </Fragment>
                   )
                })}
            </div>
        )
    }
}
export default SearchedUsersByName