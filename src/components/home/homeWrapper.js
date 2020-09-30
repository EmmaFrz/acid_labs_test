import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/header';
import Loader from '../commons/loader';
import '../css/testStyles.css';

const HomeWrapper = (props) => {
    return(
        <Fragment>
            <Loader isLoading={props.isLoading} />
            <Header>
                <Link to='/new'>Nuevo Post</Link>
            </Header>
            <center>
                <h2>Todos los posts</h2>
            </center>
            <div className={'containerPosts'}>
                {props.posts.map( (data, idx) => {
                    return (
                        <center key={idx}>
                            <h5>
                                <Link to={`/post/${data.id}`}>{data.title}</Link> 
                            </h5>
                        </center>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default HomeWrapper;