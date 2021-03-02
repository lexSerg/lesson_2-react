import React, {Component} from 'react';
import  './User.css'
import PropTypes from 'prop-types'

class User extends Component {
    state = {userStatus : this.props.user.status}
    changeStatus = (status) => {
        this.props.user.status = !status;
        this.setState({userStatus : this.props.user.status})
    }
     render() {
        let {name, age, status}  = this.props.user;
        const classes = [];
        if (!status) classes.push(' deactive-user');
         return (
                 <div className={`card user-wrap` + classes.join(' ')} >
                    <div className="card-header">
                     <p> User </p>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">name : {name}</h4>
                        <p className="card-text">Status : {status.toString()}</p>
                        <p className="card-text">Age : {age}</p>
                        <button className='btn btn-primary' onClick={() => this.changeStatus(status)}>Change status</button>
                    </div>
                </div>
         )
     }
};
export default User;

User.propTypes = {
    user : PropTypes.object.isRequired
}