import React, {Component} from 'react';
import SearchedUsersById from '../SearchedUsers/SearchedUsersById';
import SearchedUsersByName from '../SearchedUsers/SearchedUsersByName';
import './RadioSearch.css';

class RadioSearch extends Component {
    state = ({toggleSelect : false, toggleInpt : '', isDataId : false, isDataName : false, userId : NaN, userName : ''});
    showSelect = () => {
        this.setState({toggleSelect : !this.state.toggleSelect});
        this.setState({isDataId : false, isDataName : false,})
    }
    showInpt = (id) => {
        if (id === 'id') this.setState({toggleInpt : 'id'});
        if (id === 'name') this.setState({toggleInpt : 'name'});
        this.setState({toggleSelect : false});
    };
    inputHandlerId = (value) => {
        this.setState({isDataId : true});
        this.setState({userId : +value});
        if (value === '' | NaN | 0 ) this.setState({isDataId : false});
        console.log(value);
    };
    inputHandlerName = (value) => {
        this.setState({isDataName : true});
        this.setState({userName : value});
        if (value === '' | NaN | 0 ) this.setState({isDataName : false});
        console.log(value);
    }
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle"
                        type="button" 
                        id="dropdownBtn1"
                        onClick={() => this.showSelect()}
                        >
                    Search
                </button >
                {this.state.toggleSelect &&               
                    (<div className='select-container' onClick={(event) => this.showInpt(event.target.id)}>
                        <div className='select' id='id'>Search by Id</div>
                        <div className='select' id='name'>Search by Name</div>
                    </div>
                    ) 
                }
                {this.state.toggleInpt === 'id' &&  
                <input type="text" 
                        className="form-control" 
                        placeholder="ID"
                        onChange={(event)=> this.inputHandlerId(event.target.value)}
                        >
                </input>}

                {this.state.toggleInpt === 'name' &&  
                <input type="text" 
                        className="form-control" 
                        placeholder="Name"
                        onChange={(event)=> this.inputHandlerName(event.target.value)}>
                </input>}

                {this.state.isDataId && 
                    (<div className='searched-users'>
                        <SearchedUsersById id={this.state.userId}/>
                    </div>)
                }
                {this.state.isDataName && 
                    (<div className='searched-users'>
                        <SearchedUsersByName name={this.state.userName}/>
                    </div>)
                }
                

            </div>

        )
    }

}
export default RadioSearch