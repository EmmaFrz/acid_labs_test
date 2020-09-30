import React, {Component} from 'react';
import NewPostWrapper from '../../components/newPost/newPostWrapper';
import Api from '../../resources/api';

class PostContainer extends Component {
    state = {
        formValue: {
            title: '',
            body:''
        },
        isLoading: false,
        error:null
    }

    createNewPost = async () => {
        this.setState({
            isLoading: true,
            error:null
        });
        const input = {
            title: this.state.formValue.title,
            body: this.state.formValue.body
        }
        try {
            const response = await Api.createPost(input);
            this.setState({
                isLoading: false,
            })
            console.log(response);
            
        } catch (error) {
            this.setState({
                isLoading: false,
                error:null
            })
            console.log(error);
        }
    }

    // eslint-disable-next-line no-restricted-globals
    handleChange = (event) => {
        // eslint-disable-next-line no-restricted-globals
        switch(event.target.name){
            case 'title':
                this.setState({
                    formValue:{
                        ...this.state.formValue,
                        // eslint-disable-next-line no-restricted-globals
                        [event.target.name]: event.target.value
                    }
                });
                break;
            case 'body':
                this.setState({
                    formValue:{
                        ...this.state.formValue,
                        // eslint-disable-next-line no-restricted-globals
                        [event.target.name]: event.target.value
                    }
                });
                break;
            default:
                break;
        }
    }
    
    render = () => {
        return(
            <NewPostWrapper
                isLoading={this.state.isLoading}
                formValue={this.state.formValue}
                handleChange={this.handleChange}
                createNewPost={this.createNewPost}
            />
        );
    }
}

export default PostContainer;