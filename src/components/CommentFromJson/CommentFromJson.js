import React, {Component} from 'react';


class CommentFromJson extends Component {
     render() {
         let {id, name, body} = this.props.comment
         return (
             <div className='item-data'>
                 <p className='item-id'>{id}</p>
                 <p><strong>Title:</strong> {name}&nbsp;</p>
                 <p><strong>Body:</strong> {body}&nbsp;</p>
             </div>
         )
     }
};
export default CommentFromJson;