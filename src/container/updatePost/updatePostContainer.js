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
        isLoading: true,
        error:null,
        isDeleted:false
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
        this.setState({
            isLoading:true
        });
        const input = {
            title:this.state.formValue.title,
            body:this.state.formValue.body,
            id: this.state.formValue.id
        }
        try {
            const response = await Api.updatePost(input)
            this.setState({
                isLoading:false,
                isDeleted:true,
            });
        } catch (error) {
            this.setState({
                isLoading:false,
                error:error
            });
            console.log(error)
        }
    }

    returnFormModal = () => {
        this.props.history.push(`/post/${this.props.match.params.id}`);
    }

    componentDidMount = async () => {
        this.setState({
            isLoading:true
        });
        try{
            const response = await Api.getPost(this.props.match.params.id);
            this.setState({
                formValue:response.data.data.post,
                isLoading:false
            });
        }catch(error){
            this.setState({
                isLoading:false,
                error:error
            });
            console.log(error);
        }
    }
    
    render = () => {
        return(
            <UpdatePostWrapper 
                formValue={this.state.formValue}
                handleChange={this.handleChange}
                updatePost={this.updatePost}
                returnFormModal={this.returnFormModal}
                isLoading={this.state.isLoading}
                isDeleted={this.state.isDeleted}
            />
        );
    }
}

export default PostContainer;