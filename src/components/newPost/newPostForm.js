import React, { Fragment } from 'react';
import '../../resources/css/testStyles.css'

const PostForm = (props) => {
    return(
        <Fragment>
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
                <input type='submit' className="buttonStyle buttonConfirm" onClick={props.createNewPost} />
            </center>
        </Fragment>
    );
};

export default PostForm;