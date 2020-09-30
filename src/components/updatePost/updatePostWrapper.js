import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../css/testStyles.css'

const PostWrapper = (props) => {
    return(
        <Fragment>
            <Link to='/'>Home</Link> 
            <Link to={`/post/${props.formValue.id}`} className="distance">Regresar</Link>
            <center>
                <h3>Nuevo Post</h3>
                <label>Titulo</label>
                <br/>
                <input type="text" value={props.formValue.title} name='title' onChange={props.handleChange}/>
                <br/>
                <label>Contenido</label>
                <br/>
                <textarea rows="4" cols="50" value={props.formValue.body} name='body' onChange={props.handleChange}>
                </textarea>
                <br/>
                <input type='submit' className="buttonStyle buttonConfirm" onClick={props.updatePost} /> 
            </center>
            
        </Fragment>
    );
};

export default PostWrapper;