import React, {Component} from 'react';
import Api from '../../resources/api';
import HomeWrapper from '../../components/home/homeWrapper';
class HomeContainer extends Component {
    state = {
        posts: [],
        isLoading: true,
        error:null
    }

    componentDidMount = async () => {
        this.setState({
            isLoading: true,
            error:null
        })
        try{
            const response = await Api.getAll();
            this.setState({
                posts:response.data.data.posts.data,
                isLoading:false
            })
        }catch(error){
            console.log(error);
            this.setState({
                isLoading:false,
                error: error
            })
        }
    }

    render = () => {
        return(
            <HomeWrapper 
                posts={this.state.posts}
                isLoading={this.state.isLoading}
            />
        );
    }
}

export default HomeContainer;