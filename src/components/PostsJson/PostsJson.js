import React, {Component} from 'react';
import PostApiService from '../../services/PostApiService';
import PostFromJson from '../PostFromJson/PostFromJson';
import Loader from '../Loader/Loader';

class PostsJson extends Component {
    postApiService = new PostApiService();
    state = {posts : []}
    async componentDidMount() {
        this.setState({posts : await this.postApiService.getPosts()});
    }
    render() {
        return (
            <div>
                {this.state.posts.length === 0 && <Loader/>}
                {this.state.posts.map(post => <PostFromJson post={post} key={post.id}/>)}
            </div>
        )
    }

}
export default PostsJson