import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/header';
import '../css/testStyles.css';

const PostWrapper = (props) => {
    return(
        <Fragment>
            <Header>
                <Link to='/'>Inicio</Link>
            </Header>
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

export default PostWrapper;