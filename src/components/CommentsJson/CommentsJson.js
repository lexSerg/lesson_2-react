import React, {Component} from 'react';
import CommentApiService from '../../services/CommentApiService';
import Loader from '../Loader/Loader';
import CommentFromJson from '../CommentFromJson/CommentFromJson'

class CommentsJson extends Component {
    commentApiService = new CommentApiService()
    state = {comments : []}
    async componentDidMount() {
        this.setState({comments : await this.commentApiService.getComments()});
    }
    render() {
        return (
            <div>
                {this.state.comments.length === 0 && <Loader/>}
                {this.state.comments.map(comment => <CommentFromJson comment={comment} key={comment.id}/>)}
            </div>
        )
    }

}
export default CommentsJson