import React, {Component} from 'react';
import UpdatePostWrapper from '../../components/updatePost/updatePostWrapper';
import Api from '../../resources/api';

class PostContainer extends Component {
    state = {
        formValue: {
            title:'',
            body:'',
            id:''
        },
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

    updatePost = async () => {
        const input = {
            title:this.state.formValue.title,
            body:this.state.formValue.body,
            id: this.state.formValue.id
        }
        try {
            const response = await Api.updatePost(input)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = async () => {
        try{
            const response = await Api.getPost(this.props.match.params.id);
            this.setState({
                formValue:response.data.data.post
            });
        }catch(error){
            console.log(error);
        }
    }
    
    render = () => {
        return(
            <UpdatePostWrapper 
                formValue={this.state.formValue}
                handleChange={this.handleChange}
                updatePost={this.updatePost}
            />
        );
    }
}

export default PostContainer;