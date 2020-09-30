import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/header';
import '../css/testStyles.css';

const HomeWrapper = (props) => {
    return(
        <Fragment>
            <Header>
                <Link to='/new'>Nuevo Post</Link>
            </Header>
            <center><h3>Todos los posts</h3></center>
            <div className={'containerPosts'}>
                {props.posts.map( (data, idx) => {
                    return (
                        <center key={idx}>
                            <h6>
                                <Link to={`/post/${data.id}`}>{data.title}</Link> 
                            </h6>
                        </center>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default HomeWrapper;