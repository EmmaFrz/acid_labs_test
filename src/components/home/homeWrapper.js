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
                {props.posts.slice(0,12).map( (data, idx) => {
                    return (
                        <center key={idx}>
                            <Link to={`/post/${data.id}`}>
                                <h5>
                                    {data.title}
                                </h5>
                                <img src={props.images[Math.floor(Math.random()*30)].urls.small} alt={idx} width={100} height={100} />
                            </Link>
                        </center>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default HomeWrapper;