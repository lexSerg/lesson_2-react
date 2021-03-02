import React, {Component} from 'react';
import './RadioSearch.css';

class RadioSearch extends Component {

    render() {
        return (
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    Search
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <a class="dropdown-item" href="#!">Action</a>
                    <a class="dropdown-item" href="#!">Another action</a>
                </div>
            </div>

        )
    }

}
export default RadioSearch