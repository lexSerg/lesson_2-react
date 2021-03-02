import React, {Component} from 'react';


class PostFromJson extends Component {
     render() {
         let {id, title, body} = this.props.post
         return (
             <div className='item-data'>
                 <p className='item-id'>{id}</p>
                 <p><strong>Title:</strong> {title}&nbsp;</p>
                 <p><strong>Body:</strong> {body}&nbsp;</p>
             </div>
         )
     }
};
export default PostFromJson;