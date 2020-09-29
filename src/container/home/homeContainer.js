import React, {Component} from 'react';
import Api from '../../resources/api';
import HomeWrapper from '../../components/home/homeWrapper';
class HomeContainer extends Component {
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
            <HomeWrapper 
                posts={this.state.posts}
            />
        );
    }
}

export default HomeContainer;