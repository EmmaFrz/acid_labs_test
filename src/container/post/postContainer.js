import React, {Component} from 'react';
import PostWrapper from '../../components/post/postWrapper';
import Api from '../../resources/api';

class PostContainer extends Component {
    state = {
        post: {},
    }

    componentDidMount = async () => {
        try{
            const response = await Api.getPost(this.props.match.params.id);
            console.log(response.data.data.post)
            this.setState({
                post:response.data.data.post
            })
        }catch(error){
            console.log(error);
        }
    }
    
    render = () => {
        return(
            <PostWrapper 
                post={this.state.post}
            />
        );
    }
}

export default PostContainer;