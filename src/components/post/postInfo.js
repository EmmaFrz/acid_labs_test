import React, { Fragment } from 'react';
import '../../resources/css/testStyles.css'

const PostInfo = (props) => {
    return(
        <Fragment>
            <center>
                <div className="containerPost">
                    <h3>Datos del Post</h3>
                    <h5>{props.post.title}</h5>
                    <p>{props.post.body}</p>
                </div>
                <button className="distance buttonStyle buttonDelete" onClick={() => props.modalHandler()}>Borrar Post</button>
                <button className="distance buttonStyle buttonConfirm" onClick={() => props.redirectToUpdatePost(props.post.id)}>Actualizar Post</button>
            </center>
        </Fragment>
    );
};

export default PostInfo;