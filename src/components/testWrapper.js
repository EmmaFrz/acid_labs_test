import React, {Fragment} from 'react';

const TestWrapper = (props) => {
    return(
        <Fragment>
            <center><h3>Todos los posts</h3></center>
            {props.posts.map( data => {
                return (
                    <Fragment>
                        <h6>
                            {data.title} 
                        </h6>
                    </Fragment>
                );
            })}
        </Fragment>
    );
};

export default TestWrapper;