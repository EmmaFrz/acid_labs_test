import React, {Component} from 'react';
import Api from '../resources/api';
class TestContainer extends Component {
    
    componentDidMount = async () => {
        try{
            const response = await Api.getAll();
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    
    render = () => {
        return(
            <div>
                This is a test
            </div>
        );
    }
}

export default TestContainer;