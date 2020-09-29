import React, {Component} from 'react';
import Api from '../resources/api';
import TestWrapper from '../components/testWrapper';

class TestContainer extends Component {
    state = {
        posts: [],
    }

    componentDidMount = async () => {
        try{
            const response = await Api.getAll();
            this.setState({
                posts:response.data.data.posts.data
            })
        }catch(error){
            console.log(error);
        }
    }
    
    render = () => {
        return(
            <TestWrapper 
                posts={this.state.posts}
            />
        );
    }
}

export default TestContainer;