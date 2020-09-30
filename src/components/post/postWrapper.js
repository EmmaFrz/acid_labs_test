import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/header';
import Loader from '../commons/loader';
import '../css/testStyles.css';

const PostWrapper = (props) => {
    console.log(props)
    return(
        <Fragment>
            <Loader isLoading={props.isLoading} />
            <Header>
                <Link to='/'>Inicio</Link>
            </Header>
            <center>
                <div className="containerPost">
                    <h3>Datos del Post</h3>
                    <h5>{props.post.title}</h5>
                    <p>{props.post.body}</p>
                </div>
                <button className="distance buttonStyle buttonDelete" onClick={() => props.deletePost(props.post.id)}>Borrar Post</button>
                <button className="distance buttonStyle buttonConfirm" onClick={() => props.redirectToUpdatePost(props.post.id)}>Actualizar Post</button>
            </center>
            
        </Fragment>
    );
};

export default PostWrapper;