import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../css/testStyles.css'

const PostWrapper = (props) => {
    return(
        <Fragment>
            <Link to='/'>Home</Link>
            <center>
                <h3>Datos del Post</h3>
                <h5>{props.post.title}</h5>
                <p>{props.post.body}</p>
                <button className="distance buttonStyle buttonDelete" onClick={() => props.deletePost(props.post.id)}>Borrar Post</button>
                <button className="distance buttonStyle buttonConfirm" onClick={() => props.redirectToUpdatePost(props.post.id)}>Actualizar Post</button>
            </center>
            
        </Fragment>
    );
};

export default PostWrapper;