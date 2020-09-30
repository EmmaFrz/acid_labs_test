import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/header';
import Loader from '../commons/loader';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../css/testStyles.css';

const PostWrapper = (props) => {
    return(
        <Fragment>
            <Loader isLoading={props.isLoading} />
            <Header>
                <Link to='/'>Inicio</Link> 
                <Link to={`/post/${props.formValue.id}`} className="distance">Regresar</Link>
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
                <input type='submit' className="buttonStyle buttonConfirm" onClick={props.updatePost} /> 
            </center>
            <Modal open={props.isDeleted} onClose={() => props.returnFormModal()} center>
                <h4>Se ha actualizado el post correctamente</h4>
                <center>
                    <button className="distance buttonStyle buttonConfirm" onClick={() => props.returnFormModal()}>Aceptar</button>
                </center>
            </Modal>
        </Fragment>
    );
};

export default PostWrapper;