import React, {Component} from 'react';
import PostWrapper from '../../components/post/postWrapper';
import Api from '../../resources/api';

class PostContainer extends Component {
    state = {
        post: {},
    }

    deletePost = async () => {
        try{
            const response = await Api.deletePost(this.props.match.params.id);
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

    redirectToUpdatePost = (id) => {
        this.props.history.push(`/update/${id}`)
    }

    componentDidMount = async () => {
        try{
            const response = await Api.getPost(this.props.match.params.id);
            this.setState({
                post:response.data.data.post
            });
        }catch(error){
            console.log(error);
        }
    }
    
    render = () => {
        return(
            <PostWrapper 
                post={this.state.post}
                deletePost={this.deletePost}
                redirectToUpdatePost={this.redirectToUpdatePost}
            />
        );
    }
}

export default PostContainer;