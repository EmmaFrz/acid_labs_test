import React, {Component} from 'react';
import PostWrapper from '../../components/post/postWrapper';
import Api from '../../resources/api';

class PostContainer extends Component {
    state = {
        post: {},
        isLoading: true,
        error:null,
        isDeleted:false
    }

    deletePost = async () => {
        this.setState({
            isLoading:true,
            isDeleted:false,
            error:null
        })
        try{
            const response = await Api.deletePost(this.props.match.params.id);
            this.setState({
                isLoading:false,
            })
            console.log(response);
            this.props.history.push('/')
        }catch(error){
            this.setState({
                isDeleted:false,
                isLoading:false,
                error:error
            })
            console.log(error);
        }
    }

    modalHandler = () => {
        this.setState({
            isDeleted: !this.state.isDeleted
        });
    }

    redirectToUpdatePost = (id) => {
        this.props.history.push(`/update/${id}`)
    }

    componentDidMount = async () => {
        this.setState({
            isLoading:true
        });
        try{
            const response = await Api.getPost(this.props.match.params.id);
            this.setState({
                post:response.data.data.post,
                isLoading: false
            });
        }catch(error){
            this.setState({
                isLoading:false,
                error:error
            })
            console.log(error);
        }
    }
    
    render = () => {
        return(
            <PostWrapper 
                post={this.state.post}
                deletePost={this.deletePost}
                redirectToUpdatePost={this.redirectToUpdatePost}
                isLoading={this.state.isLoading}
                modalHandler={this.modalHandler}
                isDeleted={this.state.isDeleted}
            />
        );
    }
}

export default PostContainer;